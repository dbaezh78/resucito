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

        Poner aqui el boton de iniciar session de google

        </div>
    `;

    // 3. Insertar en el body
    document.body.insertAdjacentHTML('beforeend', navHTML);

    // 4. Lógica para abrir/cerrar el submenú
    const btnMenu = document.getElementById('btn-nav-menu');
    const submenu = document.getElementById('nav-submenu');

    btnMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        submenu.classList.toggle('active');
    });

    // Cerrar si se hace clic fuera
    document.addEventListener('click', () => {
        submenu.classList.remove('active');
    });
})();