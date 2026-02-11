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

// 3. RENDERIZADO DE TABLA: Incluye buscador con botón de limpieza y enlaces
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();

        // Buscador superior: Fusionamos el diseño con la funcionalidad de limpieza
        let html = `
            <div class="buscador-container" style="margin-bottom: 15px; position: relative; width: 98%;">
                <input type="text" id="inputBuscador" placeholder="🔍 Buscar por nombre..." 
                       onkeyup="window.filtrarCantos()" 
                       style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ccc; padding-right: 35px; box-sizing: border-box;">
                <span id="btnLimpiarBuscador" onclick="window.limpiarBuscador()" 
                      style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #999; display: none; font-weight: bold; font-size: 1.2em;">
                    ×
                </span>
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
            // Ajustamos la ruta del enlace para que siempre funcione desde perfil
            const enlaceCanto = `src/index.html?canto=${canto.id}`;
            
            html += `
                <tr class="fila-canto" id="fila-${canto.id}">
                    <td style="text-align:left;">
                        <a href="${enlaceCanto}" target="_blank" style="text-decoration:none; color:inherit; font-weight:bold;">
                            ${canto.titulo}
                        </a>
                    </td>
                    <td id="status-${canto.id}">⌛</td>
                    <td id="uso-${canto.id}">--- 📅</td>
                    <td>
                        ${canto.cejilla ?? 0} / <b id="cejilla-tu-${canto.id}" style="color: #bc0009;">-</b>
                    </td>
                    <td>
                        ${canto.acorde ?? 'N/A'} / <b id="acorde-tu-${canto.id}" style="color: #bc0009;">-</b>
                    </td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
        `;

        contenedor.innerHTML = html;

        // Lanzamos la carga de datos (Firebase + LocalStorage)
        completarDatosLentamente(cantos);

    } catch (e) {
        console.error("Error en tabla:", e);
        contenedor.innerHTML = `<p style="text-align:center; color:#bc0009;">Error cargando la base de datos de cantos.</p>`;
    }
}

// 4. COMPLETAR DATOS: Carga ultra rápida (Caché + LocalStorage + Nube opcional)
async function completarDatosLentamente(cantos) {
    const user = auth.currentUser;
    if (!user) return;

    // Abrimos el caché una sola vez para todos los cantos
    const cache = await caches.open('cantos-cache-v2.08');
    
    // Verificamos si la sincronización está activa en tu nuevo switch
    const syncToggle = document.getElementById('syncToggle');
    const syncActiva = syncToggle ? syncToggle.checked : true;

    // PROCESO 1: Carga instantánea de lo que hay en el teléfono
    // Usamos map para que el navegador procese todos los cantos a la vez
    const promesasLocales = cantos.map(async (canto) => {
        // A. Revisar si el archivo CSS está en caché (✅/❌)
        const urlCanto = `src/css/pg/${canto.id}.css`;
        const estaCargado = await cache.match(urlCanto);
        const celdaStatus = document.getElementById(`status-${canto.id}`);
        
        if (celdaStatus) {
            const iconoEstado = estaCargado 
                ? '<span title="Disponible Offline" style="color: #28a745;">✅ Online</span>' 
                : '<span title="Solo Online" style="color: #ff0000;">❌ Offline</span>';
            
            celdaStatus.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; justify-content: center;">
                    ${iconoEstado}
                    <input type="checkbox" ${estaCargado ? 'checked' : ''} 
                           onchange="window.gestionarMemoria('${canto.id}', this.checked)">
                </div>`;
        }

        // B. Revisar si tenemos Acorde/Cejilla en LocalStorage
        const localData = localStorage.getItem(`data-${canto.id}`);
        if (localData) {
            // Si existe, lo pintamos de inmediato (Costo 0)
            inyectarDatosEnTabla(canto.id, JSON.parse(localData), true);
            return { id: canto.id, necesitaNube: false };
        }
        return { id: canto.id, necesitaNube: true };
    });

    // Esperamos a que todo lo local se pinte (esto es casi instantáneo)
    const resultados = await Promise.all(promesasLocales);

    // PROCESO 2: Solo si el usuario quiere sincronizar, vamos a la nube
    if (syncActiva) {
        for (const res of resultados) {
            if (res.necesitaNube) {
                // Solo pedimos a Firebase los que no teníamos guardados
                await obtenerDatosExtraFirebase(res.id, user.uid);
                // Pausa mínima de 15ms para no saturar la conexión
                await new Promise(r => setTimeout(r, 15)); 
            }
        }
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

// 6. OBTENER FIREBASE: Solo descarga si es necesario
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
        // Aquí puedes añadir una lógica para no pedir datos si acabas de pedirlos hace 5 minutos
        const [docCej, docTra] = await Promise.all([
            getDoc(doc(db, "usuarios", uid, "cejillas", cantoId)),
            getDoc(doc(db, "usuarios", uid, "transportes", cantoId))
        ]);

        const datos = {};
        if (docCej.exists()) datos.cejilla = docCej.data().valor;
        if (docTra.exists()) datos.acorde = docTra.data().valor;

        if (Object.keys(datos).length > 0) {
            inyectarDatosEnTabla(cantoId, datos, false);
            // Guardamos en local para que la próxima vez no haga falta pedirlo
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datos));
        }
    } catch (e) {
        if (e.code === 'resource-exhausted') {
            console.error("Cuota de Firebase agotada. Usando solo datos locales.");
            document.getElementById('syncToggle').checked = false; // Desactivamos por seguridad
        }
    }
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

// 14. DESCARGA MASIVA: Botón descargar todo con reporte final
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


// 18 Guardar preferencia del switch en el teléfono
document.getElementById('syncToggle').addEventListener('change', (e) => {
    localStorage.setItem('preferencia_sync', e.target.checked);
});

// Al cargar, recuperar la preferencia
const pref = localStorage.getItem('preferencia_sync');
if (pref !== null) {
    document.getElementById('syncToggle').checked = (pref === 'true');
} else {
    document.getElementById('syncToggle').checked = true; // Por defecto ON
}