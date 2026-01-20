//import { auth, db, loginConGoogle, guardarTonoEnNube } from './firebase-auth.js';
import { auth, db, loginConGoogle, guardarTonoEnNube } from 'firebase-auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// API con soporte para datos independientes
window.firebaseAPI = {
    guardarDato: async (cantoId, valor, tipo) => {
        const clave = `${tipo}_${cantoId}`;
        localStorage.setItem(clave, valor);
        if (auth.currentUser) {
            try {
                // Guardamos en una colección específica según el tipo (cejilla o transporte)
                const docRef = doc(db, "usuarios", auth.currentUser.uid, tipo, cantoId);
                await setDoc(docRef, { valor: valor }, { merge: true });
            } catch (e) { console.error(`Error guardando ${tipo}:`, e); }
        }
    },
    obtenerDato: async (cantoId, tipo) => {
        if (auth.currentUser) {
            try {
                const docRef = doc(db, "usuarios", auth.currentUser.uid, tipo, cantoId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) return docSnap.data().valor;
            } catch (e) { }
        }
        return localStorage.getItem(`${tipo}_${cantoId}`);
    }
};

onAuthStateChanged(auth, async (user) => {
    const btnLogin = document.getElementById('btn-login');
    const urlParams = new URLSearchParams(window.location.search);
    const cantoId = urlParams.get('canto');
    const cejillaSelect = document.getElementById('cejillaSelect');

    if (user) {
        if (btnLogin) {
            btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
            btnLogin.style.color = "darkgreen";
            btnLogin.dataset.action = 'logout';
        }
        // Al iniciar sesión, notificamos a jsgral para que recupere los datos de la nube
        if (window.actualizarTodoDesdeNube) window.actualizarTodoDesdeNube();
    } else {
        if (btnLogin) {
            btnLogin.innerHTML = "Entrar con Google";
            btnLogin.style.color = "black";
            btnLogin.dataset.action = 'login';
        }
    }
});

document.addEventListener('click', (e) => {
    const btn = e.target.closest('#btn-login');
    if (btn) {
        if (btn.dataset.action === 'logout') {
            if (confirm("¿Quieres cerrar sesión?")) signOut(auth);
        } else {
            loginConGoogle();
        }
    }
});