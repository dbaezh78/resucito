import { auth, db, loginConGoogle, guardarTonoEnNube } from './firebase-auth.js';
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

const googleIconSVG = `
    <span class="google-icon-wrapper">
        <svg class="google-icon" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
    </span>`;

// 2. ESCUCHA DE SESIÓN CORREGIDA
onAuthStateChanged(auth, async (user) => {
    const btnLogin = document.getElementById('btn-login');
    const urlParams = new URLSearchParams(window.location.search);
    const cantoId = urlParams.get('canto');

    if (user) {
        if (btnLogin) {
            // Se usa innerHTML y se concatena el nombre con el SVG
            //btnLogin.innerHTML = `<span class="btn-text">Hola, ${user.displayName.split(' ')[0]}</span> ${googleIconSVG}`;
            btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
            btnLogin.style.color = "darkgreen";
            btnLogin.dataset.action = 'logout';
        }
        if (window.actualizarTodoDesdeNube) window.actualizarTodoDesdeNube();
    } else {
        if (btnLogin) {
            // Se restaura el texto inicial y el icono
            btnLogin.innerHTML = `<span class="btn-text">Entrar con Google</span> ${googleIconSVG}`;
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