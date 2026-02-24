import { auth, db } from './firebase-auth.js';
import { 
    doc, 
    setDoc, 
    serverTimestamp, 
    deleteDoc, 
    collection, 
    query, 
    onSnapshot, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES DE ESTADO ---
let listaOrdenada = [];
let todosLosCantos = [];
let snapshotActual = null; // Mantenlo aquí arriba para que todas las funciones lo vean
let clicksCerrar = 0;


// FUNCIÓN 1: Cargar datos en la sección superior para editar
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



// FUNCION 2: CARGA DE DATOS
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

// FUNCIÓN 3: PARA RENDERIZAR LA LISTA
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

// FUNCIÓN 4: CONTROL DE SELECCIÓN, NUMERACIÓN Y FOCO
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

// FUNCIÓN 5: RENDERIZADO DE BURBUJAS (COLA VISUAL)
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

// FUNCION 6: BUSCADOR Y LIMPIEZA
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

// FUNCIÓN 7: GUARDAR EN FIREBASE
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

// FUNCIÓN 8: CARGAR LISTADOS DESDE FIREBASE
onAuthStateChanged(auth, (user) => {
    if (user) {
        const q = query(
            collection(db, "usuarios", user.uid, "listasPersonalizadas"),
            orderBy("ultimaActualizacion", "desc")
        );

        onSnapshot(q, (snapshot) => {
            snapshotActual = snapshot;
            const contenedor = document.getElementById('lista-colecciones');
            if (!contenedor) return;
            contenedor.innerHTML = '';

            if (snapshot.empty) {
                contenedor.innerHTML = '<p class="status-msg">Aún no tienes listas creadas.</p>';
                return;
            }

            snapshot.forEach((doc) => {
                const data = doc.data();
                const idLista = doc.id;
                const ids = data.ids_cantos || [];
                
                const div = document.createElement('div');
                div.className = 'tarjeta-lista-wrapper';
                div.innerHTML = `
                    <div class="tarjeta-lista" onclick="toggleDetalleLista('${idLista}')">
                        <div class="info-lista">
                            <strong>${data.nombre}</strong>
                            <span>${ids.length} cantos</span>
                        </div>
                        <div class="acciones-lista" onclick="event.stopPropagation()">
                            <button class="btn-ver" onclick="cargarListaParaEditar('${idLista}', ${JSON.stringify(ids).replace(/"/g, '&quot;')}, '${data.nombre}')">
                                <span class="material-symbols-outlined">edit</span>
                            </button>
                            
                            <span class="material-symbols-outlined icon-delete" 
                                  onclick="window.eliminarLista('${idLista}', '${data.nombre.replace(/'/g, "\\'")}')" 
                                  style="color: #bc0009; cursor: pointer; margin: 0 10px;">
                                  delete
                            </span>

                            <span class="material-symbols-outlined arrow-icon" onclick="toggleDetalleLista('${idLista}')">expand_more</span>
                        </div>
                    </div>
                    <div id="detalle-${idLista}" class="detalle-lista-cantos cfg-close"></div>
                `;
                contenedor.appendChild(div);
            });
        });
    }
});


// FUNCIÓN 9: Visor de Cantos
window.abrirVisorCanto = (idCanto) => {
    const modal = document.getElementById('modalVisorCanto');
    const contenido = document.getElementById('contenidoCantoVisor');
    
    if (!modal || !contenido) return;

    // 1. Limpiamos y preparamos
    contenido.innerHTML = '<p style="text-align:center; margin-top:50px;">Cargando...</p>';
    
    // 2. Mostramos el modal quitando la clase que lo oculta
    modal.classList.remove('cfg-close');
    document.body.style.overflow = 'hidden'; // Evita que la página de atrás se mueva

    // 3. Inyectamos el iframe con tu ruta real
    // Usamos ./index.html para que funcione desde la raíz
    contenido.innerHTML = `
        <iframe src="./index.html?canto=${idCanto}" 
                style="width:100%; height:100%; border:none; background: white;">
        </iframe>`;
};

// FUNCIÓN 10: Ir al primer canto
window.confirmarCerrarVisor = () => {
    // 1. Ocultamos el modal
    const modal = document.getElementById('modalVisorCanto');
    if (modal) modal.classList.add('cfg-close');

    // 2. Limpiamos el contenido (para detener el audio del iframe si lo hubiera)
    const contenido = document.getElementById('contenidoCantoVisor');
    if (contenido) contenido.innerHTML = ''; 

    // 3. Devolvemos el scroll a la página principal
    document.body.style.overflow = 'auto';
    
    // 4. (Opcional) Reseteamos variables por si acaso
    clicksCerrar = 0; 
};
// FINAL FUNCIÓN 10: Ir al primer canto

// FUNCIÖN 11: PARA MOSTRAR/OCULTAR CANTOS BAJO EL NOMBRE
window.toggleDetalleLista = (idLista) => {
    const detalleDiv = document.getElementById(`detalle-${idLista}`);
    if (!detalleDiv) return;

    const estaCerrado = detalleDiv.classList.contains('cfg-close');
    
    // Cerramos otros detalles abiertos para que sea más limpio (opcional)
    document.querySelectorAll('.detalle-lista-cantos').forEach(d => d.classList.add('cfg-close'));

    if (estaCerrado) {
        detalleDiv.classList.remove('cfg-close');
        
        // Buscamos la data de esta lista en el snapshot o la pedimos
        // Para hacerlo simple, buscamos los nombres en nuestro todosLosCantos local
        const listaData = snapshotActual.docs.find(d => d.id === idLista).data();
        const nombresCantos = listaData.ids_cantos.map(id => {
            const c = todosLosCantos.find(canto => String(canto.id) === String(id));
            return c ? c.titulo : "Canto no encontrado";
        });

        detalleDiv.innerHTML = nombresCantos.map((nom, i) => `
            <div class="sub-item-canto" onclick="window.abrirVisorCanto('${listaData.ids_cantos[i]}')">
                <span class="num">${i + 1}</span>
                <span>${nom}</span>
                <span class="material-symbols-outlined">menu_book</span>
            </div>
        `).join('');
    }
};

// FUNCION 12: BOTON HOME INTELIGENTE
// Debe estar fuera de cualquier otra función, al nivel principal del archivo
window.confirmarCerrarVisor = () => {
    const modal = document.getElementById('modalVisorCanto');
    const contenido = document.getElementById('contenidoCantoVisor');
    
    if (modal) modal.classList.add('cfg-close');
    if (contenido) contenido.innerHTML = ''; // Esto destruye el iframe y libera memoria
    document.body.style.overflow = 'auto';
    console.log("Visor destruido y cerrado correctamente.");
};

// FUNCIÓN 13: ELIMINAR LISTADO
window.eliminarLista = async (idLista, nombreLista) => {
    const user = auth.currentUser;
    if (!user) {
        alert("Debes estar autenticado para realizar esta acción.");
        return;
    }

    const confirmar = confirm(`¿Estás seguro de que quieres eliminar la lista "${nombreLista}"? Esta acción no se puede deshacer.`);
    
    if (confirmar) {
        try {
            // Referencia exacta a la subcolección del usuario
            const docRef = doc(db, "usuarios", user.uid, "listasPersonalizadas", idLista);
            
            await deleteDoc(docRef);
            console.log(`Lista "${nombreLista}" eliminada con éxito.`);
            // No necesitas alert, la lista desaparecerá sola de la interfaz gracias al onSnapshot
        } catch (error) {
            console.error("Error al eliminar la lista:", error);
            alert("No se pudo eliminar la lista. Revisa tu conexión.");
        }
    }
};