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

// Verificar si "Acordes en JSON" está habilitado para un canto específico (Universal con Firebase)
export function isJsonChordsEnabled(songId) {
  if (!songId) return false;

  // 1. Prioridad: Verificar en globalPositionsCache de Firebase (aplica para todos los usuarios y público sin usuario)
  if (window.globalPositionsCache && window.globalPositionsCache[songId] && window.globalPositionsCache[songId].jsonChords !== undefined) {
    return window.globalPositionsCache[songId].jsonChords === true;
  }

  // 2. Soporte sin conexión: Verificar en resucito_global_positions_cache de localStorage
  try {
    const rawGlobal = localStorage.getItem('resucito_global_positions_cache');
    if (rawGlobal) {
      const parsedGlobal = JSON.parse(rawGlobal);
      if (parsedGlobal && parsedGlobal[songId] && parsedGlobal[songId].jsonChords !== undefined) {
        return parsedGlobal[songId].jsonChords === true;
      }
    }
  } catch (e) {}

  // 3. Fallback en configuración local del navegador
  if (cantoConfig.jsonChordsMap && typeof cantoConfig.jsonChordsMap[songId] === 'boolean') {
    return cantoConfig.jsonChordsMap[songId];
  }
  try {
    const saved = localStorage.getItem('json-chords-map');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && typeof parsed[songId] === 'boolean') {
        return parsed[songId];
      }
    }
  } catch (e) {}

  // 4. Verificar si el canto tiene "jsonChords": true en su propio archivo JSON
  if (window.currentCanto && window.currentCanto.id === songId && window.currentCanto.jsonChords === true) {
    return true;
  }

  // 5. Por defecto, activo para cantos de aclamaciones (aet*) y plegarias eucarísticas
  return songId.startsWith('aet') || songId.startsWith('plegariaeucaristica');
}

// Habilitar o deshabilitar "Acordes en JSON" para un canto específico y sincronizar universalmente
export async function setJsonChordsForSong(songId, enabled) {
  if (!songId) return;

  // 1. Guardar en mapa local y localStorage
  if (!cantoConfig.jsonChordsMap) cantoConfig.jsonChordsMap = {};
  cantoConfig.jsonChordsMap[songId] = enabled;
  saveJsonChordsConfig();

  // 2. Actualizar inmediatamente en globalPositionsCache para efecto instantáneo
  if (!window.globalPositionsCache) window.globalPositionsCache = {};
  if (!window.globalPositionsCache[songId]) window.globalPositionsCache[songId] = {};
  window.globalPositionsCache[songId].jsonChords = enabled;
  try {
    localStorage.setItem('resucito_global_positions_cache', JSON.stringify(window.globalPositionsCache));
  } catch (e) {}

  // 3. Persistir en la nube de Firebase para que aplique a todos los usuarios y sin usuario
  if (typeof window.guardarJsonChordsCantoEnNube === 'function') {
    await window.guardarJsonChordsCantoEnNube(songId, enabled);
  }
}


