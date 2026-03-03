(function() {
    // 1. Inyectar el archivo CSS automáticamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/css/navigator.css';
    document.head.appendChild(link);

    // 2. Crear el HTML de la navegación
    const navHTML = `
        <div class="nav-bottom-bar">
            <button class="nav-item" id="btn-nav-menu">
                <span class="material-symbols-outlined">menu</span>
                <span>Menú</span>
                <div class="nav-submenu" id="nav-submenu">
                    <a href="https://www.youtube.com/@CristoJesusReydereyes" target="_blank"><span class="material-symbols-outlined">youtube_activity</span> YouTube</a>


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

            <a id="nav-google-auth" class="nav-item">
                <span class="material-symbols-outlined" id="nav-auth-icon">account_circle</span>
                <span id="nav-auth-text">Entrar</span>
            </a>

            <a id="nav-logout" class="nav-item">
                <span class="material-symbols-outlined">logout</span>
                <span>Salir</span>
            </a>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    // 3. Lógica del Submenú
    const btnMenu = document.getElementById('btn-nav-menu');
    const submenu = document.getElementById('nav-submenu');
    if (btnMenu && submenu) {
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            submenu.classList.toggle('active');
        });
        document.addEventListener('click', () => submenu.classList.remove('active'));
    }

    // 4. Lógica de Autenticación y Salida
    const updateAuthUI = (user) => {
        const icon = document.getElementById('nav-auth-icon');
        const text = document.getElementById('nav-auth-text');
        const btnAuth = document.getElementById('nav-google-auth');
        const btnLogout = document.getElementById('nav-logout');

        if (!btnAuth || !icon || !text || !btnLogout) return;

        if (user) {
            // --- USUARIO LOGUEADO ---
            if (user.photoURL) {
                icon.innerHTML = `<img src="${user.photoURL}" class="dbperfil">`;
            } else {
                icon.innerText = "person";
            }
            text.innerText = "Perfil";
            btnAuth.onclick = () => window.location.href = '/perfil.html';

            // Mostrar botón de salida
            btnLogout.style.display = "flex";
            btnLogout.onclick = async () => {
                if (window.firebaseAPI && typeof window.firebaseAPI.logout === 'function') {
                    await window.firebaseAPI.logout();
                } else {
                    // Fallback directo a signOut de Firebase si la API no está
                    console.warn("Cerrando sesión...");
                    location.reload(); 
                }
            };
        } else {
            // --- USUARIO NO LOGUEADO ---
            icon.innerHTML = "account_circle";
            text.innerText = "Entrar";
            btnAuth.onclick = () => {
                if (window.firebaseAPI && typeof window.firebaseAPI.login === 'function') {
                    window.firebaseAPI.login();
                } else {
                    console.warn("La API de Firebase no está lista.");
                }
            };

            // Ocultar botón de salida
            btnLogout.style.display = "none";
        }
    };

    // 5. Inicialización
    if (window.firebaseAPI && window.firebaseAPI.onAuthReady) {
        window.firebaseAPI.onAuthReady(updateAuthUI);
    } else {
        let checks = 0;
        const checkInterval = setInterval(() => {
            checks++;
            if (window.firebaseAPI && window.firebaseAPI.onAuthReady) {
                window.firebaseAPI.onAuthReady(updateAuthUI);
                clearInterval(checkInterval);
            }
            if (checks > 10) {
                document.getElementById('nav-auth-text').innerText = "Entrar";
                clearInterval(checkInterval);
            }
        }, 500);
    }
})();