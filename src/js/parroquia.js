// src/js/parroquia.js - Módulo de Parroquia y Preparaciones de Eucaristía para Resucitó v2

import { auth, db } from '../firebase.js';
import { 
    doc, setDoc, getDoc, deleteDoc, updateDoc,
    collection, query, onSnapshot, orderBy, serverTimestamp,
    where, getDocs, limit, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { loginConGoogle } from '../auth.js';
import { songs } from '../songs-data.js';
import { parseChord, transposeNote } from '../chords.js';

// --- CONSTANTES Y CONFIGURACIÓN ---
const SUPER_ADMIN_EMAIL = 'dbaezh78@gmail.com';
const MAPA_ETIQUETAS = {
    "Entrada": "E",
    "Paz": "P",
    "Liturgia": "L",
    "Litúrgico": "L",
    "Liturgico": "L",
    "Cuerpo": "C",
    "Sangre": "S",
    "Comunión": "CS",
    "Comunion": "CS",
    "Final": "F"
};

// --- VARIABLES DE ESTADO ---
let usuarioActual = null;
let parroquiaActiva = null;
let preparacionActiva = null; // Preparación que se está editando / asignando
let cantosSeleccionados = []; // [{ id, etiqueta, cantor, acorde, cejilla, nota, tono }]
let preparacionesParroquia = [];
let todasLasParroquias = [];
let usuariosRegistradosCache = [];

let autoguardadoActivo = localStorage.getItem('parroquia_autoguardado') !== 'false';
let timerAutoguardado = null;
let momentoSeleccionado = 'Libre';

let unsubscribeParroquiaSnap = null;
let unsubscribePrepsSnap = null;

// Catálogo de cantos visibles
const todosLosCantos = Array.isArray(songs) 
    ? songs.filter(canto => canto.visible !== "index") 
    : [];

// Normalizador de texto para búsquedas
const normalizarTexto = (texto) => {
    if (!texto) return "";
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ñ/g, "n")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
};

// --- ORDEN LITÚRGICO Y JERARQUÍA DE CANTOS EN LA EUCARISTÍA ---
// 1. Canto de Entrada = E
// 2. Gloria a Dios en lo alto del cielo siempre en 2do lugar por defecto (aunque sea L)
// 3. Canto de paz = P en 3er lugar
// 4. Demás cantos litúrgicos = L
// 5. Cuerpo = C, luego Sangre = S, luego Comunión = CS
// 6. Canto final = F
export function esCantoGloria(item) {
    if (!item) return false;
    const songId = String(typeof item === 'object' ? item.id : item || '').toLowerCase().trim();
    if (songId === 'gloriaadiosenloaltodelcielo') return true;
    const songMeta = todosLosCantos.find(c => String(c.id).toLowerCase().trim() === songId);
    if (songMeta) {
        const idMeta = String(songMeta.id || '').toLowerCase().trim();
        const tit = normalizarTexto(songMeta.title || songMeta.titulo || '');
        if (idMeta === 'gloriaadiosenloaltodelcielo' || tit.startsWith('gloria a dios en lo alto del cielo')) {
            return true;
        }
    }
    return false;
}

export function obtenerPesoLiturgico(item) {
    if (!item) return 999;
    const tag = String(item.etiqueta || item.tag || '').trim().toUpperCase();

    // 1. Canto de Entrada = E
    if (tag === 'E') return 10;

    // 2. Gloria a Dios en lo alto del cielo (2do lugar por defecto)
    if (esCantoGloria(item)) return 20;

    // 3. Canto de paz = P (3er lugar)
    if (tag === 'P') return 30;

    // 4. Demás cantos litúrgicos = L
    if (tag === 'L') return 40;

    // 5. Cuerpo = C, Sangre = S, Comunión = CS
    if (tag === 'C') return 50;
    if (tag === 'S') return 60;
    if (tag === 'CS') return 70;

    // 6. Canto final = F
    if (tag === 'F') return 80;

    // Números libres (1, 2, 3...)
    const num = parseInt(tag, 10);
    if (!isNaN(num)) return 100 + num;
    return 200;
}

export function ordenarCantosPorLiturgia(lista) {
    if (!Array.isArray(lista)) return;
    lista.sort((a, b) => {
        const pesoA = obtenerPesoLiturgico(a);
        const pesoB = obtenerPesoLiturgico(b);
        if (pesoA !== pesoB) return pesoA - pesoB;
        return 0;
    });
}

export function cantoPerteneceAMomento(canto, momento) {
    if (!canto || !canto.moments || !Array.isArray(canto.moments)) return false;
    if (!momento || momento === 'Libre') return false;
    if (canto.moments.includes(momento)) return true;
    if (momento === 'Cuerpo' || momento === 'Sangre' || momento === 'Comunión' || momento === 'Comunion') {
        return canto.moments.includes('Comunión') || canto.moments.includes('Fracción Del Pan');
    }
    return false;
}

// --- GENERADOR Y FORMATEADOR DE CÓDIGO DE 16 CARACTERES ---
export function generarCodigo16() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Excluye 0, O, 1, I para evitar confusiones
    let res = '';
    for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) res += '-';
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

export function normalizarCodigo16(code) {
    if (!code) return '';
    return code.replace(/[\s-]/g, '').toUpperCase();
}

// Formatear automáticamente mientras el usuario escribe en el input
function formatearInputCodigo(input) {
    if (!input) return;
    input.addEventListener('input', (e) => {
        let val = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 16);
        let formateado = '';
        for (let i = 0; i < val.length; i++) {
            if (i > 0 && i % 4 === 0) formateado += '-';
            formateado += val[i];
        }
        input.value = formateado;
    });
}

// --- UTILIDADES DE TRANSPOSICIÓN ---
export function calcularTonoTranspuesto(songId, acordeOffset) {
    const offset = parseInt(acordeOffset) || 0;
    const song = todosLosCantos.find(s => String(s.id) === String(songId));
    const baseChordStr = (song && song.acorde) ? song.acorde : 'La';
    if (offset === 0) return baseChordStr;
    const parsed = parseChord(baseChordStr);
    const trans = transposeNote(parsed.noteName, offset);
    return trans + (parsed.typeSuffix ? (' ' + parsed.typeSuffix) : '');
}

// --- VERIFICACIÓN DE ROLES ---
export function puedeVerCodigoDeParroquia(parr, user) {
    if (!parr || !user) return false;
    const email = (user.email || '').toLowerCase().trim();
    if (email === SUPER_ADMIN_EMAIL) return true;

    // Verificar si es el Cantor Encargado explícito
    if (parr.cantorEncargadoEmail && parr.cantorEncargadoEmail.toLowerCase().trim() === email) {
        return true;
    }

    // Verificar en lista de miembros si tiene rol encargado o admin
    if (Array.isArray(parr.miembros)) {
        const miembro = parr.miembros.find(m => 
            (m.uid && m.uid === user.uid) || 
            (m.email && m.email.toLowerCase().trim() === email)
        );
        if (miembro && (miembro.rol === 'encargado' || miembro.rol === 'admin')) {
            return true;
        }
    }

    return false;
}

// Verificar si un usuario es Encargado o Asistente asignado
export function esEncargadoOAsistente(parr, user) {
    if (!user) return false;
    const email = (user.email || '').toLowerCase().trim();
    if (email === SUPER_ADMIN_EMAIL) return true;
    if (!parr) return false;

    // Verificar si es el Cantor Encargado explícito
    if (parr.cantorEncargadoEmail && parr.cantorEncargadoEmail.toLowerCase().trim() === email) {
        return true;
    }

    // Verificar en lista de miembros si tiene rol encargado, admin o asistente
    if (Array.isArray(parr.miembros)) {
        const miembro = parr.miembros.find(m => 
            (m.uid && m.uid === user.uid) || 
            (m.email && m.email.toLowerCase().trim() === email)
        );
        if (miembro && (miembro.rol === 'encargado' || miembro.rol === 'admin' || miembro.rol === 'asistente')) {
            return true;
        }
    }

    return false;
}

function esAdminOEncargado() {
    const user = usuarioActual || auth.currentUser;
    if (!user || !parroquiaActiva) return false;
    return puedeVerCodigoDeParroquia(parroquiaActiva, user);
}

function puedeGestionarPreparacionesYCantores() {
    const user = usuarioActual || auth.currentUser;
    if (!user || !parroquiaActiva) return false;
    return esEncargadoOAsistente(parroquiaActiva, user);
}

function esMiembroDeParroquia(parr, user) {
    if (!parr || !user) return false;
    if (user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL) return true;
    if (parr.creadorUid === user.uid || parr.creadorEmail === user.email) return true;
    const miembro = (parr.miembros || []).find(m => 
        (m.uid && m.uid === user.uid) || 
        (m.email && m.email.toLowerCase().trim() === user.email?.toLowerCase().trim())
    );
    return !!miembro;
}

function obtenerRolEnParroquia() {
    const user = usuarioActual || auth.currentUser;
    if (!user) return 'invitado';
    if (!parroquiaActiva) return 'invitado';

    const email = (user.email || '').toLowerCase().trim();

    // El Administrador General solicitó explícitamente figurar visualmente como 'cantor'
    // en la parroquia, manteniendo el 100% de los privilegios administrativos en toda la aplicación.
    if (email === SUPER_ADMIN_EMAIL) {
        return 'cantor';
    }

    if (parroquiaActiva.cantorEncargadoEmail && parroquiaActiva.cantorEncargadoEmail.toLowerCase().trim() === email) {
        return 'encargado';
    }

    const miembro = (parroquiaActiva.miembros || []).find(m => 
        (m.uid && m.uid === user.uid) || 
        (m.email && m.email.toLowerCase().trim() === email)
    );

    if (miembro && (miembro.rol === 'encargado' || miembro.rol === 'admin')) return 'encargado';
    if (miembro && miembro.rol === 'asistente') return 'asistente';
    return miembro ? (miembro.rol || 'cantor') : 'cantor';
}

// Obtener catálogo unificado de nombres de cantores disponibles en la parroquia activa
export function obtenerListaNombresCantores() {
    const cantoresSet = new Set();

    // 1. Cantor encargado registrado en la parroquia
    if (parroquiaActiva?.cantorEncargadoNombre) {
        const nom = parroquiaActiva.cantorEncargadoNombre.trim();
        if (nom) cantoresSet.add(nom);
    }

    // 2. Miembros registrados de la parroquia
    if (Array.isArray(parroquiaActiva?.miembros)) {
        parroquiaActiva.miembros.forEach(m => {
            const nom = m.displayName || m.nombre || (m.email ? m.email.split('@')[0] : '');
            if (nom && typeof nom === 'string' && nom.trim()) {
                cantoresSet.add(nom.trim());
            }
        });
    }

    // 3. Usuario actual en sesión
    const user = usuarioActual || auth.currentUser;
    if (user) {
        const miNombre = user.displayName || (user.email ? user.email.split('@')[0] : '');
        if (miNombre && typeof miNombre === 'string' && miNombre.trim()) {
            cantoresSet.add(miNombre.trim());
        }
    }

    // 4. Cantores previamente registrados en cualquier preparación de la parroquia
    if (Array.isArray(preparacionesParroquia)) {
        preparacionesParroquia.forEach(p => {
            (p.cantos || []).forEach(c => {
                if (c && c.cantor && typeof c.cantor === 'string') {
                    const cTrim = c.cantor.trim();
                    if (cTrim && cTrim !== 'Sin cantor') {
                        cantoresSet.add(cTrim);
                    }
                }
            });
        });
    }

    const lista = Array.from(cantoresSet).filter(Boolean);
    lista.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
    return lista;
}

// --- GESTIÓN DE VISTAS (NO AUTH / SIN PARROQUIA / PARROQUIA ACTIVA) ---
function actualizarVisibilidadAdmin() {
    const user = usuarioActual || auth.currentUser;
    const esSuperAdmin = (user?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    const boxCrear = document.getElementById('box-admin-crear-parroquia');
    if (boxCrear) boxCrear.style.display = esSuperAdmin ? 'block' : 'none';

    const btnAdminParr = document.getElementById('btn-abrir-admin-parroquias');
    if (btnAdminParr) btnAdminParr.style.display = esSuperAdmin ? 'inline-flex' : 'none';
}

function mostrarVista(vistaNombre) {
    const vNoAuth = document.getElementById('vista-no-auth');
    const vSinParroquia = document.getElementById('vista-sin-parroquia');
    const vParroquiaActiva = document.getElementById('vista-parroquia-activa');

    if (vNoAuth) vNoAuth.style.display = (vistaNombre === 'no-auth') ? 'block' : 'none';
    if (vSinParroquia) vSinParroquia.style.display = (vistaNombre === 'sin-parroquia') ? 'block' : 'none';
    if (vParroquiaActiva) vParroquiaActiva.style.display = (vistaNombre === 'parroquia-activa') ? 'block' : 'none';

    actualizarVisibilidadAdmin();
}

function actualizarHeaderUsuario(user) {
    actualizarVisibilidadAdmin();
    const contenedor = document.getElementById('usuario-sesion-header');
    if (!contenedor) return;

    if (!user) {
        contenedor.innerHTML = '';
        return;
    }

    const foto = user.photoURL 
        ? `<img src="${user.photoURL}" alt="${user.displayName || 'Usuario'}" style="width: 32px; height: 32px; border-radius: 50%; border: 1.5px solid var(--accent-color, #d01212);">`
        : `<span class="material-symbols-outlined" style="font-size: 32px; color: var(--text-muted, #666);">account_circle</span>`;

    contenedor.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 600;">
            ${foto}
            <span class="user-name-header" style="max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${user.displayName || user.email}</span>
        </div>
    `;
}

// --- CARGAR PARROQUIAS DESDE FIRESTORE CON RESPALDO LOCAL ---
let unsubscribeColeccionParroquiasSnap = null;

export function iniciarEscuchaColeccionParroquias() {
    if (unsubscribeColeccionParroquiasSnap) return;
    try {
        const q = collection(db, "parroquias");
        unsubscribeColeccionParroquiasSnap = onSnapshot(q, (snapshot) => {
            const remotas = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            if (remotas.length > 0) {
                const mapa = new Map();
                todasLasParroquias.forEach(p => {
                    if (p.id) mapa.set(p.id, p);
                });
                remotas.forEach(p => {
                    const local = mapa.get(p.id) || {};
                    mapa.set(p.id, { ...local, ...p });
                });

                // Deduplicar también por clave normalizada (nombre + sector)
                const mapaClave = new Map();
                for (const p of mapa.values()) {
                    const clave = `${normalizarTexto(p.nombre)}|${normalizarTexto(p.sector || '')}`;
                    mapaClave.set(clave, p);
                }

                todasLasParroquias = Array.from(mapaClave.values());
                todasLasParroquias.sort((a, b) => (a.nombre || '').localeCompare(b.nombre || '', 'es', { sensitivity: 'base' }));

                try {
                    localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
                } catch(e) {}

                // Actualizar parroquiaActiva si está en memoria
                if (parroquiaActiva) {
                    const freshActiva = todasLasParroquias.find(p => p.id === parroquiaActiva.id);
                    if (freshActiva) {
                        parroquiaActiva = { ...parroquiaActiva, ...freshActiva };
                    }
                }

                // Si un usuario estaba sin parroquia y acaba de ser aceptado como miembro, activar automáticamente
                if (!parroquiaActiva && usuarioActual && (usuarioActual.email || '').toLowerCase().trim() !== SUPER_ADMIN_EMAIL) {
                    const recienAprobada = todasLasParroquias.find(p => esMiembroDeParroquia(p, usuarioActual));
                    if (recienAprobada) {
                        activarParroquia(recienAprobada);
                    }
                }

                poblarSelectParroquiasDisponibles();
                renderizarBarraParroquiaActiva();
                actualizarBotonEntrarParroquiaSeleccionada();

                // Actualizar modal de miembros si está abierto
                const modalM = document.getElementById('modal-gestionar-miembros');
                if (modalM && modalM.style.display === 'flex') {
                    poblarSelectorParroquiaModalMiembros();
                    renderizarPestaniasMiembros();
                }

                // Actualizar modal de gestión de parroquias si está abierto
                const modalA = document.getElementById('modal-admin-parroquias');
                if (modalA && modalA.style.display === 'flex') {
                    renderizarListadoAdminParroquias();
                }
            }
        }, (err) => {
            console.warn("Aviso en escucha en vivo de colección parroquias:", err);
        });
    } catch (e) {
        console.warn("No se pudo iniciar escucha de parroquias:", e);
    }
}

async function cargarTodasLasParroquias() {
    // 1. Cargar inmediatamente desde cache o json
    if (todasLasParroquias.length === 0) {
        try {
            const rawCache = localStorage.getItem('resucito_parroquias_cache');
            if (rawCache) {
                todasLasParroquias = JSON.parse(rawCache);
                if (todasLasParroquias.length > 0) poblarSelectParroquiasDisponibles();
            }
        } catch(e) {}

        if (todasLasParroquias.length === 0) {
            try {
                const resp = await fetch('./data/parroquias.json');
                if (resp.ok) {
                    todasLasParroquias = await resp.json();
                    poblarSelectParroquiasDisponibles();
                }
            } catch(e) {}
        }
    }

    try {
        const fetchPromise = getDocs(collection(db, "parroquias"));
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 4000));
        const snap = await Promise.race([fetchPromise, timeoutPromise]);
        
        const remotas = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (remotas.length > 0) {
            const mapa = new Map();
            todasLasParroquias.forEach(p => {
                if (p.id) mapa.set(p.id, p);
            });
            remotas.forEach(p => {
                const local = mapa.get(p.id) || {};
                mapa.set(p.id, { ...local, ...p });
            });

            const mapaClave = new Map();
            for (const p of mapa.values()) {
                const clave = `${normalizarTexto(p.nombre)}|${normalizarTexto(p.sector || '')}`;
                mapaClave.set(clave, p);
            }

            todasLasParroquias = Array.from(mapaClave.values());
            todasLasParroquias.sort((a, b) => (a.nombre || '').localeCompare(b.nombre || '', 'es', { sensitivity: 'base' }));

            try {
                localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
            } catch(e) {}

            // Actualizar parroquiaActiva si existe
            if (parroquiaActiva) {
                const fresh = todasLasParroquias.find(p => p.id === parroquiaActiva.id);
                if (fresh) {
                    parroquiaActiva = { ...parroquiaActiva, ...fresh };
                }
            }
        }

        poblarSelectParroquiasDisponibles();
        renderizarBarraParroquiaActiva();
        actualizarBotonEntrarParroquiaSeleccionada();
        return todasLasParroquias;
    } catch (e) {
        if (e.message !== 'timeout') console.warn("Error sincronizando lista de parroquias con Firestore:", e);
        if (todasLasParroquias.length > 0) {
            poblarSelectParroquiasDisponibles();
            return todasLasParroquias;
        }
        return [];
    }
}

function poblarSelectParroquiasDisponibles() {
    const select = document.getElementById('select-parroquia-disponible');
    if (!select) return;

    if (todasLasParroquias.length === 0) {
        select.innerHTML = `<option value="">No hay parroquias registradas aún</option>`;
        return;
    }

    // 1. Obtener la parroquia guardada en el perfil del usuario (desde localStorage o perfil)
    let nombreParroquiaPerfil = '';
    let idParroquiaGuardada = localStorage.getItem('parroquia_activa_id') || '';

    try {
        const rawPerfil = localStorage.getItem('user_profile_data');
        if (rawPerfil) {
            const pData = JSON.parse(rawPerfil);
            nombreParroquiaPerfil = pData.parroquia || '';
        }
    } catch(e) {}

    if (!nombreParroquiaPerfil) {
        nombreParroquiaPerfil = localStorage.getItem('parroquia_perfil_nombre') || localStorage.getItem('parroquia_activa_nombre') || '';
    }

    // 2. Buscar si alguna coincide exactamente con la del perfil
    let encontrada = null;
    if (nombreParroquiaPerfil) {
        const normP = normalizarTexto(nombreParroquiaPerfil);
        encontrada = todasLasParroquias.find(p => {
            const normNom = normalizarTexto(p.nombre || '');
            return normNom === normP || normNom.includes(normP) || normP.includes(normNom);
        });
    }

    if (!encontrada && idParroquiaGuardada) {
        encontrada = todasLasParroquias.find(p => p.id === idParroquiaGuardada);
    }

    let idSeleccionado = encontrada ? encontrada.id : '';

    let optionsHtml = `<option value="">-- Selecciona una Parroquia --</option>`;

    optionsHtml += todasLasParroquias.map(p => {
        const sectorParts = [];
        if (p.sector) sectorParts.push(p.sector);
        if (p.provincia) sectorParts.push(p.provincia);
        else if (p.ciudad) sectorParts.push(p.ciudad);
        const sectorText = sectorParts.length > 0 ? ` (${sectorParts.join(', ')})` : '';
        const paisText = p.pais ? ` - ${p.pais}` : '';
        const isSel = (encontrada && p.id === encontrada.id);
        return `<option value="${p.id}" ${isSel ? 'selected' : ''}>${p.nombre}${sectorText}${paisText}</option>`;
    }).join('');

    // Si la parroquia del perfil no está en el catálogo, agregarla como opción seleccionada
    if (nombreParroquiaPerfil && !encontrada) {
        optionsHtml += `<option value="${nombreParroquiaPerfil}" selected>${nombreParroquiaPerfil} (Perfil)</option>`;
        idSeleccionado = nombreParroquiaPerfil;
    }

    select.innerHTML = optionsHtml;

    if (idSeleccionado) {
        select.value = idSeleccionado;
    }

    actualizarBotonEntrarParroquiaSeleccionada();

    // 3. Listener de cambio para sincronizar de Parroquia hacia Perfil ("y viceversa")
    if (!select.dataset.hasSyncPerfilListener) {
        select.dataset.hasSyncPerfilListener = "true";
        select.addEventListener('change', async () => {
            const val = select.value;
            if (!val) {
                actualizarBotonEntrarParroquiaSeleccionada();
                return;
            }

            const pSeleccionada = todasLasParroquias.find(p => p.id === val || p.nombre === val);
            const nombreFinal = pSeleccionada ? pSeleccionada.nombre : val;
            const paisFinal = pSeleccionada ? (pSeleccionada.pais || '') : '';

            // Sincronizar en localStorage
            localStorage.setItem('parroquia_perfil_nombre', nombreFinal);
            localStorage.setItem('parroquia_activa_nombre', nombreFinal);
            if (pSeleccionada) {
                localStorage.setItem('parroquia_activa_id', pSeleccionada.id);
            }

            // Sincronizar en user_profile_data para perfil.html
            try {
                let perfilData = {};
                const local = localStorage.getItem('user_profile_data');
                if (local) perfilData = JSON.parse(local);
                perfilData.parroquia = nombreFinal;
                if (paisFinal) perfilData.pais = paisFinal;
                perfilData.ultimaActualizacion = new Date().toISOString();
                localStorage.setItem('user_profile_data', JSON.stringify(perfilData));
            } catch(e) {}

            // Sincronizar en Firestore si el usuario está autenticado
            const user = usuarioActual || getCurrentUser() || auth.currentUser;
            if (user) {
                try {
                    await setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), {
                        parroquia: nombreFinal,
                        pais: paisFinal,
                        ultimaActualizacion: new Date().toISOString()
                    }, { merge: true });
                } catch(e) {
                    console.warn("Error sincronizando parroquia a perfil en Firestore:", e);
                }
            }

            actualizarBotonEntrarParroquiaSeleccionada();
        });
    }
}

// Actualizar visibilidad del botón para entrar si es miembro/creador de la parroquia seleccionada
function actualizarBotonEntrarParroquiaSeleccionada() {
    const select = document.getElementById('select-parroquia-disponible');
    const btnEntrar = document.getElementById('btn-entrar-parroquia-seleccionada');
    if (!select || !btnEntrar) return;

    const val = select.value;
    if (!val) {
        btnEntrar.style.display = 'none';
        return;
    }

    const user = usuarioActual || getCurrentUser() || auth.currentUser;
    const parr = todasLasParroquias.find(p => p.id === val || p.nombre === val);

    if (parr && user && (esMiembroDeParroquia(parr, user) || user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL)) {
        btnEntrar.style.display = 'inline-flex';
        btnEntrar.onclick = () => {
            activarParroquia(parr);
        };
    } else {
        btnEntrar.style.display = 'none';
    }
}

// --- CONECTAR Y ESCUCHAR PARROQUIA ACTIVA ---
function activarParroquia(parr) {
    if (!parr || !parr.id) return;
    parroquiaActiva = parr;
    localStorage.setItem('parroquia_activa_id', parr.id);
    localStorage.setItem('parroquia_activa_nombre', parr.nombre);
    localStorage.setItem('parroquia_perfil_nombre', parr.nombre);

    // Sincronizar también con el perfil del usuario para perfil.html
    let perfilData = {};
    try {
        const raw = localStorage.getItem('user_profile_data');
        if (raw) perfilData = JSON.parse(raw);
    } catch(e) {}
    perfilData.parroquia = parr.nombre;
    if (parr.pais) perfilData.pais = parr.pais;
    perfilData.ultimaActualizacion = new Date().toISOString();
    localStorage.setItem('user_profile_data', JSON.stringify(perfilData));

    // Si el usuario está autenticado, sincronizar con Firestore protegiendo de fallos de caché IndexedDB
    const user = usuarioActual || getCurrentUser() || auth.currentUser;
    if (user && db) {
        try {
            setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), {
                parroquia: parr.nombre,
                pais: parr.pais || '',
                ultimaActualizacion: new Date().toISOString()
            }, { merge: true }).catch(err => {
                console.warn("Aviso al guardar perfil en Firestore:", err?.message || err);
            });
        } catch(e) {
            console.warn("Excepción al preparar setDoc en Firestore:", e);
        }
    }

    // Cancelar escuchas previas si existen
    if (unsubscribeParroquiaSnap) {
        try { unsubscribeParroquiaSnap(); } catch(e) {}
    }
    if (unsubscribePrepsSnap) {
        try { unsubscribePrepsSnap(); } catch(e) {}
    }

    // 1. Escuchar cambios de la parroquia en vivo
    try {
        unsubscribeParroquiaSnap = onSnapshot(doc(db, "parroquias", parr.id), (docSnap) => {
            if (docSnap.exists()) {
                parroquiaActiva = { id: docSnap.id, ...docSnap.data() };
                renderizarBarraParroquiaActiva();
            }
        }, (err) => console.warn("Aviso escuchando parroquia:", err));
    } catch(errSnap) {
        console.warn("Excepción al registrar onSnapshot de parroquia:", errSnap);
    }

    // 2. Escuchar preparaciones de la parroquia en vivo
    const qPreps = query(collection(db, "parroquias", parr.id, "preparaciones"), orderBy("fecha", "desc"));
    unsubscribePrepsSnap = onSnapshot(qPreps, (snap) => {
        preparacionesParroquia = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderizarListaPreparaciones();
    }, (err) => {
        // Si falta índice por fecha, escuchar sin orderBy
        onSnapshot(collection(db, "parroquias", parr.id, "preparaciones"), (snapFallback) => {
            preparacionesParroquia = snapFallback.docs.map(d => ({ id: d.id, ...d.data() }));
            preparacionesParroquia.sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));
            renderizarListaPreparaciones();
        });
    });

    renderizarBarraParroquiaActiva();
    mostrarVista('parroquia-activa');
}

function renderizarBarraParroquiaActiva() {
    if (!parroquiaActiva) return;

    const nombreDisplay = document.getElementById('parroquia-nombre-display');
    const ciudadDisplay = document.getElementById('parroquia-ciudad-display');
    const rolBadge = document.getElementById('parroquia-rol-badge');
    const btnCodigo = document.getElementById('btn-ver-codigo-16');
    const btnMiembros = document.getElementById('btn-gestionar-miembros');
    const badgeSolicitudes = document.getElementById('badge-solicitudes-pendientes');

    if (nombreDisplay) nombreDisplay.textContent = parroquiaActiva.nombre || 'Mi Parroquia';
    if (ciudadDisplay) ciudadDisplay.textContent = parroquiaActiva.ciudad || '';

    const rol = obtenerRolEnParroquia();
    if (rolBadge) {
        rolBadge.textContent = rol.toUpperCase();
        rolBadge.className = `parroquia-badge-rol badge-${rol}`;
    }

    const puedeAdministrar = esAdminOEncargado();
    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

    if (btnCodigo) btnCodigo.style.display = puedeAdministrar ? 'inline-flex' : 'none';
    if (btnMiembros) btnMiembros.style.display = puedeAdministrar ? 'inline-flex' : 'none';

    // Botón "Parroquias" (Cambiar de parroquia): 
    // Una vez que el usuario pertenece a una parroquia, ya no es necesario mostrar este botón
    // ni que vuelva a la pantalla de unirse/código; solo el Super Admin puede alternar libremente entre parroquias
    const btnCambiarParr = document.getElementById('btn-cambiar-parroquia');
    if (btnCambiarParr) {
        btnCambiarParr.style.display = esSuperAdmin ? 'inline-flex' : 'none';
    }
    let totalPendientes = 0;
    if (esSuperAdmin) {
        todasLasParroquias.forEach(p => {
            totalPendientes += (p.solicitudesPendientes || []).length;
        });
    } else if (parroquiaActiva) {
        totalPendientes = (parroquiaActiva.solicitudesPendientes || []).length;
    }

    if (badgeSolicitudes) {
        if (puedeAdministrar && totalPendientes > 0) {
            badgeSolicitudes.textContent = totalPendientes;
            badgeSolicitudes.style.display = 'inline-block';
            badgeSolicitudes.title = esSuperAdmin 
                ? `${totalPendientes} solicitud(es) de acceso pendiente(s) en el sistema`
                : `${totalPendientes} solicitud(es) pendiente(s) en tu parroquia`;
        } else {
            badgeSolicitudes.style.display = 'none';
        }
    }

    // Ocultar o mostrar y contraer por defecto el formulario de Crear o Editar Preparación
    const wrapperPrep = document.getElementById('wrapper-prep-form');
    const puedeCrear = puedeGestionarPreparacionesYCantores();
    if (wrapperPrep) {
        if (!puedeCrear) {
            wrapperPrep.style.display = 'none';
        } else {
            wrapperPrep.style.display = 'block';
            // Contraído por defecto (con flecha apuntando a expand_more)
            window.contraerSeccionPrepForm();
        }
    }
}

// --- VERIFICAR PARROQUIA DEL USUARIO AL INICIAR SESIÓN ---
async function resolverParroquiaUsuario(user) {
    if (!user) {
        mostrarVista('no-auth');
        return;
    }

    const todas = await cargarTodasLasParroquias();

    // 1. Si hay una parroquia guardada previamente en localStorage y es válida
    const idGuardada = localStorage.getItem('parroquia_activa_id');
    if (idGuardada) {
        const found = todas.find(p => p.id === idGuardada);
        if (found && (esMiembroDeParroquia(found, user) || user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL)) {
            activarParroquia(found);
            return;
        }
    }

    // 2. Buscar si la parroquia asignada en el perfil del usuario coincide y tiene permiso
    let parroquiaPerfilNombre = '';
    try {
        const raw = localStorage.getItem('user_profile_data');
        if (raw) {
            const pData = JSON.parse(raw);
            parroquiaPerfilNombre = pData.parroquia || '';
        }
    } catch(e) {}

    if (!parroquiaPerfilNombre) {
        parroquiaPerfilNombre = localStorage.getItem('parroquia_perfil_nombre') || localStorage.getItem('parroquia_activa_nombre') || '';
    }

    if (parroquiaPerfilNombre) {
        const normP = normalizarTexto(parroquiaPerfilNombre);
        const foundPerfil = todas.find(p => {
            const normNom = normalizarTexto(p.nombre || '');
            return normNom === normP || normNom.includes(normP) || normP.includes(normNom);
        });
        if (foundPerfil && (esMiembroDeParroquia(foundPerfil, user) || user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL)) {
            activarParroquia(foundPerfil);
            return;
        }
    }

    // 3. Buscar si el usuario ya es miembro o creador de alguna parroquia
    const parroquiaDelUsuario = todas.find(p => esMiembroDeParroquia(p, user));
    if (parroquiaDelUsuario) {
        activarParroquia(parroquiaDelUsuario);
        return;
    }

    // 4. Si el usuario es el Super Administrador y no tiene parroquia activa asignada
    if (user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL && todas.length > 0) {
        activarParroquia(todas[0]);
        return;
    }

    // 5. No pertenece a ninguna parroquia: mostrar pantalla de ingreso de código / solicitar acceso
    mostrarVista('sin-parroquia');
    poblarSelectParroquiasDisponibles();
}

// --- UNIRSE CON CÓDIGO DE 16 CARACTERES ---
window.unirseConCodigo16 = async () => {
    const input = document.getElementById('input-codigo-16');
    const codigoIngresado = normalizarCodigo16(input ? input.value : '');

    if (!codigoIngresado || codigoIngresado.length !== 16) {
        mostrarAlerta("Ingresa el código de 16 caracteres completo (ej: ABCD-1234-EFGH-5678).", "Código Inválido", "error");
        return;
    }

    if (!usuarioActual) {
        mostrarAlerta("Debes iniciar sesión para unirte a una parroquia.", "Sesión requerida", "account_circle");
        return;
    }

    await cargarTodasLasParroquias();

    // Buscar la parroquia cuyo código de acceso coincida
    const coincidencia = todasLasParroquias.find(p => {
        const codNormalizado = normalizarCodigo16(p.codigoAcceso);
        return codNormalizado === codigoIngresado;
    });

    if (!coincidencia) {
        mostrarAlerta("El código de 16 caracteres ingresado no coincide con ninguna parroquia registrada. Consulta con el encargado.", "Código no encontrado", "vpn_key_off");
        return;
    }

    try {
        const nuevoMiembro = {
            uid: usuarioActual.uid,
            email: usuarioActual.email,
            displayName: usuarioActual.displayName || usuarioActual.email.split('@')[0],
            rol: 'cantor',
            fechaIngreso: new Date().toISOString()
        };

        // Agregar al array de miembros evitando duplicados
        await updateDoc(doc(db, "parroquias", coincidencia.id), {
            miembros: arrayUnion(nuevoMiembro),
            // Eliminar de solicitudes pendientes si estuviera
            solicitudesPendientes: (coincidencia.solicitudesPendientes || []).filter(s => s.email !== usuarioActual.email)
        });

        coincidencia.miembros = coincidencia.miembros || [];
        coincidencia.miembros.push(nuevoMiembro);

        activarParroquia(coincidencia);
        mostrarAlerta(`¡Bienvenido a ${coincidencia.nombre}! Ya puedes acceder y preparar las celebraciones.`, "Acceso Concedido", "church");
    } catch (e) {
        console.error("Error al unirse a la parroquia con código:", e);
        mostrarAlerta("Ocurrió un error al procesar tu solicitud: " + e.message, "Error", "error");
    }
};

// --- SOLICITAR ACCESO AL ENCARGADO ---
window.solicitarAccesoParroquia = async () => {
    const btnSolicitar = document.getElementById('btn-solicitar-acceso');
    const select = document.getElementById('select-parroquia-disponible');
    const parroquiaId = select ? select.value.trim() : '';

    if (!parroquiaId) {
        mostrarAlerta("Por favor selecciona una parroquia de la lista para solicitar acceso.", "Selecciona una Parroquia", "church");
        return;
    }

    const user = usuarioActual || auth.currentUser;
    if (!user) {
        mostrarAlerta("Debes iniciar sesión con tu cuenta de Google para solicitar acceso a una parroquia.", "Sesión requerida", "account_circle");
        return;
    }

    const userEmail = (user.email || '').toLowerCase().trim();
    const userNombre = user.displayName || userEmail.split('@')[0];

    // Buscar la parroquia en el catálogo local
    let targetParroquia = todasLasParroquias.find(p => 
        p.id === parroquiaId || 
        p.nombre === parroquiaId || 
        normalizarTexto(p.nombre || '') === normalizarTexto(parroquiaId)
    );

    // Verificar si ya es miembro
    if (targetParroquia && esMiembroDeParroquia(targetParroquia, user)) {
        mostrarAlerta(`Ya eres miembro de la parroquia "${targetParroquia.nombre}". Puedes entrar directamente a preparar las celebraciones.`, "Ya tienes acceso", "church");
        actualizarBotonEntrarParroquiaSeleccionada();
        return;
    }

    // Verificar si ya envió una solicitud previa
    const solicitudesPrevias = targetParroquia?.solicitudesPendientes || [];
    if (solicitudesPrevias.some(s => s.email?.toLowerCase().trim() === userEmail)) {
        mostrarAlerta(`Ya tienes una solicitud de acceso pendiente para la parroquia "${targetParroquia?.nombre || parroquiaId}".\n\nEl encargado o Administrador General la revisará pronto.`, "Solicitud ya enviada", "info");
        return;
    }

    const idReal = targetParroquia?.id || parroquiaId;
    const docRef = doc(db, "parroquias", idReal);

    const solicitud = {
        uid: user.uid,
        email: userEmail,
        displayName: userNombre,
        fecha: new Date().toISOString(),
        parroquiaId: idReal,
        parroquiaNombre: targetParroquia?.nombre || parroquiaId,
        sector: targetParroquia?.sector || '',
        provincia: targetParroquia?.provincia || '',
        pais: targetParroquia?.pais || ''
    };

    const originalBtnHtml = btnSolicitar ? btnSolicitar.innerHTML : '';
    if (btnSolicitar) {
        btnSolicitar.disabled = true;
        btnSolicitar.innerHTML = `<span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">hourglass_top</span> Enviando...`;
    }

    try {
        const updateData = {
            solicitudesPendientes: arrayUnion(solicitud),
            actualizadoEn: new Date().toISOString()
        };
        if (targetParroquia) {
            if (targetParroquia.nombre) updateData.nombre = targetParroquia.nombre;
            if (targetParroquia.pais) updateData.pais = targetParroquia.pais;
            if (targetParroquia.provincia) updateData.provincia = targetParroquia.provincia;
            if (targetParroquia.sector) updateData.sector = targetParroquia.sector;
            if (targetParroquia.codigoAcceso) updateData.codigoAcceso = targetParroquia.codigoAcceso;
        }

        await setDoc(docRef, updateData, { merge: true });

        // Actualizar en memoria local
        if (targetParroquia) {
            targetParroquia.solicitudesPendientes = targetParroquia.solicitudesPendientes || [];
            targetParroquia.solicitudesPendientes.push(solicitud);
        }
        try {
            localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
        } catch(e) {}

        renderizarBarraParroquiaActiva();

        mostrarAlerta(
            `Tu solicitud para la parroquia "${targetParroquia ? targetParroquia.nombre : parroquiaId}" ha sido enviada exitosamente al encargado y al Administrador General.\n\nTan pronto sea aprobada, podrás ingresar automáticamente.`,
            "Solicitud Enviada",
            "mark_email_read"
        );
    } catch (e) {
        console.error("Error enviando solicitud:", e);
        if (targetParroquia) {
            targetParroquia.solicitudesPendientes = targetParroquia.solicitudesPendientes || [];
            targetParroquia.solicitudesPendientes.push(solicitud);
            try {
                localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
            } catch(err) {}
        }
        mostrarAlerta(
            `Tu solicitud para la parroquia "${targetParroquia ? targetParroquia.nombre : parroquiaId}" ha sido registrada.\n\nEl encargado o Administrador General la revisará pronto.`,
            "Solicitud Registrada",
            "mark_email_read"
        );
    } finally {
        if (btnSolicitar) {
            btnSolicitar.disabled = false;
            btnSolicitar.innerHTML = originalBtnHtml;
        }
    }
};

// --- GESTIÓN DE PAÍSES Y FORMULARIO DE PARROQUIAS ---
let listaPaisesGlobal = [];

async function cargarCatalogoPaises() {
    if (listaPaisesGlobal.length > 0) return listaPaisesGlobal;
    try {
        const res = await fetch('./data/paises.json');
        if (!res.ok) throw new Error("No se pudo cargar paises.json");
        const data = await res.json();
        const nombres = data.map(p => p.nombre || p).filter(Boolean);

        // Separar "República Dominicana" para colocarlo en primer lugar
        const rdIndex = nombres.findIndex(n => normalizarTexto(n).includes('dominicana'));
        let rdName = "República Dominicana";
        if (rdIndex !== -1) {
            rdName = nombres.splice(rdIndex, 1)[0];
        }

        // Ordenar alfabéticamente el resto
        nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

        listaPaisesGlobal = [rdName, ...nombres];
        renderizarOpcionesPaises(listaPaisesGlobal);
        return listaPaisesGlobal;
    } catch(e) {
        console.warn("Error cargando países:", e);
        listaPaisesGlobal = ["República Dominicana", "España", "Estados Unidos", "Colombia", "México", "Argentina", "Chile", "Perú", "Venezuela"];
        renderizarOpcionesPaises(listaPaisesGlobal);
        return listaPaisesGlobal;
    }
}

function renderizarOpcionesPaises(paises, valorSeleccionado = '') {
    const select = document.getElementById('parroquia-pais-select');
    if (!select) return;

    select.innerHTML = '<option value="">-- Selecciona el País --</option>' +
        paises.map(p => {
            const isRD = normalizarTexto(p).includes('dominicana');
            const prefix = isRD ? '🇩🇴 ' : '';
            const isSel = valorSeleccionado ? (valorSeleccionado === p) : isRD;
            return `<option value="${p}" ${isSel ? 'selected' : ''}>${prefix}${p}</option>`;
        }).join('');
}

window.filtrarSelectPaises = (query) => {
    const qNorm = normalizarTexto(query);
    const select = document.getElementById('parroquia-pais-select');
    if (!select || listaPaisesGlobal.length === 0) return;

    const valorPrevio = select.value;
    const filtrados = listaPaisesGlobal.filter(p => normalizarTexto(p).includes(qNorm));
    renderizarOpcionesPaises(filtrados.length > 0 ? filtrados : listaPaisesGlobal, valorPrevio);
};

// Cargar usuarios iniciados / registrados para el selector de Cantor Encargado
async function cargarUsuariosRegistradosParaEncargado() {
    try {
        if (usuariosRegistradosCache.length === 0) {
            const snap = await getDocs(collection(db, "registered_users"));
            usuariosRegistradosCache = snap.docs.map(d => d.data()).filter(u => u && u.email && !u.deleted);
        }

        const select = document.getElementById('parroquia-cantor-encargado-select');
        const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

        if (select) {
            select.disabled = !esSuperAdmin;
            select.style.opacity = esSuperAdmin ? '1' : '0.75';
            select.style.cursor = esSuperAdmin ? 'default' : 'not-allowed';

            const valActual = select.value;
            select.innerHTML = '<option value="">-- Sin Cantor Encargado (Opcional) --</option>' +
                usuariosRegistradosCache.map(u => {
                    const label = u.displayName ? `${u.displayName} (${u.email})` : u.email;
                    return `<option value="${u.email}" ${valActual === u.email ? 'selected' : ''}>${label}</option>`;
                }).join('');
        }
    } catch(e) {
        console.warn("No se pudieron cargar usuarios para encargado:", e);
    }
}

// Abrir modal de administración de parroquias
window.abrirModalAdminParroquias = async (parrIdAEditar = null) => {
    const modal = document.getElementById('modal-admin-parroquias');
    if (!modal) return;

    modal.style.display = 'flex';
    await cargarCatalogoPaises();
    await cargarUsuariosRegistradosParaEncargado();
    await cargarTodasLasParroquias();
    renderizarListadoAdminParroquias();

    if (parrIdAEditar) {
        window.editarParroquiaDesdeAdmin(parrIdAEditar);
    } else {
        window.limpiarFormularioParroquia();
    }
};

window.limpiarFormularioParroquia = () => {
    const idInput = document.getElementById('parroquia-id-editando');
    const inputNombre = document.getElementById('parroquia-nombre-input');
    const inputDir = document.getElementById('parroquia-direccion-input');
    const inputParroco = document.getElementById('parroquia-parroco-input');
    const selectPais = document.getElementById('parroquia-pais-select');
    const filtroPais = document.getElementById('filtro-pais-input');
    const selectCantor = document.getElementById('parroquia-cantor-encargado-select');
    const btnSubmit = document.getElementById('btn-guardar-parroquia-submit');
    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

    if (idInput) idInput.value = '';
    if (inputNombre) inputNombre.value = '';
    if (inputDir) inputDir.value = '';
    if (inputParroco) inputParroco.value = '';
    if (filtroPais) filtroPais.value = '';
    if (selectPais) {
        renderizarOpcionesPaises(listaPaisesGlobal, 'República Dominicana');
    }
    if (selectCantor) {
        selectCantor.value = '';
        selectCantor.disabled = !esSuperAdmin;
    }
    if (btnSubmit) {
        btnSubmit.innerHTML = `<span class="material-symbols-outlined">save</span> Guardar Parroquia`;
    }
};

window.guardarParroquiaDesdeFormulario = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const idEditando = document.getElementById('parroquia-id-editando')?.value || '';
    const selectPais = document.getElementById('parroquia-pais-select');
    const inputNombre = document.getElementById('parroquia-nombre-input');
    const inputDir = document.getElementById('parroquia-direccion-input');
    const inputParroco = document.getElementById('parroquia-parroco-input');
    const selectCantor = document.getElementById('parroquia-cantor-encargado-select');

    const pais = selectPais ? selectPais.value.trim() : '';
    const nombre = inputNombre ? inputNombre.value.trim() : '';
    const direccion = inputDir ? inputDir.value.trim() : '';
    const parroco = inputParroco ? inputParroco.value.trim() : '';
    const cantorEmail = selectCantor ? selectCantor.value.trim() : '';

    if (!pais) {
        mostrarAlerta("Por favor selecciona un país.", "País Requerido", "public");
        return;
    }

    if (!nombre) {
        mostrarAlerta("Por favor ingresa el nombre de la parroquia.", "Nombre Requerido", "church");
        return;
    }

    const inputSector = document.getElementById('parroquia-sector-input');
    const sector = inputSector ? inputSector.value.trim() : '';
    if (sector) {
        const duplicada = todasLasParroquias.some(p => {
            if (idEditando && p.id === idEditando) return false;
            return normalizarTexto(p.nombre) === normalizarTexto(nombre) &&
                   normalizarTexto(p.sector || '') === normalizarTexto(sector) &&
                   (!p.pais || !pais || normalizarTexto(p.pais) === normalizarTexto(pais));
        });
        if (duplicada) {
            mostrarAlerta(`Ya existe una parroquia con el nombre "${nombre}" en el sector "${sector}". Dos parroquias pueden tener el mismo nombre únicamente si pertenecen a sectores diferentes.`, "Parroquia Ya Registrada", "warning");
            return;
        }
    }

    if (!usuarioActual) {
        mostrarAlerta("Debes iniciar sesión para registrar o editar una parroquia.", "Sesión Requerida", "account_circle");
        return;
    }

    const esSuperAdmin = (usuarioActual.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    const nuevoId = idEditando || ('parr_' + Date.now().toString(36));
    const parroquiaExistente = idEditando ? todasLasParroquias.find(p => p.id === idEditando) : null;
    const codigo16 = parroquiaExistente?.codigoAcceso || generarCodigo16();

    // Solo el Super Admin puede asignar o modificar el cantor encargado
    let cantorEmailFinal = '';
    let cantorNombreFinal = '';

    if (esSuperAdmin) {
        cantorEmailFinal = cantorEmail;
        if (cantorEmailFinal) {
            const u = usuariosRegistradosCache.find(x => x.email?.toLowerCase().trim() === cantorEmailFinal.toLowerCase().trim());
            cantorNombreFinal = u ? (u.displayName || cantorEmailFinal.split('@')[0]) : cantorEmailFinal.split('@')[0];
        }
    } else {
        // Preservar si ya existía
        cantorEmailFinal = parroquiaExistente?.cantorEncargadoEmail || '';
        cantorNombreFinal = parroquiaExistente?.cantorEncargado || '';
    }

    // Armar lista de miembros
    let miembros = parroquiaExistente?.miembros || [];
    if (esSuperAdmin && cantorEmailFinal) {
        // Remover si ya existía para actualizar con rol encargado
        miembros = miembros.filter(m => m.email?.toLowerCase().trim() !== cantorEmailFinal.toLowerCase().trim());
        miembros.unshift({
            email: cantorEmailFinal,
            displayName: cantorNombreFinal,
            rol: 'encargado',
            fechaIngreso: new Date().toISOString()
        });
    }

    // Asegurarse de que el usuario actual esté incluido
    if (usuarioActual.email && !miembros.some(m => m.email?.toLowerCase().trim() === usuarioActual.email.toLowerCase().trim())) {
        miembros.push({
            uid: usuarioActual.uid,
            email: usuarioActual.email,
            displayName: usuarioActual.displayName || usuarioActual.email.split('@')[0],
            rol: esSuperAdmin ? 'encargado' : 'miembro',
            fechaIngreso: new Date().toISOString()
        });
    }

    const docData = {
        id: nuevoId,
        nombre: nombre,
        pais: pais,
        ciudad: pais, // compatibilidad
        direccion: direccion,
        parroco: parroco,
        cantorEncargado: cantorNombreFinal,
        cantorEncargadoEmail: cantorEmailFinal,
        codigoAcceso: codigo16,
        actualizado: new Date().toISOString(),
        miembros: miembros,
        solicitudesPendientes: parroquiaExistente?.solicitudesPendientes || []
    };

    if (!idEditando) {
        docData.creadorUid = usuarioActual.uid;
        docData.creadorEmail = usuarioActual.email;
        docData.creadoEn = serverTimestamp();
    }

    try {
        await setDoc(doc(db, "parroquias", nuevoId), docData, { merge: true });
        mostrarToastVerde(`Parroquia "${nombre}" guardada con éxito`);
        
        await cargarTodasLasParroquias();
        renderizarListadoAdminParroquias();
        window.limpiarFormularioParroquia();

        // Si no hay parroquia activa o es la que se acaba de guardar/editar
        if (!parroquiaActiva || parroquiaActiva.id === nuevoId) {
            activarParroquia(docData);
        }
    } catch(e) {
        console.error("Error guardando parroquia:", e);
        mostrarAlerta("Error al guardar parroquia: " + e.message, "Error", "error");
    }
};

window.editarParroquiaDesdeAdmin = (parrId) => {
    const parr = todasLasParroquias.find(p => p.id === parrId);
    if (!parr) return;

    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    const idInput = document.getElementById('parroquia-id-editando');
    const inputNombre = document.getElementById('parroquia-nombre-input');
    const inputDir = document.getElementById('parroquia-direccion-input');
    const inputParroco = document.getElementById('parroquia-parroco-input');
    const selectPais = document.getElementById('parroquia-pais-select');
    const selectCantor = document.getElementById('parroquia-cantor-encargado-select');
    const btnSubmit = document.getElementById('btn-guardar-parroquia-submit');

    if (idInput) idInput.value = parr.id;
    if (inputNombre) inputNombre.value = parr.nombre || '';
    if (inputDir) inputDir.value = parr.direccion || '';
    if (inputParroco) inputParroco.value = parr.parroco || '';
    if (selectPais && parr.pais) {
        renderizarOpcionesPaises(listaPaisesGlobal, parr.pais);
    }
    if (selectCantor) {
        selectCantor.value = parr.cantorEncargadoEmail || '';
        selectCantor.disabled = !esSuperAdmin;
    }
    if (btnSubmit) {
        btnSubmit.innerHTML = `<span class="material-symbols-outlined">edit</span> Actualizar Parroquia`;
    }

    const form = document.getElementById('form-registro-parroquia');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.seleccionarParroquiaDesdeAdmin = (parrId) => {
    const parr = todasLasParroquias.find(p => p.id === parrId);
    if (parr) {
        activarParroquia(parr);
        document.getElementById('modal-admin-parroquias').style.display = 'none';
        mostrarToastVerde(`Parroquia activa: ${parr.nombre}`);
    }
};

window.eliminarParroquiaDesdeAdmin = async (parrId, nombre) => {
    const parr = todasLasParroquias.find(p => p.id === parrId);
    if (!puedeVerCodigoDeParroquia(parr, usuarioActual)) {
        mostrarAlerta("Solo el Administrador Principal o el Cantor Encargado pueden eliminar esta parroquia.", "Acceso Restringido", "lock");
        return;
    }
    if (!confirm(`¿Eliminar definitivamente la parroquia "${nombre}" y todas sus preparaciones?`)) return;
    try {
        await deleteDoc(doc(db, "parroquias", parrId));
        await cargarTodasLasParroquias();
        renderizarListadoAdminParroquias();
        mostrarToastVerde("Parroquia eliminada");

        if (parroquiaActiva && parroquiaActiva.id === parrId) {
            parroquiaActiva = null;
            localStorage.removeItem('parroquia_activa_id');
            mostrarVista('sin-parroquia');
        }
    } catch(e) {
        mostrarAlerta("Error al eliminar parroquia: " + e.message, "Error", "error");
    }
};

window.filtrarListadoAdminParroquias = () => {
    const input = document.getElementById('buscador-admin-parroquias');
    const btnX = document.getElementById('btnLimpiarBuscadorAdminParroquias');
    if (!input) return;
    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';
    renderizarListadoAdminParroquias(input.value);
};

window.limpiarBuscadorAdminParroquias = () => {
    const input = document.getElementById('buscador-admin-parroquias');
    if (input) {
        input.value = '';
        window.filtrarListadoAdminParroquias();
        input.focus();
    }
};

// Modal Ambulante: Solicite la Responsabilidad
window.mostrarMensajeResponsabilidad = (parroquiaNombre = '') => {
    const modal = document.getElementById('modal-ambulante-responsabilidad');
    const txtParroquia = document.getElementById('txt-ambulante-parroquia-nombre');
    if (txtParroquia) {
        if (parroquiaNombre) {
            txtParroquia.textContent = parroquiaNombre;
            txtParroquia.style.display = 'block';
        } else {
            txtParroquia.style.display = 'none';
        }
    }
    if (modal) {
        modal.style.display = 'flex';
    } else {
        mostrarAlerta(`🔒 Solicite al Administrador Principal la asignación como responsable de Canto de su parroquia. Si tu parroquia no tiene encargado, comunícate por el chat para ser agregado. https://resucito.do/chat.html`, "Solicite la Responsabilidad", "lock");
    }
};

window.copiarCodigo16DeParroquia = (parrId, codigo) => {
    const parr = todasLasParroquias.find(p => p.id === parrId || p.codigoAcceso === codigo);
    if (!puedeVerCodigoDeParroquia(parr, usuarioActual)) {
        window.mostrarMensajeResponsabilidad(parr?.nombre);
        return;
    }
    navigator.clipboard.writeText(codigo).then(() => {
        window.mostrarToastVerde(`Código copiado: ${codigo}`);
    }).catch(() => {
        prompt("Copia el código manualmente:", codigo);
    });
};

function renderizarListadoAdminParroquias(filtro = '') {
    const contenedor = document.getElementById('contenedor-listado-admin-parroquias');
    const badgeTotal = document.getElementById('total-parroquias-admin');
    if (!contenedor) return;

    if (badgeTotal) badgeTotal.textContent = todasLasParroquias.length;

    // Banner global de solicitudes si hay alguna pendiente en cualquier parroquia
    let totalPendientesGlobal = 0;
    todasLasParroquias.forEach(p => {
        totalPendientesGlobal += (p.solicitudesPendientes || []).length;
    });

    const bannerAdmin = document.getElementById('banner-solicitudes-admin-global');
    const bannerTxt = document.getElementById('banner-solicitudes-admin-texto');
    if (bannerAdmin) {
        if (totalPendientesGlobal > 0) {
            bannerAdmin.style.display = 'flex';
            if (bannerTxt) {
                bannerTxt.innerHTML = `Tienes <b>${totalPendientesGlobal}</b> solicitud(es) de acceso pendiente(s) por revisar.`;
            }
        } else {
            bannerAdmin.style.display = 'none';
        }
    }

    if (todasLasParroquias.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No hay parroquias registradas aún.</p>`;
        return;
    }

    const filtroNorm = normalizarTexto(filtro);
    const filtradas = todasLasParroquias.filter(p => {
        const n = normalizarTexto(p.nombre || '');
        const pais = normalizarTexto(p.pais || p.ciudad || '');
        const par = normalizarTexto(p.parroco || '');
        const cant = normalizarTexto(p.cantorEncargado || p.cantorEncargadoEmail || '');
        return filtroNorm === '' || n.includes(filtroNorm) || pais.includes(filtroNorm) || par.includes(filtroNorm) || cant.includes(filtroNorm);
    });

    if (filtradas.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No se encontraron parroquias con ese filtro.</p>`;
        return;
    }

    contenedor.innerHTML = filtradas.map(p => {
        const esActiva = parroquiaActiva && parroquiaActiva.id === p.id;
        const pais = p.pais || p.ciudad || 'Sin país';
        const cantor = p.cantorEncargado ? `${p.cantorEncargado} ${p.cantorEncargadoEmail ? `(${p.cantorEncargadoEmail})` : ''}` : (p.cantorEncargadoEmail || 'Sin encargado');
        const codigo16 = p.codigoAcceso || 'SIN-CÓDIGO';
        const puedeVer = puedeVerCodigoDeParroquia(p, usuarioActual);

        let htmlCodigo = '';
        if (puedeVer) {
            htmlCodigo = `
                <div style="margin-top: 4px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <span class="badge-codigo-item" title="Haga clic para copiar código de 16 caracteres" onclick="window.copiarCodigo16DeParroquia('${p.id}', '${codigo16}')">
                        🔑 ${codigo16}
                        <span class="material-symbols-outlined" style="font-size: 14px;">content_copy</span>
                    </span>
                    <span style="font-size: 0.72rem; color: #166534; background: #dcfce7; border: 1px solid #bbf7d0; padding: 2px 6px; border-radius: 4px; font-weight: 600;">
                        Acceso Encargado
                    </span>
                </div>
            `;
        } else {
            htmlCodigo = `
                <div style="margin-top: 6px;">
                    <button type="button" class="btn-solicitar-resp-chip" onclick="window.mostrarMensajeResponsabilidad('${escapeHtml(p.nombre || '')}')" style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; border-radius: 20px; padding: 4px 12px; font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: all 0.2s ease;">
                        <span class="material-symbols-outlined" style="font-size: 14px; color: #d97706;">lock</span>
                        <span>Solicite la responsabilidad</span>
                    </button>
                </div>
            `;
        }

        const numPendientes = (p.solicitudesPendientes || []).length;
        let htmlBadgePendientes = '';
        if (numPendientes > 0) {
            htmlBadgePendientes = `
                <div style="margin-top: 6px;">
                    <button type="button" class="btn-parroquia-top" style="background: #fef2f2; color: #dc2626; border-color: #fca5a5; font-weight: 700; font-size: 0.78rem; padding: 4px 10px; display: inline-flex; align-items: center; gap: 4px;" onclick="window.abrirModalMiembrosConFiltro('${p.id}')">
                        <span class="material-symbols-outlined" style="font-size: 15px; color: #dc2626;">mark_email_unread</span>
                        ${numPendientes} Solicitud${numPendientes > 1 ? 'es' : ''} Pendiente${numPendientes > 1 ? 's' : ''} - Revisar
                    </button>
                </div>
            `;
        }

        return `
            <div class="parroquia-card-item ${esActiva ? 'activa' : ''}">
                <div class="parroquia-card-info" style="flex-grow: 1;">
                    <h4>
                        <span class="material-symbols-outlined" style="font-size: 18px; color: var(--accent-color, #d01212);">church</span>
                        ${p.nombre}
                        ${esActiva ? `<span style="font-size: 0.72rem; background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-weight: 700;">ACTIVA</span>` : ''}
                    </h4>
                    <div class="parroquia-card-sub">
                        <span>🌍 <b>${pais}</b></span>
                        ${p.provincia ? `<span>• 🏛️ ${p.provincia}</span>` : ''}
                        ${p.sector ? `<span>• 📍 ${p.sector}</span>` : ''}
                        ${p.direccion ? `<span>• 🏢 ${p.direccion}</span>` : ''}
                        ${p.parroco ? `<span>• ✝️ ${p.parroco}</span>` : ''}
                        <span>• 🎤 ${cantor}</span>
                    </div>
                    ${htmlCodigo}
                    ${htmlBadgePendientes}
                </div>

                <div style="display: flex; gap: 6px; align-items: center;">
                    ${!esActiva ? `
                        <button type="button" class="btn-parroquia-top" style="padding: 6px 10px;" title="Activar esta parroquia" onclick="window.seleccionarParroquiaDesdeAdmin('${p.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">check</span> Activar
                        </button>
                    ` : ''}
                    <button type="button" class="btn-parroquia-top" style="padding: 6px 10px;" title="Editar parroquia" onclick="window.editarParroquiaDesdeAdmin('${p.id}')">
                        <span class="material-symbols-outlined" style="font-size: 16px;">edit</span>
                    </button>
                    <button type="button" class="btn-parroquia-top" style="padding: 6px 10px; color: #b91c1c;" title="Eliminar parroquia" onclick="window.eliminarParroquiaDesdeAdmin('${p.id}', '${p.nombre}')">
                        <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Descargar plantilla CSV de Parroquias
window.descargarPlantillaCsvParroquias = () => {
    const csvContent = "\uFEFF" + 
        "Pais,Parroquia,Direccion,Parroco,CantorEncargadoEmail\n" +
        "República Dominicana,San Juan Bautista,Calle Duarte #12,P. Manuel García,dbaezh78@gmail.com\n" +
        "República Dominicana,Nuestra Señora de la Altagracia,Av. Independencia km 8,P. Antonio Ruiz,\n" +
        "España,Santa María la Blanca,Calle Mayor 45,P. Francisco Pérez,\n" +
        "Estados Unidos,St. Dominic,2100 Bush St,Fr. John Smith,\n" +
        "Colombia,Cristo Rey,Carrera 7 #40-20,P. Carlos Mendoza,\n" +
        "México,San José Obrero,Av. Insurgentes Sur 300,P. Pedro Hernández,\n";

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "plantilla_parroquias.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// Procesar importación de archivo CSV de Parroquias
window.procesarArchivoCsvParroquias = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const text = e.target.result;
            const lineas = text.split(/\r?\n/).filter(line => line.trim().length > 0);

            if (lineas.length < 2) {
                mostrarAlerta("El archivo CSV debe tener al menos una cabecera y una fila de datos.", "CSV Inválido", "error");
                return;
            }

            // Detectar delimitador (coma o punto y coma)
            const primeraLinea = lineas[0];
            const delimitador = (primeraLinea.includes(';') && (primeraLinea.split(';').length >= primeraLinea.split(',').length)) ? ';' : ',';

            // Función para dividir respetando comillas
            const parseCsvLine = (line) => {
                const result = [];
                let cur = '';
                let inQuotes = false;
                for (let i = 0; i < line.length; i++) {
                    const c = line[i];
                    if (c === '"') {
                        if (inQuotes && line[i + 1] === '"') {
                            cur += '"';
                            i++;
                        } else {
                            inQuotes = !inQuotes;
                        }
                    } else if (c === delimitador && !inQuotes) {
                        result.push(cur.trim());
                        cur = '';
                    } else {
                        cur += c;
                    }
                }
                result.push(cur.trim());
                return result;
            };

            const headers = parseCsvLine(lineas[0]).map(h => normalizarTexto(h));
            const idxPais = headers.findIndex(h => h.includes('pais'));
            const idxParroquia = headers.findIndex(h => h.includes('parroquia') || h.includes('nombre'));
            const idxDir = headers.findIndex(h => h.includes('direccion') || h.includes('dir'));
            const idxParroco = headers.findIndex(h => h.includes('parroco'));
            const idxCantor = headers.findIndex(h => h.includes('cantor') || h.includes('email') || h.includes('encargado'));

            if (idxPais === -1 || idxParroquia === -1) {
                mostrarAlerta("La cabecera del archivo CSV debe incluir las columnas obligatorias 'Pais' y 'Parroquia'.", "Cabeceras Faltantes", "error");
                return;
            }

            let importadas = 0;
            let omitidas = 0;

            for (let i = 1; i < lineas.length; i++) {
                const cols = parseCsvLine(lineas[i]);
                const pais = cols[idxPais] ? cols[idxPais].trim() : '';
                const parroquia = cols[idxParroquia] ? cols[idxParroquia].trim() : '';
                const direccion = (idxDir !== -1 && cols[idxDir]) ? cols[idxDir].trim() : '';
                const parroco = (idxParroco !== -1 && cols[idxParroco]) ? cols[idxParroco].trim() : '';
                const cantorEmail = (idxCantor !== -1 && cols[idxCantor]) ? cols[idxCantor].trim().toLowerCase() : '';

                // Validación: País y Parroquia son obligatorios
                if (!pais || !parroquia) {
                    omitidas++;
                    continue;
                }

                const nuevoId = 'parr_' + Date.now().toString(36) + '_' + i;
                const codigo16 = generarCodigo16();

                let miembros = [];
                const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
                if (cantorEmail && esSuperAdmin) {
                    miembros.push({
                        email: cantorEmail,
                        displayName: cantorEmail.split('@')[0],
                        rol: 'encargado',
                        fechaIngreso: new Date().toISOString()
                    });
                }
                if (usuarioActual?.email && cantorEmail !== usuarioActual.email.toLowerCase()) {
                    miembros.push({
                        uid: usuarioActual.uid,
                        email: usuarioActual.email,
                        displayName: usuarioActual.displayName || usuarioActual.email.split('@')[0],
                        rol: esSuperAdmin ? 'encargado' : 'miembro',
                        fechaIngreso: new Date().toISOString()
                    });
                }

                await setDoc(doc(db, "parroquias", nuevoId), {
                    id: nuevoId,
                    nombre: parroquia,
                    pais: pais,
                    ciudad: pais,
                    direccion: direccion,
                    parroco: parroco,
                    cantorEncargado: (esSuperAdmin && cantorEmail) ? cantorEmail.split('@')[0] : '',
                    cantorEncargadoEmail: (esSuperAdmin && cantorEmail) ? cantorEmail : '',
                    codigoAcceso: codigo16,
                    creadorUid: usuarioActual?.uid || 'importador',
                    creadorEmail: usuarioActual?.email || '',
                    creadoEn: serverTimestamp(),
                    actualizado: new Date().toISOString(),
                    miembros: miembros,
                    solicitudesPendientes: []
                }, { merge: true });

                importadas++;
            }

            await cargarTodasLasParroquias();
            renderizarListadoAdminParroquias();
            event.target.value = ''; // Reset input file

            mostrarAlerta(
                `Importación finalizada con éxito:\n• ${importadas} parroquias agregadas correctamente.\n${omitidas > 0 ? `• ${omitidas} filas omitidas por no tener País o Parroquia.` : ''}`,
                "Importación Exitosa",
                "check_circle"
            );
        } catch(err) {
            console.error("Error importando CSV de parroquias:", err);
            mostrarAlerta("Error al procesar el archivo CSV: " + err.message, "Error en Importación", "error");
        }
    };
    reader.readAsText(file, "UTF-8");
};

// --- MODAL CÓDIGO DE 16 CARACTERES ---
window.abrirModalCodigo16 = () => {
    if (!parroquiaActiva) return;
    if (!esAdminOEncargado()) {
        window.mostrarMensajeResponsabilidad(parroquiaActiva.nombre);
        return;
    }
    const modal = document.getElementById('modal-codigo-16');
    const txtCodigo = document.getElementById('display-codigo-16-texto');
    const boxRegenerar = document.getElementById('box-regenerar-codigo');

    if (txtCodigo) txtCodigo.textContent = parroquiaActiva.codigoAcceso || 'SIN CÓDIGO';
    if (boxRegenerar) boxRegenerar.style.display = esAdminOEncargado() ? 'block' : 'none';

    if (modal) modal.style.display = 'flex';
};

window.copiarCodigo16 = () => {
    if (!parroquiaActiva || !parroquiaActiva.codigoAcceso) return;
    if (!esAdminOEncargado()) {
        window.mostrarMensajeResponsabilidad(parroquiaActiva.nombre);
        return;
    }
    navigator.clipboard.writeText(parroquiaActiva.codigoAcceso).then(() => {
        mostrarToastVerde("Código copiado al portapapeles");
    }).catch(err => {
        prompt("Copia el código manualmente:", parroquiaActiva.codigoAcceso);
    });
};

window.compartirCodigoWhatsApp = () => {
    if (!parroquiaActiva || !parroquiaActiva.codigoAcceso) return;
    if (!esAdminOEncargado()) {
        mostrarAlerta(`Solo el Cantor Encargado y el Administrador principal pueden compartir el código de 16 caracteres.`, "Acceso Restringido", "lock");
        return;
    }
    const mensaje = `🕊️ *Acceso a la Parroquia ${parroquiaActiva.nombre}*\n\n` +
        `Para unirte a las preparaciones de cantos de nuestra comunidad en la app Resucitó, ingresa este código de 16 caracteres:\n\n` +
        `🔑 *${parroquiaActiva.codigoAcceso}*\n\n` +
        `Entra aquí: https://es.laantillana.com/parroquia.html`;
    
    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
};

window.regenerarCodigo16 = async () => {
    if (!parroquiaActiva) return;
    if (!esAdminOEncargado()) {
        mostrarAlerta("Solo el Cantor Encargado y el Administrador principal pueden regenerar el código.", "Acceso Restringido", "lock");
        return;
    }
    if (!confirm("⚠️ ¿Deseas regenerar el código de 16 caracteres? El código anterior quedará invalidado.")) return;

    const nuevoCod = generarCodigo16();
    try {
        await updateDoc(doc(db, "parroquias", parroquiaActiva.id), {
            codigoAcceso: nuevoCod
        });
        parroquiaActiva.codigoAcceso = nuevoCod;
        const txtCodigo = document.getElementById('display-codigo-16-texto');
        if (txtCodigo) txtCodigo.textContent = nuevoCod;
        mostrarToastVerde("Nuevo código generado");
    } catch (e) {
        mostrarAlerta("Error regenerando código: " + e.message, "Error", "error");
    }
};

// --- GESTIÓN DE MIEMBROS Y SOLICITUDES ---
let filtroParroquiaModalMiembros = '__TODAS__';

function formatearFechaLegible(isoStr) {
    if (!isoStr) return '';
    try {
        const d = new Date(isoStr);
        if (isNaN(d.getTime())) return isoStr;
        return d.toLocaleDateString('es-DO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch(e) {
        return isoStr;
    }
}

function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

window.abrirModalMiembrosConFiltro = async (parrId) => {
    filtroParroquiaModalMiembros = parrId || '__TODAS__';
    const modalAdmin = document.getElementById('modal-admin-parroquias');
    if (modalAdmin) modalAdmin.style.display = 'none';
    await window.abrirModalMiembros(filtroParroquiaModalMiembros);
};

window.abrirModalMiembros = async (parroquiaIdFiltro = null) => {
    if (typeof parroquiaIdFiltro !== 'string') parroquiaIdFiltro = null;
    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    if (!parroquiaActiva && !esSuperAdmin) return;

    // Recargar parroquias desde Firestore para asegurar que las solicitudes estén al día
    await cargarTodasLasParroquias();

    // Contar total de pendientes en todas las parroquias
    let totalPendientesGlobal = 0;
    todasLasParroquias.forEach(p => {
        totalPendientesGlobal += (p.solicitudesPendientes || []).length;
    });

    if (parroquiaIdFiltro) {
        filtroParroquiaModalMiembros = parroquiaIdFiltro;
    } else if (esSuperAdmin) {
        const pendientesEnActiva = (parroquiaActiva?.solicitudesPendientes || []).length;
        if (pendientesEnActiva > 0) {
            filtroParroquiaModalMiembros = parroquiaActiva.id;
        } else if (totalPendientesGlobal > 0) {
            filtroParroquiaModalMiembros = '__TODAS__';
        } else if (parroquiaActiva) {
            filtroParroquiaModalMiembros = parroquiaActiva.id;
        } else {
            filtroParroquiaModalMiembros = '__TODAS__';
        }
    } else {
        filtroParroquiaModalMiembros = parroquiaActiva?.id || '';
    }

    const modal = document.getElementById('modal-gestionar-miembros');
    window.cambiarTabMiembros('solicitudes');

    poblarSelectorParroquiaModalMiembros();
    renderizarPestaniasMiembros();
    if (modal) modal.style.display = 'flex';

    // Cargar usuarios registrados de Firebase para autocompletar si es encargado
    if (usuariosRegistradosCache.length === 0) {
        try {
            const snap = await getDocs(collection(db, "registered_users"));
            usuariosRegistradosCache = snap.docs.map(d => d.data()).filter(u => u && u.email && !u.deleted);
            const dl = document.getElementById('datalist-usuarios-registrados');
            if (dl) {
                dl.innerHTML = usuariosRegistradosCache.map(u => `
                    <option value="${u.email}">${u.displayName ? `${u.displayName} (${u.email})` : u.email}</option>
                `).join('');
            }
        } catch(e) {
            console.warn("No se pudieron cargar registered_users:", e);
        }
    }
};

window.cambiarTabMiembros = (tab) => {
    document.querySelectorAll('.tab-btn-miembro').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('[id^="subtab-"]').forEach(p => p.style.display = 'none');

    const panel = document.getElementById(`subtab-${tab}`);
    if (panel) panel.style.display = 'block';

    const btns = document.querySelectorAll('.tab-btn-miembro');
    if (tab === 'solicitudes' && btns[0]) btns[0].classList.add('active');
    if (tab === 'miembros' && btns[1]) btns[1].classList.add('active');
    if (tab === 'agregar' && btns[2]) btns[2].classList.add('active');
};

function poblarSelectorParroquiaModalMiembros() {
    const boxSelector = document.getElementById('box-selector-parroquia-miembros');
    const select = document.getElementById('select-parroquia-filtro-miembros');
    const badgeGlobal = document.getElementById('badge-filtro-solicitudes-global');
    if (!boxSelector || !select) return;

    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    if (!esSuperAdmin) {
        boxSelector.style.display = 'none';
        return;
    }

    boxSelector.style.display = 'block';

    let totalPendientesGlobal = 0;
    todasLasParroquias.forEach(p => {
        totalPendientesGlobal += (p.solicitudesPendientes || []).length;
    });

    if (badgeGlobal) {
        if (totalPendientesGlobal > 0) {
            badgeGlobal.textContent = `${totalPendientesGlobal} pendiente(s)`;
            badgeGlobal.style.display = 'inline-block';
        } else {
            badgeGlobal.style.display = 'none';
        }
    }

    let options = `<option value="__TODAS__" ${filtroParroquiaModalMiembros === '__TODAS__' ? 'selected' : ''}>🌐 Todas las Parroquias (${totalPendientesGlobal} solicitudes pendientes)</option>`;

    options += todasLasParroquias.map(p => {
        const numP = (p.solicitudesPendientes || []).length;
        const numBadge = numP > 0 ? ` 🔔 [${numP} pendiente${numP > 1 ? 's' : ''}]` : '';
        const sectorText = p.sector ? ` (${p.sector})` : '';
        const isSel = (filtroParroquiaModalMiembros === p.id);
        return `<option value="${p.id}" ${isSel ? 'selected' : ''}>🏛️ ${p.nombre}${sectorText}${numBadge}</option>`;
    }).join('');

    select.innerHTML = options;

    if (!select.dataset.hasChangeListener) {
        select.dataset.hasChangeListener = "true";
        select.addEventListener('change', () => {
            filtroParroquiaModalMiembros = select.value;
            renderizarPestaniasMiembros();
        });
    }
}

function renderizarPestaniasMiembros() {
    const esSuperAdmin = (usuarioActual?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;
    const filtro = filtroParroquiaModalMiembros;

    let listaSolicitudes = [];
    let listaMiembros = [];
    let parroquiaSeleccionadaActual = null;

    if (filtro === '__TODAS__' && esSuperAdmin) {
        todasLasParroquias.forEach(p => {
            const pendientes = p.solicitudesPendientes || [];
            pendientes.forEach(s => {
                listaSolicitudes.push({
                    ...s,
                    parroquiaId: p.id,
                    parroquiaNombre: p.nombre,
                    parroquiaSector: p.sector || '',
                    parroquiaProvincia: p.provincia || '',
                    parroquiaPais: p.pais || ''
                });
            });
        });

        parroquiaSeleccionadaActual = parroquiaActiva || todasLasParroquias[0];
        listaMiembros = parroquiaSeleccionadaActual ? (parroquiaSeleccionadaActual.miembros || []) : [];
    } else {
        parroquiaSeleccionadaActual = todasLasParroquias.find(p => p.id === filtro) || parroquiaActiva;
        if (parroquiaSeleccionadaActual) {
            const pend = parroquiaSeleccionadaActual.solicitudesPendientes || [];
            listaSolicitudes = pend.map(s => ({
                ...s,
                parroquiaId: parroquiaSeleccionadaActual.id,
                parroquiaNombre: parroquiaSeleccionadaActual.nombre,
                parroquiaSector: parroquiaSeleccionadaActual.sector || '',
                parroquiaProvincia: parroquiaSeleccionadaActual.provincia || '',
                parroquiaPais: parroquiaSeleccionadaActual.pais || ''
            }));
            listaMiembros = parroquiaSeleccionadaActual.miembros || [];
        }
    }

    // Ordenar: más recientes primero
    listaSolicitudes.sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));

    const numSol = document.getElementById('tab-num-solicitudes');
    const numMiem = document.getElementById('tab-num-miembros');
    if (numSol) numSol.textContent = listaSolicitudes.length;
    if (numMiem) numMiem.textContent = listaMiembros.length;

    // Render solicitudes
    const contenedorSol = document.getElementById('lista-solicitudes-pendientes');
    if (contenedorSol) {
        if (listaSolicitudes.length === 0) {
            const msg = (filtro === '__TODAS__')
                ? "No hay solicitudes pendientes en ninguna parroquia."
                : `No hay solicitudes pendientes para ${parroquiaSeleccionadaActual ? parroquiaSeleccionadaActual.nombre : 'esta parroquia'}.`;
            contenedorSol.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 28px;">${msg}</p>`;
        } else {
            contenedorSol.innerHTML = listaSolicitudes.map((s) => {
                const nombreParr = s.parroquiaNombre || 'Parroquia';
                const sectorParr = s.parroquiaSector ? ` • ${s.parroquiaSector}` : '';
                const provParr = s.parroquiaProvincia ? ` • ${s.parroquiaProvincia}` : '';
                const paisParr = s.parroquiaPais ? ` (${s.parroquiaPais})` : '';
                const fechaTxt = formatearFechaLegible(s.fecha);
                const parrId = s.parroquiaId;

                return `
                    <div class="miembro-fila" style="flex-direction: column; align-items: stretch; gap: 8px; padding: 12px 14px; border: 1.5px solid #e2e8f0; border-radius: 10px; margin-bottom: 12px; background: #ffffff;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; flex-wrap: wrap;">
                            <div class="miembro-fila-info">
                                <span class="miembro-fila-nombre" style="font-size: 0.96rem; font-weight: 700; color: #1e293b;">
                                    ${s.displayName || s.email}
                                </span>
                                <span class="miembro-fila-email" style="font-size: 0.83rem; color: #475569;">
                                    ✉️ ${s.email}
                                </span>
                            </div>
                            <span style="font-size: 0.74rem; color: #64748b; font-weight: 500; background: #f1f5f9; padding: 3px 8px; border-radius: 6px;">
                                🕒 ${fechaTxt}
                            </span>
                        </div>

                        <!-- Parroquia solicitada -->
                        <div style="display: flex; align-items: center; gap: 6px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 6px 10px; border-radius: 6px; font-size: 0.84rem; color: #1e293b;">
                            <span class="material-symbols-outlined" style="font-size: 16px; color: var(--accent-color, #d01212);">church</span>
                            <span>Parroquia Solicitada: <b>${nombreParr}</b>${sectorParr}${provParr}${paisParr}</span>
                        </div>

                        <!-- Botones de Acción -->
                        <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 4px; flex-wrap: wrap;">
                            <button type="button" class="btn-parroquia-top" style="background: #dcfce7; color: #15803d; border-color: #86efac; padding: 6px 14px; font-weight: 700; font-size: 0.84rem;" onclick="window.aceptarSolicitud('${s.email}', '${escapeHtml(s.displayName || '')}', '${parrId}')">
                                <span class="material-symbols-outlined" style="font-size: 16px;">check</span> Aceptar como Cantor
                            </button>
                            <button type="button" class="btn-parroquia-top" style="background: #fee2e2; color: #b91c1c; border-color: #fca5a5; padding: 6px 12px; font-weight: 700; font-size: 0.84rem;" onclick="window.rechazarSolicitud('${s.email}', '${parrId}')">
                                <span class="material-symbols-outlined" style="font-size: 16px;">close</span> Rechazar
                            </button>
                            ${(esSuperAdmin && parroquiaActiva?.id !== parrId) ? `
                            <button type="button" class="btn-parroquia-top" style="padding: 6px 10px; font-size: 0.82rem;" title="Activar esta parroquia en pantalla principal" onclick="window.seleccionarParroquiaDesdeAdmin('${parrId}')">
                                <span class="material-symbols-outlined" style="font-size: 16px;">church</span> Ir a Parroquia
                            </button>
                            ` : ''}
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Render miembros
    const contenedorMiem = document.getElementById('lista-miembros-activos');
    if (contenedorMiem) {
        const nombreHeader = parroquiaSeleccionadaActual ? parroquiaSeleccionadaActual.nombre : '';
        const subtituloMiem = (esSuperAdmin && filtro === '__TODAS__')
            ? `<div style="font-size: 0.8rem; color: #64748b; margin-bottom: 10px;">Mostrando miembros de: <b>${nombreHeader}</b> (selecciona otra parroquia arriba para ver sus miembros)</div>`
            : '';

        if (listaMiembros.length === 0) {
            contenedorMiem.innerHTML = subtituloMiem + `<p style="text-align: center; color: var(--text-muted); padding: 24px;">No hay miembros registrados aún.</p>`;
        } else {
            const puedeCambiarRoles = esAdminOEncargado();
            contenedorMiem.innerHTML = subtituloMiem + listaMiembros.map(m => {
                const esEncargadoParr = m.rol === 'encargado' || m.rol === 'admin';
                const badgeClass = esEncargadoParr ? 'badge-encargado' : (m.rol === 'asistente' ? 'badge-asistente' : 'badge-cantor');
                const badgeLabel = esEncargadoParr ? 'ENCARGADO' : (m.rol === 'asistente' ? 'ASISTENTE' : 'CANTOR');

                return `
                <div class="miembro-fila" style="background: rgba(0,0,0,0.02); border-radius: 12px; padding: 12px 14px; margin-bottom: 8px;">
                    <div class="miembro-fila-info">
                        <span class="miembro-fila-nombre" style="font-size: 0.95rem; font-weight: 700; color: #1e293b;">${m.displayName || m.email}</span>
                        <span class="miembro-fila-email" style="font-size: 0.8rem; color: #64748b;">${m.email}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        ${puedeCambiarRoles && !esEncargadoParr ? `
                            <select onchange="window.cambiarRolMiembroParroquia('${m.email}', this.value, '${parroquiaSeleccionadaActual?.id}')" style="font-size: 0.78rem; font-weight: 700; padding: 3px 6px; border-radius: 6px; border: 1px solid #cbd5e1; background: #fff; cursor: pointer;">
                                <option value="cantor" ${m.rol === 'cantor' || !m.rol ? 'selected' : ''}>CANTOR</option>
                                <option value="asistente" ${m.rol === 'asistente' ? 'selected' : ''}>ASISTENTE</option>
                            </select>
                        ` : `
                            <span class="parroquia-badge-rol ${badgeClass}" style="letter-spacing: 0.5px; font-weight: 800; padding: 4px 10px; border-radius: 8px;">
                                ${badgeLabel}
                            </span>
                        `}
                        ${m.email !== usuarioActual?.email && puedeCambiarRoles ? `
                            <button class="btn-parroquia-top" style="padding: 4px 8px; color: #b91c1c; border-radius: 8px;" title="Eliminar miembro" onclick="window.eliminarMiembroParroquia('${m.email}', '${parroquiaSeleccionadaActual?.id}')">
                                <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
            }).join('');
        }
    }
}

window.aceptarSolicitud = async (email, displayName, parroquiaId = null) => {
    const targetId = parroquiaId || parroquiaActiva?.id;
    if (!targetId) {
        mostrarAlerta("No se pudo identificar la parroquia de la solicitud.", "Error", "error");
        return;
    }

    const targetParr = todasLasParroquias.find(p => p.id === targetId);
    const nombreParr = targetParr ? targetParr.nombre : targetId;

    const emailNorm = (email || '').toLowerCase().trim();
    const nuevoMiembro = {
        email: emailNorm,
        displayName: displayName || emailNorm.split('@')[0],
        rol: 'cantor',
        fechaIngreso: new Date().toISOString()
    };

    try {
        const remaining = (targetParr?.solicitudesPendientes || []).filter(
            s => s.email?.toLowerCase().trim() !== emailNorm
        );

        await updateDoc(doc(db, "parroquias", targetId), {
            miembros: arrayUnion(nuevoMiembro),
            solicitudesPendientes: remaining
        });

        if (targetParr) {
            targetParr.solicitudesPendientes = remaining;
            targetParr.miembros = targetParr.miembros || [];
            if (!targetParr.miembros.some(m => m.email?.toLowerCase().trim() === emailNorm)) {
                targetParr.miembros.push(nuevoMiembro);
            }
        }
        if (parroquiaActiva && parroquiaActiva.id === targetId) {
            parroquiaActiva.solicitudesPendientes = remaining;
            parroquiaActiva.miembros = targetParr?.miembros || [];
        }

        try {
            localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
        } catch(e) {}

        renderizarPestaniasMiembros();
        renderizarBarraParroquiaActiva();
        poblarSelectorParroquiaModalMiembros();

        mostrarToastVerde(`Hermano ${displayName || emailNorm} aceptado como cantor en ${nombreParr}`);
    } catch (e) {
        console.error("Error al aceptar solicitud:", e);
        mostrarAlerta("Error al aceptar solicitud: " + e.message, "Error", "error");
    }
};

window.rechazarSolicitud = async (email, parroquiaId = null) => {
    const targetId = parroquiaId || parroquiaActiva?.id;
    if (!targetId) return;

    const targetParr = todasLasParroquias.find(p => p.id === targetId);
    const emailNorm = (email || '').toLowerCase().trim();

    try {
        const remaining = (targetParr?.solicitudesPendientes || []).filter(
            s => s.email?.toLowerCase().trim() !== emailNorm
        );

        await updateDoc(doc(db, "parroquias", targetId), {
            solicitudesPendientes: remaining
        });

        if (targetParr) {
            targetParr.solicitudesPendientes = remaining;
        }
        if (parroquiaActiva && parroquiaActiva.id === targetId) {
            parroquiaActiva.solicitudesPendientes = remaining;
        }

        try {
            localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
        } catch(e) {}

        renderizarPestaniasMiembros();
        renderizarBarraParroquiaActiva();
        poblarSelectorParroquiaModalMiembros();

        mostrarToastVerde("Solicitud rechazada");
    } catch (e) {
        console.error("Error al rechazar solicitud:", e);
        mostrarAlerta("Error al rechazar solicitud: " + e.message, "Error", "error");
    }
};

window.agregarMiembroDirecto = async () => {
    const targetId = (filtroParroquiaModalMiembros && filtroParroquiaModalMiembros !== '__TODAS__') 
        ? filtroParroquiaModalMiembros 
        : parroquiaActiva?.id;

    if (!targetId) {
        mostrarAlerta("Por favor selecciona una parroquia específica arriba para añadir al miembro.", "Selecciona una Parroquia", "church");
        return;
    }

    const targetParr = todasLasParroquias.find(p => p.id === targetId) || parroquiaActiva;

    const inputEmail = document.getElementById('input-nuevo-miembro-email');
    const inputNombre = document.getElementById('input-nuevo-miembro-nombre');
    const selectRol = document.getElementById('select-nuevo-miembro-rol');

    const email = inputEmail ? inputEmail.value.trim().toLowerCase() : '';
    const nombre = inputNombre ? inputNombre.value.trim() : '';
    const rol = selectRol ? selectRol.value : 'cantor';

    if (!email || !email.includes('@')) {
        mostrarAlerta("Ingresa un correo electrónico válido.", "Correo Requerido", "email");
        return;
    }

    const existe = (targetParr.miembros || []).some(m => m.email?.toLowerCase().trim() === email);
    if (existe) {
        mostrarAlerta("Este usuario ya es miembro de la parroquia.", "Ya registrado", "info");
        return;
    }

    const nuevoMiembro = {
        email: email,
        displayName: nombre || email.split('@')[0],
        rol: rol,
        fechaIngreso: new Date().toISOString()
    };

    try {
        const remaining = (targetParr.solicitudesPendientes || []).filter(s => s.email?.toLowerCase().trim() !== email);

        await updateDoc(doc(db, "parroquias", targetId), {
            miembros: arrayUnion(nuevoMiembro),
            solicitudesPendientes: remaining
        });

        targetParr.miembros = targetParr.miembros || [];
        targetParr.miembros.push(nuevoMiembro);
        targetParr.solicitudesPendientes = remaining;

        if (parroquiaActiva && parroquiaActiva.id === targetId) {
            parroquiaActiva.miembros = targetParr.miembros;
            parroquiaActiva.solicitudesPendientes = remaining;
        }

        try {
            localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
        } catch(e) {}

        if (inputEmail) inputEmail.value = '';
        if (inputNombre) inputNombre.value = '';
        window.cambiarTabMiembros('miembros');
        renderizarPestaniasMiembros();
        mostrarToastVerde(`Hermano ${email} agregado como ${rol}`);
    } catch (e) {
        mostrarAlerta("Error agregando miembro: " + e.message, "Error", "error");
    }
};

window.cambiarRolMiembroParroquia = async (email, nuevoRol, parroquiaId = null) => {
    const targetId = parroquiaId || parroquiaActiva?.id;
    if (!targetId) return;

    const targetParr = todasLasParroquias.find(p => p.id === targetId) || parroquiaActiva;
    const emailNorm = (email || '').toLowerCase().trim();

    try {
        const miembrosActualizados = (targetParr.miembros || []).map(m => {
            if (m.email?.toLowerCase().trim() === emailNorm) {
                return { ...m, rol: nuevoRol };
            }
            return m;
        });

        await updateDoc(doc(db, "parroquias", targetId), {
            miembros: miembrosActualizados
        });

        targetParr.miembros = miembrosActualizados;
        if (parroquiaActiva && parroquiaActiva.id === targetId) {
            parroquiaActiva.miembros = miembrosActualizados;
            renderizarBarraParroquiaActiva();
        }

        try {
            localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
        } catch(e) {}

        renderizarPestaniasMiembros();
        mostrarToastVerde(`Rol de ${email} actualizado a ${nuevoRol.toUpperCase()}`);
    } catch(e) {
        console.error("Error al actualizar rol:", e);
        mostrarAlerta("Error al actualizar rol: " + e.message, "Error", "error");
    }
};

window.eliminarMiembroParroquia = async (email, parroquiaId = null) => {
    const targetId = parroquiaId || parroquiaActiva?.id;
    if (!targetId) return;

    const targetParr = todasLasParroquias.find(p => p.id === targetId) || parroquiaActiva;
    if (!confirm(`¿Eliminar a ${email} de la parroquia?`)) return;

    try {
        const miembro = (targetParr.miembros || []).find(m => m.email?.toLowerCase().trim() === email.toLowerCase().trim());
        if (miembro) {
            await updateDoc(doc(db, "parroquias", targetId), {
                miembros: arrayRemove(miembro)
            });

            targetParr.miembros = (targetParr.miembros || []).filter(m => m.email?.toLowerCase().trim() !== email.toLowerCase().trim());
            if (parroquiaActiva && parroquiaActiva.id === targetId) {
                parroquiaActiva.miembros = targetParr.miembros;
            }

            try {
                localStorage.setItem('resucito_parroquias_cache', JSON.stringify(todasLasParroquias));
            } catch(e) {}

            renderizarPestaniasMiembros();
            mostrarToastVerde("Miembro eliminado");
        }
    } catch (e) {
        mostrarAlerta("Error al eliminar miembro: " + e.message, "Error", "error");
    }
};

// --- GESTIÓN DE SELECCIÓN Y MOMENTOS LITÚRGICOS ---
window.setMomentoParroquia = (elemento, momento) => {
    momentoSeleccionado = momento;
    if (elemento) {
        const padre = elemento.parentElement;
        padre.querySelectorAll('.opcion-momento').forEach(el => el.classList.remove('active'));
        elemento.classList.add('active');
    }
    renderizarListaCantosParroquia(todosLosCantos);
};

window.toggleCantoParroquia = (id) => {
    const stringId = String(id);
    const index = cantosSeleccionados.findIndex(item => String(item.id) === stringId);

    if (index !== -1) {
        cantosSeleccionados.splice(index, 1);
    } else {
        let etiqueta;
        if (momentoSeleccionado === 'Libre') {
            const numericos = cantosSeleccionados
                .filter(item => !['E', 'P', 'L', 'C', 'S', 'CS', 'F'].includes(item.etiqueta))
                .map(item => parseInt(item.etiqueta))
                .filter(num => !isNaN(num))
                .sort((a, b) => a - b);
            
            let num = 1;
            while (numericos.includes(num)) num++;
            etiqueta = num.toString();
        } else {
            etiqueta = MAPA_ETIQUETAS[momentoSeleccionado] || "N";
        }

        const songMeta = todosLosCantos.find(c => String(c.id) === stringId);
        cantosSeleccionados.push({
            id: stringId,
            etiqueta: etiqueta,
            cantor: '', // Sin asignar inicialmente
            acorde: "0",
            cejilla: (songMeta && songMeta.cejilla) ? String(songMeta.cejilla) : "0",
            tono: (songMeta && songMeta.acorde) ? songMeta.acorde : "La"
        });

        // Orden litúrgico por defecto
        ordenarCantosPorLiturgia(cantosSeleccionados);
    }

    actualizarInterfazSeleccionParroquia();
    dispararAutoguardado();
};

window.moverCantoColaParroquia = (index, direccion) => {
    const targetIdx = index + direccion;
    if (targetIdx < 0 || targetIdx >= cantosSeleccionados.length) return;

    const temp = cantosSeleccionados[index];
    cantosSeleccionados[index] = cantosSeleccionados[targetIdx];
    cantosSeleccionados[targetIdx] = temp;

    if (preparacionActiva) {
        preparacionActiva.cantos = [...cantosSeleccionados];
    }

    actualizarInterfazSeleccionParroquia();
    if (document.getElementById('box-asignacion-cantores')?.style.display === 'block') {
        renderizarAreaAsignacionCantores();
    }
    dispararAutoguardado();
    renderizarListaPreparaciones();
};

function actualizarInterfazSeleccionParroquia() {
    const contador = document.getElementById('contador-seleccion-parroquia');
    if (contador) contador.innerText = cantosSeleccionados.length;

    const cola = document.getElementById('cola-seleccion-parroquia');
    if (cola) {
        cola.innerHTML = '';
        cantosSeleccionados.forEach((item, idx) => {
            const c = todosLosCantos.find(can => String(can.id) === String(item.id));
            if (c) {
                const tag = document.createElement('div');
                tag.className = 'canto-tag';
                tag.innerHTML = `
                    <span>${item.etiqueta}</span>
                    <span style="font-weight: 600;">${c.title || c.titulo}</span>
                    ${item.tono ? `<small style="opacity:0.75; font-weight:600; margin-left:4px;">(${item.tono})</small>` : ''}
                    <span class="canto-tag-controles" onclick="event.stopPropagation()" style="display: inline-flex; align-items: center; gap: 2px; margin-left: 6px;">
                        <button type="button" class="btn-tag-mover" title="Mover antes" ${idx === 0 ? 'disabled' : ''} onclick="window.moverCantoColaParroquia(${idx}, -1)">◀</button>
                        <button type="button" class="btn-tag-mover" title="Mover después" ${idx === cantosSeleccionados.length - 1 ? 'disabled' : ''} onclick="window.moverCantoColaParroquia(${idx}, 1)">▶</button>
                        <button type="button" class="btn-tag-quitar" title="Quitar canto" onclick="window.toggleCantoParroquia('${item.id}')">✕</button>
                    </span>
                `;
                tag.onclick = (e) => {
                    e.stopPropagation();
                    window.toggleCantoParroquia(item.id);
                };
                cola.appendChild(tag);
            }
        });
    }

    // Actualizar checkboxes en catálogo
    document.querySelectorAll('#contenedor-seleccion-parroquia .item-canto input[type="checkbox"]').forEach(input => {
        const idInput = input.getAttribute('data-id');
        input.checked = cantosSeleccionados.some(item => String(item.id) === String(idInput));
    });
}

function renderizarListaCantosParroquia(lista) {
    const contenedor = document.getElementById('contenedor-seleccion-parroquia');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    const listaOrdenadaParaMostrar = [...lista].sort((a, b) => {
        if (momentoSeleccionado === 'Libre') return 0;
        const esDelMomentoA = cantoPerteneceAMomento(a, momentoSeleccionado);
        const esDelMomentoB = cantoPerteneceAMomento(b, momentoSeleccionado);
        if (esDelMomentoA && !esDelMomentoB) return -1;
        if (!esDelMomentoA && esDelMomentoB) return 1;
        return 0;
    });

    listaOrdenadaParaMostrar.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'item-canto';
        div.tabIndex = 0;

        const esDelMomento = cantoPerteneceAMomento(canto, momentoSeleccionado);
        if (momentoSeleccionado !== 'Libre' && !esDelMomento) {
            div.style.opacity = "0.65";
        }

        const nombreAMostrar = canto.title || canto.titulo || "Sin título";
        const isChecked = cantosSeleccionados.some(item => String(item.id) === String(canto.id));

        div.onclick = () => window.toggleCantoParroquia(canto.id);
        div.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.toggleCantoParroquia(canto.id);
            }
        };
        div.innerHTML = `
            <span class="titulo-canto-seleccion">${nombreAMostrar}</span>
            <label class="toggle-switch" onclick="event.stopPropagation()">
                <input type="checkbox" data-id="${canto.id}" ${isChecked ? 'checked' : ''} onchange="window.toggleCantoParroquia('${canto.id}')">
                <span class="toggle-slider"></span>
            </label>`;
        contenedor.appendChild(div);
    });
}

// Filtro de Cantos en vivo
window.filtrarSeleccionParroquia = () => {
    const input = document.getElementById('inputBuscadorCantosParroquia');
    const btnX = document.getElementById('btnLimpiarCantosParroquia');
    if (!input) return;

    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';

    const busquedaLimpia = normalizarTexto(input.value);
    const busquedaPegada = busquedaLimpia.replace(/\s/g, "");

    const filtrados = todosLosCantos.filter(canto => {
        const t = normalizarTexto(canto.title || canto.titulo || "");
        const s = normalizarTexto(canto.subtitle || canto.subtitulo || "");
        const c = normalizarTexto(canto.content || canto.letra || "");

        const poolConEspacios = `${t} ${s} ${c}`;
        const poolSinEspacios = poolConEspacios.replace(/\s/g, "");

        const palabras = busquedaLimpia.split(/\s+/).filter(p => p.length > 0);
        const coincidePalabras = palabras.length > 0 && palabras.every(p => poolConEspacios.includes(p));
        const coincideElastic = busquedaPegada.length > 2 && poolSinEspacios.includes(busquedaPegada);

        return busquedaLimpia === "" || coincidePalabras || coincideElastic;
    });

    renderizarListaCantosParroquia(filtrados);
};

window.limpiarBuscadorSeleccionParroquia = () => {
    const input = document.getElementById('inputBuscadorCantosParroquia');
    if (input) {
        input.value = '';
        window.filtrarSeleccionParroquia();
        input.focus();
    }
};

window.limpiarTodosLosCantosParroquia = () => {
    if (cantosSeleccionados.length === 0) return;
    cantosSeleccionados = [];
    actualizarInterfazSeleccionParroquia();
    renderizarListaCantosParroquia(todosLosCantos);
    dispararAutoguardado();
};

// --- GRABAR PREPARACIÓN (CREAR / EDITAR) ---
window.grabarPreparacion = async () => {
    const inputNombre = document.getElementById('prep-nombre');
    const inputFecha = document.getElementById('prep-fecha');
    const nombre = inputNombre ? inputNombre.value.trim() : '';
    const fecha = inputFecha ? inputFecha.value : new Date().toISOString().split('T')[0];

    if (!nombre) {
        mostrarAlerta("Ingresa un nombre para la preparación (ej: TO.S27, Pascua Vigilia...).", "Nombre Requerido", "edit_note");
        return;
    }

    if (cantosSeleccionados.length === 0) {
        mostrarAlerta("Selecciona al menos un canto para grabar la preparación.", "Selección Requerida", "playlist_add");
        return;
    }

    if (!parroquiaActiva) {
        mostrarAlerta("No tienes una parroquia activa seleccionada.", "Error", "error");
        return;
    }

    // Validación de nombres duplicados en la misma parroquia:
    // Si ya existe una preparación con el mismo nombre y no es la misma que se está editando,
    // se le agrega el año actual al final (ej: "TOS27 - 2026")
    let nombreFinal = nombre;
    const anioActual = new Date().getFullYear();
    const yaExisteNombre = preparacionesParroquia.some(p => {
        if (preparacionActiva && p.id === preparacionActiva.id) return false;
        return normalizarTexto(p.nombre || '') === normalizarTexto(nombreFinal);
    });

    if (yaExisteNombre) {
        if (!nombreFinal.includes(String(anioActual))) {
            nombreFinal = `${nombreFinal} - ${anioActual}`;
        } else {
            let contador = 2;
            let tempNombre = `${nombreFinal} (${contador})`;
            while (preparacionesParroquia.some(p => (!preparacionActiva || p.id !== preparacionActiva.id) && normalizarTexto(p.nombre || '') === normalizarTexto(tempNombre))) {
                contador++;
                tempNombre = `${nombreFinal} (${contador})`;
            }
            nombreFinal = tempNombre;
        }
        if (inputNombre) inputNombre.value = nombreFinal;
    }

    const prepId = preparacionActiva ? preparacionActiva.id : `prep_${Date.now()}`;
    const prepData = {
        id: prepId,
        nombre: nombreFinal,
        fecha: fecha,
        cantos: cantosSeleccionados,
        creadorUid: usuarioActual?.uid || 'anonimo',
        creadorNombre: usuarioActual?.displayName || usuarioActual?.email || 'Cantor',
        actualizado: new Date().toISOString()
    };

    try {
        await setDoc(doc(db, "parroquias", parroquiaActiva.id, "preparaciones", prepId), prepData, { merge: true });
        preparacionActiva = prepData;

        // Mostrar el área de Asignación de Cantores
        renderizarAreaAsignacionCantores();
        window.contraerSeccionPrepForm();

        mostrarToastVerde(`Preparación "${nombre}" grabada con éxito`);
    } catch (e) {
        console.error("Error al grabar preparación:", e);
        mostrarAlerta("Error al grabar la preparación: " + e.message, "Error", "error");
    }
};

window.cancelarEdicionPreparacion = () => {
    preparacionActiva = null;
    cantosSeleccionados = [];
    const inputNombre = document.getElementById('prep-nombre');
    if (inputNombre) inputNombre.value = '';
    const badgeModo = document.getElementById('badge-modo-prep');
    if (badgeModo) badgeModo.textContent = '';
    
    actualizarInterfazSeleccionParroquia();
    renderizarListaCantosParroquia(todosLosCantos);
    window.contraerSeccionPrepForm();

    const boxAsignacion = document.getElementById('box-asignacion-cantores');
    if (boxAsignacion) boxAsignacion.style.display = 'none';
};

// --- ÁREA DE ASIGNACIÓN DE CANTORES POR CANTO ---
function renderizarAreaAsignacionCantores() {
    const box = document.getElementById('box-asignacion-cantores');
    const contenedorFilas = document.getElementById('contenedor-filas-asignacion');
    const lblNombre = document.getElementById('nombre-prep-asignacion');

    if (!box || !contenedorFilas || !preparacionActiva) return;

    if (lblNombre) lblNombre.textContent = preparacionActiva.nombre;
    box.style.display = 'block';

    // Obtener nombres de cantores / miembros de la parroquia de forma unificada
    const listaCantores = obtenerListaNombresCantores();

    contenedorFilas.innerHTML = cantosSeleccionados.map((item, index) => {
        const c = todosLosCantos.find(can => String(can.id) === String(item.id));
        const titulo = c ? (c.title || c.titulo) : "Canto Desconocido";
        const baseChord = (c && c.acorde) ? c.acorde : 'La';
        const tonoActual = item.tono || baseChord;
        const cejillaActual = item.cejilla || "0";
        const cantorActual = item.cantor || '';

        // Opciones del select de cantor
        const opcionesCantores = [
            `<option value="">-- Sin Asignar --</option>`,
            ...listaCantores.map(cantor => `
                <option value="${cantor}" ${cantorActual === cantor ? 'selected' : ''}>${cantor}</option>
            `),
            `<option value="__OTRO__">+ Escribir otro cantor...</option>`
        ].join('');

        const esCantorPersonalizado = cantorActual && !listaCantores.includes(cantorActual);

        return `
            <div class="canto-asignacion-row" id="fila-asignacion-${index}">
                <div class="canto-asignacion-badge">${item.etiqueta}</div>
                <div class="canto-asignacion-info">
                    <div class="canto-asignacion-titulo">
                        <span>${titulo}</span>
                    </div>
                    <div class="canto-asignacion-meta">
                        <span>Original: <b>${baseChord}</b></span>
                        ${c && c.category ? `<span>Categoría: ${c.category}</span>` : ''}
                    </div>
                </div>

                <div class="canto-asignacion-controles">
                    <!-- Reordenar posición (Subir / Bajar) -->
                    <div class="canto-reorder-wrapper" style="display: flex; align-items: center; gap: 2px;">
                        <button type="button" class="btn-mover-canto" title="Subir canto" ${index === 0 ? 'disabled' : ''} onclick="window.moverCantoAsignacion(${index}, -1)">
                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_upward</span>
                        </button>
                        <button type="button" class="btn-mover-canto" title="Bajar canto" ${index === cantosSeleccionados.length - 1 ? 'disabled' : ''} onclick="window.moverCantoAsignacion(${index}, 1)">
                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_downward</span>
                        </button>
                    </div>

                    <!-- Selector de Tono -->
                    <div class="canto-tuning-wrapper" title="Tono de la interpretación">
                        <button class="btn-tuning" onclick="window.cambiarTonoCanto(${index}, -1)">-</button>
                        <span class="badge-tono-actual" id="badge-tono-${index}">${tonoActual}</span>
                        <button class="btn-tuning" onclick="window.cambiarTonoCanto(${index}, 1)">+</button>
                    </div>

                    <!-- Selector de Cejilla -->
                    <div style="display: flex; align-items: center; gap: 4px;">
                        <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted, #666);">Cej:</span>
                        <select onchange="window.cambiarCejillaCanto(${index}, this.value)" style="padding: 4px 6px; border-radius: 6px; border: 1.5px solid var(--panel-border, #ccc); font-weight: 600; background: #fff;">
                            ${[0,1,2,3,4,5,6,7,8,9].map(num => `
                                <option value="${num}" ${String(cejillaActual) === String(num) ? 'selected' : ''}>${num === 0 ? 'Sin cejilla' : num}</option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- Selector de Cantor -->
                    <div class="canto-cantor-wrapper">
                        <span class="material-symbols-outlined">person</span>
                        <select id="select-cantor-${index}" onchange="window.cambiarCantorCanto(${index}, this.value)">
                            ${opcionesCantores}
                        </select>
                        <input type="text" id="input-otro-cantor-${index}" placeholder="Nombre del cantor" value="${cantorActual}" style="${esCantorPersonalizado ? 'display:block;' : 'display:none;'} min-width: 130px; border-bottom: 1.5px solid var(--accent-color, #d01212); padding: 2px;" oninput="window.guardarOtroCantor(${index}, this.value)">
                    </div>

                    <!-- Botón para ver en Visor -->
                    <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Ver canto en visor" onclick="window.abrirCantoEnVisor('${item.id}')">
                        <span class="material-symbols-outlined" style="font-size: 16px;">visibility</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

window.moverCantoAsignacion = (index, direccion) => {
    if (!puedeGestionarPreparacionesYCantores()) return;
    const targetIdx = index + direccion;
    if (targetIdx < 0 || targetIdx >= cantosSeleccionados.length) return;

    const temp = cantosSeleccionados[index];
    cantosSeleccionados[index] = cantosSeleccionados[targetIdx];
    cantosSeleccionados[targetIdx] = temp;

    if (preparacionActiva) {
        preparacionActiva.cantos = [...cantosSeleccionados];
    }

    renderizarAreaAsignacionCantores();
    actualizarInterfazSeleccionParroquia();
    dispararAutoguardado();
    renderizarListaPreparaciones();
};

window.reordenarLiturgicamentePreparacionActiva = () => {
    if (!puedeGestionarPreparacionesYCantores()) return;
    if (!cantosSeleccionados || cantosSeleccionados.length === 0) return;
    ordenarCantosPorLiturgia(cantosSeleccionados);
    if (preparacionActiva) {
        preparacionActiva.cantos = [...cantosSeleccionados];
    }
    renderizarAreaAsignacionCantores();
    actualizarInterfazSeleccionParroquia();
    dispararAutoguardado();
    renderizarListaPreparaciones();
    mostrarToastVerde("Cantos ordenados según liturgia");
};

// Transposición de Tono por Canto
window.cambiarTonoCanto = (index, delta) => {
    if (!cantosSeleccionados[index]) return;
    const c = cantosSeleccionados[index];
    const offsetActual = parseInt(c.acorde || 0) + delta;
    c.acorde = String(offsetActual);
    c.tono = calcularTonoTranspuesto(c.id, offsetActual);

    const badge = document.getElementById(`badge-tono-${index}`);
    if (badge) badge.textContent = c.tono;

    dispararAutoguardado();
};

window.cambiarCejillaCanto = (index, valor) => {
    if (!cantosSeleccionados[index]) return;
    cantosSeleccionados[index].cejilla = String(valor);
    dispararAutoguardado();
};

window.cambiarCantorCanto = (index, valor) => {
    if (!cantosSeleccionados[index]) return;
    const inputOtro = document.getElementById(`input-otro-cantor-${index}`);

    if (valor === '__OTRO__') {
        if (inputOtro) {
            inputOtro.style.display = 'block';
            inputOtro.focus();
        }
    } else {
        if (inputOtro) inputOtro.style.display = 'none';
        cantosSeleccionados[index].cantor = valor;
        dispararAutoguardado();
    }
};

window.guardarOtroCantor = (index, valor) => {
    if (!cantosSeleccionados[index]) return;
    cantosSeleccionados[index].cantor = valor.trim();
    dispararAutoguardado();
};

// --- AUTOGUARDADO EN TIEMPO REAL ---
window.toggleAutoguardado = () => {
    autoguardadoActivo = !autoguardadoActivo;
    localStorage.setItem('parroquia_autoguardado', autoguardadoActivo ? 'true' : 'false');
    actualizarBotonAutoguardado();
};

function actualizarBotonAutoguardado() {
    const btn = document.getElementById('btn-toggle-autoguardado');
    const lbl = document.getElementById('lbl-auto-status');
    if (!btn || !lbl) return;

    if (autoguardadoActivo) {
        btn.className = 'btn-toggle-auto activo';
        lbl.textContent = 'ACTIVADO';
    } else {
        btn.className = 'btn-toggle-auto inactivo';
        lbl.textContent = 'DESACTIVADO';
    }
}

function dispararAutoguardado() {
    if (!autoguardadoActivo || !preparacionActiva || !parroquiaActiva) return;

    const statusEl = document.getElementById('status-autoguardado');
    if (statusEl) {
        statusEl.className = 'status-autoguardado guardando';
        statusEl.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">sync</span> Guardando...`;
    }

    clearTimeout(timerAutoguardado);
    timerAutoguardado = setTimeout(async () => {
        await guardarCambiosPreparacionEnFirestore();
        if (statusEl) {
            statusEl.className = 'status-autoguardado';
            statusEl.innerHTML = `<span class="material-symbols-outlined" style="font-size: 16px;">check_circle</span> Guardado`;
        }
    }, 600);
}

async function guardarCambiosPreparacionEnFirestore() {
    if (!preparacionActiva || !parroquiaActiva) return;
    try {
        const prepRef = doc(db, "parroquias", parroquiaActiva.id, "preparaciones", preparacionActiva.id);
        await updateDoc(prepRef, {
            cantos: cantosSeleccionados,
            actualizado: new Date().toISOString()
        });
        preparacionActiva.cantos = [...cantosSeleccionados];
    } catch (e) {
        console.warn("Error en autoguardado de preparación:", e);
    }
}

window.guardarCambiosAsignacionManual = async (btn) => {
    if (!preparacionActiva || !parroquiaActiva) return;
    try {
        await guardarCambiosPreparacionEnFirestore();
        mostrarToastVerde("Preparación guardada correctamente");
        if (btn) {
            const orig = btn.innerHTML;
            btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Guardado`;
            setTimeout(() => { btn.innerHTML = orig; }, 2000);
        }

        // Ocultar pantalla de asignación al guardar
        const box = document.getElementById('box-asignacion-cantores');
        if (box) box.style.display = 'none';

        renderizarListaPreparaciones();

        const tarjeta = document.getElementById(`prep-tarjeta-${preparacionActiva.id}`);
        if (tarjeta) {
            tarjeta.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } catch (e) {
        mostrarAlerta("Error al guardar: " + e.message, "Error", "error");
    }
};

window.cerrarAsignacionCantores = () => {
    const box = document.getElementById('box-asignacion-cantores');
    if (box) box.style.display = 'none';

    const tarjeta = preparacionActiva ? document.getElementById(`prep-tarjeta-${preparacionActiva.id}`) : null;
    if (tarjeta) {
        tarjeta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        const wrapper = document.getElementById('wrapper-lista-preparaciones');
        if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};
window.cancelarAsignacionCantores = window.cerrarAsignacionCantores;

// --- LISTADO DE PREPARACIONES DE LA PARROQUIA ---
function renderizarListaPreparaciones(filtro = '') {
    const contenedor = document.getElementById('contenedor-tarjetas-preparaciones');
    const badgeCount = document.getElementById('contador-preparaciones-badge');
    if (!contenedor) return;

    // Preservar qué listas estaban desplegadas para que no se contraigan al actualizar
    const abiertas = new Set();
    document.querySelectorAll('.prep-cantos-detalle').forEach(el => {
        if (el.style.display === 'block') {
            const id = el.id.replace('detalle-prep-', '');
            abiertas.add(String(id));
        }
    });

    if (!preparacionesParroquia || preparacionesParroquia.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align: center; padding: 32px 16px; color: var(--text-muted, #6b7280);">
                <span class="material-symbols-outlined" style="font-size: 48px; opacity: 0.4;">playlist_remove</span>
                <p style="margin: 8px 0 0 0; font-size: 0.95rem;">No hay listas de cantos registradas aún en esta parroquia.</p>
                ${puedeGestionarPreparacionesYCantores() ? `
                <button class="btn-accion" style="margin-top: 14px;" onclick="window.expandirSeccionPrepForm()">
                    Crear Primera Lista
                </button>
                ` : ''}
            </div>
        `;
        if (badgeCount) badgeCount.textContent = '0 listas';
        return;
    }

    const filtroNorm = normalizarTexto(filtro);
    const filtradas = preparacionesParroquia.filter(p => {
        const n = normalizarTexto(p.nombre || '');
        const f = normalizarTexto(p.fecha || '');
        const cantoresStr = (p.cantos || []).map(c => normalizarTexto(c.cantor || '')).join(' ');
        return filtroNorm === '' || n.includes(filtroNorm) || f.includes(filtroNorm) || cantoresStr.includes(filtroNorm);
    });

    if (badgeCount) {
        badgeCount.textContent = `${filtradas.length} ${filtradas.length === 1 ? 'Lista' : 'listas'}`;
    }

    if (filtradas.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No se encontraron listas con ese filtro.</p>`;
        return;
    }

    const puedeEditar = puedeGestionarPreparacionesYCantores();

    contenedor.innerHTML = filtradas.map(prep => {
        const cantos = prep.cantos || [];
        const resumenCantores = cantos
            .filter(c => c.cantor)
            .map(c => c.cantor);
        const cantoresUnicos = Array.from(new Set(resumenCantores));
        const estaAbierta = abiertas.has(String(prep.id));

        return `
            <div class="prep-tarjeta" id="prep-tarjeta-${prep.id}">
                <div class="prep-tarjeta-header" onclick="window.toggleDetallePreparacion('${prep.id}')">
                    <div class="prep-tarjeta-info">
                        <h4>
                            <span class="material-symbols-outlined" style="color: var(--accent-color, #d01212); font-size: 20px;">event_note</span>
                            ${prep.nombre}
                        </h4>
                        <div class="prep-tarjeta-sub">
                            <span>📅 ${prep.fecha || 'Sin fecha'}</span>
                            <span>•</span>
                            <span>${cantos.length} cantos</span>
                            ${cantoresUnicos.length > 0 ? `<span class="prep-tarjeta-cantores-resumen"><span>•</span> <span>🎤 ${cantoresUnicos.join(', ')}</span></span>` : ''}
                        </div>
                    </div>

                    <div class="prep-tarjeta-acciones" onclick="event.stopPropagation()">
                        ${puedeEditar ? `
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Aplicar orden litúrgico por defecto" onclick="window.reordenarLiturgicamentePreparacion('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">low_priority</span>
                        </button>
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Editar y asignar cantores" onclick="window.cargarPreparacionParaEditar('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">edit</span>
                        </button>
                        ` : ''}
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Ver en Visor" onclick="window.abrirPreparacionEnVisor('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">visibility</span>
                        </button>
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Compartir en WhatsApp" onclick="window.compartirPreparacionWhatsApp('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">share</span>
                        </button>
                        ${puedeEditar ? `
                        <button class="btn-parroquia-top" style="padding: 6px 10px; color: #b91c1c;" title="Eliminar preparación" onclick="window.eliminarPreparacion('${prep.id}', '${prep.nombre}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                        </button>
                        ` : ''}
                    </div>
                </div>

                <!-- Detalle desplegable de cantos y cantores asignados (Filas con bandas) -->
                <div id="detalle-prep-${prep.id}" class="prep-cantos-detalle" style="display: ${estaAbierta ? 'block' : 'none'};">
                    ${cantos.map((item, idxCanto) => {
                        const c = todosLosCantos.find(can => String(can.id) === String(item.id));
                        const titulo = c ? (c.title || c.titulo) : "Canto Desconocido";
                        const tonoStr = item.tono ? `Tono: ${item.tono}` : '';
                        const cejStr = (item.cejilla && item.cejilla !== "0") ? `Cej. ${item.cejilla}` : '';
                        const meta = [tonoStr, cejStr].filter(Boolean).join(' | ');
                        const primerNombre = (item.cantor || '').trim().split(/\s+/)[0] || '';

                        const safeTitle = (titulo || '').replace(/"/g, '&quot;');
                        return `
                            <div class="prep-canto-item-view">
                                <div class="prep-canto-left" onclick="window.abrirCantoDePreparacionEnVisor('${prep.id}', '${item.id}')" title="Abrir '${safeTitle}' en el visor">
                                    <span class="badge-posicion-circulo" title="Momento Litúrgico">${item.etiqueta}</span>
                                    <span class="link-canto-lista">
                                        ${titulo}
                                    </span>
                                    ${meta ? `<span class="prep-canto-meta-tono">(${meta})</span>` : ''}
                                </div>
                                <div class="prep-canto-right-group">
                                    <div id="canto-cantor-slot-${prep.id}-${idxCanto}" class="prep-canto-cantor-slot" onclick="event.stopPropagation()" style="display: flex; align-items: center; gap: 6px;">
                                        ${item.cantor ? `
                                            <span class="prep-cantor-pill ${puedeEditar ? 'interactivo' : ''}" 
                                                  title="${item.cantor}${puedeEditar ? ' (Doble clic para cambiar)' : ''}"
                                                  ${puedeEditar ? `ondblclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})"` : ''}
                                                  style="${puedeEditar ? 'cursor: pointer; user-select: none;' : ''}">
                                                <span class="material-symbols-outlined" style="font-size: 14px;">mic</span>
                                                <span class="prep-cantor-nombre-full">${item.cantor}</span>
                                                <span class="prep-cantor-nombre-short">${primerNombre}</span>
                                            </span>
                                            ${puedeEditar ? `
                                            <button type="button" class="btn-asignar-cantor-inline" title="Cambiar cantor" onclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})">
                                                <span class="material-symbols-outlined" style="font-size: 15px;">edit</span>
                                            </button>
                                            ` : ''}
                                        ` : `
                                            ${puedeEditar ? `
                                            <button type="button" class="btn-asignar-cantor-inline btn-sin-cantor" title="Clic para asignar cantor" onclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})">
                                                <span class="lbl-sin-cantor">Sin cantor</span>
                                                <span class="material-symbols-outlined" style="font-size: 16px; color: var(--accent-color, #d01212);">edit</span>
                                            </button>
                                            ` : `
                                            <span class="lbl-sin-cantor" style="color: var(--text-muted, #999);">Sin cantor</span>
                                            `}
                                        `}
                                    </div>
                                    ${puedeEditar ? `
                                    <div class="prep-canto-reorder-controles" onclick="event.stopPropagation()">
                                        <button type="button" class="btn-mover-canto" title="Subir canto" ${idxCanto === 0 ? 'disabled' : ''} onclick="window.moverCantoPreparacion('${prep.id}', ${idxCanto}, -1)">
                                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_upward</span>
                                        </button>
                                        <button type="button" class="btn-mover-canto" title="Bajar canto" ${idxCanto === cantos.length - 1 ? 'disabled' : ''} onclick="window.moverCantoPreparacion('${prep.id}', ${idxCanto}, 1)">
                                            <span class="material-symbols-outlined" style="font-size: 18px;">arrow_downward</span>
                                        </button>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Atender parámetros de URL (si regresamos de index.html con prepId o editarPrep)
    setTimeout(() => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const editarPrepId = urlParams.get('editarPrep');
            const prepId = urlParams.get('prepId') || (window.location.hash.startsWith('#prep-tarjeta-') ? window.location.hash.replace('#prep-tarjeta-', '') : null);

            if (editarPrepId) {
                window.expandirSeccionPrepForm();
                window.cargarPreparacionParaEditar(editarPrepId);
            } else if (prepId) {
                const detalle = document.getElementById(`detalle-prep-${prepId}`);
                if (detalle) detalle.style.display = 'block';
                const tarjeta = document.getElementById(`prep-tarjeta-${prepId}`);
                if (tarjeta) tarjeta.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } catch(e) {}
    }, 120);
}

window.toggleDetallePreparacion = (id) => {
    const el = document.getElementById(`detalle-prep-${id}`);
    if (el) {
        el.style.display = (el.style.display === 'none' || el.style.display === '') ? 'block' : 'none';
    }
};

window.filtrarPreparaciones = () => {
    const input = document.getElementById('inputBuscadorPreparaciones');
    const btnX = document.getElementById('btnLimpiarPrepFiltro');
    if (!input) return;
    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';
    renderizarListaPreparaciones(input.value);
};

window.limpiarBuscadorPreparaciones = () => {
    const input = document.getElementById('inputBuscadorPreparaciones');
    if (input) {
        input.value = '';
        window.filtrarPreparaciones();
        input.focus();
    }
};

// Reordenar cantos de una preparación (Subir / Bajar)
window.moverCantoPreparacion = async (prepId, idxCanto, direccion) => {
    if (!puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo los responsables o cantores encargados pueden modificar el orden de los cantos.", "Acceso Restringido", "lock");
        return;
    }
    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (!prep || !Array.isArray(prep.cantos)) return;

    const targetIdx = idxCanto + direccion;
    if (targetIdx < 0 || targetIdx >= prep.cantos.length) return;

    const temp = prep.cantos[idxCanto];
    prep.cantos[idxCanto] = prep.cantos[targetIdx];
    prep.cantos[targetIdx] = temp;

    if (preparacionActiva && String(preparacionActiva.id) === String(prepId)) {
        preparacionActiva.cantos = [...prep.cantos];
        cantosSeleccionados = JSON.parse(JSON.stringify(prep.cantos));
        if (document.getElementById('box-asignacion-cantores')?.style.display === 'block') {
            renderizarAreaAsignacionCantores();
        }
        actualizarInterfazSeleccionParroquia();
    }

    renderizarListaPreparaciones();

    try {
        const prepRef = doc(db, "parroquias", parroquiaActiva.id, "preparaciones", String(prepId));
        await updateDoc(prepRef, {
            cantos: prep.cantos,
            actualizado: new Date().toISOString()
        });
    } catch (e) {
        console.error("Error guardando orden de preparación:", e);
        mostrarAlerta("Error al guardar el nuevo orden: " + e.message, "Error", "error");
    }
};

// Reordenar litúrgicamente una preparación completa
window.reordenarLiturgicamentePreparacion = async (prepId) => {
    if (!puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo los responsables o cantores encargados pueden modificar el orden de los cantos.", "Acceso Restringido", "lock");
        return;
    }
    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (!prep || !Array.isArray(prep.cantos) || prep.cantos.length === 0) return;

    ordenarCantosPorLiturgia(prep.cantos);

    if (preparacionActiva && String(preparacionActiva.id) === String(prepId)) {
        preparacionActiva.cantos = [...prep.cantos];
        cantosSeleccionados = JSON.parse(JSON.stringify(prep.cantos));
        if (document.getElementById('box-asignacion-cantores')?.style.display === 'block') {
            renderizarAreaAsignacionCantores();
        }
        actualizarInterfazSeleccionParroquia();
    }

    renderizarListaPreparaciones();

    try {
        const prepRef = doc(db, "parroquias", parroquiaActiva.id, "preparaciones", String(prepId));
        await updateDoc(prepRef, {
            cantos: prep.cantos,
            actualizado: new Date().toISOString()
        });
        mostrarToastVerde(`Orden litúrgico aplicado a "${prep.nombre}"`);
    } catch (e) {
        console.error("Error guardando orden litúrgico:", e);
        mostrarAlerta("Error al guardar: " + e.message, "Error", "error");
    }
};

// Cargar preparación existente para editarla y asignar cantores
window.cargarPreparacionParaEditar = (prepId) => {
    const prep = preparacionesParroquia.find(p => p.id === prepId);
    if (!prep) return;

    preparacionActiva = prep;
    cantosSeleccionados = Array.isArray(prep.cantos) ? JSON.parse(JSON.stringify(prep.cantos)) : [];

    const inputNombre = document.getElementById('prep-nombre');
    const inputFecha = document.getElementById('prep-fecha');
    const badgeModo = document.getElementById('badge-modo-prep');

    if (inputNombre) inputNombre.value = prep.nombre || '';
    if (inputFecha) inputFecha.value = prep.fecha || '';
    if (badgeModo) badgeModo.textContent = `(Modo Edición: ${prep.nombre})`;

    actualizarInterfazSeleccionParroquia();
    renderizarListaCantosParroquia(todosLosCantos);

    // Renderizar la tabla de asignación de cantores
    renderizarAreaAsignacionCantores();

    // Llevar al área de asignación
    const boxAsignacion = document.getElementById('box-asignacion-cantores');
    if (boxAsignacion) {
        boxAsignacion.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.renderizarListaPreparaciones = (filtro = '') => renderizarListaPreparaciones(filtro);
window.renderizarPreparaciones = (filtro = '') => renderizarListaPreparaciones(filtro);

// --- ASIGNACIÓN DE CANTOR DIRECTA INLINE / MODAL (UN CLIC SI ESTÁ VACÍO, DOBLE CLIC SI ESTÁ ASIGNADO) ---
let prepIdAsignacionRapida = null;
let indexCantoAsignacionRapida = null;

window.cancelarSelectCantorInline = (prepId, idxCanto) => {
    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    const slot = document.getElementById(`canto-cantor-slot-${prepId}-${idxCanto}`);
    if (!slot || !prep || !prep.cantos || !prep.cantos[idxCanto]) {
        renderizarListaPreparaciones();
        return;
    }
    const item = prep.cantos[idxCanto];
    const puedeEditar = puedeGestionarPreparacionesYCantores();

    const primerNombre = (item.cantor || '').trim().split(/\s+/)[0] || '';
    slot.innerHTML = item.cantor ? `
        <span class="prep-cantor-pill ${puedeEditar ? 'interactivo' : ''}" 
              title="${item.cantor}${puedeEditar ? ' (Doble clic para cambiar)' : ''}"
              ${puedeEditar ? `ondblclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})"` : ''}
              style="${puedeEditar ? 'cursor: pointer; user-select: none;' : ''}">
            <span class="material-symbols-outlined" style="font-size: 14px;">mic</span>
            <span class="prep-cantor-nombre-full">${item.cantor}</span>
            <span class="prep-cantor-nombre-short">${primerNombre}</span>
        </span>
        ${puedeEditar ? `
        <button type="button" class="btn-asignar-cantor-inline" title="Cambiar cantor" onclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})">
            <span class="material-symbols-outlined" style="font-size: 15px;">edit</span>
        </button>
        ` : ''}
    ` : `
        ${puedeEditar ? `
        <button type="button" class="btn-asignar-cantor-inline btn-sin-cantor" title="Clic para asignar cantor" onclick="event.stopPropagation(); window.activarSelectCantorInline('${prep.id}', ${idxCanto})">
            <span class="lbl-sin-cantor">Sin cantor</span>
            <span class="material-symbols-outlined" style="font-size: 16px; color: var(--accent-color, #d01212);">edit</span>
        </button>
        ` : `
        <span class="lbl-sin-cantor" style="color: var(--text-muted, #999);">Sin cantor</span>
        `}
    `;
};

window.activarSelectCantorInline = (prepId, idxCanto) => {
    if (!puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo el Encargado de Cantos de la Parroquia, sus asistentes asignados y el Administrador pueden asignar cantores.", "Acceso Restringido", "lock");
        return;
    }

    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (!prep || !prep.cantos || !prep.cantos[idxCanto]) return;

    const slot = document.getElementById(`canto-cantor-slot-${prepId}-${idxCanto}`);
    if (!slot) return;

    const itemCanto = prep.cantos[idxCanto];
    const cantorActual = itemCanto.cantor || '';
    const listaCantores = obtenerListaNombresCantores();

    slot.innerHTML = `
        <div style="display: flex; align-items: center; gap: 4px;" onclick="event.stopPropagation();">
            <select id="inline-sel-cantor-${prepId}-${idxCanto}" 
                    class="select-cantor-inline-directo"
                    onchange="window.onCambiarSelectInlineCantor('${prepId}', ${idxCanto}, this.value)">
                <option value="" ${!cantorActual ? 'selected' : ''}>-- Sin cantor --</option>
                ${listaCantores.map(c => `
                    <option value="${c}" ${c === cantorActual ? 'selected' : ''}>${c}</option>
                `).join('')}
                <option value="__OTRO__">+ Escribir otro...</option>
                <option value="__MODAL__">🔍 Más opciones...</option>
            </select>
            <button type="button" class="btn-cancelar-inline-cantor" title="Cerrar" onclick="event.stopPropagation(); window.cancelarSelectCantorInline('${prepId}', ${idxCanto});">
                <span class="material-symbols-outlined" style="font-size: 15px;">close</span>
            </button>
        </div>
    `;

    const selectEl = document.getElementById(`inline-sel-cantor-${prepId}-${idxCanto}`);
    if (selectEl) {
        selectEl.focus();
        try {
            if (typeof selectEl.showPicker === 'function') {
                selectEl.showPicker();
            }
        } catch(e) {}
    }
};

window.onCambiarSelectInlineCantor = async (prepId, idxCanto, valor) => {
    if (valor === '__MODAL__') {
        window.abrirModalAsignacionRapida(prepId, idxCanto);
        return;
    }
    if (valor === '__OTRO__') {
        window.mostrarInputOtroCantorInline(prepId, idxCanto);
        return;
    }
    await window.guardarCantorCantoDirecto(prepId, idxCanto, valor);
};

window.mostrarInputOtroCantorInline = (prepId, idxCanto) => {
    const slot = document.getElementById(`canto-cantor-slot-${prepId}-${idxCanto}`);
    if (!slot) return;

    slot.innerHTML = `
        <div style="display: flex; align-items: center; gap: 4px;" onclick="event.stopPropagation();">
            <input type="text" id="inline-inp-otro-${prepId}-${idxCanto}"
                   class="input-cantor-inline-directo"
                   placeholder="Nombre del cantor..."
                   onkeydown="if(event.key==='Enter') window.guardarCantorCantoDirecto('${prepId}', ${idxCanto}, this.value); else if(event.key==='Escape') window.cancelarSelectCantorInline('${prepId}', ${idxCanto});">
            <button type="button" class="btn-guardar-inline-cantor" title="Guardar"
                    onclick="event.stopPropagation(); window.guardarCantorCantoDirecto('${prepId}', ${idxCanto}, document.getElementById('inline-inp-otro-${prepId}-${idxCanto}').value);">
                <span class="material-symbols-outlined" style="font-size: 16px;">check</span>
            </button>
            <button type="button" class="btn-cancelar-inline-cantor" title="Cancelar" onclick="event.stopPropagation(); window.cancelarSelectCantorInline('${prepId}', ${idxCanto});">
                <span class="material-symbols-outlined" style="font-size: 15px;">close</span>
            </button>
        </div>
    `;

    const inp = document.getElementById(`inline-inp-otro-${prepId}-${idxCanto}`);
    if (inp) inp.focus();
};

window.guardarCantorCantoDirecto = async (prepId, idxCanto, nuevoCantor) => {
    nuevoCantor = (nuevoCantor || '').trim();
    if (!parroquiaActiva) return;

    try {
        const prepTarget = preparacionesParroquia.find(p => String(p.id) === String(prepId));
        if (!prepTarget) return;

        const cantosClonados = JSON.parse(JSON.stringify(prepTarget.cantos || []));
        if (cantosClonados[idxCanto]) {
            cantosClonados[idxCanto].cantor = nuevoCantor;
        }

        await updateDoc(doc(db, "parroquias", parroquiaActiva.id, "preparaciones", String(prepId)), {
            cantos: cantosClonados,
            actualizado: new Date().toISOString()
        });

        prepTarget.cantos = cantosClonados;
        if (preparacionActiva && String(preparacionActiva.id) === String(prepId)) {
            cantosSeleccionados = JSON.parse(JSON.stringify(cantosClonados));
            if (document.getElementById('box-asignacion-cantores')?.style.display === 'block') {
                renderizarAreaAsignacionCantores();
            }
        }

        renderizarListaPreparaciones();
        mostrarToastVerde(nuevoCantor ? `Cantor asignado: "${nuevoCantor}"` : "Cantor desasignado");
    } catch(e) {
        console.error("Error guardando cantor:", e);
        mostrarAlerta("Error al asignar cantor: " + e.message, "Error", "error");
        renderizarListaPreparaciones();
    }
};

window.abrirModalAsignacionRapida = (prepId, cantoIndex) => {
    if (!puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo el Encargado de Cantos de la Parroquia, sus asistentes asignados y el Administrador pueden asignar cantores.", "Acceso Restringido", "lock");
        return;
    }

    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (!prep || !prep.cantos || !prep.cantos[cantoIndex]) return;

    prepIdAsignacionRapida = String(prepId);
    indexCantoAsignacionRapida = cantoIndex;

    const itemCanto = prep.cantos[cantoIndex];
    const cMeta = todosLosCantos.find(can => String(can.id) === String(itemCanto.id));
    const titulo = cMeta ? (cMeta.title || cMeta.titulo) : "Canto";

    const modal = document.getElementById('modal-asignar-cantor-rapido');
    const lblTitulo = document.getElementById('modal-rapido-canto-titulo');
    const lblPrep = document.getElementById('modal-rapido-prep-info');
    const select = document.getElementById('select-rapido-cantor');
    const boxOtro = document.getElementById('box-rapido-otro-cantor');
    const inputOtro = document.getElementById('input-rapido-otro-cantor');

    if (lblTitulo) lblTitulo.textContent = `[${itemCanto.etiqueta}] ${titulo}`;
    if (lblPrep) lblPrep.textContent = `Lista: ${prep.nombre} • ${prep.fecha || ''}`;

    // Obtener miembros/cantores de la parroquia usando la función unificada
    const listaCantores = obtenerListaNombresCantores();
    const cantorActual = itemCanto.cantor || '';
    const esPersonalizado = cantorActual && !listaCantores.includes(cantorActual);

    if (select) {
        select.innerHTML = [
            `<option value="">-- Sin cantor --</option>`,
            ...listaCantores.map(cantor => `
                <option value="${cantor}" ${cantorActual === cantor ? 'selected' : ''}>${cantor}</option>
            `),
            `<option value="__OTRO__" ${esPersonalizado ? 'selected' : ''}>+ Escribir otro cantor...</option>`
        ].join('');

        select.onchange = () => {
            if (boxOtro) {
                boxOtro.style.display = (select.value === '__OTRO__') ? 'block' : 'none';
            }
            if (select.value === '__OTRO__' && inputOtro) {
                inputOtro.focus();
            }
        };
    }

    if (boxOtro) {
        boxOtro.style.display = esPersonalizado ? 'block' : 'none';
    }
    if (inputOtro) {
        inputOtro.value = esPersonalizado ? cantorActual : '';
    }

    // Botón Guardar asignación rápida
    const btnGuardar = document.getElementById('btn-guardar-asignacion-rapida');
    if (btnGuardar) {
        btnGuardar.onclick = async () => {
            let nuevoCantor = select ? select.value : '';
            if (nuevoCantor === '__OTRO__') {
                nuevoCantor = inputOtro ? inputOtro.value.trim() : '';
            }

            try {
                const prepTarget = preparacionesParroquia.find(p => String(p.id) === String(prepIdAsignacionRapida));
                if (!prepTarget || !parroquiaActiva) return;

                const cantosClonados = JSON.parse(JSON.stringify(prepTarget.cantos || []));
                if (cantosClonados[indexCantoAsignacionRapida]) {
                    cantosClonados[indexCantoAsignacionRapida].cantor = nuevoCantor;
                }

                await updateDoc(doc(db, "parroquias", parroquiaActiva.id, "preparaciones", String(prepIdAsignacionRapida)), {
                    cantos: cantosClonados,
                    actualizado: new Date().toISOString()
                });

                prepTarget.cantos = cantosClonados;
                if (preparacionActiva && String(preparacionActiva.id) === String(prepIdAsignacionRapida)) {
                    cantosSeleccionados = JSON.parse(JSON.stringify(cantosClonados));
                    if (document.getElementById('box-asignacion-cantores')?.style.display === 'block') {
                        renderizarAreaAsignacionCantores();
                    }
                }

                renderizarListaPreparaciones();
                if (modal) modal.style.display = 'none';
                mostrarToastVerde(`Cantor ${nuevoCantor ? `"${nuevoCantor}"` : 'desasignado'} guardado`);
            } catch(e) {
                console.error("Error guardando cantor rápido:", e);
                mostrarAlerta("Error al asignar cantor: " + e.message, "Error", "error");
            }
        };
    }

    if (modal) modal.style.display = 'flex';
};

// Eliminar preparación
window.eliminarPreparacion = async (prepId, nombre) => {
    if (!confirm(`¿Eliminar la preparación "${nombre}"?`)) return;
    if (!parroquiaActiva) return;

    try {
        await deleteDoc(doc(db, "parroquias", parroquiaActiva.id, "preparaciones", prepId));
        if (preparacionActiva && preparacionActiva.id === prepId) {
            window.cancelarEdicionPreparacion();
        }
        mostrarToastVerde("Preparación eliminada");
    } catch (e) {
        mostrarAlerta("Error al eliminar: " + e.message, "Error", "error");
    }
};

// Abrir canto específico de una preparación en el Visor
window.abrirCantoDePreparacionEnVisor = (prepId, cantoId) => {
    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (prep && Array.isArray(prep.cantos)) {
        const enrichedCantos = prep.cantos.map((item, idx) => ({
            id: String(item.id),
            etiqueta: item.etiqueta || (idx + 1),
            tag: item.etiqueta || (idx + 1),
            cantor: item.cantor || '',
            tono: item.tono || '',
            cejilla: item.cejilla || '',
            acorde: item.acorde || '',
            nota: item.nota || ''
        }));

        const playlistObj = {
            id: prep.id,
            nombre: prep.nombre || 'Cantos Eucaristía',
            categoria: 'Eucaristía',
            tipo: 'eucaristia',
            ids_cantos: enrichedCantos,
            isParroquia: true,
            isEucaristia: true,
            parroquiaId: parroquiaActiva?.id || '',
            parroquiaNombre: parroquiaActiva?.nombre || ''
        };

        try {
            sessionStorage.setItem('resucito_active_playlist', JSON.stringify(playlistObj));
            localStorage.setItem('resucito_active_playlist_backup', JSON.stringify(playlistObj));
            const allowed = enrichedCantos.map(c => String(c.id));
            sessionStorage.setItem('resucito_shared_allowed_songs', JSON.stringify(allowed));
        } catch(e) {
            console.warn("Error guardando active_playlist:", e);
        }
    }
    window.location.href = `./index.html#canto=${cantoId}`;
};

// Abrir preparación completa en Visor (iniciando en el primer canto)
window.abrirPreparacionEnVisor = (prepId) => {
    const prep = preparacionesParroquia.find(p => String(p.id) === String(prepId));
    if (!prep || !prep.cantos || prep.cantos.length === 0) return;

    window.abrirCantoDePreparacionEnVisor(prep.id, prep.cantos[0].id);
};

window.abrirCantoEnVisor = (cantoId) => {
    if (preparacionActiva && Array.isArray(preparacionActiva.cantos)) {
        window.abrirCantoDePreparacionEnVisor(preparacionActiva.id, cantoId);
    } else {
        const prepFound = preparacionesParroquia.find(p => (p.cantos || []).some(c => String(c.id) === String(cantoId)));
        if (prepFound) {
            window.abrirCantoDePreparacionEnVisor(prepFound.id, cantoId);
        } else {
            window.location.href = `./index.html#canto=${cantoId}`;
        }
    }
};

// Compartir preparación por WhatsApp
window.compartirPreparacionWhatsApp = (prepId) => {
    const prep = preparacionesParroquia.find(p => p.id === prepId);
    if (!prep) return;

    const cantos = prep.cantos || [];
    let texto = `🕊️ *Preparación de Eucaristía*\n`;
    texto += `🏛️ *${parroquiaActiva?.nombre || 'Parroquia'}*\n`;
    texto += `📅 *${prep.nombre}* (${prep.fecha || 'Celebración'})\n\n`;
    texto += `🎵 *Cantos y Cantores asignados:*\n`;

    cantos.forEach(item => {
        const c = todosLosCantos.find(can => String(can.id) === String(item.id));
        const titulo = c ? (c.title || c.titulo) : "Canto";
        const cantor = item.cantor ? `🎤 *${item.cantor}*` : '_Sin asignar_';
        const tono = item.tono ? `(Tono: ${item.tono}${item.cejilla && item.cejilla !== '0' ? `, Cej. ${item.cejilla}` : ''})` : '';

        texto += `• [${item.etiqueta}] ${titulo} — ${cantor} ${tono}\n`;
    });

    texto += `\n📖 Cancionero Resucitó: https://es.laantillana.com/parroquia.html`;

    const url = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
};

// --- UTILIDADES DE INTERFAZ Y COLAPSO ---
window.toggleSectionParroquia = (contentId, wrapperId) => {
    if (wrapperId === 'wrapper-prep-form' && !puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo el Encargado de Cantos de la Parroquia, sus asistentes asignados y el Administrador pueden crear o editar preparaciones.", "Acceso Restringido", "lock");
        return;
    }

    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        const estaCerrado = content.classList.contains('cfg-close') || wrapper.classList.contains('collapsed');
        if (estaCerrado) {
            content.classList.remove('cfg-close');
            wrapper.classList.remove('collapsed');
        } else {
            content.classList.add('cfg-close');
            wrapper.classList.add('collapsed');
        }
        const arrow = wrapper.querySelector('.arrow-icon');
        if (arrow) arrow.textContent = estaCerrado ? 'expand_less' : 'expand_more';
    }
};

window.expandirSeccionPrepForm = () => {
    if (!puedeGestionarPreparacionesYCantores()) {
        mostrarAlerta("Solo el Encargado de Cantos de la Parroquia, sus asistentes asignados y el Administrador pueden crear o editar preparaciones.", "Acceso Restringido", "lock");
        return;
    }
    const content = document.getElementById('content-prep-form');
    const wrapper = document.getElementById('wrapper-prep-form');
    if (content) content.classList.remove('cfg-close');
    if (wrapper) {
        wrapper.style.display = 'block';
        wrapper.classList.remove('collapsed');
    }
    const arrow = document.getElementById('arrow-prep-form');
    if (arrow) arrow.textContent = 'expand_less';
};

window.contraerSeccionPrepForm = () => {
    const content = document.getElementById('content-prep-form');
    const wrapper = document.getElementById('wrapper-prep-form');
    if (content) content.classList.add('cfg-close');
    if (wrapper) wrapper.classList.add('collapsed');
    const arrow = document.getElementById('arrow-prep-form');
    if (arrow) arrow.textContent = 'expand_more';
};

// Notificación verde flotante (5 segundos)
function mostrarToastVerde(mensaje) {
    let toast = document.getElementById('toast-notificacion-verde');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notificacion-verde';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
            background: #16a34a;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 700;
            box-shadow: 0 8px 24px rgba(22, 163, 74, 0.4);
            z-index: 99999;
            opacity: 0;
            transition: opacity 0.35s ease, transform 0.35s ease;
            pointer-events: none;
            display: flex;
            align-items: center;
            gap: 8px;
        `;
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span> ${mensaje}`;
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
    }, 5000);
}

// Modal de Alerta Custom
function mostrarAlerta(mensaje, titulo = "Atención", icono = "warning") {
    const modal = document.getElementById('modal-alerta-parroquia');
    const txtTitulo = document.getElementById('modal-alerta-titulo-parr');
    const txtMensaje = document.getElementById('modal-alerta-mensaje-parr');
    const icnModal = document.getElementById('modal-alerta-icon-parr');
    const btnOk = document.getElementById('modal-alerta-btn-ok-parr');

    if (!modal) {
        alert(`${titulo}\n\n${mensaje}`);
        return;
    }

    if (txtTitulo) txtTitulo.textContent = titulo;
    if (txtMensaje) {
        txtMensaje.innerHTML = String(mensaje || '').replace(/\n/g, '<br>');
    }
    if (icnModal) icnModal.textContent = icono;

    modal.style.display = 'flex';
    if (btnOk) {
        btnOk.onclick = () => { modal.style.display = 'none'; };
        btnOk.focus();
    }
}
window.mostrarAlerta = mostrarAlerta;

// --- EVENTOS DEL DOM E INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Formatear automáticamente el input de 16 caracteres
    formatearInputCodigo(document.getElementById('input-codigo-16'));

    // Botones de autenticación y parroquia
    const btnLogin = document.getElementById('btn-login-google');
    if (btnLogin) {
        btnLogin.addEventListener('click', async () => {
            try {
                await loginConGoogle();
            } catch (e) {
                mostrarAlerta("Error al iniciar sesión: " + e.message, "Error", "error");
            }
        });
    }

    const btnUnirse = document.getElementById('btn-unirse-codigo');
    if (btnUnirse) btnUnirse.addEventListener('click', window.unirseConCodigo16);

    const btnSolicitar = document.getElementById('btn-solicitar-acceso');
    if (btnSolicitar) btnSolicitar.addEventListener('click', window.solicitarAccesoParroquia);

    const btnAbrirAdmin = document.getElementById('btn-abrir-admin-parroquias');
    if (btnAbrirAdmin) btnAbrirAdmin.addEventListener('click', () => window.abrirModalAdminParroquias());

    const btnAbrirCrear = document.getElementById('btn-abrir-crear-parroquia');
    if (btnAbrirCrear) btnAbrirCrear.addEventListener('click', () => window.abrirModalAdminParroquias());

    const btnVerCodigo = document.getElementById('btn-ver-codigo-16');
    if (btnVerCodigo) btnVerCodigo.addEventListener('click', window.abrirModalCodigo16);

    const btnCopiarCodigo = document.getElementById('btn-copiar-codigo-16');
    if (btnCopiarCodigo) btnCopiarCodigo.addEventListener('click', window.copiarCodigo16);

    const btnCompartirCodigoWA = document.getElementById('btn-compartir-codigo-whatsapp');
    if (btnCompartirCodigoWA) btnCompartirCodigoWA.addEventListener('click', window.compartirCodigoWhatsApp);

    const btnRegenerarCodigo = document.getElementById('btn-regenerar-codigo-16');
    if (btnRegenerarCodigo) btnRegenerarCodigo.addEventListener('click', window.regenerarCodigo16);

    const btnMiembros = document.getElementById('btn-gestionar-miembros');
    if (btnMiembros) btnMiembros.addEventListener('click', () => window.abrirModalMiembros());

    const btnConfirmarAgregarMiem = document.getElementById('btn-confirmar-agregar-miembro');
    if (btnConfirmarAgregarMiem) btnConfirmarAgregarMiem.addEventListener('click', window.agregarMiembroDirecto);

    const btnCambiarParroquia = document.getElementById('btn-cambiar-parroquia');
    if (btnCambiarParroquia) {
        btnCambiarParroquia.addEventListener('click', async () => {
            await cargarTodasLasParroquias();
            mostrarVista('sin-parroquia');
            poblarSelectParroquiasDisponibles();
        });
    }

    // Iniciar escucha en tiempo real de la colección de parroquias para solicitudes y cambios
    iniciarEscuchaColeccionParroquias();

    // Inicializar catálogo de cantos
    if (todosLosCantos.length > 0) {
        renderizarListaCantosParroquia(todosLosCantos);
    }

    // Actualizar estado del botón de autoguardado
    actualizarBotonAutoguardado();

    // Fecha por defecto en preparación: hoy o próximo sábado
    const inputFecha = document.getElementById('prep-fecha');
    if (inputFecha) {
        const hoy = new Date().toISOString().split('T')[0];
        inputFecha.value = hoy;
    }

    // Escuchar Auth de Firebase
    onAuthStateChanged(auth, async (user) => {
        usuarioActual = user;
        actualizarHeaderUsuario(user);
        await resolverParroquiaUsuario(user);
    });
});

// Sincronizar en caliente si el usuario regresa de perfil.html
window.addEventListener('pageshow', () => {
    poblarSelectParroquiasDisponibles();
});
