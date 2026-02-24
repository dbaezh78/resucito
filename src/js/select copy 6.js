import { auth, db } from './firebase-auth.js';
import { 
    doc, setDoc, serverTimestamp, deleteDoc, 
    collection, query, onSnapshot, orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES DE ESTADO ---
let listaOrdenada = [];
let todosLosCantos = [];
let snapshotActual = null; // Guardará el objeto de Firebase o el simulado de Caché
let clicksCerrar = 0;

// --- 1. CARGA DE BASE DE DATOS (JSON) ---
fetch('data/indicecantos.json')
    .then(res => res.json())
    .then(data => {
        todosLosCantos = data;
        renderizarLista(todosLosCantos);
    })
    .catch(err => console.error("Error al cargar JSON:", err));

// --- 2. MOTOR DE PERSISTENCIA LOCAL (INMEDIATO) ---
const cargarDesdeEquipo = () => {
    try {
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            const listas = JSON.parse(datosLocales);
            console.log("Modo Equipo: Cargando datos locales...");
            renderizarListasDesdeCache(listas);
            
            // Simulamos el snapshotActual para que toggleDetalleLista funcione Offline
            snapshotActual = {
                docs: listas.map(l => ({
                    id: l.id,
                    data: () => l
                }))
            };
        }
    } catch (e) { console.error("Error leyendo caché:", e); }
};

// Arrancamos el equipo al instante
cargarDesdeEquipo();

// --- 3. SINCRONIZACIÓN ONLINE INTELIGENTE ---
onAuthStateChanged(auth, (user) => {
    const btnLogout = document.getElementById('btn-logout-perfil');
    if (user) {
        if (btnLogout) btnLogout.style.display = 'inline-block';
        console.log("Usuario detectado: Sincronizando con la nube...");

        const q = query(
            collection(db, "usuarios", user.uid, "listasPersonalizadas"),
            orderBy("ultimaActualizacion", "desc")
        );

        onSnapshot(q, (snapshot) => {
            // Evitamos parpadeos si los datos vienen de la caché interna de Firebase
            if (snapshot.metadata.fromCache && snapshotActual && snapshotActual.docs.length > 0) return;

            snapshotActual = snapshot;
            const listasParaCache = [];
            const contenedor = document.getElementById('lista-colecciones');
            if (!contenedor) return;

            contenedor.innerHTML = snapshot.empty ? '<p class="status-msg">No tienes listas en la nube.</p>' : '';
            
            snapshot.forEach((doc) => {
                const data = doc.data();
                listasParaCache.push({ id: doc.id, ...data });
                crearTarjetaLista(doc.id, data, contenedor);
            });

            // Guardado eficiente en LocalStorage
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasParaCache));
        });
    } else {
        if (btnLogout) btnLogout.style.display = 'none';
        console.warn("Sin sesión: Operando solo con datos del equipo.");
    }
});

// --- 4. FUNCIONES DE RENDERIZADO (REUTILIZABLES) ---

function crearTarjetaLista(idLista, data, contenedor) {
    const ids = data.ids_cantos || [];
    const nombreEscapado = data.nombre.replace(/'/g, "\\'").replace(/"/g, "&quot;");
    const idsJson = JSON.stringify(ids).replace(/"/g, '&quot;');

    const div = document.createElement('div');
    div.className = 'tarjeta-lista-wrapper';
    div.innerHTML = `
        <div class="tarjeta-lista" onclick="window.toggleDetalleLista('${idLista}')">
            <div class="info-lista"><strong>${data.nombre}</strong><span>${ids.length} cantos</span></div>
            <div class="acciones-lista" onclick="event.stopPropagation()">
                <button class="btn-ver" onclick="window.cargarListaParaEditar('${idLista}', ${idsJson}, '${nombreEscapado}')">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <span class="material-symbols-outlined icon-delete" onclick="window.eliminarLista('${idLista}', '${nombreEscapado}')" style="color: #bc0009; cursor: pointer; margin: 0 10px;">delete</span>
                <span class="material-symbols-outlined arrow-icon" onclick="window.toggleDetalleLista('${idLista}')">expand_more</span>
            </div>
        </div>
        <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
    `;
    contenedor.appendChild(div);
}

function renderizarListasDesdeCache(listas) {
    const contenedor = document.getElementById('lista-colecciones');
    if (contenedor) {
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
        div.onclick = () => window.toggleCanto(canto.id);
        div.innerHTML = `
            <span class="titulo-canto-seleccion">${canto.titulo}</span>
            <label class="switch" onclick="event.stopPropagation()">
                <input type="checkbox" data-id="${canto.id}" onchange="window.toggleCanto('${canto.id}')" 
                       ${listaOrdenada.includes(String(canto.id)) ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        `;
        contenedor.appendChild(div);
    });
}

// --- 5. LÓGICA DE NEGOCIO Y GUARDADO HÍBRIDO ---

window.guardarListaFirebase = async () => {
    const nombre = document.getElementById('nombreLista').value.trim();
    const user = auth.currentUser;

    if (!nombre || listaOrdenada.length === 0) return alert("Nombre o lista vacía.");

    const listaId = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
    const nuevaLista = {
        id: listaId,
        nombre: nombre,
        ids_cantos: [...listaOrdenada],
        ultimaActualizacion: new Date().toISOString()
    };

    // A. ACTUALIZACIÓN LOCAL (INMEDIATA)
    let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
    const idx = cache.findIndex(l => l.id === listaId);
    idx !== -1 ? cache[idx] = nuevaLista : cache.unshift(nuevaLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
    renderizarListasDesdeCache(cache); 

    // B. SINCRONIZACIÓN ONLINE (SEGUNDO PLANO)
    if (user) {
        try {
            await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId), {
                ...nuevaLista,
                ultimaActualizacion: serverTimestamp()
            });
        } catch (e) { console.warn("Offline: Guardado solo en equipo local."); }
    } else {
        alert("Guardado en este equipo. Inicia sesión para subirla a la nube.");
    }
};

window.eliminarLista = async (idLista, nombreLista) => {
    const user = auth.currentUser;
    if (confirm(`¿Eliminar la lista "${nombreLista}"?`)) {
        // Eliminar de caché local
        let cache = JSON.parse(localStorage.getItem('cache_listas_personalizadas') || "[]");
        cache = cache.filter(l => l.id !== idLista);
        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(cache));
        renderizarListasDesdeCache(cache);

        // Eliminar de nube
        if (user) {
            await deleteDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", idLista));
        }
    }
};

// --- 6. UTILIDADES Y VISOR ---

window.toggleCanto = (id) => {
    const stringId = String(id);
    const index = listaOrdenada.indexOf(stringId);
    index !== -1 ? listaOrdenada.splice(index, 1) : listaOrdenada.push(stringId);
    actualizarInterfazSeleccion();
    const buscador = document.getElementById('inputBuscador');
    if (buscador && buscador.value !== "") {
        buscador.value = ""; 
        renderizarLista(todosLosCantos); 
    }
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
                tag.onclick = () => window.toggleCanto(id);
                cola.appendChild(tag);
            }
        });
    }
    document.querySelectorAll('.item-canto input').forEach(input => {
        input.checked = listaOrdenada.includes(String(input.getAttribute('data-id')));
    });
}

window.toggleSection = (contentId, wrapperId) => {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        content.classList.toggle('cfg-close');
        wrapper.classList.toggle('collapsed');
    }
};

window.cargarListaParaEditar = (docId, ids, nombre) => {
    listaOrdenada = [...ids];
    document.getElementById('nombreLista').value = nombre;
    if(document.getElementById('content-nueva-lista').classList.contains('cfg-close')) window.toggleSection('content-nueva-lista', 'wrapper-nueva-lista');
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv || !snapshotActual) return;
    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));
    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        // Buscar en snapshot (Firebase) o en el snapshot simulado (Caché)
        let docData;
        if (snapshotActual.docs) {
            const docSnap = snapshotActual.docs.find(d => d.id === idLista);
            docData = docSnap ? docSnap.data() : null;
        }
        
        if (!docData) return;
        const ids = docData.ids_cantos || [];
        detalleDiv.innerHTML = ids.map((id, i) => {
            const c = todosLosCantos.find(can => String(can.id) === String(id));
            return `<div class="sub-item-canto" onclick="window.abrirVisorCanto('${id}')">
                <span class="num">${i + 1}</span><span>${c ? c.titulo : id}</span>
                <span class="material-symbols-outlined">menu_book</span>
            </div>`;
        }).join('');
    }
};

window.confirmarCerrarVisor = () => {
    const modal = document.getElementById('modalVisorCanto');
    const contenido = document.getElementById('contenidoCantoVisor');
    if (modal) modal.classList.add('cfg-close');
    if (contenido) contenido.innerHTML = ''; 
    document.body.style.overflow = 'auto';
};

window.abrirVisorCanto = (idCanto) => {
    const modal = document.getElementById('modalVisorCanto');
    const contenido = document.getElementById('contenidoCantoVisor');
    if (!modal || !contenido) return;
    modal.classList.remove('cfg-close');
    document.body.style.overflow = 'hidden';
    contenido.innerHTML = `<iframe src="./index.html?canto=${idCanto}" style="width:100%; height:100%; border:none; background: white;"></iframe>`;
};

// Buscador
window.filtrarSeleccion = () => {
    const busqueda = document.getElementById('inputBuscador').value.toLowerCase();
    const filtrados = todosLosCantos.filter(c => c.titulo.toLowerCase().includes(busqueda));
    renderizarLista(filtrados);
};

window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscador');
    if (input) { input.value = ''; window.filtrarSeleccion(); input.focus(); }
};