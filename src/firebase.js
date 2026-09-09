// src/firebase.js - Inicialización de Firebase SDK para la aplicación Resucito

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  initializeFirestore, 
  persistentLocalCache, 
  persistentMultipleTabManager,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnUXqn8MXgy00Bk1lb1D_n-pxlZmcJ124",
  authDomain: "cristoresucito.firebaseapp.com",
  projectId: "cristoresucito",
  storageBucket: "cristoresucito.firebasestorage.app",
  messagingSenderId: "558116648057",
  appId: "1:558116648057:web:15db4912b0a840daa7d0a8",
  measurementId: "G-ETSQBMPBEE"
};

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtener e inicializar Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configurar e inicializar Firestore con caché persistente (habilitando uso sin conexión)
let dbTemp;
try {
  dbTemp = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });
  console.log("🔥 Firestore offline persistence enabled.");
} catch (e) {
  console.warn("Failed to initialize Firestore with persistent cache, falling back:", e);
  dbTemp = getFirestore(app);
}

export const db = dbTemp;

// Interceptores para registrar en los logs cada vez que se guarda o modifica algo en Firebase
async function setDocWithLogging(docRef, data, options) {
  const path = docRef?.path || 'desconocido';
  try {
    const res = await setDoc(docRef, data, options);
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      const summary = typeof data === 'object' && data ? Object.keys(data).join(', ') : '';
      console.log(`💾 [Firebase] Guardado en Firestore (${path}): [${summary}]`);
    }
    return res;
  } catch (err) {
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      console.error(`❌ [Firebase] Error al guardar en (${path}):`, err.message || err);
    }
    throw err;
  }
}

async function addDocWithLogging(colRef, data) {
  const path = colRef?.path || colRef?.id || 'desconocido';
  try {
    const res = await addDoc(colRef, data);
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      const summary = typeof data === 'object' && data ? Object.keys(data).join(', ') : '';
      console.log(`💾 [Firebase] Agregado a Firestore (${path}/${res?.id || ''}): [${summary}]`);
    }
    return res;
  } catch (err) {
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      console.error(`❌ [Firebase] Error al agregar a (${path}):`, err.message || err);
    }
    throw err;
  }
}

async function updateDocWithLogging(docRef, data) {
  const path = docRef?.path || 'desconocido';
  try {
    const res = await updateDoc(docRef, data);
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      const summary = typeof data === 'object' && data ? Object.keys(data).join(', ') : '';
      console.log(`💾 [Firebase] Actualizado en Firestore (${path}): [${summary}]`);
    }
    return res;
  } catch (err) {
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      console.error(`❌ [Firebase] Error al actualizar (${path}):`, err.message || err);
    }
    throw err;
  }
}

async function deleteDocWithLogging(docRef) {
  const path = docRef?.path || 'desconocido';
  try {
    const res = await deleteDoc(docRef);
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      console.log(`🗑️ [Firebase] Eliminado de Firestore (${path})`);
    }
    return res;
  } catch (err) {
    if (path !== 'app_logs' && !path.startsWith('app_logs/')) {
      console.error(`❌ [Firebase] Error al eliminar de (${path}):`, err.message || err);
    }
    throw err;
  }
}

export { 
  doc, 
  setDocWithLogging as setDoc, 
  getDoc, 
  updateDocWithLogging as updateDoc,
  deleteDocWithLogging as deleteDoc,
  deleteField,
  collection,
  addDocWithLogging as addDoc,
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  limit,
  serverTimestamp,
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
};
