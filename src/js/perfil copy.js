import { auth, db } from './firebase-auth.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// --- VARIABLES GLOBALES ---
let etapaGuardada = null;
const CODIGO_ADMIN_SECRETO = "RE77"; 
let ALMACEN_CANTOS = {};
window.cacheData = {}; 

window.indiceCantosGlobal = [];

// Cargamos el JSON de inmediato
fetch('src/data/indicecantos.json')
    .then(response => response.json())
    .then(data => {
        window.indiceCantosGlobal = data;
        console.log("✅ Base de datos de cantos cargada (JSON).");
        
        // Solo si el usuario ya está logueado, disparamos la sincronización
        if (auth.currentUser && typeof window.sincronizarTodoARam === 'function') {
            window.sincronizarTodoARam();
        }
    })
    .catch(err => console.error("❌ Error cargando el índice de cantos:", err));


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

// 1. INICIALIZACIÓN: Llena comunidades, países y CARGA LA RAM (ALMACEN_CANTOS)
document.addEventListener('DOMContentLoaded', async () => {
    llenarComunidades();
    await cargarPaisesEIP();

    // >>> NUEVO: LLENADO DE RAM DESDE LOCALSTORAGE <<<
    // Esto recorre tu "Escudo" y lo mete a la RAM de un solo golpe
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('data-')) {
            const cantoId = key.replace('data-', '');
            try {
                const localData = JSON.parse(localStorage.getItem(key));
                if (localData) {
                    ALMACEN_CANTOS[cantoId] = localData;
                }
            } catch (e) {
                console.error("Error cargando RAM inicial:", e);
            }
        }
    });

    // Recuperar la preferencia del switch del teléfono
    const pref = localStorage.getItem('preferencia_sync');
    const toggle = document.getElementById('syncToggle');
    if (toggle && pref !== null) {
        toggle.checked = (pref === 'true');
    }
});

// 2: OBSERVADOR AUTHENTICACION: Sincronización exacta con Firebase
auth.onAuthStateChanged(async (user) => {
    if (user) {
        console.log("Usuario detectado:", user.uid);    // aqui tenemos que poner que cargue el usuario del quien inicia session

        // 1. Cargamos países primero
        await cargarPaisesEIP();

        const docRef = doc(db, "usuarios", user.uid, "perfil", "config");
        
        try {
            const docSnap = await getDoc(docRef);
            
            // Referencias con IDs originales
            const selPais = document.getElementById('userCountry');
            const selParr = document.getElementById('userParroquia');
            const selComu = document.getElementById('userComunidad');
            const selStep = document.getElementById('userStep');

            if (docSnap.exists()) {
                const data = docSnap.data();
                
                // Asignación de Parroquia
                if (selParr) selParr.value = data.parroquia || "";

                // Asignación de Etapa
                if (selStep) {
                    selStep.value = data.etapa || "0";
                    etapaGuardada = parseInt(data.etapa) || 0;
                }

                // Sincronización de País y Comunidad
                if (selPais && data.pais) {
                    const intervalPais = setInterval(async () => {
                        if (selPais.options.length > 1) {
                            selPais.value = data.pais;
                            clearInterval(intervalPais);
                            
                            await llenarComunidades();

                            const intervalComu = setInterval(() => {
                                if (selComu.options.length > 1) {
                                    selComu.value = data.comunidad || "1";
                                    clearInterval(intervalComu);
                                }
                            }, 100);
                        }
                    }, 100);
                }
            }
        } catch (e) { 
            console.warn("Error en sincronía:", e); 
        }

        await renderizarTablaCantos();
    } else {
        setTimeout(() => { 
            if (window.location.pathname.includes('perfil.html')) {
                window.location.href = "../../index.html"; 
            }
        }, 1500);
    }
});// FIN 2. OBSERVADOR AUTHENTICACION


// 3: RENDERIZADO DE TABLA (Restaurada con Calendario y Estructura para Firebase)
async function renderizarTablaCantos() {
    const contenedor = document.getElementById('lista-cantos-gestion');
    if (!contenedor) return;

    try {
        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();

        let html = `
            <div class="buscador-container" style="position: relative; width: 100%; margin-bottom: 15px;">
                <input id="inputBuscador" type="text" placeholder="🔍 Buscar canto..." oninput="window.filtrarCantos()" 
                       style="width:100%; padding:10px 35px 10px 10px; border-radius:8px; border:1px solid #ccc; box-sizing: border-box;">
            </div>
            <table class="tabla-gestion" id="tablaCantos">
                <thead>
                    <tr>
                        <th>Canto</th>
                        <th>Valoración</th>
                        <th>Estado</th>
                        <th>Uso</th>
                        <th>Cejilla (Or/Tu)</th>
                        <th>Acorde (Or/Tu)</th>
                    </tr>
                </thead>
                <tbody id="cuerpo-tabla-perfil">`;

        cantos.forEach(canto => {
            // Buscamos en la RAM (por si ya cargó algo del LocalStorage)
            const datosRAM = ALMACEN_CANTOS[canto.id] || null;
            
            // Si hay RAM usamos el dato, si no, dejamos el espacio esperando
            const cejillaVisual = datosRAM ? (datosRAM.cejilla === "0" ? "-" : datosRAM.cejilla) : "..."; 
            const numAcorde = datosRAM ? String(datosRAM.acorde) : null;
            const acordeTexto = (numAcorde !== null && MAPA_ACORDES[numAcorde]) ? MAPA_ACORDES[numAcorde] : "";

            // Procesamos fecha para el Uso si existe en RAM
            let fechaTexto = "---";
            if (datosRAM && (datosRAM.fecha || datosRAM.valor)) {
                const fRaw = datosRAM.fecha || datosRAM.valor;
                const f = new Date(fRaw);
                if (!isNaN(f.getTime())) {
                    const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
                    fechaTexto = `${String(f.getDate()).padStart(2, '0')} ${meses[f.getMonth()]}`;
                }
            }

            const enlaceCanto = `src/index.html?canto=${canto.id}${numAcorde ? '&tonalidad='+numAcorde : ''}${datosRAM?.cejilla ? '&cejilla='+datosRAM.cejilla : ''}`;

            html += `
                <tr class="fila-canto" id="fila-${canto.id}">
                    <td style="text-align:left;">
                        <a href="${enlaceCanto}" id="enlace-${canto.id}" style="text-decoration:none; color:inherit; font-weight:bold;">
                            ${canto.titulo}
                        </a>
                    </td>
                    <td id="status-${canto.id}">⌛</td>
                    <td id="uso-${canto.id}">
                        ${fechaTexto} <span onclick="event.stopPropagation(); window.abrirCalendario('${canto.id}')" style="cursor:pointer; font-size:16px;">📅</span>
                    </td>
                    <td>${canto.cejilla ?? 0} / <b id="cejilla-tu-${canto.id}" style="color: #bc0009;">${cejillaVisual}</b></td>
                    <td>${canto.acorde ?? 'N/A'} / <b id="acorde-tu-${canto.id}" style="color: #bc0009;">${acordeTexto}</b></td>
                </tr>`;
        });

        html += `</tbody></table>`;
        contenedor.innerHTML = html;

        // Llamamos a la carga lenta para que Firebase rellene los huecos
        completarDatosLentamente(cantos);

    } catch (e) {
        console.error("Error en tabla:", e);
    }
}
// FIN 3. RENDERIZADO DE TABLA



// 4: COMPLETAR DATOS: El equilibrio perfecto entre velocidad y ahorro (Optimizado para dbdata)
async function completarDatosLentamente(cantos) {
    const user = auth.currentUser;
    if (!user) return;

    const cache = await caches.open('cantos-cache-v2.08');
    
    // 1. Detectamos el estado del interruptor de sincronización
    const syncToggle = document.getElementById('syncToggle');
    const syncActiva = syncToggle ? syncToggle.checked : true;

    // PROCESO 1: Carga instantánea desde el almacenamiento local (LocalStorage)
    // Esto hace que la tabla no se vea vacía mientras esperamos a Firebase
    cantos.forEach(async (canto) => {
        // A. Verificar estado de descarga (Online/Offline)
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

        // B. Cargar datos locales (Escudo)
        const localData = localStorage.getItem(`data-${canto.id}`);
        if (localData) {
            // Pintamos inmediatamente lo que ya conocemos localmente (punto verde local)
            inyectarDatosEnTabla(canto.id, JSON.parse(localData), true);
        }
    });

    // PROCESO 2: Sincronización Real-Time con Firebase (dbdata)
    if (syncActiva) {
        console.log("🔄 Sincronizando dbdata con la nube...");
        // Llamamos a la Sección 21 que ya configuramos para mapear acorde y cejilla
        await sincronizarTodoARam();
        
        // OPCIONAL: Si después de sincronizar algunos siguen en "---", 
        // les ponemos el valor por defecto "La m"
        cantos.forEach(canto => {
            const elAco = document.getElementById(`acorde-tu-${canto.id}`);
            if (elAco && elAco.innerText === "---") {
                elAco.innerText = "La m";
            }
        });
    }
}

// FIN 4: COMPLETAR DATOS


// 5: INYECTAR DATOS (LOGICA DIRECTA + BLINDAJE DE MENORES)
window.inyectarDatosEnTabla = function(cantoId, data, esLocal = false) {
    const elCej = document.getElementById(`cejilla-tu-${cantoId}`);
    const elAco = document.getElementById(`acorde-tu-${cantoId}`);
    const elUso = document.getElementById(`uso-${cantoId}`);
    const fila = document.getElementById(`fila-${cantoId}`);

        // 5.A Valoracion de Estrllas 
        const elVal = document.getElementById(`valoracion-${cantoId}`);
        if (elVal) {
            const puntos = parseInt(data.valoracion) || 0; // Leemos de Firebase (1 a 5)
            let estrellasHTML = '<div class="estrellas-contenedor" style="cursor:pointer; font-size: 18px;">';
            
            for (let i = 1; i <= 5; i++) {
                // Si el índice es menor o igual a los puntos, estrella dorada, si no, gris.
                const color = (i <= puntos) ? '#FFD700' : '#C0C0C0'; 
                estrellasHTML += `<span onclick="guardarValoracion('${cantoId}', ${i})" style="color: ${color}; padding: 0 1px;">★</span>`;
            }
            
            estrellasHTML += '</div>';
            elVal.innerHTML = estrellasHTML;
        }

    if (elCej) {
        const valorCej = data.cejilla || "0";
        elCej.innerText = (valorCej === "0") ? "-" : valorCej;
    }
    
        if (elAco) {
            const cords = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
            const t = (data.acorde !== undefined) ? parseInt(data.acorde) : 0;

            // Buscamos en la variable global que cargamos arriba
            const lista = window.indiceCantosGlobal || [];
            const cantoMaestro = lista.find(c => String(c.id) === String(cantoId));

            if (!cantoMaestro) {
                // Si el JSON aún no llega, ponemos un estado de carga
                elAco.innerHTML = `<span style="color:gray;">Cargando...</span>`;
            } else {
                // Lógica de transporte que ya definimos
                const acordeOriginalStr = cantoMaestro.acorde || "La m";
                const esMenor = acordeOriginalStr.toLowerCase().includes("m");
                const notaBasePura = acordeOriginalStr.split(" ")[0].replace("m", "").trim();
                const indiceBase = cords.indexOf(notaBasePura);

                if (indiceBase !== -1) {
                    const posicionFinal = (indiceBase + t) % 12;
                    const notaFinal = cords[posicionFinal];
                    elAco.innerHTML = `<b style="color:red;">${notaFinal}${esMenor ? " m" : ""}</b>`;
                } else {
                    elAco.innerHTML = acordeOriginalStr;
                }
            }
}
    if (fila) {
        const enlace = fila.querySelector('a');
        if (enlace) {
            const ton = (data.acorde !== undefined) ? data.acorde : "0";
            const cej = (data.cejilla !== undefined) ? data.cejilla : "0";
            enlace.href = `src/index.html?canto=${cantoId}&tonalidad=${ton}&cejilla=${cej}`;
        }
    }

    const fechaOrigen = data.fecha || data.valor; 
    if (elUso && fechaOrigen) {
        const f = (fechaOrigen.toDate) ? fechaOrigen.toDate() : new Date(fechaOrigen);
        if (!isNaN(f.getTime())) {
            const dia = String(f.getDate()).padStart(2, '0');
            const mesesShort = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
            elUso.innerHTML = `${dia} ${mesesShort[f.getMonth()]} <span onclick="event.stopPropagation(); window.abrirCalendario('${cantoId}')" style="cursor:pointer; font-size:16px;">📅</span>`;
        }
    }
};// <--- CIERRE CORRECTO DE FUNCIÓN 5


// 6: OBTENER FIREBASE: Unificado para dbdata (Ruta Única y Segura)
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
        const { getDoc, doc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        
        const docRef = doc(db, "usuarios", uid, "dbdata", cantoId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const rawData = docSnap.data();
            
            // 1. Procesamos la fecha igual que en la 21
            let fechaObjeto = null;
            const d = rawData.fecha || rawData.valor; 
            if (d) {
                fechaObjeto = d.toDate ? d.toDate() : new Date(d);
            }

            // 2. Creamos el objeto EXACTAMENTE igual al de la Sección 21
            const datosNormalizados = {
                fecha: (fechaObjeto && !isNaN(fechaObjeto.getTime())) ? fechaObjeto : null,
                valor: (fechaObjeto && !isNaN(fechaObjeto.getTime())) ? fechaObjeto : null, // Doble campo por seguridad
                acorde: String(rawData.acorde || "0"),
                cejilla: String(rawData.cejilla || "0")
            };

            console.log(`✅ Sección 6 (dbdata) > Datos cargados para ${cantoId}:`, datosNormalizados);

            // 3. Guardamos en RAM
            ALMACEN_CANTOS[cantoId] = datosNormalizados;

            // 4. Guardamos en LocalStorage
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datosNormalizados));

            // 5. ¡ESTO ES LO QUE PINTA LA TABLA!
            if (typeof inyectarDatosEnTabla === 'function') {
                inyectarDatosEnTabla(cantoId, datosNormalizados, false);
            }
        }
    } catch (e) { 
        console.warn("⚠️ Error en Sección 6:", e); 
    }
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
    const selectPais = document.getElementById('userCountry'); // ID original restaurado
    if (!selectPais) return;

    try {
        const res = await fetch('src/data/paises.json');
        const paises = await res.json();

        // Limpiamos el mensaje de "Cargando..."
        selectPais.innerHTML = '<option value="">Selecciona tu país</option>';

        paises.forEach(p => {
            let opt = document.createElement('option');
            opt.value = p.nombre;
            opt.textContent = p.nombre; // Importante para que el texto sea visible en el select
            selectPais.appendChild(opt);
        });

        console.log("🌍 Países cargados correctamente en el selector.");
    } catch (e) {
        console.error("Error cargando el archivo de países:", e);
        selectPais.innerHTML = '<option value="">Error al cargar países</option>';
    }
}
// FIN 11. CARGAR PAISES


// 12. GUARDAR PERFIL: Función global para enviar a Firebase.
window.guardarPerfil = async function() {
    const user = auth.currentUser;
    if (!user) {
        alert("Debes iniciar sesión para guardar cambios.");
        return;
    }

    // Capturamos los datos con los IDs originales que restauramos
    const perfilData = {
        pais: document.getElementById('userCountry').value,
        parroquia: document.getElementById('userParroquia').value,
        comunidad: document.getElementById('userComunidad').value,
        etapa: document.getElementById('userStep').value,
        ultimaActualizacion: new Date()
    };

    console.log("Intentando guardar datos:", perfilData);

    try {
        // Ruta exacta confirmada: usuarios > UID > perfil > config
        const docRef = doc(db, "usuarios", user.uid, "perfil", "config");
        
        await setDoc(docRef, perfilData, { merge: true });
        
        alert("¡Perfil actualizado con éxito! 🎸");

        // Actualizamos la etapa en memoria para que la tabla se refresque correctamente
        etapaGuardada = parseInt(perfilData.etapa);
        if (typeof renderizarTablaCantos === 'function') {
            await renderizarTablaCantos();
        }

    } catch (e) {
        console.error("Error al guardar perfil:", e);
        alert("Error al conectar con la nube. Revisa tu conexión.");
    }
};
// FIN 12. GUARDAR PERFIL


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

// 14: GESTIONAR DESCARGA TOTAL (Uso Offline con Barra y Reporte)
window.gestionarDescargaTotal = async () => {
    const divProgreso = document.getElementById('progreso-descarga-container');
    const barra = document.getElementById('barra-progreso');
    const texto = document.getElementById('status-descarga-texto');
    const btn = document.getElementById('btnDescargarTodo');
    
    if (!confirm("¿Descargar todos los cantos para uso offline?")) return;

    let total = 0;
    let descargados = 0;
    let yaExistian = 0;
    let errores = 0;

    try {
        if (divProgreso) divProgreso.style.display = "block";
        if (texto) {
            texto.style.display = "block";
            texto.innerText = "Iniciando descarga...";
        }
        if (btn) btn.disabled = true;

        const response = await fetch('src/data/indicecantos.json');
        const cantos = await response.json();
        total = cantos.length;
        
        const cache = await caches.open('cantos-cache-v2.08');

        for (let i = 0; i < total; i++) {
            // Descargamos tanto el CSS como el HTML del canto
            const filesToCache = [
                `src/css/pg/${cantos[i].id}.css`,
                `src/index.html?canto=${cantos[i].id}.html`
                //`src/css/pg/${cantos[i].id}.html`
            ];

            for (const fileUrl of filesToCache) {
                const coincidencia = await cache.match(fileUrl);
                if (!coincidencia) {
                    try {
                        const res = await fetch(fileUrl);
                        if (res.ok) {
                            await cache.put(fileUrl, res);
                            descargados++;
                        } else {
                            errores++;
                        }
                    } catch (e) {
                        errores++;
                    }
                } else {
                    yaExistian++;
                }
            }

            let porc = Math.round(((i + 1) / total) * 100);
            if (barra) barra.style.width = `${porc}%`; 
            if (texto) texto.innerText = `Descargando: ${i + 1} de ${total} (${porc}%)`;
            
            if (i % 15 === 0) await new Promise(r => setTimeout(r, 10));
        }

        alert(`✅ Descarga Terminada:\n\n• Procesados: ${total}\n• En memoria: ${yaExistian}\n• Nuevos: ${descargados}\n• Errores: ${errores}`);
        renderizarTablaCantos();

    } catch (e) { 
        alert("Error crítico durante la descarga."); 
        console.error(e);
    } finally { 
        if (divProgreso) divProgreso.style.display = "none";
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = "✅ Todo descargado";
        }
    }
};
// FIN 14: DESCARGA MASIVA


// 15: EXPORTAR RESPALDO: Descarga el LocalStorage a JSON (Global).
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


// 18: Guardar preferencia y forzar refresco si se activa
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


// 19: REGISTRO DE CAMBIO (Escritura en dbdata con Historial Unificado)
async function guardarCambioTransporte(cantoId, nuevoValor) {
    const user = auth.currentUser;
    if (!user) return;
    try {
        const ahora = new Date();
        const fechaId = ahora.getTime().toString(); 

        // 1. OBTENEMOS EL ESTADO ACTUAL: Para no perder la cejilla al cambiar el acorde
        const refCantoRaiz = doc(db, "usuarios", user.uid, "dbdata", cantoId);
        const snapCanto = await getDoc(refCantoRaiz);
        
        let cejillaActual = "0";
        if (snapCanto.exists()) {
            cejillaActual = snapCanto.data().cejilla || "0";
        }

        // 2. PREPARAMOS EL PAQUETE DBDATA (Como lo definimos en jsgral)
        const datosDB = { 
            fecha: ahora, 
            acorde: nuevoValor.toString(), 
            cejilla: cejillaActual 
        };

        // A. Actualizamos la Raíz de dbdata para este canto
        // Ruta: /usuarios/UID/dbdata/ID_CANTO
        await setDoc(refCantoRaiz, datosDB, { merge: true });

        // B. Creamos el punto en el HISTORIAL dentro de dbdata
        // Ruta: /usuarios/UID/dbdata/ID_CANTO/historial/ID_FECHA
        const refHist = doc(db, "usuarios", user.uid, "dbdata", cantoId, "historial", fechaId);
        await setDoc(refHist, datosDB, { merge: true });

        console.log(`✅ Sincronizado en dbdata: ${cantoId} (Acorde: ${nuevoValor}, Cejilla: ${cejillaActual})`);
        
    } catch (error) { 
        console.error("Error en Sección 19 (dbdata):", error); 
    }
}
// FIN 19: REGISTRO DE CAMBIO


// --- 20: SISTEMA DE HISTORIAL VISUAL Y LISTADO ---
let fechasHistorialActivas = [];
let fechasOriginalesFull = []; 
let mesVisualizado = new Date().getMonth();
let añoVisualizado = new Date().getFullYear();
let totalRegistrosCanto = 0; 

// 20.1: APERTURA Y CARGA DE DATOS (REPARADO Y BLINDADO)
// 20.1: APERTURA Y CARGA DE DATOS (REPARADO PARA RUTA Y DATOS REALES)
// 20.1: APERTURA Y CARGA DE DATOS (CORRECCIÓN NIVEL "VALOR")
window.abrirCalendario = async function(cantoId) {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        
        let modal = document.getElementById('calendar-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'calendar-modal';
            modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:999999; display:flex; align-items:center; justify-content:center; background: rgba(0,0,0,0.7); font-family: sans-serif;";
            document.body.appendChild(modal);
        }
        modal.style.display = "flex";
        modal.innerHTML = '<div style="background:white; padding:20px; border-radius:10px;">⌛ Cargando historial técnico...</div>';

        fechasHistorialActivas = [];
        fechasOriginalesFull = [];
        totalRegistrosCanto = 0;

        const refHistorial = collection(db, "usuarios", user.uid, "dbdata", cantoId, "historial");
        const snapshot = await getDocs(refHistorial);
        
        snapshot.forEach(docSnap => {
            const data = docSnap.data();
            const idDoc = docSnap.id; 

            // --- TRUCO MAESTRO: Entramos en 'valor' ---
            // Como vimos en tu imagen, los datos están dentro de un campo llamado 'valor'
            const infoReal = data.valor || {}; 

            let timestamp = parseInt(idDoc);
            let fechaFinal = new Date(timestamp);

            if (!isNaN(fechaFinal.getTime())) {
                const clave = `${fechaFinal.getFullYear()}-${fechaFinal.getMonth() + 1}-${fechaFinal.getDate()}`;
                fechasHistorialActivas.push(clave);
                
                // Guardamos acorde y cejilla extrayéndolos de 'infoReal' (el campo valor)
                fechasOriginalesFull.push({
                    fecha: fechaFinal,
                    acorde: String(infoReal.acorde || "0"), 
                    cejilla: String(infoReal.cejilla || "0")
                });
                totalRegistrosCanto++;
            }
        });

        fechasOriginalesFull.sort((a, b) => b.fecha - a.fecha);

        if (fechasOriginalesFull.length > 0) {
            const ultima = fechasOriginalesFull[0].fecha;
            window.mesVisualizado = ultima.getMonth();
            window.añoVisualizado = ultima.getFullYear();
        }

        if (typeof actualizarVistaCalendario === 'function') {
            actualizarVistaCalendario(); 
        }

    } catch (e) { 
        console.error("❌ Error cargando historial:", e);
    }
};
// FIN DE 20.1: APERTURA Y CARGA DE DATOS


// 20.4: NAVEGACIÓN DE MESES
window.cambiarMes = function(direccion) {
    mesVisualizado += direccion;
    if (mesVisualizado < 0) { mesVisualizado = 11; añoVisualizado--; }
    if (mesVisualizado > 11) { mesVisualizado = 0; añoVisualizado++; }
    actualizarVistaCalendario();
};

// 20.5: VISTA DEL CALENDARIO (CORREGIDO)
function actualizarVistaCalendario() {
    const modal = document.getElementById('calendar-modal');
    if (!modal) return; 

    // Obtenemos el nombre del mes actual para el encabezado
    const nombreMes = new Date(añoVisualizado, mesVisualizado).toLocaleString('es-ES', { month: 'long' }).toUpperCase();

    modal.innerHTML = `
        <div id="calendar-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center;">
            <div id="calendar-content" style="background:white; padding:20px; border-radius:15px; width:300px; text-align:center; position:relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <button onclick="cerrarCalendario()" class="xclose" style="position:absolute; top:10px; right:15px; border:none; background:none; font-size:24px; cursor:pointer;">&times;</button>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <button onclick="cambiarMes(-1)" style="border:none; background:#e0e0e0; border-radius:5px; padding:5px 12px; cursor:pointer; font-weight:bold;">&lt;</button>
                    <h3 style="margin:0; font-size:1.1em; color:#333;">${nombreMes} ${añoVisualizado}</h3>
                    <button onclick="cambiarMes(1)" style="border:none; background:#e0e0e0; border-radius:5px; padding:5px 12px; cursor:pointer; font-weight:bold;">&gt;</button>
                </div>

                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; background: #fdfdfd; padding: 10px; border-radius: 10px; border: 1px solid #eee;">
                    ${generarGridNavegable(fechasHistorialActivas, mesVisualizado, añoVisualizado)}
                </div>
                
                <div style="margin-top:20px; border-top: 1px solid #eee; padding-top:15px;">
                    <p style="margin:0; font-size:13px; color:#444;">
                        Has usado este canto 
                        <span onclick="abrirListaDetallada()" style="color:#bc0009; font-weight:bold; font-size:18px; cursor:pointer; text-decoration:underline;">
                            ${totalRegistrosCanto}
                        </span> veces
                    </p>
                    <small style="color:gray; font-size:10px;">(Toca el número para ver el detalle)</small>
                </div>
            </div>
        </div>`;

    // Cerrar al hacer clic fuera
    document.getElementById('calendar-overlay').onclick = (e) => {
        if (e.target.id === 'calendar-overlay') cerrarCalendario();
    };
}
// FIN 20.5: VISTA DEL CALENDARIO

// 20.6 LISTADO TÉCNICO DETALLADO (DISEÑO DAVID + SOLUCIÓN FIREBASE)
window.abrirListaDetallada = function() {
    let listaModal = document.getElementById('lista-detallada-modal');
    if (!listaModal) {
        listaModal = document.createElement('div');
        listaModal.id = 'lista-detallada-modal';
        listaModal.style = "position:fixed; top:0; left:0; width:100%; height:100%; z-index:1000001; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; font-family: sans-serif;";
        document.body.appendChild(listaModal);
    }

    const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

    // Usamos fechasOriginalesFull que llenamos en la 20.1 usando los IDs de los documentos
    const itemsHtml = fechasOriginalesFull.map((reg, index) => {
        const f = reg.fecha;
        
        // Validación de seguridad para la fecha
        if (!f || isNaN(f.getTime())) return `<div style="padding:10px; color:red;">Dato no disponible</div>`;

        const dia = String(f.getDate()).padStart(2, '0');
        const mesTxt = meses[f.getMonth()];
        const año = f.getFullYear();
        const hora = String(f.getHours()).padStart(2, '0');
        const min = String(f.getMinutes()).padStart(2, '0');

        // SOLUCIÓN: Usamos reg.acorde que viene de Firebase
        const acordeTxt = MAPA_ACORDES[reg.acorde] || "La m";
        const cejillaTxt = (reg.cejilla && reg.cejilla !== "0") ? reg.cejilla : "No";

        return `
        <div style="padding:12px; border-bottom:1px solid #eee; display:flex; flex-direction:column; gap:5px; background: white; text-align: left;">
            <div style="display:flex; justify-content:space-between; font-size:12px;">
                <span style="color:#888;">${dia} ${mesTxt} ${año} - ${hora}:${min}</span>
                <b style="color:#d4af37;">#${fechasOriginalesFull.length - index}</b>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:15px; font-weight:bold; color:#333;">🎸 ${acordeTxt}</span>
                <span style="font-size:14px; background:#f5f5f5; padding:3px 10px; border-radius:12px; color:#666; border:1px solid #eee; font-weight: 900;">🗜️ ${cejillaTxt}</span>
            </div>
        </div>`;
    }).join('');

    listaModal.innerHTML = `
        <div id="lista-overlay" style="width:100%; height:100%; display:flex; align-items:center; justify-content:center;">
            <div style="background:white; border-radius:15px; width:320px; max-height:80vh; overflow:hidden; display:flex; flex-direction:column; position:relative; box-shadow: 0 15px 35px rgba(0,0,0,0.6);">
                <button onclick="document.getElementById('lista-detallada-modal').remove()" 
                        style="position:absolute; top:10px; right:15px; border:none; background:none; font-size:24px; cursor:pointer; color:white; z-index:10;">&times;</button>
                <div class="ttlo" style="padding:20px; background:#d4af37; color:white; font-weight:bold; text-align:center;">DETALLE TÉCNICO</div>
                <div style="flex-grow:1; overflow-y:auto; background:#fff;">
                    ${itemsHtml || '<p style="padding:20px; text-align:center; color:gray;">Sin registros en el historial</p>'}
                </div>
            </div>
        </div>`;

    // Cerrar al hacer clic en el fondo oscuro
    listaModal.onclick = (e) => { 
        if (e.target.id === 'lista-overlay') listaModal.remove(); 
    };
};
// FIN 20.6 LISTADO TÉCNICO DETALLADO


// 20.7: CIERRE Y AUXILIARES
window.cerrarCalendario = function() {
    const modal = document.getElementById('calendar-modal');
    if (modal) modal.remove();
    // Quitamos el escucha de la tecla Escape al cerrar
    document.removeEventListener('keydown', manejarEscape);
};
// FIN 20.7: CIERRE Y AUXILIARES

// 20.8: MENSAJE ESCAPE
function manejarEscape(e) {
    if (e.key === "Escape") {
        const lista = document.getElementById('lista-detallada-modal');
        const cal = document.getElementById('calendar-modal');

        if (lista) {
            lista.remove();
        } else if (cal) {
            // Intentamos llamar a la función global, si no, lo borramos directo
            if (typeof window.cerrarCalendario === 'function') {
                window.cerrarCalendario();
            } else {
                cal.remove();
            }
        }
    }
}
// FIN 20.8: MENSAJE ESCAPE

// 20.9: FUNCION GENERAR GRID
function generarGridNavegable(fechasActivas, mes, año) {
    const ultimoDia = new Date(año, mes + 1, 0).getDate();
    const primerDiaSemana = new Date(año, mes, 1).getDay();
    let html = "";
    ['D','L','M','M','J','V','S'].forEach(d => html += `<b style="font-size:0.75em; color:#bbb; padding-bottom:5px;">${d}</b>`);
    for (let e = 0; e < primerDiaSemana; e++) html += `<div></div>`;
    for (let i = 1; i <= ultimoDia; i++) {
        const clave = `${año}-${mes + 1}-${i}`;
        const activo = fechasActivas.includes(clave);
        const estilo = activo 
            ? "background:#d4af37; color:white; font-weight:bold; border-radius:4px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);" 
            : "color:#555;";
        html += `<div style="padding:6px 0; font-size:0.95em; ${estilo}">${i}</div>`;
    }
    return html;
}

// FIN 20.9: FUNCION GENERAR GRID

// 21: COMUNICACIÓN ENTRE EQUIPO, NUBE Y RAM (VERSIÓN FINAL CORREGIDA)
window.sincronizarTodoARam = async function() { 
    const user = auth.currentUser;
    if (!user) {
        alert("Debes estar logueado para sincronizar.");
        return;
    }

    const container = document.getElementById('progreso-nube-container');
    const barra = document.getElementById('barra-nube');
    const texto = document.getElementById('status-nube-texto');

    try {
        if (container) container.style.display = 'block';
        if (texto) {
            texto.style.display = 'block';
            texto.innerText = "Conectando con la nube...";
        }
        if (barra) {
            barra.style.width = '10%';
            barra.style.background = 'linear-gradient(90deg, #4285F4, #34A853)';
        }

        // Importamos las herramientas necesarias de Firestore
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        
        // Apuntamos a la colección donde se guardan los datos de cada canto
        const colRef = collection(db, "usuarios", user.uid, "dbdata");
        const querySnapshot = await getDocs(colRef);
        const total = querySnapshot.size;

        if (total === 0) {
            if (texto) texto.innerText = "No se encontraron registros.";
            setTimeout(() => { if (container) container.style.display = 'none'; }, 3000);
            return;
        }

        let procesados = 0;

        // Recorremos los documentos (cada documento es un canto)
        querySnapshot.forEach((docSnap) => {
            const cantoId = docSnap.id; 
            const docData = docSnap.data();
            
            // 🔍 LOG 1: Verificación de entrada
            console.log(`📡 LOG 1 > Datos de dbdata [${cantoId}]:`, docData);

            // CORRECCIÓN CLAVE: Según tus logs, los datos reales (acorde/cejilla)
            // están dentro de una propiedad llamada 'valor'
            const rawData = docData.valor ? docData.valor : docData;

            let fechaObjeto = null;
            // Buscamos la fecha en la raíz o dentro de valor
            const d = rawData.fecha || docData.fecha; 

            if (d) {
                // Si es Timestamp de Firebase usamos toDate(), si no, convertimos a fecha normal
                fechaObjeto = (d && typeof d.toDate === 'function') ? d.toDate() : new Date(d);
            }

            // NORMALIZACIÓN: Preparamos el objeto para la tabla
            const datosNormalizados = {
                fecha: (fechaObjeto && !isNaN(fechaObjeto.getTime())) ? fechaObjeto : null,
                valor: (fechaObjeto && !isNaN(fechaObjeto.getTime())) ? fechaObjeto : null,
                acorde: String(rawData.acorde || "0"),
                cejilla: String(rawData.cejilla || "0")
            };

            // 🧠 LOG 2: Aquí ya deberías ver los números correctos de acorde y cejilla
            console.log(`🧠 LOG 2 > RAM PROCESADA [${cantoId}]:`, datosNormalizados);

            // Guardamos en la memoria del navegador y en LocalStorage
            ALMACEN_CANTOS[cantoId] = datosNormalizados;
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datosNormalizados));
            
            // 🎨 ACTUALIZACIÓN VISUAL: Inyectamos los datos en la tabla de perfil.html
            if (typeof inyectarDatosEnTabla === 'function') {
                inyectarDatosEnTabla(cantoId, datosNormalizados, false);
            }

            // Actualizamos la barra de progreso
            procesados++;
            const porcentaje = Math.round((procesados / total) * 100);
            if (barra) barra.style.width = `${porcentaje}%`;
            if (texto) texto.innerText = `Sincronizando: ${procesados} de ${total}...`;
        });

        if (texto) texto.innerText = "¡Sincronización completada!";
        if (barra) barra.style.background = "#34A853"; 

        setTimeout(() => {
            if (container) container.style.display = 'none';
            if (barra) barra.style.width = '0%';
        }, 2500);

    } catch (e) {
        console.error("❌ Error en sincronización:", e);
        if (texto) texto.innerText = "Error al conectar con la nube.";
    }
};
// FIN 21: COMUNICACIÓN ENTRE EQUIPO, NUBE Y RAM

// 22 AUTO-SINCRONIZACIÓN AL ENTRAR
// Este bloque detecta cuando Firebase termina de cargar el usuario y arranca la sincronía
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("🚀 Usuario detectado, iniciando sincronización automática...");
        
        // Verificamos que la función exista antes de llamarla para evitar errores
        if (typeof window.sincronizarTodoARam === 'function') {
            window.sincronizarTodoARam();
        }
    }
});

// 23 GUARDAR VALORACION
        window.guardarValoracion = async function(cantoId, puntos) {
            const user = auth.currentUser;
            if (!user) return;

            try {
                const { doc, setDoc, updateDoc } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
                const docRef = doc(db, "usuarios", user.uid, "dbdata", cantoId);
                
                // Guardamos los puntos en Firebase
                await setDoc(docRef, { valoracion: puntos }, { merge: true });
                
                console.log(`✅ Valoración de ${puntos} estrellas guardada para: ${cantoId}`);
                
                // Actualizamos visualmente la celda sin recargar toda la tabla
                const dataLocal = { ...window.cacheData[cantoId], valoracion: puntos };
                window.inyectarDatosEnTabla(cantoId, dataLocal);
                
            } catch (e) {
                console.error("Error al guardar valoración:", e);
            }
        };