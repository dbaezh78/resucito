// src/bitacoraLogger.js - Módulo para registrar actividades y eventos en la bitácora
import { db, auth, collection, addDoc, serverTimestamp } from "./firebase.js";

const LOCAL_STORAGE_KEY = 'resucito_bitacora_local';

// Estado de la sesión actual en el canto
let currentSongSession = {
  cantoId: null,
  cantoTitulo: null,
  horaEntrada: null,
  cambioRealizado: false,
  detallesCambio: []
};

/**
 * Obtiene los datos del usuario actual
 */
function getUserInfo() {
  const user = auth ? auth.currentUser : null;
  if (user) {
    return {
      uid: user.uid,
      email: user.email || 'anonimo@resucito.do',
      displayName: user.displayName || user.email?.split('@')[0] || 'Usuario'
    };
  }
  
  // Usuario local o no autenticado
  let localName = localStorage.getItem('resucito_usuario_nombre') || 'Cantor Local';
  return {
    uid: 'local_' + (localStorage.getItem('resucito_user_id') || 'invitado'),
    email: localStorage.getItem('resucito_usuario_email') || 'local@resucito.do',
    displayName: localName
  };
}

/**
 * Registra un evento en Firestore y en localStorage
 */
export async function registrarEventoBitacora({ cantoId, cantoTitulo, tipo, detalle, datosExtra = {} }) {
  const userInfo = getUserInfo();
  const now = new Date();
  
  const evento = {
    cantoId: cantoId || '',
    cantoTitulo: cantoTitulo || cantoId || 'General',
    tipo: tipo || 'accion', // 'visita', 'traste', 'acorde', 'lista', 'zoom', etc.
    detalle: detalle || '😎',
    fechaStr: now.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    horaStr: now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false }),
    timestampNum: now.getTime(),
    usuarioId: userInfo.uid,
    usuarioEmail: userInfo.email,
    usuarioNombre: userInfo.displayName,
    datosExtra: datosExtra
  };

  // 1. Guardar en localStorage para respaldo y modo offline
  try {
    const localLogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    localLogs.unshift(evento);
    if (localLogs.length > 500) localLogs.pop(); // Mantener hasta 500 registros locales
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localLogs));
  } catch (e) {
    console.warn("⚠️ No se pudo guardar bitácora en localStorage:", e);
  }

  // 2. Guardar en Firestore si hay conexión
  if (db) {
    try {
      const colRef = collection(db, "bitacora");
      await addDoc(colRef, {
        ...evento,
        createdAt: serverTimestamp()
      });
      console.log(`📋 [Bitácora] Registrado: ${evento.cantoTitulo} ➔ ${evento.detalle} (${userInfo.displayName})`);
    } catch (e) {
      console.warn("⚠️ [Bitácora] Error al guardar en Firebase:", e.message || e);
    }
  }

  return evento;
}

/**
 * Inicia el seguimiento de una visita a un canto
 */
export function registrarEntradaCanto(cantoId, cantoTitulo) {
  // Si había una sesión previa sin cambios, registrarla como visita limpia 😎
  finalizarSesionCantoActual();

  currentSongSession = {
    cantoId: cantoId,
    cantoTitulo: cantoTitulo,
    horaEntrada: Date.now(),
    cambioRealizado: false,
    detallesCambio: []
  };
}

/**
 * Registra un cambio en el traste / cejilla (ej: 🎸1, 🎸2...)
 */
export function registrarCambioTraste(cantoId, cantoTitulo, traste) {
  const trasteNum = parseInt(traste);
  const detalle = (trasteNum > 0) ? `🎸${trasteNum}` : '🎸0 (Sin cejilla)';
  
  if (currentSongSession.cantoId === cantoId) {
    currentSongSession.cambioRealizado = true;
    currentSongSession.detallesCambio.push(detalle);
  }

  registrarEventoBitacora({
    cantoId: cantoId,
    cantoTitulo: cantoTitulo,
    tipo: 'traste',
    detalle: detalle,
    datosExtra: { traste: trasteNum }
  });
}

/**
 * Registra un cambio o edición de acorde
 */
export function registrarCambioAcorde(cantoId, cantoTitulo, acordeDetalle) {
  const detalle = acordeDetalle ? `🎵 Acorde: ${acordeDetalle}` : '🎵 Acorde editado';
  
  if (currentSongSession.cantoId === cantoId) {
    currentSongSession.cambioRealizado = true;
    currentSongSession.detallesCambio.push(detalle);
  }

  registrarEventoBitacora({
    cantoId: cantoId,
    cantoTitulo: cantoTitulo,
    tipo: 'acorde',
    detalle: detalle,
    datosExtra: { acorde: acordeDetalle }
  });
}

/**
 * Registra un cambio de tono / transporte
 */
export function registrarCambioTono(cantoId, cantoTitulo, tonoOffset, acordeActual = '', acordeOriginal = '') {
  let detalle = '';
  if (acordeActual) {
    detalle = `🎼 ${acordeActual}`;
  } else {
    const signo = tonoOffset > 0 ? `+${tonoOffset}` : `${tonoOffset}`;
    detalle = `🎼 ${signo}`;
  }
  
  if (currentSongSession.cantoId === cantoId) {
    currentSongSession.cambioRealizado = true;
    currentSongSession.detallesCambio.push(detalle);
  }

  registrarEventoBitacora({
    cantoId: cantoId,
    cantoTitulo: cantoTitulo,
    tipo: 'tono',
    detalle: detalle,
    datosExtra: { 
      offset: tonoOffset,
      acordeActual: acordeActual,
      acordeOriginal: acordeOriginal
    }
  });
}

/**
 * Registra una valoración de estrellas (ej: 1⭐, 2⭐, 5⭐ o Sin valoración)
 */
export function registrarValoracionCanto(cantoId, cantoTitulo, rating) {
  const ratingNum = parseInt(rating) || 0;
  const detalle = (ratingNum > 0) ? `${ratingNum}⭐` : '0⭐ (Sin valoración)';

  if (currentSongSession.cantoId === cantoId) {
    currentSongSession.cambioRealizado = true;
    currentSongSession.detallesCambio.push(detalle);
  }

  registrarEventoBitacora({
    cantoId: cantoId,
    cantoTitulo: cantoTitulo,
    tipo: 'valoracion',
    detalle: detalle,
    datosExtra: { valoracion: ratingNum }
  });
}

/**
 * Registra creación o modificación de listados
 */
export function registrarAccionLista(nombreLista, accion = 'creada') {
  const detalle = `📋 Lista ${accion}: ${nombreLista}`;
  registrarEventoBitacora({
    cantoId: 'listas',
    cantoTitulo: `Listado: ${nombreLista}`,
    tipo: 'lista',
    detalle: detalle,
    datosExtra: { lista: nombreLista, accion }
  });
}

/**
 * Finaliza la sesión del canto actual. Si no hubo ningún cambio, guarda una visita 😎
 */
export function finalizarSesionCantoActual() {
  if (currentSongSession.cantoId) {
    if (!currentSongSession.cambioRealizado) {
      // Visita limpia sin cambios
      registrarEventoBitacora({
        cantoId: currentSongSession.cantoId,
        cantoTitulo: currentSongSession.cantoTitulo,
        tipo: 'visita',
        detalle: '😎'
      });
    }
    currentSongSession = {
      cantoId: null,
      cantoTitulo: null,
      horaEntrada: null,
      cambioRealizado: false,
      detallesCambio: []
    };
  }
}

// Al salir o cambiar de pestaña, cerrar sesión pendiente
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    finalizarSesionCantoActual();
  });
}
