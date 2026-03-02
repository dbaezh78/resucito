(function() {
    // 1. Inyectar el archivo CSS automáticamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/css/navigator.css';
    document.head.appendChild(link);

    // 2. Crear el HTML de la navegación (Sin el observador, con el botón integrado)
    const navHTML = `
        <div class="nav-bottom-bar">
            <button class="nav-item" id="btn-nav-menu">
                <span class="material-symbols-outlined">menu</span>
                <span>Menú</span>
                <div class="nav-submenu" id="nav-submenu">
                    <a href="https://www.youtube.com/@CristoJesusReydereyes" target="_blank">YouTube</a>
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                    <a href="/camino.html">Camino</a>
                    <a href="/pagina-cantor.html">Página Cantor</a>
                    <a href="/comunidad-cantor.html">Comunidad Cantor</a>
                </div>
            </button>

            <a href="/" class="nav-item">
                <span class="material-symbols-outlined">home</span>
                <span>Inicio</span>
            </a>

            <a href="/noticias.html" class="nav-item">
                <span class="material-symbols-outlined">newspaper</span>
                <span>Noticias</span>
            </a>

            <a href="/info.html" class="nav-item">
                <span class="material-symbols-outlined">info</span>
                <span>Info</span>
            </a>

            <a href="/perfil.html" class="nav-item">
                <span class="material-symbols-outlined">settings</span>
                <span>Ajuste</span>
            </a>

            <button id="nav-google-auth" class="nav-item">
                <span class="material-symbols-outlined" id="nav-auth-icon">account_circle</span>
                <span id="nav-auth-text">Entrar</span>
            </button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    // 3. Lógica del Submenú
    const btnMenu = document.getElementById('btn-nav-menu');
    const submenu = document.getElementById('nav-submenu');
    if (btnMenu) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('active');
        });
        document.addEventListener('click', () => submenu.classList.remove('active'));
    }

    // 4. Lógica de Autenticación Unificada
    // Esperamos a que Firebase esté disponible a través de tu API existente
    const updateAuthUI = (user) => {
        const icon = document.getElementById('nav-auth-icon');
        const text = document.getElementById('nav-auth-text');
        const btn = document.getElementById('nav-google-auth');

        if (user) {
            // Si hay usuario, mostramos su foto y cambiamos el texto
            if (user.photoURL) {
                icon.innerHTML = `<img src="${user.photoURL}" style="width:24px; height:24px; border-radius:50%;">`;
            } else {
                icon.innerText = "person";
            }
            text.innerText = "Perfil";
            btn.onclick = () => window.location.href = '/perfil.html';
        } else {
            // Si no hay usuario, icono por defecto e iniciar sesión
            icon.innerText = "account_circle";
            text.innerText = "Entrar";
            btn.onclick = () => {
                if (window.firebaseAPI && typeof window.firebaseAPI.login === 'function') {
                    window.firebaseAPI.login();
                } else if (typeof window.loginConGoogle === 'function') {
                    window.loginConGoogle();
                }
            };
        }
    };

    // Usamos el listener de moduleGoogle.js si ya lo tienes, o esperamos a que cargue
    if (window.firebaseAPI && window.firebaseAPI.onAuthReady) {
        window.firebaseAPI.onAuthReady(updateAuthUI);
    } else {
        // Fallback: Si no has implementado onAuthReady, revisamos cada segundo
        const checkAuth = setInterval(() => {
            if (window.auth && window.auth.currentUser !== undefined) {
                updateAuthUI(window.auth.currentUser);
                // No limpiamos el intervalo para que detecte cambios de sesión
            }
        }, 1000);
    }
})();