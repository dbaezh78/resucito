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

// --- 2. CARGA DE BASE DE DATOS (JSON) ---
fetch('data/indicecantos.json')
    .then(res => res.json())
    .then(data => { 
        todosLosCantos = data; 
        renderizarLista(todosLosCantos); 
    })
    .catch(err => console.error("Error al cargar JSON:", err));

// --- 3. SINCRONIZACIÓN ONLINE Y GESTIÓN DE PERFIL ---
onAuthStateChanged(auth, (user) => {
    // Referencias a los nuevos elementos de la UI
    const btnLogin = document.getElementById('btn-login-google');
    const btnLogout = document.getElementById('btn-logout-perfil');
    const userPhoto = document.getElementById('user-photo');

    if (user) {
        // 1. GESTIÓN VISUAL DEL PERFIL (Foto y Botones)
        if (btnLogin) btnLogin.style.display = 'none';
        if (btnLogout) btnLogout.style.display = 'block';
        if (userPhoto) {
            userPhoto.src = user.photoURL || ''; 
            userPhoto.style.display = 'block';
            userPhoto.title = user.displayName; 
        }

        // 2. LÓGICA DE LISTAS (Mantenemos tu código mortal)
        const q = query(collection(db, "usuarios", user.uid, "listasPersonalizadas"), orderBy("ultimaActualizacion", "desc"));
        
        onSnapshot(q, (snapshot) => {
            // El escudo sigue protegiendo la UI durante importaciones por URL
            if (bloqueoSnapshot) return; 

            if (snapshot.metadata.fromCache && listasLocalesCache.length > 0) return;
            
            snapshotActual = snapshot;
            listasLocalesCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderizarListasUI(listasLocalesCache);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));
        });

        // 🔥 Se ejecuta SOLO cuando Firebase ya sabe quién eres (importante para la URL)
        detectarLinkCompartido();

    } else {
        // 3. ESTADO SIN USUARIO
        if (btnLogin) btnLogin.style.display = 'block';
        if (btnLogout) btnLogout.style.display = 'none';
        if (userPhoto) userPhoto.style.display = 'none';
        
        // Limpiamos la UI si el usuario sale
        renderizarListasUI([]); 
    }
});


// --- 4. FUNCIONES DE RENDERIZADO ---
function crearTarjetaLista(idLista, data, contenedor) {
    const ids = data.ids_cantos || [];
    const nombreEscapado = data.nombre.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const div = document.createElement('div');
    div.className = 'tarjeta-lista-wrapper';
    div.innerHTML = `
        <div class="tarjeta-lista" onclick="window.toggleDetalleLista('${idLista}')">
            <div class="info-lista"><strong>${data.nombre}</strong><span>${ids.length} cantos</span></div>
            <div class="acciones-lista" onclick="event.stopPropagation()">
                <button class="btn-icono share" onclick="window.compartirListaLink('${idLista}')" title="Copiar enlace">
                    <span class="material-symbols-outlined">link</span>
                </button>
                <button class="btn-icono export" onclick="window.exportarLista('${idLista}')" title="Descargar archivo">
                    <span class="material-symbols-outlined">download</span>
                </button>
                <button class="btn-icono edit" onclick="window.cargarListaParaEditar('${idLista}', ${JSON.stringify(ids).replace(/"/g, '&quot;')}, '${nombreEscapado}')">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <button class="btn-icono delete" onclick="window.eliminarLista('${idLista}', '${nombreEscapado}')">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
        <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
    `;
    contenedor.appendChild(div);
}

function renderizarListasUI(listas) {
    const contenedor = document.getElementById('lista-colecciones');
    if (!contenedor) return;
    if (listas.length === 0) {
        contenedor.innerHTML = `
            <div class="status-msg-vacia">
                <p>No hay listas creadas.</p>
                <a href="javascript:void(0)" onclick="window.irANuevaLista()" class="link-crear-lista">¿Deseas crearla?</a>
            </div>`;
    } else {
        contenedor.innerHTML = '';
        listas.forEach(l => crearTarjetaLista(l.id, l, contenedor));
    }
}

function renderizarLista(lista) {
    const contenedor = document.getElementById('contenedor-seleccion');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    lista.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'item-canto';
        const isChecked = listaOrdenada.includes(String(canto.id));
        div.onclick = () => window.toggleCanto(canto.id);
        div.innerHTML = `
            <span class="titulo-canto-seleccion">${canto.titulo}</span>
            <label class="switch">
                <input type="checkbox" data-id="${canto.id}" ${isChecked ? 'checked' : ''} readonly>
                <span class="slider"></span>
            </label>`;
        contenedor.appendChild(div);
    });
}

// --- 5. BUSCADORES Y LIMPIEZA ---

// A. Filtro de Selección de Cantos (Ultra flexible)
window.filtrarSeleccion = () => {
    const input = document.getElementById('inputBuscadorCantos');
    const btnX = document.getElementById('btnLimpiarCantos');
    if (!input) return;

    // Control visual de la X
    if (btnX) btnX.style.display = input.value.length > 0 ? 'block' : 'none';

    // Lógica de búsqueda por palabras sueltas
    const palabrasBusqueda = normalizarTexto(input.value).split(/\s+/).filter(p => p.length > 0);
    
    const filtrados = todosLosCantos.filter(canto => {
        const tituloNormalizado = normalizarTexto(canto.titulo);
        // Debe cumplir que TODAS las palabras escritas estén en el título
        return palabrasBusqueda.every(palabra => tituloNormalizado.includes(palabra));
    });
    
    renderizarLista(filtrados);
};

// Limpiar buscador de cantos
window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscadorCantos');
    if (input) {
        input.value = '';
        window.filtrarSeleccion(); // Reset lista y oculta X
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
                tag.innerHTML = `<span>${i + 1}</span> ${canto.titulo}`;
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
    const nuevaLista = { id: listaId, nombre, ids_cantos: [...listaOrdenada], ultimaActualizacion: new Date().toISOString() };

    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
    const idx = cache.findIndex(l => l.id === listaId);
    idx !== -1 ? cache[idx] = nuevaLista : cache.unshift(nuevaLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));

    if (user) {
        try { 
            await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId), { ...nuevaLista, ultimaActualizacion: serverTimestamp() }); 
        } catch (e) { console.warn("Offline."); }
    }
    location.reload(); 
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
window.compartirListaLink = (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return;
    try {
        const datos = JSON.stringify({ n: lista.nombre, i: lista.ids_cantos });
        
        // --- CODIFICACIÓN SEGURA PARA ACENTOS ---
        // Convertimos el string a un array de bytes UTF-8 antes de pasarlo a Base64
        const uint8Array = new TextEncoder().encode(datos);
        const binString = Array.from(uint8Array, (byte) => String.fromCharCode(byte)).join("");
        const d64 = btoa(binString);
        
        const url = `${window.location.origin}${window.location.pathname}?share=${d64}`;
        
        navigator.clipboard.writeText(url).then(() => {
            alert("¡Enlace con acentos corregidos copiado!");
        });
    } catch (e) {
        console.error(e);
        alert("Error al generar el enlace.");
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
    reader.onload = async (e) => {
        try {
            const l = JSON.parse(e.target.result);
            l.id = "imp-" + Date.now();
            l.nombre = "📂 " + l.nombre;
            let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
            cache.unshift(l);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
            if (auth.currentUser) await setDoc(doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", l.id), { ...l, ultimaActualizacion: serverTimestamp() });
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
                <span class="num">${i + 1}</span><span>${c ? c.titulo : id}</span>
            </div>`;
        }).join('');
    }
};

window.cargarListaParaEditar = (docId, ids, nombre) => {
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
const detectarLinkCompartido = async () => {
    const params = new URLSearchParams(window.location.search);
    const share = params.get('share');
    
    if (share) {
        bloqueoSnapshot = true; 
        try {
            // --- NUEVA DECODIFICACIÓN SEGURA PARA ACENTOS (UTF-8) ---
            const binString = atob(share);
            const uint8Array = Uint8Array.from(binString, (m) => m.charCodeAt(0));
            const jsonString = new TextDecoder().decode(uint8Array);
            
            const datosCanto = JSON.parse(jsonString);
            
            if (datosCanto.n && datosCanto.i) {
                // Mantenemos tu lógica de IDs y Nombres
                const idFinal = "imp-" + Date.now();
                const nombreFinal = "🔗 " + datosCanto.n;

                const nl = { 
                    id: idFinal, 
                    nombre: nombreFinal, 
                    ids_cantos: datosCanto.i, 
                    ultimaActualizacion: new Date().toISOString() 
                };

                // 1. Guardar en LocalStorage (Inmediato para evitar pérdida)
                let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
                cache.unshift(nl);
                localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));

                // 2. Guardar en Firebase (Garantizando persistencia en la nube)
                const user = auth.currentUser;
                if (user) {
                    const docRef = doc(db, "usuarios", user.uid, "listasPersonalizadas", idFinal);
                    console.log("📤 Subiendo a Firebase lista con acentos corregidos...");
                    
                    // El AWAIT es vital para que Firebase termine antes del refresh
                    await setDoc(docRef, { 
                        ...nl, 
                        ultimaActualizacion: serverTimestamp() 
                    });
                    console.log("✅ Guardado en Firebase:", idFinal);
                }

                // 3. REFRESH OBLIGATORIO
                // Limpia la URL y fuerza la recarga de los datos frescos
                console.log("🔄 Ejecutando refresh final...");
                window.location.href = window.location.origin + window.location.pathname;
            }
        } catch (e) {
            console.error("❌ Error en importación (Acentos/Base64):", e);
            bloqueoSnapshot = false;
            // Si algo falla, limpiamos la URL sin refrescar para no entrar en bucle
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