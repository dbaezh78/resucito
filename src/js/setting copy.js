// ==========================================
// MODULO: DEFINICION DE PESTAÑAS Y OPCIONES
// ==========================================
window.tabsConfig = [
// ==========================================
// MODULO: TAB GENERAL
// ==========================================
    {
        id: 'tab-general',
        label: 'General',
        icon: 'settings',
        secciones: [


            { 
                id: 'global-set-lang',
                label: 'Idioma', 
                tipo: 'select', 
                storageKey: 'pref-lang',
                default: 'Español',
                options: ['Español', 'English', 'Italiano', 'Português', 'Français', 'Latin', 'Ruso', 'Chino'],
                accion: (val) => {
                    const langActual = localStorage.getItem('pref-lang') || 'Español';
                    if (val !== langActual) {
                        localStorage.setItem('pref-lang', val);
                        
                        // Mapeo de Subdominios para redirección
                        const mapaDominios = {
                            'Español': 'https://resucito.do',
                            'English': 'https://en.resucito.do',
                            'Italiano': 'https://it.resucito.do',
                            'Português': 'https://po.resucito.do',
                            'Français': 'https://fr.resucito.do',
                            'Latin': 'https://la.resucito.do',
                            'Ruso': 'https://ru.resucito.do',
                            'Chino': 'https://ch.resucito.do'
                        };

                        const urlParams = new URLSearchParams(window.location.search);
                        const cantoId = urlParams.get('canto');
                        
                        // Si el idioma no tiene subdominio asignado, vuelve al principal
                        let nuevaUrl = (mapaDominios[val] || mapaDominios['Español']) + '/';
                        if (cantoId) nuevaUrl += '?canto=' + cantoId;

                        window.location.href = nuevaUrl;
                    }
                }
            },


// ==========================================
// MANTENER PANTALLA ENCENDIDA
// ==========================================

            { 
                id: 'global-set-wakelock',
                label: 'Mantener pantalla encendida', 
                tipo: 'switch',
                storageKey: 'pref-wakelock',
                default: false,
                accion: async (val) => {
                    if (val) {
                        try {
                            window.wakeLock = await navigator.wakeLock.request('screen');
                            document.addEventListener('visibilitychange', window.reestablecerWakeLock);
                        } catch (err) { console.error("WakeLock Error:", err); }
                    } else {
                        if (window.wakeLock) window.wakeLock.release();
                        window.wakeLock = null;
                        document.removeEventListener('visibilitychange', window.reestablecerWakeLock);
                    }
                    localStorage.setItem('pref-wakelock', val);
                }
            },


// ==========================================
// BOTON DE ACTUALIZAR
// ==========================================

            { 
                id: 'btn-clear-cache',
                label: 'Limpiar Caché y Datos', 
                tipo: 'button',
                color: '#bc0009',
                accion: async () => {
                    if(confirm("⚠ Esto limpiará todo y reiniciará la sesión. ¿Continuar?")) {
                        localStorage.clear();

                        if ('caches' in window) {
                            const cacheNames = await caches.keys();
                            await Promise.all(cacheNames.map(name => caches.delete(name)));
                        }

                        if ('indexedDB' in window) {
                            const dbs = await indexedDB.databases();
                            dbs.forEach(db => { if (db.name) indexedDB.deleteDatabase(db.name); });
                        }

                        // ACTIVAMOS AMBAS ESTRATEGIAS
                        sessionStorage.setItem('pending_login', 'true');    // Intento automático
                        sessionStorage.setItem('force_login_prompt', 'true'); // Refuerzo visual manual

                        window.location.reload(true);
                    }
                }
            },


            { 
                id: 'btn-force-update',
                label: 'Actualizar Aplicación', 
                tipo: 'button',
                color: '#28a745', // Verde
                accion: () => {
                    window.location.reload(true); // Fuerza la descarga de archivos nuevos
                }
            }
        ]
    },







// ==========================================
// TAB O MODULO DE LOS CANTOS
// ==========================================
            {
                id: 'tab-canto',
                label: 'Canto',
                icon: 'music_note',
                secciones: [

// ******** FUNCION DE MANTENIMIENTO ********
                    { 
                        id: 'set-mant-canto',
                        label: 'Mostrar Ubicación', 
                        tipo: 'switch',
                        storageKey: 'pref-mant-active',
                        default: false,
                        accion: (val) => {
                            if (val === true || val === 'true') {
                                
                                // Intentamos obtener el correo de varias formas para no fallar
                                const userEmail = window.userEmailActivo || 
                                                (window.firebaseAPI && window.firebaseAPI.obtenerUsuarioActual()?.email);

                                const listaAutorizada = ["dbaezh78@gmail.com", "admin@resucito.do"];

                                // Si el correo coincide, activamos directo sin pedir clave
                                if (userEmail && listaAutorizada.includes(userEmail.toLowerCase())) {
                                    localStorage.setItem('pref-mant-active', 'true');
                                    if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                                    return; 
                                }

                                // Si no hay correo autorizado, entonces sí pedimos la clave
                                const pass = prompt("Acceso restringido. Introduce el código de editor:");
                                if (pass === "7777") {
                                    localStorage.setItem('pref-mant-active', 'true');
                                    if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                                } else {
                                    alert("No tienes permisos para editar.");
                                    localStorage.setItem('pref-mant-active', 'false');
                                    
                                    // Apagamos el switch visualmente
                                    const sw = document.querySelector('[data-id="set-mant-canto"] input');
                                    if (sw) sw.checked = false;
                                }
                            } else {
                                localStorage.setItem('pref-mant-active', 'false');
                                if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                            }
                        }
                    },
                    { 
                        id: 'set-vel-canto',
                        label: 'Velocidad Autoscroll', 
                        tipo: 'range',
                        min: 1, max: 10,
                        storageKey: 'pref-auto-scroll-vel',
                        default: 5,
                        accion: (val) => localStorage.setItem('pref-auto-scroll-vel', val)
                    },
                    { 
                        id: 'set-url-nota',
                        label: 'URL Nota de Canto', 
                        tipo: 'text',
                        placeholder: 'https://...',
                        storageKey: 'pref-url-pdf'
                    },
                    { 
                        id: 'set-audio-canto',
                        label: 'Reproductor de Audio', 
                        tipo: 'switch',
                        storageKey: 'pref-audio-visible',
                        default: true,
                        accion: (val) => {
                            const audioPlayer = document.getElementById('canto-audio-player');
                            if (audioPlayer) audioPlayer.style.display = val ? 'block' : 'none';
                        }
                    },
                    { 
                        id: 'set-cejilla-canto',
                        label: 'Cejilla Sugerida', 
                        tipo: 'text',
                        storageKey: 'pref-cejilla-user',
                        accion: (val) => {
                            const elSugerido = document.getElementById('traste-sugerido');
                            if (elSugerido) elSugerido.innerText = val;
                        }
                    },
                    { 
                        id: 'set-cat-principal',
                        label: 'Categoría Principal', 
                        tipo: 'select', 
                        options: ['Precat', 'Cat', 'Liturgia', 'Elección'],
                        storageKey: 'pref-cat-main'
                    }
                ]
            },

// ==========================================
// TAB O MODULO DE LOS CANTOS
// ==========================================


    {
        id: 'tab-tema',
        label: 'Tema',
        icon: 'palette',
        secciones: [

// MODO OSCURO - TEMA

            { 
                id: 'global-set-dark',
                label: 'Modo Oscuro', 
                tipo: 'switch',
                storageKey: 'pref-dark-mode',
                default: false,
                accion: (val) => {
                    document.body.classList.toggle('dark-theme', val);
                    localStorage.setItem('pref-dark-mode', val);
                }
            },

// MODO FUENTE - TEMA
            { 
                id: 'global-set-font',
                label: 'Fuente', 
                tipo: 'select', 
                storageKey: 'pref-font-size',
                default: '16px',
                options: [
                    { val: '16px', text: 'Normal' },
                    { val: '18px', text: 'Grande' },
                    { val: '20px', text: 'Muy Grande' }
                ],
                accion: (val) => {
                    document.documentElement.style.setProperty('--font-size-base', val);
                    localStorage.setItem('pref-font-size', val);
                }
            },

            { label: 'Cintillo / Cabecera', tipo: 'color' },
            { label: 'Texto Cabecera', tipo: 'color' },
            { label: 'Fondo del Canto', tipo: 'color' },
            { label: 'Título', tipo: 'color' },
            { label: 'Subtítulo', tipo: 'color' },
            { label: 'Texto del Canto', tipo: 'color' },
            { label: 'Acorde', tipo: 'color' },
            { label: 'Categoría Pie', tipo: 'color' },
            { label: 'Número Canto', tipo: 'color' }
        ]
    },
    {
        id: 'tab-perfil',
        label: 'Perfil',
        icon: 'person',
        secciones: [
            { label: 'Sincronizar nube', tipo: 'switch' },
            { label: 'Descarga automática', tipo: 'switch' },
            { label: 'Sincronización Automática', tipo: 'switch' },
            { label: 'Mostrar datos perfil', tipo: 'switch' },
            { label: 'Gestión de Cantos', tipo: 'switch' },
            { label: 'Configuración', tipo: 'switch' }
        ]
    }
];

// ==========================================
// MODULO: MOTOR DE GENERACION DE HTML
// ==========================================
window.generarContenidoSettings = function() {
    const tabsHeader = `
        <div class="settings-tabs-bar">
            ${tabsConfig.map((tab, index) => `
                <button class="tab-btn ${index === 0 ? 'active' : ''}" onclick="window.cambiarTab('${tab.id}')">
                    <span class="material-symbols-outlined">${tab.icon}</span>
                    <span>${tab.label}</span>
                </button>
            `).join('')}
        </div>
    `;

    const tabsContent = tabsConfig.map((tab, index) => `
        <div id="${tab.id}" class="tab-panel ${index === 0 ? 'active' : ''}">
            ${tab.secciones.map(opt => {
                const valorGuardado = opt.storageKey ? localStorage.getItem(opt.storageKey) : null;
                const isChecked = opt.tipo === 'switch' ? (valorGuardado === 'true' || (valorGuardado === null && opt.default === true)) : false;
                const valActual = valorGuardado || opt.default;

                return `
                <div class="setting-row">
                    <label>${opt.label}</label>
                    <div class="setting-control">${renderControl(opt, isChecked, valActual)}</div>
                </div>`;
            }).join('')}
        </div>
    `).join('');

    return tabsHeader + `<div class="settings-tabs-container">${tabsContent}</div>`;
};

// ==========================================
// MODULO: RENDERIZADO DE CONTROLES
// ==========================================
function renderControl(opt, isChecked, valActual) {

    if (opt.tipo === 'button') {
        // Cambié opt.label.split(' ')[0] por opt.label para ver el nombre completo
        return `<button class="btn-setting-action" style="background:${opt.color}" onclick="window.ejecutarAccionTabs('${opt.id}')">${opt.label}</button>`;
        }

    const onchange = opt.accion ? `onchange="window.ejecutarAccionTabs('${opt.id}', this.type === 'checkbox' ? this.checked : this.value)"` : '';


    if (opt.tipo === 'switch') return `<label class="switch"><input type="checkbox" ${isChecked ? 'checked' : ''} ${onchange}><span class="slider"></span></label>`;
    
    if (opt.tipo === 'select') {
        const optionsHTML = opt.options ? opt.options.map(o => {
            const val = typeof o === 'object' ? o.val : o;
            const text = typeof o === 'object' ? o.text : o;
            return `<option value="${val}" ${valActual === val ? 'selected' : ''}>${text}</option>`;
        }).join('') : '';
        return `<select ${onchange}>${optionsHTML}</select>`;
    }
    
    if (opt.tipo === 'color') return `<input type="color" value="${valActual || '#bc0009'}" ${onchange}>`;
    if (opt.tipo === 'text') return `<input type="text" placeholder="..." value="${valActual || ''}" ${onchange}>`;
    if (opt.tipo === 'range') return `<input type="range" ${onchange}>`;
    return '';

}

// ==========================================
// MODULO: LOGICA DE NAVEGACION Y EJECUCION
// ==========================================
window.cambiarTab = function(tabId) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
};

window.ejecutarAccionTabs = (id, valor) => {
    let opcion;
    tabsConfig.forEach(tab => {
        const encontrada = tab.secciones.find(s => s.id === id);
        if (encontrada) opcion = encontrada;
    });
    if (opcion && opcion.accion) opcion.accion(valor);
};

// ==========================================
// MODULO: FUNCIONES DE LOS ATRIBUTOS
// ==========================================
window.reestablecerWakeLock = async () => {
    const isActive = localStorage.getItem('pref-wakelock') === 'true';
    if (isActive && document.visibilityState === 'visible') {
        window.wakeLock = await navigator.wakeLock.request('screen');
    }
};

// ==========================================
// MODULO: PERSISTENCIA AL CARGAR
// ==========================================
(function aplicarPreferenciasGlobales() {
    tabsConfig.forEach(tab => {
        tab.secciones.forEach(opt => {
            if (opt.accion && opt.storageKey) {
                const val = localStorage.getItem(opt.storageKey) || opt.default;
                const finalVal = opt.tipo === 'switch' ? val === 'true' : val;
                
                // Aplicar inmediatamente o esperar al DOM según el tipo
                if (opt.id === 'global-set-dark' || opt.id === 'global-set-wakelock') {
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', () => opt.accion(finalVal));
                    } else {
                        opt.accion(finalVal);
                    }
                } else {
                    opt.accion(finalVal);
                }
            }
        });
    });
})();