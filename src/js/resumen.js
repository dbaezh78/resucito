// Resumen - SOLO ESTADÍSTICAS DE SALUD

export async function actualizarResumenOffline() {
    const container = document.getElementById('status-grid');
    if (!container) return;

    // Leemos la versión del config.js
    const appVersion = window.APP_VERSION;
    const nombreCacheActiva = window.CACHE_NAME || `cantos-cache-v${appVersion}`;

    // 1. Diagnóstico de Datos y Red
    const [statusSW, numArchivos, numCantos] = await Promise.all([
        verificarServiceWorker(),
        contarContenidoCache(nombreCacheActiva, ''),
        contarContenidoCache(nombreCacheActiva, 'src/css/pg/')
    ]);

    // 2. Lógica Inteligente de Sincronización
    let textoSincro = "Sin datos";
    let isOkSincro = false;

    if (navigator.onLine) {
        textoSincro = "Sincronización Nube";
        isOkSincro = true;
    } else {
        const tieneDatos = Object.keys(localStorage).some(k => k.startsWith('data-') || k.startsWith('valoracion_'));
        if (tieneDatos) {
            textoSincro = "Sincronización Local";
            isOkSincro = true; // Sigue siendo verde porque los datos están seguros
        } else {
            textoSincro = "Sin conexión";
            isOkSincro = false;
        }
    }

    // 3. RENDERIZADO ÚNICO (Más eficiente)
    container.innerHTML = `
        ${crearItemResumen('Estado del Motor', statusSW ? 'En funcionamiento' : 'No instalado', statusSW)}
        
        ${crearItemResumen('Datos de Usuario', textoSincro, isOkSincro)} 
        
        ${crearItemResumen('Archivos del Sistema', numArchivos > 10 ? 'Núcleo Listo' : 'Descarga incompleta', numArchivos > 10)}
        
        ${crearItemResumen('Cantos Offline', numCantos > 0 ? `${numCantos} recursos guardados` : 'Sin cantos guardados', numCantos > 0)}

        ${crearItemResumen('Versión de la App', `Versión actual: v${appVersion}`, true, 'verified_user')}
    `;


}

// Funciones auxiliares necesarias para que no dé error
async function verificarServiceWorker() {
    if (!navigator.serviceWorker) return false;
    try {
        const reg = await navigator.serviceWorker.getRegistration();
        return !!(reg && reg.active);
    } catch (e) { return false; }
}

async function contarContenidoCache(nombre, filtro) {
    if (!('caches' in window)) return 0;
    try {
        const cache = await caches.open(nombre);
        const keys = await cache.keys();
        return filtro ? keys.filter(k => k.url.includes(filtro)).length : keys.length;
    } catch (e) { return 0; }
}

function crearItemResumen(titulo, estado, isOk) {
    const color = isOk ? '#34A853' : '#EA4335';
    const icono = isOk ? 'check_circle' : 'error';
    return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #fff; border-radius: 12px; border-left: 5px solid ${color}; box-shadow: 0 2px 8px rgba(0,0,0,0.06); margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <span class="material-symbols-outlined" style="color: ${color}; font-size: 22px;">${icono}</span>
                <div style="display: flex; flex-direction: column;">
                    <span style="font-weight: 700; font-size: 0.9em; color: #333;">${titulo}</span>
                    <span style="font-size: 0.8em; color: #777;">${estado}</span>
                </div>
            </div>
            ${isOk ? '' : '<span style="font-size: 0.7em; background: #fee2e2; color: #ef4444; padding: 2px 6px; border-radius: 4px; font-weight: bold;">REVISAR</span>'}
        </div>
    `;
}

// Inicialización
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', actualizarResumenOffline);
} else {
    actualizarResumenOffline();
}


// Escuchas automáticas para cambiar el texto sin recargar la página
window.addEventListener('online', actualizarResumenOffline);
window.addEventListener('offline', actualizarResumenOffline);