import { auth, db } from './firebase-auth.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES GLOBALES ---
let etapaGuardada = null;
const CODIGO_ADMIN_SECRETO = "RE77"; 

// 1. INICIALIZACIÓN: Llena comunidades y países al cargar el DOM.
document.addEventListener('DOMContentLoaded', async () => {
    llenarComunidades();
    await cargarPaisesEIP();
});

// 2. OBSERVADOR AUTH: Carga perfil y lanza la tabla si hay usuario.
auth.onAuthStateChanged(async (user) => {
    if (user) {
        const docRef = doc(db, "usuarios", user.uid, "perfil", "config");
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                document.getElementById('userCountry').value = data.pais || "";
                document.getElementById('userParroquia').value = data.parroquia || "";
                document.getElementById('userComunidad').value = data.comunidad || 1;
                document.getElementById('userStep').value = data.etapa || 0;
            }
        } catch (e) { console.warn("Modo offline: Error de cuota en perfil."); }
        await renderizarTablaCantos();
    } else {
        setTimeout(() => { window.location.href = "../../index.html"; }, 1500);
    }
});

// 3. RENDERIZADO TABLA: Crea el HTML base desde el JSON.
// 3. RENDERIZADO TABLA: Crea el HTML base y prepara el espacio para el estado
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;
    try {
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();
        let html = `<table class="tabla-gestion">
            <thead>
                <tr>
                    <th>Canto</th>
                    <th>Estado Offline</th> <th>Uso</th>
                    <th>Cejilla (Or/Tu)</th>
                    <th>Acorde (Or/Tu)</th>
                </tr>
            </thead>
            <tbody id="cuerpo-tabla-perfil">`;
        
        cantos.forEach(canto => {
            html += `<tr id="fila-${canto.id}">
                <td style="text-align:left;">${canto.titulo}</td>
                <td id="status-${canto.id}">⏳</td> <td id="uso-${canto.id}">--- 📅</td>
                <td>${canto.cejilla || 0} / <b id="cejilla-tu-${canto.id}" style="color: #bc0009;">-</b></td>
                <td>${canto.acorde || 'N/A'} / <b id="acorde-tu-${canto.id}" style="color: #bc0009;">-</b></td>
            </tr>`;
        });
        html += `</tbody></table>`;
        contenedor.innerHTML = html;
        completarDatosLentamente(cantos);
    } catch (e) { console.error("Error en tabla:", e); }
}

// 4. CARGA PROGRESIVA: Determina si el canto es Online u Offline
async function completarDatosLentamente(cantos) {
    const user = auth.currentUser;
    if (!user) return;
    const cache = await caches.open('cantos-cache-v2.08');
    
    for (const canto of cantos) {
        // --- PARTE OFFLINE ---
        const urlCanto = `src/css/pg/${canto.id}.css`;
        const estaCargado = await cache.match(urlCanto);
        const celdaStatus = document.getElementById(`status-${canto.id}`);
        
        if (celdaStatus) {
            // Si está cargado ponemos un check verde, si no, un icono de nube/web
            const iconoEstado = estaCargado 
                ? '<span title="Disponible Offline" style="color: #28a745;">✅ Offline</span>' 
                : '<span title="Solo Online" style="color: #007bff;">🌐 Online</span>';
            
            celdaStatus.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; justify-content: center;">
                    ${iconoEstado}
                    <input type="checkbox" ${estaCargado ? 'checked' : ''} 
                           onchange="window.gestionarMemoria('${canto.id}', this.checked)" 
                           title="Descargar para usar sin internet">
                </div>`;
        }

        // --- PARTE DATOS (LocalStorage / Firebase) ---
        const localData = localStorage.getItem(`data-${canto.id}`);
        if (localData) {
            inyectarDatosEnTabla(canto.id, JSON.parse(localData), true);
        } else {
            obtenerDatosExtraFirebase(canto.id, user.uid);
        }
        
        await new Promise(res => setTimeout(res, 120));
    }
}

// 5. INYECTAR DATOS: Pinta en pantalla y añade el PUNTO VERDE si es local.
function inyectarDatosEnTabla(cantoId, data, esLocal = false) {
    const elCej = document.getElementById(`cejilla-tu-${cantoId}`);
    const elAco = document.getElementById(`acorde-tu-${cantoId}`);
    const elUso = document.getElementById(`uso-${cantoId}`);
    if (elCej && data.cejilla) elCej.innerText = data.cejilla;
    if (elAco && data.acorde) {
        elAco.innerHTML = `${data.acorde} ${esLocal ? '<span style="color: #28a745; font-size: 0.8em; margin-left: 4px;">●</span>' : ''}`;
    }
    if (elUso && data.uso) {
        elUso.innerHTML = `<span class="fecha-link" onclick="window.abrirCalendario('${cantoId}')">${data.uso} 📅</span>`;
    }
}

// 6. OBTENER FIREBASE: Baja de la nube y guarda en LocalStorage.
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
        const [docCej, docAco, docUso] = await Promise.all([
            getDoc(doc(db, "usuarios", uid, "cejillas", cantoId)),
            getDoc(doc(db, "usuarios", uid, "transportes", cantoId)),
            getDoc(doc(db, "usuarios", uid, "historial_uso", cantoId))
        ]);
        const datos = {};
        if (docCej.exists()) datos.cejilla = docCej.data().valor;
        if (docAco.exists()) datos.acorde = docAco.data().valor;
        if (docUso.exists()) datos.uso = docUso.data().valor || docUso.data().fecha;
        if (Object.keys(datos).length > 0) {
            inyectarDatosEnTabla(cantoId, datos, false);
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datos));
        }
    } catch (e) { /* Error de cuota */ }
}

// 7. TOGGLE SECTION: Expande/Colapsa secciones (Global).
window.toggleSection = function(contentId, wrapperId) {
    const content = document.getElementById(contentId);
    const wrapper = document.getElementById(wrapperId);
    if (!content || !wrapper) return;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        wrapper.classList.remove("collapsed");
    } else {
        content.style.display = "none";
        wrapper.classList.add("collapsed");
    }
};

// 8. GESTIONAR MEMORIA: Descarga o borra CSS (Global).
window.gestionarMemoria = async (cantoId, cargar) => {
    const cache = await caches.open('cantos-cache-v2.08');
    const url = `src/css/pg/${cantoId}.css`;
    if (cargar) {
        try {
            const res = await fetch(url);
            if(res.ok) await cache.put(url, res);
        } catch (e) { alert("Error al descargar."); }
    } else {
        if (confirm("¿Borrar offline?")) await cache.delete(url);
    }
};

// 9. ABRIR CALENDARIO: Modal de historial (Global).
window.abrirCalendario = function(cantoId) {
    const modal = document.getElementById('modalCalendario');
    if (modal) modal.style.display = "block";
};

// 10. LLENAR COMUNIDADES: Opciones del select.
function llenarComunidades() {
    const select = document.getElementById('userComunidad');
    if (!select) return;
    for (let i = 1; i <= 73; i++) {
        let opt = document.createElement('option');
        opt.value = i; opt.innerText = `Comunidad ${i}`;
        select.appendChild(opt);
    }
}

// 11. CARGAR PAISES: Desde JSON local.
async function cargarPaisesEIP() {
    const datalist = document.getElementById('paisesList');
    if(!datalist) return;
    try {
        const res = await fetch('src/data/paises.json');
        const paises = await res.json();
        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre; datalist.appendChild(opt);
        });
    } catch (e) {}
}

// 12. GUARDAR PERFIL: Envía a Firebase.
document.getElementById('btnSave')?.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;
    const perfilData = {
        pais: document.getElementById('userCountry').value,
        parroquia: document.getElementById('userParroquia').value,
        comunidad: document.getElementById('userComunidad').value,
        etapa: document.getElementById('userStep').value,
        ultimaActualizacion: new Date()
    };
    try {
        await setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), perfilData);
        alert("Perfil actualizado.");
    } catch (e) { alert("Error al guardar."); }
});

// 13. LOGOUT: Cierra sesión.
document.getElementById('btn-logout-perfil')?.addEventListener('click', () => {
    signOut(auth).then(() => { window.location.href = '../../index.html'; });
});

// 14. DESCARGA MASIVA: Botón descargar todo.
document.getElementById('btn-descargar-todo')?.addEventListener('click', async () => {
    const divProgreso = document.getElementById('progreso-descarga');
    const barra = document.getElementById('barra-progreso');
    const texto = document.getElementById('texto-progreso');
    if (!confirm("¿Descargar todos los cantos?")) return;
    try {
        divProgreso.style.display = "block";
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();
        const cache = await caches.open('cantos-cache-v2.08');
        for (let i = 0; i < cantos.length; i++) {
            const url = `src/css/pg/${cantos[i].id}.css`;
            const res = await fetch(url);
            if(res.ok) await cache.put(url, res);
            let porc = Math.round(((i + 1) / cantos.length) * 100);
            barra.value = porc; texto.innerText = `Sincronizando: ${porc}%`;
            await new Promise(r => setTimeout(r, 20));
        }
        alert("Sincronización terminada.");
    } catch (e) { alert("Error masivo."); }
    finally { divProgreso.style.display = "none"; }
});

// 15. EXPORTAR RESPALDO: Descarga el LocalStorage a JSON (Global).
window.exportarDatosLocales = function() {
    let datosExportar = {};
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        if (clave.startsWith('data-')) {
            datosExportar[clave] = JSON.parse(localStorage.getItem(clave));
        }
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datosExportar, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "mis_cantos_respaldo.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};





/*
Imports y Globables.
Auth y Arranque (Funciones 1 y 2).
Lógica de Tabla y Datos (Funciones 3, 4, 5 y 6).
Funciones Globales (Window) (Funciones 7, 8, 9 y 15) -> Estas son las que activan los botones.
Auxiliares y Eventos de Botón (Funciones 10 a 14). 
*/