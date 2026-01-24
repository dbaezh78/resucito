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
        
        // Renderizar la tabla con PRIORIDAD MÁXIMA
        await renderizarTablaCantos();
    } else {
        setTimeout(() => { window.location.href = "../../index.html"; }, 1500);
    }
});

// --- 3. RENDERIZADO DE TABLA PRIORITARIO ---
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        // Bloqueamos cualquier otra descarga para bajar el JSON primero
        const response = await fetch('src/data/indicecantos.json', { priority: 'high' });
        const cantos = await response.json();

        // PASO A: Pintar la estructura de la tabla de inmediato
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
                <tbody id="cuerpo-tabla-perfil">`;

        cantos.forEach(canto => {
            html += `
                <tr id="fila-${canto.id}">
                    <td style="text-align:left;">${canto.titulo}</td>
                    <td id="status-${canto.id}">⏳</td>
                    <td id="uso-${canto.id}">--- 📅</td>
                    <td>${canto.cejilla || 0} / <span id="cejilla-tu-${canto.id}">-</span></td>
                    <td>${canto.acorde || 'N/A'} / <span id="acorde-tu-${canto.id}">-</span></td>
                </tr>`;
        });
        html += `</tbody></table>`;
        
        // Mostrar tabla vacía para que el usuario no espere
        contenedor.innerHTML = html;

        // PASO B: Iniciar carga lenta de datos (Cache y Firebase)
        setTimeout(() => {
            completarDatosLentamente(cantos);
        }, 200);

    } catch (e) { 
        console.error("Error cargando índice:", e);
        contenedor.innerHTML = "<p>Error al cargar los datos. Revisa la conexión.</p>"; 
    }
}

// --- 4. CARGA LENTA (Lazy Load) ---
// Evita que el Service Worker sature el navegador
async function completarDatosLentamente(cantos) {
    const cache = await caches.open('cantos-cache-v2.08');
    
    for (const canto of cantos) {
        // 1. Verificar Cache (Offline)
        const urlCanto = `../../src/css/pg/${canto.id}.css`;
        const estaCargado = await cache.match(urlCanto);
        const celdaStatus = document.getElementById(`status-${canto.id}`);
        if (celdaStatus) {
            celdaStatus.innerHTML = `<input type="checkbox" ${estaCargado ? 'checked' : ''} 
                                     onchange="gestionarMemoria('${canto.id}', this.checked)">`;
        }

        // 2. Traer datos de Firebase (Cejillas, Acordes, Uso)
        // Lo hacemos de forma asíncrona para no bloquear el bucle
        obtenerDatosExtra(canto.id);

        // PAUSA: 60ms entre cada canto para dejar que el navegador respire
        await new Promise(res => setTimeout(res, 60));
    }
}

async function obtenerDatosExtra(cantoId) {
    const tuCejilla = await obtenerDatoNube(cantoId, 'cejillas') || '-';
    const tuAcorde = await obtenerDatoNube(cantoId, 'transportes') || '-';
    const ultimaVez = await obtenerDatoNube(cantoId, 'historial_uso') || '---';

    if(document.getElementById(`cejilla-tu-${cantoId}`)) document.getElementById(`cejilla-tu-${cantoId}`).innerText = tuCejilla;
    if(document.getElementById(`acorde-tu-${cantoId}`)) document.getElementById(`acorde-tu-${cantoId}`).innerText = tuAcorde;
    if(document.getElementById(`uso-${cantoId}`)) {
        document.getElementById(`uso-${cantoId}`).innerHTML = `
            <span class="fecha-link" onclick="abrirCalendario('${cantoId}')" style="cursor:pointer">
                ${ultimaVez} 📅
            </span>`;
    }
}

// --- 5. GESTIÓN DE CACHÉ INDIVIDUAL ---
window.gestionarMemoria = async (cantoId, cargar) => {
    const cache = await caches.open('cantos-cache-v2.08');
    const url = `../../src/css/pg/${cantoId}.css`;

    if (cargar) {
        try {
            await cache.add(url);
            alert("Cargado para uso offline.");
        } catch (e) { alert("Error al descargar archivo."); }
    } else {
        if (confirm("¿Quitar de la memoria del teléfono?")) {
            await cache.delete(url);
        } else {
            renderizarTablaCantos(); 
        }
    }
};

// --- 6. FUNCIONES AUXILIARES ---
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
    if(!inputPais) return;

    try {
        const res = await fetch('src/data/paises.json');
        const paises = await res.json();
        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre;
            datalist.appendChild(opt);
        });

        // Autodetección opcional
        if (!inputPais.value) {
            const resIp = await fetch('https://ipapi.co/json/'); 
            if (resIp.ok) {
                const dataIp = await resIp.json();
                inputPais.value = dataIp.country_name || "";
            }
        }
    } catch (e) { console.warn("Detección de país fallida u omitida."); }
}

// --- 7. EVENTOS Y MODAL ---
document.getElementById('btnSave')?.addEventListener('click', async () => {
    const user = auth.currentUser;
    if (!user) return;
    const nuevaEtapa = document.getElementById('userStep').value;
    
    const perfilData = {
        pais: document.getElementById('userCountry').value,
        parroquia: document.getElementById('userParroquia').value,
        comunidad: document.getElementById('userComunidad').value,
        etapa: nuevaEtapa,
        ultimaActualizacion: new Date()
    };

    try {
        await setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), perfilData);
        alert("Perfil actualizado.");
    } catch (e) { alert("Error al guardar."); }
});

window.abrirCalendario = async (cantoId) => {
    const modal = document.getElementById('modalCalendario');
    const titulo = document.getElementById('nombreCantoCalendario');
    const cuerpo = document.getElementById('calendarioDinamico');
    
    modal.style.display = "block";
    titulo.innerText = "Historial de uso: " + cantoId;
    
    const hoy = new Date();
    const mes = hoy.getMonth();
    const año = hoy.getFullYear();
    const primerDia = new Date(año, mes, 1).getDay();
    const totalDias = new Date(año, mes + 1, 0).getDate();

    let tabla = `<table class="calendario-table"><tr>`;
    ['D','L','M','X','J','V','S'].forEach(d => tabla += `<th>${d}</th>`);
    tabla += `</tr><tr>`;

    for (let i = 0; i < primerDia; i++) tabla += `<td></td>`;
    for (let dia = 1; dia <= totalDias; dia++) {
        if ((dia + primerDia - 1) % 7 === 0) tabla += `</tr><tr>`;
        const esHoy = dia === hoy.getDate() ? 'class="dia-marcado"' : '';
        tabla += `<td ${esHoy}>${dia}</td>`;
    }
    tabla += `</tr></table>`;
    cuerpo.innerHTML = tabla;
};

document.getElementById('closeCalendario').onclick = () => {
    document.getElementById('modalCalendario').style.display = "none";
};

document.getElementById('btn-logout-perfil')?.addEventListener('click', () => {
    signOut(auth).then(() => { window.location.href = '../../index.html'; });
});


// --- 8. FUNCIÓN DE CARGA MASIVA (Al final del archivo) ---

document.getElementById('btn-descargar-todo')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-descargar-todo');
    const divProgreso = document.getElementById('progreso-descarga');
    const barra = document.getElementById('barra-progreso');
    const texto = document.getElementById('texto-progreso');

    if (!confirm("Esto descargará todos los cantos que falten para usarlos sin internet. ¿Continuar?")) return;

    try {
        btn.disabled = true;
        btn.innerText = "⏳ Procesando...";
        divProgreso.style.display = "block";
        
        // Reutilizamos la ruta que ya sabemos que funciona
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();
        const cache = await caches.open('cantos-cache-v2.08');
        
        let total = cantos.length;
        let procesados = 0;
        let nuevos = 0;
        let errores = 0;

        for (const canto of cantos) {
            const url = `src/css/pg/${canto.id}.css`;
            const existe = await cache.match(url);
            
            if (!existe) {
                try {
                    const res = await fetch(url);
                    if(res.ok) {
                        await cache.put(url, res);
                        nuevos++;
                    } else {
                        errores++;
                    }
                } catch (err) {
                    errores++;
                }
            }

            // Actualización de la barra
            procesados++;
            let porcentaje = Math.round((procesados / total) * 100);
            if(barra) barra.value = porcentaje;
            if(texto) texto.innerText = `Progreso: ${porcentaje}% (${procesados}/${total})`;

            // Pausa mínima para no colapsar el navegador
            await new Promise(res => setTimeout(res, 30));
        }

        alert(`Proceso terminado.\n✅ Nuevos descargados: ${nuevos}\n⚠️ No encontrados: ${errores}\n📦 Total en memoria: ${total - errores}`);
        
        // Refrescamos la tabla para que se vean los checks marcados
        renderizarTablaCantos();

    } catch (e) {
        console.error(e);
        alert("Error en la descarga masiva.");
    } finally {
        btn.disabled = false;
        btn.innerText = "📥 Descargar todo para uso Offline";
        divProgreso.style.display = "none";
    }
});