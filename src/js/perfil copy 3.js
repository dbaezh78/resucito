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
    // La tabla de cantos se carga después de que Firebase confirma el usuario
});

// --- 2. GESTIÓN DE USUARIO Y FIREBASE ---
auth.onAuthStateChanged(async (user) => {
    if (user) {
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
        // Una vez identificado el usuario, cargamos su tabla de cantos
        await renderizarTablaCantos();
    } else {
        // Si no hay sesión, mandamos al index después de un momento
        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    }
});

// --- 3. PAÍS (JSON + IP) Y COMUNIDADES ---
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
    
    try {
        const res = await fetch('src/data/paises.json');
        const paises = await res.json();
        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre;
            datalist.appendChild(opt);
        });

        // Solo detectamos IP si el campo está vacío (primera vez)
        if (!inputPais.value) {
            const resIp = await fetch('https://ipapi.co/json/');
            const dataIp = await resIp.json();
            if (dataIp.country_name) inputPais.value = dataIp.country_name;
        }
    } catch (e) { console.error("Error países/IP:", e); }
}

// --- 4. GESTIÓN DE TABLA DE CANTOS (Puntos 1-6) ---
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    try {
        const response = await fetch('src/data/find.json');
        const cantos = await response.json();
        const cache = await caches.open('cantos-cache-v2.08');

        let html = `<table class="tabla-gestion">
            <thead>
                <tr>
                    <th>Canto</th>
                    <th>Offline</th>
                    <th>Cejilla (Orig/Tuya)</th>
                    <th>Acorde (Orig/Tuyo)</th>
                </tr>
            </thead>
            <tbody>`;

        for (const canto of cantos) {
            const request = new Request(`src/css/pg/${canto.id}.css`);
            const responseCache = await cache.match(request);
            const estaCargado = !!responseCache;

            // Consultar datos del usuario en Firebase para la tabla
            const tuCejilla = await obtenerDatoUsuario(canto.id, 'cejillas') || '-';
            const tuAcorde = await obtenerDatoUsuario(canto.id, 'transportes') || '-';

            html += `
                <tr>
                    <td style="text-align:left;">${canto.titulo}</td>
                    <td>
                        <input type="checkbox" ${estaCargado ? 'checked' : ''} 
                            onchange="alternarCache('${canto.id}', this.checked)">
                    </td>
                    <td>${canto.cejilla || 0} / <span class="tu-dato">${tuCejilla}</span></td>
                    <td>${canto.acorde || 'N/A'} / <span class="tu-dato">${tuAcorde}</span></td>
                </tr>`;
        }
        html += `</tbody></table>`;
        contenedor.innerHTML = html;
    } catch (e) { contenedor.innerHTML = "<p>Error al cargar cantos.</p>"; }
}

// Helper para obtener datos individuales de la nube
async function obtenerDatoUsuario(cantoId, tipo) {
    if (!auth.currentUser) return null;
    const docRef = doc(db, "usuarios", auth.currentUser.uid, tipo, cantoId);
    const snap = await getDoc(docRef);
    return snap.exists() ? snap.data().valor : null;
}

// --- 5. LOGICA DE CACHÉ (CARGAR/LIBERAR) ---
window.alternarCache = async (cantoId, cargar) => {
    const cache = await caches.open('cantos-cache-v2.08');
    const url = `src/css/pg/${cantoId}.css`;

    if (cargar) {
        try {
            await cache.add(url);
            alert("Canto descargado para uso sin conexión.");
        } catch (e) { alert("Error al descargar. Revisa tu internet."); }
    } else {
        if (confirm("¿Quieres liberar este canto de la memoria? Solo podrás verlo con internet.")) {
            await cache.delete(url);
        } else {
            renderizarTablaCantos(); // Recargar para resetear checkbox
        }
    }
};

// --- 6. GUARDAR PERFIL Y LOGOUT ---
document.getElementById('btnSave').addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;

    const nuevaEtapa = document.getElementById('userStep').value;
    if (etapaGuardada !== null && nuevaEtapa !== etapaGuardada) {
        if (document.getElementById('adminCode').value !== CODIGO_ADMIN_SECRETO) {
            alert("Código de administrador incorrecto.");
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
        alert("Perfil guardado correctamente.");
        etapaGuardada = nuevaEtapa;
    } catch (e) { alert("Error al guardar."); }
});

const btnLogout = document.getElementById('btn-logout-perfil');
if (btnLogout) {
    btnLogout.addEventListener('click', () => {
        if (confirm("¿La paz hermano, quieres cerrar la sesión de Google?")) {
            signOut(auth).then(() => { window.location.href = 'index.html'; });
        }
    });
}