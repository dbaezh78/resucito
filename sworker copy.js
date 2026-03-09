// 1. Importas la configuración centralizada
importScripts('/src/js/config.js');

// 2. Ahora CACHE_NAME ya existe aquí automáticamente
console.log('Service Worker cargado con:', CACHE_NAME);

self.addEventListener('install', (event) => {
    // ... resto de tu lógica de instalación usando CACHE_NAME
});

// Define la URL de la página offline.
const OFFLINE_URL = 'src/offline.html';



// 2. EVENTO INSTALL (Faltaba en tu código)
// Este evento es el que descarga los archivos y los guarda en el móvil
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Iniciando descarga masiva...');
            // Descargamos uno por uno para no saturar la conexión
            return urlsToCache.reduce((promise, url) => {
                return promise.then(() => {
                    return cache.add(url).catch(err => console.warn(`Omitido: ${url}`));
                });
            }, Promise.resolve());
        })
    );
    self.skipWaiting();
});


// 3. EVENTO FETCH - Estrategia optimizada para uso Offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Agregamos { ignoreSearch: true } para que index.html?canto=xxx 
        // funcione con el index.html guardado en caché
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            
            // Si el recurso está en el caché, lo servimos de inmediato (Cache First)
            if (cachedResponse) {
                return cachedResponse;
            }

            // Si no está en caché, intentamos ir a la red
            return fetch(event.request).then((networkResponse) => {
                // Solo guardamos en caché dinámico si es una respuesta válida y de nuestro origen
                if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Si falla la red y el usuario está navegando a una página, mostrar offline.html
                if (event.request.mode === 'navigate') {
                    return caches.match(OFFLINE_URL);
                }
            });
        })
    );
});

// 4. EVENTO ACTIVATE
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activando y limpiando caché vieja...');
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});