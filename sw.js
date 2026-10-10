const CACHE_NAME = 'resucito-cache-v374'; // v2.1.38 Ciclo en subtítulo (Ciclo en negro y letra en rojo)
const SONGS_CACHE_NAME = 'resucito-cantos-cache'; // Caché permanente y separada para no re-descargar cantos

const STATIC_ASSETS = [
  './',
  'index.html',
  'perfil.html',
  'preparar.html',
  'parroquia.html',
  'datosparroquia.html',
  'expancion.html',
  'cliturgico.html',
  'bitacora.html',
  'mantcantos.html',
  'respaldo.html',
  'seucaristico.html',
  'privacidad.html',
  'chat.html',
  'firebase.html',
  'img/christ.png',
  'img/Cristo_1.png',
  'src/navegador.css',
  'src/navegador.js',
  'src/css/chat.css',
  'src/js/chat.js',
  'src/css/parroquia.css',
  'src/js/parroquia.js',
  'src/css/datosparroquia.css',
  'src/js/datosparroquia.js',
  'src/css/seucaristico.css',
  'src/js/perfil.js',
  'src/lib/jszip.min.js',
  'src/bitacora.css',
  'src/js/bitacora.js',
  'src/bitacoraLogger.js',
  'src/main.js',
  'src/style.css',
  'src/search.js',
  'src/chords.js',
  'src/pwa.js',
  'src/auth.js',
  'src/firebase.js',
  'src/sync.js',
  'data/songs-index.json',
  'data/chord_positions.json',
  'data/catequesis.json',
  'data/paises.json',
  'data/parroquias.json',
  'data/plantilla_parroquias.csv',
  'data/ajustes_modal.html'
];

// Instalar SW y cachear recursos iniciales de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Pre-cacheando recursos estáticos de app');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activar SW y limpiar cachés antiguas (PRESERVANDO siempre la caché de cantos)
self.addEventListener('activate', event => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      const songsCache = await caches.open(SONGS_CACHE_NAME);

      for (const cache of cacheNames) {
        // Nunca eliminar la caché actual ni la caché de cantos
        if (cache !== CACHE_NAME && cache !== SONGS_CACHE_NAME) {
          // Migrar/rescatar cualquier canto o salmo de la caché antigua antes de eliminarla
          try {
            const oldCache = await caches.open(cache);
            const oldRequests = await oldCache.keys();
            for (const req of oldRequests) {
              const reqUrl = new URL(req.url);
              const isSong = 
                reqUrl.pathname.includes('/data/songs/') || 
                reqUrl.pathname.includes('/data/songs-ae/') || 
                reqUrl.pathname.includes('/data/seucaristia/');
              if (isSong) {
                const response = await oldCache.match(req);
                if (response) {
                  await songsCache.put(req, response);
                }
              }
            }
          } catch (migErr) {
            console.warn('[Service Worker] Error al migrar cantos de caché antigua:', migErr);
          }

          console.log('[Service Worker] Eliminando caché obsoleta de aplicación:', cache);
          await caches.delete(cache);
        }
      }
      await self.clients.claim();
    })()
  );
});

// Mensaje para forzar skipWaiting desde el cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Interceptar peticiones
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Evitar interceptar llamadas de APIs externas o de Firebase Auth
  if (url.origin !== self.location.origin) {
    return;
  }

  // 1. RECURSOS DE CANTOS Y SALMOS (+1400 archivos en data/songs, data/songs-ae, data/seucaristia)
  const isSongResource = 
    url.pathname.includes('/data/songs/') || 
    url.pathname.includes('/data/songs-ae/') || 
    url.pathname.includes('/data/seucaristia/');

  if (isSongResource) {
    // ESTRATEGIA: Cache-First con almacenamiento persistente en SONGS_CACHE_NAME
    event.respondWith(
      (async () => {
        const songsCache = await caches.open(SONGS_CACHE_NAME);

        // Buscar coincidencia exacta o normalizada
        let cachedResponse = await songsCache.match(event.request);
        if (!cachedResponse) {
          const cleanUrl = url.origin + url.pathname;
          cachedResponse = await songsCache.match(cleanUrl);
        }
        if (!cachedResponse && !url.search.includes('offline=true')) {
          cachedResponse = await songsCache.match(`${url.origin}${url.pathname}?offline=true`);
        }

        // Si ya está en la caché de cantos, servirlo inmediatamente
        if (cachedResponse) {
          // Si hay conexión a internet y no se fuerza sólo offline, refrescar en background de forma silenciosa
          if (navigator.onLine) {
            fetch(event.request).then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                songsCache.put(event.request, networkResponse);
              }
            }).catch(() => {});
          }
          return cachedResponse;
        }

        // Si no está en la caché de cantos, ir a la red y guardarlo AUTOMÁTICAMENTE para siempre
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            songsCache.put(event.request, responseToCache);
          }
          return networkResponse;
        } catch (netErr) {
          // Si falló la red, intentar buscar en caché de aplicación por compatibilidad
          const fallback = await caches.match(event.request);
          if (fallback) return fallback;
          throw netErr;
        }
      })()
    );
    return;
  }

  // 2. RECURSOS DE CÓDIGO E INTERFAZ (HTML, JS, CSS)
  const isCodeResource = 
    url.pathname === '/' || 
    url.pathname.endsWith('index.html') || 
    url.pathname.includes('.js') || 
    url.pathname.includes('.css');

  if (isCodeResource) {
    // ESTRATEGIA: Network-First (Intentar red primero, si falla usar caché)
    // Esto asegura que las actualizaciones se vean al instante sin perder el modo sin conexión
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Si no hay red, servir desde caché
          return caches.match(event.request);
        })
    );
    return;
  }

  // 3. RECURSOS ESTÁTICOS GENERALES (Imágenes, iconos, JSON de configuración)
  // ESTRATEGIA: Cache-First con Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Devolver el recurso en caché e intentar actualizarlo en background
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(err => console.log('[Service Worker] Error al actualizar en background:', err));
        return cachedResponse;
      }

      // Si no está en caché, ir a la red
      return fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(error => {
        console.error('[Service Worker] Error de red:', error);
      });
    })
  );
});
