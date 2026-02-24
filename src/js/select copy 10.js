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
let listasLocalesCache = []; 

// --- UTILIDAD: NORMALIZADOR DE TEXTO (IGNORA ACENTOS, Ñ, ESPACIOS) ---
const normalizarTexto = (texto) => {
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quita acentos
        .replace(/ñ/g, "n")              // Trata la ñ como n
        .replace(/\s+/g, '')             // Quita TODOS los espacios
        .trim();
};

// --- 1. MOTOR DE PERSISTENCIA LOCAL (INMEDIATO) ---
const cargarDesdeEquipo = () => {
    try {
        const datosLocales = localStorage.getItem('cache_listas_personalizadas');
        if (datosLocales) {
            listasLocalesCache = JSON.parse(datosLocales);
            console.log("Cargando datos desde el equipo (Offline)...");
            renderizarListasUI(listasLocalesCache);
            // Simulamos snapshot para que funcionen los detalles offline
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

// --- 3. SINCRONIZACIÓN ONLINE ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        const q = query(collection(db, "usuarios", user.uid, "listasPersonalizadas"), orderBy("ultimaActualizacion", "desc"));
        onSnapshot(q, (snapshot) => {
            // Evitar parpadeos si viene de caché de Firebase
            if (snapshot.metadata.fromCache && listasLocalesCache.length > 0) return;
            
            snapshotActual = snapshot;
            listasLocalesCache = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            renderizarListasUI(listasLocalesCache);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));
        });
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
                <button class="btn-ver" onclick="window.cargarListaParaEditar('${idLista}', ${JSON.stringify(ids).replace(/"/g, '&quot;')}, '${nombreEscapado}')">
                    <span class="material-symbols-outlined">edit</span>
                </button>
                <span class="material-symbols-outlined icon-delete" onclick="window.eliminarLista('${idLista}', '${nombreEscapado}')">delete</span>
                <span class="material-symbols-outlined arrow-icon" onclick="window.toggleDetalleLista('${idLista}')">expand_more</span>
            </div>
        </div>
        <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
    `;
    contenedor.appendChild(div);
}

function renderizarListasUI(listas) {
    const contenedor = document.getElementById('lista-colecciones');
    if (contenedor) {
        contenedor.innerHTML = listas.length === 0 ? '<p class="status-msg">No hay listas creadas.</p>' : '';
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
                <input type="checkbox" data-id="${canto.id}" 
                       ${isChecked ? 'checked' : ''} 
                       readonly>
                <span class="slider"></span>
            </label>
        `;
        contenedor.appendChild(div);
    });
}

// --- 5. BUSCADORES INTELIGENTES ---
window.filtrarSeleccion = () => {
    const busquedaLimpia = normalizarTexto(document.getElementById('inputBuscador').value);
    const filtrados = todosLosCantos.filter(c => normalizarTexto(c.titulo).includes(busquedaLimpia));
    renderizarLista(filtrados);
};

window.filtrarMisListas = () => {
    const busqueda = normalizarTexto(document.getElementById('inputBuscadorListas').value);
    const filtradas = listasLocalesCache.filter(l => normalizarTexto(l.nombre).includes(busqueda));
    renderizarListasUI(filtradas);
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
                tag.onclick = (e) => {
                    e.stopPropagation();
                    window.toggleCanto(id);
                };
                cola.appendChild(tag);
            }
        });
    }

    const inputs = document.querySelectorAll('.item-canto input[type="checkbox"]');
    inputs.forEach(input => {
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

    // Actualización Local
    const idx = listasLocalesCache.findIndex(l => l.id === listaId);
    idx !== -1 ? listasLocalesCache[idx] = nuevaLista : listasLocalesCache.unshift(nuevaLista);
    localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));
    renderizarListasUI(listasLocalesCache);

    // Sincronización Online
    if (user) {
        try { 
            await setDoc(doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId), { 
                ...nuevaLista, 
                ultimaActualizacion: serverTimestamp() 
            }); 
        } catch (e) { console.warn("Guardado en modo Offline."); }
    }
};

window.eliminarLista = async (idLista, nombreLista) => {
    if (confirm(`¿Eliminar "${nombreLista}"?`)) {
        listasLocalesCache = listasLocalesCache.filter(l => l.id !== idLista);
        localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));
        renderizarListasUI(listasLocalesCache);
        if (auth.currentUser) {
            await deleteDoc(doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", idLista));
        }
    }
};

window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv || !snapshotActual) return;
    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));
    
    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        // Soporte para Firebase Snapshot o Array de Caché
        const docSnap = snapshotActual.docs.find(d => d.id === idLista);
        const data = docSnap.data ? docSnap.data() : docSnap;
        
        detalleDiv.innerHTML = data.ids_cantos.map((id, i) => {
            const c = todosLosCantos.find(can => String(can.id) === String(id));
            return `<div class="sub-item-canto" onclick="window.abrirVisorCanto('${id}')">
                <span class="num">${i + 1}</span><span>${c ? c.titulo : id}</span>
                <span class="material-symbols-outlined">menu_book</span>
            </div>`;
        }).join('');
    }
};

window.cargarListaParaEditar = (docId, ids, nombre) => {
    listaOrdenada = [...ids];
    document.getElementById('nombreLista').value = nombre;

    const contentNueva = document.getElementById('content-nueva-lista');
    if (contentNueva && contentNueva.classList.contains('cfg-close')) {
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

window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscador');
    if (input) { input.value = ''; window.filtrarSeleccion(); input.focus(); }
};

window.toggleSection = (contentId, wrapperId) => {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (content && wrapper) {
        content.classList.toggle('cfg-close');
        wrapper.classList.toggle('collapsed');
    }
};

// --- 7. SISTEMA DE COMPARTIR (IMPORTAR / EXPORTAR) ---

// Función para Exportar: Crea un archivo descargable
window.exportarLista = (idLista) => {
    const lista = listasLocalesCache.find(l => l.id === idLista);
    if (!lista) return alert("No se encontró la lista para exportar.");

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(lista));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `Resucito_${lista.nombre.replace(/\s+/g, '_')}.resucito`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

// Función para Importar: Lee un archivo subido por el usuario
window.importarLista = (event) => {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const listaImportada = JSON.parse(e.target.result);
            
            // Validamos que tenga el formato correcto
            if (!listaImportada.nombre || !listaImportada.ids_cantos) {
                throw new Error("Formato de archivo no válido");
            }

            // Evitar duplicados: le damos un ID único de importación
            listaImportada.id = "imp-" + Date.now();
            listaImportada.nombre = "📂 " + listaImportada.nombre; // Marca visual de que es importada

            // Guardamos en el equipo
            listasLocalesCache.unshift(listaImportada);
            localStorage.setItem('cache_listas_personalizadas', JSON.stringify(listasLocalesCache));
            renderizarListasUI(listasLocalesCache);

            // Si está logueado, sincronizamos con su nube
            if (auth.currentUser) {
                await setDoc(doc(db, "usuarios", auth.currentUser.uid, "listasPersonalizadas", listaImportada.id), {
                    ...listaImportada,
                    ultimaActualizacion: serverTimestamp()
                });
            }

            alert("¡Lista '" + listaImportada.nombre + "' importada con éxito!");
        } catch (err) {
            console.error(err);
            alert("Error: El archivo no es una lista válida de Resucitó.");
        }
    };
    reader.readAsText(archivo);
};