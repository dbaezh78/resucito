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

    // Buscador con botón limpiar (opcional si ya lo tenías)
    let html = `
      <div style="position: relative; max-width: 500px; margin: 0 auto 10px;">
        <input id="inputBuscador" type="text" placeholder="Buscar canto..." oninput="filtrarCantos()" style="width:100%; padding:10px 35px 10px 10px; border-radius:8px; border:1px solid #ccc;">
        <button id="btnLimpiarBuscador" onclick="limpiarBuscador()" style="position:absolute; right:5px; top:50%; transform: translateY(-50%); display:none; border:none; background:transparent; font-size:20px; cursor:pointer;">×</button>
      </div>
    `;

    html += `
      <table class="tabla-gestion">
        <thead>
          <tr>
            <th>Canto</th>
            <th>Estado / Descarga</th>
            <th>Uso</th>
            <th>Cejilla (Or/Tu)</th>
            <th>Acorde (Or/Tu)</th>
          </tr>
        </thead>
        <tbody>
    `;

    cantos.forEach(canto => {
      const enlaceCanto = `src/index.html?canto=${canto.id}`;
      html += `
        <tr class="fila-canto" id="fila-${canto.id}">
          <!-- Canto -->
          <td>
            <a href="${enlaceCanto}" style="text-decoration:none; color:#0b5ed7;">
              ${canto.titulo}
            </a>
          </td>

          <!-- Estado / Descarga -->
          <td id="status-${canto.id}">
            ⏳
          </td>

          <!-- Uso -->
          <td id="uso-${canto.id}">
            --- 📅
          </td>

          <!-- Cejilla (Or/Tu) -->
          <td>
            ${canto.cejilla ?? 0} / <b class="tu-dato" id="cejilla-tu-${canto.id}">-</b>
          </td>

          <!-- Acorde (Or/Tu) -->
          <td>
            ${canto.acorde ?? 'N/A'} / <b class="tu-dato" id="acorde-tu-${canto.id}">-</b>
          </td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    contenedor.innerHTML = html;

    // Completar datos lentos (estado offline/online + Firebase/localStorage)
    completarDatosLentamente(cantos);

  } catch (e) {
    console.error("Error en tabla:", e);
    contenedor.innerHTML = `<p style="text-align:center; color:#bc0009;">Error cargando la base de datos de cantos.</p>`;
  }
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
                ? '<span title="Disponible Offline" style="color: #28a745;">✅ Online</span>' 
                : '<span title="Solo Online" style="color: #ff0000;">❌ Offline</span>';
            
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

// 5. INYECTAR DATOS: Cambia el "-" por tu acorde/cejilla real
function inyectarDatosEnTabla(cantoId, data, esLocal = false) {
    const elCej = document.getElementById(`cejilla-tu-${cantoId}`);
    const elAco = document.getElementById(`acorde-tu-${cantoId}`);
    const elUso = document.getElementById(`uso-${cantoId}`);

    // Si data trae cejilla (valor de Firebase), la ponemos
    if (elCej && data.cejilla !== undefined) {
        elCej.innerText = data.cejilla;
    }
    
    // Si data trae acorde, lo ponemos
    if (elAco && data.acorde) {
        // El punto verde ● solo sale si el dato ya estaba en el teléfono
        elAco.innerHTML = `${data.acorde} ${esLocal ? '<span style="color: #28a745; font-size: 0.8em; margin-left: 4px;">●</span>' : ''}`;
    }

    if (elUso && data.uso) {
        elUso.innerHTML = `<span class="fecha-link" onclick="window.abrirCalendario('${cantoId}')">${data.uso} 📅</span>`;
    }
}


// 6. OBTENER FIREBASE: Baja de la nube, pinta en tabla y guarda en LocalStorage
async function obtenerDatosExtraFirebase(cantoId, uid) {
    try {
        const [docCej, docAco, docUso] = await Promise.all([
            getDoc(doc(db, "usuarios", uid, "cejillas", cantoId)),
            getDoc(doc(db, "usuarios", uid, "transportes", cantoId)),
            getDoc(doc(db, "usuarios", uid, "historial_uso", cantoId))
        ]);

        const datos = {};
        // Extraemos el campo 'valor' que es como lo tienes en Firestore
        if (docCej.exists()) datos.cejilla = docCej.data().valor;
        if (docAco.exists()) datos.acorde = docAco.data().valor;
        if (docUso.exists()) datos.uso = docUso.data().valor || docUso.data().fecha;

        if (Object.keys(datos).length > 0) {
            // --- AQUÍ ESTABA EL FALLO: Ahora sí le decimos que pinte en la tabla ---
            inyectarDatosEnTabla(cantoId, datos, false);
            
            // Guardamos localmente para que la próxima vez cargue sin usar internet
            localStorage.setItem(`data-${cantoId}`, JSON.stringify(datos));
        }
    } catch (e) {
        console.warn("Error en Firebase para el canto: " + cantoId);
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
