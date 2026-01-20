// 1. IMPORTACIONES: Necesarias para que el código reconozca las funciones
import { auth, db, loginConGoogle, guardarTonoEnNube } from '/src/js/firebase-auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. EXPOSICIÓN GLOBAL: Para que jsgral.js pueda usar la función de guardar
window.firebaseAPI = {
    guardarTono: guardarTonoEnNube,
    obtenerTonoGuardado: async (cantoId) => {
        const user = auth.currentUser;
        if (user) {
            const docRef = doc(db, "usuarios", user.uid, "transportacion", cantoId);
            const docSnap = await getDoc(docRef);
            return docSnap.exists() ? docSnap.data().tono : null;
        }
        return null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');

    if (btnLogin) {
        // Configuramos la acción del clic (Entrar o Salir)
        btnLogin.addEventListener('click', async () => {
            if (btnLogin.dataset.action === 'logout') {
                if (confirm("¿Quieres cerrar sesión?")) {
                    signOut(auth);
                }
            } else {
                await loginConGoogle();
            }
        });

        // ESCUCHAMOS EL ESTADO DEL USUARIO
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // --- USUARIO LOGUEADO ---
                btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
                btnLogin.style.color = "darkgreen";
                btnLogin.dataset.action = 'logout';

                // --- CARGAR EL TONO GUARDADO AUTOMÁTICAMENTE ---
                const urlParams = new URLSearchParams(window.location.search);
                const cantoId = urlParams.get('canto');

                if (cantoId) {
                    const tonoGuardado = await window.firebaseAPI.obtenerTonoGuardado(cantoId);
                    if (tonoGuardado) {
                        const cejillaSelect = document.getElementById('cejillaSelect');
                        if (cejillaSelect) {
                            cejillaSelect.value = tonoGuardado;
                            console.log("Tono recuperado de Google:", tonoGuardado);
                            
                            // Avisamos a jsgral.js que el valor cambió para que mueva los acordes
                            cejillaSelect.dispatchEvent(new Event('change'));
                        }
                    }
                }
            } else {
                // --- USUARIO NO LOGUEADO ---
                btnLogin.innerHTML = "Entrar con Google";
                btnLogin.style.color = "black";
                btnLogin.dataset.action = 'login';
            }
        });
    }
});