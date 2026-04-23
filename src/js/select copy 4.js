import { auth, db, loginConGoogle } from './firebase-auth.js';
import { 
    doc, setDoc, serverTimestamp, deleteDoc, 
    collection, query, onSnapshot, orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- VARIABLES DE ESTADO ---
let listaOrdenada = [];
let todosLosCantos = [];
let snapshotActual = null;
let listasLocalesCache = []; 
let bloqueoSnapshot = false;

// Usamos los datos de songs-data.js filtrando lo que es solo para el index
todosLosCantos = typeof songs !== 'undefined' 
    ? songs.filter(canto => canto.visible !== "index") 
    : [];

// Ejecutar el renderizado inicial
document.addEventListener('DOMContentLoaded', () => {
    if (todosLosCantos.length > 0) {
        renderizarLista(todosLosCantos);
    }
});


// --- UTILIDAD: NORMALIZADOR DE TEXTO AVANZADO ---
const normalizarTexto = (texto) => {
    if (!texto) return "";
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quita acentos
        .replace(/ñ/g, "n")              // ñ -> n
        .replace(/[^a-z0-9\s]/g, "")     // QUITA comas, puntos, guiones, etc.
        .trim();
};

// --- 1. MOTOR DE PERSISTENCIA LOCAL ---
const cargarDesdeEquipo = () => {
    try {
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            listasLocalesCache = JSON.parse(datosLocales);
            renderizarListasUI(listasLocalesCache);
            snapshotActual = { docs: listasLocalesCache.map(l => ({ id: l.id, data: () => l })) };
        }
    } catch (e) { console.error("Error en caché local:", e); }
};

cargarDesdeEquipo();



// --- 3. SINCRONIZACIÓN ONLINE Y GESTIÓN DE PERFIL ---
onAuthStateChanged(auth, (user) => {
    const btnLogin = document.getElementById('btn-login-google');
    const btnLogout = document.getElementById('btn-logout-perfil');
    const userPhoto = document.getElementById('user-photo');

    // ✅ LANZAR SIEMPRE AL INICIO (Para invitados y usuarios logueados)
    detectarLinkCompartido();

    if (user) {
        console.log("👤 Sesión activa:", user.displayName);
        
        // UI de usuario
        if (btnLogin) btnLogin.style.display = 'none';
        if (btnLogout) btnLogout.style.display = 'block';
        if (userPhoto) {
            userPhoto.src = user.photoURL || '';
            userPhoto.style.display = 'block';
            userPhoto.title = user.displayName;
        }

        // Escucha de listas (Firestore)
        const q = query(collection(db, "usuarios", user.uid, "listasPersonalizadas"), orderBy("ultimaActualizacion", "desc"));
        onSnapshot(q, (snapshot) => {
            if (bloqueoSnapshot) return; 
            if (snapshot.metadata.fromCache && listasLocalesCache.length > 0) return;
            
            snapshotActual = snapshot;
            listasLocalesCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderizarListasUI(listasLocalesCache);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));

            // ✅ AVISO A SETTINGS: Datos de la nube listos
            window._uiYaSincronizada = true; 
            console.log("✅ Listas sincronizadas");
        });

        // ❌ BORRADO: Ya no llamamos detectarLinkCompartido() aquí dentro

    } else {
        // No hay sesión
        if (btnLogin) btnLogin.style.display = 'block';
        if (btnLogout) btnLogout.style.display = 'none';
        if (userPhoto) userPhoto.style.display = 'none';
        
        // Si no hay sesión, mostramos lo que haya en LocalStorage (importaciones de invitados)
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            listasLocalesCache = JSON.parse(datosLocales);
            renderizarListasUI(listasLocalesCache);
        } else {
            renderizarListasUI([]); 
        }

        // ✅ AVISO A SETTINGS: No hay nube, pero ya cargamos lo local
        window._uiYaSincronizada = true;
        console.log("ℹ️ Modo invitado: Cargado local");
    }
});

// --- 4. FUNCIONES DE RENDERIZADO ---
// --- 4. FUNCIONES DE RENDERIZADO (BASE SÓLIDA) ---

function crearTarjetaLista(idLista, data, contenedor) {
    if (!data) return; // Protección contra datos vacíos

    const ids = data.ids_cantos || [];
    const nombre = data.nombre || "Sin nombre";
    const nombreEscapado = nombre.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    
    // Determinamos el icono: Si data.origin es 'cloud' es nube, si no, casa
    const esNube = (data.origin === 'cloud');
    const icono = esNube ? '☁️' : '🏠';
    
    const div = document.createElement('div');
    div.className = 'tarjeta-lista-wrapper';
    div.innerHTML = `
        <div class="tarjeta-lista" onclick="window.toggleDetalleLista('${idLista}')">
            <div class="info-lista">
                <strong>${nombre}</strong>
                <span style="margin-left: 8px; font-size: 0.9em;" title="${esNube ? 'Sincronizada' : 'Local'}">${icono}</span>
                <span>${ids.length} cantos</span>
            </div>
            <div class="acciones-lista" onclick="event.stopPropagation()">
                <button class="btn-icono share-universal" onclick="window.compartirUniversal('${idLista}')" title="Compartir"><span class="material-symbols-outlined">share</span></button>
                <button class="btn-icono link" onclick="window.copiarSoloLink('${idLista}')" title="Copiar enlace"><span class="material-symbols-outlined">link</span></button>
                <button class="btn-icono export" onclick="window.exportarLista('${idLista}')" title="Descargar archivo"><span class="material-symbols-outlined">download</span></button>
                <button class="btn-icono edit" onclick="window.cargarListaParaEditar('${idLista}', ${JSON.stringify(ids).replace(/"/g, '&quot;')}, '${nombreEscapado}')"><span class="material-symbols-outlined">edit</span></button>
                <button class="btn-icono delete" onclick="window.eliminarLista('${idLista}', '${nombreEscapado}')"><span class="material-symbols-outlined">delete</span></button>
            </div>
        </div>
        <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
    `;
    contenedor.appendChild(div);
}

function renderizarListasUI(listas) {
    const contenedor = document.getElementById('lista-colecciones');
    if (!contenedor) return;
    
    // Limpiamos antes de empezar
    contenedor.innerHTML = '';

    if (!listas || listas.length === 0) {
        contenedor.innerHTML = `
            <div class="status-msg-vacia">
                <p>No hay listas creadas.</p>
                <a href="javascript:void(0)" onclick="window.irANuevaLista()" class="link-crear-lista">¿Deseas crearla?</a>
            </div>`;
        return;
    }

    // Dibujamos las listas
    listas.forEach(l => crearTarjetaLista(l.id, l, contenedor));
}



function renderizarLista(lista) {
    const contenedor = document.getElementById('contenedor-seleccion');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    lista.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'item-canto';
        // CAMBIO AQUÍ: Usamos .title (de songs-data.js)
        const nombreAMostrar = canto.title || "Sin título"; 
        
        const isChecked = listaOrdenada.includes(String(canto.id));
        div.onclick = () => window.toggleCanto(canto.id);
        div.innerHTML = `
            <span class="titulo-canto-seleccion">${nombreAMostrar}</span>
            <label class="switch">
                <input type="checkbox" data-id="${canto.id}" ${isChecked ? 'checked' : ''} readonly>
                <span class="slider"></span>
            </label>`;
        contenedor.appendChild(div);
    });
}

// --- 5. BUSCADORES Y LIMPIEZA ---

// A. Filtro de Selección de Cantos
// --- ACTUALIZACIÓN: BUSCADOR ELÁSTICO PARA SELECCIÓN (David Edition) ---
window.filtrarSeleccion = () => {
    const input = document.getElementById('inputBuscadorCantos');
    const btnX = document.getElementById('btnLimpiarCantos');
    if (!input) return;

    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';

    // 1. Normalizamos la búsqueda (Lógica David)
    const busquedaRaw = input.value.toLowerCase();
    const busquedaLimpia = normalizarTexto(busquedaRaw);
    const busquedaPegada = busquedaLimpia.replace(/\s/g, "");

    // 2. Filtramos sobre 'todosLosCantos' (que ahora tiene el contenido)
    const filtrados = todosLosCantos.filter(canto => {
        // Normalizamos los campos del objeto de songs-data.js
        const t = normalizarTexto(canto.title || "");       // Nota: en songs-data.js es 'title'
        const s = normalizarTexto(canto.subtitle || "");    // También buscamos en subtítulos
        const c = normalizarTexto(canto.content || "");     // ¡Aquí está la letra!

        const poolConEspacios = `${t} ${s} ${c}`;
        const poolSinEspacios = poolConEspacios.replace(/\s/g, "");

        // Regla: Coincidencia por palabras sueltas
        const palabras = busquedaLimpia.split(/\s+/).filter(p => p.length > 0);
        const coincidePalabras = palabras.length > 0 && palabras.every(p => poolConEspacios.includes(p));

        // Regla: Coincidencia elástica (pegar "quienesesta que sube")
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

// B. Filtro de Mis Listados
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


// B. Filtro de Mis Listados
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

// B. Filtro de Mis Listados Guardados
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

// Limpiar buscador de mis listas
window.limpiarBuscadorListas = () => {
    const input = document.getElementById('inputBuscadorListas');
    if (input) {
        input.value = '';
        window.filtrarMisListas(); // Reset lista y oculta X
        input.focus();
    }
};

// --- 6. LÓGICA DE NEGOCIO ---
window.toggleCanto = (id) => {
    const stringId = String(id);
    const index = listaOrdenada.indexOf(stringId);
    index !== -1 ? listaOrdenada.splice(index, 1) : listaOrdenada.push(stringId);
    actualizarInterfazSeleccion();
};

function actualizarInterfazSeleccion() {
    const contador = document.getElementById('contador-seleccion');
    if (contador) contador.innerText = listaOrdenada.length;
    const cola = document.getElementById('cola-seleccion');
    if (cola) {
        cola.innerHTML = '';
        listaOrdenada.forEach((id, i) => {
            const canto = todosLosCantos.find(c => String(c.id) === id);
            if (canto) {
                const tag = document.createElement('div');
                tag.className = 'canto-tag';
                tag.innerHTML = `<span>${i + 1}</span> ${canto.title}`;
                tag.onclick = (e) => { e.stopPropagation(); window.toggleCanto(id); };
                cola.appendChild(tag);
            }
        });
    }
    document.querySelectorAll('.item-canto input[type="checkbox"]').forEach(input => {
        const idInput = input.getAttribute('data-id');
        input.checked = listaOrdenada.includes(String(idInput));
    });
}

window.guardarListaFirebase = async () => {
    const nombre = document.getElementById('nombreLista').value.trim();
    const user = auth.currentUser;
    if (!nombre || listaOrdenada.length === 0) return alert("Faltan datos.");

    const listaId = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    
    // --- LÓGICA DE VALIDACIÓN MEJORADA ---
    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
    const existe = cache.find(l => l.id === listaId);

    // Solo validamos "Ya existe" si NO estamos en modo edición (o si cambiamos el nombre a uno de otra lista)
    if (existe && window.editingId !== listaId) {
        alert("⚠️ Ya existe una lista con este nombre. Cambia el nombre para crear una nueva.");
        return;
    }

    const nuevaLista = { 
        id: listaId, 
        nombre, 
        ids_cantos: [...listaOrdenada], 
        ultimaActualizacion: new Date().toISOString(),
        origin: 'local' 
    };

    // Si estábamos editando y el ID cambió (cambiamos nombre), borramos el viejo del caché
    if (window.editingId && window.editingId !== listaId) {
        cache = cache.filter(l => l.id !== window.editingId);
    }

// 1. Guardar en local
    cache.unshift(nuevaLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
    
    window.editingId = null; 
    renderizarListasUI(cache);

    // 3. Guardar en nube
    if (user) {
        try {
            await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId), { 
                ...nuevaLista, 
                origin: 'cloud', 
                ultimaActualizacion: serverTimestamp() 
            });
            console.log("☁️ Sincronización a la nube exitosa");
        } catch (e) { 
            console.warn("Offline, guardado solo local."); 
        }
    }

    // Feedback suave
    console.log("Lista guardada exitosamente.");
    const btnGuardar = document.querySelector('.btn-accion');
    if(btnGuardar) {
        const textoOriginal = btnGuardar.innerHTML;
        btnGuardar.innerHTML = "✅ Guardado";
        setTimeout(() => btnGuardar.innerHTML = textoOriginal, 2000);
    }
};



window.eliminarLista = async (idLista, nombreLista) => {
    if (confirm(`¿Eliminar "${nombreLista}"?`)) {
        let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
        cache = cache.filter(l => l.id !== idLista);
        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
        if (auth.currentUser) await deleteDoc(doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", idLista));
        location.reload();
    }
};

// --- 7. SISTEMA DE COMPARTIR ---

// FUNCIÓN A: Compartir Universal (Móvil / WhatsApp)
window.compartirUniversal = async (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return;

    try {
        const idCorto = Math.random().toString(36).substring(2, 8);
        const docRef = doc(db, "listasCompartidas", idCorto);
        
        await setDoc(docRef, {
            n: lista.nombre,
            i: lista.ids_cantos,
            creado: serverTimestamp()
        });

        const urlFinal = `${window.location.origin}${window.location.pathname}?v=${idCorto}`;
        const mensaje = `🎼 Lista: *${lista.nombre}*`;

        if (navigator.share) {
            // Abre el menú nativo en móviles (WhatsApp, Telegram, etc.)
            await navigator.share({
                title: lista.nombre,
                text: mensaje,
                url: urlFinal,
            });
        } else {
            // Respaldo para PC: Abre WhatsApp Web
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje + "\n" + urlFinal)}`;
            window.open(whatsappUrl, '_blank');
        }
    } catch (e) { 
        console.error("Error al compartir universal:", e); 
    }
};

// =======================================
// ---  COPIAR ENLACE DE COMPARTIR  ---
// =======================================
window.copiarSoloLink = async (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) {
        console.error("❌ Lista no encontrada para copiar");
        return;
    }

    try {
        // 1. Generar ID único corto para el enlace
        const idCorto = Math.random().toString(36).substring(2, 8);
        const docRef = doc(db, "listasCompartidas", idCorto);
        
        // 2. Guardar en Firebase para que otros puedan verlo
        await setDoc(docRef, {
            n: lista.nombre,
            i: lista.ids_cantos,
            creado: serverTimestamp()
        });

        // 3. Construir la URL final
        const urlFinal = `${window.location.origin}${window.location.pathname}?v=${idCorto}`;
        
        // 4. Intentar copiar al portapapeles
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(urlFinal);
            alert("✅ Enlace copiado al portapapeles. ¡Ya puedes pegarlo!");
        } else {
            // Respaldo por si el navegador bloquea clipboard API
            throw new Error("Clipboard API no disponible");
        }
        
    } catch (e) { 
        console.error("❌ Error al generar/copiar link:", e);
        alert("No se pudo copiar automáticamente. Intenta compartir por WhatsApp.");
    }
};

// =======================================
// ---  COPIAR ENLACE DE COMPARTIR  ---
// =======================================

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
    reader.onload = async (e) => {
        try {
            const l = JSON.parse(e.target.result);
            l.id = "imp-" + Date.now();
            
            // Verificamos si ya tiene el icono para no duplicarlo
            if (!l.nombre.includes("📂") && !l.nombre.includes("🔗")) {
                l.nombre = "📂 " + l.nombre;
            }

            let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
            cache.unshift(l);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            
            if (auth.currentUser) {
                await setDoc(doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", l.id), { 
                    ...l, 
                    ultimaActualizacion: serverTimestamp() 
                });
            }
            location.reload();
        } catch (err) { alert("Archivo no válido."); }
    };
    reader.readAsText(archivo);
};

// --- 8. UTILIDADES ---
window.irANuevaLista = () => {
    const contentNueva = document.getElementById('content-nueva-lista');
    if (contentNueva && contentNueva.classList.contains('cfg-close')) {
        window.toggleSection('content-nueva-lista', 'wrapper-nueva-lista');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => { document.getElementById('nombreLista')?.focus(); }, 500);
};

window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv || !snapshotActual) return;
    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));
    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        const source = snapshotActual.docs || snapshotActual;
        const docSnap = source.find(d => d.id === idLista);
        const data = docSnap.data ? docSnap.data() : docSnap;
        detalleDiv.innerHTML = data.ids_cantos.map((id, i) => {
            const c = todosLosCantos.find(can => String(can.id) === String(id));
            return `<div class="sub-item-canto" onclick="window.abrirVisorCanto('${id}')">
                <span class="num">${i + 1}</span><span>${c ? c.title : id}</span>
            </div>`;
        }).join('');
    }
};

window.cargarListaParaEditar = (docId, ids, nombre) => {
    window.editingId = docId;
    listaOrdenada = [...ids];
    document.getElementById('nombreLista').value = nombre;
    if (document.getElementById('content-nueva-lista').classList.contains('cfg-close')) {
        window.toggleSection('content-nueva-lista', 'wrapper-nueva-lista');
    }
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.abrirVisorCanto = (idCanto) => {
    const modal = document.getElementById('modalVisorCanto');
    const contenido = document.getElementById('contenidoCantoVisor');
    if (!modal || !contenido) return;
    modal.classList.remove('cfg-close');
    document.body.style.overflow = 'hidden';
    contenido.innerHTML = `<iframe src="./index.html?canto=${idCanto}" style="width:100%; height:100%; border:none; background: white;"></iframe>`;
};

window.confirmarCerrarVisor = () => {
    const modal = document.getElementById('modalVisorCanto');
    if (modal) modal.classList.add('cfg-close');
    document.getElementById('contenidoCantoVisor').innerHTML = '';
    document.body.style.overflow = 'auto';
};

window.toggleSection = (contentId, wrapperId) => {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        content.classList.toggle('cfg-close');
        wrapper.classList.toggle('collapsed');
    }
};







// --- DETECCIÓN DE COMPARTIDO CON REFRESH FORZOSO Y SOPORTE DE ACENTOS ---
import { getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const detectarLinkCompartido = async () => {
    const params = new URLSearchParams(window.location.search);
    const idCorto = params.get('v'); 
    const shareLargo = params.get('sh') || params.get('share'); 

    if (idCorto || shareLargo) {
        bloqueoSnapshot = true;
        try {
            let datosCanto;

            if (idCorto) {
                // --- MODO CORTO: BUSCAR EN FIREBASE ---
                const docRef = doc(db, "listasCompartidas", idCorto);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    datosCanto = docSnap.data();
                } else {
                    alert("El enlace ha expirado o no existe.");
                    bloqueoSnapshot = false;
                    return;
                }
            } else {
                // --- MODO LARGO: DECODIFICAR URL (Soporte legado) ---
                const binString = atob(shareLargo);
                const uint8Array = Uint8Array.from(binString, (m) => m.charCodeAt(0));
                const decoded = new TextDecoder().decode(uint8Array);
                const data = JSON.parse(decoded);
                datosCanto = Array.isArray(data) ? { n: data[0], i: data[1] } : data;
            }

            if (datosCanto && datosCanto.n && datosCanto.i) {
                const idFinal = "imp-" + Date.now();
                let nombreLimpio = datosCanto.n.replace(/🔗/g, '').replace(/📂/g, '').trim();
                const nl = { 
                    id: idFinal, 
                    nombre: "🔗 " + nombreLimpio, 
                    ids_cantos: datosCanto.i, 
                    ultimaActualizacion: new Date().toISOString() 
                };

                // 1. Guardar local (Para todos, invitados y logueados)
                let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
                cache.unshift(nl);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));

                // 2. Guardar en la nube (Solo si está logueado)
                if (auth.currentUser) {
                    const userRef = doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", idFinal);
                    await setDoc(userRef, { ...nl, ultimaActualizacion: serverTimestamp() });
                }

                // 3. Limpiar URL y recargar
                window.location.href = window.location.origin + window.location.pathname;
            }
        } catch (e) {
            console.error("❌ Error en importación:", e);
            bloqueoSnapshot = false;
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
};


// Activar Login al presionar el icono de perfil
document.getElementById('btn-login-google')?.addEventListener('click', async () => {
    try {
        await loginConGoogle();
        // No hace falta recargar, onAuthStateChanged detectará el cambio y mostrará la foto
    } catch (err) {
        console.error("Fallo en el login:", err);
    }
});
