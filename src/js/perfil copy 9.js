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

    // --- CEJILLA ---
    if (elCej) {
        // Si el valor es "0", 0 o vacío, ponemos "-"
        const valorCej = data.cejilla;
        elCej.innerText = (valorCej == "0" || !valorCej) ? "-" : valorCej;
    }
    
    // --- ACORDE (CÁLCULO DINÁMICO) ---
    if (elAco) {
        const cords = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
        const t = parseInt(data.acorde); // Convertimos el "8", "10", etc., a número real
        
        // Si el transporte es 0 o no es un número, mostramos "-"
        if (isNaN(t) || t === 0) {
            elAco.innerHTML = `- ${esLocal ? '<span style="color: #28a745; font-size: 0.8em;">●</span>' : ''}`;
        } else {
            // Lógica: La nota base es La (posición 9). 
            // Sumamos el transporte y usamos el residuo de 12 para no salirnos del array.
            const posicionFinal = (9 + t) % 12;
            const notaFinal = cords[posicionFinal];
            
            // Imprimimos la nota + "m" (porque tus cantos son menores)
            elAco.innerHTML = `${notaFinal} m ${esLocal ? '<span style="color: #28a745; font-size: 0.8em;">●</span>' : ''}`;
        }
    }

    // --- FECHA DE USO ---
    if (elUso && data.uso) {
        elUso.innerHTML = `<span class="fecha-link" onclick="window.abrirCalendario('${cantoId}')">${data.uso} 📅</span>`;
    }
}


// 6: OBTENER FIREBASE: Ahora con refresco de fecha real (CORREGIDO)
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
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
            // Solo nos interesa lo que esté en 'valor'
            if (d.valor) {
                // Convertimos el Timestamp a objeto Date
                const fechaDate = d.valor.toDate ? d.valor.toDate() : new Date(d.valor);
                
                // Formato para la celda de la tabla
                datos.uso = fechaDate.toLocaleDateString('es-ES', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                }); 
            }
        }

        if (Object.keys(datos).length > 0) {
            // Actualiza la fila en la tabla
            inyectarDatosEnTabla(cantoId, datos, false);
            // Actualiza la caché local
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datos));
        }
    } catch (e) {
        console.warn("Error actualizando fecha para:", cantoId);
    }
} // FINAL DE LA SECCION 6


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


// 19. REGISTRO DE CAMBIO (Escritura): Unificado a campo 'valor'
async function guardarCambioTransporte(cantoId, nuevoValor) {
    const user = auth.currentUser;
    if (!user) return;

    try {
        // 1. Guardamos el tono
        const refTransporte = doc(db, "usuarios", user.uid, "transporte", cantoId);
        await setDoc(refTransporte, { valor: nuevoValor }, { merge: true });

        // 2. Guardamos la fecha
        // IMPORTANTE: Usamos 'valor' para que jsgral.js y perfil.js hablen el mismo idioma
        const refFecha = doc(db, "usuarios", user.uid, "transportacion", cantoId);
        await setDoc(refFecha, {
            valor: new Date() 
        }, { merge: true });

        console.log(`✅ Fecha guardada en 'valor' para evitar conflictos con el visor.`);
        
        // Actualizar LocalStorage para vista inmediata
        const localData = JSON.parse(localStorage.getItem(`data-${cantoId}`)) || {};
        localData.acorde = nuevoValor;
        localData.uso = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
        localStorage.setItem(`data-${cantoId}`, JSON.stringify(localData));

    } catch (error) {
        console.error("Error al registrar el cambio:", error);
    }
}