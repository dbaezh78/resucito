// resumen.js - SOLO ESTADÍSTICAS DE SALUD

export async function actualizarResumenOffline() {
    const container = document.getElementById('status-grid');
    if (!container) return;

    const nombreCacheActiva = (typeof CACHE_NAME !== 'undefined') ? CACHE_NAME : 'cantos-cache-v1';

    // --- DIAGNÓSTICO ---
    const rawData = localStorage.getItem('user_profile_data');
    let perfilValido = false;
    if (rawData) {
        try {
            const parsed = JSON.parse(rawData);
            if (parsed && (parsed.pais || parsed.parroquia)) perfilValido = true;
        } catch (e) { console.error("Error JSON Perfil"); }
    }

    const [statusSW, numArchivos, numCantos] = await Promise.all([
        verificarServiceWorker(),
        contarContenidoCache(nombreCacheActiva, ''),
        contarContenidoCache(nombreCacheActiva, 'src/css/pg/')
    ]);

    // RENDERIZADO CORREGIDO (Sin el </div> extra y sin llamar a controles)
    container.innerHTML = `
        ${crearItemResumen('Estado del Motor', statusSW ? 'En funcionamiento' : 'No instalado', statusSW)}
        ${crearItemResumen('Archivos del Sistema', numArchivos > 10 ? 'Núcleo Listo' : 'Descarga incompleta', numArchivos > 10)}
        ${crearItemResumen('Cantos Offline', `${numCantos} recursos guardados`, numCantos > 0)}
        ${crearItemResumen('Datos de Usuario', perfilValido ? 'Sincronizado' : 'Solo local', perfilValido)}
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