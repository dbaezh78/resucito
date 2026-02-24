// src/js/logout.js
import { auth } from './firebase-auth.js'; 
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 1: Control de visibilidad y acceso
onAuthStateChanged(auth, (user) => {
    const seccionNueva = document.getElementById('wrapper-nueva-lista');
    const seccionMisListas = document.getElementById('wrapper-mis-listas');
    const contenedorPerfil = document.querySelector('.perfil-container');
    const btnLogout = document.getElementById('btn-logout-perfil');

    if (user) {
        // MOSTRAR si hay sesión
        if (seccionNueva) seccionNueva.style.display = 'block';
        if (seccionMisListas) seccionMisListas.style.display = 'block';
        if (contenedorPerfil) contenedorPerfil.style.display = 'block';
        if (btnLogout) btnLogout.style.display = 'inline-block';
        
        console.log("Acceso autorizado:", user.email);
    } else {
        // OCULTAR Y REDIRIGIR si no hay sesión
        if (btnLogout) btnLogout.style.display = 'none';
        
        // Solo redirigir si estamos en una página privada (como select.html)
        // Si estamos en index.html, no queremos que entre en un bucle de recarga
        
        /*
        if (window.location.pathname.includes('select.html')) {
            window.location.href = 'index.html';
        }*/
    }
});

// 2: Lógica del botón de cerrar sesión
document.getElementById('btn-logout-perfil')?.addEventListener('click', () => {
    if (confirm("¿Deseas cerrar la sesión?")) {
        signOut(auth).then(() => {
            window.location.href = 'index.html';
        }).catch((error) => console.error("Error:", error));
    }
});


// 3: Función para colapsar secciones
        function toggleSection(contentId, wrapperId) {
            const content = document.getElementById(contentId);
            const wrapper = document.getElementById(wrapperId);
            if (content && wrapper) {
                content.classList.toggle('cfg-close');
                wrapper.classList.toggle('collapsed');
            }
        }

// 4: Función de cierre que será llamada desde el iframe (index.html)
        window.confirmarCerrarVisor = () => {
            const modal = document.getElementById('modalVisorCanto');
            const contenido = document.getElementById('contenidoCantoVisor');
            if (modal) modal.classList.add('cfg-close');
            if (contenido) contenido.innerHTML = ''; 
            document.body.style.overflow = 'auto';
        };
