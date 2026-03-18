document.addEventListener('DOMContentLoaded', function() {
    const songsList = document.querySelector('.songs-list');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const toggleFilters = document.getElementById('toggleFilters');
    const filtersContainer = document.querySelector('.filters-container');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const momentFilters = document.querySelectorAll('.moment-filter');
    const toggleView = document.getElementById('toggleView');
    
    let activeFilters = {
        category: null,
        moments: []
    };
    
    let clickCount = 0;
    let clickTimer = null;
    
    // Función para obtener los parámetros de la URL
    function getUrlParams() {
        const params = {};
        window.location.search.substring(1).split('&').forEach(param => {
            const parts = param.split('=');
            if (parts[0] && parts[1]) {
                params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            }
        });
        return params;
    }

    // Mostrar todos los cantos al cargar la página
    displaySongs(songs);

    // --- NUEVA FUNCIONALIDAD: Aplicar filtros desde la URL al cargar la página ---
    const urlParams = getUrlParams();

    // Si hay un parámetro de categoría en la URL
    if (urlParams.category) {
        activeFilters.category = urlParams.category; // Asignar la categoría activa
        // Resaltar el botón de categoría correspondiente en la interfaz
        categoryFilters.forEach(filterBtn => {
            if (filterBtn.getAttribute('data-category').toLowerCase() === urlParams.category.toLowerCase()) {
                filterBtn.classList.add('active');
            }
        });
    }

    // Si hay un parámetro de momento en la URL
    if (urlParams.moment) {
        // Asumimos que el parámetro 'moment' puede contener múltiples momentos separados por comas
        const momentsFromUrl = urlParams.moment.split(',').map(m => m.trim());
        momentsFromUrl.forEach(momentParam => {
            activeFilters.moments.push(momentParam); // Añadir el momento activo
            // Resaltar el botón de momento correspondiente en la interfaz
            momentFilters.forEach(filterBtn => {
                if (filterBtn.getAttribute('data-moment').toLowerCase() === momentParam.toLowerCase()) {
                    filterBtn.classList.add('active');
                }
            });
        });
    }
    
    // Llamar a filterSongs para aplicar los filtros iniciales de la URL
    filterSongs();
    // --- FIN NUEVA FUNCIONALIDAD ---


// Función para mostrar los cantos
// Modifica la función displaySongs para manejar ambas vistas
function displaySongs(songsToDisplay) {
    songsList.innerHTML = '';
    
    songsToDisplay.forEach(song => {
        const songCard = document.createElement('a');
        songCard.className = 'song-card';
        songCard.setAttribute('data-category', song.category);
        songCard.setAttribute('data-id', song.id);
        songCard.href = song.url;
        
        if (toggleView.checked) {
            
            //Ocultando el contenido
            filtersContainer.classList.add('hidden');
            toggleFilters.innerHTML = '';
            //**************************************** */

            // Vista de tarjetas (como está actualmente)
            songCard.innerHTML = `
            
                <h3 class="song-title">${song.title}</h3>
                <p class="song-subtitle">${song.subtitle}</p>
                <div>
                    <span class="song-category" style="background-color: ${getCategoryColor(song.category)}; color: ${getCategoryTextColor(song.category)}">${song.category}</span>
                    ${song.moments.map(moment => `<span class="song-moment">${moment}</span>`).join('')}
                </div>
            `;
        } else {
            // Vista de lista simplificada
            songCard.innerHTML = `
                <b class="song-title">${song.title}</b>
            `;
        }
        
        songsList.appendChild(songCard);
    });
    
    // Aplicar la clase según el estado del checkbox
    if (toggleView.checked) {
        songsList.classList.remove('list-view');
    } else {
        songsList.classList.add('list-view');
    }
}

// Agrega el event listener para el toggle de vista
toggleView.addEventListener('change', function() {

    //Ocultando el contenido
    filtersContainer.classList.add('hidden');
    toggleFilters.innerHTML = '';
    //**************************************** */

    // Actualizar el texto del label
    const labelText = this.nextElementSibling;
    labelText.textContent = this.checked ? 'Tarjetas' : 'Lista';
    
    // Volver a mostrar las canciones con la nueva vista
    filterSongs();
});
    
    function getCategoryColor(category) {
        switch(category) {
            case 'Precatecumenado': return '#eee';
            case 'Catecumenado': return '#2196F3';
            case 'Eleccion': return '#8BC34A';
            case 'Liturgia': return '#FFEB3B';
            default: return '#9E9E9E';
        }
    }
    
    function getCategoryTextColor(category) {
        switch(category) {
            case 'Precatecumenado': return '#333333';
            case 'Liturgia': return '#333333';
            default: return '#ffffff';
        }
    }
    
        function filterSongs() {
        // 1. Capturamos y normalizamos la búsqueda del usuario
        const rawSearch = searchInput.value.toLowerCase();
        const busquedaLimpia = rawSearch.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Quita acentos
        const busquedaTotalmentePegada = busquedaLimpia.replace(/\s/g, ""); // Quita todos los espacios

        const filteredSongs = songs.filter(song => {
            // --- LÓGICA DE FILTROS (Categoría y Momentos) ---
            const matchesCategory = !activeFilters.category || 
                                (song.category && song.category.toLowerCase() === activeFilters.category.toLowerCase());
            
            const matchesMoments = activeFilters.moments.length === 0 || 
                                activeFilters.moments.every(m => 
                                    song.moments && song.moments.some(sm => sm.toLowerCase() === m.toLowerCase())
                                );

            // --- LÓGICA DE BÚSQUEDA DAVID (Ultra Elástica) ---
            // Normalizamos los campos del canto para comparar
            const t = (song.title || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const s = (song.subtitle || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const c = (song.content || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            const poolConEspacios = `${t} ${s} ${c}`;
            const poolSinEspacios = poolConEspacios.replace(/\s/g, "");

            // REGLA 1: Búsqueda tal cual (con los espacios que ponga el usuario)
            const coincideNormal = poolConEspacios.includes(busquedaLimpia);

            // REGLA 2: Búsqueda elástica (ignora espacios en usuario y en el canto)
            // Esto arregla lo de "quienesesta que sube"
            const coincideElastic = busquedaTotalmentePegada.length > 2 && 
                                    poolSinEspacios.includes(busquedaTotalmentePegada);

            const matchesSearch = !busquedaLimpia || coincideNormal || coincideElastic;

            return matchesCategory && matchesMoments && matchesSearch;
        });

        displaySongs(filteredSongs);
    }
    
    function removeAccents(text) {
        return text.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")  // Elimina acentos
            .replace(/[¿¡!,?]/g, "");         // Elimina signos de interrogación, exclamación y comas
    }
    
    
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', filterSongs);
    
    // Contador de clics en el buscador
    searchInput.addEventListener('click', function() {
        clickCount++;
        
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
        
        clickTimer = setTimeout(() => {
            if (clickCount >= 3) {
                clearSearch.click();
            }
            clickCount = 0;
        }, 300);
    });
    
    // Limpiar búsqueda y filtros
    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        activeFilters.category = null;
        activeFilters.moments = [];
        
        categoryFilters.forEach(f => f.classList.remove('active'));
        momentFilters.forEach(f => f.classList.remove('active'));
        
        displaySongs(songs);
    });
    
    // Mostrar/ocultar filtros
    toggleFilters.addEventListener('click', function() {
        filtersContainer.classList.toggle('hidden');
        this.innerHTML = filtersContainer.classList.contains('hidden') ? '' : '';
    });
    
    // Filtros por categoría
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            if (activeFilters.category === category) {
                activeFilters.category = null;
                this.classList.remove('active');
            } else {
                categoryFilters.forEach(f => f.classList.remove('active'));
                activeFilters.category = category;
                this.classList.add('active');
            }
            
            filterSongs();
        });
    });
    
    // Filtros por momento litúrgico
    momentFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const moment = this.getAttribute('data-moment');
            const index = activeFilters.moments.indexOf(moment);
            
            if (index > -1) {
                activeFilters.moments.splice(index, 1);
                this.classList.remove('active');
            } else {
                activeFilters.moments.push(moment);
                this.classList.add('active');
            }
            
            filterSongs();
        });
    });
});

// El inicio es local, así que marcamos éxito inmediato
window._uiYaSincronizada = true;