// 1. Importación de la configuración única
// Asegúrate de que esta ruta sea correcta según la ubicación de sworker.js
importScripts('src/js/config.js');

console.log(`[SW] Cargado. Versión: ${APP_VERSION}`);

// 2. INSTALACIÓN
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log(`[SW] Cacheando archivos versión ${APP_VERSION}...`);
            return Promise.allSettled(
                URLS_TO_CACHE.map(url => {
                    return cache.add(url).catch(err => console.warn(`[SW] Error en: ${url}`));
                })
            );
        })
    );
    self.skipWaiting();
});

// 3. ACTIVACIÓN
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log(`[SW] Limpiando caché antigua: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// 4. FETCH
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((response) => {
            if (response) return response;

            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match(OFFLINE_URL);
                }
            });
        })
    );
});