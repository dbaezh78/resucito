import { auth, db } from './firebase-auth.js';
import { doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- VARIABLES DE ESTADO ---
let listaOrdenada = []; // Usamos solo esta para mantener el orden
let todosLosCantos = [];

// 1. CARGA DE DATOS
fetch('data/indicecantos.json') // Asegúrate de que la ruta sea correcta
    .then(res => {
        if (!res.ok) throw new Error("No se pudo cargar el archivo de cantos");
        return res.json();
    })
    .then(data => {
        todosLosCantos = data;
        console.log("Cantos cargados correctamente:", todosLosCantos.length);
        renderizarLista(todosLosCantos);
    })
    .catch(err => {
        console.error("Error al cargar JSON:", err);
        const cont = document.getElementById('contenedor-seleccion');
        if (cont) cont.innerHTML = '<p class="status-msg">Error al cargar la base de datos.</p>';
    });

// FUNCIÓN PARA RENDERIZAR LA LISTA
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
        // Agregamos data-id para que la sincronización visual funcione
        div.innerHTML = `
            <span>${canto.titulo}</span>
            <label class="switch">
                <input type="checkbox" data-id="${canto.id}" onchange="window.toggleCanto('${canto.id}')" 
                       ${listaOrdenada.includes(String(canto.id)) ? 'checked' : ''}>
                <span class="slider"></span>
            </label>
        `;
        contenedor.appendChild(div);
    });
}

// FUNCIÓN 1: CONTROL DE SELECCIÓN, NUMERACIÓN Y FOCO
window.toggleCanto = (id) => {
    const stringId = String(id);
    const index = listaOrdenada.indexOf(stringId);

    if (index !== -1) {
        // Si el canto ya estaba seleccionado, lo quitamos
        listaOrdenada.splice(index, 1);
    } else {
        // Si es nuevo, lo añadimos al final
        listaOrdenada.push(stringId);
    }

    // Actualizamos toda la interfaz visual (Cola y Checks)
    actualizarInterfazSeleccion();
    
    // FOCO Y LIMPIEZA
    const buscador = document.getElementById('inputBuscador');
    if (buscador) {
        buscador.value = ""; 
        buscador.focus();
        const btnX = document.getElementById('btnLimpiar');
        if(btnX) btnX.style.display = "none";
        
        // Volvemos a mostrar la lista completa tras seleccionar
        renderizarLista(todosLosCantos); 
    }
};

// FUNCIÓN 2: RENDERIZADO DE BURBUJAS (COLA VISUAL)
function actualizarInterfazSeleccion() {
    // 1. Actualizar contador
    const contador = document.getElementById('contador-seleccion');
    if (contador) contador.innerText = listaOrdenada.length;

    // 2. Crear las burbujas numeradas
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

    // 3. Sincronizar los checks de la lista que está en pantalla
    const inputs = document.querySelectorAll('.item-canto input');
    inputs.forEach(input => {
        const idInput = input.getAttribute('data-id');
        input.checked = listaOrdenada.includes(String(idInput));
    });
}

// BUSCADOR Y LIMPIEZA
window.filtrarSeleccion = () => {
    const busqueda = document.getElementById('inputBuscador').value.toLowerCase();
    const btnLimpiar = document.getElementById('btnLimpiar');
    
    if(btnLimpiar) btnLimpiar.style.display = busqueda.length > 0 ? 'block' : 'none';
    
    const filtrados = todosLosCantos.filter(canto => 
        canto.titulo.toLowerCase().includes(busqueda)
    );
    renderizarLista(filtrados);
};

window.limpiarBuscadorSeleccion = () => {
    const input = document.getElementById('inputBuscador');
    if (input) {
        input.value = '';
        window.filtrarSeleccion();
        input.focus();
    }
};

// GUARDAR EN FIREBASE
window.guardarListaFirebase = async () => {
    const nombre = document.getElementById('nombreLista').value.trim();
    const user = auth.currentUser;

    if (!user) return alert("Inicia sesión para guardar listas.");
    if (!nombre) return alert("Por favor, ponle un nombre a tu lista.");
    if (listaOrdenada.length === 0) return alert("Selecciona al menos un canto.");

    try {
        const listaId = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        const docRef = doc(db, "usuarios", user.uid, "listasPersonalizadas", listaId);
        
        await setDoc(docRef, {
            nombre: nombre,
            ids_cantos: listaOrdenada, // Guardamos el array ordenado directamente
            ultimaActualizacion: serverTimestamp()
        });

        alert(`¡Lista "${nombre}" guardada correctamente!`);
        window.location.href = '/perfil.html';
    } catch (e) {
        console.error("Error al guardar:", e);
        alert("Error al sincronizar con Firebase.");
    }
};

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, query, onSnapshot, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// FUNCIÓN 3: CARGAR LISTADOS DESDE FIREBASE
onAuthStateChanged(auth, (user) => {
    if (user) {
        const q = query(
            collection(db, "usuarios", user.uid, "listasPersonalizadas"),
            orderBy("ultimaActualizacion", "desc")
        );

        onSnapshot(q, (snapshot) => {
            const contenedor = document.getElementById('lista-colecciones');
            if (!contenedor) return;
            contenedor.innerHTML = '';

            if (snapshot.empty) {
                contenedor.innerHTML = '<p class="status-msg">Aún no tienes listas creadas.</p>';
                return;
            }

                        snapshot.forEach((doc) => {
                const data = doc.data();
                const idPrimerCanto = data.ids_cantos && data.ids_cantos.length > 0 ? data.ids_cantos[0] : null;
                
                const div = document.createElement('div');
                div.className = 'tarjeta-lista';
                div.innerHTML = `
                    <div class="info-lista">
                        <strong>${data.nombre}</strong>
                        <span>${data.ids_cantos.length} cantos</span>
                    </div>
                    <div class="acciones-lista">
                        ${idPrimerCanto ? `
                            <button class="btn-ir" onclick="irAlPrimerCanto('${idPrimerCanto}')" title="Ver primer canto">
                                <span class="material-symbols-outlined">play_circle</span>
                            </button>` : ''}
                        <button class="btn-ver" onclick="cargarListaParaEditar('${doc.id}', ${JSON.stringify(data.ids_cantos).replace(/"/g, '&quot;')}, '${data.nombre}')" title="Editar lista">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                `;
                contenedor.appendChild(div);
            });
        });
    }
});

// FUNCIÓN 4: Cargar datos en la sección superior para editar
window.cargarListaParaEditar = (docId, ids, nombre) => {
    // 1. Llenamos los datos
    listaOrdenada = [...ids];
    document.getElementById('nombreLista').value = nombre;
    
    // 2. Cerramos la sección de listados y abrimos la de nueva lista (edición)
    toggleSection('content-mis-listas', 'wrapper-mis-listas');
    if(document.getElementById('content-nueva-lista').classList.contains('cfg-close')) {
        toggleSection('content-nueva-lista', 'wrapper-nueva-lista');
    }
    
    // 3. Refrescamos la interfaz superior
    actualizarInterfazSeleccion();
    renderizarLista(todosLosCantos); // Para que los checks se marquen
    
    // 4. Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// NUEVA FUNCIÓN: Ir al primer canto
window.irAlPrimerCanto = (id) => {
    // Aquí puedes redirigir a tu visualizador de cantos
    // Ejemplo: window.location.href = `visor.html?id=${id}`;
    alert("Navegando al primer canto: " + id);
};