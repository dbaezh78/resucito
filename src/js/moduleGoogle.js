import { auth, db, loginConGoogle } from './firebase-auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// SVG del Icono de Google para el botón de inicio
const googleIconSVG = `<span class="google-icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 3.333 29.352 1 24 1 11.297 1 1 11.297 1 24s10.297 23 23 23c11.297 0 23-8.703 23-23 0-1.333-.146-2.607-.406-3.834z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 3.333 29.352 1 24 1c-7.401 0-13.842 3.961-17.694 9.691z"/>
        <path fill="#4CAF50" d="M24 47c6.335 0 12.016-2.637 16.096-6.904l-6.233-5.213C31.026 37.199 27.701 38 24 38c-5.833 0-10.8-3.793-12.56-9.043l-6.845 5.274C8.455 40.547 15.617 47 24 47z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.001-.002 6.233 5.213C38.906 37.11 47 31.5 47 24c0-1.333-.146-2.607-.406-3.834z"/>
    </svg>
</span>`;

// API para gestión de datos en la nube y local
window.firebaseAPI = {
    guardarDato: async (cantoId, valor, tipo) => {
        const clave = `${tipo}_${cantoId}`;
        localStorage.setItem(clave, valor);
        if (auth.currentUser) {
            try {
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
    },
    obtenerConfiguracion: async () => {
        if (auth.currentUser) {
            try {
                const docRef = doc(db, "usuarios", auth.currentUser.uid, "perfil", "config");
                const docSnap = await getDoc(docRef);
                return docSnap.exists() ? docSnap.data() : null;
            } catch (e) { console.error("Error obteniendo perfil:", e); }
        }
        return null;
    }
};

// Manejo del estado de la sesión y actualización de la interfaz
onAuthStateChanged(auth, async (user) => {
    const btnLogin = document.getElementById('btn-login');

    if (user) {
        if (btnLogin) {
            // Cambio solicitado: Mostrar nombre + Rosca (engranaje) en lugar de "Salir"
            btnLogin.innerHTML = `
                <span class="btn-text">La paz, ${user.displayName.split(' ')[0]}</span>
                <span style="font-size: 1.2em; margin-left: 8px; vertical-align: middle;">⚙️</span>
            `;
            btnLogin.style.color = "#bc0009"; // Rojo institucional
            btnLogin.dataset.action = 'profile'; 
        }
        // Notificar a otros scripts que la sesión está lista
        if (window.actualizarTodoDesdeNube) window.actualizarTodoDesdeNube();
    } else {
        if (btnLogin) {
            // Estado por defecto: Invitado
            btnLogin.innerHTML = `<span class="btn-text">Entrar con Google</span> ${googleIconSVG}`;
            btnLogin.style.color = "black";
            btnLogin.dataset.action = 'login';
        }
    }
});

// Listener global de clics para el botón de acceso/perfil
document.addEventListener('click', (e) => {
    const btn = e.target.closest('#btn-login');
    if (!btn) return;

    const action = btn.dataset.action;

    if (action === 'login') {
        loginConGoogle();
    } else if (action === 'profile') {
        // Redirección a la página de perfil configurada
        window.location.href = '/perfil.html';
    }
});