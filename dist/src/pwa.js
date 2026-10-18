/**
 * Registro del Service Worker para soporte sin conexión (PWA).
 * Las actualizaciones se verifican ligeramente mediante version.json y solo se instalan
 * cuando el usuario lo solicita desde la notificación o el menú.
 */

export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('Service Worker registrado con éxito. Scope:', registration.scope);
                })
                .catch(error => {
                    console.error('Error al registrar el Service Worker:', error);
                });
        });

        // Solo recargar automáticamente si el usuario inició la actualización explícitamente
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing && window._userTriggeredAppUpdate) {
                refreshing = true;
                window.location.reload();
            }
        });
    } else {
        console.warn('Tu navegador no soporta Service Workers. El modo offline no estará disponible.');
    }
}
