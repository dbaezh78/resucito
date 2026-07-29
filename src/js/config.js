// 1. DEFINIR primero las constantes
const APP_VERSION = '1.36'; 
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
// =====================================================
// --- SISTEMA DE TRADUCCIÓN INTERNACIONAL (i18n) ---
// =====================================================
if (typeof window !== 'undefined') {
    window.obtenerIdiomaActual = function() {
        return localStorage.getItem('pref-lang') || 'Español';
    };

    window.I18N_DICT = {
        "Etapas del Camino": {
            "English": "Stages of the Way",
            "Italiano": "Tappe del Cammino",
            "Português": "Etapas do Caminho",
            "Français": "Étapes du Chemin",
            "Latin": "Gradus Viae",
            "Ruso": "Этапы Пути",
            "Chino": "路的阶段"
        },
        "Filtros de los Cantos": {
            "English": "Song Filters",
            "Italiano": "Filtri dei Canti",
            "Português": "Filtros dos Cânticos",
            "Français": "Filtres des Chants",
            "Latin": "Filtra Cantuum",
            "Ruso": "Фильтры Песен",
            "Chino": "歌的筛选"
        },
        "Buscar cantos...": {
            "English": "Search songs...",
            "Italiano": "Cerca canti...",
            "Português": "Buscar cânticos...",
            "Français": "Rechercher des chants...",
            "Latin": "Quaerere cantus...",
            "Ruso": "Поиск песен...",
            "Chino": "搜索歌..."
        },
        "Mis Listados": {
            "English": "My Lists",
            "Italiano": "I miei elenchi",
            "Português": "Minhas Listas",
            "Français": "Mes Listes",
            "Latin": "Indices Mei",
            "Ruso": "Мои Списки",
            "Chino": "我的歌单"
        },
        "Gestión de Cantos": {
            "English": "Song Management",
            "Italiano": "Gestione dei Canti",
            "Português": "Gestão de Cânticos",
            "Français": "Gestion des Chants",
            "Latin": "Administratio Cantuum",
            "Ruso": "Управление Песнями",
            "Chino": "歌目管理"
        },
        "Configuración": {
            "English": "Settings",
            "Italiano": "Impostazioni",
            "Português": "Configurações",
            "Français": "Paramètres",
            "Latin": "Configurationes",
            "Ruso": "Настройки",
            "Chino": "设置"
        },
        "Estado del Sistema": {
            "English": "System Status",
            "Italiano": "Stato del Sistema",
            "Português": "Estado do Sistema",
            "Français": "État du Système",
            "Latin": "Status Systematis",
            "Ruso": "Состояние Системы",
            "Chino": "系统状态"
        },
        "Sincronizar Nube": {
            "English": "Sync Cloud",
            "Italiano": "Sincronizza Nuvola",
            "Português": "Sincronizar Nuvem",
            "Français": "Synchro Nuage",
            "Latin": "Sincronizare Nubes",
            "Ruso": "Синхронизация Облака",
            "Chino": "同步云端"
        },
        "Usar Offline": {
            "English": "Use Offline",
            "Italiano": "Usa Offline",
            "Português": "Usar Offline",
            "Français": "Utiliser Offline",
            "Latin": "Utere Sine Interrete",
            "Ruso": "Использовать Офлайн",
            "Chino": "离线使用"
        },
        "Libro en PDF": {
            "English": "Book in PDF",
            "Italiano": "Libro in PDF",
            "Português": "Livro em PDF",
            "Français": "Livre en PDF",
            "Latin": "Liber PDF",
            "Ruso": "Книга в PDF",
            "Chino": "PDF书籍"
        },
        "Medir pantalla": {
            "English": "Measure screen",
            "Italiano": "Misura schermo",
            "Português": "Medir tela",
            "Français": "Mesurer l'écran",
            "Latin": "Metiri Sceletum",
            "Ruso": "Измерить экран",
            "Chino": "测量屏幕"
        },
        "Ir Arriba ↑": {
            "English": "Go Up ↑",
            "Italiano": "Vai Su ↑",
            "Português": "Ir para Cima ↑",
            "Français": "Aller en Haut ↑",
            "Latin": "Ad Summum ↑",
            "Ruso": "Наверх ↑",
            "Chino": "回到顶部 ↑"
        },
        "Guía replicada de los cantos del Camino Neocatecumental.": {
            "English": "Replicated guide of the songs of the Neocatechumenal Way.",
            "Italiano": "Guida replicata dei canti del Cammino Neocatecumentale.",
            "Português": "Guia replicada dos cânticos do Caminho Neocatecumenal.",
            "Français": "Guide répliqué des chants du Chemin Néocatéchuménal.",
            "Latin": "Dux replicatus cantuum Viae Neocatechumenalis.",
            "Ruso": "Реплицированное руководство по песням Неокатехуменального Пути.",
            "Chino": "新慕道之路歌集复制指南。"
        },
        "Creada por un siervo inútil de Yahveh": {
            "English": "Created by a useless servant of Yahveh",
            "Italiano": "Creata da un servo inutile di Yahveh",
            "Português": "Criada por um servo inútil de Yahveh",
            "Français": "Créée par un serviteur inutile de Yahveh",
            "Latin": "Creata a servo inutili Yahveh",
            "Ruso": "Создано бесполезным рабом Яхве",
            "Chino": "由雅威的一个无用的仆人创建"
        },
        "General": {
            "English": "General",
            "Italiano": "Generale",
            "Português": "Geral",
            "Français": "Général",
            "Latin": "Generale",
            "Ruso": "Общие",
            "Chino": "常规"
        },
        "Idioma": {
            "English": "Language",
            "Italiano": "Lingua",
            "Português": "Idioma",
            "Français": "Langue",
            "Latin": "Lingua",
            "Ruso": "Язык",
            "Chino": "语言"
        },
        "Mantener pantalla encendida": {
            "English": "Keep screen on",
            "Italiano": "Mantieni schermo acceso",
            "Português": "Manter tela acesa",
            "Français": "Garder l'écran allumé",
            "Latin": "Servare Sceletum Accensum",
            "Ruso": "Держать экран включенным",
            "Chino": "保持屏幕常亮"
        },
        "Auto-Ocultar Barra de navegación (30s)": {
            "English": "Auto-Hide Navigation Bar (30s)",
            "Italiano": "Auto-Nascondi Barra di navigazione (30s)",
            "Português": "Auto-Ocultar Barra de navegação (30s)",
            "Français": "Masquage Auto de la Barre de navigation (30s)",
            "Latin": "Celare Auto Barram Navigationis (30s)",
            "Ruso": "Автоскрытие панели навигации (30s)",
            "Chino": "自动隐藏导航栏 (30秒)"
        },
        "Limpiar Caché y Datos": {
            "English": "Clear Cache and Data",
            "Italiano": "Cancella Cache e Dati",
            "Português": "Limpar Cache e Dados",
            "Français": "Effacer le Cache et les Données",
            "Latin": "Purgare Cache et Data",
            "Ruso": "Очистить кэш и данные",
            "Chino": "清除缓存和数据"
        },
        "Limpiar Ajustes": {
            "English": "Clear Settings",
            "Italiano": "Cancella Impostazioni",
            "Português": "Limpar Configurações",
            "Français": "Effacer les Paramètres",
            "Latin": "Purgare Configurationes",
            "Ruso": "Очистить настройки",
            "Chino": "清除设置"
        },
        "Modo Oscuro": {
            "English": "Dark Mode",
            "Italiano": "Modalità Scura",
            "Português": "Modo Escuro",
            "Français": "Mode Sombre",
            "Latin": "Modus Obscurus",
            "Ruso": "Темный режим",
            "Chino": "暗黑模式"
        },
        "Perfil": {
            "English": "Profile",
            "Italiano": "Profilo",
            "Português": "Perfil",
            "Français": "Profil",
            "Latin": "Perfil",
            "Ruso": "Профиль",
            "Chino": "个人资料"
        },
        "Datos de Perfil": {
            "English": "Profile Data",
            "Italiano": "Dati del Profilo",
            "Português": "Dados del Perfil",
            "Français": "Données du Profil",
            "Latin": "Data Perfil",
            "Ruso": "Данные профиля",
            "Chino": "资料数据"
        },
        "Guardar Cambios": {
            "English": "Save Changes",
            "Italiano": "Salva modifiche",
            "Português": "Salvar Alterações",
            "Français": "Enregistrer les modifications",
            "Latin": "Servare Mutationes",
            "Ruso": "Сохранить изменения",
            "Chino": "保存修改"
        },
        "País": {
            "English": "Country",
            "Italiano": "Paese",
            "Português": "País",
            "Français": "Pays",
            "Latin": "Patria",
            "Ruso": "Страна",
            "Chino": "国家"
        },
        "Parroquia": {
            "English": "Parish",
            "Italiano": "Parrocchia",
            "Português": "Paróquia",
            "Français": "Paroisse",
            "Latin": "Parochia",
            "Ruso": "Приход",
            "Chino": "堂区"
        },
        "Comunidad": {
            "English": "Community",
            "Italiano": "Comunità",
            "Português": "Comunidade",
            "Français": "Communauté",
            "Latin": "Communitas",
            "Ruso": "Община",
            "Chino": "团体"
        },
        "Etapa en el Camino": {
            "English": "Stage in the Way",
            "Italiano": "Tappa del Cammino",
            "Português": "Etapa no Caminho",
            "Français": "Étape du Chemin",
            "Latin": "Gradus in Via",
            "Ruso": "Этап в Пути",
            "Chino": "路中阶段"
        },
        "La paz de Cristo": {
            "English": "The peace of Christ",
            "Italiano": "La pace di Cristo",
            "Português": "A paz de Cristo",
            "Français": "La paix de Christ",
            "Latin": "Pax Christi",
            "Ruso": "Мир Христов",
            "Chino": "基督 de 平安"
        },
        "Agregar Lista": {
            "English": "Add List",
            "Italiano": "Aggiungi elenco",
            "Português": "Adicionar Lista",
            "Français": "Ajouter une Liste",
            "Latin": "Addere Indicem",
            "Ruso": "Добавить список",
            "Chino": "添加歌单"
        },
        "Buscar canto para agregar...": {
            "English": "Search song to add...",
            "Italiano": "Cerca canto da aggiungere...",
            "Português": "Buscar cântico para adicionar...",
            "Français": "Rechercher un chant à ajouter...",
            "Latin": "Quaerere cantum addendo...",
            "Ruso": "Поиск песни для добавления...",
            "Chino": "搜索以添加歌..."
        },
        "Precatecumenado": {
            "English": "Pre-catechumenate",
            "Italiano": "Pre-catechumenato",
            "Português": "Pré-catecumenato",
            "Français": "Pré-catéchuménat",
            "Latin": "Pre-catechumenatus",
            "Ruso": "Прекатехуменат",
            "Chino": "初级慕道班"
        },
        "Catecumenado": {
            "English": "Catechumenate",
            "Italiano": "Catechumenato",
            "Português": "Catecumenato",
            "Français": "Catéchuménat",
            "Latin": "Catechumenatus",
            "Ruso": "Катехуменат",
            "Chino": "慕道班"
        },
        "Elección": {
            "English": "Election",
            "Italiano": "Elezione",
            "Português": "Eleição",
            "Français": "Élection",
            "Latin": "Electio",
            "Ruso": "Избрание",
            "Chino": "拣选"
        },
        "Eleccion": {
            "English": "Election",
            "Italiano": "Elezione",
            "Português": "Eleição",
            "Français": "Élection",
            "Latin": "Electio",
            "Ruso": "Избрание",
            "Chino": "拣选"
        },
        "Liturgia": {
            "English": "Liturgy",
            "Italiano": "Liturgia",
            "Português": "Liturgia",
            "Français": "Liturgie",
            "Latin": "Liturgia",
            "Ruso": "Литургия",
            "Chino": "礼仪"
        },
        "Otros Cantos Católicos": {
            "English": "Other Catholic Songs",
            "Italiano": "Altri Canti Cattolici",
            "Português": "Outros Cânticos Católicos",
            "Français": "Autres Chants Catholiques",
            "Latin": "Alii Cantus Catholici",
            "Ruso": "Другие Католические Песни",
            "Chino": "其他天主教圣歌"
        },
        "Indice de Cantos": {
            "English": "Song Index",
            "Italiano": "Indice dei Canti",
            "Português": "Índice dos Cânticos",
            "Français": "Index des Chants",
            "Latin": "Index Cantuum",
            "Ruso": "Указатель песен",
            "Chino": "歌目索引"
        },
        "Vírgen María": {
            "English": "Virgin Mary",
            "Italiano": "Vergine Maria",
            "Português": "Virgem Maria",
            "Français": "Vierge Marie",
            "Latin": "Virgo Maria",
            "Ruso": "Дева Мария",
            "Chino": "圣母玛利亚"
        },
        "Entrada": {
            "English": "Entrance",
            "Italiano": "Ingresso",
            "Português": "Entrada",
            "Français": "Entrée",
            "Latin": "Ad Introitum",
            "Ruso": "Входное",
            "Chino": "进堂"
        },
        "Comunión": {
            "English": "Communion",
            "Italiano": "Comunione",
            "Português": "Comunhão",
            "Français": "Communion",
            "Latin": "Ad Communionem",
            "Ruso": "Причастие",
            "Chino": "领主"
        },
        "Celebración": {
            "English": "Celebration",
            "Italiano": "Celebrazione",
            "Português": "Celebração",
            "Français": "Célébration",
            "Latin": "Ad Celebrationem",
            "Ruso": "Празднование",
            "Chino": "礼仪庆典"
        },
        "Final": {
            "English": "Recessional",
            "Italiano": "Congedo",
            "Português": "Final",
            "Français": "Envoi",
            "Latin": "Ad Finem",
            "Ruso": "Заключительное",
            "Chino": "礼成"
        },
        "Niños": {
            "English": "Children",
            "Italiano": "Bambini",
            "Português": "Crianças",
            "Français": "Enfants",
            "Latin": "Pueri",
            "Ruso": "Дети",
            "Chino": "儿童"
        },
        "Fracción del Pan": {
            "English": "Fraction of Bread",
            "Italiano": "Frazione del Pane",
            "Português": "Fração do Pão",
            "Français": "Fraction du Pain",
            "Latin": "Fractio Panis",
            "Ruso": "Преломление Хлеба",
            "Chino": "擘饼"
        },
        "Salmodias": {
            "English": "Psalms",
            "Italiano": "Salmodia",
            "Português": "Salmodias",
            "Français": "Psalmodies",
            "Latin": "Psalmodiae",
            "Ruso": "Псалмодия",
            "Chino": "圣咏"
        },
        "Adviento": {
            "English": "Advent",
            "Italiano": "Avvento",
            "Português": "Advento",
            "Français": "Avent",
            "Latin": "Adventus",
            "Ruso": "Адвент",
            "Chino": "将临期"
        },
        "Navidad": {
            "English": "Christmas",
            "Italiano": "Natale",
            "Português": "Natal",
            "Français": "Noël",
            "Latin": "Nativitas",
            "Ruso": "Рождество",
            "Chino": "圣诞期"
        },
        "Pascua": {
            "English": "Easter",
            "Italiano": "Pasqua",
            "Português": "Páscoa",
            "Français": "Pâques",
            "Latin": "Pascha",
            "Ruso": "Пасха",
            "Chino": "复活期"
        },
        "Pentecostés": {
            "English": "Pentecost",
            "Italiano": "Pentecoste",
            "Português": "Pentecostes",
            "Français": "Pentecôte",
            "Latin": "Pentecoste",
            "Ruso": "Пятидесятница",
            "Chino": "圣灵降临期"
        },
        "Aclamación": {
            "English": "Acclamation",
            "Italiano": "Acclamazione",
            "Português": "Aclamação",
            "Français": "Acclamation",
            "Latin": "Acclamatio",
            "Ruso": "Акламация",
            "Chino": "福音前欢呼"
        },
        "Penitencial": {
            "English": "Penitential",
            "Italiano": "Penitenziale",
            "Português": "Penitencial",
            "Français": "Pénitentiel",
            "Latin": "Poenitentialis",
            "Ruso": "Покаянное",
            "Chino": "忏悔礼"
        },
        "Nuevo Testamento": {
            "English": "New Testament",
            "Italiano": "Nuovo Testamento",
            "Português": "Novo Testamento",
            "Français": "Nouveau Testament",
            "Latin": "Novum Testamentum",
            "Ruso": "Новый Завет",
            "Chino": "新约"
        },
        "Antiguo Testamento": {
            "English": "Old Testament",
            "Italiano": "Antico Testamento",
            "Português": "Antigo Testamento",
            "Français": "Ancien Testament",
            "Latin": "Vetus Testamentum",
            "Ruso": "Ветхий Завет",
            "Chino": "旧约"
        },
        "Villancicos": {
            "English": "Christmas Carols",
            "Italiano": "Canti di Natale",
            "Português": "Villancicos",
            "Français": "Cantiques",
            "Latin": "Carolae",
            "Ruso": "Колядки",
            "Chino": "圣诞颂歌"
        }
    };

    window.t = function(key) {
        if (!key) return key;
        const lang = window.obtenerIdiomaActual();
        if (lang === 'Español') return key;
        const translation = window.I18N_DICT[key];
        if (translation && translation[lang]) {
            return translation[lang];
        }
        return key;
    };

    window.translateDOM = function(root = document.body) {
        const lang = window.obtenerIdiomaActual();
        if (lang === 'Español') return;

        // Recursively walk text nodes
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    const parent = node.parentNode;
                    if (parent && (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'TEXTAREA')) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let node;
        while (node = walker.nextNode()) {
            const text = node.nodeValue.trim();
            if (text) {
                const translated = window.t(text);
                if (translated !== text) {
                    node.nodeValue = node.nodeValue.replace(text, translated);
                }
            }
        }

        // Placeholders in inputs
        root.querySelectorAll('input[placeholder]').forEach(input => {
            const ph = input.getAttribute('placeholder');
            const translated = window.t(ph);
            if (translated !== ph) {
                input.setAttribute('placeholder', translated);
            }
        });
    };

    // Auto-translation on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => window.translateDOM());
    } else {
        setTimeout(() => window.translateDOM(), 50);
    }
}