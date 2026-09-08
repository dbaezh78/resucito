// src/config/canto.js
// Configuración del módulo de canto
// Centralizamos las opciones relacionadas con la visualización y comportamiento de los cantos.
// El BIS se maneja por canto individual: cada canto tiene su propio estado habilitado/deshabilitado.

export const cantoConfig = {
  // Mapa de estados BIS por canto: { songId: true/false }
  bisEnabledMap: {},
  // Mapa de estados de "Acordes en JSON" por canto: { songId: true/false }
  jsonChordsMap: {},
  // Intervalo base de desplazamiento en ms (por defecto 40ms)
  scrollInterval: 40,
  // Incremento de desplazamiento en píxeles (por defecto 1px)
  scrollIncrement: 1,
};

// Cargar estados BIS y configuración de desplazamiento desde localStorage
export function loadBisConfig() {
  try {
    const saved = localStorage.getItem('bis-enabled-map');
    if (saved) {
      cantoConfig.bisEnabledMap = JSON.parse(saved);
    }
    const savedJsonChords = localStorage.getItem('json-chords-map');
    if (savedJsonChords) {
      cantoConfig.jsonChordsMap = JSON.parse(savedJsonChords);
    }
    const savedInterval = localStorage.getItem('scroll-interval');
    if (savedInterval) {
      cantoConfig.scrollInterval = parseInt(savedInterval, 10);
    }
    const savedInc = localStorage.getItem('scroll-increment');
    if (savedInc) {
      cantoConfig.scrollIncrement = parseInt(savedInc, 10);
    }
  } catch (e) {
    console.warn('Error al cargar configuración de Canto:', e);
  }
}

// Guardar estados BIS en localStorage
export function saveBisConfig() {
  localStorage.setItem('bis-enabled-map', JSON.stringify(cantoConfig.bisEnabledMap));
}

// Guardar estados de Acordes en JSON en localStorage
export function saveJsonChordsConfig() {
  localStorage.setItem('json-chords-map', JSON.stringify(cantoConfig.jsonChordsMap));
}

// Guardar configuración de desplazamiento en localStorage
export function saveCantoSettings() {
  localStorage.setItem('scroll-interval', cantoConfig.scrollInterval);
  localStorage.setItem('scroll-increment', cantoConfig.scrollIncrement);
}

// Verificar si el BIS está habilitado para un canto específico
export function isBisEnabled(songId) {
  return cantoConfig.bisEnabledMap[songId] === true;
}

// Habilitar o deshabilitar BIS para un canto específico
export function setBisForSong(songId, enabled) {
  cantoConfig.bisEnabledMap[songId] = enabled;
  saveBisConfig();
}

// Verificar si "Acordes en JSON" está habilitado para un canto específico
export function isJsonChordsEnabled(songId) {
  if (!songId) return false;
  if (cantoConfig.jsonChordsMap && typeof cantoConfig.jsonChordsMap[songId] === 'boolean') {
    return cantoConfig.jsonChordsMap[songId];
  }
  // Por defecto, activo para cantos de aclamaciones (aet*) y plegarias eucarísticas
  return songId.startsWith('aet') || songId.startsWith('plegariaeucaristica');
}

// Habilitar o deshabilitar "Acordes en JSON" para un canto específico
export function setJsonChordsForSong(songId, enabled) {
  if (!songId) return;
  cantoConfig.jsonChordsMap[songId] = enabled;
  saveJsonChordsConfig();
}

