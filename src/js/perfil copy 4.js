import { auth, db } from './firebase-auth.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES GLOBALES ---
let etapaGuardada = null;
const CODIGO_ADMIN_SECRETO = "RE77"; 

// --- 1. INICIALIZACIÓN AL CARGAR ---
document.addEventListener('DOMContentLoaded', async () => {
    llenarComunidades();
    await cargarPaisesEIP();
});

// --- 2. CONTROL DE SESIÓN Y CARGA DE DATOS ---
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Cargar datos del perfil del usuario
        const docRef = doc(db, "usuarios", user.uid, "perfil", "config");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById('userCountry').value = data.pais || "";
            document.getElementById('userParroquia').value = data.parroquia || "";
            document.getElementById('userComunidad').value = data.comunidad || 1;
            document.getElementById('userStep').value = data.etapa || 0;
            etapaGuardada = data.etapa;
        }
        
        // Renderizar la tabla de cantos (Puntos 1-6)
        await renderizarTablaCantos();
    } else {
        // Redirigir si no hay sesión activa
        setTimeout(() => { window.location.href = "index.html"; }, 1500);
    }
});

// --- 3. FUNCIONES DE APOYO (PAÍS E IP) ---
function llenarComunidades() {
    const select = document.getElementById('userComunidad');
    if (!select) return;
    for (let i = 1; i <= 73; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = `Comunidad ${i}`;
        select.appendChild(opt);
    }
}

async function cargarPaisesEIP() {
    const inputPais = document.getElementById('userCountry');
    const datalist = document.getElementById('paisesList');
    if(!inputPais) return;

    try {
        const res = await fetch('src/data/paises.json');
        const paises = await res.json();
        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre;
            datalist.appendChild(opt);
        });

        // Autodetectar por IP si el campo está vacío
        if (!inputPais.value) {
            const resIp = await fetch('https://ipapi.co/json/');
            const dataIp = await resIp.json();
            if (dataIp.country_name) inputPais.value = dataIp.country_name;
        }
    } catch (e) { console.error("Error en Países/IP:", e); }
}

// --- 4. RENDERIZADO DE LA TABLA DE CANTOS (LOS 6 PUNTOS) ---
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        const response = await fetch('src/data/indicecantos.json'); 
        const cantos = await response.json();
        const cache = await caches.open('cantos-cache-v2.08');

        let html = `
            <table class="tabla-gestion">
                <thead>
                    <tr>
                        <th>Canto</th>
                        <th>Offline</th>
                        <th>Uso</th>
                        <th>Cejilla (Orig/Tu)</th>
                        <th>Acorde (Orig/Tu)</th>
                    </tr>
                </thead>
                <tbody>`;

        for (const canto of cantos) {
            // Punto 1: Verificar si está en caché
            const urlCanto = `src/css/pg/${canto.id}.css`;
            const estaCargado = await cache.match(urlCanto);

            // Puntos 4 y 6: Obtener datos del cantor desde Firebase
            const tuCejilla = await obtenerDatoNube(canto.id, 'cejillas') || '-';
            const tuAcorde = await obtenerDatoNube(canto.id, 'transportes') || '-';
            const ultimaVez = await obtenerDatoNube(canto.id, 'historial_uso') || 'Nunca';

            html += `
                <tr>
                    <td style="text-align:left;"><b>${canto.titulo}</b></td>
                    <td>
                        <input type="checkbox" ${estaCargado ? 'checked' : ''} 
                            onchange="gestionarMemoria('${canto.id}', this.checked)">
                    </td>
                    <td>
                        <span class="fecha-link" onclick="abrirCalendario('${canto.id}')">
                            ${ultimaVez} 📅
                        </span>
                    </td>
                    <td>${canto.cejilla || 0} / <span class="tu-dato">${tuCejilla}</span></td>
                    <td>${canto.acorde || 'N/A'} / <span class="tu-dato">${tuAcorde}</span></td>
                </tr>`;
        }
        html += `</tbody></table>`;
        contenedor.innerHTML = html;
    } catch (e) { 
        contenedor.innerHTML = "<p>Error al cargar el índice ligero.</p>"; 
    }
}

// Helper para traer datos específicos de Firebase
async function obtenerDatoNube(cantoId, coleccion) {
    if (!auth.currentUser) return null;
    const docRef = doc(db, "usuarios", auth.currentUser.uid, coleccion, cantoId);
    const snap = await getDoc(docRef);
    return snap.exists() ? snap.data().valor : null;
}

// --- 5. LÓGICA DE CACHÉ (PUNTO 1) ---
window.gestionarMemoria = async (cantoId, cargar) => {
    const cache = await caches.open('cantos-cache-v2.08');
    const url = `src/css/pg/${cantoId}.css`;

    if (cargar) {
        try {
            await cache.add(url);
            alert("Canto guardado para uso offline.");
        } catch (e) { alert("Error al descargar."); }
    } else {
        // Confirmación antes de liberar (Punto 1)
        if (confirm("¿Estás seguro de liberar este canto? Se borrará de la memoria offline.")) {
            await cache.delete(url);
        } else {
            renderizarTablaCantos(); // Resetear el checkbox
        }
    }
};

// --- 6. GUARDAR PERFIL Y LOGOUT ---
document.getElementById('btnSave')?.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;

    const nuevaEtapa = document.getElementById('userStep').value;
    // Protección de etapa por código admin
    if (etapaGuardada !== null && nuevaEtapa !== etapaGuardada) {
        if (document.getElementById('adminCode').value !== CODIGO_ADMIN_SECRETO) {
            alert("Código de administrador incorrecto para cambiar de etapa.");
            return;
        }
    }

    const perfilData = {
        pais: document.getElementById('userCountry').value,
        parroquia: document.getElementById('userParroquia').value,
        comunidad: document.getElementById('userComunidad').value,
        etapa: nuevaEtapa,
        ultimaActualizacion: new Date()
    };

    try {
        await setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), perfilData);
        alert("¡Perfil actualizado con éxito!");
        etapaGuardada = nuevaEtapa;
    } catch (e) { alert("Error al guardar en la nube."); }
});

const btnLogout = document.getElementById('btn-logout-perfil');
if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        if (confirm("¿Quieres cerrar la sesión?")) {
            signOut(auth).then(() => { window.location.href = 'index.html'; });
        }
    });
}

// Placeholder para la función del calendario (Punto 2)
window.abrirCalendario = (cantoId) => {
    alert("Función de calendario para: " + cantoId + ". Aquí se mostrarán las fechas guardadas en Firebase.");
    // Aquí integraremos el despliegue del modal con los días en negrita
};