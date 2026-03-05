import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc 
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

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Puente para que otros scripts vean al usuario
window.firebaseAPI = {
    obtenerUsuarioActual: () => auth.currentUser
};

export async function loginConGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Error al autenticar:", error);
        throw error;
    }
}

// Función para guardar el tono
export async function guardarTonoEnNube(cantoId, tono) {
    const user = auth.currentUser;
    if (user) {
        try {
            await setDoc(doc(db, "usuarios", user.uid, "transportacion", cantoId), {
                tono: tono,
                ultimaActualizacion: new Date()
            });
        } catch (e) { console.error("Error guardando tono:", e); }
    }
}

// NUEVA: Función de velocidad para Auto-Scroll
export async function guardarVelocidadCanto(dispositivo, nuevaVelocidad) {
    const params = new URLSearchParams(window.location.search);
    const cantoId = params.get('canto');
    if (!cantoId) return;

    const valorNum = parseInt(nuevaVelocidad);
    localStorage.setItem(`scroll_v_${dispositivo}_${cantoId}`, valorNum);

    if (auth.currentUser) {
        try {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
            await setDoc(docRef, {
                [`scrollConfig.${dispositivo}.v`]: valorNum,
                ultimaActualizacion: new Date()
            }, { merge: true });
            console.log("Velocidad sincronizada en nube");
        } catch (e) { console.error("Error Firebase Scroll:", e); }
    }
}

// Exponemos la función globalmente para setting.js
window.guardarVelocidadCanto = guardarVelocidadCanto;

// Vigilante del estado de la sesión
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.userEmailActivo = user.email;
        console.log("Sesión activa:", user.email);
    } else {
        window.userEmailActivo = null;
    }
});