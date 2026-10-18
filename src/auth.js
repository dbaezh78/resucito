// src/auth.js - Módulo de autenticación y roles de usuario real con Firebase

import { 
  auth, 
  googleProvider, 
  browserPopupRedirectResolver,
  signInWithPopup, 
  signOut, 
  onAuthStateChanged as onFirebaseAuthStateChanged 
} from "./firebase.js";

// Lista de correos con privilegios de administrador
const ADMIN_EMAILS = ['dbaezh78@gmail.com'];

const CACHED_AUTH_USER_KEY = 'resucito_cached_auth_user';
const COOKIE_AUTH_BACKUP_KEY = 'resucito_auth_backup';

let explicitLogoutInProgress = false;

function readCookieAuthBackup() {
  try {
    if (typeof document === 'undefined' || !document.cookie) return null;
    const match = document.cookie.match(new RegExp('(?:^|; )' + COOKIE_AUTH_BACKUP_KEY + '=([^;]*)'));
    if (match && match[1]) {
      return JSON.parse(decodeURIComponent(match[1]));
    }
  } catch (e) {}
  return null;
}

function writeCookieAuthBackup(serializedUser) {
  try {
    if (typeof document === 'undefined') return;
    if (serializedUser) {
      document.cookie = `${COOKIE_AUTH_BACKUP_KEY}=${encodeURIComponent(serializedUser)}; path=/; max-age=31536000; SameSite=Lax`;
    } else {
      document.cookie = `${COOKIE_AUTH_BACKUP_KEY}=; path=/; max-age=0; SameSite=Lax`;
    }
  } catch (e) {}
}

export function saveCachedAuthUser(user) {
  if (!user || (!user.uid && !user.email)) return;
  try {
    const minimalUser = {
      uid: user.uid || '',
      email: user.email || '',
      displayName: user.displayName || (user.email ? user.email.split('@')[0] : 'Usuario'),
      photoURL: user.photoURL || ''
    };
    const serialized = JSON.stringify(minimalUser);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CACHED_AUTH_USER_KEY, serialized);
      if (minimalUser.email) localStorage.setItem('resucito_usuario_email', minimalUser.email);
      if (minimalUser.displayName) localStorage.setItem('resucito_usuario_nombre', minimalUser.displayName);

      // Respaldar también la entrada interna de Firebase Auth en sessionStorage
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('firebase:authUser:')) {
          const v = localStorage.getItem(k);
          if (v && typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('resucito_fb_auth_entry', JSON.stringify({ key: k, value: v }));
          }
          break;
        }
      }
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(CACHED_AUTH_USER_KEY, serialized);
    }
    writeCookieAuthBackup(serialized);
  } catch (e) {}
}

export function loadCachedAuthUser() {
  try {
    if (typeof localStorage !== 'undefined') {
      const rawLocal = localStorage.getItem(CACHED_AUTH_USER_KEY);
      if (rawLocal) {
        const parsed = JSON.parse(rawLocal);
        if (parsed && (parsed.uid || parsed.email)) return parsed;
      }
      // Intentar extraer directamente de la clave nativa de Firebase Auth si existe
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('firebase:authUser:')) {
          const fbRaw = localStorage.getItem(k);
          if (fbRaw) {
            const fbUser = JSON.parse(fbRaw);
            if (fbUser && (fbUser.uid || fbUser.email)) {
              saveCachedAuthUser(fbUser);
              return {
                uid: fbUser.uid || '',
                email: fbUser.email || '',
                displayName: fbUser.displayName || (fbUser.email ? fbUser.email.split('@')[0] : 'Usuario'),
                photoURL: fbUser.photoURL || ''
              };
            }
          }
        }
      }
    }
    if (typeof sessionStorage !== 'undefined') {
      const rawSession = sessionStorage.getItem(CACHED_AUTH_USER_KEY);
      if (rawSession) {
        const parsed = JSON.parse(rawSession);
        if (parsed && (parsed.uid || parsed.email)) {
          saveCachedAuthUser(parsed);
          return parsed;
        }
      }
    }
    const fromCookie = readCookieAuthBackup();
    if (fromCookie && (fromCookie.uid || fromCookie.email)) {
      saveCachedAuthUser(fromCookie);
      return fromCookie;
    }
  } catch (e) {}
  return null;
}

function clearCachedAuthUser() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(CACHED_AUTH_USER_KEY);
      localStorage.removeItem('resucito_usuario_email');
      localStorage.removeItem('resucito_usuario_nombre');
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && k.startsWith('firebase:authUser:')) {
          localStorage.removeItem(k);
        }
      }
    }
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(CACHED_AUTH_USER_KEY);
      sessionStorage.removeItem('resucito_fb_auth_entry');
    }
    writeCookieAuthBackup(null);
  } catch (e) {}
}

export function preserveAuthSessionSnapshot() {
  const snapshot = {
    user: currentUser || auth?.currentUser || loadCachedAuthUser(),
    localEntries: {}
  };
  try {
    if (typeof localStorage !== 'undefined') {
      const keysToKeep = [
        CACHED_AUTH_USER_KEY,
        'resucito_usuario_email',
        'resucito_usuario_nombre',
        'user_profile_data',
        'resucito_access_control'
      ];
      keysToKeep.forEach(k => {
        const val = localStorage.getItem(k);
        if (val !== null) snapshot.localEntries[k] = val;
      });
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('firebase:authUser:') || k.startsWith('firebase:host:'))) {
          snapshot.localEntries[k] = localStorage.getItem(k);
        }
      }
    }
  } catch (e) {}
  return snapshot;
}

export function restoreAuthSessionSnapshot(snapshot) {
  if (!snapshot) return;
  try {
    if (typeof localStorage !== 'undefined' && snapshot.localEntries) {
      Object.entries(snapshot.localEntries).forEach(([k, v]) => {
        if (v !== null && v !== undefined) {
          localStorage.setItem(k, v);
        }
      });
    }
    if (snapshot.user) {
      saveCachedAuthUser(snapshot.user);
      if (!currentUser) {
        currentUser = snapshot.user;
        authInitialized = true;
        notifyListeners();
      }
    }
  } catch (e) {}
}

if (typeof window !== 'undefined') {
  window.preservarSesionUsuario = preserveAuthSessionSnapshot;
  window.restaurarSesionUsuario = restoreAuthSessionSnapshot;
}

// Inicializar inmediatamente desde la sesión guardada para que el usuario nunca aparezca desconectado al recargar o limpiar caché
let currentUser = loadCachedAuthUser();
const authStateListeners = [];
let authInitialized = Boolean(currentUser);

// Escuchar cambios reales de Firebase Auth
onFirebaseAuthStateChanged(auth, (user) => {
  if (user) {
    explicitLogoutInProgress = false;
    currentUser = user;
    saveCachedAuthUser(user);
    authInitialized = true;
    notifyListeners();
  } else {
    if (!explicitLogoutInProgress) {
      const cached = loadCachedAuthUser();
      if (cached && (cached.uid || cached.email)) {
        currentUser = cached;
        authInitialized = true;
        notifyListeners();
        return;
      }
    }
    currentUser = null;
    authInitialized = true;
    notifyListeners();
  }
});

export function isAuthInitialized() {
  return authInitialized;
}

export function getCurrentUser() {
  return currentUser || auth?.currentUser || loadCachedAuthUser();
}

export function isCurrentUserAdmin() {
  const user = getCurrentUser();
  if (!user || !user.email) return false;
  return ADMIN_EMAILS.includes(user.email.toLowerCase().trim());
}

export function onAuthStateChanged(authOrCallback, maybeCallback) {
  const callback = typeof authOrCallback === 'function' ? authOrCallback : maybeCallback;
  if (typeof callback !== 'function') return;
  authStateListeners.push(callback);
  // Si auth ya fue inicializado o hay sesión guardada, llamar inmediatamente con el estado actual
  const activeUser = getCurrentUser();
  if (authInitialized || activeUser) {
    try {
      callback(activeUser);
    } catch (e) {
      console.warn("Error en auth listener callback:", e);
    }
  }
}

function notifyListeners() {
  const activeUser = getCurrentUser();
  authStateListeners.forEach(callback => {
    if (typeof callback === 'function') {
      try {
        callback(activeUser);
      } catch (e) {
        console.warn("Error notificando auth listener:", e);
      }
    }
  });
}

// Iniciar sesión real con Google Popup
export async function loginConGoogle() {
  try {
    explicitLogoutInProgress = false;
    const result = browserPopupRedirectResolver
      ? await signInWithPopup(auth, googleProvider, browserPopupRedirectResolver)
      : await signInWithPopup(auth, googleProvider);
    if (result && result.user) {
      currentUser = result.user;
      saveCachedAuthUser(result.user);
      authInitialized = true;
      notifyListeners();
    }
    return result.user;
  } catch (error) {
    console.error("Error al autenticar con Firebase:", error);
    throw error;
  }
}

// Cerrar sesión real con Firebase (solo cuando el usuario lo solicita explícitamente)
export async function logout() {
  try {
    explicitLogoutInProgress = true;
    clearCachedAuthUser();
    currentUser = null;
    notifyListeners();
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión de Firebase:", error);
    throw error;
  }
}

// Compatibilidad con main.js
export const loginMock = loginConGoogle;
export const logoutMock = logout;
