// src/sync.js - Sincronización de configuraciones personales y globales con Firestore

import { db, auth, doc, setDoc, getDoc, collection, getDocs, query, orderBy, limit, onSnapshot } from "./firebase.js";
import { transposeNote, normalizeChord } from "./chords.js";



// Sincroniza la nota personal del cantor
export async function guardarNotaEnNube(cantoId, notaPersonal) {
  const user = auth.currentUser;
  if (!user) return;
  
  try {
    // 1. Sincronizar en config_cantos por retrocompatibilidad
    const docRefLegacy = doc(db, "usuarios", user.uid, "config_cantos", cantoId);
    await setDoc(docRefLegacy, {
      notaPersonal: notaPersonal || "",
      ultimaActualizacion: new Date()
    }, { merge: true });

    // 2. Sincronizar en la estructura unificada dbdata y su historial (Versión 1)
    let currentOffset = 0;
    let currentCapo = 0;
    try {
      if (typeof window.getCurrentKeyOffset === 'function') {
        currentOffset = window.getCurrentKeyOffset() || 0;
      }
      const capoEl = document.getElementById('capo-select') || document.getElementById('modal-capo-select');
      if (capoEl) {
        currentCapo = parseInt(capoEl.value) || 0;
      }
    } catch (e) {}

    let ratingValue = 0;
    try {
      const localConfig = JSON.parse(localStorage.getItem(`canto-config-${cantoId}`) || '{}');
      ratingValue = parseInt(localConfig.valoracion) || 0;
    } catch (e) {}

    const timestamp = Date.now().toString();
    const refCantoRaiz = doc(db, "usuarios", user.uid, "dbdata", cantoId);
    const refHist = doc(db, "usuarios", user.uid, "dbdata", cantoId, "historial", timestamp);

    const datosDB = {
      acorde: String(currentOffset),
      cejilla: String(currentCapo),
      fecha: new Date(),
      notasCantor: notaPersonal || "",
      valoracion: ratingValue
    };

    await setDoc(refCantoRaiz, { valor: datosDB }, { merge: true });
    await setDoc(refHist, { valor: datosDB }, { merge: true });

    console.log(`☁️ [Firebase] Nota personal guardada y sincronizada en dbdata/historial para ${cantoId}`);
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudo guardar la nota en la nube:", e.message || e);
  }
}

// Carga la nota personal del cantor
export async function cargarNotaDesdeNube(cantoId) {
  const user = auth.currentUser;
  if (!user) return null;
  
  try {
    const docRef = doc(db, "usuarios", user.uid, "config_cantos", cantoId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().notaPersonal || "";
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudo cargar la nota (permisos/offline):", e.message || e);
  }
  return null;
}

// Sincroniza posiciones de acordes personalizadas
export async function guardarPosicionesEnNube(cantoId, posiciones) {
  const user = auth.currentUser;
  if (!user) return;
  
  try {
    const docRef = doc(db, "usuarios", user.uid, "posiciones", cantoId);
    // Firestore no permite arrays anidados: serializamos cada línea como string JSON
    await setDoc(docRef, {
      lizq: serializarLineas(posiciones.lizq),
      lder: serializarLineas(posiciones.lder),
      ultimaActualizacion: new Date()
    });
    console.log(`☁️ [Firebase] Posiciones personalizadas guardadas para el canto ${cantoId}`);
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron guardar posiciones (permisos/offline):", e.message || e);
  }
}

// Carga posiciones de acordes personalizadas
export async function cargarPosicionesDesdeNube(cantoId) {
  const user = auth.currentUser;
  if (!user) return null;
  
  try {
    const docRef = doc(db, "usuarios", user.uid, "posiciones", cantoId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        lizq: deserializarLineas(data.lizq),
        lder: deserializarLineas(data.lder)
      };
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron cargar posiciones (permisos/offline):", e.message || e);
  }
  return null;
}

// Convierte las líneas a un array de strings JSON (serialización plana para Firestore)
function serializarLineas(lines) {
  if (!Array.isArray(lines)) return [];
  return lines.map(line => JSON.stringify(line));
}

// Revierte la serialización de líneas
function deserializarLineas(lines) {
  if (!Array.isArray(lines)) return [];
  return lines.map(item => {
    try { return typeof item === 'string' ? JSON.parse(item) : item; }
    catch (e) { return item; }
  });
}

// Sincroniza posiciones globales (Administrador)
export async function publicarPosicionesGlobales(cantoId, posiciones) {
  try {
    const docRef = doc(db, "global_positions", cantoId);
    // Firestore no permite arrays anidados: serializamos cada línea como string JSON
    await setDoc(docRef, {
      lizq: serializarLineas(posiciones.lizq),
      lder: serializarLineas(posiciones.lder),
      ultimaActualizacion: new Date()
    });
    console.log(`☁️ [Firebase Admin] Posiciones globales publicadas para el canto ${cantoId}`);
  } catch (e) {
    console.warn("⚠️ [Firebase Admin] No se pudieron publicar posiciones globales (permisos/offline):", e.message || e);
  }
}

// Carga posiciones globales oficiales actualizadas por administradores
export async function cargarPosicionesGlobales(cantoId) {
  try {
    const docRef = doc(db, "global_positions", cantoId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (!window.globalPositionsCache) window.globalPositionsCache = {};
      window.globalPositionsCache[cantoId] = data;
      return {
        lizq: deserializarLineas(data.lizq),
        lder: deserializarLineas(data.lder)
      };
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron cargar posiciones globales (permisos/offline):", e.message || e);
  }
  return null;
}

// Sincroniza todos los ajustes de la aplicación con Firestore
export async function guardarFavoritosEnNube(favoritosArray) {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const list = Array.isArray(favoritosArray) ? favoritosArray : Array.from(window.favorites || []);
    // 1. Guardar en documento específico de favoritos
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "favoritos");
    await setDoc(docRef, {
      lista: list,
      ultimaActualizacion: new Date()
    }, { merge: true });

    // 2. Guardar también dentro de ajustes para carga rápida
    const docRefAjustes = doc(db, "usuarios", user.uid, "configuracion", "ajustes");
    await setDoc(docRefAjustes, {
      favoritos: list,
      ultimaActualizacion: new Date()
    }, { merge: true });

    console.log(`☁️ [Firebase] Favoritos (${list.length} cantos) guardados en la nube.`);
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron guardar los favoritos en la nube:", e.message || e);
  }
}

export async function cargarFavoritosDesdeNube() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "favoritos");
    const docSnap = await getDoc(docRef);

    let cloudList = null;
    if (docSnap.exists()) {
      cloudList = docSnap.data().lista;
    } else {
      const docRefAjustes = doc(db, "usuarios", user.uid, "configuracion", "ajustes");
      const snapAjustes = await getDoc(docRefAjustes);
      if (snapAjustes.exists() && snapAjustes.data().favoritos) {
        cloudList = snapAjustes.data().favoritos;
      }
    }

    if (Array.isArray(cloudList)) {
      if (!window.favorites) {
        window.favorites = new Set();
      }
      cloudList.forEach(id => window.favorites.add(id));
      localStorage.setItem('favorites', JSON.stringify([...window.favorites]));

      if (window.currentBook === 'favoritos' && typeof window.handleSearchAndFilters === 'function') {
        window.handleSearchAndFilters();
      }

      // Actualizar el estado visual del botón favorito si hay un canto abierto
      const favoriteBtn = document.getElementById('favorite-btn');
      if (favoriteBtn && window.currentCanto) {
        favoriteBtn.classList.toggle('active-star', window.favorites.has(window.currentCanto.id));
      }

      console.log(`📥 [Firebase] Favoritos (${cloudList.length} cantos) sincronizados desde la nube.`);
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron cargar los favoritos desde la nube:", e.message || e);
  }
}

// Sincroniza todos los ajustes de la aplicación con Firestore
export async function guardarAjustesEnNube() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "ajustes");
    const ajustes = {
      theme: localStorage.getItem('theme') || 'light',
      songListStyle: localStorage.getItem('song-list-style') || 'simple',
      splitLayout: localStorage.getItem('split-layout') || 'true',
      lyricsFontFamily: localStorage.getItem('lyrics-font-family') || 'franklin',
      appMaxWidth: localStorage.getItem('app-max-width') || '1200',
      
      // Cabeceras de preparación
      catHeaderColor: localStorage.getItem('cat-header-color') || '#d01212',
      catHeaderFontSize: localStorage.getItem('cat-header-font-size') || '16',
      catHeaderFontWeight: localStorage.getItem('cat-header-font-weight') || '700',
      
      // Cabeceras de perfil
      perfilHeaderColor: localStorage.getItem('perfil-header-color') || '#d01212',
      perfilHeaderFontSize: localStorage.getItem('perfil-header-font-size') || '16',
      perfilHeaderFontWeight: localStorage.getItem('perfil-header-font-weight') || '700',

      favoritos: Array.from(window.favorites || []),

      ultimaActualizacion: new Date()
    };

    await setDoc(docRef, ajustes, { merge: true });
    console.log("☁️ [Firebase] Ajustes personales guardados en la nube.");
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron guardar los ajustes en la nube:", e.message || e);
  }
}

// Carga los ajustes de la aplicación desde Firestore
export async function cargarAjustesDesdeNube() {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "ajustes");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Guardar localmente y aplicar
      if (data.theme) localStorage.setItem('theme', data.theme);
      if (data.songListStyle) localStorage.setItem('song-list-style', data.songListStyle);
      if (data.splitLayout) localStorage.setItem('split-layout', data.splitLayout);
      if (data.lyricsFontFamily) localStorage.setItem('lyrics-font-family', data.lyricsFontFamily);
      if (data.appMaxWidth) localStorage.setItem('app-max-width', data.appMaxWidth);

      if (data.catHeaderColor) localStorage.setItem('cat-header-color', data.catHeaderColor);
      if (data.catHeaderFontSize) localStorage.setItem('cat-header-font-size', data.catHeaderFontSize);
      if (data.catHeaderFontWeight) localStorage.setItem('cat-header-font-weight', data.catHeaderFontWeight);

      if (data.perfilHeaderColor) localStorage.setItem('perfil-header-color', data.perfilHeaderColor);
      if (data.perfilHeaderFontSize) localStorage.setItem('perfil-header-font-size', data.perfilHeaderFontSize);
      if (data.perfilHeaderFontWeight) localStorage.setItem('perfil-header-font-weight', data.perfilHeaderFontWeight);

      if (Array.isArray(data.favoritos)) {
        if (!window.favorites) window.favorites = new Set();
        data.favoritos.forEach(id => window.favorites.add(id));
        localStorage.setItem('favorites', JSON.stringify([...window.favorites]));
      }

      console.log("📥 [Firebase] Ajustes personales descargados de la nube.");
    }

    // Cargar también lista dedicada de favoritos y zooms personalizados
    await cargarFavoritosDesdeNube();
    await cargarZoomsDesdeNube();
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron cargar los ajustes desde la nube:", e.message || e);
  }
}

// Sincroniza la cejilla y el acorde en la colección 'historial' de cada canto y en la raíz dbdata
export async function guardarHistorialCantoEnNube(cantoId, acordeOffset, cejillaValue) {
  const user = auth.currentUser;
  if (!user) return;

  try {
    const timestamp = Date.now().toString();
    const refCantoRaiz = doc(db, "usuarios", user.uid, "dbdata", cantoId);
    const refHist = doc(db, "usuarios", user.uid, "dbdata", cantoId, "historial", timestamp);

    // Obtener notas y valoración actuales de localStorage
    const notesValue = localStorage.getItem(`notes_${cantoId}`) || "";
    let ratingValue = 0;
    try {
      const localConfig = JSON.parse(localStorage.getItem(`canto-config-${cantoId}`) || '{}');
      ratingValue = parseInt(localConfig.valoracion) || 0;
    } catch (e) {}

    const datosDB = {
      acorde: String(acordeOffset),
      cejilla: String(cejillaValue),
      fecha: new Date(),
      notasCantor: notesValue,
      valoracion: ratingValue
    };

    // A. Actualizar la Raíz de dbdata para este canto
    await setDoc(refCantoRaiz, { valor: datosDB }, { merge: true });

    // B. Crear la entrada en el historial
    await setDoc(refHist, { valor: datosDB }, { merge: true });

    console.log(`☁️ [Firebase] Historial de canto ${cantoId} guardado: acorde=${acordeOffset}, cejilla=${cejillaValue}, notasCantor=${notesValue ? 'sí' : 'no'}, valoración=${ratingValue}`);
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudo guardar el historial del canto en la nube:", e.message || e);
  }
}

// Descarga el historial más reciente de cejilla y acorde del canto
export async function cargarHistorialCantoDesdeNube(cantoId) {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const colRef = collection(db, "usuarios", user.uid, "dbdata", cantoId, "historial");
    const querySnapshot = await getDocs(colRef);

    if (!querySnapshot.empty) {
      const docs = querySnapshot.docs;
      // Ordenar en memoria por el ID del documento (timestamp string) de forma descendente
      docs.sort((a, b) => b.id.localeCompare(a.id));
      
      const docSnap = docs[0];
      const data = docSnap.data();
      if (data && data.valor) {
        return {
          acorde: parseInt(data.valor.acorde) || 0,
          cejilla: parseInt(data.valor.cejilla) || 0,
          notasCantor: data.valor.notasCantor || "",
          valoracion: parseInt(data.valor.valoracion) || 0
        };
      }
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudo cargar el historial del canto desde la nube:", e.message || e);
  }
  return null;
}

// Sincroniza zooms personalizados de cantos por dispositivo en Firestore
export async function guardarZoomCantoEnNube(songId, zoomData) {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "song_zooms");
    const update = {};
    if (songId) {
      if (zoomData) {
        update[songId] = zoomData;
      } else {
        update[songId] = deleteField();
      }
    }
    await setDoc(docRef, update, { merge: true });
    console.log(`☁️ [Firebase] Zoom de canto ${songId} sincronizado en la nube.`);
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudo guardar el zoom del canto en la nube:", e.message || e);
  }
}

export async function cargarZoomsDesdeNube() {
  const user = auth.currentUser;
  if (!user) return;
  try {
    const docRef = doc(db, "usuarios", user.uid, "configuracion", "song_zooms");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const cloudZooms = docSnap.data() || {};
      let localZooms = {};
      try {
        localZooms = JSON.parse(localStorage.getItem('resucito_song_zooms') || '{}');
      } catch (e) { localZooms = {}; }

      const merged = { ...cloudZooms, ...localZooms };
      localStorage.setItem('resucito_song_zooms', JSON.stringify(merged));
      console.log("📥 [Firebase] Zooms de cantos descargados de la nube.");
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] No se pudieron cargar los zooms de cantos:", e.message || e);
  }
}

// Exponer globalmente
window.guardarAjustesEnNube = guardarAjustesEnNube;
window.cargarAjustesDesdeNube = cargarAjustesDesdeNube;
window.guardarFavoritosEnNube = guardarFavoritosEnNube;
window.cargarFavoritosDesdeNube = cargarFavoritosDesdeNube;
window.guardarPosicionesEnNube = guardarPosicionesEnNube;
window.cargarPosicionesDesdeNube = cargarPosicionesDesdeNube;
window.guardarHistorialCantoEnNube = guardarHistorialCantoEnNube;
window.cargarHistorialCantoDesdeNube = cargarHistorialCantoDesdeNube;
window.guardarZoomCantoEnNube = guardarZoomCantoEnNube;
window.cargarZoomsDesdeNube = cargarZoomsDesdeNube;

// --- Control de Etapas de Cantos ---
window.globalPositionsCache = {};
try {
  const cachedPos = localStorage.getItem('resucito_global_positions_cache');
  if (cachedPos) {
    window.globalPositionsCache = JSON.parse(cachedPos);
  }
} catch (e) {}

let lastGlobalPositionsSync = 0;

export async function syncGlobalPositionsFromFirebase(force = false) {
  const now = Date.now();
  // Solo sincronizar si han pasado más de 12 horas o es forzado
  if (!force && (now - lastGlobalPositionsSync < 12 * 60 * 60 * 1000)) {
    return;
  }
  lastGlobalPositionsSync = now;

  try {
    const colRef = collection(db, "global_positions");
    const snapshot = await getDocs(colRef);
    if (snapshot && !snapshot.empty) {
      snapshot.forEach((docSnap) => {
        window.globalPositionsCache[docSnap.id] = docSnap.data();
      });
      localStorage.setItem('resucito_global_positions_cache', JSON.stringify(window.globalPositionsCache));
      if (typeof window.handleSearchAndFilters === 'function') {
        window.handleSearchAndFilters();
      }
      if (typeof window.renderSongStagesTable === 'function') {
        window.renderSongStagesTable();
      }
    }
  } catch (e) {
    console.debug("⚠️ [Firebase] global_positions sync offline:", e.message);
  }
}

export function listenToGlobalPositions() {
  // Carga inicial optimizada con caché local sin saturar lecturas
  syncGlobalPositionsFromFirebase();
}

export function canCurrentUserSeeSong(songId) {
  // Administradores se saltan cualquier restricción de etapa
  if (window.isCurrentUserAdmin && window.isCurrentUserAdmin()) {
    return true;
  }
  
  // Obtener etapa del perfil del usuario (default: 0 - Precatecumenado)
  let userStage = 0;
  const profileStr = localStorage.getItem('user_profile_data');
  if (profileStr) {
    try {
      const profile = JSON.parse(profileStr);
      if (profile && profile.etapa !== undefined) {
        userStage = parseFloat(profile.etapa);
      }
    } catch (e) {}
  }
  
  // Obtener etapa requerida del canto
  let requiredStage = 0;
  if (window.globalPositionsCache && window.globalPositionsCache[songId]) {
    const customData = window.globalPositionsCache[songId];
    if (customData.etapa !== undefined) {
      requiredStage = parseFloat(customData.etapa);
    }
  }
  
  return userStage >= requiredStage;
}

// --- Control de Expansión de Cantos (Superposición) ---
window.expansionSongsCache = {};

export function listenToExpansionSongs() {
  try {
    const local = localStorage.getItem('expansion_songs_config');
    if (local) {
      try {
        const parsed = JSON.parse(local);
        if (parsed && parsed.songs) window.expansionSongsCache = parsed.songs;
      } catch (e) {}
    }
  } catch (e) {
    console.warn("⚠️ [Firebase] Error al iniciar listenToExpansionSongs:", e);
  }
}

export function isSongExpansionEnabled(songId) {
  if (!songId) return false;
  // 1. Verificar en globalPositionsCache de Firebase (mayor prioridad si está definido)
  if (window.globalPositionsCache && window.globalPositionsCache[songId] && window.globalPositionsCache[songId].expansion !== undefined) {
    return window.globalPositionsCache[songId].expansion === true;
  }
  // 2. Verificar en localStorage directamente (sincronizado con expancion.html)
  try {
    const local = localStorage.getItem('expansion_songs_config');
    if (local) {
      const parsed = JSON.parse(local);
      if (parsed && parsed.songs && parsed.songs[songId] !== undefined) {
        return parsed.songs[songId] === true;
      }
    }
  } catch (e) {}

  // 3. Verificar en expansionSongsCache en memoria
  if (window.expansionSongsCache && window.expansionSongsCache[songId] !== undefined) {
    return window.expansionSongsCache[songId] === true;
  }

  // 4. Fallback al JSON del canto activo si tiene "expansion": true
  if (window.currentCanto && window.currentCanto.id === songId && window.currentCanto.expansion === true) {
    return true;
  }
  return false;
}

window.isSongExpansionEnabled = isSongExpansionEnabled;
window.listenToExpansionSongs = listenToExpansionSongs;

// Iniciar escuchas inmediatamente
listenToGlobalPositions();
listenToExpansionSongs();

