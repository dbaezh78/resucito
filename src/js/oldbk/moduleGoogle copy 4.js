import { auth, db, loginConGoogle, guardarTonoEnNube } from '/src/js/firebase-auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.firebaseAPI = {
    guardarTono: async (cantoId, tono) => {
        // 1. Guardar siempre en Local (Inmediato)
        localStorage.setItem(`tono_${cantoId}`, tono);
        
        // 2. Guardar en la Nube si el usuario está logueado
        if (auth.currentUser) {
            await guardarTonoEnNube(cantoId, tono);
        }
    },
    obtenerTonoGuardado: async (cantoId) => {
        // 1. Prioridad: Intentar traer de la Nube si hay usuario
        if (auth.currentUser) {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "transportacion", cantoId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) return docSnap.data().tono;
        }
        // 2. Segunda opción: Traer de Memoria Local
        return localStorage.getItem(`tono_${cantoId}`);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');

    if (btnLogin) {
        btnLogin.addEventListener('click', async () => {
            if (btnLogin.dataset.action === 'logout') {
                if (confirm("¿Quieres cerrar sesión?")) signOut(auth);
            } else {
                await loginConGoogle();
            }
        });

        onAuthStateChanged(auth, async (user) => {
            const urlParams = new URLSearchParams(window.location.search);
            const cantoId = urlParams.get('canto');
            const cejillaSelect = document.getElementById('cejillaSelect');

            if (user) {
                btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
                btnLogin.style.color = "darkgreen";
                btnLogin.dataset.action = 'logout';
            } else {
                btnLogin.innerHTML = "Entrar con Google";
                btnLogin.style.color = "black";
                btnLogin.dataset.action = 'login';
            }

            // CARGA AUTOMÁTICA (Funciona con o sin login gracias al LocalStorage)
            if (cantoId && cejillaSelect) {
                const tono = await window.firebaseAPI.obtenerTonoGuardado(cantoId);
                if (tono) {
                    cejillaSelect.value = tono;
                    cejillaSelect.dispatchEvent(new Event('change'));
                }
            }
        });
    }
});