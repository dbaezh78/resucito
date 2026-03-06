(function() {
    // 1. Inyectar los archivos CSS inmediatamente
    const linkNav = document.createElement('link');
    linkNav.rel = 'stylesheet';
    linkNav.href = '/src/css/navigator.css';
    document.head.appendChild(linkNav);

    const linkSettings = document.createElement('link');
    linkSettings.rel = 'stylesheet';
    linkSettings.href = '/src/css/setting.css';
    document.head.appendChild(linkSettings);

// 2. Inyectar archivos JS de ajustes y Firebase
    const scriptsToLoad = [
        { src: '/src/js/firebase-auth.js', type: 'module' },
        { src: '/src/js/setting-firebase.js', type: 'module' },
        { src: '/src/js/setting.js', type: 'text/javascript' }
    ];

    scriptsToLoad.forEach(s => {
        const script = document.createElement('script');
        script.src = s.src;
        if (s.type === 'module') {
            script.type = 'module';
        }
        document.head.appendChild(script);
    });

    // 3. Crear el HTML de la navegación 
    // Añadimos 'style="visibility: hidden"' para evitar el parpadeo sin estilos
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
                    <a href="https://www.facebook.com/groups/721999947892692" target="_blank"><span class="material-symbols-outlined">communities</span> Facebook</a>
                    <a href="https://dbaezh78.github.io/salterios/" target="_blank"><span class="material-symbols-outlined">prayer_times</span> Laudes</a>
                    <a href="https://dbaezh78.github.io/ev/" target="_blank"><span class="material-symbols-outlined">book_2</span> Evangelio del Día</a>
                    <a href="#"><span class="material-symbols-outlined">group</span> Comunidad Cantor</a>
                </div>
            </button>

            <button class="nav-item" id="btn-nav-neocate">
                <span class="material-symbols-outlined">church</span>
                <span>NeoCate</span>
                <div class="nav-submenu" id="nav-submenu-neocate">
                    <a href="https://neocatechumenaleiter.org/noticias/"><span class="material-symbols-outlined">newspaper</span> Noticias</a>
                    <a href="/info.html"><span class="material-symbols-outlined">info</span> Info</a>
                    <a href="/comunidades.html"><span class="material-symbols-outlined">groups</span> Comunidades</a>
                    <a href="/cantores.html"><span class="material-symbols-outlined">record_voice_over</span> Cantores</a>
                </div>
            </button>

            <button class="nav-item" id="btn-nav-resucito">
                <span class="material-symbols-outlined">menu_book</span>
                <span>Resucitó</span>
                <div class="nav-submenu" id="nav-submenu-resucito">
                    <a href="/"><span class="material-symbols-outlined">home</span> Inicio</a>
                    <a href="/src/select.html"><span class="material-symbols-outlined">playlist_add</span> Nueva Lista</a>
                    <a href="/perfil.html"><span class="material-symbols-outlined">person</span> Perfil</a>
                    <a href="/src/html/intro.html"><span class="material-symbols-outlined">menu_book</span> Introducción</a>
                    <a href="/catequesis.html"><span class="material-symbols-outlined">history_edu</span> Catequesis</a>
                </div>
            </button>

            <button class="nav-item" id="btn-open-settings">
                <span class="material-symbols-outlined">settings</span>
                <span>Ajustes</span>
            </button>

            <a id="nav-google-auth" class="nav-item">
                <span class="material-symbols-outlined" id="nav-auth-icon">account_circle</span>
                <span id="nav-auth-text">Entrar</span>
            </a>

            <a id="nav-logout" class="nav-item" style="display:none;">
                <span class="material-symbols-outlined">logout</span>
                <span>Salir</span>
            </a>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', navHTML);

    // Hacer visible la barra una vez inyectada
    requestAnimationFrame(() => {
        const navBar = document.querySelector('.nav-bottom-bar');
        if (navBar) navBar.style.visibility = 'visible';
    });

    // --- LÓGICA DE SUBMENÚS ---
    const setupSubmenu = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if (btn && menu) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.nav-submenu').forEach(m => {
                    if (m !== menu) m.classList.remove('active');
                });
                menu.classList.toggle('active');
            });
        }
    };

    setupSubmenu('btn-nav-menu', 'nav-submenu');
    setupSubmenu('btn-nav-neocate', 'nav-submenu-neocate');
    setupSubmenu('btn-nav-resucito', 'nav-submenu-resucito');

    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-submenu').forEach(m => m.classList.remove('active'));
    });

    // --- LÓGICA DE AUTENTICACIÓN ---
    const updateAuthUI = (user) => {
        const icon = document.getElementById('nav-auth-icon');
        const text = document.getElementById('nav-auth-text');
        const btnAuth = document.getElementById('nav-google-auth');
        const btnLogout = document.getElementById('nav-logout');

        if (!btnAuth || !icon || !text || !btnLogout) return;

        if (user) {
            icon.innerHTML = user.photoURL 
                ? `<img src="${user.photoURL}" class="dbperfil">`
                : `<span class="material-symbols-outlined">person</span>`;
            text.innerText = "Perfil";
            btnAuth.onclick = () => window.location.href = '/perfil.html';
            btnLogout.style.display = "flex";
            btnLogout.onclick = async () => {
                if (window.firebaseAPI?.logout) await window.firebaseAPI.logout();
                else location.reload();
            };
        } else {
            icon.innerHTML = "account_circle";
            text.innerText = "Entrar";
            btnAuth.onclick = () => window.firebaseAPI?.login?.();
            btnLogout.style.display = "none";
        }
    };

    if (window.firebaseAPI?.onAuthReady) {
        window.firebaseAPI.onAuthReady(updateAuthUI);
    } else {
        const checkInterval = setInterval(() => {
            if (window.firebaseAPI?.onAuthReady) {
                window.firebaseAPI.onAuthReady(updateAuthUI);
                clearInterval(checkInterval);
            }
        }, 500);
    }
})();

// --- LÓGICA DE AJUSTES ---
document.addEventListener('click', (e) => {
    if (e.target.closest('#btn-open-settings')) {
        e.preventDefault();
        abrirModalConfiguracion();
    }
});

function abrirModalConfiguracion() {
    if (document.getElementById('modal-global-settings')) return;

    const modal = document.createElement('div');
    modal.id = 'modal-global-settings';
    modal.className = 'settings-overlay';
    
    modal.onclick = (e) => {
        if (e.target.id === 'modal-global-settings') cerrarModalConfiguracion();
    };

    modal.innerHTML = `
        <div class="settings-frame">
            <div class="settings-header">
                <h2>
                    <span class="material-symbols-outlined" style="color:#bc0009">settings</span>
                    Configuración
                </h2>
                <button onclick="cerrarModalConfiguracion()" class="btn-close-settings">
                    <span class="material-symbols-outlined close">close</span>
                </button>
            </div>
            <div class="settings-content">
                ${window.generarContenidoSettings ? window.generarContenidoSettings() : '<p>Cargando ajustes...</p>'} 
            </div>
        </div>
    `;
    
    // Bloquear scroll del body
    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    
// DISPARAR ANIMACIÓN DE SUBIDA
    setTimeout(() => {
        modal.classList.add('active'); // Activa el fondo oscuro
        modal.querySelector('.settings-frame').classList.add('up'); // Sube el panel
    }, 10);

    document.addEventListener('keydown', manejarEscapeSettings);
}

function manejarEscapeSettings(e) {
    if (e.key === "Escape") {
        cerrarModalConfiguracion();
    }
}

function cerrarModalConfiguracion() {
    const modal = document.getElementById('modal-global-settings');
    if (modal) {
        // 1. Quitar clases de animación
        modal.classList.remove('active');
        modal.querySelector('.settings-frame').classList.remove('up');

        // 2. REFRESCAR NOTAS AL CERRAR (Aquí está el truco)
        if (window.renderizarNotasCanto) {
            console.log("Cerrando: Limpiando y renderizando nota...");
            window.renderizarNotasCanto();
        }

        // 3. Eliminar el modal después de la animación
        setTimeout(() => {
            modal.remove();
            document.body.classList.remove('modal-open');
            document.removeEventListener('keydown', manejarEscapeSettings);
        }, 300);
    }
}

// ==========================================
// MODULO: GESTIÓN DE LOGIN POST-LIMPIEZA (UNIFICADO)
// ==========================================
(function() {
    window.addEventListener('load', () => {
        const needsAutoLogin = sessionStorage.getItem('pending_login') === 'true';
        const needsPrompt = sessionStorage.getItem('force_login_prompt') === 'true';

        if (needsAutoLogin || needsPrompt) {
            console.log("Iniciando protocolo de recuperación de sesión...");

            // 1. Intentar Autologin (Estrategia Silenciosa/Popup)
            if (needsAutoLogin) {
                const loginInterval = setInterval(() => {
                    if (window.firebaseAPI?.login) {
                        clearInterval(loginInterval);
                        sessionStorage.removeItem('pending_login');
                        window.firebaseAPI.login();
                    }
                }, 500);
                setTimeout(() => clearInterval(loginInterval), 5000);
            }

            // 2. Refuerzo Visual (Estrategia Manual)
            // Esperamos 3 segundos para dar tiempo al autologin. 
            // Si el usuario ya está logueado por el paso anterior, no mostramos el alert.
            setTimeout(() => {
                // Verificamos si aún necesitamos el prompt (si no se ha logueado ya)
                if (sessionStorage.getItem('force_login_prompt') === 'true') {
                    sessionStorage.removeItem('force_login_prompt');
                    
                    const btnAuth = document.getElementById('nav-google-auth');
                    const isLogged = document.getElementById('nav-logout')?.style.display === 'flex';

                    if (btnAuth && !isLogged) {
                        btnAuth.style.background = "#bc0009";
                        btnAuth.style.borderRadius = "8px";
                        btnAuth.style.color = "white";
                        btnAuth.style.transform = "scale(1.1)";
                        btnAuth.style.transition = "all 0.5s ease";
                        
                        alert("⚠ Caché limpia. \n Si no viste la ventana de acceso, \n pulsa en el botón 'Entrar' (resaltado en rojo) para iniciar Sesión.");
                    }
                }
            }, 3500); 
        }
    });
})();