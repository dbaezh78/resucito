/***********************
 * CONFIGURACIÓN GENERAL
 ***********************/

// Variable para almacenar el evento beforeinstallprompt (global para app.js)
let deferredPrompt;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sworker.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito. Alcance:', registration.scope);
            })
            .catch((error) => {
                console.error('Fallo el registro del Service Worker:', error);
            });
    });
} else {
    console.log('Tu navegador no soporta Service Workers.');
}

// Evento para capturar el 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
    // Previene que el mini-infobar aparezca automáticamente
    e.preventDefault();
    // Guarda el evento para poder dispararlo más tarde.
    deferredPrompt = e;
    console.log('Evento beforeinstallprompt capturado.');
    // Si el botón ya existe, asegúrate de que se muestre.
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'block'; // O 'flex', dependiendo de tu diseño CSS
    }
});

// Evento que se dispara después de que el usuario acepta o cancela la instalación
window.addEventListener('appinstalled', () => {
    console.log('PWA instalada con éxito.');
    // Oculta el botón de instalación si ya no es necesario
    const installButton = document.getElementById('installButton');
    if (installButton) {
        installButton.style.display = 'none';
    }
    // Limpia el evento guardado
    deferredPrompt = null;
});


const acordes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
const dbTrastes = ["♫ Traste", "1ᵉʳ traste", "2ᵒ traste", "3ᵉʳ traste", "4ᵒ traste", "5ᵒ traste", "6ᵒ traste", "7ᵒ traste", "8ᵒ traste", "9ᵒ traste", "10ᵒ traste"];

// Variables de estado global
let scrolling = false;
let scrollInterval = null;

/***********************
 * FUNCIONES DE ACORDES
 ***********************/
function generarOpciones(defaultValue = "") {
    // Si el valor por defecto está vacío, agregamos una opción vacía seleccionada
    if (defaultValue === "") {
        return `<option value="" selected></option>` +
               acordes.map(acorde => `<option value="${acorde}">${acorde}</option>`).join('');
    }

    // Caso normal con valor por defecto
    return acordes.map(acorde =>
        `<option value="${acorde}"${acorde === defaultValue ? ' selected' : ''}>${acorde}</option>`
    ).join('');
}

function configurarSelectores() {
    document.querySelectorAll('.chord').forEach(select => {
        // Usamos empty string si dataset.default no está definido
        const defaultValue = select.dataset.default || "";
        select.innerHTML = generarOpciones(defaultValue);
    });
}

function obtenerIndiceAcorde(acorde) {
    // Devuelve -1 para acordes vacíos
    return acorde === "" ? -1 : acordes.indexOf(acorde);
}

function calcularAcordeDesplazado(acorde, desplazamiento) {
    const indiceActual = obtenerIndiceAcorde(acorde);
    // Mantiene el valor vacío si el acorde original estaba vacío
    return indiceActual === -1 ? acorde : acordes[(indiceActual + desplazamiento + acordes.length) % acordes.length];
}

function configurarEventosAcordes() {
    document.querySelectorAll('.chord').forEach(select => {
        select.addEventListener('change', function() {
            const defaultAcorde = this.dataset.default || "";
            const currentAcorde = this.value;

            // Solo calcular desplazamiento si ambos acordes no están vacíos
            const desplazamiento = (defaultAcorde && currentAcorde)
                ? obtenerIndiceAcorde(currentAcorde) - obtenerIndiceAcorde(defaultAcorde)
                : 0;

            document.querySelectorAll('.chord').forEach(otroSelect => {
                const otroDefault = otroSelect.dataset.default || "";
                otroSelect.value = calcularAcordeDesplazado(otroDefault, desplazamiento);
            });
        });
    });
}

function renderizarAcordes(contenedor, acordesData) {
    const divAcordes = document.createElement('div');
    divAcordes.className = 'chords';

    acordesData.forEach(acorde => {
        // Verificamos si el acorde está vacío
        const acordeValido = acorde.acorde && acorde.acorde.trim() !== "";

        const grupo = document.createElement('div');
        grupo.className = 'chord-container';
        grupo.classList.add(acorde.posicion);

        const select = document.createElement('select');
        select.className = 'chord no-arrow';
        select.name = 'nMusic';
        // Usamos empty string si el acorde base está vacío
        select.dataset.default = acordeValido ? acorde.base : "";
        select.innerHTML = generarOpciones(select.dataset.default);

        grupo.appendChild(select);

        if (acorde.extension) {
            const ext = document.createElement('i');
            ext.innerHTML = `<b class="csv">${acorde.extension}</b>`;
            grupo.appendChild(ext);
        }

        divAcordes.appendChild(grupo);
    });

    contenedor.insertBefore(divAcordes, contenedor.querySelector('.lyrics'));
}

/***********************
 * FUNCIONES DE INTERFAZ
 ***********************/
function toggleElementos(clase, accion) {
    document.querySelectorAll(clase).forEach(el => {
        el.classList[accion === 'show' ? 'remove' : 'add']('hidden');
    });
}

function divsOff() {
    document.querySelectorAll('.doff').forEach(div => {
        div.classList.toggle('divoff');
    });
}

/***********************
 * MOSTRAR IMAGENES
 ***********************/
function mostrarImagen(src) {
    const imgContainer = document.getElementById('imagen-container');
    document.getElementById('imagen-nota').src = src;
    imgContainer.style.display = 'block';
    imgContainer.scrollIntoView({ behavior: 'smooth' });
}


function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'block';
    setTimeout(() => mensaje.style.display = 'none', 3000);
}

/***********************
 * CONTROL DE DESPLAZAMIENTO MEJORADO
 ***********************/
function toggleDesplazamiento() {
    if (scrolling) {
        detenerDesplazamiento();
    } else {
        iniciarDesplazamiento();
    }
}

function iniciarDesplazamiento() {
    if (scrolling) return;

    scrolling = true;
    const btn = document.getElementById('startScroll');
    if (!btn) return;

    const velocidad = parseInt(btn.getAttribute('data-velocidad')) || 50;
    const incremento = parseFloat(btn.getAttribute('data-incremento')) || 0.7;

    // Cambiar ícono del botón
    const icon = btn.querySelector('span');
    if (icon) icon.textContent = 'pause';

    scrollInterval = setInterval(() => {
        if (window.scrollY + window.innerHeight < document.body.scrollHeight) {
            window.scrollBy(0, incremento);
        } else {
            detenerDesplazamiento();
        }
    }, velocidad);
}

function detenerDesplazamiento() {
    if (!scrolling) return;

    clearInterval(scrollInterval);
    scrollInterval = null;
    scrolling = false;

    // Restaurar ícono del botón
    const btn = document.getElementById('startScroll');
    if (btn) {
        const icon = btn.querySelector('span');
        if (icon) icon.textContent = 'south';
    }
}

function configurarEventosDesplazamiento() {
    const scrollBtn = document.getElementById('startScroll');

    // Evento para el botón (toggle)
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDesplazamiento();
        });
    }

    // Evento para detener al hacer clic en cualquier parte
    document.addEventListener('click', function(e) {
        if (!scrolling) return;

        let target = e.target;
        let isScrollButton = false;

        // Verificar si el clic fue en el botón o sus hijos
        while (target && target !== document) {
            if (target.id === 'startScroll') {
                isScrollButton = true;
                break;
            }
            target = target.parentNode;
        }

        // Detener solo si no fue en el botón
        if (!isScrollButton) {
            detenerDesplazamiento();
        }
    });

    // También detener al hacer doble clic
    document.addEventListener('dblclick', detenerDesplazamiento);
}

/******************************
 * FUNCIONES DEL REPRODUCTOR
 ******************************/

function configurarReproductor() {
    const audioBtn = document.getElementById('audio-control-btn');
    const audioPlayer = document.querySelector('.saudio');

    if (!audioBtn || !audioPlayer) {
        console.error('Elementos del reproductor no encontrados');
        return;
    }

    // Ocultar el reproductor inicialmente
    audioPlayer.style.display = 'none';

    const icon = audioBtn.querySelector('.audio-icon');

    audioBtn.addEventListener('click', async function(e) {
        e.preventDefault();

        try {
            document.getElementById('reproductor-audio').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            if (audioPlayer.paused) {
                // Mostrar el reproductor cuando se da play
                audioPlayer.style.display = 'block';
                await audioPlayer.play().catch(err => {
                    audioPlayer.controls = true;
                    throw err;
                });
                icon.textContent = 'pause_circle';
                audioPlayer.setAttribute('controls', '');
            } else {
                // Ocultar el reproductor cuando se pausa
                audioPlayer.style.display = 'none';
                audioPlayer.pause();
                icon.textContent = 'play_circle';
                audioPlayer.removeAttribute('controls');
            }
        } catch (error) {
            console.error('Error en reproducción:', error);
            audioPlayer.style.display = 'block'; // Mostrar en caso de error
            audioPlayer.setAttribute('controls', '');
            const originalIcon = icon.textContent;
            icon.textContent = 'error';

            setTimeout(() => {
                // Usar un modal en lugar de alert()
                const errorMessage = 'La paz de Cristo Herman@, al parecer este canto aun no está disponible, estamos trabajando para ponerlo disponible lo más pronto posible....';
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    z-index: 1000;
                    text-align: center;
                    max-width: 80%;
                    font-family: sans-serif;
                `;
                modal.innerHTML = `<p>${errorMessage}</p><button onclick="this.parentNode.remove()" style="margin-top: 10px; padding: 8px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Cerrar</button>`;
                document.body.appendChild(modal);
            }, 100);

            setTimeout(() => {
                icon.textContent = originalIcon;
            }, 2000);
        }
    });

    audioPlayer.addEventListener('ended', function() {
        const icon = document.querySelector('#audio-control-btn .audio-icon');
        if (icon) icon.textContent = 'play_circle';
        audioPlayer.style.display = 'none'; // Ocultar cuando termina la reproducción
        audioPlayer.removeAttribute('controls');
    });
}

/******************************
 * FUNCIONES DEL REPRODUCTOR ULTIMA LINEA
 ******************************/


/***********************
 * FUNCIONES DE TRASTES
 ***********************/
function dbGenerarOpciones(defaultValue) {
    return dbTrastes
        .map(traste => `<option value="${traste}"${traste === defaultValue ? ' selected' : ''}>${traste}</option>`)
        .join('');
}

function configurarTrastes() {
    document.querySelectorAll('.dbMiTraste').forEach(select => {
        const dbDefaultValue = select.dataset.default || "1°";
        select.innerHTML = dbGenerarOpciones(dbDefaultValue);
    });
}

/***********************
 * CARGA DE CANTOS
 ***********************/
function cargarCanto(partitura) {
    // Metadatos
    const tcElement = document.getElementById('tc');
    const t1Element = document.getElementById('t1');
    const s1Element = document.getElementById('s1');
    const dbnoElement = document.getElementById('dbno');
    const catgElement = document.getElementById('catg');

    if (tcElement) tcElement.textContent = partitura.tituloc;
    if (t1Element) t1Element.textContent = partitura.titulo;
    if (s1Element) s1Element.textContent = partitura.salmo;
    if (dbnoElement) dbnoElement.textContent = partitura.dbnos;
    if (catgElement) catgElement.textContent = partitura.catg;


    // Asamblea
    partitura.asamblea.forEach((texto, i) => {
        const elemento = document.getElementById(`a${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.asambleaAcordes && partitura.asambleaAcordes[i]) {
                renderizarAcordes(elemento.parentElement, partitura.asambleaAcordes[i]);
            }
        }
    });

    // Cantor
    partitura.cantor.forEach((texto, i) => {
        const elemento = document.getElementById(`c${i+1}`);
        if (elemento) {
            elemento.textContent = texto;
            if (partitura.cantorAcordes && partitura.cantorAcordes[i]) {
                renderizarAcordes(elemento.parentElement, partitura.cantorAcordes[i]);
            }
        }
    });

    configurarEventosAcordes();
}

// Función para inicializar elementos específicos de las páginas de cantos
function inicializarCantoPage() {
    // Listener para catgElement, ahora dentro de la función específica de canto
    const catgElement = document.getElementById('catg');
    if (catgElement) {
        catgElement.addEventListener('click', () => {
            window.location.reload();
        });
    }

    configurarSelectores();
    configurarEventosAcordes();
    configurarEventosDesplazamiento();
    configurarTrastes();
    configurarReproductor();

    // Evento para alternar vista (si es específico de canto)
    document.getElementById('toggleVista')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('contenedorColumnas').classList.toggle('columnas-apiladas');
    });

    // Evento para toggle de elementos (si es específico de canto)
    document.getElementById('toggle')?.addEventListener('change', function() {
        toggleElementos('.hct', this.checked ? 'show' : 'hide');
    });

    // Eventos para coros (si es específico de canto)
    document.querySelectorAll('.bcoro').forEach(linea => {
        linea.addEventListener('click', () => {
            const target = linea.nextElementSibling;
            if (target) target.classList.toggle('dbhide');
        });
    });

    // Evento para divsOff (si es específico de canto)
    const divsOffBtn = document.querySelector('.divsOff-btn');
    if (divsOffBtn) {
        divsOffBtn.addEventListener('click', divsOff);
    }

    // Lógica para acorde-selector y acorde-imagen (específico de canto)
    const selector = document.getElementById('acorde-selector');
    const imagenAcorde = document.getElementById('acorde-imagen');

    if (selector && imagenAcorde) { // Asegurarse de que ambos elementos existen
        // 🔽 Agregado: cerrar imagen con doble clic
        imagenAcorde.addEventListener('dblclick', function() {
            imagenAcorde.style.display = 'none';
        });

        // Objeto con los acordes y sus rutas (definido localmente para esta función)
        const acordesMap = { // Renombrado para evitar conflicto con la constante global 'acordes'
            "Do": "/src/ima/do.jpg",
            "Dom": "/src/ima/dom.jpg", 
            "Do7": "/src/ima/do7.jpg",
            "Do#": "/src/ima/dos.jpg", 
            "Do#m": "/src/ima/dosm.jpg", 
            "Do#7": "/src/ima/dos7.jpg",
            "Re♭": "/src/ima/dos.jpg", 
            "Re": "/src/ima/re.jpg", 
            "Rem": "/src/ima/rem.jpg",
            "Re7": "/src/ima/re7.jpg", 
            "Rem9": "/src/ima/rem9.jpg", 
            "Re#": "/src/ima/res.jpg",
            "Re#m": "/src/ima/resm.jpg", 
            "Mi": "/src/ima/mi.jpg", 
            "Mim": "/src/ima/mim.jpg",
            "Mi7": "/src/ima/mi7.jpg", 
            "Mimaj7": "/src/ima/mimaj7.jpg", 
            "Mi6": "/src/ima/mi6.jpg",
            "Mim6": "/src/ima/mim6.jpg", 
            "Fa": "/src/ima/fa.jpg", 
            "Fam": "/src/ima/fam.jpg",
            "Fa7": "/src/ima/fa7.jpg", 
            "Famaj7": "/src/ima/famaj7.jpg", 
            "Famaj713": "/src/ima/famaj713.jpg",
            "Fa#": "/src/ima/fas.jpg", 
            "Fa#m": "/src/ima/fasm.jpg", 
            "Fa# 5/9 dim": "/src/ima/fas5-9dim.jpg",
            "Sol": "/src/ima/sol.jpg", 
            "Solm": "/src/ima/solm.jpg", 
            "Sol7": "/src/ima/sol7.jpg",
            "Sol#": "/src/ima/sols.jpg", 
            "Sol#m": "/src/ima/solsm.jpg", 
            "Sol#7": "/src/ima/sols7.jpg",
            "La": "/src/ima/la.jpg", 
            "Lam": "/src/ima/lam.jpg", 
            "La7": "/src/ima/la7.jpg",
            "Lam7": "/src/ima/lam7.jpg", 
            "La6": "/src/ima/la6.jpg", 
            "Lam6": "/src/ima/lam6.jpg",
            "La♭": "/src/ima/lab.jpg", 
            "Si": "/src/ima/si.jpg", 
            "Sim": "/src/ima/Sim.jpg",
            "Si7": "/src/ima/si7.jpg", 
            "Si♭": "/src/ima/sib.jpg", 
            "Si♭m": "/src/ima/sibm.jpg",
            "Si♭7": "/src/ima/sib7.jpg",
            "Si♭7": "/src/ima/sib7.jpg",
        };

        // Llenar el select con las opciones de acordes
        for (const acorde in acordesMap) { // Usar acordesMap
            const option = document.createElement('option');
            option.value = acorde;
            option.textContent = acorde;
            selector.appendChild(option);
        }

        // Manejar el cambio de selección
        selector.addEventListener('change', function() {
            const acordeSeleccionado = this.value;

            if (acordeSeleccionado && acordesMap[acordeSeleccionado]) { // Usar acordesMap
                imagenAcorde.src = acordesMap[acordeSeleccionado];
                imagenAcorde.alt = `Acorde ${acordeSeleccionado}`;
                imagenAcorde.style.display = 'block';
            } else {
                imagenAcorde.src = '';
                imagenAcorde.alt = '';
                imagenAcorde.style.display = 'none';
            }
        });
    }
}


/***********************
 * CONFIGURACIÓN INICIAL
 ***********************/
function inicializarAplicacion() {
    // Añadir dinámicamente la etiqueta link para el manifest.json
    // Solo si no existe ya para evitar duplicados
    if (!document.querySelector('link[rel="manifest"]')) {
        const linkManifest = document.createElement('link');
        linkManifest.rel = 'manifest';
        linkManifest.href = '/src/js/manifest.json';
        document.head.appendChild(linkManifest);
        console.log('Manifiesto añadido dinámicamente al head.');
    }

    // Verificar si es una página de canto y, si lo es, inicializar sus elementos
    const isCantoPage = document.getElementById('tc') !== null;
    if (isCantoPage) {
        console.log('Página de canto detectada. Inicializando elementos específicos del canto.');
        inicializarCantoPage();
    } else {
        console.log('Página principal (o no de canto) detectada.');
    }

    // La configuración del botón de instalación se ha movido a app.js
}

/* ****************************************
FUNCION DE BUSCADOR MEJORADA
******************************************/
document.getElementById('inputBusqueda')?.addEventListener('input', async function(e) {
    const query = normalizeText(e.target.value.trim());
    const resultadosDiv = document.getElementById('resultadosBusqueda');

    if (!resultadosDiv) { // Añadir verificación para resultadosDiv también
        console.warn("Elemento 'resultadosBusqueda' no encontrado. El buscador no funcionará.");
        return;
    }

    if (query.length < 1) {
        resultadosDiv.style.display = 'none';
        resultadosDiv.innerHTML = '';
        return;
    }

    try {
        // La URL para fetch se mantiene con el parámetro para evitar problemas de caché del navegador,
        // el Service Worker se encarga de ignorarlo para la búsqueda en caché.
        const response = await fetch(`/src/data/find.json?v=${Date.now()}`);

        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status}`);
        }

        const cantos = await response.json();

        // Normalizar y buscar
        const resultados = cantos.filter(canto => {
            const tituloNormalizado = normalizeText(canto.titulo);
            const letraNormalizada = normalizeText(canto.letra);

            return tituloNormalizado.includes(query) ||
                   letraNormalizada.includes(query);
        });

        mostrarResultados(resultados);
    } catch (error) {
        console.error("Error en búsqueda:", error);
        resultadosDiv.innerHTML = `
            <div class="resultado-item">
                Error al cargar: ${error.message}<br>
                <small>Ruta intentada: /cantos/resucito/find/index.json</small>
            </div>`;
        resultadosDiv.style.display = 'block';
    }
});

// Función para normalizar texto (quitar acentos, comas, etc.)
function normalizeText(text) {
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quita acentos
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // quita signos de puntuación
}

// Función para mostrar resultados con scroll lateral
function mostrarResultados(resultados) {
    const contenedor = document.getElementById('resultadosBusqueda');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<div class="resultado-item">No hay coincidencias</div>';
        contenedor.style.display = 'block';
        return;
    }

    const mainResults = document.createElement('div');
    mainResults.className = 'main-results';

    resultados.forEach(canto => {
        const div = document.createElement('div');
        div.className = 'resultado-item';
        div.innerHTML = `
            <strong>${canto.titulo}</strong>
            <br>
            <small>${canto.salmo || ''}</small>
        `;

div.onclick = (e) => {
            e.preventDefault();

            // 1. Normalizamos los textos para la búsqueda (quitamos tildes y espacios)
            const limpiar = (txt) => (txt || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // 2. Buscamos el canto en la base de datos original (songs-data.js)
            const datosBase = typeof songs !== 'undefined' ? songs.find(s => {
                const t1 = limpiar(s.title);
                const t2 = limpiar(canto.titulo);
                // Comparamos por ID o por título normalizado
                return (s.id === canto.id) || (t1 === t2) || (t1.includes(t2)) || (t2.includes(t1));
            }) : null;
            
            // 3. LÓGICA DE APERTURA
            // Forzamos la apertura externa si:
            // - Tiene targetBlank en la DB
            // - O su ID es 'librodecanto' o 'prontuario'
            // - O su URL termina en .pdf
            const esRecursoEspecial = datosBase && (
                datosBase.targetBlank === true || 
                datosBase.id === "prontuario" || 
                datosBase.id === "librodecanto" ||
                (datosBase.url && datosBase.url.toLowerCase().endsWith('.pdf'))
            );

            if (esRecursoEspecial) {
                console.log("🚀 Abriendo recurso especial en pestaña nueva:", datosBase.title);
                // Usamos window.open con la URL de la base de datos
                window.open(datosBase.url, '_blank', 'noopener,noreferrer');
            } else {
                console.log("🎵 Abriendo canto normal:", canto.titulo);
                window.location.href = canto.archivo || (datosBase ? datosBase.url : '#');
            }
        };
        
        mainResults.appendChild(div);
    });

    contenedor.appendChild(mainResults);
    contenedor.style.display = 'block';
}

// Cerrar resultados al hacer clic fuera
document.addEventListener('click', function(e) {
    const buscador = document.querySelector('.buscador-cantos');
    const resultados = document.getElementById('resultadosBusqueda');

    if (resultados && buscador && !buscador.contains(e.target)) { // Verificar que ambos elementos existen
        resultados.style.display = 'none';
    }
});

/* ****************************************
FIN FUNCION DE BUSCADOR
******************************************/

/******************************************
    TOGGLE VISIBILITY - SOLUCIÓN CORRECTA
******************************************/

document.addEventListener('DOMContentLoaded', function() {
    // 1. Selección correcta de elementos
    const iconTop = document.querySelector('.home .mso'); // Ícono superior (sin clase odb en tu HTML)
    const iconBottom = document.querySelector('.encabezado-columnas .mso.hline.bcoro'); // Ícono inferior
    const headerRow = document.querySelector('tr.encabezado-columnas.odb'); // Fila del encabezado

    // Solo ejecutar si los elementos existen, ya que esta sección parece ser específica de index.html
    if (iconTop && iconBottom && headerRow) {
        // 2. Estado inicial
        iconTop.style.display = 'none'; // Ocultar ícono superior al inicio
        iconBottom.style.display = 'inline-block'; // Mostrar ícono inferior
        headerRow.style.display = ''; // Mostrar encabezado (cambia a 'none' si quieres oculto al inicio)

        // 3. Función mejorada de toggle
        function toggleVisibility() {
            // Alternar encabezado
            headerRow.style.display = headerRow.style.display === 'none' ? '' : 'none';

            // Alternar íconos de forma cruzada
            iconTop.style.display = iconTop.style.display === 'none' ? 'inline-block' : 'none';
            iconBottom.style.display = iconBottom.style.display === 'none' ? 'inline-block' : 'none';

            // Guardar estado (opcional)
            localStorage.setItem('headerVisible', headerRow.style.display !== 'none');
        }

        // 4. Eventos correctamente asignados
        iconBottom.addEventListener('click', toggleVisibility);
        iconTop.addEventListener('click', toggleVisibility);

        // 5. Cargar estado guardado (opcional)
        const savedState = localStorage.getItem('headerVisible');
        if (savedState === 'false') {
            headerRow.style.display = 'none';
            iconTop.style.display = 'inline-block';
            iconBottom.style.display = 'none';
        }
    }
});

/******************************************
    TOGGLE VISIBILITY - SOLUCIÓN CORRECTA
******************************************/

//****************************************************************
//*************** AJUSTE DE ACORDES A 800px TABLE ****************
//****************************************************************

function ajustarPosicion(posicionOriginal, anchoPantalla) {
    // Si es móvil (384px), mantener posiciones originales
    if (anchoPantalla <= 480) {
      return posicionOriginal;
    }
    // Si es tablet (800px)
    else if (anchoPantalla <= 800) {
      // Aquí puedes definir cómo mapear las posiciones para tablet
      // Por ejemplo, podrías multiplicar por un factor
      const factorTablet = 1.5; // Ajusta este valor según necesites
      const numero = parseInt(posicionOriginal.replace('db', ''));
      return `db${Math.round(numero * factorTablet)}`;
    }
    // Para pantallas más grandes (1080px+)
    else {
      return posicionOriginal; // o ajustar con otro factor si es necesario
    }
  }

//****************************************************************
//*************** AJUSTE DE ACORDES A 800px TABLE ****************
//****************************************************************



/***********************
 * INICIO DE LA APLICACIÓN
 ***********************/
document.addEventListener('DOMContentLoaded', inicializarAplicacion);


/**************************************************************************
LLAMADA DE ACORDE Y SU IMAGEN
**************************************************************************/
// Esta sección se ha movido dentro de inicializarCantoPage()
// para asegurar que solo se ejecuta en páginas de cantos.

// Lógica para manejar el clic en el botón de instalación
function handleInstallClick() {
    const installButton = document.getElementById('installButton');

    if (installButton) {
        installButton.addEventListener('click', (e) => {
            // Verifica que el evento haya sido capturado
            if (deferredPrompt) {
                // Oculta el botón
                installButton.style.display = 'none';

                // Muestra el prompt de instalación
                deferredPrompt.prompt();

                // Espera a que el usuario responda al prompt
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('El usuario aceptó la instalación de PWA');
                    } else {
                        console.log('El usuario rechazó la instalación de PWA');
                    }
                    // Limpia el prompt para que no pueda ser usado de nuevo
                    deferredPrompt = null;
                });
            } else {
                 console.log('El prompt de instalación no está disponible o ya se usó.');
                 // Puedes añadir una lógica aquí para abrir una instrucción manual
            }
        });
    }
}

// Asegúrate de que este listener se ejecute una vez que el DOM esté cargado.
document.addEventListener('DOMContentLoaded', handleInstallClick);

// Si ya tienes un document.addEventListener('DOMContentLoaded', inicializarAplicacion);
// Simplemente integra el contenido de 'handleInstallClick' dentro de 'inicializarAplicacion'.


