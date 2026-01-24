import { auth, db } from './firebase-auth.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES GLOBALES ---
let etapaGuardada = null;
const CODIGO_ADMIN_SECRETO = "RE77"; 

// --- 1. INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', async () => {
    llenarComunidades();
    await cargarPaisesEIP();
});

// --- 2. CONTROL DE SESIÓN ---
auth.onAuthStateChanged(async (user) => {
    if (user) {
        // Cargar configuración de perfil
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
        
        // Renderizar la tabla usando el NUEVO índice ligero
        await renderizarTablaCantos();
    } else {
        setTimeout(() => { window.location.href = "index.html"; }, 1500);
    }
});

// --- 3. RENDERIZADO DE TABLA (Puntos 1-6) ---
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        // Usamos el archivo que acabas de subir
        const response = await fetch('/src/data/indicecantos.json', { priority: 'high' });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const cantos = await response.json();
        console.log("✅ JSON cargado. Ahora iniciaremos la gestión de archivos lentamente.");
        const cache = await caches.open('cantos-cache-v2.08');

        let html = `
            <table class="tabla-gestion">
                <thead>
                    <tr>
                        <th>Canto</th>
                        <th>Offline</th>
                        <th>Uso</th>
                        <th>Cejilla (Or/Tu)</th>
                        <th>Acorde (Or/Tu)</th>
                    </tr>
                </thead>
                <tbody>`;

        for (const canto of cantos) {
            const urlCanto = `/src/css/pg/${canto.id}.css`;
            const estaCargado = await cache.match(urlCanto);

            // Consultar datos del usuario en paralelo para no ralentizar
            const tuCejilla = await obtenerDatoNube(canto.id, 'cejillas') || '-';
            const tuAcorde = await obtenerDatoNube(canto.id, 'transportes') || '-';
            const ultimaVez = await obtenerDatoNube(canto.id, 'historial_uso') || '---';

            html += `
                <tr>
                    <td style="text-align:left;">${canto.titulo}</td>
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
        console.error("Error detallado:", e);
        contenedor.innerHTML = `<p style="color:red;">Error al cargar: ${e.message}</p>`;
    }
}

// --- 4. GESTIÓN DE CACHÉ INDIVIDUAL (Punto 1) ---
window.gestionarMemoria = async (cantoId, cargar) => {
    const cache = await caches.open('cantos-cache-v2.08');
    const url = `src/css/pg/${cantoId}.css`;

    if (cargar) {
        try {
            await cache.add(url);
            alert("Cargado en memoria offline.");
        } catch (e) { alert("Error de red al intentar descargar."); }
    } else {
        if (confirm("¿Liberar este canto? No podrás verlo sin internet.")) {
            await cache.delete(url);
        } else {
            renderizarTablaCantos(); // Resetear vista
        }
    }
};

// --- 5. FUNCIONES AUXILIARES ---
async function obtenerDatoNube(cantoId, coleccion) {
    if (!auth.currentUser) return null;
    try {
        const docRef = doc(db, "usuarios", auth.currentUser.uid, coleccion, cantoId);
        const snap = await getDoc(docRef);
        return snap.exists() ? snap.data().valor : null;
    } catch (e) { return null; }
}

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
    const btnDetectar = document.getElementById('btn-detectar-ip');

    // 1. Cargar siempre la lista de países (Independiente de la IP)
    try {
        const res = await fetch('/src/data/paises.json');
        const paises = await res.json();
        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre;
            datalist.appendChild(opt);
        });
    } catch (e) {
        console.error("No se pudo cargar la lista de países local.");
    }

    // 2. Función interna para detectar IP
    const detectarAhora = async (esManual = false) => {
        if (esManual) btnDetectar.innerText = "(Detectando...)";
        
        try {
            // Intentamos con ip-api (Plan A)
            const resIp = await fetch('http://ip-api.com/json/');
            if (resIp.ok) {
                const dataIp = await resIp.json();
                if (dataIp.country) {
                    inputPais.value = dataIp.country;
                    if (esManual) btnDetectar.innerText = "(Detectado ✅)";
                    return;
                }
            }
            throw new Error("Fallo ip-api");
        } catch (e) {
            // Plan B: Backup silencioso
            try {
                const resB = await fetch('https://ipwho.is/');
                const dataB = await resB.json();
                if (dataB.country) inputPais.value = dataB.country;
            } catch (err) {
                if (esManual) alert("No se pudo detectar la ubicación. Por favor, elígela manualmente.");
            }
        } finally {
            if (esManual && btnDetectar.innerText !== "(Detectado ✅)") {
                btnDetectar.innerText = "(Reintentar detección)";
            }
        }
    };

    // 3. Ejecución Opcional al Cargar
    // Solo intenta detectar si el campo está vacío y sin molestar al usuario
    if (!inputPais.value) {
        detectarAhora(false); 
    }

    // 4. Ejecución Manual (Al hacer clic en el texto)
    //btnDetectar.addEventListener('click', () => detectarAhora(true));
}

// --- 6. EVENTOS DE BOTONES ---
document.getElementById('btnSave')?.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;

    const nuevaEtapa = document.getElementById('userStep').value;
    if (etapaGuardada !== null && nuevaEtapa !== etapaGuardada) {
        if (document.getElementById('adminCode').value !== CODIGO_ADMIN_SECRETO) {
            alert("Código de administrador requerido.");
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
        alert("Sincronizado con la nube.");
        etapaGuardada = nuevaEtapa;
    } catch (e) { alert("Error al guardar."); }
});

document.getElementById('btn-logout-perfil')?.addEventListener('click', () => {
    if (confirm("¿Quieres cerrar la sesión?")) {
        signOut(auth).then(() => { window.location.href = 'index.html'; });
    }
});

window.abrirCalendario = (cantoId) => {
    alert("Historial de uso para: " + cantoId);
};

window.abrirCalendario = async (cantoId) => {
    const modal = document.getElementById('modalCalendario');
    const titulo = document.getElementById('nombreCantoCalendario');
    const cuerpo = document.getElementById('calendarioDinamico');
    
    modal.style.display = "block";
    titulo.innerText = "Historial de uso: " + cantoId;
    cuerpo.innerHTML = "Cargando fechas...";

    // Obtener todas las fechas guardadas (asumiendo que guardamos un array o la última)
    // Para simplificar, mostraremos un calendario del mes actual con el día de hoy marcado
    const hoy = new Date();
    const mes = hoy.getMonth();
    const año = hoy.getFullYear();
    
    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();

    let tabla = `<table class="calendario-table"><tr>`;
    const diasSemana = ['D','L','M','X','J','V','S'];
    diasSemana.forEach(d => tabla += `<th>${d}</th>`);
    tabla += `</tr><tr>`;

    for (let i = 0; i < primerDia; i++) tabla += `<td></td>`;

    for (let dia = 1; dia <= totalDias; dia++) {
        if ((dia + primerDia - 1) % 7 === 0) tabla += `</tr><tr>`;
        
        // Aquí es donde marcaríamos en negrita si el día coincide con el uso
        const esHoy = dia === hoy.getDate() ? 'class="dia-marcado"' : '';
        tabla += `<td ${esHoy}>${dia}</td>`;
    }
    
    tabla += `</tr></table>`;
    cuerpo.innerHTML = tabla;
};

// Cerrar modal
document.getElementById('closeCalendario').onclick = () => {
    document.getElementById('modalCalendario').style.display = "none";
};