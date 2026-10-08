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
  serverTimestamp,
  increment,
  writeBatch
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

// Configurar e inicializar Firestore con caché persistente y soporte para navegadores con bloqueadores (Brave Shields)
let dbTemp;
try {
  dbTemp = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  });
} catch (e) {
  try {
    dbTemp = getFirestore(app);
  } catch(err2) {
    console.error("Critical Firestore init error:", err2);
  }
}

export const db = dbTemp;

// Interceptores limpios (sólo registran errores reales en consola para evitar saturación de logs)
async function setDocWithLogging(docRef, data, options) {
  const path = docRef?.path || 'desconocido';
  try {
    return await setDoc(docRef, data, options);
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
    return await addDoc(colRef, data);
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
    return await updateDoc(docRef, data);
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
    return await deleteDoc(docRef);
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
  increment,
  writeBatch,
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
};
