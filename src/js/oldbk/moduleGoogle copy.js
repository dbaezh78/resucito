type="module"
    // Importamos las funciones desde el archivo que creaste
    import { loginConGoogle, auth } from '/src/js/firebase-auth.js';
    import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

    const btnLogin = document.getElementById('btn-login');

    // Este código detecta automáticamente si el usuario ya está logueado o no
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Si está logueado, mostramos su nombre y opción de salir
            btnLogin.innerHTML = `Hola, ${user.displayName.split(' ')[0]} (Salir)`;
            btnLogin.style.color = "darkgreen";
            btnLogin.onclick = () => {
                if(confirm("¿Quieres cerrar sesión?")) signOut(auth);
            };
        } else {
            // Si no está logueado, mostramos el botón normal
            btnLogin.innerHTML = "Entrar con Google";
            btnLogin.style.color = "black";
            btnLogin.onclick = loginConGoogle;
        }
    });