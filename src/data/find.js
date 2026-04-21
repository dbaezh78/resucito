/* **************************************************
   MOTOR DE BÚSQUEDA SECUENCIAL - Edición David (Final)
   - Unificación de fuentes: songs + songsAev
   - Limpieza de código duplicado
************************************************** */

// 1. Unificamos ambos arreglos. Si uno no existe, usa un array vacío.
const allSongs = [
    ...(typeof songs !== 'undefined' ? songs : []), 
    ...(typeof songsaEv !== 'undefined' ? songsaEv : [])
];

// 2. Detectar input
const inputID = document.getElementById('DavidLoBusca') ? 'DavidLoBusca' : 'searchInput';

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

    // Filtramos usando la lista unificada
    const resultados = filtrarCantosUltra(busquedaLimpia, busquedaPegada);

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
 * Lógica de Filtrado Secuencial
 */
function filtrarCantosUltra(fraseNormal, frasePegada) {
    // Usamos allSongs, que contiene tanto songs como songsAev
    return allSongs.filter(canto => {
        if (canto.visible === "no") return false;

        const t = limpiarTextoMaestro(canto.title || "");
        const s = limpiarTextoMaestro(canto.subtitle || "");
        const c = limpiarTextoMaestro(canto.content || "");

        const poolConEspacios = `${t} ${s} ${c}`;
        const poolSinEspacios = poolConEspacios.replace(/\s/g, "");

        // Reglas de coincidencia
        const coincideNormal = poolConEspacios.includes(fraseNormal);
        const coincidePegado = frasePegada.length > 2 && poolSinEspacios.includes(frasePegada);

        // Aquí está la lógica que necesitabas
        return coincideNormal || coincidePegado;
    });
}

/**
 * Renderizado de resultados
 */
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
        item.href = canto.url;

        if (canto.targetBlank === true || canto.targetBlank === "true") {
            item.target = "_blank";
            item.rel = "noopener noreferrer";
        } else {
            item.target = "_self";
        }

        item.innerHTML = `<strong>${canto.title}</strong><br><small>${canto.subtitle || ""}</small>`;
        mainResults.appendChild(item);
    });

    contenedor.appendChild(mainResults);
    contenedor.style.display = 'block';
}

// Cerrar resultados al hacer clic fuera
document.addEventListener('click', function(e) {
    const contenedorBuscador = document.querySelector('.buscador-cantos') || document.querySelector('.search-container');
    const res = document.getElementById('resultadosBusqueda');
    if (res && contenedorBuscador && !contenedorBuscador.contains(e.target)) {
        res.style.display = 'none';
    }
});