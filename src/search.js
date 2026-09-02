/**
 * Módulo de búsqueda ultra-elástica de David.
 * Normaliza acentos, elimina puntuación y realiza búsquedas espaciadas e hiladas.
 * Soporta búsqueda inteligente de semanas litúrgicas y números romanos/arábigos (ej: 10 <-> X, 16 <-> XVI).
 */

export const ROMAN_MAP = {
    1:'i', 2:'ii', 3:'iii', 4:'iv', 5:'v', 6:'vi', 7:'vii', 8:'viii', 9:'ix', 10:'x',
    11:'xi', 12:'xii', 13:'xiii', 14:'xiv', 15:'xv', 16:'xvi', 17:'xvii', 18:'xviii', 19:'xix', 20:'xx',
    21:'xxi', 22:'xxii', 23:'xxiii', 24:'xxiv', 25:'xxv', 26:'xxvi', 27:'xxvii', 28:'xxviii', 29:'xxix', 30:'xxx',
    31:'xxxi', 32:'xxxii', 33:'xxxiii', 34:'xxxiv'
};

export const NUM_MAP = {};
Object.entries(ROMAN_MAP).forEach(([num, rom]) => {
    NUM_MAP[rom] = parseInt(num, 10);
});

/**
 * Normaliza y limpia una cadena de texto para comparación.
 * Quita acentos y caracteres especiales.
 * @param {string} text 
 * @returns {string}
 */
export function normalizeText(text) {
    if (!text) return '';
    return text.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quitar acentos
        .replace(/[^a-z0-9\s]/g, "")     // Quitar puntuación y símbolos
        .replace(/\s+/g, ' ')            // Colapsar espacios múltiples
        .trim();
}

/**
 * Extrae el número de semana de una canción (especialmente aclamaciones).
 * @param {Object} song 
 * @returns {number|null}
 */
export function getSongWeekNumber(song) {
    if (!song) return null;
    const id = song.id || '';
    const m = id.match(/^aet(?:as|ns|cs|ps|os)(\d+)/i);
    if (m) return parseInt(m[1], 10);

    const tit = normalizeText(song.title || '');
    for (let num = 34; num >= 1; num--) {
        const rom = ROMAN_MAP[num];
        const regex = new RegExp(`\\b(?:domingo|semana)\\s+(?:${rom}|${num})\\b`, 'i');
        if (regex.test(tit)) {
            return num;
        }
    }
    return null;
}

/**
 * Analiza si una consulta de búsqueda corresponde a una semana específica.
 * @param {string} cleanQuery 
 * @returns {{ targetWeekNum: number|null, isStrict: boolean, season: string|null }}
 */
export function parseWeekQuery(cleanQuery) {
    if (!cleanQuery) return { targetWeekNum: null, isStrict: false, season: null };

    // 1. Número puro: "10", "16", "22" (hasta 34)
    if (/^\d+$/.test(cleanQuery)) {
        const val = parseInt(cleanQuery, 10);
        if (val >= 1 && val <= 34) {
            return { targetWeekNum: val, isStrict: true, season: null };
        }
    }

    // 2. Número romano puro: "x", "xvi", "xxii"
    if (NUM_MAP[cleanQuery]) {
        return { targetWeekNum: NUM_MAP[cleanQuery], isStrict: true, season: null };
    }

    // 3. "semana 10", "domingo 16", "semana xvi", "domingo x"
    const semMatch = cleanQuery.match(/^(?:semana|domingo)\s+(\d+|[ivxlcdm]+)$/i);
    if (semMatch) {
        const val = semMatch[1];
        if (/^\d+$/.test(val)) {
            return { targetWeekNum: parseInt(val, 10), isStrict: true, season: null };
        } else if (NUM_MAP[val]) {
            return { targetWeekNum: NUM_MAP[val], isStrict: true, season: null };
        }
    }

    // 4. "ordinario 10", "adviento 2", "cuaresma 3", "pascua 4", etc.
    const seasonMatch = cleanQuery.match(/^(adviento|navidad|cuaresma|pascua|ordinario)\s+(\d+|[ivxlcdm]+)$/i);
    if (seasonMatch) {
        const season = seasonMatch[1];
        const val = seasonMatch[2];
        const numVal = /^\d+$/.test(val) ? parseInt(val, 10) : NUM_MAP[val];
        if (numVal) {
            return { targetWeekNum: numVal, isStrict: false, season };
        }
    }

    return { targetWeekNum: null, isStrict: false, season: null };
}

/**
 * Calcula la puntuación de relevancia para ordenar los resultados de búsqueda.
 * @param {Object} song Objeto de la canción
 * @param {string} cleanQuery Consulta de búsqueda normalizada
 * @param {Object} weekInfo Información de semana detectada
 * @returns {number} Puntuación de relevancia
 */
function getRelevanceScore(song, cleanQuery, weekInfo = null) {
    if (!cleanQuery) return 0;
    const cleanTitle = normalizeText(song.title || '');
    const cleanSubtitle = normalizeText(song.subtitle || '');
    const pool = song.searchPool || '';

    // Si coincide exactamente con el número de semana buscado
    if (weekInfo && weekInfo.targetWeekNum !== null) {
        const songWeek = getSongWeekNumber(song);
        if (songWeek === weekInfo.targetWeekNum) {
            if (weekInfo.season) {
                if (cleanTitle.includes(weekInfo.season) || pool.includes(weekInfo.season)) {
                    return 120;
                }
            } else {
                return 110;
            }
        }
    }
    
    // 1. Coincidencia exacta de título
    if (cleanTitle === cleanQuery) return 100;
    
    // 2. El título empieza con la consulta
    if (cleanTitle.startsWith(cleanQuery)) return 80;
    
    // 3. El título contiene la consulta
    if (cleanTitle.includes(cleanQuery)) return 60;
    
    // 4. El subtítulo contiene la consulta
    if (cleanSubtitle.includes(cleanQuery)) return 40;
    
    // 5. La letra / pool contiene la consulta
    if (pool.includes(cleanQuery)) return 20;
    
    // 6. Búsqueda elástica pegada
    const gluedQuery = cleanQuery.replace(/\s/g, "");
    const gluedPool = pool.replace(/\s/g, "");
    if (gluedQuery.length > 2 && gluedPool.includes(gluedQuery)) return 10;
    
    return 0;
}

/**
 * Filtra el catálogo de canciones basándose en la consulta, la etapa y los momentos litúrgicos.
 * @param {Array} songs Lista indexada de cantos
 * @param {string} query Texto buscado por el usuario
 * @param {string|null} activeStage Filtro por etapa (Precatecumenado, Catecumenado, Elección, Liturgia, etc.)
 * @param {Array} activeMoments Array de momentos litúrgicos seleccionados
 * @returns {Array} Cantos filtrados y ordenados por relevancia
 */
export function searchSongs(songs, query, activeStage = null, activeMoments = []) {
    const cleanQuery = normalizeText(query);
    const gluedQuery = cleanQuery.replace(/\s/g, ""); // Quitar todos los espacios para búsqueda elástica
    const weekInfo = parseWeekQuery(cleanQuery);

    // Convertir activeMoments a Array si se pasa como Set o Array
    const momentsArray = Array.isArray(activeMoments) ? activeMoments : (activeMoments ? Array.from(activeMoments) : []);

    const isAclamacionesBook = songs.length > 0 && songs.every(s => (s.sourceBook || '') === 'aclamaciones');

    const filtered = songs.filter(song => {
        // SEGURIDAD: Filtrar según la etapa del usuario y la etapa requerida por el canto
        if (typeof window !== 'undefined' && typeof window.canCurrentUserSeeSong === 'function' && !window.canCurrentUserSeeSong(song.id)) {
            return false;
        }

        // 1. Filtrado por Etapa
        if (activeStage && normalizeText(song.stage || '') !== normalizeText(activeStage)) {
            return false;
        }

        // 2. Filtrado por Momentos Litúrgicos / Categorías
        if (momentsArray.length > 0) {
            const rawCategory = song.category || song.moments || [];
            const songCategoryList = Array.isArray(rawCategory) ? rawCategory : (rawCategory ? [rawCategory] : []);
            const songMoments = songCategoryList.map(m => normalizeText(m));
            const songStageClean = normalizeText(song.stage || '');

            const matchesAllMoments = momentsArray.every(moment => {
                const cleanMoment = normalizeText(moment);
                return songMoments.includes(cleanMoment) ||
                       songStageClean === cleanMoment ||
                       (cleanMoment === 'aclamacion' && song.sourceBook === 'aclamaciones') ||
                       (cleanMoment === 'catolicos' && (songMoments.includes('catolicos') || song.sourceBook === 'joven'));
            });
            if (!matchesAllMoments) return false;
        }

        // 3. Filtrado por búsqueda elástica y semanas litúrgicas
        if (!cleanQuery) return true;

        const songWeek = getSongWeekNumber(song);

        // Si es una búsqueda estricta de semana en el libro de Aclamaciones (ej: "10", "16", "XVI", "semana 10")
        if (isAclamacionesBook && weekInfo.isStrict && weekInfo.targetWeekNum !== null) {
            return songWeek === weekInfo.targetWeekNum;
        }

        // Si la búsqueda incluye tiempo y semana (ej: "ordinario 10", "adviento 2")
        if (weekInfo.season && weekInfo.targetWeekNum !== null) {
            const pool = (song.searchPool || '').toLowerCase();
            const cleanTitle = normalizeText(song.title || '');
            if (songWeek === weekInfo.targetWeekNum && (cleanTitle.includes(weekInfo.season) || pool.includes(weekInfo.season))) {
                return true;
            }
        }

        const pool = song.searchPool || '';
        const gluedPool = pool.replace(/\s/g, "");

        // Si coincide la semana en canciones generales
        if (weekInfo.targetWeekNum !== null && songWeek === weekInfo.targetWeekNum) {
            return true;
        }

        // Regla 1: Búsqueda exacta respetando espacios
        if (pool.includes(cleanQuery)) return true;

        // Regla 2: Búsqueda elástica pegada (ej: "quienesestaquesube" -> "quien es esta que sube")
        if (gluedQuery.length > 2 && gluedPool.includes(gluedQuery)) return true;

        return false;
    });

    if (!cleanQuery) return filtered;

    // Ordenar por relevancia
    return filtered
        .map(song => ({
            song,
            score: getRelevanceScore(song, cleanQuery, weekInfo)
        }))
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            const titleA = a.song.title || '';
            const titleB = b.song.title || '';
            return titleA.localeCompare(titleB);
        })
        .map(item => item.song);
}

