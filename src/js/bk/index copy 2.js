// index.js - JavaScript específico del canto para la página principal

// Asumiendo que `allCantosData` está disponible globalmente desde `canto_data.js`
// En un sistema de módulos, usarías: import { allCantosData } from './canto_data.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired.");

    // Helper para normalizar nombres para parámetros de URL (elimina acentos y convierte espacios a guiones)
    const normalizeForUrl = (name) => {
        return name.toLowerCase()
                   .replace(/á/g, 'a')
                   .replace(/é/g, 'e')
                   .replace(/í/g, 'i')
                   .replace(/ó/g, 'o')
                   .replace(/ú/g, 'u')
                   .replace(/ñ/g, 'n')
                   .replace(/\s/g, '-');
    };

    // Listas de categorías y momentos para determinar el tipo de URL
    // Estas listas ahora almacenan los nombres normalizados para una comparación consistente.
    const categoriesList = ["precatecumenado", "catecumenado", "eleccion", "liturgia"];
    const momentsList = [
        "entrada", "paz", "fraccion-del-pan", "comunion", "final",
        "adviento", "navidad", "pascua", "Pentecostés", "virgen-maria", // "Vírgen María" normalizado
        "aclamacion", "laudes", "penitencial", "salmodia", "nuevo-testamento", "antiguo-testamento",
        "cuaresma"
    ];


    // 1. Obtener el parámetro 'canto' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const cantoIdFromUrl = urlParams.get('canto');

    // 2. Definir el ID del canto a cargar
    // Si hay un ID en la URL, úsalo; de lo contrario, usa "alavictimapascual" como predeterminado
    const cantoIdToLoad = cantoIdFromUrl || "alavictimapascual"; 

    // 3. Busca el canto específico por su ID en la base de datos
    const currentCanto = allCantosData.find(canto => canto.id === cantoIdToLoad);

    if (currentCanto) {
        console.log("Canto found:", currentCanto.title);
        // Procesar las categorías para incluir sus URLs
        const processedCategories = currentCanto.category.map(catName => {
            let baseUrl = "/resucito/index.html?";
            let paramType = "";
            
            // Normalizar el nombre de la categoría/momento antes de la comparación
            let normalizedCatName = normalizeForUrl(catName);

            // Determinar si es una categoría o un momento usando las listas normalizadas
            if (categoriesList.includes(normalizedCatName)) {
                paramType = "category";
            } else if (momentsList.includes(normalizedCatName)) {
                paramType = "moment";
            } else {
                // Fallback si no se encuentra en ninguna lista, se asume como categoría
                console.warn(`Categoría/Momento "${catName}" (normalizado: "${normalizedCatName}") no encontrado en las listas predefinidas. Se usará el parámetro "category".`);
                paramType = "category";
            }
            
            const categoryUrl = `${baseUrl}${paramType}=${normalizedCatName}`;
            return { name: catName, url: categoryUrl };
        });
        console.log("Processed categories:", processedCategories);

        // Llamar a la función de inicialización del JS general, pasándole los datos del canto
        // y las categorías procesadas.
        if (typeof initializeCantoPage === 'function') {
            initializeCantoPage(currentCanto, processedCategories);
        } else {
            console.error("Error: initializeCantoPage no está definida. Asegúrate de que jsgral.js se cargue correctamente.");
        }
    } else {
        console.error(`Error: El canto con ID \"${cantoIdToLoad}\" no se encontró en canto_data.js. Verifica el ID y el contenido de canto_data.js.`);
        // Opcional: Mostrar un mensaje al usuario si el canto no se encuentra
        document.querySelector('.dbt1').textContent = "Canto no encontrado";
        document.querySelector('.dbs2').textContent = "Verifica la URL o el ID del canto.";
        document.getElementById('canto-left-container').innerHTML = "<p>Lo sentimos, el canto solicitado no existe.</p>";
        document.getElementById('canto-right-container').innerHTML = "";
        document.getElementById('cantoCategories').innerHTML = "";
        document.getElementById('dbno').textContent = "";
        document.getElementById('tt').textContent = "Canto no encontrado";
    }
});
