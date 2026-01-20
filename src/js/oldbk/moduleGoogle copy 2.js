// IMPORTANTE: Nota el "./" al principio para que IIS encuentre el archivo en la misma carpeta
import { auth, loginConGoogle } from './firebase-auth.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth, db, guardarTonoEnNube } from './firebase-auth.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// EXPOSICIÓN GLOBAL: Para que jsgral.js pueda usar estas funciones
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
        // Configuramos la acción del clic
        btnLogin.addEventListener('click', async () => {
            if (btnLogin.dataset.action === 'logout') {
                if (confirm("¿Quieres cerrar sesión?")) {
                    signOut(auth);
                }
            } else {
                await loginConGoogle();
            }
        });

        // Escuchamos cuando el usuario entra o sale
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Usuario logueado
                btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
                btnLogin.style.color = "darkgreen";
                btnLogin.dataset.action = 'logout'; // Marcamos que ahora sirve para salir
            } else {
                // Usuario no logueado
                btnLogin.innerHTML = "Entrar con Google";
                btnLogin.style.color = "black";
                btnLogin.dataset.action = 'login';
            }
        });
    }
});