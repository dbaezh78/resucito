const urlParams = new URLSearchParams(window.location.search);
const currentCantoId = urlParams.get('canto') || 'global';

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

                // ******** FUNCION DE MANTENIMIENTO CORREGIDA ********
                { 
                    id: 'set-mant-canto',
                    label: 'Mostrar Ubicación', 
                    tipo: 'switch', 
                    storageKey: 'pref-mant-active',
                    default: false,
                    accion: (val) => {
                        // 1. Si el usuario intenta encender el switch
                        if (val === true || val === 'true') {
                            
                            // Intentamos obtener el correo de la sesión activa
                            const userEmail = window.userEmailActivo || 
                                            (window.firebaseAPI && window.firebaseAPI.obtenerUsuarioActual()?.email);

                            // Correo con error intencional para tu prueba de seguridad
                            const listaAutorizada = ["dbaezh78@gmail.com", "admin@resucito.do"];

                            // Validación automática por correo
                            if (userEmail && listaAutorizada.includes(userEmail.toLowerCase())) {
                                localStorage.setItem('pref-mant-active', 'true');
                                if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                                return; 
                            }

                            // 2. Validación por código si falla el correo
                            const pass = prompt("Acceso restringido. Introduce el código de editor:");
                            
                            if (pass === "7777") {
                                localStorage.setItem('pref-mant-active', 'true');
                                if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                            } else {
                                // SI EL CÓDIGO ES INCORRECTO
                                alert("Código incorrecto o permisos insuficientes.");
                                localStorage.setItem('pref-mant-active', 'false');

                                // RESETEO VISUAL FORZADO
                                setTimeout(() => {
                                    // Buscamos el input por varios selectores posibles para no fallar
                                    const input = document.querySelector('input[data-key="pref-mant-active"]') || 
                                                document.getElementById('set-mant-canto') || 
                                                document.querySelector('[data-id="set-mant-canto"] input');
                                    
                                    if (input) {
                                        input.checked = false; // Apaga el check físicamente
                                        
                                        // Buscamos el contenedor padre (el que suele tener el color verde/activo)
                                        const container = input.closest('.switch') || 
                                                        input.closest('.option-item') || 
                                                        input.parentElement;
                                        
                                        if (container) {
                                            container.classList.remove('active'); // Quita el color de encendido
                                            container.classList.remove('on');
                                        }

                                        // Disparamos el evento para avisar a la interfaz del cambio
                                        input.dispatchEvent(new Event('change', { bubbles: true }));
                                    }

                                    // Limpiamos los números rojos del canto si se llegaron a pintar
                                    if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                                }, 150);
                            }
                        } 
                        // 3. Si el usuario apaga el switch manualmente
                        else {
                            localStorage.setItem('pref-mant-active', 'false');
                            if (typeof toggleAcordeLocation === 'function') toggleAcordeLocation();
                        }
                    }
                },

                // ==========================================
                // VELOCIDAD AUTO SCROLL (DETECCIÓN AUTOMÁTICA)
                // ==========================================
// Busca estas secciones en tu window.tabsConfig
{
    id: 'set-scroll-v',
    label: `Velocidad Canto (${(function() {
        const w = window.innerWidth;
        if (w < 768) return 'Móvil';
        if (w < 992) return 'Tablet';
        return 'PC';
    })()})`,
    tipo: 'range',
    min: 1, max: 40, step: 1,
    storageKey: `scroll_v_${(window.innerWidth < 768 ? 'mobile' : window.innerWidth < 992 ? 'tablet' : 'desktop')}_${currentCantoId}`,
    // Agregamos esManual (por defecto false)
    accion: (val, esManual = false) => {
        const device = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 992 ? 'tablet' : 'desktop';
        if (window.guardarVelocidadCanto) {
            // Pasamos el parámetro esManual a la función de Firebase
            window.guardarVelocidadCanto(device, val, 'v', esManual);
        }
        if (typeof window.refrescarScrollEnVivo === 'function') window.refrescarScrollEnVivo();
    }
},
{
    id: 'set-scroll-i',
    label: 'Incremento Scroll (px)',
    tipo: 'range',
    min: 1, max: 15, step: 1,
    storageKey: `scroll_i_${(window.innerWidth < 768 ? 'mobile' : window.innerWidth < 992 ? 'tablet' : 'desktop')}_${currentCantoId}`,
    accion: (val, esManual = false) => {
        const device = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 992 ? 'tablet' : 'desktop';
        if (window.guardarVelocidadCanto) {
            window.guardarVelocidadCanto(device, val, 'i', esManual);
        }
        if (typeof window.refrescarScrollEnVivo === 'function') window.refrescarScrollEnVivo();
    }
},



                // ==========================================
                // NOTA Y URL DE LA NOTA DEL CANTOR
                // ==========================================

                { 
                    id: 'set-nota-personal',
                    label: 'Nota Personal del Cantor', 
                    tipo: 'text',
                    storageKey: `nota_personal_${currentCantoId}`,
                    accion: (val) => {
                        // Llamamos a la nueva función que guarda en LocalStorage y Firebase a la vez
                        if (window.guardarNotaPersonalCanto) {
                            window.guardarNotaPersonalCanto(val, 'nota');
                        }
                    }
                },
                { 
                    id: 'set-url-personal',
                    label: 'Agregar URL a la nota Personal del cantor (YouTube/PDF)', 
                    tipo: 'text',
                    storageKey: `url_personal_${currentCantoId}`,
                    accion: (val) => {
                        if (window.guardarNotaPersonalCanto) {
                            window.guardarNotaPersonalCanto(val, 'url');
                        }
                    }
                },
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
                // 1. Intentar obtener el valor del LocalStorage
                const valorGuardado = opt.storageKey ? localStorage.getItem(opt.storageKey) : null;
                
                // 2. FILTRO DE SEGURIDAD: 
                // Si el valor es nulo o es la palabra "undefined"/"null" por error, 
                // usamos el valor por defecto (opt.default) o una cadena vacía.
                const valorLimpio = (valorGuardado === null || valorGuardado === "undefined" || valorGuardado === "null") 
                                    ? (opt.default !== undefined ? opt.default : "") 
                                    : valorGuardado;

                // 3. Lógica para los interruptores (Switch)
                // Comparamos contra el valor ya limpio
                const isChecked = opt.tipo === 'switch' 
                                  ? (valorLimpio === 'true' || valorLimpio === true) 
                                  : false;

                // 4. El valor final que se enviará al renderControl (Input, Select, Range, etc.)
                const valActual = valorLimpio;

                return `
                <div class="setting-row" data-id="${opt.id}">
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
    
    // CONTROL DE RANGO VINCULADO (BARRA + NÚMERO)
    if (opt.tipo === 'range') {
        return `
            <div class="range-controls-wrapper" style="display: flex; align-items: center; gap: 10px; width: 100%;">
                <input type="range" 
                    min="${opt.min}" max="${opt.max}" step="${opt.step || 1}" 
                    value="${valActual}" 
                    style="flex-grow: 1;"
                    oninput="window.actualizarInputVinculado('${opt.id}', this.value)">
                <input type="number" 
                    min="${opt.min}" max="${opt.max}" 
                    value="${valActual}" 
                    style="width: 45px; text-align: center;"
                    oninput="window.actualizarSliderVinculado('${opt.id}', this.value)">
            </div>
        `;
    }
else if (opt.tipo === 'audio-mixer') {
    const radioVal = localStorage.getItem(opt.storageKeyRadio) || opt.defaultRadio;
    
    return `
        <div class="audio-mixer-wrapper" style="display: flex; align-items: center; gap: 10px; width: 100%;">
            <div style="display: flex; gap: 10px; white-space: nowrap;">
                <label style="cursor: pointer; display: flex; align-items: center; gap: 4px;">
                    <input type="radio" name="radio-${opt.id}" value="original" 
                        ${radioVal === 'original' ? 'checked' : ''} 
                        onchange="window.ejecutarAccionAudioMixer('${opt.id}')"> Default
                </label>
                <label style="cursor: pointer; display: flex; align-items: center; gap: 4px;">
                    <input type="radio" name="radio-${opt.id}" value="personal" 
                        ${radioVal === 'personal' ? 'checked' : ''} 
                        onchange="window.ejecutarAccionAudioMixer('${opt.id}')"> Personal
                </label>
            </div>
            <input type="text" id="input-${opt.id}" 
                placeholder="${opt.placeholder}" 
                value="${valActual}" 
                style="flex-grow: 1; padding: 5px;"
                oninput="window.ejecutarAccionAudioMixer('${opt.id}')">
        </div>
    `;
}
    return '';
}


// ==========================================
// MODULO: LOGICA DE NAVEGACION Y EJECUCION
// ==========================================
window.cambiarTab = function(tabId) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    const targetTab = document.getElementById(tabId);
    if(targetTab) targetTab.classList.add('active');
    if(event) event.currentTarget.classList.add('active');
};

window.ejecutarAccionTabs = (id, valor, esManual = false) => {
    let opcion;
    tabsConfig.forEach(tab => {
        const encontrada = tab.secciones.find(s => s.id === id);
        if (encontrada) opcion = encontrada;
    });

if (opcion) {
        const valorLimpio = (valor === undefined || valor === null || valor === "undefined") ? "" : valor;
        
        // Pasamos esManual a la función accion
        if (opcion.accion) opcion.accion(valorLimpio, esManual);
        
        if (opcion.storageKey) {
            localStorage.setItem(opcion.storageKey, valorLimpio);
        }
    }
};

// ==========================================
// MODULO: VINCULACIÓN BARRA-NÚMERO
// ==========================================
window.actualizarInputVinculado = (id, val) => {
    const contenedor = document.querySelector(`[data-id="${id}"]`);
    if (contenedor) {
        const numInput = contenedor.querySelector('input[type="number"]');
        if (numInput) numInput.value = val;
    }
    // Enviamos TRUE porque el usuario está moviendo el slider
    window.ejecutarAccionTabs(id, val, true); 
};

window.actualizarSliderVinculado = (id, val) => {
    const contenedor = document.querySelector(`[data-id="${id}"]`);
    if (contenedor) {
        const slider = contenedor.querySelector('input[type="range"]');
        if (slider) {
            let n = parseInt(val);
            if (n > slider.max) n = slider.max;
            if (n < slider.min) n = slider.min;
            slider.value = n;
            window.ejecutarAccionTabs(id, n, true); // Enviamos TRUE
        }
    }
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
// MODULO: PERSISTENCIA Y CARGA DINÁMICA
// ==========================================
(function aplicarPreferenciasGlobales() {
    const ejecutarCarga = () => {
        tabsConfig.forEach(tab => {
            tab.secciones.forEach(opt => {
                if (opt.accion && opt.storageKey) {
                    const key = typeof opt.storageKey === 'function' ? opt.storageKey() : opt.storageKey;
                    const val = localStorage.getItem(key) || opt.default;
                    const finalVal = opt.tipo === 'switch' ? val === 'true' : val;
                    opt.accion(finalVal);
                }
            });
        });
    };

    // Ejecución inicial inmediata
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ejecutarCarga);
    } else {
        ejecutarCarga();
    }

})();

// ==========================================
// MODULO: MOVIMIENTO DE BAJADA DEL CANTO
// ==========================================

// Esta función es la que "mueve la bolita" del slider cuando llega el dato de Firebase
// ==========================================
// MODULO: SINCRONIZACIÓN DE DATOS (FIREBASE -> UI -> MOTOR)
// ==========================================

window.actualizarValoresUI = () => {
    const device = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 992 ? 'tablet' : 'desktop';
    
    // 1. Obtener datos de canto_data.js como respaldo
    const datosCantoBase = (typeof allCantosData !== 'undefined') 
        ? allCantosData.find(c => c.id === currentCantoId) 
        : null;

    const controles = [
        { id: 'set-scroll-v', tipo: 'v' },
        { id: 'set-scroll-i', tipo: 'i' }
    ];

            controles.forEach(control => {
                const storageKey = `scroll_${control.tipo}_${device}_${currentCantoId}`;
                
                // 1. Intentamos obtener lo que descargó Firebase (Nube)
                let valorNube = localStorage.getItem(storageKey);
                let valorFinal = null;

                // 2. REGLA DE ORO: Si existe en la nube y es mayor a 0, manda la nube.
                // Convertimos a número para comparar con seguridad
                const valorNubeNum = (valorNube !== null && valorNube !== "null") ? parseInt(valorNube) : 0;

                if (valorNubeNum > 0) {
                    valorFinal = valorNubeNum;
                    console.log(`☁️ [Nube] Prioridad detectada para ${control.id}: ${valorFinal}`);
                } 
                // 3. Solo si la nube está vacía o es 0, usamos el respaldo del local (canto_data.js)
                else if (datosCantoBase && datosCantoBase.scrollConfig) {
                    const configBase = datosCantoBase.scrollConfig[device] || datosCantoBase.scrollConfig['desktop'];
                    valorFinal = configBase[control.tipo];
                    console.log(`📦 [Local] Nube vacía o 0, usando respaldo local: ${valorFinal}`);
                }

                if (valorFinal !== null) {
                    const valNum = parseInt(valorFinal);
                    
                    // Actualización Visual
                    const inputSlider = document.getElementById(control.id);
                    if (inputSlider) {
                        inputSlider.value = valNum;
                        const contenedor = inputSlider.closest('.range-controls-wrapper');
                        if (contenedor) {
                            const numInput = contenedor.querySelector('input[type="number"]');
                            if (numInput) numInput.value = valNum;
                        }
                    }

                    // Aplicar al motor (FALSE para no re-subir el valor local a la nube)
                    const seccion = window.tabsConfig.flatMap(t => t.secciones).find(s => s.id === control.id);
                    if (seccion && typeof seccion.accion === 'function') {
                        seccion.accion(valNum, false); 
                    }
                }
            });
};


// Ejecución inicial tras un breve delay para que todo cargue
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(window.actualizarValoresUI, 500);
});