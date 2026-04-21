/* **************************************************
   MOTOR DE BÚSQUEDA SECUENCIAL - Edición David (Final)
   - Compatible con index principal y visor de cantos.
   - Anti-Acentos, Anti-Signos, Anti-Mayúsculas.
   - Anti-Espacios (letoco = le toco) - SOLO SECUENCIAL.
************************************************** */

// 1. Detectar automáticamente qué input está presente en el HTML actual
const inputID = document.getElementById('DavidLoBusca') ? 'DavidLoBusca' : 'searchInput';

document.getElementById(inputID)?.addEventListener('input', function(e) {
    const valorInput = e.target.value;
    const resultadosDiv = document.getElementById('resultadosBusqueda');

    if (!resultadosDiv) return;

    // Si está vacío, escondemos los resultados
    if (valorInput.trim().length < 1) {
        resultadosDiv.style.display = 'none';
        resultadosDiv.innerHTML = '';
        return;
    }

    // 2. Limpieza total de la búsqueda
    const busquedaLimpia = limpiarTextoMaestro(valorInput);
    const busquedaPegada = busquedaLimpia.replace(/\s/g, "");

    // 3. Filtrar usando la librería global 'songs'
    const resultados = filtrarCantosUltra(busquedaLimpia, busquedaPegada);

    // 4. Mostrar en pantalla
    mostrarResultadosFinal(resultados);
});

/**
 * Normalización de texto: quita acentos, signos y lo hace minúscula.
 */
function limpiarTextoMaestro(texto) {
    if (!texto) return "";
    return texto.toString().toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quita acentos
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Quita signos
        .trim();
}

/**
 * Lógica de Filtrado Secuencial (Anti-Palabras Saltadas)
 */
function filtrarCantosUltra(fraseNormal, frasePegada) {
    if (typeof songs === 'undefined') {
        console.error("Error: 'songs' no está cargado.");
        return [];
    }

    return songs.filter(canto => {
        // Ignorar si el canto está marcado como no visible
        if (canto.visible === "no") return false;

        // Limpiamos los campos del objeto songs-data.js
        const t = limpiarTextoMaestro(canto.title || "");
        const s = limpiarTextoMaestro(canto.subtitle || "");
        const c = limpiarTextoMaestro(canto.content || "");

        // Creamos los bloques de búsqueda
        const poolConEspacios = `${t} ${s} ${c}`;
        const poolSinEspacios = poolConEspacios.replace(/\s/g, "");

        // REGLA DE ORO: Debe ser secuencial
        // Caso A: Aparece la frase con espacios originales
        const coincideNormal = poolConEspacios.includes(fraseNormal);
        
        // Caso B: Aparece la frase pegada (letoco -> le toco)
        // Pedimos mínimo 3 letras para el modo pegado para evitar falsos positivos
        const coincidePegado = frasePegada.length > 2 && poolSinEspacios.includes(frasePegada);

        return coincideNormal || coincidePegado;
    });
}

// ==========================================================
// Renderizado de resultados - CORREGIDO para PDF y Prontuario
// ==========================================================

/* **************************************************
   MOTOR DE BÚSQUEDA SECUENCIAL - Edición David (Final)
************************************************** */

document.getElementById(inputID)?.addEventListener('input', function(e) {
    const valorInput = e.target.value;
    const resultadosDiv = document.getElementById('resultadosBusqueda');

    if (!resultadosDiv) return;

    if (valorInput.trim().length < 1) {
        resultadosDiv.style.display = 'none';
        resultadosDiv.innerHTML = '';
        return;
    }

    const busquedaLimpia = limpiarTextoMaestro(valorInput);
    const busquedaPegada = busquedaLimpia.replace(/\s/g, "");
    const resultados = filtrarCantosUltra(busquedaLimpia, busquedaPegada);

    mostrarResultadosFinal(resultados);
});

function limpiarTextoMaestro(texto) {
    if (!texto) return "";
    return texto.toString().toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .trim();
}

function filtrarCantosUltra(fraseNormal, frasePegada) {
    if (typeof songs === 'undefined') return [];
    return songs.filter(canto => {
        if (canto.visible === "no") return false;
        const t = limpiarTextoMaestro(canto.title || "");
        const s = limpiarTextoMaestro(canto.subtitle || "");
        const c = limpiarTextoMaestro(canto.content || "");
        const poolConEspacios = `${t} ${s} ${c}`;
        const poolSinEspacios = poolConEspacios.replace(/\s/g, "");
        return poolConEspacios.includes(fraseNormal) || (frasePegada.length > 2 && poolSinEspacios.includes(frasePegada));
    });
}

// ==========================================================
// RENDERIZADO - LA SOLUCIÓN LIMPIA
// ==========================================================
function mostrarResultadosFinal(resultados) {
    const contenedor = document.getElementById('resultadosBusqueda');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<div class="resultado-item">Sin coincidencias</div>';
        contenedor.style.display = 'block';
        return;
    }

    const mainResults = document.createElement('div');
    mainResults.className = 'main-results';

    resultados.forEach(canto => {
        const item = document.createElement('a');
        item.className = 'resultado-item';
        item.style.display = "block";
        item.style.textDecoration = "none";
        //item.style.color = "inherit";     // Esto no conviene, no deja ver el color del canto en la busqueda
        
        // El navegador usa el href directamente
        item.href = canto.url;

        // Si en songs-data.js dice targetBlank: true, el navegador abre pestaña nueva solo
        if (canto.targetBlank === true || canto.targetBlank === "true") {
            item.target = "_blank";
            item.rel = "noopener noreferrer";
        } else {
            item.target = "_self";
        }

        item.innerHTML = `
            <strong>${canto.title}</strong>
            <br>
            <small>${canto.subtitle || ""}</small>
        `;

        // SIN ONCLICK, SIN PREVENTDEFAULT. 
        // Dejamos que el navegador haga su trabajo natural.
        
        mainResults.appendChild(item);
    });

    contenedor.appendChild(mainResults);
    contenedor.style.display = 'block';
}

    document.addEventListener('click', function(e) {
        const contenedorBuscador = document.querySelector('.buscador-cantos') || document.querySelector('.search-container');
        const res = document.getElementById('resultadosBusqueda');
        if (res && contenedorBuscador && !contenedorBuscador.contains(e.target)) {
            res.style.display = 'none';
        }
});
