/**
 * RESUCITÓ - Loader Inteligente
 * Bloquea el scroll y oculta deformidades de carga inyectando una máscara global.
 */
(function() {
    // 1. BLOQUEO E INYECCIÓN DE ESTILOS
    // Añadimos la clase 'loading' al body de inmediato
    document.body.classList.add('loading');

    const style = document.createElement('style');
    style.id = 'loader-style-dynamic';
    style.innerHTML = `
        /* Bloqueo de scroll mientras carga */
        body.loading { 
            overflow: hidden !important; 
            height: 100vh !important; 
            margin: 0 !important;
        }

        /* Pantalla de carga */
        #loading-screen {
            position: fixed; 
            top: 0; left: 0; 
            width: 100vw; height: 100vh;
            background: white; 
            z-index: 9999999; 
            display: flex;
            flex-direction: column; 
            align-items: center; 
            justify-content: center;
            transition: opacity 0.6s ease-in-out; 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .loader-bar-container {
            width: 220px; 
            height: 5px; 
            background: #f0f0f0;
            border-radius: 10px; 
            overflow: hidden; 
            margin-top: 25px;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        }

        #loading-bar {
            width: 0%; 
            height: 100%; 
            background: #bc0009; /* Rojo Sangre de Cristo */
            transition: width 0.4s ease-out;
        }

        #loading-text { 
            margin-top: 12px; 
            font-size: 14px; 
            color: #888; 
            font-weight: 500;
        }

        .loader-logo { 
            width: 90px; 
            height: auto;
            filter: drop-shadow(0 2px 5px rgba(0,0,0,0.1));
            animation: pulse-resucito 1.8s infinite ease-in-out; 
        }

        @keyframes pulse-resucito {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.08); opacity: 1; }
            100% { transform: scale(1); opacity: 0.9; }
        }
    `;
    document.head.appendChild(style);

    // 2. INYECCIÓN DEL HTML (Asegura que sea lo primero en el body)
    const loaderHTML = `
        <div id="loading-screen">
            <img src="/src/img/cristo.png" class="loader-logo" alt="Logo">
            <div style="font-family: 'Neocat', serif; color: #bc0009; font-size: 28px; margin-top:15px; letter-spacing: 1px;">RESUCITÓ</div>
            <div class="loader-bar-container">
                <div id="loading-bar"></div>
            </div>
            <div id="loading-text">Iniciando... 0%</div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    // 3. LÓGICA DE PROGRESO Y CONTROL
    let progress = 0;
    const bar = document.getElementById('loading-bar');
    const text = document.getElementById('loading-text');

    // Simulador de carga inicial rápida para dar feedback
    /*
    const interval = setInterval(() => {
        if (progress < 85) {
            progress += Math.random() * 10;
            actualizarUI(progress);
        }
    }, 120);
    */

    function actualizarUI(val) {
        const total = Math.round(Math.min(val, 100));
        if (bar) bar.style.width = total + '%';
        if (text) text.innerText = 'Cargando... ' + total + '%';
    }

    //==================================================================================
    // 4. CIERRE (Evento 'load' asegura que CSS, JS e imágenes estén listos)
    //==================================================================================
        window.addEventListener('load', () => {
            actualizarUI(100);
            
            const screen = document.getElementById('loading-screen');
            if (screen) {
                screen.style.opacity = '0'; // Aquí empieza a desvanecerse (tarda 0.6s)
                
                document.body.classList.remove('loading');
                
                // Esperamos 600ms para borrarlo del HTML, así la animación se ve completa
                setTimeout(() => {
                    screen.remove();
                    // style.remove(); // Opcional, mejor dejar los estilos por si acaso
                }, 1000); // 600ms igual que tu transition en el CSS
            }
        });
})();