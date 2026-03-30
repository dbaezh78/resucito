(function() {
    // 1. INYECTAR EL CSS DEL LOADER
    const style = document.createElement('style');
    style.innerHTML = `
        #loading-screen {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: white; z-index: 999999; display: flex;
            flex-direction: column; align-items: center; justify-content: center;
            transition: opacity 0.5s ease-out; font-family: sans-serif;
        }
        .loader-bar-container {
            width: 200px; height: 4px; background: #eee;
            border-radius: 10px; overflow: hidden; margin-top: 20px;
        }
        #loading-bar {
            width: 0%; height: 100%; background: #bc0009;
            transition: width 0.3s;
        }
        #loading-text { margin-top: 10px; font-size: 14px; color: #666; }
        .loader-logo { width: 80px; animation: pulse 1.5s infinite ease-in-out; }
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }
    `;
    document.head.appendChild(style);

    // 2. INYECTAR EL HTML DEL LOADER
    const loaderHTML = `
        <div id="loading-screen">
            <img src="/src/img/cristo.png" class="loader-logo" alt="Resucitó">
            <div style="font-family: 'Neocat', serif; color: #bc0009; font-size: 24px; margin-top:10px;">RESUCITÓ</div>
            <div class="loader-bar-container">
                <div id="loading-bar"></div>
            </div>
            <div id="loading-text">0%</div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    // 3. LÓGICA DE PROGRESO
    let progress = 0;
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');

    const interval = setInterval(() => {
        if (progress < 90) {
            progress += Math.random() * 12;
            actualizarUI(progress);
        }
    }, 100);

    function actualizarUI(val) {
        if (bar) bar.style.width = Math.min(val, 100) + '%';
        if (text) text.innerText = Math.round(Math.min(val, 100)) + '%';
    }

    window.addEventListener('load', () => {
        clearInterval(interval);
        actualizarUI(100);
        setTimeout(() => {
            const screen = document.getElementById('loading-screen');
            if (screen) {
                screen.style.opacity = '0';
                setTimeout(() => screen.remove(), 500); // Lo borra del DOM para liberar memoria
            }
        }, 400);
    });
})();