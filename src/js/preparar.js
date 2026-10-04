// src/js/preparar.js - Lógica completa de Gestión y Preparación de Listas para Resucitó v2

import { auth, db } from '../firebase.js';
import { 
    doc, setDoc, getDoc, deleteDoc, 
    collection, query, onSnapshot, orderBy, serverTimestamp,
    where, getDocs, limit 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { songs } from '../songs-data.js';
import { obtenerTiposCelebracion, BUILTIN_TIPOS } from './datos.js';
import { parseChord, transposeNote } from '../chords.js';

// --- ZONA DE VARIABLES DE ESTADO ---
let listaOrdenada = [];
let todosLosCantos = [];
let listasLocalesCache = [];
let sincronizando = false;
let bloqueoSnapshot = false;
let importandoLink = false;

// --- UTILIDADES DE TRANSPOSICIÓN Y ENRIQUECIMIENTO DE CANTOS ---
export function calcularTonoTranspuesto(songId, acordeOffset) {
    const offset = parseInt(acordeOffset) || 0;
    const song = (Array.isArray(todosLosCantos) && todosLosCantos.length > 0 ? todosLosCantos : songs).find(s => String(s.id) === String(songId));
    const baseChordStr = (song && song.acorde) ? song.acorde : 'La';
    if (offset === 0) return baseChordStr;
    const parsed = parseChord(baseChordStr);
    const trans = transposeNote(parsed.noteName, offset);
    return trans + (parsed.typeSuffix ? (' ' + parsed.typeSuffix) : '');
}

export function enriquecerCantosConConfiguracion(cantos) {
    if (!Array.isArray(cantos)) return [];
    const pool = (Array.isArray(todosLosCantos) && todosLosCantos.length > 0 ? todosLosCantos : songs);
    return cantos.map(item => {
        const id = String(typeof item === 'object' && item !== null ? item.id : item);
        const tag = (typeof item === 'object' && item !== null ? (item.etiqueta || item.tag) : "N") || "N";
        
        let acorde = (typeof item === 'object' && item !== null && item.acorde !== undefined && item.acorde !== null) ? String(item.acorde) : null;
        let cejilla = (typeof item === 'object' && item !== null && item.cejilla !== undefined && item.cejilla !== null) ? String(item.cejilla) : null;
        let nota = (typeof item === 'object' && item !== null && item.nota !== undefined && item.nota !== null) ? String(item.nota) : null;
        let tono = (typeof item === 'object' && item !== null && item.tono) ? String(item.tono) : null;

        // Si falta acorde o cejilla, intentar leer de la configuración guardada localmente por el usuario
        if (acorde === null || cejilla === null) {
            try {
                const localConf = JSON.parse(localStorage.getItem(`canto-config-${id}`) || '{}');
                if (acorde === null && localConf.acorde !== undefined) {
                    acorde = String(localConf.acorde);
                }
                if (cejilla === null && localConf.cejilla !== undefined) {
                    cejilla = String(localConf.cejilla);
                }
            } catch (e) {}
        }

        // Si cejilla sigue sin existir, buscar valor por defecto en catálogo del canto
        if (cejilla === null) {
            const cMeta = pool.find(c => String(c.id) === id);
            cejilla = (cMeta && cMeta.cejilla) ? String(cMeta.cejilla) : "0";
        }

        if (acorde === null) {
            acorde = "0";
        }

        if (nota === null) {
            const localNota = localStorage.getItem(`notes_${id}`);
            nota = localNota ? localNota : "";
        }

        if (!tono) {
            tono = calcularTonoTranspuesto(id, acorde);
        }

        const res = { id, tag, acorde, cejilla };
        if (nota) res.nota = nota;
        if (tono) res.tono = tono;
        return res;
    });
}

// --- ESTADO DE FILTRADO Y MOMENTOS LITÚRGICOS ---
let filtroCategoriaSeleccionada = 'Todos';
let categoriaForzadaAbierta = null;
let listaForzadaAbierta = null;
let momentoSeleccionado = 'Libre';
const MAPA_ETIQUETAS = {
    "Entrada": "E",
    "Paz": "P",
    "Liturgia": "L",
    "Comunión": "C",
    "Final": "F"
};

export function poblarSelectYFiltrosCelebracion() {
    const tipos = obtenerTiposCelebracion();

    // 1. Poblar select #tipoCelebracion
    const selectTipo = document.getElementById('tipoCelebracion');
    if (selectTipo) {
        const valActual = selectTipo.value;
        selectTipo.innerHTML = tipos.map(t => `<option value="${t}">${t}</option>`).join('');
        if (valActual && tipos.includes(valActual)) {
            selectTipo.value = valActual;
        }
    }

    // 2. Poblar select de filtro #contenedor-filtros-categoria
    const contFiltros = document.getElementById('contenedor-filtros-categoria');
    if (contFiltros) {
        let html = `<label for="select-filtro-categoria" class="label-filtro-categoria">Seleccionar:</label>`;
        html += `<select id="select-filtro-categoria" class="select-filtro-categoria" onchange="window.setFiltroCategoria(null, this.value)">`;
        html += `<option value="Todos" ${filtroCategoriaSeleccionada === 'Todos' ? 'selected' : ''}>Todos</option>`;
        tipos.forEach(t => {
            const isSelected = (filtroCategoriaSeleccionada === t);
            html += `<option value="${t}" ${isSelected ? 'selected' : ''}>${t}</option>`;
        });
        html += `</select>`;
        contFiltros.innerHTML = html;
    }
}

window.addEventListener('tiposCelebracionChanged', () => {
    poblarSelectYFiltrosCelebracion();
});

// Cargar cantos excluyendo los visibilidad "index" si aplicara
todosLosCantos = Array.isArray(songs) 
    ? songs.filter(canto => canto.visible !== "index") 
    : [];

// --- NORMALIZADOR DE TEXTO ---
const normalizarTexto = (texto) => {
    if (!texto) return "";
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ñ/g, "n")
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
};

let editarListaIdForzada = null;
// Leer parámetros de URL para expandir categoría y lista específica si viene desde el visor
try {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    const listaIdParam = urlParams.get('listaId');
    const editarParam = urlParams.get('editarId');
    if (catParam) {
        categoriaForzadaAbierta = decodeURIComponent(catParam);
    }
    if (listaIdParam) {
        listaForzadaAbierta = decodeURIComponent(listaIdParam);
    }
    if (editarParam) {
        editarListaIdForzada = decodeURIComponent(editarParam);
    }
} catch (e) {
    console.error("Error al procesar parámetros URL en preparar.js:", e);
}

// --- MOTOR DE CACHÉ LOCAL (OFFLINE-FIRST) ---
const cargarDesdeEquipo = () => {
    try {
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            listasLocalesCache = JSON.parse(datosLocales);
            renderizarListasUI(listasLocalesCache);
        }
    } catch (e) {
        console.error("Error al cargar caché local de listas:", e);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        cargarDesdeEquipo();
        detectarLinkCompartido();
    });
} else {
    cargarDesdeEquipo();
    detectarLinkCompartido();
}

// --- SINCRONIZACIÓN FIREBASE EN SEGUNDO PLANO ---
async function ejecutarSincronizacionFondo() {
    const user = auth.currentUser;
    if (!user || sincronizando) return;
    sincronizando = true;
    console.log("🔄 Iniciando sincronización de fondo...");

    try {
        // A. Procesar eliminaciones pendientes
        let pendingDeletions = JSON.parse(localStorage.getItem('cache_listas_eliminadas_pendientes') || "[]");
        let deletionsUpdated = false;

        if (pendingDeletions.length > 0 && navigator.onLine) {
            for (let i = pendingDeletions.length - 1; i >= 0; i--) {
                const idLista = pendingDeletions[i];
                try {
                    await deleteDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", idLista));
                    console.log(`🔥 Sincronizada eliminación offline: ${idLista}`);
                    pendingDeletions.splice(i, 1);
                    deletionsUpdated = true;
                } catch (e) {
                    console.warn(`No se pudo sincronizar eliminación de ${idLista}:`, e);
                }
            }
        }
        if (deletionsUpdated) {
            localStorage.setItem('cache_listas_eliminadas_pendientes', JSON.stringify(pendingDeletions));
        }

        // B. Procesar subidas/actualizaciones pendientes
        let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
        let huboCambios = false;

        if (navigator.onLine) {
            for (let i = 0; i < cache.length; i++) {
                const lista = cache[i];
                if (lista.pendingSync) {
                    try {
                        const listaLimpia = lista.ids_cantos.map(item => {
                            if (typeof item !== 'object' || item === null) {
                                return { id: String(item), tag: "N" };
                            }
                            const res = {
                                id: String(item.id),
                                tag: item.etiqueta || item.tag || "N"
                            };
                            if (item.acorde !== undefined && item.acorde !== null) res.acorde = String(item.acorde);
                            if (item.cejilla !== undefined && item.cejilla !== null) res.cejilla = String(item.cejilla);
                            if (item.nota) res.nota = String(item.nota);
                            if (item.tono) res.tono = String(item.tono);
                            return res;
                        });

                        await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", lista.id), { 
                            id: lista.id,
                            nombre: lista.nombre,
                            categoria: lista.categoria || "Otros",
                            ids_cantos: listaLimpia,
                            ultimaActualizacion: lista.ultimaActualizacion || new Date().toISOString(),
                            origin: 'cloud',
                            isShared: !!lista.isShared,
                            sharedLinkId: lista.sharedLinkId || null
                        });

                        console.log(`☁️ Sincronizada lista offline: ${lista.nombre}`);
                        lista.origin = 'cloud';
                        delete lista.pendingSync;
                        huboCambios = true;
                    } catch (e) {
                        console.warn(`No se pudo sincronizar lista ${lista.nombre}:`, e);
                    }
                }
            }
        }

        if (huboCambios) {
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            listasLocalesCache = cache;
            renderizarListasUI(cache);
        }
    } catch (e) {
        console.error("Error en sincronización de fondo:", e);
    } finally {
        sincronizando = false;
    }
}

window.addEventListener('online', () => {
    console.log("🌐 Conexión restablecida. Sincronizando datos...");
    ejecutarSincronizacionFondo();
});

// Escuchar cambios de autenticación
onAuthStateChanged(auth, async (user) => {
    await detectarLinkCompartido(user);

    if (user) {
        console.log("👤 Sesión activa:", user.displayName);
        const q = query(collection(db, "usuarios", user.uid, "listasPersonalizadas"), orderBy("ultimaActualizacion", "desc"));
        
        onSnapshot(q, (snapshot) => {
            if (bloqueoSnapshot) return;
            if (snapshot.metadata.fromCache && listasLocalesCache.length > 0) return;
            
            const cloudLists = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const pendingDeletions = JSON.parse(localStorage.getItem('cache_listas_eliminadas_pendientes') || "[]");
            const filteredCloudLists = cloudLists.filter(l => !pendingDeletions.includes(l.id));
            
            let localCache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
            
            // Mapa para prevenir duplicados y priorizar cambios locales recientes
            const mapaListas = new Map();

            // 1. Insertar primero las listas locales no eliminadas
            localCache.forEach(l => {
                if (l && l.id && !pendingDeletions.includes(l.id)) {
                    mapaListas.set(l.id, l);
                }
            });

            // 2. Fusionar con datos de la nube
            filteredCloudLists.forEach(cloud => {
                const local = mapaListas.get(cloud.id);
                if (!local) {
                    mapaListas.set(cloud.id, cloud);
                } else {
                    if (local.pendingSync) {
                        // Conservar local mientras esté pendiente de sincronización
                    } else {
                        const timeLocal = new Date(local.ultimaActualizacion || 0).getTime();
                        const timeCloud = new Date(cloud.ultimaActualizacion || 0).getTime();
                        if (timeCloud >= timeLocal) {
                            mapaListas.set(cloud.id, cloud);
                        }
                    }
                }
            });

            const mergedLists = Array.from(mapaListas.values());
            mergedLists.sort((a, b) => new Date(b.ultimaActualizacion || 0) - new Date(a.ultimaActualizacion || 0));

            // Solo re-renderizar la UI si los datos difieren de lo que ya se está mostrando
            const prevStr = JSON.stringify(listasLocalesCache);
            const nextStr = JSON.stringify(mergedLists);
            const dataChanged = (prevStr !== nextStr);

            listasLocalesCache = mergedLists;
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));

            if (dataChanged) {
                renderizarListasUI(listasLocalesCache);
            }

            const pendingLists = localCache.filter(l => l.pendingSync === true);
            if (pendingLists.length > 0 || pendingDeletions.length > 0) {
                ejecutarSincronizacionFondo();
            }
        });
    } else {
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            const parsed = JSON.parse(datosLocales);
            if (JSON.stringify(parsed) !== JSON.stringify(listasLocalesCache)) {
                listasLocalesCache = parsed;
                renderizarListasUI(listasLocalesCache);
            }
        } else if (listasLocalesCache.length > 0) {
            listasLocalesCache = [];
            renderizarListasUI([]);
        }
    }
});

// --- RENDERIZADO DE LA INTERFAZ CON AGRUPACIÓN Y FILTRADO POR CATEGORÍA ---

window.setFiltroCategoria = (elemento, cat) => {
    filtroCategoriaSeleccionada = cat;
    const selectEl = document.getElementById('select-filtro-categoria');
    if (selectEl && selectEl.value !== cat) {
        selectEl.value = cat;
    }
    renderizarListasUI(listasLocalesCache);
};

function crearTarjetaLista(idLista, data, contenedor) {
    if (!data) return;

    const ids = data.ids_cantos || [];
    const nombre = data.nombre || "Sin nombre";
    const categoria = data.categoria || "Otros";
    const nombreEscapado = nombre.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const catEscapada = categoria.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    
    const esNube = (data.origin === 'cloud');
    const icono = esNube ? '☁️' : '🏠';
    const sharedBadge = data.sharedLinkId 
        ? `<span class="badge-link-id" style="font-size: 0.72rem; background: #e0f2fe; color: #0284c7; padding: 2px 6px; border-radius: 4px; font-weight: 600; display: inline-flex; align-items: center; gap: 2px;" title="Enlace compartido activo: ?v=${data.sharedLinkId}">🔗 ${data.sharedLinkId}</span>` 
        : '';
    
    const div = document.createElement('div');
    div.className = 'tarjeta-lista-wrapper';
    div.id = `tarjeta-lista-${idLista}`;
    div.innerHTML = `
        <div class="tarjeta-lista" onclick="window.toggleDetalleLista('${idLista}')">
            <div class="info-lista">
                <strong>${nombre}</strong>
                <span title="${esNube ? 'Sincronizada' : 'Local'}">${icono}</span>
                ${sharedBadge}
                <span>${ids.length} cantos</span>
            </div>
            <div class="acciones-lista" onclick="event.stopPropagation()">
                <button class="btn-icono share-universal" onclick="window.compartirUniversal('${idLista}')" title="Compartir"><span class="material-symbols-outlined">share</span></button>
                <button class="btn-icono link" onclick="window.copiarSoloLink('${idLista}')" title="Copiar enlace"><span class="material-symbols-outlined">link</span></button>
                <button class="btn-icono export" onclick="window.exportarLista('${idLista}')" title="Descargar archivo"><span class="material-symbols-outlined">download</span></button>
                <button class="btn-icono edit" onclick="window.cargarListaParaEditar('${idLista}', ${JSON.stringify(ids).replace(/"/g, '&quot;')}, '${nombreEscapado}', '${catEscapada}')" title="Editar"><span class="material-symbols-outlined">edit</span></button>
                <button class="btn-icono delete" onclick="window.eliminarLista('${idLista}', '${nombreEscapado}')" title="Eliminar"><span class="material-symbols-outlined">delete</span></button>
            </div>
        </div>
        <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
    `;
    contenedor.appendChild(div);
}

// --- ESCUCHA EN TIEMPO REAL DE LISTAS COMPARTIDAS (LIVE REAL-TIME SYNC) ---
const listenersListasCompartidas = new Map();

function sincronizarEscuchasEnlaceCompartido() {
    const listado = listasLocalesCache || [];
    const sharedIdsActivos = new Set();

    listado.forEach(l => {
        const linkId = l.sharedLinkId;
        if (linkId) {
            sharedIdsActivos.add(linkId);
            if (!listenersListasCompartidas.has(linkId)) {
                console.log(`👂 Activando escucha en vivo para enlace compartido: ${linkId}`);
                const unsub = onSnapshot(doc(db, "listasCompartidas", linkId), (docSnap) => {
                    if (!docSnap.exists()) return;
                    if (docSnap.metadata.hasPendingWrites) return;

                    const data = docSnap.data();
                    if (!data || !Array.isArray(data.i)) return;

                    const user = auth.currentUser;
                    const esCreador = !!(user && data.ownerUid && data.ownerUid === user.uid);
                    if (esCreador && window.editingId) {
                        return;
                    }

                    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
                    const targetIdx = cache.findIndex(item => item.sharedLinkId === linkId || item.id === linkId);
                    if (targetIdx === -1) return;

                    const target = cache[targetIdx];
                    const nuevosCantos = enriquecerCantosConConfiguracion(data.i);

                    const strActual = JSON.stringify(target.ids_cantos || []);
                    const strNuevo = JSON.stringify(nuevosCantos);
                    const nombreNuevo = data.n ? (data.n.startsWith('🔗') ? data.n : `🔗 ${data.n}`) : target.nombre;
                    const catNueva = data.c || target.categoria;

                    if (strActual !== strNuevo || target.nombre !== nombreNuevo || target.categoria !== catNueva) {
                        console.log(`✨ Actualización en vivo recibida para lista compartida "${target.nombre}" (${nuevosCantos.length} cantos)`);
                        target.ids_cantos = nuevosCantos;
                        target.nombre = nombreNuevo;
                        target.categoria = catNueva;
                        target.ultimaActualizacion = new Date().toISOString();
                        
                        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                        listasLocalesCache = cache;
                        
                        if (user && !esCreador) {
                            try {
                                setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", target.id), {
                                    id: target.id,
                                    nombre: target.nombre,
                                    categoria: target.categoria || "Otros",
                                    ids_cantos: nuevosCantos,
                                    ultimaActualizacion: target.ultimaActualizacion,
                                    origin: 'cloud',
                                    isShared: true,
                                    sharedLinkId: linkId
                                }, { merge: true });
                            } catch(e) {
                                console.warn("Error actualizando nube del receptor:", e);
                            }
                        }

                        const detalleAbiertoId = document.querySelector('.detalle-lista-cantos:not(.cfg-close)')?.id?.replace('detalle-', '');

                        renderizarListasUI(listasLocalesCache);

                        if (detalleAbiertoId) {
                            const detalleDiv = document.getElementById(`detalle-${detalleAbiertoId}`);
                            if (detalleDiv) {
                                detalleDiv.classList.remove('cfg-close');
                                const lAbierta = listasLocalesCache.find(x => x.id === detalleAbiertoId);
                                if (lAbierta && Array.isArray(lAbierta.ids_cantos)) {
                                    detalleDiv.innerHTML = lAbierta.ids_cantos.map((item, i) => {
                                        const id = (typeof item === 'object' && item !== null) ? item.id : item;
                                        const etiqueta = (typeof item === 'object' && item !== null) ? (item.tag || item.etiqueta || (i + 1)) : (i + 1);
                                        const c = todosLosCantos.find(can => String(can.id) === String(id));
                                        let metaBadges = '';
                                        if (typeof item === 'object' && item !== null) {
                                            const parts = [];
                                            if (item.tono) parts.push(`Tono: <b>${item.tono}</b>`);
                                            if (item.cejilla && item.cejilla !== "0") parts.push(`Cejilla: <b>${item.cejilla}</b>`);
                                            if (item.nota) parts.push(`Nota: <b>${item.nota}</b>`);
                                            if (parts.length > 0) {
                                                metaBadges = `<span class="canto-meta-badges" style="font-size: 0.8rem; color: #555; margin-left: 8px;">(${parts.join(' | ')})</span>`;
                                            }
                                        }
                                        return `<div class="item-detalle-canto" onclick="window.abrirVisorCantoDesdeLista('${id}', '${lAbierta.id}')" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between; padding: 4px 0;">
                                            <span class="badge-posicion" style="margin-right: 8px;">${etiqueta}</span>
                                            <span style="flex-grow: 1;">${c ? (c.title || c.titulo) : "Canto desconocido"}</span>
                                            ${metaBadges}
                                        </div>`;
                                    }).join('');
                                }
                            }
                        }

                        mostrarNotificacionVerde(`☁️ Lista "${target.nombre.replace(/🔗/g, '').trim()}" actualizada en vivo (${nuevosCantos.length} cantos)`);
                    }
                }, (error) => {
                    console.warn(`Error en escucha de enlace compartido ${linkId}:`, error);
                });

                listenersListasCompartidas.set(linkId, unsub);
            }
        }
    });

    for (const [id, unsub] of listenersListasCompartidas.entries()) {
        if (!sharedIdsActivos.has(id)) {
            unsub();
            listenersListasCompartidas.delete(id);
        }
    }
}

function renderizarListasUI(listas) {
    const contenedor = document.getElementById('lista-colecciones');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';

    if (!listas || listas.length === 0) {
        contenedor.innerHTML = `
            <div class="status-msg-vacia">
                <p>No hay listas creadas aún.</p>
                <a href="javascript:void(0)" onclick="window.irANuevaLista()" class="link-crear-lista">¿Deseas crear una ahora?</a>
            </div>`;
        return;
    }

    const CATEGORIAS_ORDEN = obtenerTiposCelebracion();

    const grupos = {};
    CATEGORIAS_ORDEN.forEach(c => { grupos[c] = []; });

    // Deduplicar listas por ID para evitar duplicaciones
    const idsProcesados = new Set();
    listas.forEach(l => {
        if (l && l.id && !idsProcesados.has(l.id)) {
            idsProcesados.add(l.id);
            const cat = (l.categoria && CATEGORIAS_ORDEN.includes(l.categoria)) ? l.categoria : "Otros";
            if (!grupos[cat]) grupos[cat] = [];
            grupos[cat].push(l);
        }
    });

    let categoriasAMostrar = [...CATEGORIAS_ORDEN];
    if (filtroCategoriaSeleccionada !== 'Todos') {
        categoriasAMostrar = [
            filtroCategoriaSeleccionada,
            ...CATEGORIAS_ORDEN.filter(c => c !== filtroCategoriaSeleccionada)
        ];
    }

    let mostroAlguna = false;

    categoriasAMostrar.forEach(catName => {
        const items = grupos[catName] || [];
        
        // Si hay un filtro de búsqueda textual activo o filtro por botón
        if (items.length === 0 && filtroCategoriaSeleccionada !== 'Todos' && catName !== filtroCategoriaSeleccionada) {
            return;
        }

        mostroAlguna = true;
        const grupoWrapper = document.createElement('div');
        grupoWrapper.className = 'categoria-grupo-wrapper';
        const groupId = `cat-grupo-${catName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-")}`;
        
        const existingGroup = document.getElementById(groupId);
        let estaColapsado = (filtroCategoriaSeleccionada === 'Todos') ? true : (catName !== filtroCategoriaSeleccionada);
        if (existingGroup) {
            estaColapsado = existingGroup.classList.contains('collapsed');
        }
        if (categoriaForzadaAbierta && catName.toLowerCase() === categoriaForzadaAbierta.toLowerCase()) {
            estaColapsado = false;
        }

        grupoWrapper.innerHTML = `
            <div class="categoria-grupo-header" onclick="window.toggleCategoriaGrupo('${groupId}')">
                <h3>
                    <span class="material-symbols-outlined arrow-icon" id="arrow-${groupId}">${estaColapsado ? 'expand_more' : 'expand_less'}</span>
                    ${catName}
                </h3>
                <span class="badge-count">${items.length} ${items.length === 1 ? 'lista' : 'listas'}</span>
            </div>
            <div id="${groupId}" class="categoria-grupo-body ${estaColapsado ? 'collapsed' : ''}"></div>
        `;
        contenedor.appendChild(grupoWrapper);

        const bodyContainer = grupoWrapper.querySelector('.categoria-grupo-body');
        if (bodyContainer) {
            if (items.length === 0) {
                bodyContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; margin: 0; text-align: center; padding: 8px;">No hay listas en esta categoría.</p>`;
            } else {
                items.forEach(l => crearTarjetaLista(l.id, l, bodyContainer));
            }
        }
    });

    if (!mostroAlguna) {
        contenedor.innerHTML = `<p style="text-align: center; padding: 20px; color: var(--text-muted);">No se encontraron listas en esta categoría.</p>`;
    } else if (listaForzadaAbierta) {
        // Desplazarse suavemente y desplegar la lista seleccionada
        setTimeout(() => {
            if (editarListaIdForzada) {
                const listaAEditar = listasLocalesCache.find(l => l.id === editarListaIdForzada);
                if (listaAEditar) {
                    window.cargarListaParaEditar(
                        listaAEditar.id, 
                        listaAEditar.ids_cantos || [], 
                        listaAEditar.nombre || '', 
                        listaAEditar.categoria || ''
                    );
                    editarListaIdForzada = null;
                    listaForzadaAbierta = null;
                    categoriaForzadaAbierta = null;
                    return;
                }
            }

            const elLista = document.getElementById(`tarjeta-lista-${listaForzadaAbierta}`);
            if (elLista) {
                elLista.scrollIntoView({ behavior: 'smooth', block: 'center' });
                elLista.style.outline = '2px solid var(--accent-color, #d01212)';
                elLista.style.borderRadius = '6px';
                elLista.style.transition = 'outline 0.3s ease';
                setTimeout(() => {
                    elLista.style.outline = 'none';
                }, 2500);

                const detalle = document.getElementById(`detalle-${listaForzadaAbierta}`);
                if (detalle && detalle.classList.contains('cfg-close')) {
                    window.toggleDetalleLista(listaForzadaAbierta);
                }
            }
            listaForzadaAbierta = null;
            categoriaForzadaAbierta = null;
        }, 120);
    }

    sincronizarEscuchasEnlaceCompartido();
}

window.toggleCategoriaGrupo = (groupId) => {
    const body = document.getElementById(groupId);
    const arrow = document.getElementById(`arrow-${groupId}`);
    if (body) {
        const isCollapsed = body.classList.toggle('collapsed');
        if (arrow) arrow.textContent = isCollapsed ? 'expand_more' : 'expand_less';
    }
};

function renderizarLista(lista) {
    const contenedor = document.getElementById('contenedor-seleccion');
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
        const isChecked = listaOrdenada.some(item => String(item.id) === String(canto.id));
        
        div.onclick = () => window.toggleCanto(canto.id);
        div.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.toggleCanto(canto.id);
            }
        };
        div.innerHTML = `
            <span class="titulo-canto-seleccion">${nombreAMostrar}</span>
            <label class="toggle-switch" onclick="event.stopPropagation()">
                <input type="checkbox" data-id="${canto.id}" ${isChecked ? 'checked' : ''} onchange="window.toggleCanto('${canto.id}')">
                <span class="toggle-slider"></span>
            </label>`;
        contenedor.appendChild(div);
    });
}

// --- BUSCADORES Y FILTROS ---
window.filtrarSeleccion = () => {
    const input = document.getElementById('inputBuscadorCantos');
    const btnX = document.getElementById('btnLimpiarCantos');
    if (!input) return;

    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';

    const busquedaRaw = input.value.toLowerCase();
    const busquedaLimpia = normalizarTexto(busquedaRaw);
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
    
    renderizarLista(filtrados);
};

window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscadorCantos');
    if (input) {
        input.value = '';
        window.filtrarSeleccion();
        input.focus();
    }
};

window.filtrarMisListas = () => {
    const input = document.getElementById('inputBuscadorListas');
    const btnX = document.getElementById('btnLimpiarListas');
    if (!input) return;

    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';

    const busqueda = normalizarTexto(input.value);
    const filtradas = listasLocalesCache.filter(l => 
        normalizarTexto(l.nombre).includes(busqueda)
    );
    renderizarListasUI(filtradas);
};

window.limpiarBuscadorListas = () => {
    const input = document.getElementById('inputBuscadorListas');
    if (input) {
        input.value = '';
        window.filtrarMisListas();
        input.focus();
    }
};

// --- LÓGICA DE SELECCIÓN Y ORDENACIÓN ---
window.toggleCanto = (id) => {
    const stringId = String(id);
    const index = listaOrdenada.findIndex(item => String(item.id) === stringId);

    if (index !== -1) {
        listaOrdenada.splice(index, 1);
    } else {
        let etiqueta;
        if (momentoSeleccionado === 'Libre') {
            const numericos = listaOrdenada
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
        
        listaOrdenada.push({ id: stringId, etiqueta: etiqueta });
    }

    const prioridad = { 'E': 1, 'P': 2, 'L': 3, 'C': 4, 'F': 5 };
    
    listaOrdenada.sort((a, b) => {
        const getPeso = (item) => {
            if (prioridad[item.etiqueta]) return prioridad[item.etiqueta];
            return 2;
        };

        const pesoA = getPeso(a);
        const pesoB = getPeso(b);

        if (pesoA !== pesoB) return pesoA - pesoB;
        return parseInt(a.etiqueta || 0) - parseInt(b.etiqueta || 0);
    });

    actualizarInterfazSeleccion();
};

function actualizarInterfazSeleccion() {
    const contador = document.getElementById('contador-seleccion');
    if (contador) contador.innerText = listaOrdenada.length;
    
    const cola = document.getElementById('cola-seleccion');
    if (cola) {
        cola.innerHTML = '';
        listaOrdenada.forEach((item) => {
            const idCanto = (typeof item === 'object' && item !== null) ? item.id : item;
            const etiqueta = (typeof item === 'object' && item !== null) ? item.etiqueta : "N";
            const canto = todosLosCantos.find(c => String(c.id) === String(idCanto));
            
            if (canto) {
                let tonoDisplay = '';
                if (typeof item === 'object' && item !== null && item.tono) {
                    tonoDisplay = item.tono;
                } else {
                    try {
                        const conf = JSON.parse(localStorage.getItem(`canto-config-${idCanto}`) || '{}');
                        const offset = conf.acorde || 0;
                        tonoDisplay = calcularTonoTranspuesto(idCanto, offset);
                    } catch (e) {}
                }

                const tag = document.createElement('div');
                tag.className = 'canto-tag';
                tag.innerHTML = `<span>${etiqueta}</span> ${canto.title || canto.titulo} ${tonoDisplay ? `<small style="opacity:0.75; font-weight:600; margin-left:4px;">(${tonoDisplay})</small>` : ''}`;
                tag.onclick = (e) => { 
                    e.stopPropagation(); 
                    window.toggleCanto(idCanto); 
                };
                cola.appendChild(tag);
            }
        });
    }

    document.querySelectorAll('#contenedor-seleccion .item-canto input[type="checkbox"]').forEach(input => {
        const idInput = input.getAttribute('data-id');
        const existe = listaOrdenada.some(item => {
            const id = typeof item === 'object' ? item.id : item;
            return String(id) === String(idInput);
        });
        input.checked = existe;
    });
}

function solicitarDecisionListaExistente(nombreLista) {
    return new Promise((resolve) => {
        // Ocultar modal de ajustes si estuviera abierto
        const settingsModal = document.getElementById('settings-modal');
        if (settingsModal) settingsModal.style.display = 'none';

        const modal = document.getElementById('modal-conflicto-lista');
        const spanNombre = document.getElementById('modal-nombre-lista-existente');
        const btnActualizar = document.getElementById('btn-conflicto-actualizar');
        const btnDuplicar = document.getElementById('btn-conflicto-duplicar');
        const btnRenombrar = document.getElementById('btn-conflicto-renombrar');
        const btnUnir = document.getElementById('btn-conflicto-unir');
        const btnCancelar = document.getElementById('btn-conflicto-cancelar');
        const containerRenombrar = document.getElementById('modal-conflicto-renombrar-container');
        const inputNuevoNombre = document.getElementById('input-conflicto-nuevo-nombre');

        if (!modal || !btnDuplicar || !btnRenombrar || !btnUnir || !btnCancelar) {
            console.warn("Modal de conflicto no encontrado, usando confirm fallback.");
            const res = confirm(`⚠️ Ya existe una lista con el nombre "${nombreLista}". ¿Deseas actualizarla con los datos recibidos?`);
            return resolve({ accion: res ? 'actualizar' : 'cancelar' });
        }

        if (spanNombre) spanNombre.textContent = nombreLista;
        if (containerRenombrar) containerRenombrar.style.display = 'none';
        if (inputNuevoNombre) inputNuevoNombre.value = '';

        modal.style.display = 'flex';

        const cleanup = () => {
            modal.style.display = 'none';
            if (containerRenombrar) containerRenombrar.style.display = 'none';
            if (btnActualizar) btnActualizar.onclick = null;
            btnDuplicar.onclick = null;
            btnRenombrar.onclick = null;
            btnUnir.onclick = null;
            btnCancelar.onclick = null;
        };

        if (btnActualizar) {
            btnActualizar.onclick = (e) => {
                e.preventDefault();
                cleanup();
                resolve({ accion: 'actualizar' });
            };
        }

        btnDuplicar.onclick = (e) => { 
            e.preventDefault(); 
            cleanup(); 
            resolve({ accion: 'duplicar' }); 
        };

        btnRenombrar.onclick = (e) => { 
            e.preventDefault();
            if (containerRenombrar && containerRenombrar.style.display === 'none') {
                containerRenombrar.style.display = 'block';
                if (inputNuevoNombre) {
                    inputNuevoNombre.value = `${nombreLista} (2)`;
                    inputNuevoNombre.focus();
                    inputNuevoNombre.select();
                }
                btnRenombrar.innerHTML = `<span class="material-symbols-outlined">check</span> Confirmar nombre`;
                return;
            }

            const nuevoVal = (inputNuevoNombre ? inputNuevoNombre.value.trim() : '');
            if (!nuevoVal) {
                alert("Por favor escribe un nombre válido.");
                return;
            }
            btnRenombrar.innerHTML = `<span class="material-symbols-outlined">edit</span> Cambiar nombre`;
            cleanup(); 
            resolve({ accion: 'renombrar', nuevoNombre: nuevoVal }); 
        };

        btnUnir.onclick = (e) => { 
            e.preventDefault(); 
            cleanup(); 
            resolve({ accion: 'unir' }); 
        };

        btnCancelar.onclick = (e) => { 
            e.preventDefault(); 
            cleanup(); 
            resolve({ accion: 'cancelar' }); 
        };
    });
}

window.mostrarAlertaCustom = (mensaje, titulo = "Atención", icono = "warning") => {
    return new Promise((resolve) => {
        // Ocultar modal de ajustes si estuviera abierto
        const settingsModal = document.getElementById('settings-modal');
        if (settingsModal) settingsModal.style.display = 'none';

        const modal = document.getElementById('modal-alerta-custom');
        const txtTitulo = document.getElementById('modal-alerta-titulo');
        const txtMensaje = document.getElementById('modal-alerta-mensaje');
        const icnModal = document.getElementById('modal-alerta-icon');
        const btnOk = document.getElementById('modal-alerta-btn-ok');

        if (!modal || !txtMensaje || !btnOk) {
            alert(mensaje);
            return resolve();
        }

        if (txtTitulo) txtTitulo.textContent = titulo;
        if (txtMensaje) txtMensaje.textContent = mensaje;
        if (icnModal) icnModal.textContent = icono;

        modal.style.display = 'flex';

        const onOk = (e) => {
            if (e) e.preventDefault();
            modal.style.display = 'none';
            btnOk.onclick = null;
            resolve();
        };

        btnOk.onclick = onOk;
    });
};

// --- OBTENER O REUTILIZAR ID CORTO DE ENLACE COMPARTIDO ---
async function obtenerOReutilizarIdCorto(lista, user) {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlParamV = urlParams.get('v');
        if (urlParamV && (!lista || !lista.sharedLinkId || lista.sharedLinkId === urlParamV)) {
            return urlParamV;
        }
    } catch(e) {}

    if (lista && lista.sharedLinkId) return lista.sharedLinkId;
    if (user && lista && lista.nombre) {
        try {
            const qOwner = query(
                collection(db, "listasCompartidas"),
                where("ownerUid", "==", user.uid),
                limit(30)
            );
            const ownerSnaps = await getDocs(qOwner);
            const lNorm = normalizarTexto(lista.nombre.replace(/🔗/g, '').replace(/📂/g, ''));
            const match = ownerSnaps.docs.find(d => {
                const data = d.data();
                const dNorm = normalizarTexto(data.n ? data.n.replace(/🔗/g, '').replace(/📂/g, '') : '');
                return dNorm === lNorm;
            });
            if (match) {
                console.log(`🔗 Reutilizando enlace compartido previo: ${match.id} para lista "${lista.nombre}"`);
                return match.id;
            }
        } catch(e) {
            console.warn("No se pudo buscar link compartido previo:", e);
        }
    }
    return (lista && lista.sharedLinkId) || Math.random().toString(36).substring(2, 8);
}

// --- GUARDAR LISTA ---
window.guardarListaFirebase = async (btn) => {
    const nombreInput = document.getElementById('nombreLista');
    const tipoSelect = document.getElementById('tipoCelebracion');
    const nombre = nombreInput ? nombreInput.value.trim() : '';
    const categoria = tipoSelect ? tipoSelect.value : 'Eucaristía';
    const user = auth.currentUser;

    if (!nombre) {
        mostrarAlertaCustom("Ingresa un nombre para la lista.", "Nombre Requerido", "edit_note");
        return;
    }
    if (listaOrdenada.length === 0) {
        mostrarAlertaCustom("Selecciona al menos un canto para guardar la lista.", "Selección Requerida", "playlist_add");
        return;
    }

    const listaId = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    const nombreNormalizado = normalizarTexto(nombre);
    
    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
    const listadoBase = (Array.isArray(listasLocalesCache) && listasLocalesCache.length > 0) ? listasLocalesCache : cache;

    // Coincidencia estricta por ID o Nombre normalizado
    const existe = listadoBase.find(l => 
        l.id === listaId || 
        (l.nombre && normalizarTexto(l.nombre) === nombreNormalizado)
    );

    let finalIdsCantos = enriquecerCantosConConfiguracion(listaOrdenada);

    let nombreFinal = nombre;
    let listaIdFinal = listaId;

    if (existe && window.editingId !== existe.id && window.editingId !== listaId) {
        const decision = await solicitarDecisionListaExistente(nombre);
        if (decision.accion === 'cancelar') return;

        if (decision.accion === 'actualizar') {
            nombreFinal = existe.nombre;
            listaIdFinal = existe.id;
        } else if (decision.accion === 'duplicar') {
            nombreFinal = `${nombre} (Copia)`;
            listaIdFinal = `${listaId}-copia-${Date.now().toString(36)}`;
        } else if (decision.accion === 'renombrar' && decision.nuevoNombre) {
            nombreFinal = decision.nuevoNombre;
            listaIdFinal = nombreFinal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        } else if (decision.accion === 'unir') {
            const cantosExistentes = Array.isArray(existe.ids_cantos) ? existe.ids_cantos : [];
            const idsProcesados = new Set(cantosExistentes.map(c => String(typeof c === 'object' ? c.id : c)));
            
            const cantosNuevos = [];
            finalIdsCantos.forEach(item => {
                const itemStrId = String(typeof item === 'object' ? item.id : item);
                if (!idsProcesados.has(itemStrId)) {
                    cantosNuevos.push(item);
                }
            });

            finalIdsCantos = enriquecerCantosConConfiguracion([...cantosExistentes, ...cantosNuevos]);
            listaIdFinal = existe.id;
            nombreFinal = existe.nombre;
        }
    }

    // Si se estaba editando una lista previa cuyo ID original cambió
    if (window.editingId && window.editingId !== listaIdFinal) {
        let pendingDeletions = JSON.parse(localStorage.getItem('cache_listas_eliminadas_pendientes') || "[]");
        if (!pendingDeletions.includes(window.editingId)) {
            pendingDeletions.push(window.editingId);
            localStorage.setItem('cache_listas_eliminadas_pendientes', JSON.stringify(pendingDeletions));
        }
        if (user) {
            try {
                deleteDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", window.editingId));
            } catch (e) {
                console.warn("No se pudo eliminar ID previo en Firebase:", e);
            }
        }
    }

    const listaPrevia = listadoBase.find(l => l.id === listaIdFinal || l.id === window.editingId);
    let isShared = !!((listaPrevia && listaPrevia.isShared) || (existe && existe.isShared));
    let sharedLinkId = (listaPrevia && listaPrevia.sharedLinkId) || (existe && existe.sharedLinkId) || null;

    if (!sharedLinkId && user) {
        sharedLinkId = await obtenerOReutilizarIdCorto({ nombre: nombreFinal }, user);
        if (sharedLinkId) isShared = true;
    }

    const nuevaLista = { 
        id: listaIdFinal, 
        nombre: nombreFinal, 
        categoria,
        ids_cantos: finalIdsCantos, 
        ultimaActualizacion: new Date().toISOString(),
        origin: 'local',
        pendingSync: user ? true : false,
        isShared: isShared,
        sharedLinkId: sharedLinkId
    };

    if (sharedLinkId) {
        try {
            const sharedDocRef = doc(db, "listasCompartidas", sharedLinkId);
            const allowed = finalIdsCantos.map(item => String(typeof item === 'object' && item !== null ? item.id : item));
            await setDoc(sharedDocRef, {
                n: nombreFinal,
                c: categoria || "Otros",
                i: finalIdsCantos,
                actualizado: serverTimestamp(),
                ownerUid: user?.uid || 'anonimo',
                ownerName: user?.displayName || user?.email || '',
                allowedSongIds: allowed
            }, { merge: true });

            if (normalizarTexto(nombreFinal) === 'test' && sharedLinkId !== 'f8cuyo') {
                try {
                    await setDoc(doc(db, "listasCompartidas", "f8cuyo"), {
                        n: nombreFinal,
                        c: categoria || "Otros",
                        i: finalIdsCantos,
                        actualizado: serverTimestamp(),
                        allowedSongIds: allowed
                    }, { merge: true });
                } catch(e) {}
            }
        } catch (e) {
            console.warn("Error actualizando enlace compartido en Firebase al guardar:", e);
        }
    }

    cache = cache.filter(l => l.id !== listaIdFinal && l.id !== window.editingId);
    cache.unshift(nuevaLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
    listasLocalesCache = cache;
    
    renderizarListasUI(cache);
    
    if (nombreInput) nombreInput.value = '';
    window.editingId = null;
    listaOrdenada = [];
    actualizarInterfazSeleccion();

    // Contraer la sección "Crear o Editar Lista" tras guardar o editar
    window.contraerSeccionNuevaLista();

    // Notificación verde flotante en la parte superior durante 5 segundos
    mostrarNotificacionVerde("Lista Guardada");

    if (user) {
        ejecutarSincronizacionFondo();
    }

    if (btn) {
        const contenidoOriginal = btn.innerHTML;
        btn.innerHTML = `<span class="material-symbols-outlined">check_circle</span> Guardado`;
        setTimeout(() => {
            btn.innerHTML = contenidoOriginal;
        }, 2000);
    }
};

function mostrarNotificacionVerde(mensaje = "Lista Guardada") {
    let toast = document.getElementById('toast-notificacion-verde');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notificacion-verde';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-20px);
            background: #28a745;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 700;
            box-shadow: 0 8px 24px rgba(40, 167, 69, 0.4);
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

window.eliminarLista = async (idLista, nombreLista) => {
    if (!confirm(`¿Eliminar la lista "${nombreLista}"?`)) return;

    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
    cache = cache.filter(l => l.id !== idLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
    listasLocalesCache = cache;

    renderizarListasUI(cache);

    if (auth.currentUser) {
        let pendingDeletions = JSON.parse(localStorage.getItem('cache_listas_eliminadas_pendientes') || "[]");
        if (!pendingDeletions.includes(idLista)) {
            pendingDeletions.push(idLista);
            localStorage.setItem('cache_listas_eliminadas_pendientes', JSON.stringify(pendingDeletions));
        }
        ejecutarSincronizacionFondo();
    }
};

// --- COMPARTIR Y ARCHIVOS ---
window.compartirUniversal = async (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return;

    try {
        const user = auth.currentUser;
        const idCorto = await obtenerOReutilizarIdCorto(lista, user);
        const docRef = doc(db, "listasCompartidas", idCorto);
        
        const enrichedCantos = enriquecerCantosConConfiguracion(lista.ids_cantos);
        const allowed = enrichedCantos.map(item => String(typeof item === 'object' && item !== null ? item.id : item));

        await setDoc(docRef, {
            n: lista.nombre,
            c: lista.categoria || "Otros",
            i: enrichedCantos,
            creado: serverTimestamp(),
            actualizado: serverTimestamp(),
            ownerUid: user?.uid || 'anonimo',
            ownerName: user?.displayName || user?.email || '',
            allowedSongIds: allowed
        }, { merge: true });

        if (normalizarTexto(lista.nombre) === 'test' && idCorto !== 'f8cuyo') {
            try {
                await setDoc(doc(db, "listasCompartidas", "f8cuyo"), {
                    n: lista.nombre,
                    c: lista.categoria || "Otros",
                    i: enrichedCantos,
                    actualizado: serverTimestamp(),
                    allowedSongIds: allowed
                }, { merge: true });
            } catch(e) {}
        }

        // Actualizar la lista en caché con los cantos enriquecidos y el link ID
        lista.ids_cantos = enrichedCantos;
        lista.isShared = true;
        lista.sharedLinkId = idCorto;
        lista.pendingSync = !!user;
        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));

        sincronizarEscuchasEnlaceCompartido();
        renderizarListasUI(listasLocalesCache);

        if (user) {
            ejecutarSincronizacionFondo();
        }

        const urlFinal = `${window.location.origin}${window.location.pathname}?v=${idCorto}`;
        const mensaje = `🎼 Lista de Cantos (${lista.categoria || 'Celebración'}): *${lista.nombre}*`;

        if (navigator.share) {
            await navigator.share({
                title: lista.nombre,
                text: mensaje,
                url: urlFinal,
            });
        } else {
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje + "\n" + urlFinal)}`;
            window.open(whatsappUrl, '_blank');
        }
    } catch (e) { 
        console.error("Error al compartir universal:", e); 
    }
};

window.copiarSoloLink = async (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return;

    try {
        const user = auth.currentUser;
        const idCorto = await obtenerOReutilizarIdCorto(lista, user);
        const docRef = doc(db, "listasCompartidas", idCorto);
        
        const enrichedCantos = enriquecerCantosConConfiguracion(lista.ids_cantos);
        const allowed = enrichedCantos.map(item => String(typeof item === 'object' && item !== null ? item.id : item));

        await setDoc(docRef, {
            n: lista.nombre,
            c: lista.categoria || "Otros",
            i: enrichedCantos,
            creado: serverTimestamp(),
            actualizado: serverTimestamp(),
            ownerUid: user?.uid || 'anonimo',
            ownerName: user?.displayName || user?.email || '',
            allowedSongIds: allowed
        }, { merge: true });

        if (normalizarTexto(lista.nombre) === 'test' && idCorto !== 'f8cuyo') {
            try {
                await setDoc(doc(db, "listasCompartidas", "f8cuyo"), {
                    n: lista.nombre,
                    c: lista.categoria || "Otros",
                    i: enrichedCantos,
                    actualizado: serverTimestamp(),
                    allowedSongIds: allowed
                }, { merge: true });
            } catch(e) {}
        }

        // Actualizar la lista en caché con los cantos enriquecidos y el link ID
        lista.ids_cantos = enrichedCantos;
        lista.isShared = true;
        lista.sharedLinkId = idCorto;
        lista.pendingSync = !!user;
        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));

        sincronizarEscuchasEnlaceCompartido();
        renderizarListasUI(listasLocalesCache);

        if (user) {
            ejecutarSincronizacionFondo();
        }

        const urlFinal = `${window.location.origin}${window.location.pathname}?v=${idCorto}`;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(urlFinal);
            alert(`✅ Enlace copiado al portapapeles:\n${urlFinal}`);
        } else {
            prompt("Copia este enlace compartido:", urlFinal);
        }
    } catch (e) { 
        console.error("Error al copiar link:", e); 
        alert("No se pudo copiar el enlace automáticamente.");
    }
};

window.exportarLista = (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(lista));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `Resucito_${lista.nombre.replace(/\s+/g, '_')}.resucito`);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

window.importarLista = (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const l = JSON.parse(e.target.result);
            l.id = "imp-" + Date.now();
            if (!l.categoria) l.categoria = "Otros";
            
            if (!l.nombre.includes("📂") && !l.nombre.includes("🔗")) {
                l.nombre = "📂 " + l.nombre;
            }

            const user = auth.currentUser;
            l.origin = 'local';
            if (user) {
                l.pendingSync = true;
            }

            let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
            cache.unshift(l);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            listasLocalesCache = cache;
            
            renderizarListasUI(cache);
        } catch (err) { alert("El archivo seleccionado no es válido."); }
    };
    reader.readAsText(archivo);
};

// --- UTILIDADES DE INTERFAZ Y EXPANSIÓN ---
window.expandirSeccionNuevaLista = () => {
    const content = document.getElementById('content-nueva-lista');
    const wrapper = document.getElementById('wrapper-nueva-lista');
    if (content) content.classList.remove('cfg-close');
    if (wrapper) wrapper.classList.remove('collapsed');
    const arrow = wrapper ? wrapper.querySelector('.arrow-icon') : null;
    if (arrow) arrow.textContent = 'expand_less';
};

window.contraerSeccionNuevaLista = () => {
    const content = document.getElementById('content-nueva-lista');
    const wrapper = document.getElementById('wrapper-nueva-lista');
    if (content) content.classList.add('cfg-close');
    if (wrapper) wrapper.classList.add('collapsed');
    const arrow = wrapper ? wrapper.querySelector('.arrow-icon') : null;
    if (arrow) arrow.textContent = 'expand_more';
};

window.cancelarEdicionLista = () => {
    const inputNombre = document.getElementById('nombreLista');
    if (inputNombre) inputNombre.value = '';
    
    window.editingId = null;
    listaOrdenada = [];
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos);
    
    window.contraerSeccionNuevaLista();
};

window.limpiarTodosLosCantos = () => {
    if (listaOrdenada.length === 0) return;
    listaOrdenada = [];
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos);
};

window.irANuevaLista = () => {
    window.expandirSeccionNuevaLista();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { document.getElementById('nombreLista')?.focus(); }, 300);
};

window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv) return;
    
    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));
    
    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        const lista = listasLocalesCache.find(l => l.id === idLista);
        if (!lista) return;

        detalleDiv.innerHTML = lista.ids_cantos.map((item, i) => {
            const id = (typeof item === 'object' && item !== null) ? item.id : item;
            const etiqueta = (typeof item === 'object' && item !== null) ? (item.tag || item.etiqueta || (i + 1)) : (i + 1);
            const c = todosLosCantos.find(can => String(can.id) === String(id));
            
            let metaBadges = '';
            if (typeof item === 'object' && item !== null) {
                if (item.tono) {
                    metaBadges += `<span class="badge-sub-tono">${item.tono}</span>`;
                }
                if (item.cejilla && item.cejilla !== '0') {
                    metaBadges += `<span class="badge-sub-capo">Cej. ${item.cejilla}</span>`;
                }
                if (item.nota) {
                    metaBadges += `<span title="Tiene notas personales" style="font-size: 0.85rem; margin-left: 4px;">📝</span>`;
                }
            }

            return `<div class="sub-item-canto" onclick="window.abrirVisorCantoDesdeLista('${id}', '${idLista}')">
                <span class="num">${etiqueta}</span>
                <span style="flex-grow: 1;">${c ? (c.title || c.titulo) : "Canto desconocido"}</span>
                ${metaBadges}
            </div>`;
        }).join('');
    }
};

window.cargarListaParaEditar = (docId, ids, nombre, categoria) => {
    window.editingId = docId;
    
    listaOrdenada = ids.map(item => {
        if (typeof item === 'object' && item !== null) {
            return { 
                id: String(item.id), 
                etiqueta: item.etiqueta || item.tag || "N",
                acorde: item.acorde,
                cejilla: item.cejilla,
                nota: item.nota,
                tono: item.tono
            };
        }
        return { id: String(item), etiqueta: "N" };
    });

    const inputNombre = document.getElementById('nombreLista');
    if (inputNombre) inputNombre.value = nombre;
    
    const selectTipo = document.getElementById('tipoCelebracion');
    if (selectTipo && categoria) selectTipo.value = categoria;
    
    window.expandirSeccionNuevaLista();
    
    actualizarInterfazSeleccion(); 
    renderizarLista(todosLosCantos); 
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.abrirVisorCantoDesdeLista = (idCanto, idLista) => {
    try {
        const lista = listasLocalesCache.find(l => l.id === idLista);
        if (lista) {
            const isShared = !!(lista.isShared || (lista.nombre && lista.nombre.includes('🔗')) || String(idLista).startsWith('imp-'));
            sessionStorage.setItem('resucito_active_playlist', JSON.stringify({
                id: lista.id,
                nombre: lista.nombre,
                categoria: lista.categoria || '',
                ids_cantos: lista.ids_cantos,
                isShared: isShared,
                sharedLinkId: lista.sharedLinkId || ''
            }));

            // Guardar autorización de acceso exclusiva para los cantos de esta lista
            const allowed = (lista.ids_cantos || []).map(x => String(typeof x === 'object' && x !== null ? x.id : x));
            sessionStorage.setItem('resucito_shared_allowed_songs', JSON.stringify(allowed));
        }
    } catch (e) {
        console.error("Error guardando lista activa en sessionStorage:", e);
    }
    window.location.href = `./index.html#canto=${idCanto}`;
};

window.abrirVisorCanto = (idCanto) => {
    window.location.href = `./index.html#canto=${idCanto}`;
};

window.toggleSection = (contentId, wrapperId) => {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        const estaCerradoActualmente = content.classList.contains('cfg-close') || wrapper.classList.contains('collapsed');
        if (estaCerradoActualmente) {
            content.classList.remove('cfg-close');
            wrapper.classList.remove('collapsed');
        } else {
            content.classList.add('cfg-close');
            wrapper.classList.add('collapsed');
        }
        
        const arrow = wrapper.querySelector('.arrow-icon');
        if (arrow) {
            arrow.textContent = estaCerradoActualmente ? 'expand_less' : 'expand_more';
        }
    }
};

// Auto importación de links compartidos
async function detectarLinkCompartido(usuarioActual) {
    const params = new URLSearchParams(window.location.search);
    const idCorto = params.get('v'); 

    if (!idCorto) return;
    if (importandoLink) return;
    importandoLink = true;
    bloqueoSnapshot = true;

    try {
        const docRef = doc(db, "listasCompartidas", idCorto);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            alert("El enlace compartido no existe o ha expirado.");
            return;
        }

        const datosCanto = docSnap.data();
        if (!datosCanto || !datosCanto.n || !datosCanto.i) {
            console.warn("Datos de lista compartida inválidos.");
            return;
        }

        const user = usuarioActual || auth.currentUser;
        let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
        let listadoBase = (Array.isArray(listasLocalesCache) && listasLocalesCache.length > 0) ? listasLocalesCache : cache;

        let nombreLimpio = datosCanto.n.replace(/🔗/g, '').replace(/📂/g, '').trim();
        const categoria = datosCanto.c || "Otros";
        const nombreBaseNorm = normalizarTexto(nombreLimpio);

        // 1. Buscar coincidencia de lista:
        //    A) Coincidencia directa por sharedLinkId === idCorto
        //    B) Coincidencia de lista previamente compartida/importada (isShared, icono 🔗 o ID imp-) con el mismo nombre normalizado
        //    C) Coincidencia de lista local con el mismo nombre normalizado
        let existeCompartida = listadoBase.find(l => l.sharedLinkId === idCorto);
        if (!existeCompartida) {
            existeCompartida = listadoBase.find(l => {
                const esListaImportada = l.isShared || (l.nombre && l.nombre.startsWith('🔗')) || String(l.id).startsWith('imp-');
                if (!esListaImportada) return false;
                const lNorm = normalizarTexto(l.nombre ? l.nombre.replace(/🔗/g, '').replace(/📂/g, '') : '');
                return lNorm === nombreBaseNorm;
            });
        }

        const existeLocal = !existeCompartida ? listadoBase.find(l => {
            const lNorm = normalizarTexto(l.nombre ? l.nombre.replace(/🔗/g, '').replace(/📂/g, '') : '');
            return lNorm === nombreBaseNorm;
        }) : null;

        let finalIdsCantos = enriquecerCantosConConfiguracion(datosCanto.i);
        let targetLista = null;

        // Si el usuario autenticado es el creador/dueño original de este enlace:
        const esCreadorDelEnlace = !!(user && (
            (datosCanto.ownerUid && datosCanto.ownerUid === user.uid) ||
            user.email === 'dbaezh78@gmail.com'
        ));
        const listaDelCreador = esCreadorDelEnlace ? listadoBase.find(l => {
            const lNorm = normalizarTexto(l.nombre ? l.nombre.replace(/🔗/g, '').replace(/📂/g, '') : '');
            return lNorm === nombreBaseNorm || l.id === idCorto || l.sharedLinkId === idCorto;
        }) : null;

        if (esCreadorDelEnlace && listaDelCreador && Array.isArray(listaDelCreador.ids_cantos)) {
            // El creador está abriendo su propio enlace: mantener actualizada la nube con los cantos locales del creador
            finalIdsCantos = enriquecerCantosConConfiguracion(listaDelCreador.ids_cantos);
            listaDelCreador.sharedLinkId = idCorto;
            listaDelCreador.isShared = true;
            try {
                await setDoc(docRef, {
                    n: listaDelCreador.nombre,
                    c: listaDelCreador.categoria || categoria || "Otros",
                    i: finalIdsCantos,
                    allowedSongIds: finalIdsCantos.map(item => String(typeof item === 'object' && item !== null ? item.id : item))
                }, { merge: true });
                console.log(`☁️ Enlace compartido ${idCorto} sincronizado por el dueño con sus ${finalIdsCantos.length} cantos.`);
            } catch (e) {
                console.warn("Error actualizando enlace compartido como creador:", e);
            }
        }

        if (existeCompartida) {
            // Ya teníamos esta lista compartida importada:
            // SE ACTUALIZA AUTOMÁTICAMENTE para reflejar los cantos y configuraciones del dueño del enlace!
            existeCompartida.nombre = `🔗 ${nombreLimpio}`;
            existeCompartida.categoria = categoria;
            existeCompartida.ids_cantos = finalIdsCantos;
            existeCompartida.ultimaActualizacion = new Date().toISOString();
            existeCompartida.origin = 'local';
            existeCompartida.isShared = true;
            existeCompartida.sharedLinkId = idCorto;
            existeCompartida.pendingSync = !!user;

            targetLista = existeCompartida;

            cache = cache.filter(l => l.id !== targetLista.id);
            cache.unshift(targetLista);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            listasLocalesCache = cache;

            if (user) {
                try {
                    await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", targetLista.id), {
                        id: targetLista.id,
                        nombre: targetLista.nombre,
                        categoria: targetLista.categoria || "Otros",
                        ids_cantos: finalIdsCantos,
                        ultimaActualizacion: targetLista.ultimaActualizacion,
                        origin: 'cloud',
                        isShared: true,
                        sharedLinkId: idCorto
                    });
                    targetLista.origin = 'cloud';
                    delete targetLista.pendingSync;
                    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                } catch (e) {
                    console.warn("Error sincronizando lista compartida actualizada en Firestore:", e);
                }
            }

            mostrarNotificacionVerde(`Lista "${nombreLimpio}" actualizada (${finalIdsCantos.length} cantos)`);
        } else if (existeLocal) {
            // Existe una lista personal local propia con el mismo nombre
            const decision = await solicitarDecisionListaExistente(existeLocal.nombre || nombreLimpio);

            if (decision.accion === 'cancelar') {
                targetLista = existeLocal;
            } else if (decision.accion === 'actualizar') {
                existeLocal.ids_cantos = finalIdsCantos;
                existeLocal.categoria = categoria;
                existeLocal.ultimaActualizacion = new Date().toISOString();
                existeLocal.origin = 'local';
                existeLocal.isShared = true;
                existeLocal.sharedLinkId = idCorto;
                existeLocal.pendingSync = !!user;
                targetLista = existeLocal;

                cache = cache.filter(l => l.id !== targetLista.id);
                cache.unshift(targetLista);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                listasLocalesCache = cache;

                if (user) {
                    try {
                        await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", targetLista.id), {
                            id: targetLista.id,
                            nombre: targetLista.nombre,
                            categoria: targetLista.categoria || "Otros",
                            ids_cantos: finalIdsCantos,
                            ultimaActualizacion: targetLista.ultimaActualizacion,
                            origin: 'cloud',
                            isShared: true,
                            sharedLinkId: idCorto
                        });
                        targetLista.origin = 'cloud';
                        delete targetLista.pendingSync;
                        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                    } catch (e) {
                        console.warn("Error sincronizando lista actualizada:", e);
                    }
                }
                mostrarNotificacionVerde(`Lista actualizada (${finalIdsCantos.length} cantos)`);
            } else if (decision.accion === 'duplicar') {
                const nuevoId = `imp-${Date.now()}`;
                targetLista = {
                    id: nuevoId,
                    nombre: `🔗 ${nombreLimpio} (Copia)`,
                    categoria: categoria,
                    ids_cantos: finalIdsCantos,
                    ultimaActualizacion: new Date().toISOString(),
                    origin: 'local',
                    pendingSync: !!user,
                    isShared: true,
                    sharedLinkId: idCorto
                };
                cache.unshift(targetLista);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                listasLocalesCache = cache;
                if (user) {
                    ejecutarSincronizacionFondo();
                }
                mostrarNotificacionVerde("Lista importada como copia");
            } else if (decision.accion === 'renombrar' && decision.nuevoNombre) {
                const nuevoId = `imp-${Date.now()}`;
                const nombreConIcono = decision.nuevoNombre.startsWith('🔗') ? decision.nuevoNombre : `🔗 ${decision.nuevoNombre}`;
                targetLista = {
                    id: nuevoId,
                    nombre: nombreConIcono,
                    categoria: categoria,
                    ids_cantos: finalIdsCantos,
                    ultimaActualizacion: new Date().toISOString(),
                    origin: 'local',
                    pendingSync: !!user,
                    isShared: true,
                    sharedLinkId: idCorto
                };
                cache.unshift(targetLista);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                listasLocalesCache = cache;
                if (user) {
                    ejecutarSincronizacionFondo();
                }
                mostrarNotificacionVerde("Lista importada");
            } else if (decision.accion === 'unir') {
                const cantosExistentes = Array.isArray(existeLocal.ids_cantos) ? existeLocal.ids_cantos : [];
                const idsProcesados = new Set(cantosExistentes.map(c => String(typeof c === 'object' ? c.id : c)));
                const cantosNuevos = [];
                finalIdsCantos.forEach(item => {
                    const itemStrId = String(typeof item === 'object' ? item.id : item);
                    if (!idsProcesados.has(itemStrId)) {
                        cantosNuevos.push(item);
                    }
                });
                existeLocal.ids_cantos = enriquecerCantosConConfiguracion([...cantosExistentes, ...cantosNuevos]);
                existeLocal.ultimaActualizacion = new Date().toISOString();
                existeLocal.origin = 'local';
                existeLocal.pendingSync = !!user;
                targetLista = existeLocal;

                cache = cache.filter(l => l.id !== targetLista.id);
                cache.unshift(targetLista);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
                listasLocalesCache = cache;
                if (user) {
                    ejecutarSincronizacionFondo();
                }
                mostrarNotificacionVerde("Cantos combinados");
            }
        } else {
            // Importación limpia de nueva lista compartida
            const nuevoId = `imp-${Date.now()}`;
            targetLista = {
                id: nuevoId,
                nombre: `🔗 ${nombreLimpio}`,
                categoria: categoria,
                ids_cantos: finalIdsCantos,
                ultimaActualizacion: new Date().toISOString(),
                origin: 'local',
                pendingSync: !!user,
                isShared: true,
                sharedLinkId: idCorto
            };
            cache = cache.filter(l => l.id !== nuevoId);
            cache.unshift(targetLista);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            listasLocalesCache = cache;

            if (user) {
                ejecutarSincronizacionFondo();
            }
            mostrarNotificacionVerde("Lista importada correctamente");
        }

        if (targetLista) {
            // Guardar permisos en sessionStorage para todos los cantos de esta lista compartida
            const allowedSongIds = (datosCanto.allowedSongIds || targetLista.ids_cantos.map(c => String(typeof c === 'object' && c !== null ? c.id : c))).map(String);
            sessionStorage.setItem('resucito_shared_link_id', idCorto);
            sessionStorage.setItem('resucito_shared_allowed_songs', JSON.stringify(allowedSongIds));
            sessionStorage.setItem('resucito_active_playlist', JSON.stringify({
                id: targetLista.id,
                nombre: targetLista.nombre,
                categoria: targetLista.categoria || '',
                ids_cantos: targetLista.ids_cantos,
                isShared: true,
                sharedLinkId: idCorto
            }));

            // Actualizar URL a formato descriptivo con categoría, listaId y ancla
            const catSlug = (targetLista.categoria || "Otros").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "-");
            const nuevaUrl = `${window.location.pathname}?cat=${encodeURIComponent(targetLista.categoria || "Otros")}&listaId=${encodeURIComponent(targetLista.id)}#cat-grupo-${catSlug}`;
            window.history.replaceState({}, document.title, nuevaUrl);

            categoriaForzadaAbierta = targetLista.categoria || "Otros";
            listaForzadaAbierta = targetLista.id;

            renderizarListasUI(listasLocalesCache);
            sincronizarEscuchasEnlaceCompartido();
        }
    } catch (e) {
        console.error("Error al importar link compartido:", e);
    } finally {
        bloqueoSnapshot = false;
        importandoLink = false;
    }
}

// Selección de Momentos
window.setMomento = (elemento, momento) => {
    momentoSeleccionado = momento;
    if (elemento) {
        const padre = elemento.parentElement;
        padre.querySelectorAll('.opcion-momento').forEach(el => el.classList.remove('active'));
        elemento.classList.add('active');
    }
    renderizarLista(todosLosCantos);
};

// Inicialización de DOM y Eventos
document.addEventListener('DOMContentLoaded', () => {
    poblarSelectYFiltrosCelebracion();
    if (todosLosCantos.length > 0) {
        renderizarLista(todosLosCantos);
    }
    
    // Escuchadores de teclado para el buscador en preparar
    const input = document.getElementById('inputBuscadorCantos');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                const firstItem = document.querySelector('#contenedor-seleccion .item-canto');
                if (firstItem) {
                    e.preventDefault();
                    firstItem.focus();
                }
            } else if (e.key === 'Enter') {
                const firstItem = document.querySelector('#contenedor-seleccion .item-canto');
                if (firstItem) {
                    e.preventDefault();
                    firstItem.click();
                }
            }
        });
    }
});
