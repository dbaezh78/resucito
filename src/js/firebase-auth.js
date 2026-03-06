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

// ✅ EL PUENTE (Fundamental para que setting.js no dé error)
window.firebaseAPI = {
    obtenerUsuarioActual: () => auth.currentUser
};

// ✅ FUNCIÓN LOGIN
export async function loginConGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Usuario identificado:", result.user.displayName);
        return result.user;
    } catch (error) {
        console.error("Error al autenticar:", error);
        throw error;
    }
}

// ✅ FUNCIÓN LOGOUT (Rescatada para que el botón de salir funcione)
export async function logout() {
    try {
        await signOut(auth);
        console.log("Sesión cerrada correctamente");
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
    }
}

// ✅ GUARDAR TONO
export async function guardarTonoEnNube(cantoId, tono) {
    const user = auth.currentUser;
    if (user) {
        try {
            await setDoc(doc(db, "usuarios", user.uid, "transportacion", cantoId), {
                tono: tono,
                ultimaActualizacion: new Date()
            });
            console.log(`Tono ${tono} guardado en nube`);
        } catch (e) { console.error("Error guardando tono:", e); }
    }
}

// ✅ ESCUCHA DE ESTADO DE LA SESIÓN Y SINCRONIZACIÓN
onAuthStateChanged(auth, async (user) => {
    if (user) {
        // Mantenemos esta línea para tus permisos de editor/mantenimiento
        window.userEmailActivo = user.email;
        console.log("👤 Sesión activa:", user.email);

        const params = new URLSearchParams(window.location.search);
        const cantoId = params.get('canto');
        
        if (cantoId) {
            console.log("📥 [Auth] Esperando descarga de Firebase...");
            
            // Forzamos la espera real de los datos
            if (window.sincronizarConfiguracionDesdeFirebase) {
                await window.sincronizarConfiguracionDesdeFirebase(cantoId);
            }
            
            // Refrescamos la UI solo cuando LocalStorage ya tiene lo de la nube
            if (window.actualizarValoresUI) {
                console.log("🔄 [Auth] Aplicando datos descargados a la UI");
                window.actualizarValoresUI();
            }
        }
    } else {
        window.userEmailActivo = null;
        console.log("🌐 Modo invitado.");
        if (window.actualizarValoresUI) window.actualizarValoresUI();
    }
});