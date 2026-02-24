import { auth, db } from './firebase-auth.js';
import { 
    doc, setDoc, serverTimestamp, deleteDoc, 
    collection, query, onSnapshot, orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES DE ESTADO ---
let listaOrdenada = [];
let todosLosCantos = [];
let snapshotActual = null;
let clicksCerrar = 0;

// --- 1. CARGA INICIAL DE DATOS ---
fetch('data/indicecantos.json')
    .then(res => res.json())
    .then(data => {
        todosLosCantos = data;
        renderizarLista(todosLosCantos);
    })
    .catch(err => console.error("Error al cargar JSON:", err));

    // CARGA DE CACHE INICIAL
    const datosLocales = localStorage.getItem('cache_listas_personalizadas');
if (datosLocales) {
    console.log("Cargando listados desde el equipo...");
    renderizarListasDesdeCache(JSON.parse(datosLocales));
}


// --- 2. FUNCIONES DE INTERFAZ (UI) ---

window.toggleSection = (contentId, wrapperId) => {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        content.classList.toggle('cfg-close');
        wrapper.classList.toggle('collapsed');
    }
};

// RENDERIZAR LISTA
function renderizarLista(lista) {
    const contenedor = document.getElementById('contenedor-seleccion');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = '<p class="status-msg">No se encontraron cantos.</p>';
        return;
    }

    lista.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'item-canto';
        
        // Hacemos que todo el div responda al clic
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

// --- 3. LÓGICA DE NEGOCIO ---

window.toggleCanto = (id) => {
    const stringId = String(id);
    const index = listaOrdenada.indexOf(stringId);
    index !== -1 ? listaOrdenada.splice(index, 1) : listaOrdenada.push(stringId);
    actualizarInterfazSeleccion();
    const buscador = document.getElementById('inputBuscador');
    if (buscador) {
        buscador.value = ""; 
        renderizarLista(todosLosCantos); 
    }
};

window.filtrarSeleccion = () => {
    const busqueda = document.getElementById('inputBuscador').value.toLowerCase();
    const filtrados = todosLosCantos.filter(c => c.titulo.toLowerCase().includes(busqueda));
    renderizarLista(filtrados);
};

window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscador');
    if (input) { input.value = ''; window.filtrarSeleccion(); input.focus(); }
};

// --- 4. FIREBASE: GUARDAR, EDITAR Y ELIMINAR ---

window.guardarListaFirebase = async () => {
    const nombre = document.getElementById('nombreLista').value.trim();
    const user = auth.currentUser;
    if (!user || !nombre || listaOrdenada.length === 0) return alert("Inicia Sessión Nuevamente.");
    try {
        const listaId = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId), {
            nombre: nombre, ids_cantos: listaOrdenada, ultimaActualizacion: serverTimestamp()
        });
        alert(`¡Lista "${nombre}" guardada!`);
    } catch (e) { alert("Error al guardar."); }
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        const q = query(collection(db, "usuarios", user.uid, "listasPersonalizadas"), orderBy("ultimaActualizacion", "desc"));
        onSnapshot(q, (snapshot) => {
            snapshotActual = snapshot;
            const contenedor = document.getElementById('lista-colecciones');
            if (!contenedor) return;
            contenedor.innerHTML = snapshot.empty ? '<p class="status-msg">No tienes listas.</p>' : '';
            snapshot.forEach((doc) => {
                const data = doc.data();
                const div = document.createElement('div');
                div.className = 'tarjeta-lista-wrapper';
                div.innerHTML = `
                    <div class="tarjeta-lista" onclick="toggleDetalleLista('${doc.id}')">
                        <div class="info-lista"><strong>${data.nombre}</strong><span>${(data.ids_cantos || []).length} cantos</span></div>
                        <div class="acciones-lista" onclick="event.stopPropagation()">
                            <button class="btn-ver" onclick="cargarListaParaEditar('${doc.id}', ${JSON.stringify(data.ids_cantos).replace(/"/g, '&quot;')}, '${data.nombre.replace(/'/g, "\\'")}')">
                                <span class="material-symbols-outlined">edit</span>
                            </button>
                            <span class="material-symbols-outlined icon-delete" onclick="window.eliminarLista('${doc.id}', '${data.nombre.replace(/'/g, "\\'")}')" style="color: #bc0009; cursor: pointer; margin: 0 10px;">delete</span>
                            <span class="material-symbols-outlined arrow-icon" onclick="toggleDetalleLista('${doc.id}')">expand_more</span>
                        </div>
                    </div>
                    <div id="detalle-${doc.id}" class="detalle-lista-cantos cfg-close"></div>
                `;
                contenedor.appendChild(div);
            });
        });
    }
});

window.cargarListaParaEditar = (docId, ids, nombre) => {
    listaOrdenada = [...ids];
    document.getElementById('nombreLista').value = nombre;
    if(document.getElementById('content-nueva-lista').classList.contains('cfg-close')) window.toggleSection('content-nueva-lista', 'wrapper-nueva-lista');
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.eliminarLista = async (idLista, nombreLista) => {
    const user = auth.currentUser;
    if (user && confirm(`¿Eliminar "${nombreLista}"?`)) {
        await deleteDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", idLista));
    }
};

// --- 5. VISOR Y DETALLES ---

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
    const contenido = document.getElementById('contenidoCantoVisor');
    if (modal) modal.classList.add('cfg-close');
    if (contenido) contenido.innerHTML = ''; 
    document.body.style.overflow = 'auto';
};

window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv || !snapshotActual) return;
    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));
    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        const listaData = snapshotActual.docs.find(d => d.id === idLista).data();
        detalleDiv.innerHTML = (listaData.ids_cantos || []).map((id, i) => {
            const c = todosLosCantos.find(can => String(can.id) === String(id));
            return `<div class="sub-item-canto" onclick="window.abrirVisorCanto('${id}')">
                        <span class="num">${i + 1}</span><span>${c ? c.titulo : id}</span>
                        <span class="material-symbols-outlined">menu_book</span>
                    </div>`;
        }).join('');
    }
};


