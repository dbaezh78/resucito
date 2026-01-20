import { auth, db, loginConGoogle, guardarTonoEnNube } from '/src/js/firebase-auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.firebaseAPI = {
    guardarTono: async (cantoId, tono) => {
        localStorage.setItem(`tono_${cantoId}`, tono);
        if (auth.currentUser) {
            try {
                await guardarTonoEnNube(cantoId, tono);
            } catch (e) { console.error("Error guardando en nube:", e); }
        }
    },
    obtenerTonoGuardado: async (cantoId) => {
        if (auth.currentUser) {
            try {
                const docRef = doc(db, "usuarios", auth.currentUser.uid, "transportacion", cantoId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) return docSnap.data().tono;
            } catch (e) { console.error("Error obteniendo de nube:", e); }
        }
        return localStorage.getItem(`tono_${cantoId}`);
    }
};

// Usamos una función asíncrona para no bloquear el hilo principal
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
                } else {
                    if (btnLogin) {
                        btnLogin.innerHTML = "Entrar con Google";
                        btnLogin.style.color = "black";
                        btnLogin.dataset.action = 'login';
                    }
                }

                // Sincronización de tono
                if (cantoId && cejillaSelect) {
                    const tono = await window.firebaseAPI.obtenerTonoGuardado(cantoId);
                    if (tono && tono !== cejillaSelect.value) {
                        cejillaSelect.value = tono;
                        // Solo actualizamos acordes si la función ya fue cargada por jsgral.js
                        if (window.actualizarAcordes) {
                            window.actualizarAcordes();
                        }
                    }
                }
            });

// Listener para el botón (fuera del observer para mayor rapidez)
document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-login') {
        if (e.target.dataset.action === 'logout') {
            if (confirm("¿Quieres cerrar sesión?")) signOut(auth);
        } else {
            loginConGoogle();
        }
    }
});