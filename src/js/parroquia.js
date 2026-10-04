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
    "Comunión": "C",
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
function esAdminOEncargado() {
    if (!usuarioActual) return false;
    if (usuarioActual.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL) return true;
    if (!parroquiaActiva) return false;
    if (parroquiaActiva.creadorUid === usuarioActual.uid || parroquiaActiva.creadorEmail === usuarioActual.email) return true;
    
    // Verificar en lista de miembros si tiene rol encargado
    const miembro = (parroquiaActiva.miembros || []).find(m => 
        (m.uid && m.uid === usuarioActual.uid) || 
        (m.email && m.email.toLowerCase().trim() === usuarioActual.email?.toLowerCase().trim())
    );
    return miembro && miembro.rol === 'encargado';
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
    if (!usuarioActual) return 'invitado';
    if (usuarioActual.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL) return 'encargado';
    if (!parroquiaActiva) return 'invitado';
    if (parroquiaActiva.creadorUid === usuarioActual.uid || parroquiaActiva.creadorEmail === usuarioActual.email) return 'encargado';
    const miembro = (parroquiaActiva.miembros || []).find(m => 
        (m.uid && m.uid === usuarioActual.uid) || 
        (m.email && m.email.toLowerCase().trim() === usuarioActual.email?.toLowerCase().trim())
    );
    return miembro ? (miembro.rol || 'cantor') : 'miembro';
}

// --- GESTIÓN DE VISTAS (NO AUTH / SIN PARROQUIA / PARROQUIA ACTIVA) ---
function mostrarVista(vistaNombre) {
    const vNoAuth = document.getElementById('vista-no-auth');
    const vSinParroquia = document.getElementById('vista-sin-parroquia');
    const vParroquiaActiva = document.getElementById('vista-parroquia-activa');

    if (vNoAuth) vNoAuth.style.display = (vistaNombre === 'no-auth') ? 'block' : 'none';
    if (vSinParroquia) vSinParroquia.style.display = (vistaNombre === 'sin-parroquia') ? 'block' : 'none';
    if (vParroquiaActiva) vParroquiaActiva.style.display = (vistaNombre === 'parroquia-activa') ? 'block' : 'none';
}

function actualizarHeaderUsuario(user) {
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

// --- CARGAR PARROQUIAS DESDE FIRESTORE ---
async function cargarTodasLasParroquias() {
    try {
        const snap = await getDocs(collection(db, "parroquias"));
        todasLasParroquias = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        poblarSelectParroquiasDisponibles();
        return todasLasParroquias;
    } catch (e) {
        console.warn("Error cargando lista de parroquias:", e);
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

    select.innerHTML = `<option value="">-- Selecciona una Parroquia --</option>` + 
        todasLasParroquias.map(p => `
            <option value="${p.id}">${p.nombre} ${p.ciudad ? `(${p.ciudad})` : ''}</option>
        `).join('');
}

// --- CONECTAR Y ESCUCHAR PARROQUIA ACTIVA ---
function activarParroquia(parr) {
    if (!parr || !parr.id) return;
    parroquiaActiva = parr;
    localStorage.setItem('parroquia_activa_id', parr.id);

    // Cancelar escuchas previas si existen
    if (unsubscribeParroquiaSnap) unsubscribeParroquiaSnap();
    if (unsubscribePrepsSnap) unsubscribePrepsSnap();

    // 1. Escuchar cambios de la parroquia en vivo
    unsubscribeParroquiaSnap = onSnapshot(doc(db, "parroquias", parr.id), (docSnap) => {
        if (docSnap.exists()) {
            parroquiaActiva = { id: docSnap.id, ...docSnap.data() };
            renderizarBarraParroquiaActiva();
        }
    }, (err) => console.warn("Error escuchando parroquia:", err));

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
    if (btnCodigo) btnCodigo.style.display = puedeAdministrar ? 'inline-flex' : 'none';
    if (btnMiembros) btnMiembros.style.display = puedeAdministrar ? 'inline-flex' : 'none';

    // Badge solicitudes pendientes
    const pendientes = (parroquiaActiva.solicitudesPendientes || []).length;
    if (badgeSolicitudes) {
        if (puedeAdministrar && pendientes > 0) {
            badgeSolicitudes.textContent = pendientes;
            badgeSolicitudes.style.display = 'inline-block';
        } else {
            badgeSolicitudes.style.display = 'none';
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

    // 2. Buscar si el usuario ya es miembro o creador de alguna parroquia
    const parroquiaDelUsuario = todas.find(p => esMiembroDeParroquia(p, user));
    if (parroquiaDelUsuario) {
        activarParroquia(parroquiaDelUsuario);
        return;
    }

    // 3. Si el usuario es el Super Administrador y no tiene parroquia activa asignada
    if (user.email?.toLowerCase().trim() === SUPER_ADMIN_EMAIL && todas.length > 0) {
        activarParroquia(todas[0]);
        return;
    }

    // 4. No pertenece a ninguna parroquia: mostrar pantalla de ingreso de código / solicitar acceso
    mostrarVista('sin-parroquia');
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
    const select = document.getElementById('select-parroquia-disponible');
    const parroquiaId = select ? select.value : '';

    if (!parroquiaId) {
        mostrarAlerta("Por favor selecciona una parroquia de la lista para solicitar acceso.", "Selecciona una Parroquia", "church");
        return;
    }

    if (!usuarioActual) {
        mostrarAlerta("Debes iniciar sesión para solicitar acceso a una parroquia.", "Sesión requerida", "account_circle");
        return;
    }

    try {
        const solicitud = {
            uid: usuarioActual.uid,
            email: usuarioActual.email,
            displayName: usuarioActual.displayName || usuarioActual.email.split('@')[0],
            fecha: new Date().toISOString()
        };

        await updateDoc(doc(db, "parroquias", parroquiaId), {
            solicitudesPendientes: arrayUnion(solicitud)
        });

        mostrarAlerta("Tu solicitud ha sido enviada al encargado de la parroquia. Cuando seas aceptado, podrás ingresar inmediatamente.", "Solicitud Enviada", "mark_email_read");
    } catch (e) {
        console.error("Error enviando solicitud:", e);
        mostrarAlerta("No se pudo enviar la solicitud: " + e.message, "Error", "error");
    }
};

// --- CREAR NUEVA PARROQUIA (ADMIN / ENCARGADO) ---
window.crearNuevaParroquia = async () => {
    const inputNombre = document.getElementById('input-crear-parroquia-nombre');
    const inputCiudad = document.getElementById('input-crear-parroquia-ciudad');
    const nombre = inputNombre ? inputNombre.value.trim() : '';
    const ciudad = inputCiudad ? inputCiudad.value.trim() : '';

    if (!nombre) {
        mostrarAlerta("Ingresa un nombre para la parroquia.", "Nombre Requerido", "edit_note");
        return;
    }

    if (!usuarioActual) {
        mostrarAlerta("Debes iniciar sesión para crear una parroquia.", "Sesión requerida", "account_circle");
        return;
    }

    const nuevoId = 'parr_' + Date.now().toString(36);
    const codigo16 = generarCodigo16();

    const nuevaParr = {
        id: nuevoId,
        nombre: nombre,
        ciudad: ciudad,
        codigoAcceso: codigo16,
        creadorUid: usuarioActual.uid,
        creadorEmail: usuarioActual.email,
        creadoEn: serverTimestamp(),
        miembros: [
            {
                uid: usuarioActual.uid,
                email: usuarioActual.email,
                displayName: usuarioActual.displayName || usuarioActual.email.split('@')[0],
                rol: 'encargado',
                fechaIngreso: new Date().toISOString()
            }
        ],
        solicitudesPendientes: []
    };

    try {
        await setDoc(doc(db, "parroquias", nuevoId), nuevaParr);
        document.getElementById('modal-crear-parroquia').style.display = 'none';
        if (inputNombre) inputNombre.value = '';
        if (inputCiudad) inputCiudad.value = '';

        activarParroquia(nuevaParr);
        mostrarAlerta(`Parroquia "${nombre}" creada con éxito. Tu código de acceso es: ${codigo16}`, "Parroquia Creada", "church");
    } catch (e) {
        console.error("Error al crear parroquia:", e);
        mostrarAlerta("Error al crear parroquia: " + e.message, "Error", "error");
    }
};

// --- MODAL CÓDIGO DE 16 CARACTERES ---
window.abrirModalCodigo16 = () => {
    if (!parroquiaActiva) return;
    const modal = document.getElementById('modal-codigo-16');
    const txtCodigo = document.getElementById('display-codigo-16-texto');
    const boxRegenerar = document.getElementById('box-regenerar-codigo');

    if (txtCodigo) txtCodigo.textContent = parroquiaActiva.codigoAcceso || 'SIN CÓDIGO';
    if (boxRegenerar) boxRegenerar.style.display = esAdminOEncargado() ? 'block' : 'none';

    if (modal) modal.style.display = 'flex';
};

window.copiarCodigo16 = () => {
    if (!parroquiaActiva || !parroquiaActiva.codigoAcceso) return;
    navigator.clipboard.writeText(parroquiaActiva.codigoAcceso).then(() => {
        mostrarToastVerde("Código copiado al portapapeles");
    }).catch(err => {
        prompt("Copia el código manualmente:", parroquiaActiva.codigoAcceso);
    });
};

window.compartirCodigoWhatsApp = () => {
    if (!parroquiaActiva || !parroquiaActiva.codigoAcceso) return;
    const mensaje = `🕊️ *Acceso a la Parroquia ${parroquiaActiva.nombre}*\n\n` +
        `Para unirte a las preparaciones de cantos de nuestra comunidad en la app Resucitó, ingresa este código de 16 caracteres:\n\n` +
        `🔑 *${parroquiaActiva.codigoAcceso}*\n\n` +
        `Entra aquí: https://es.laantillana.com/parroquia.html`;
    
    const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
};

window.regenerarCodigo16 = async () => {
    if (!parroquiaActiva) return;
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
window.abrirModalMiembros = async () => {
    if (!parroquiaActiva) return;
    const modal = document.getElementById('modal-gestionar-miembros');
    window.cambiarTabMiembros('solicitudes');
    renderizarPestaniasMiembros();
    if (modal) modal.style.display = 'flex';

    // Cargar usuarios registrados de Firebase para autocompletar si es encargado
    if (usuariosRegistradosCache.length === 0) {
        try {
            const snap = await getDocs(collection(db, "registered_users"));
            usuariosRegistradosCache = snap.docs.map(d => d.data()).filter(u => u && u.email);
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

function renderizarPestaniasMiembros() {
    if (!parroquiaActiva) return;

    const solicitudes = parroquiaActiva.solicitudesPendientes || [];
    const miembros = parroquiaActiva.miembros || [];

    const numSol = document.getElementById('tab-num-solicitudes');
    const numMiem = document.getElementById('tab-num-miembros');
    if (numSol) numSol.textContent = solicitudes.length;
    if (numMiem) numMiem.textContent = miembros.length;

    // Render solicitudes
    const contenedorSol = document.getElementById('lista-solicitudes-pendientes');
    if (contenedorSol) {
        if (solicitudes.length === 0) {
            contenedorSol.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px;">No hay solicitudes pendientes.</p>`;
        } else {
            contenedorSol.innerHTML = solicitudes.map((s, idx) => `
                <div class="miembro-fila">
                    <div class="miembro-fila-info">
                        <span class="miembro-fila-nombre">${s.displayName || s.email}</span>
                        <span class="miembro-fila-email">${s.email}</span>
                    </div>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn-parroquia-top" style="background: #dcfce7; color: #15803d; border-color: #86efac; padding: 6px 10px;" onclick="window.aceptarSolicitud('${s.email}', '${s.displayName || ''}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">check</span> Aceptar
                        </button>
                        <button class="btn-parroquia-top" style="background: #fee2e2; color: #b91c1c; border-color: #fca5a5; padding: 6px 10px;" onclick="window.rechazarSolicitud('${s.email}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">close</span>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    // Render miembros
    const contenedorMiem = document.getElementById('lista-miembros-activos');
    if (contenedorMiem) {
        if (miembros.length === 0) {
            contenedorMiem.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 24px;">No hay miembros registrados.</p>`;
        } else {
            contenedorMiem.innerHTML = miembros.map(m => `
                <div class="miembro-fila">
                    <div class="miembro-fila-info">
                        <span class="miembro-fila-nombre">${m.displayName || m.email}</span>
                        <span class="miembro-fila-email">${m.email}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span class="parroquia-badge-rol badge-${m.rol || 'cantor'}">${m.rol || 'cantor'}</span>
                        ${m.email !== usuarioActual?.email ? `
                            <button class="btn-parroquia-top" style="padding: 4px 8px; color: #b91c1c;" title="Eliminar miembro" onclick="window.eliminarMiembroParroquia('${m.email}')">
                                <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                            </button>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }
    }
}

window.aceptarSolicitud = async (email, displayName) => {
    if (!parroquiaActiva) return;
    const nuevoMiembro = {
        email: email,
        displayName: displayName || email.split('@')[0],
        rol: 'cantor',
        fechaIngreso: new Date().toISOString()
    };

    try {
        await updateDoc(doc(db, "parroquias", parroquiaActiva.id), {
            miembros: arrayUnion(nuevoMiembro),
            solicitudesPendientes: (parroquiaActiva.solicitudesPendientes || []).filter(s => s.email !== email)
        });
        mostrarToastVerde(`Solicitud de ${email} aceptada`);
    } catch (e) {
        mostrarAlerta("Error al aceptar solicitud: " + e.message, "Error", "error");
    }
};

window.rechazarSolicitud = async (email) => {
    if (!parroquiaActiva) return;
    try {
        await updateDoc(doc(db, "parroquias", parroquiaActiva.id), {
            solicitudesPendientes: (parroquiaActiva.solicitudesPendientes || []).filter(s => s.email !== email)
        });
        mostrarToastVerde("Solicitud rechazada");
    } catch (e) {
        mostrarAlerta("Error al rechazar solicitud: " + e.message, "Error", "error");
    }
};

window.agregarMiembroDirecto = async () => {
    if (!parroquiaActiva) return;
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

    // Verificar si ya pertenece
    const existe = (parroquiaActiva.miembros || []).some(m => m.email?.toLowerCase().trim() === email);
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
        await updateDoc(doc(db, "parroquias", parroquiaActiva.id), {
            miembros: arrayUnion(nuevoMiembro),
            solicitudesPendientes: (parroquiaActiva.solicitudesPendientes || []).filter(s => s.email !== email)
        });

        if (inputEmail) inputEmail.value = '';
        if (inputNombre) inputNombre.value = '';
        window.cambiarTabMiembros('miembros');
        mostrarToastVerde(`Hermano ${email} agregado como ${rol}`);
    } catch (e) {
        mostrarAlerta("Error agregando miembro: " + e.message, "Error", "error");
    }
};

window.eliminarMiembroParroquia = async (email) => {
    if (!parroquiaActiva) return;
    if (!confirm(`¿Eliminar a ${email} de la parroquia?`)) return;

    try {
        const miembro = (parroquiaActiva.miembros || []).find(m => m.email === email);
        if (miembro) {
            await updateDoc(doc(db, "parroquias", parroquiaActiva.id), {
                miembros: arrayRemove(miembro)
            });
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
                .filter(item => !['E', 'P', 'L', 'C', 'F'].includes(item.etiqueta))
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
    }

    // Orden litúrgico
    const prioridad = { 'E': 1, 'P': 2, 'L': 3, 'C': 4, 'F': 5 };
    cantosSeleccionados.sort((a, b) => {
        const pesoA = prioridad[a.etiqueta] || 2;
        const pesoB = prioridad[b.etiqueta] || 2;
        if (pesoA !== pesoB) return pesoA - pesoB;
        return parseInt(a.etiqueta || 0) - parseInt(b.etiqueta || 0);
    });

    actualizarInterfazSeleccionParroquia();
    dispararAutoguardado();
};

function actualizarInterfazSeleccionParroquia() {
    const contador = document.getElementById('contador-seleccion-parroquia');
    if (contador) contador.innerText = cantosSeleccionados.length;

    const cola = document.getElementById('cola-seleccion-parroquia');
    if (cola) {
        cola.innerHTML = '';
        cantosSeleccionados.forEach((item) => {
            const c = todosLosCantos.find(can => String(can.id) === String(item.id));
            if (c) {
                const tag = document.createElement('div');
                tag.className = 'canto-tag';
                tag.innerHTML = `<span>${item.etiqueta}</span> ${c.title || c.titulo} ${item.tono ? `<small style="opacity:0.75; font-weight:600; margin-left:4px;">(${item.tono})</small>` : ''}`;
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
        const esDelMomentoA = a.moments && a.moments.includes(momentoSeleccionado);
        const esDelMomentoB = b.moments && b.moments.includes(momentoSeleccionado);
        if (esDelMomentoA && !esDelMomentoB) return -1;
        if (!esDelMomentoA && esDelMomentoB) return 1;
        return 0;
    });

    listaOrdenadaParaMostrar.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'item-canto';
        div.tabIndex = 0;

        const esDelMomento = canto.moments && canto.moments.includes(momentoSeleccionado);
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

    const prepId = preparacionActiva ? preparacionActiva.id : `prep_${Date.now()}`;
    const prepData = {
        id: prepId,
        nombre: nombre,
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

    // Obtener nombres de cantores / miembros de la parroquia
    const miembros = parroquiaActiva?.miembros || [];
    const listaCantores = miembros.map(m => m.displayName || m.email.split('@')[0]);

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
    } catch (e) {
        mostrarAlerta("Error al guardar: " + e.message, "Error", "error");
    }
};

// --- LISTADO DE PREPARACIONES DE LA PARROQUIA ---
function renderizarListaPreparaciones(filtro = '') {
    const contenedor = document.getElementById('contenedor-tarjetas-preparaciones');
    const badgeCount = document.getElementById('contador-preparaciones-badge');
    if (!contenedor) return;

    if (!preparacionesParroquia || preparacionesParroquia.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align: center; padding: 32px 16px; color: var(--text-muted, #6b7280);">
                <span class="material-symbols-outlined" style="font-size: 48px; opacity: 0.4;">playlist_remove</span>
                <p style="margin: 8px 0 0 0; font-size: 0.95rem;">No hay preparaciones registradas aún en esta parroquia.</p>
                <button class="btn-accion" style="margin-top: 14px;" onclick="window.expandirSeccionPrepForm()">
                    Crear Primera Preparación
                </button>
            </div>
        `;
        if (badgeCount) badgeCount.textContent = '0 preparaciones';
        return;
    }

    const filtroNorm = normalizarTexto(filtro);
    const filtradas = preparacionesParroquia.filter(p => {
        const n = normalizarTexto(p.nombre || '');
        const f = normalizarTexto(p.fecha || '');
        const cantoresStr = (p.cantos || []).map(c => normalizarTexto(c.cantor || '')).join(' ');
        return filtroNorm === '' || n.includes(filtroNorm) || f.includes(filtroNorm) || cantoresStr.includes(filtroNorm);
    });

    if (badgeCount) badgeCount.textContent = `${filtradas.length} ${filtradas.length === 1 ? 'preparación' : 'preparaciones'}`;

    if (filtradas.length === 0) {
        contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">No se encontraron preparaciones con ese filtro.</p>`;
        return;
    }

    contenedor.innerHTML = filtradas.map(prep => {
        const cantos = prep.cantos || [];
        const resumenCantores = cantos
            .filter(c => c.cantor)
            .map(c => c.cantor);
        const cantoresUnicos = Array.from(new Set(resumenCantores));

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
                            ${cantoresUnicos.length > 0 ? `<span>•</span> <span>🎤 ${cantoresUnicos.join(', ')}</span>` : ''}
                        </div>
                    </div>

                    <div class="prep-tarjeta-acciones" onclick="event.stopPropagation()">
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Editar y asignar cantores" onclick="window.cargarPreparacionParaEditar('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">edit</span>
                        </button>
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Ver en Visor" onclick="window.abrirPreparacionEnVisor('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">visibility</span>
                        </button>
                        <button class="btn-parroquia-top" style="padding: 6px 10px;" title="Compartir en WhatsApp" onclick="window.compartirPreparacionWhatsApp('${prep.id}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">share</span>
                        </button>
                        <button class="btn-parroquia-top" style="padding: 6px 10px; color: #b91c1c;" title="Eliminar preparación" onclick="window.eliminarPreparacion('${prep.id}', '${prep.nombre}')">
                            <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
                        </button>
                    </div>
                </div>

                <!-- Detalle desplegable de cantos y cantores asignados -->
                <div id="detalle-prep-${prep.id}" class="prep-cantos-detalle" style="display: none;">
                    ${cantos.map(item => {
                        const c = todosLosCantos.find(can => String(can.id) === String(item.id));
                        const titulo = c ? (c.title || c.titulo) : "Canto Desconocido";
                        const tonoStr = item.tono ? `Tono: ${item.tono}` : '';
                        const cejStr = (item.cejilla && item.cejilla !== "0") ? `Cej. ${item.cejilla}` : '';
                        const meta = [tonoStr, cejStr].filter(Boolean).join(' | ');

                        return `
                            <div class="prep-canto-item-view">
                                <div class="prep-canto-left">
                                    <span class="badge-posicion">${item.etiqueta}</span>
                                    <strong>${titulo}</strong>
                                    ${meta ? `<span style="font-size: 0.8rem; color: #666; margin-left: 4px;">(${meta})</span>` : ''}
                                </div>
                                <div>
                                    ${item.cantor ? `
                                        <span class="prep-cantor-pill">
                                            <span class="material-symbols-outlined" style="font-size: 14px;">mic</span>
                                            ${item.cantor}
                                        </span>
                                    ` : `<span style="font-size: 0.78rem; color: var(--text-muted, #999);">Sin cantor</span>`}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
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

// Abrir preparación en Visor
window.abrirPreparacionEnVisor = (prepId) => {
    const prep = preparacionesParroquia.find(p => p.id === prepId);
    if (!prep || !prep.cantos || prep.cantos.length === 0) return;

    try {
        sessionStorage.setItem('resucito_active_playlist', JSON.stringify({
            id: prep.id,
            nombre: `🕊️ ${prep.nombre} (${parroquiaActiva?.nombre || 'Parroquia'})`,
            categoria: 'Eucaristía',
            ids_cantos: prep.cantos,
            isParroquia: true
        }));
        const allowed = prep.cantos.map(c => String(c.id));
        sessionStorage.setItem('resucito_shared_allowed_songs', JSON.stringify(allowed));

        const primerCantoId = prep.cantos[0].id;
        window.location.href = `./index.html#canto=${primerCantoId}`;
    } catch (e) {
        console.error("Error abriendo visor:", e);
    }
};

window.abrirCantoEnVisor = (cantoId) => {
    window.location.href = `./index.html#canto=${cantoId}`;
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
    const content = document.getElementById('content-prep-form');
    const wrapper = document.getElementById('wrapper-prep-form');
    if (content) content.classList.remove('cfg-close');
    if (wrapper) wrapper.classList.remove('collapsed');
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
        alert(mensaje);
        return;
    }

    if (txtTitulo) txtTitulo.textContent = titulo;
    if (txtMensaje) txtMensaje.textContent = mensaje;
    if (icnModal) icnModal.textContent = icono;

    modal.style.display = 'flex';
    btnOk.onclick = () => { modal.style.display = 'none'; };
}

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

    const btnAbrirCrear = document.getElementById('btn-abrir-crear-parroquia');
    if (btnAbrirCrear) {
        btnAbrirCrear.addEventListener('click', () => {
            document.getElementById('modal-crear-parroquia').style.display = 'flex';
        });
    }

    const btnConfirmarCrear = document.getElementById('btn-confirmar-crear-parroquia');
    if (btnConfirmarCrear) btnConfirmarCrear.addEventListener('click', window.crearNuevaParroquia);

    const btnVerCodigo = document.getElementById('btn-ver-codigo-16');
    if (btnVerCodigo) btnVerCodigo.addEventListener('click', window.abrirModalCodigo16);

    const btnCopiarCodigo = document.getElementById('btn-copiar-codigo-16');
    if (btnCopiarCodigo) btnCopiarCodigo.addEventListener('click', window.copiarCodigo16);

    const btnCompartirCodigoWA = document.getElementById('btn-compartir-codigo-whatsapp');
    if (btnCompartirCodigoWA) btnCompartirCodigoWA.addEventListener('click', window.compartirCodigoWhatsApp);

    const btnRegenerarCodigo = document.getElementById('btn-regenerar-codigo-16');
    if (btnRegenerarCodigo) btnRegenerarCodigo.addEventListener('click', window.regenerarCodigo16);

    const btnMiembros = document.getElementById('btn-gestionar-miembros');
    if (btnMiembros) btnMiembros.addEventListener('click', window.abrirModalMiembros);

    const btnConfirmarAgregarMiem = document.getElementById('btn-confirmar-agregar-miembro');
    if (btnConfirmarAgregarMiem) btnConfirmarAgregarMiem.addEventListener('click', window.agregarMiembroDirecto);

    const btnCambiarParroquia = document.getElementById('btn-cambiar-parroquia');
    if (btnCambiarParroquia) {
        btnCambiarParroquia.addEventListener('click', () => {
            cargarTodasLasParroquias();
            mostrarVista('sin-parroquia');
        });
    }

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
