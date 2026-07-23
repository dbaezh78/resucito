// 1. DEFINIR primero las constantes
const APP_VERSION = '1.33'; 
const CACHE_NAME = `cantos-cache-v${APP_VERSION}`;
const OFFLINE_URL = 'src/offline.html';
const fecha_vers = '7/23/2026';

// 2. HACERLAS GLOBALES de forma segura
// Esto evita el error "window is not defined" en el Service Worker
if (typeof window !== 'undefined') {
    window.APP_VERSION = APP_VERSION;
    window.CACHE_NAME = CACHE_NAME;
} else if (typeof self !== 'undefined') {
    self.APP_VERSION = APP_VERSION;
    self.CACHE_NAME = CACHE_NAME;
}

// 3. Exportar para entornos que lo requieran
if (typeof module !== 'undefined') {
    module.exports = { APP_VERSION, CACHE_NAME };
}


const URLS_TO_CACHE = [

    // Páginas principales
    './',
    'index.html',
    'joven.html',
    'perfil.html',
    'index-ae.html',
    'salmos.html',
    'sworker.js',
    'index-joven.html', // Añadido

    // Area de Recursos SRC
    'src/ai.html',
    'src/ainterleccional.html',
    'src/catequesis.html',
    'src/index.html',
    'src/joven.html',
    'src/offline.html',
    'src/select.html',

    // Recurso / Categoria
    'src/cat/js/cat.js',
    'src/cat/src/cat.css',

    // Recurso / CSS / Estilos
    'src/css/ai.css',
    'src/css/ainterleccional.css',
    'src/css/aisearch.css',
    'src/css/catolico.css',
    'src/css/cgoogle.css',
    'src/css/cssgral.css',
    'src/css/index.css',
    'src/css/index-ae.css',
    'src/css/joven.css',
    'src/css/mensajekiko.css',
    'src/css/navigator.css',
    'src/css/perfil.css',
    'src/css/search.css',
    'src/css/select.css',
    'src/css/setting.css',
    'src/css/styles.css',

// Recurso / CSS / Estilos / Paginas (Los cantos individuales se cachean dinámicamente en el fetch o al pulsar "Usar Offline")
// Recurso de DATA
    'src/data/canto_data.js',
    'src/data/canto_data_aleluyai.js',
    'src/data/canto_data_catolicos.js',
    'src/data/canto_data_joven.js',
    'src/data/salmodia_data.js',
    'src/data/Contents.js',
    'src/data/find.js',
    'src/data/find.json',
    'src/data/indicecantos.json',
    'src/data/old-indicecantos.json',
    'src/data/paises.json',
    'src/data/salmodia_data.js',

// Recurso de Fuentes FONT
    'src/font/Fave-ScriptBoldPro.ttf',
    'src/font/Fave-ScriptBoldPro.woff',
    'src/font/Fave-ScriptBoldPro.woff2',
    'src/font/font.woff2',
    'src/font/FranklinGothicMedium.ttf',
    'src/font/LibreFranklin-Bold.ttf',
    'src/font/Neocat-Regular_3.0.ttf',
    'src/font/material-symbols.woff2',
    'src/font/FRABK.TTF',
    'src/font/FRABKIT.TTF',

// Recurso de HTML
    'src/html/atlmos.html',
    'src/html/intro.html',
    'src/html/leccionarioc.html',
    'src/html/pantalla.html',

// Recurso de IMAGENES
    'src/ima/1cejilla.png',
    'src/ima/1cintablanca.png',
    'src/ima/2cejilla.png',
    'src/ima/bis.png',
    'src/ima/ccejilla.png',
    'src/ima/cejilla.png',
    'src/ima/cejilla1.png',
    'src/ima/do_2.jpg',
    'src/ima/do.jpg',
    'src/ima/do7.jpg',
    'src/ima/do7_2.jpg',
    'src/ima/dom.jpg',
    'src/ima/dos.jpg',
    'src/ima/dos7.jpg',
    'src/ima/dosdim7.jpg',
    'src/ima/dosm.jpg',
    'src/ima/dot3.jpg',
    'src/ima/fa.jpg',
    'src/ima/fa7.jpg',
    'src/ima/fam.jpg',
    'src/ima/famaj7.jpg',
    'src/ima/famaj713.jpg',
    'src/ima/fas.jpg',
    'src/ima/fas5-9dim.jpg',
    'src/ima/fas7.jpg',
    'src/ima/fasm.jpg',
    'src/ima/file.txt',
    'src/ima/icon-192x192.png',
    'src/ima/ima.txt',
    'src/ima/la.jpg',
    'src/ima/la_2.jpg',
    'src/ima/la3.jpg',
    'src/ima/la6.jpg',
    'src/ima/la7.jpg',
    'src/ima/lab.jpg',
    'src/ima/lam.jpg',
    'src/ima/lam6.jpg',
    'src/ima/lam7.jpg',
    'src/ima/mi.jpg',
    'src/ima/mi6.jpg',
    'src/ima/mi7.jpg',
    'src/ima/mi7_1.jpg',
    'src/ima/mim.jpg',
    'src/ima/mim6.jpg',
    'src/ima/mimaj7.jpg',
    'src/ima/prontuario.png',
    'src/ima/re.jpg',
    'src/ima/re7.jpg',
    'src/ima/rem.jpg',
    'src/ima/rem9.jpg',
    'src/ima/remadd9.jpg',
    'src/ima/res.jpg',
    'src/ima/res1.jpg',
    'src/ima/resm.jpg',
    'src/ima/si.jpg',
    'src/ima/si7.jpg',
    'src/ima/si7_2.jpg',
    'src/ima/sib.jpg',
    'src/ima/sib7.jpg',
    'src/ima/sibm.jpg',
    'src/ima/sila-violin.png',
    'src/ima/silasi-violin.png',
    'src/ima/sim.jpg',
    'src/ima/sisolla-violin.png',
    'src/ima/so7_t2.jpg',
    'src/ima/sol.jpg',
    'src/ima/sol_2.jpg',
    'src/ima/sol3.jpg',
    'src/ima/sol7.jpg',
    'src/ima/sol7_1.jpg',
    'src/ima/solfas-violin.png',
    'src/ima/solfasolfa-violin.png',
    'src/ima/solm.jpg',
    'src/ima/solm6.jpg',
    'src/ima/sols.jpg',
    'src/ima/sols7.jpg',
    'src/ima/solsdim7.jpg',
    'src/ima/solsm.jpg',
    'src/ima/sos.jpg',
    'src/ima/sos_t1.jpg',
    'src/ima/salmodia1.jpg',
    'src/ima/salmodia2.jpg',
    'src/ima/salmodia3.jpg',
    'src/ima/salmodia4.jpg',
    'src/ima/salmodia5.jpg',
    'src/ima/salmodia6.jpg',
    'src/ima/salmodia7.jpg',
    'src/ima/salmodia8.jpg',
    'src/ima/salmodia9.jpg',
    'src/ima/salmodia10.jpg',
    'src/ima/salmodia11.jpg',
    'src/ima/salmodia12.jpg',
    'src/ima/salmodia13.jpg',
    'src/ima/salmodia14.jpg',
    'src/ima/salmodia15.jpg',
    'src/ima/salmodia16.jpg',
    'src/ima/salmodia17.jpg',

// Recurso de IMAGENES
    'src/img/96fc69c34770a02ef6f6010fe1af98ed.jpg',
    'src/img/carmen_hernandez.jpg',
    'src/img/cristo.jpg',
    'src/img/cristo.png',
    'src/img/cristo2.jpg',
    'src/img/cristo3.png',
    'src/img/Cristo_1.jpg',
    'src/img/Cristo_1.png',
    'src/img/ico.ico',
    'src/img/icono-128.png',
    'src/img/icono-16.png',
    'src/img/icono-180.png',
    'src/img/icono-192.png',
    'src/img/icono-256.png',
    'src/img/icono-32.png',
    'src/img/icono-48.png',
    'src/img/icono-512-.png',
    'src/img/icono-512-ORIGEN.png',
    'src/img/icono-512.png',
    'src/img/icono-64.png',
    'src/img/icono.png',
    'src/img/kiko_arguello.jpg',
    'src/img/logo_cantos.png',
    'src/img/maria_ascension.jpg',
    'src/img/mariopezzi.jpg',
    'src/img/Untitled.png',
    'src/img/yoteamo1.png',
    'src/img/yoteamo2.png',
    'src/img/yoteamo3.png',
    'src/img/yoteamo4.png',
    'src/img/yoteamo5.png',

// Recurso de JavaScripts
    'src/js/ai.js',
    'src/js/app.js',
    'src/js/catequesis.js',
    'src/js/config.js',
    'src/js/dbMainJS.js',
    'src/js/firebase rule.json',
    'src/js/firebase-auth.js',
    'src/js/index.js',
    'src/js/index-ae.js', // Añadido
    'src/js/main-ae.js',  // Añadido
    'src/js/jsgral.js',
    'src/js/jsgral_ainterleccional.js',
    'src/js/songs-data_salmos.js',
    'src/js/jsgral_joven.js',
    'src/js/loader.js',
    'src/js/logout.js',
    'src/js/manifest.json',
    'src/js/mensajekiko.js',
    'src/js/moduleGoogle.js',
    'src/js/navigator.js',
    'src/js/perfil.js',
    'src/js/resumen.js',
    'src/js/select.js',
    'src/js/serviceWorker.js',
    'src/js/setting-firebase.js',
    'src/js/setting.js',
    'src/js/showAcorde.js',
    'src/js/songs-data.js',
    'src/js/songs-data_joven.js',
    'src/js/tiempos.js',

// RECURSOS OTROS
    'src/src/css/ainterleccional.css',
    ];

 // 4. Exportación para sworker.js y otros scripts
if (typeof module !== 'undefined') {
    module.exports = { APP_VERSION, CACHE_NAME, URLS_TO_CACHE };
} else {
    // Para el Service Worker, exportamos las variables al scope global
    self.APP_VERSION = APP_VERSION;
    self.CACHE_NAME = CACHE_NAME;
    self.URLS_TO_CACHE = URLS_TO_CACHE;
}