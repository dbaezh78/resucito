// jsgral.js - JavaScript General para todos los cantos

// Definición de los acordes y su mapeo a semitonos (desde Do)
const cords = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "Si♭", "Si"];
// Mapeo de nombres de notas a su índice de semitono (Do=0, Do#=1, etc.)
const noteToSemitone = {};
cords.forEach((note, index) => {
    noteToSemitone[note] = index;
});

// Definición de los factores de escalado y posibles sobrescrituras de posición
const positionConfigs = {
    'mobile-small': { // Para anchos de pantalla < 384px
        minWidth: 0,
        maxWidth: 383,
        factor: 0.734, // Factor por defecto, ajustar según necesidad
    },
    'mobile': { // Para anchos de pantalla entre 384px y 767px
        minWidth: 384,
        maxWidth: 767,
        factor: 0.734, // Factor por defecto, ajustar según necesidad
    },
    'tablet': { // Para anchos de pantalla entre 768px y 991px
        minWidth: 768,
        maxWidth: 991,
        factor: 1.36, // Factor por defecto, ajustar según necesidad
    },
    'desktop-small': { // Para anchos de pantalla entre 992px y 1279px
        minWidth: 992,
        maxWidth: 1279,
        factor: 1.0, // Factor por defecto, ajustar según necesidad
    },
    'desktop': { // Para anchos de pantalla >= 1280px
        minWidth: 1280,
        maxWidth: Infinity,
        factor: 1.0, // Factor por defecto, ajustar según necesidad
    }
};

let currentKeyOffset = 0;
let clickedDisplayedNoteSemitone = 0;

// Referencias a los contenedores del DOM (se inicializarán al cargar el canto)
let cantoLeftContainer;
let cantoRightContainer;
let chordSelectionModal;
let chordListContainer;
let cantoCategoriesContainer; // Nueva referencia para el contenedor de categorías
let cantoContentWrapper; // Nueva referencia para el contenedor principal de las columnas
let cejillaSelect; // ADDED: Nueva referencia para el select de cejilla

// Referencias para el control de audio
let cantoAudioPlayer;
let audioControlBtn;
let audioIcon;

// Nuevo: Referencia para el botón "Mostrar toda la asamblea"
let showAllAsambleaBtn;
let showAllAsambleaIcon; // Icono dentro del botón

// Nuevo: Referencia para el botón de alternar vista
let toggleVistaBtn;
let toggleVistaIcon;

// Nuevo: Referencias para la modal de imágenes de acordes
let callNotasBtn; // El botón music_note
let chordImagesModal;
let chordImagesContainer;

// Nuevo: Referencias para la modal de imagen grande
let largeImageModal;
let largeChordImage;

// Nuevo: Mapa para almacenar el estado expandido/colapsado de los bloques
const collapsibleStates = new Map();

// Lista de nombres de archivos de imágenes de acordes
const chordImageFilenames = [
    "do.jpg",
    "dot3.jpg",
    "dom.jpg",
    "do7.jpg",
    "do72.jpg",
    "dos.jpg",
    "dos7.jpg",
    "dosm.jpg",

    "re.jpg",
    "rem.jpg",
    "re7.jpg",
    "rem9.jpg",
    "res.jpg",
    "res1.jpg",
    "resm.jpg",

    "mi.jpg",
    "mim.jpg",
    "mi6.jpg",
    "mi7.jpg",
    "mim6.jpg",
    "mimaj7.jpg",

    "fa.jpg",
    "fam.jpg",
    "fa7.jpg",
    "famaj7.jpg",
    "famaj713.jpg",

    "fas.jpg",
    "fasm.jpg",
    "fas5-9dim.jpg",
    "fas7.jpg",

    "sol.jpg",
    "sol2.jpg",
    "sol3.jpg",
    "solm.jpg",
    "sol7.jpg",

    "sols.jpg",
    "solsm.jpg",
    "sols7.jpg",

    "la.jpg",
    "la2.jpg",
    "la3.jpg",
    "la6.jpg",
    "la7.jpg",
    "lab.jpg",
    "lam.jpg",
    "lam6.jpg",
    "lam7.jpg",


    "si.jpg",
    "si7.jpg",
    "si72.jpg",
    "sib.jpg",
    "sib7.jpg",
    "sibm.jpg",
    "sim.jpg",

];
const IMAGE_BASE_PATH = "/docs/ima/";

// Variables para el scroll automático
let scrollSpeed = 200; // Velocidad de desplazamiento en píxeles por segundo (valor por defecto)
let scrollIncrement = 1; // Cantidad de píxeles a desplazar en cada paso (valor por defecto)
let isScrolling = false;
let scrollInterval;
let startScrollBtn; // Referencia al botón de scroll
let scrollIcon; // Referencia al icono del botón de scroll

// Referencias para los botones de navegación anterior/siguiente
let prevCantoBtn;
let nextCantoBtn;


// Función para obtener el nombre legible del acorde a partir del nombre del archivo
const getDisplayNameFromFilename = (filename) => {
    let name = filename.split('.')[0];
    // Reemplazar 's' por '#' para sostenidos (ej. 'dos' -> 'Do#')
    name = name.replace(/s$/, '#');
    name = name.replace(/s7$/, '#7');
    name = name.replace(/2$/, '');
    name = name.replace(/sm$/, '#m');
    name = name.replace(/t3$/, '');
    name = name.replace(/s1$/, '#');
    name = name.replace(/s5$/, '#5 Traste');
    name = name.replace(/s7$/, '#7 Traste');
    name = name.replace(/s5-9dim$/, '#5-9dim');
    name = name.replace(/sib$/, 'si♭');
    name = name.replace(/sib7$/, 'si♭7');
    name = name.replace(/sibm$/, 'si♭m');
    name = name.replace(/sol2$/, 'sol');
    name = name.replace(/sol3$/, 'sol');
    name = name.replace(/la3$/, 'la');
    // Reemplazar 'b' por '♭' para bemoles (ej. 'sib' -> 'Si♭')
    name = name.replace(/b$/, '♭');

    // Capitalizar la primera letra
    if (name.length > 0) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    return name;
};


// Función para transponer una nota
const transposeNote = (originalNote, semitoneDifference) => {
    const originalSemitone = noteToSemitone[originalNote];
    if (originalSemitone === undefined) {
        return originalNote;
    }
    let newSemitone = (originalSemitone + semitoneDifference) % cords.length;
    if (newSemitone < 0) {
        newSemitone += cords.length;
    }
    return cords[newSemitone];
};

// Función para obtener la configuración de posición actual basada en el ancho de la pantalla
const getCurrentPositionConfig = (screenWidth) => {
    if (screenWidth <= positionConfigs['mobile-small'].maxWidth) {
        return positionConfigs['mobile-small'];
    } else if (screenWidth >= positionConfigs.mobile.minWidth && screenWidth <= positionConfigs.mobile.maxWidth) {
        return positionConfigs.mobile;
    } else if (screenWidth >= positionConfigs.tablet.minWidth && screenWidth <= positionConfigs.tablet.maxWidth) {
        return positionConfigs.tablet;
    } else if (screenWidth >= positionConfigs['desktop-small'].minWidth && screenWidth <= positionConfigs['desktop-small'].maxWidth) {
        return positionConfigs['desktop-small'];
    } else {
        return positionConfigs.desktop;
    }
};

// Función para obtener el tipo de dispositivo basado en el ancho de la pantalla
const getDeviceType = (screenWidth) => {
    if (screenWidth <= positionConfigs['mobile-small'].maxWidth) {
        return 'mobile-small';
    } else if (screenWidth >= positionConfigs.mobile.minWidth && screenWidth <= positionConfigs.mobile.maxWidth) {
        return 'mobile';
    } else if (screenWidth >= positionConfigs.tablet.minWidth && screenWidth <= positionConfigs.tablet.maxWidth) {
        return 'tablet';
    } else if (screenWidth >= positionConfigs['desktop-small'].minWidth && screenWidth <= positionConfigs['desktop-small'].maxWidth) {
        return 'desktop-small';
    } else {
        return 'desktop';
    }
};

// Función auxiliar para parsear una sola línea de canto (letra y notas)
const parseSingleLineData = (lineContent, sectionClass = null, textStyleClass = null) => {
    const firstParenIndex = lineContent.indexOf('(');
    let letra = '';
    let notasRawString = '';

    if (firstParenIndex !== -1) {
        letra = lineContent.substring(0, firstParenIndex).trim();
        // Eliminar comas al final si existen
        if (letra.endsWith(',')) {
            letra = letra.substring(0, letra.length - 1).trim();
        }
        // Eliminar comillas si la letra está entre comillas
        if (letra.startsWith('"') && letra.endsWith('"')) {
            letra = letra.substring(1, letra.length - 1);
        }
        notasRawString = lineContent.substring(firstParenIndex);
    } else {
        letra = lineContent.trim();
    }

    const notes = [];
    if (notasRawString) {
        const noteBlockMatches = notasRawString.match(/\(([^)]+)\)/g);
        if (noteBlockMatches) {
            noteBlockMatches.forEach(noteBlock => {
                const content = noteBlock.substring(1, noteBlock.length - 1);
                const parts = content.split(',');
                const noteName = parts[0].trim();
                const noteType = parts[1] ? parts[1].trim() : '';
                const conceptualPositionUnit = parseFloat(parts[2]);
                notes.push({
                    originalNote: noteName,
                    type: noteType,
                    conceptualPositionUnit: conceptualPositionUnit
                });
            });
        }
    }
    return { letra, notes, sectionClass, textStyleClass };
};


// Función para parsear una sección del canto (lizq o lder), incluyendo bloques colapsables
const parseCantoSectionData = (cantoSectionData) => {
    return cantoSectionData.map(entry => {
        if (entry.type === "collapsible-block") {
            // Es un bloque colapsable
            return {
                type: "collapsible-block",
                id: entry.id,
                initialState: entry.initialState || "collapsed", // Default a colapsado
                triggerLine: parseSingleLineData(entry.triggerLine, entry.sC, entry.tcss), // Parsear la línea del disparador
                lines: entry.lines.map(lineEntry => parseSingleLineData(lineEntry.line, lineEntry.sC, lineEntry.tcss)) // Parsear todas las líneas internas
            };
        } else {
            // Es una línea normal
            // CORRECCIÓN: Asegurarse de pasar la propiedad 'line' y las clases 'sC' y 'tcss'
            return parseSingleLineData(entry.line, entry.sC, entry.tcss);
        }
    });
};

// Función auxiliar para renderizar una línea de canto ya parseada
const renderParsedLine = (lineaParsed) => {
    const lineaDiv = document.createElement('div');
    lineaDiv.classList.add('linea-canto');

    if (lineaParsed.sectionClass) {
        lineaParsed.sectionClass.split(' ').forEach(cls => {
            if (cls) {
                lineaDiv.classList.add(cls);
            }
        });
    }

    const letraSpan = document.createElement('span');
    letraSpan.classList.add('letra');
    letraSpan.textContent = lineaParsed.letra;
    // Almacenar el texto original limpio para los disparadores colapsables
    letraSpan.dataset.originalText = lineaParsed.letra;

    if (lineaParsed.textStyleClass) {
        letraSpan.classList.add(lineaParsed.textStyleClass);
    }

    lineaDiv.appendChild(letraSpan);

    lineaParsed.notes.forEach(noteInfo => {
        const noteSpan = document.createElement('span');
        noteSpan.classList.add('nota-posicionada');

        const transposedNoteName = transposeNote(noteInfo.originalNote, currentKeyOffset);
        //noteSpan.textContent = transposedNoteName + noteInfo.type;
        // Deparación de la Nota o Acorde del Estado de la nota o el acorde
        noteSpan.textContent = transposedNoteName + (noteInfo.type ? ' ' : '') + noteInfo.type;

        noteSpan.dataset.originalNote = noteInfo.originalNote;
        noteSpan.dataset.conceptualPositionUnit = noteInfo.conceptualPositionUnit;

        noteSpan.addEventListener('click', () => {
            openChordSelectionModal(transposedNoteName);
        });

        lineaDiv.appendChild(noteSpan);
    });
    return lineaDiv;
};


// Función para renderizar una sección específica del canto en un contenedor
const renderCantoSection = (container, parsedData) => {
    container.innerHTML = ''; // Limpiar contenido del contenedor

    parsedData.forEach(entry => {
        if (entry.type === "collapsible-block") {
            // Es un bloque colapsable
            const blockContainer = document.createElement('div');
            blockContainer.classList.add('collapsible-block-container');
            blockContainer.dataset.blockId = entry.id;

            const triggerDiv = renderParsedLine(entry.triggerLine); // Renderizar el disparador
            triggerDiv.classList.add('collapsible-trigger');
            triggerDiv.dataset.blockId = entry.id; // Para referencia

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('collapsible-content');
            contentDiv.dataset.blockId = entry.id; // Para referencia

            // Renderizar las líneas internas del bloque
            entry.lines.forEach(linea => {
                contentDiv.appendChild(renderParsedLine(linea));
            });

            const triggerLetraSpan = triggerDiv.querySelector('.letra');

            // Determinar el estado actual del bloque: si ya está en el mapa, usar ese estado; si no, usar el estado inicial
            let isCurrentlyExpanded = collapsibleStates.has(entry.id) ? collapsibleStates.get(entry.id) : (entry.initialState === "expanded");
            triggerDiv.dataset.isExpanded = isCurrentlyExpanded.toString();

            // Aplicar el display y el texto del disparador según el estado
            if (isCurrentlyExpanded) {
                contentDiv.style.display = ''; // Mostrar
                triggerLetraSpan.textContent = triggerLetraSpan.dataset.originalText; // Asegurarse de que no tenga "..."
            } else {
                contentDiv.style.display = 'none'; // Ocultar
                if (!triggerLetraSpan.textContent.endsWith(' ...')) {
                    triggerLetraSpan.textContent += ' ...';
                }
                triggerDiv.dataset.isExpanded = "false";
                collapsibleStates.set(entry.id, false); // Guardar estado
            }

            // Lógica para el toggle
            triggerDiv.addEventListener('click', () => {
                const wasExpanded = contentDiv.style.display !== 'none';
                if (wasExpanded) {
                    contentDiv.style.display = 'none';
                    if (!triggerLetraSpan.textContent.endsWith(' ...')) {
                        triggerLetraSpan.textContent += ' ...';
                    }
                    triggerDiv.dataset.isExpanded = "false";
                    collapsibleStates.set(entry.id, false); // Guardar estado
                } else {
                    contentDiv.style.display = ''; // Mostrar
                    triggerLetraSpan.textContent = triggerLetraSpan.dataset.originalText; // Restaurar texto original
                    triggerDiv.dataset.isExpanded = "true";
                    collapsibleStates.set(entry.id, true); // Guardar estado
                }
                updateShowAllAsambleaIcon(); // Actualizar el icono del botón de asamblea
            });

            blockContainer.appendChild(triggerDiv);
            blockContainer.appendChild(contentDiv);
            container.appendChild(blockContainer);

        } else {
            // Es una línea normal
            container.appendChild(renderParsedLine(entry));
        }
    });
};

// Función principal para renderizar todo el canto
const renderCanto = () => {
    console.log("Rendering canto sections...");
    renderCantoSection(cantoLeftContainer, currentCantoData.lizq);
    renderCantoSection(cantoRightContainer, currentCantoData.lder);
    adjustNotePositions(); // Ajustar posiciones después de renderizar ambos lados
    console.log("Canto rendering complete.");
};

const adjustNotePositions = () => {
    const screenWidth = window.innerWidth;
    const currentConfig = getCurrentPositionConfig(screenWidth);

    // Ajustar notas en ambos contenedores
    document.querySelectorAll('.linea-canto').forEach(lineaDiv => {
        lineaDiv.querySelectorAll('.nota-posicionada').forEach(notaSpan => {
            const conceptualPositionUnit = parseFloat(notaSpan.dataset.conceptualPositionUnit);
            let adjustedPosition = conceptualPositionUnit;

            const overrideKey = `p${conceptualPositionUnit}`;
            if (currentConfig[overrideKey] !== undefined) {
                adjustedPosition = currentConfig[overrideKey];
            } else {
                adjustedPosition = conceptualPositionUnit * currentConfig.factor;
            }

            notaSpan.style.left = `${adjustedPosition}px`;
        });
    });
};

const openChordSelectionModal = (currentDisplayedNoteClicked) => {
    clickedDisplayedNoteSemitone = noteToSemitone[currentDisplayedNoteClicked];
    chordListContainer.innerHTML = '';

    cords.forEach(chord => {
        const chordItem = document.createElement('div');
        chordItem.classList.add('chord-item');
        chordItem.textContent = chord;
        chordItem.addEventListener('click', () => {
            const selectedChordFromModalSemitone = noteToSemitone[chord];
            const semitonesToShift = selectedChordFromModalSemitone - clickedDisplayedNoteSemitone;

            currentKeyOffset = (currentKeyOffset + semitonesToShift) % cords.length;
            if (currentKeyOffset < 0) {
                currentKeyOffset += cords.length;
            }

            renderCanto(); // Esto ahora preservará el estado de los colapsables
            chordSelectionModal.style.display = 'none';
            updateShowAllAsambleaIcon(); // Actualizar el icono del botón de asamblea
        });
        chordListContainer.appendChild(chordItem);
    });
    chordSelectionModal.style.display = 'flex';
};

// Nueva función para abrir la modal de imágenes de acordes
const openChordImagesModal = () => {
    if (!chordImagesContainer) {
        console.error("Error: #chordImageList no encontrado.");
        return;
    }
    chordImagesContainer.innerHTML = ''; // Limpiar contenido previo

    chordImageFilenames.forEach(filename => {
        const chordName = getDisplayNameFromFilename(filename); // Usar la nueva función
        const chordImageItem = document.createElement('div');
        chordImageItem.classList.add('chord-image-item');
        // Determinar la nota base para la clase de color
        let baseNoteForColor = chordName.replace(/[#♭m79]/g, ''); // Eliminar #, ♭, m, 7, 9 para obtener la nota base (Do, Re, Mi, etc.)
        baseNoteForColor = baseNoteForColor.toLowerCase(); // Convertir a minúsculas para la clase CSS
        // Añadir una clase basada en la nota base para el estilo de color
        chordImageItem.classList.add(`chord-color-${baseNoteForColor}`);
        const img = document.createElement('img');
        img.src = IMAGE_BASE_PATH + filename;
        img.alt = chordName; // Texto alternativo para accesibilidad
        // Manejo de error para imágenes no encontradas
        img.onerror = () => {
            console.warn(`No se pudo cargar la imagen: ${img.src}`);
            img.style.display = 'none'; // Ocultar la imagen si no se carga
        };
        const nameSpan = document.createElement('span');
        nameSpan.textContent = chordName;
        // Añadir event listener para abrir la imagen grande
        chordImageItem.addEventListener('click', () => {
            openLargeImageModal(img.src, chordName);
        });
        chordImageItem.appendChild(img);
        chordImageItem.appendChild(nameSpan);
        chordImagesContainer.appendChild(chordImageItem);
    });
    chordImagesModal.style.display = 'flex'; // Mostrar la modal
};

// Nueva función para abrir la modal de imagen grande
const openLargeImageModal = (imageSrc, imageName) => {
    if (!largeImageModal || !largeChordImage) {
        console.error("Error: Elementos de la modal de imagen grande no encontrados.");
        return;
    }
    largeChordImage.src = imageSrc;
    largeChordImage.alt = imageName;
    largeImageModal.style.display = 'flex'; // Mostrar la modal de imagen grande
};

// Función para cerrar la modal de imágenes de acordes
const closeChordImagesModal = () => {
    chordImagesModal.style.display = 'none';
};

// Función para cerrar la modal de imagen grande
const closeLargeImageModal = () => {
    largeImageModal.style.display = 'none';
};

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustNotePositions, 100);
});

// Función para renderizar las categorías como enlaces
const renderCategories = (categoriesWithUrls) => {
    if (!cantoCategoriesContainer) {
        console.error("Error: cantoCategoriesContainer no se encontró en el DOM.");
        return;
    }
    cantoCategoriesContainer.innerHTML = '';
    categoriesWithUrls.forEach(catInfo => {
        const categoryLink = document.createElement('a');
        categoryLink.href = catInfo.url;
        categoryLink.textContent = catInfo.name;
        categoryLink.classList.add('category-link');
        // Añadir la clase de color si existe
        if (catInfo.className) {
            categoryLink.classList.add(catInfo.className);
        }
        cantoCategoriesContainer.appendChild(categoryLink);
    });
    console.log("Categories rendered:", categoriesWithUrls);
};

// Función para verificar si todos los bloques de asamblea están expandidos
const areAllAssemblyBlocksExpanded = () => {
    // Obtener todos los bloques colapsables que tienen un ID que comienza con "asamblea_"
    const assemblyBlocks = document.querySelectorAll('.collapsible-block-container[data-block-id^="asamblea_"]');
    if (assemblyBlocks.length === 0) return false; // Si no hay bloques de asamblea, consideramos que no todos están expandidos
    for (const block of assemblyBlocks) {
        const blockId = block.dataset.blockId;
        // Si el estado del bloque no está en el mapa o es false (colapsado), entonces no todos están expandidos
        if (!collapsibleStates.has(blockId) || !collapsibleStates.get(blockId)) {
            return false;
        }
    }
    return true; // Todos los bloques de asamblea están expandidos
};

// Función para actualizar el icono del botón "Mostrar toda la asamblea"
const updateShowAllAsambleaIcon = () => {
    if (showAllAsambleaIcon) {
        const allExpanded = areAllAssemblyBlocksExpanded();
        // Si todos están expandidos, el botón debería ofrecer la opción de colapsar (visibility_off)
        // Si no todos están expandidos (alguno o todos colapsados), el botón debería ofrecer la opción de expandir (visibility)
        showAllAsambleaIcon.textContent = allExpanded ? 'visibility_off' : 'visibility';
    }
};

// Función para actualizar el icono del botón de alternar vista
const updateToggleVistaIcon = () => {
    if (toggleVistaIcon && cantoContentWrapper) {
        // Comprobar la dirección actual del flexbox
        const isStacked = cantoContentWrapper.classList.contains('stacked-layout');
        toggleVistaIcon.textContent = isStacked ? 'view_agenda' : 'menu_book';
    }
};

// Declaración global de currentCantoData
// Es crucial que esta variable se declare una sola vez en el ámbito global.
// Su valor inicial se establecerá en initializeCantoPage.
let currentCantoData = { lizq: [], lder: [] };

// Definición de categorías principales y sus clases de color
const mainCategories = {
    "Precatecumenado": "category-precatecumenado",
    "Catecumenado": "category-catecumenado",
    "Eleccion": "category-eleccion", // Asegúrate de que este nombre coincida exactamente con canto_data.js
    "Liturgia": "category-liturgia"
};

const momentNames = [
    "Entrada", "Paz", "Fracción del Pan", "Comunión", "Final",
    "Adviento", "Navidad", "Pascua", "Pentecostés", "Virgen María", // Corregido: Vírgen María -> Virgen María
    "Aclamación", "Laudes", "Penitencial", "Salmodia",
    "Nuevo Testamento", "Antiguo Testamento", "Cuaresma" // Añadido Cuaresma explícitamente si se usa como momento
];


// Función de inicialización que será llamada desde cada archivo de canto
const initializeCantoPage = (cantoSpecificData) => {
    console.log("Initializing canto page with data:", cantoSpecificData);

    // Asignar referencias a los elementos del DOM
    cantoLeftContainer = document.getElementById('canto-left-container');
    cantoRightContainer = document.getElementById('canto-right-container');
    chordSelectionModal = document.getElementById('chordSelectionModal');
    chordListContainer = document.getElementById('chordList');
    cantoCategoriesContainer = document.getElementById('cantoCategories');
    cantoContentWrapper = document.querySelector('.canto-content-wrapper');
    cejillaSelect = document.getElementById('cejillaSelect');

    // Referencias para el control de audio
    cantoAudioPlayer = document.getElementById('cantoAudioPlayer');
    audioControlBtn = document.getElementById('audio-control-btn');
    audioIcon = audioControlBtn ? audioControlBtn.querySelector('.audio-icon') : null;

    // Referencias para el nuevo botón de asamblea
    showAllAsambleaBtn = document.getElementById('showAllAsambleaBtn');
    showAllAsambleaIcon = showAllAsambleaBtn ? showAllAsambleaBtn.querySelector('.mso') : null;

    // Referencias para el nuevo botón de alternar vista
    toggleVistaBtn = document.getElementById('toggleVistaBtn');
    toggleVistaIcon = toggleVistaBtn ? toggleVistaBtn.querySelector('.mso') : null;

    // Referencias para las modales de acordes
    callNotasBtn = document.getElementById('callNotasBtn');
    chordImagesModal = document.getElementById('chordImagesModal');
    chordImagesContainer = document.getElementById('chordImageList');
    largeImageModal = document.getElementById('largeImageModal');
    largeChordImage = document.getElementById('largeChordImage');

    // Referencias para el scroll automático
    startScrollBtn = document.getElementById('startScrollBtn');
    scrollIcon = startScrollBtn ? startScrollBtn.querySelector('.mso') : null;

    // Referencias para los botones de navegación
    prevCantoBtn = document.getElementById('prevCantoBtn');
    nextCantoBtn = document.getElementById('nextCantoBtn');


    // Configurar cejilla si está presente
    if (cejillaSelect) {
        for (let i = 0; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Cejilla ${i}`;
            cejillaSelect.appendChild(option);
        }
        if (cantoSpecificData.cejilla !== undefined) {
            cejillaSelect.value = cantoSpecificData.cejilla;
            currentKeyOffset = -parseInt(cantoSpecificData.cejilla);
        }
        cejillaSelect.addEventListener('change', function() {
            currentKeyOffset = -parseInt(this.value);
            renderCanto();
        });
    } else {
        currentKeyOffset = 0;
    }


    // Parsear y almacenar los datos del canto actual
    if (typeof currentCantoData === 'undefined' || currentCantoData === null) {
        console.warn("currentCantoData no está definido o es nulo al inicio de initializeCantoPage, inicializando.");
        currentCantoData = { lizq: [], lder: [] };
    }
    currentCantoData.lizq = parseCantoSectionData(cantoSpecificData.lizq);
    currentCantoData.lder = parseCantoSectionData(cantoSpecificData.lder);
    console.log("Parsed canto data (lizq):", currentCantoData.lizq);
    console.log("Parsed canto data (lder):", currentCantoData.lder);


    renderCanto();
    updateShowAllAsambleaIcon();
    updateToggleVistaIcon();

    // MODIFICADO: Preparar categorías/momentos para renderizar en el pie de página
    if (cantoSpecificData.category && Array.isArray(cantoSpecificData.category)) {
        const processedCategoriesForFooter = cantoSpecificData.category.map(item => {
            const lowerCaseItem = item.toLowerCase();
            let url = '';
            let className = '';

            // Verificar si es una categoría principal
            if (mainCategories[item]) {
                url = `/resucito/index.html?category=${encodeURIComponent(lowerCaseItem)}`;
                className = mainCategories[item]; // Asigna la clase CSS de color
            }
            // Verificar si es un momento litúrgico
            else if (momentNames.map(m => m.toLowerCase()).includes(lowerCaseItem)) {
                url = `/resucito/index.html?moment=${encodeURIComponent(lowerCaseItem)}`;
                className = 'moment-link'; // Clase genérica para momentos, puedes definir estilos para esta clase
            } else {
                // Si no coincide con categoría ni momento, asumimos que es una categoría por defecto
                // O puedes dejarla sin URL o con una URL de fallback
                console.warn(`"${item}" no coincide con una categoría principal ni con un momento conocido. Se tratará como categoría por defecto.`);
                url = `/resucito/index.html?category=${encodeURIComponent(lowerCaseItem)}`;
                className = 'category-link-default'; // Clase por defecto
            }

            return {
                name: item, // Mantener el nombre original para mostrar
                url: url,
                className: className
            };
        });
        renderCategories(processedCategoriesForFooter);
    } else {
        console.warn("Advertencia: No se proporcionaron categorías válidas en cantoSpecificData para renderizar en el pie de página.");
    }

    // Configurar el reproductor de audio si hay una fuente
    if (cantoAudioPlayer && cantoSpecificData.audioSrc) {
        cantoAudioPlayer.src = cantoSpecificData.audioSrc;
        audioControlBtn.style.display = 'block';
    } else if (audioControlBtn) {
        audioControlBtn.style.display = 'none';
    }

    // Configurar la velocidad de scroll
    if (cantoSpecificData.scrollConfig) {
        const deviceType = getDeviceType(window.innerWidth);
        const config = cantoSpecificData.scrollConfig[deviceType] || cantoSpecificData.scrollConfig.desktop;
        scrollSpeed = config.velocidad;
        scrollIncrement = config.incremento;
    }

    // Configurar botones de navegación
    if (prevCantoBtn) {
        if (cantoSpecificData.ant) {
            prevCantoBtn.href = cantoSpecificData.ant;
            prevCantoBtn.style.display = 'inline-block';
        } else {
            prevCantoBtn.style.display = 'none';
        }
    }
    if (nextCantoBtn) {
        if (cantoSpecificData.sig) {
            nextCantoBtn.href = cantoSpecificData.sig;
            nextCantoBtn.style.display = 'inline-block';
        } else {
            nextCantoBtn.style.display = 'none';
        }
    }

    // Añadir event listeners para botones
    if (callNotasBtn) {
        callNotasBtn.addEventListener('click', openChordImagesModal);
    }

    // Cerrar modales al hacer clic fuera
    if (chordSelectionModal) {
        chordSelectionModal.addEventListener('click', (event) => {
            if (event.target === chordSelectionModal) {
                chordSelectionModal.style.display = 'none';
            }
        });
    }

    if (chordImagesModal) {
        chordImagesModal.addEventListener('click', (event) => {
            if (event.target === chordImagesModal) {
                closeChordImagesModal();
            }
        });
    }

    if (largeImageModal) {
        largeImageModal.addEventListener('click', (event) => {
            if (event.target === largeImageModal) {
                closeLargeImageModal();
            }
        });
    }

    if (startScrollBtn) {
        startScrollBtn.addEventListener('click', toggleScroll);
    }

    if (audioControlBtn) {
        audioControlBtn.addEventListener('click', toggleAudioPlayback);
    }

    if (showAllAsambleaBtn) {
        showAllAsambleaBtn.addEventListener('click', toggleAllAssemblyBlocks);
    }

    if (toggleVistaBtn) {
        toggleVistaBtn.addEventListener('click', toggleCantoLayout);
    }

    // Manejo de la lógica de toggle para los bloques de asamblea
    function toggleAllAssemblyBlocks() {
        const allExpanded = areAllAssemblyBlocksExpanded();
        document.querySelectorAll('.collapsible-block-container[data-block-id^="asamblea_"]').forEach(block => {
            const blockId = block.dataset.blockId;
            const contentDiv = block.querySelector('.collapsible-content');
            const triggerLetraSpan = block.querySelector('.collapsible-trigger .letra');
            if (allExpanded) {
                // Colapsar todos
                contentDiv.style.display = 'none';
                if (!triggerLetraSpan.textContent.endsWith(' ...')) {
                    triggerLetraSpan.textContent += ' ...';
                }
                block.querySelector('.collapsible-trigger').dataset.isExpanded = "false";
                collapsibleStates.set(blockId, false);
            } else {
                // Expandir todos
                contentDiv.style.display = '';
                triggerLetraSpan.textContent = triggerLetraSpan.dataset.originalText;
                block.querySelector('.collapsible-trigger').dataset.isExpanded = "true";
                collapsibleStates.set(blockId, true);
            }
        });
        updateShowAllAsambleaIcon(); // Actualizar el icono después de la acción
    }

    function toggleAudioPlayback() {
        if (cantoAudioPlayer.paused) {
            cantoAudioPlayer.play();
            audioIcon.textContent = 'pause';
        } else {
            cantoAudioPlayer.pause();
            audioIcon.textContent = 'play_arrow';
        }
    }

    function startScroll() {
        if (isScrolling) return;
        isScrolling = true;
        scrollIcon.textContent = 'pause';

        const cantoContentDiv = cantoContentWrapper;

        const totalScrollHeight = cantoContentDiv.scrollHeight - cantoContentDiv.clientHeight;
        const startScrollPosition = cantoContentDiv.scrollTop;
        const remainingScrollDistance = totalScrollHeight - startScrollPosition;

        const totalDurationMs = (remainingScrollDistance / scrollSpeed) * 1000;

        let startTime = null;

        function animateScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;

            const newScrollTop = Math.min(startScrollPosition + (scrollSpeed * (elapsed / 1000)), totalScrollHeight);

            cantoContentDiv.scrollTop = newScrollTop;

            if (newScrollTop >= totalScrollHeight) {
                stopScroll();
            } else {
                if (isScrolling) {
                    requestAnimationFrame(animateScroll);
                }
            }
        }

        scrollInterval = requestAnimationFrame(animateScroll);
    }


    function stopScroll() {
        if (!isScrolling) return;
        isScrolling = false;
        if (scrollInterval) {
            cancelAnimationFrame(scrollInterval);
            scrollInterval = null;
        }
        scrollIcon.textContent = 'play_arrow';
    }

    function toggleScroll() {
        if (isScrolling) {
            stopScroll();
        } else {
            startScroll();
        }
    }

    function toggleCantoLayout() {
        if (cantoContentWrapper) {
            cantoContentWrapper.classList.toggle('stacked-layout');
            updateToggleVistaIcon();
        }
    }

    // Configurar el título de la pestaña desde los datos del canto
    const pageTitleElement = document.getElementById('tt');
    if (pageTitleElement && cantoSpecificData.title) {
        pageTitleElement.textContent = `RESUCITÓ - ${cantoSpecificData.title}`;
    }

}; // Fin de initializeCantoPage