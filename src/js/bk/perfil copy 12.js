import { auth, db } from './firebase-auth.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES GLOBALES ---
let etapaGuardada = null;
const CODIGO_ADMIN_SECRETO = "RE77"; 


// Mapa de transporte para cantos que tienen como base La m (Original = 0)
const MAPA_ACORDES = {
    "0": "La m",
    "1": "Si b m",
    "2": "Si m",
    "3": "Do m",
    "4": "Do# m",
    "5": "Re m",
    "6": "Re# m",
    "7": "Mi m",
    "8": "Fa m",
    "9": "Fa# m",
    "10": "Sol m",
    "11": "Sol# m"
};

// 1. INICIALIZACIÓN: Llena comunidades y países al cargar el DOM.
document.addEventListener('DOMContentLoaded', async () => {
    llenarComunidades();
    await cargarPaisesEIP();

    // NUEVO: Recuperar la preferencia del switch del teléfono
    const pref = localStorage.getItem('preferencia_sync');
    const toggle = document.getElementById('syncToggle');
    if (toggle) {
        // Si no hay preferencia guardada, por defecto lo ponemos en TRUE (encendido)
        toggle.checked = (pref === null) ? true : (pref === 'true');
    }
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

// 3. RENDERIZADO DE TABLA: Dibuja el buscador (100%) y la estructura de la tabla
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();

        // Buscador superior: Ahora con ancho al 100% y sin límites de píxeles
        let html = `
            <div class="buscador-container" style="position: relative; width: 100%; margin-bottom: 15px;">
                <input id="inputBuscador" type="text" placeholder="🔍 Buscar canto..." 
                       oninput="window.filtrarCantos()" 
                       style="width:100%; padding:10px 35px 10px 10px; border-radius:8px; border:1px solid #ccc; box-sizing: border-box;">
                <button id="btnLimpiarBuscador" onclick="window.limpiarBuscador()" 
                        style="position:absolute; right:10px; top:50%; transform: translateY(-50%); display:none; border:none; background:transparent; font-size:20px; cursor:pointer; color:#999; font-weight:bold;">×</button>
            </div>
            <table class="tabla-gestion" id="tablaCantos">
                <thead>
                    <tr>
                        <th>Canto</th>
                        <th>Estado / Descarga</th>
                        <th>Uso</th>
                        <th>Cejilla (Or/Tu)</th>
                        <th>Acorde (Or/Tu)</th>
                    </tr>
                </thead>
                <tbody id="cuerpo-tabla-perfil">`;

        cantos.forEach(canto => {
            // Ruta corregida: src/index.html para navegar desde la raíz
            const enlaceCanto = `src/index.html?canto=${canto.id}`;
            
            html += `
                <tr class="fila-canto" id="fila-${canto.id}">
                    <td style="text-align:left;">
                        <a href="${enlaceCanto}" style="text-decoration:none; color:inherit; font-weight:bold;">
                            ${canto.titulo}
                        </a>
                    </td>
                    <td id="status-${canto.id}">⌛</td>
                    <td id="uso-${canto.id}">--- 📅</td>
                    <td>${canto.cejilla ?? 0} / <b id="cejilla-tu-${canto.id}" style="color: #bc0009;"></b></td>
                    <td>${canto.acorde ?? 'N/A'} / <b id="acorde-tu-${canto.id}" style="color: #bc0009;"></b></td>
                </tr>`;
        });

        html += `</tbody></table>`;
        contenedor.innerHTML = html;

        // Inicia la carga de datos local/remota (Función 4)
        completarDatosLentamente(cantos);

    } catch (e) {
        console.error("Error en tabla:", e);
        contenedor.innerHTML = `<p style="text-align:center; color:#bc0009;">Error cargando la base de datos.</p>`;
    }
}


// 4: COMPLETAR DATOS: El equilibrio perfecto entre velocidad y ahorro
async function completarDatosLentamente(cantos) {
    const user = auth.currentUser;
    if (!user) return;

    const cache = await caches.open('cantos-cache-v2.08');
    
    // 1. Detectamos el estado del interruptor de sincronización
    const syncToggle = document.getElementById('syncToggle');
    const syncActiva = syncToggle ? syncToggle.checked : true;

    // PROCESO 1: Carga instantánea desde el almacenamiento local (Caché y LocalStorage)
    const promesasLocales = cantos.map(async (canto) => {
        // A. Verificar estado de descarga (Online/Offline) en el Service Worker
        const urlCanto = `src/css/pg/${canto.id}.css`;
        const estaCargado = await cache.match(urlCanto);
        const celdaStatus = document.getElementById(`status-${canto.id}`);
        
        if (celdaStatus) {
            const iconoEstado = estaCargado 
                ? '<span style="color: #28a745;">✅ Online</span>' 
                : '<span style="color: #ff0000;">❌ Offline</span>';
            
            celdaStatus.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; justify-content: center;">
                    ${iconoEstado}
                    <input type="checkbox" ${estaCargado ? 'checked' : ''} 
                           onchange="window.gestionarMemoria('${canto.id}', this.checked)">
                </div>`;
        }

        // B. Cargar datos de acordes/cejilla guardados en LocalStorage (Escudo)
        const localData = localStorage.getItem(`data-${canto.id}`);
        if (localData) {
            // Pintamos inmediatamente lo que ya conocemos
            inyectarDatosEnTabla(canto.id, JSON.parse(localData), true);
        }
        
        return { id: canto.id, tieneLocal: !!localData };
    });

    // Esperamos a que la tabla se llene con los datos locales (es casi instantáneo)
    const resultados = await Promise.all(promesasLocales);

    // PROCESO 2: Sincronización con la nube (Solo si el switch está ON)
    if (syncActiva) {
        for (const res of resultados) {
            await obtenerDatosExtraFirebase(res.id, user.uid);
            
            // Pausa de cortesía para no saturar la cuota de lectura de Firebase
            await new Promise(r => setTimeout(r, 20)); 
        }
    }
}


// 5. INYECTAR DATOS: Blindada para que no falle la cejilla ni el acorde
function inyectarDatosEnTabla(cantoId, data, esLocal = false) {
    const elCej = document.getElementById(`cejilla-tu-${cantoId}`);
    const elAco = document.getElementById(`acorde-tu-${cantoId}`);
    const elUso = document.getElementById(`uso-${cantoId}`);

    if (elCej) {
        const valorCej = data.cejilla;
        elCej.innerText = (valorCej == "0" || !valorCej) ? "-" : valorCej;
    }
    
    if (elAco) {
        const cords = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
        const t = parseInt(data.acorde);
        if (isNaN(t) || t === 0) {
            elAco.innerHTML = `- ${esLocal ? '<span style="color: #28a745; font-size: 0.8em;">●</span>' : ''}`;
        } else {
            const posicionFinal = (9 + t) % 12;
            const notaFinal = cords[posicionFinal];
            elAco.innerHTML = `${notaFinal} m ${esLocal ? '<span style="color: #28a745; font-size: 0.8em;">●</span>' : ''}`;
        }
    }

// 5.1 --- FECHA DE USO ---
    if (elUso && data.uso) {
        elUso.innerHTML = `
            <span class="fecha-link" style="cursor:pointer; color: #007bff; font-weight: bold;" 
                  onclick="window.abrirCalendario('${cantoId}')">
                ${data.uso} 📅
            </span>`;
    }
};
// <--- CIERRE CORRECTO DE FUNCIÓN 5


// 6: OBTENER FIREBASE: Unificado para leer campo 'valor'
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
        const { getDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        const [docCej, docTra, docHist] = await Promise.all([
            getDoc(doc(db, "usuarios", uid, "cejilla", cantoId)),      
            getDoc(doc(db, "usuarios", uid, "transporte", cantoId)),   
            getDoc(doc(db, "usuarios", uid, "transportacion", cantoId)) 
        ]);

        const datos = {};
        if (docCej.exists()) datos.cejilla = docCej.data().valor;
        if (docTra.exists()) datos.acorde = docTra.data().valor;
        if (docHist.exists()) {
            const d = docHist.data();
            if (d.valor) {
                const f = d.valor.toDate ? d.valor.toDate() : new Date(d.valor);
                datos.uso = f.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }); 
            }
        }

        if (Object.keys(datos).length > 0) {
            inyectarDatosEnTabla(cantoId, datos, false);
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datos));
        }
    } catch (e) { console.warn("Error en Sección 6:", e); }
}

// FINAL DE LA SECCION 6


// 7. TOGGLE SECTIONS: Abre/Cierra secciones y gira la flecha (collapsed)
window.toggleSection = function(sectionId, wrapperId) {
    const section = document.getElementById(sectionId);
    const wrapper = document.getElementById(wrapperId);
    
    if (section && wrapper) {
        // Alternamos la clase collapsed (para la flecha en CSS)
        const isCollapsed = wrapper.classList.toggle('collapsed');
        
        // Usamos tu clase cfg-close para ocultar/mostrar el contenido
        if (isCollapsed) {
            section.classList.add('cfg-close');
        } else {
            section.classList.remove('cfg-close');
        }
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

// 13. LOGOUT CON CONFIRMACIÓN
document.getElementById('btn-logout-perfil')?.addEventListener('click', () => {
    const confirmar = confirm("¿Deseas Cerrar sesión?\n\nAl cerrar sesión, serás llevado a la página de inicio.");
    if (confirmar) {
        signOut(auth).then(() => { 
            window.location.href = '../../index.html'; 
        }).catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
    }
});

// 14: DESCARGA MASIVA: Botón descargar todo con reporte final
document.getElementById('btn-descargar-todo')?.addEventListener('click', async () => {
    const divProgreso = document.getElementById('progreso-descarga');
    const barra = document.getElementById('barra-progreso');
    const texto = document.getElementById('texto-progreso');
    
    if (!confirm("¿Descargar todos los cantos para uso offline?")) return;

    // Contadores para el resumen
    let total = 0;
    let descargados = 0;
    let yaExistian = 0;
    let errores = 0;

    try {
        divProgreso.style.display = "block";
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();
        total = cantos.length;
        
        const cache = await caches.open('cantos-cache-v2.08');

        for (let i = 0; i < total; i++) {
            const url = `src/css/pg/${cantos[i].id}.css`;
            
            // Verificamos si ya existe en el caché
            const coincidencia = await cache.match(url);
            
            if (coincidencia) {
                yaExistian++;
            } else {
                try {
                    const res = await fetch(url);
                    if (res.ok) {
                        await cache.put(url, res);
                        descargados++;
                    } else {
                        errores++;
                    }
                } catch (e) {
                    errores++;
                }
            }

            // Actualización visual de la barra
            let porc = Math.round(((i + 1) / total) * 100);
            barra.value = porc; 
            texto.innerText = `Procesando: ${i + 1} de ${total} (${porc}%)`;
            
            // Pequeña pausa para no bloquear el navegador
            await new Promise(r => setTimeout(r, 20));
        }

        // REPORTE FINAL
        alert(
            `✅ Sincronización Terminada:\n\n` +
            `• Cantos procesados: ${total}\n` +
            `• Cantos en dispositivo: ${yaExistian}\n` +
            `• Cantos Descargados: ${descargados}\n` +
            `• Cantos sin descargar: ${errores}`
        );

        // Refrescamos la tabla para que los colores ✅ y ❌ se actualicen
        renderizarTablaCantos();

    } catch (e) { 
        alert("Error crítico durante la descarga masiva."); 
        console.error(e);
    } finally { 
        divProgreso.style.display = "none"; 
    }
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

// 16. FILTRADO INTELIGENTE: Ignora acentos, espacios, comas y símbolos
window.filtrarCantos = function() {
    const input = document.getElementById('inputBuscador');
    const btnLimpiar = document.getElementById('btnLimpiarBuscador');
    if (!input) return;
    
    // Función auxiliar para "limpiar" el texto al máximo
    const superNormalizar = (texto) => {
        return texto.toLowerCase()
                    .normalize("NFD") // Descompone caracteres con acentos
                    .replace(/[\u0300-\u036f]/g, "") // Quita los acentos
                    .replace(/[^a-z0-9]/g, ""); // Quita espacios, comas, puntos y símbolos
    };

    const filtro = superNormalizar(input.value);
    const filas = document.getElementsByClassName('fila-canto');

    // Mostrar/ocultar la 'X' de limpieza
    if (btnLimpiar) {
        btnLimpiar.style.display = input.value.length > 0 ? "block" : "none";
    }

    for (let i = 0; i < filas.length; i++) {
        const celdaTitulo = filas[i].getElementsByTagName('td')[0];
        if (celdaTitulo) {
            // Normalizamos el título del canto de la misma forma
            const textoCanto = superNormalizar(celdaTitulo.textContent || celdaTitulo.innerText);
            
            // Si el título normalizado contiene el filtro normalizado, mostramos la fila
            if (textoCanto.indexOf(filtro) > -1) {
                filas[i].style.display = "";
            } else {
                filas[i].style.display = "none";
            }
        }
    }
};

// 17. LIMPIAR BUSCADOR: Borra el texto y restablece la tabla
window.limpiarBuscador = function() {
    const input = document.getElementById('inputBuscador');
    if (input) {
        input.value = "";
        window.filtrarCantos(); // Al filtrar vacío, mostrará todo de nuevo
        input.focus();
    }
};


/*
Imports y Globables.
Auth y Arranque (Funciones 1 y 2).
Lógica de Tabla y Datos (Funciones 3, 4, 5 y 6).
Funciones Globales (Window) (Funciones 7, 8, 9 y 15) -> Estas son las que activan los botones.
Auxiliares y Eventos de Botón (Funciones 10 a 14). 
*/


// 18. Guardar preferencia y forzar refresco si se activa
document.getElementById('syncToggle').addEventListener('change', (e) => {
    const activa = e.target.checked;
    localStorage.setItem('preferencia_sync', activa);
    
    if (activa) {
        // Al activar, borramos solo los datos de los cantos para refrescar desde Firebase
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const clave = localStorage.key(i);
            if (clave.startsWith('data-')) {
                localStorage.removeItem(clave);
            }
        }
        // Volvemos a renderizar para que la Función 4 pida todo de nuevo
        renderizarTablaCantos();
    }
});


// 19: REGISTRO DE CAMBIO (Escritura con Historial)
async function guardarCambioTransporte(cantoId, nuevoValor) {
    const user = auth.currentUser;
    if (!user) return;
    try {
        const ahora = new Date();
        const fechaId = ahora.getTime().toString(); 

        // A. Guardar Tono
        const refTransporte = doc(db, "usuarios", user.uid, "transporte", cantoId);
        await setDoc(refTransporte, { valor: nuevoValor }, { merge: true });

        // B. Guardar Última Fecha (Raíz)
        const refFecha = doc(db, "usuarios", user.uid, "transportacion", cantoId);
        await setDoc(refFecha, { valor: ahora }, { merge: true });

        // C. Guardar en HISTORIAL (Subcolección para el calendario)
        const refHist = doc(db, "usuarios", user.uid, "transportacion", cantoId, "historial", fechaId);
        await setDoc(refHist, { valor: ahora }, { merge: true });

        console.log("✅ Cambio y punto de historial guardados correctamente.");
    } catch (error) { 
        console.error("Error al guardar transporte:", error); 
    }
}

// --- 20: SISTEMA DE HISTORIAL VISUAL (NAVEGABLE) ---

let fechasHistorialActivas = [];
let mesVisualizado = new Date().getMonth();
let añoVisualizado = new Date().getFullYear();
let totalRegistrosCanto = 0; 

window.abrirCalendario = async function(cantoId) {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const { collection, getDocs, doc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        
        fechasHistorialActivas = [];
        totalRegistrosCanto = 0;

        // 1. LEER HISTORIAL (Subcolección)
        const refHistorial = collection(db, "usuarios", user.uid, "transportacion", cantoId, "historial");
        const snapshot = await getDocs(refHistorial);
        
        snapshot.forEach(docSnap => {
            const d = docSnap.data().valor;
            if (d) {
                const f = d.toDate ? d.toDate() : new Date(d);
                fechasHistorialActivas.push(`${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`);
                totalRegistrosCanto++; 
            }
        });

        // 2. LEER RAÍZ (Fecha antigua / ultimaActualizacion)
        const refRaiz = doc(db, "usuarios", user.uid, "transportacion", cantoId);
        const docRaiz = await getDoc(refRaiz);
        
        if (docRaiz.exists()) {
            const data = docRaiz.data();
            const fechaAntigua = data.valor || data.ultimaActualizacion;
            
            if (fechaAntigua) {
                const f = fechaAntigua.toDate ? fechaAntigua.toDate() : new Date(fechaAntigua);
                const claveAntigua = `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`;
                
                if (!fechasHistorialActivas.includes(claveAntigua)) {
                    fechasHistorialActivas.push(claveAntigua);
                    totalRegistrosCanto++; 
                }
            }
        }

        mesVisualizado = new Date().getMonth();
        añoVisualizado = new Date().getFullYear();

        let modal = document.getElementById('calendar-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'calendar-modal';
            modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:999999; display:flex; align-items:center; justify-content:center; font-family: sans-serif;";
            document.body.appendChild(modal);
        }

        document.addEventListener('keydown', manejarEscape);
        actualizarVistaCalendario();

    } catch (e) { console.error("Error historial:", e); }
};

// 20.2: NAVEGACIÓN DE MESES
window.cambiarMes = function(direccion) {
    mesVisualizado += direccion;
    if (mesVisualizado < 0) { mesVisualizado = 11; añoVisualizado--; }
    if (mesVisualizado > 11) { mesVisualizado = 0; añoVisualizado++; }
    actualizarVistaCalendario();
};

// 20.3: RENDERIZADO DEL HTML (UNIFICADO)
function actualizarVistaCalendario() {
    const modal = document.getElementById('calendar-modal');
    const nombreMes = new Date(añoVisualizado, mesVisualizado).toLocaleString('es-ES', { month: 'long' }).toUpperCase();

    modal.innerHTML = `
        <div id="calendar-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center;">
            <div id="calendar-content" style="background:white; padding:20px; border-radius:15px; width:300px; text-align:center; position:relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                
                <button onclick="cerrarCalendario()" class="xclose">&times;</button>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <button onclick="cambiarMes(-1)" style="border:none; background:#f0f0f0; border-radius:5px; padding:5px 10px; cursor:pointer; font-weight:bold;">&lt;</button>
                    <h3 style="margin:0; font-size:1em; color:#333;">${nombreMes} ${añoVisualizado}</h3>
                    <button onclick="cambiarMes(1)" style="border:none; background:#f0f0f0; border-radius:5px; padding:5px 10px; cursor:pointer; font-weight:bold;">&gt;</button>
                </div>

                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; background: #f9f9f9; padding: 10px; border-radius: 10px;">
                    ${generarGridNavegable(fechasHistorialActivas, mesVisualizado, añoVisualizado)}
                </div>
                
                <div style="margin-top:20px; border-top: 1px solid #eee; padding-top:15px;">
                    <p style="margin:0; font-size:13px; color:#555; font-weight: 500;">
                        Has transportado este canto <span style="color:#d4af37; font-weight:bold; font-size:15px;">${totalRegistrosCanto}</span> veces
                    </p>
                    <p style="margin-top:8px; font-size:10px; color:#bbb;">Los recuadros indican los días de actividad.</p>
                </div>
            </div>
        </div>`;

    document.getElementById('calendar-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'calendar-overlay') cerrarCalendario();
    });
}

// 20.4: CIERRE Y LIMPIEZA
window.cerrarCalendario = function() {
    const modal = document.getElementById('calendar-modal');
    if (modal) modal.remove();
    document.removeEventListener('keydown', manejarEscape);
};

function manejarEscape(e) {
    if (e.key === "Escape") cerrarCalendario();
}

// 20.5: LÓGICA DEL GRID
function generarGridNavegable(fechasActivas, mes, año) {
    const ultimoDia = new Date(año, mes + 1, 0).getDate();
    const primerDiaSemana = new Date(año, mes, 1).getDay();
    let html = "";

    ['D','L','M','M','J','V','S'].forEach(d => html += `<b style="font-size:0.7em; color:#bbb;">${d}</b>`);

    for (let e = 0; e < primerDiaSemana; e++) html += `<div></div>`;

    for (let i = 1; i <= ultimoDia; i++) {
        const claveActual = `${año}-${mes + 1}-${i}`;
        const activo = fechasActivas.includes(claveActual);
        
        const estilo = activo 
            ? "background:#d4af37; color:white; font-weight:bold; border-radius:4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);" 
            : "color:#444;";
            
        html += `<div style="padding:5px; font-size:0.9em; ${estilo}">${i}</div>`;
    }
    return html;
}