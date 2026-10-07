// src/auth.js - Módulo de autenticación y roles de usuario real con Firebase

import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged as onFirebaseAuthStateChanged 
} from "./firebase.js";

// Lista de correos con privilegios de administrador
const ADMIN_EMAILS = ['dbaezh78@gmail.com'];

let currentUser = null;
const authStateListeners = [];

let authInitialized = false;

// Escuchar cambios reales de Firebase Auth
onFirebaseAuthStateChanged(auth, (user) => {
  currentUser = user;
  authInitialized = true;
  notifyListeners();
});

export function isAuthInitialized() {
  return authInitialized;
}

export function getCurrentUser() {
  return currentUser;
}

export function isCurrentUserAdmin() {
  if (!currentUser || !currentUser.email) return false;
  return ADMIN_EMAILS.includes(currentUser.email.toLowerCase().trim());
}

export function onAuthStateChanged(authOrCallback, maybeCallback) {
  const callback = typeof authOrCallback === 'function' ? authOrCallback : maybeCallback;
  if (typeof callback !== 'function') return;
  authStateListeners.push(callback);
  // Si auth ya fue inicializado, llamar inmediatamente con el estado actual
  if (authInitialized) {
    try {
      callback(currentUser);
    } catch (e) {
      console.warn("Error en auth listener callback:", e);
    }
  }
}

function notifyListeners() {
  authStateListeners.forEach(callback => {
    if (typeof callback === 'function') {
      try {
        callback(currentUser);
      } catch (e) {
        console.warn("Error notificando auth listener:", e);
      }
    }
  });
}

// Iniciar sesión real con Google Popup
export async function loginConGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error al autenticar con Firebase:", error);
    throw error;
  }
}

// Cerrar sesión real con Firebase
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error al cerrar sesión de Firebase:", error);
    throw error;
  }
}

// Compatibilidad con main.js
export const loginMock = loginConGoogle;
export const logoutMock = logout;
