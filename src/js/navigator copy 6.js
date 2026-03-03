(function() {
    // 1. Inyectar el archivo CSS automáticamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/css/navigator.css';
    document.head.appendChild(link);

    // 2. Crear el HTML de la navegación
    const navHTML = `
        <div class="nav-bottom-bar">


            <a href="/" class="nav-item">
                <span class="material-symbols-outlined">home</span>
                <span>Inicio</span>
            </a>

            <button class="nav-item" id="btn-nav-menu">
                <span class="material-symbols-outlined">menu</span>
                <span>Menú</span>
                <div class="nav-submenu" id="nav-submenu">
                    <a href="https://www.youtube.com/@CristoJesusReydereyes" target="_blank"><span class="material-symbols-outlined">youtube_activity</span> YouTube</a>
                    <a href="https://facebook.com" target="_blank"><span class="material-symbols-outlined">communities</span> Facebook</a>
                    <a href="/camino.html" target="_blank"><span class="material-symbols-outlined">prayer_times</span> Laudes</a>
                    <a href="/pagina-cantor.html" target="_blank"><span class="material-symbols-outlined">book_2</span>Evangelio del Día</a>
                    <a href="/comunidad-cantor.html">Comunidad Cantor</a>
                </div>
            </button>

            <button class="nav-item" id="btn-nav-neocate">
                <span class="material-symbols-outlined">church</span>
                <span>NeoCate</span>
                <div class="nav-submenu" id="nav-submenu-neocate">
                    <a href="/noticias.html"><span class="material-symbols-outlined">newspaper</span> Noticias</a>
                    <a href="/info.html"><span class="material-symbols-outlined">info</span> Info</a>
                    <a href="/comunidades.html"><span class="material-symbols-outlined">groups</span> Comunidades</a>
                    <a href="/cantores.html"><span class="material-symbols-outlined">record_voice_over</span> Cantores</a>
                </div>
            </button>

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

    // 3. Lógica de los Submenús (Menú y NeoCate)
    const setupSubmenu = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if (btn && menu) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Opcional: Cerrar otros submenús abiertos
                document.querySelectorAll('.nav-submenu').forEach(m => {
                    if (m !== menu) m.classList.remove('active');
                });
                menu.classList.toggle('active');
            });
        }
    };

    setupSubmenu('btn-nav-menu', 'nav-submenu');
    setupSubmenu('btn-nav-neocate', 'nav-submenu-neocate');

    // Cerrar si se hace clic fuera de cualquier submenú
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-submenu').forEach(m => m.classList.remove('active'));
    });

    // 4. Lógica de Autenticación y Salida (Mantenemos tu lógica intacta)
    const updateAuthUI = (user) => {
        const icon = document.getElementById('nav-auth-icon');
        const text = document.getElementById('nav-auth-text');
        const btnAuth = document.getElementById('nav-google-auth');
        const btnLogout = document.getElementById('nav-logout');

        if (!btnAuth || !icon || !text || !btnLogout) return;

        if (user) {
            if (user.photoURL) {
                icon.innerHTML = `<img src="${user.photoURL}" class="dbperfil">`;
            } else {
                icon.innerText = "person";
            }
            text.innerText = "Perfil";
            btnAuth.onclick = () => window.location.href = '/perfil.html';

            btnLogout.style.display = "flex";
            btnLogout.onclick = async () => {
                if (window.firebaseAPI && typeof window.firebaseAPI.logout === 'function') {
                    await window.firebaseAPI.logout();
                } else {
                    console.warn("Cerrando sesión...");
                    location.reload(); 
                }
            };
        } else {
            icon.innerHTML = "account_circle";
            text.innerText = "Entrar";
            btnAuth.onclick = () => {
                if (window.firebaseAPI && typeof window.firebaseAPI.login === 'function') {
                    window.firebaseAPI.login();
                } else {
                    console.warn("La API de Firebase no está lista.");
                }
            };
            btnLogout.style.display = "none";
        }
    };

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