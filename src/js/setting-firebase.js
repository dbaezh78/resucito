// src/js/setting-firebase.js
import { db, auth } from './firebase-auth.js';
import { doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let bloqueoSincronizacion = false;

/**
 * Limpia valores para evitar que "undefined" o "null" se suban a Firebase
 */
const limpiarValor = (val) => (val === undefined || val === null || val === "undefined" || val === "null") ? "" : val;

/* Guarda la configuración de un canto (Velocidad o Incremento)  */

export async function guardarVelocidadCanto(dispositivo, valor, tipo, esManual = false) {
    const params = new URLSearchParams(window.location.search);
    const cantoId = params.get('canto');
    if (!cantoId) return;

    // 1. FORZAMOS EL TIPO NÚMERO AQUÍ
    const valorNum = Number(valor); 
    if (isNaN(valorNum)) return; 

    // Guardado Local
    localStorage.setItem(`scroll_${tipo}_${dispositivo}_${cantoId}`, valorNum);

    // 2. SUBIDA A FIREBASE
    if (auth.currentUser && esManual) {
        try {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
            
            // Creamos la ruta del campo: ej. "scrollConfig.desktop.v"
            const campoDinamico = `scrollConfig.${dispositivo}.${tipo}`;

            // USAMOS updateDoc para que entienda los puntos como niveles del objeto
            await updateDoc(docRef, {
                [campoDinamico]: valorNum, // Aquí enviamos el Number puro
                ultimaActualizacion: new Date()
            }).catch(async (error) => {
                // Si el documento no existe (error 404), lo creamos con setDoc
                if (error.code === 'not-found') {
                    await setDoc(docRef, {
                        scrollConfig: { [dispositivo]: { [tipo]: valorNum } },
                        ultimaActualizacion: new Date()
                    }, { merge: true });
                }
            });

            console.log(`☁️ [Firebase] ${campoDinamico} guardado como número:`, valorNum);
        } catch (e) {
            console.error("❌ Error al subir a Firebase:", e);
        }
    }
}


/**
 * Guarda la Nota Personal, URL de Recurso o URL de Audio en Firebase
 */
export async function guardarNotaPersonalCanto(valor, campo) {
    const params = new URLSearchParams(window.location.search);
    const cantoId = params.get('canto');
    if (!cantoId) return;

    // 1. Usamos tu función limpiarValor para evitar basura en la base de datos
    // Si valorLimpio devuelve "undefined" como texto, lo convertimos a ""
    const valorLimpio = (valor === undefined || valor === null || valor === "undefined") ? "" : valor.trim();
    
    let storageKey = "";
    let keyFirebase = "";

    if (campo === 'nota') {
        storageKey = `nota_personal_${cantoId}`;
        keyFirebase = "notaPersonal";
    } else if (campo === 'url') {
        storageKey = `url_personal_${cantoId}`;
        keyFirebase = "urlPersonal";
    } else if (campo === 'audio') {
        storageKey = `audio_personal_url_${cantoId}`;
        keyFirebase = "audioPersonalUrl";
    }

    // 2. Guardar localmente (esto asegura que la UI responda rápido)
    if (storageKey) {
        localStorage.setItem(storageKey, valorLimpio);
    }

    // 3. Guardar en Firebase (Sincronización en la nube)
    if (auth.currentUser && keyFirebase) {
        try {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
            
            await setDoc(docRef, {
                [keyFirebase]: valorLimpio, // Usamos el nombre de campo correcto para Firestore
                ultimaActualizacion: new Date()
            }, { merge: true });
            
            console.log(`✅ ${campo} sincronizado en Firebase para: ${cantoId}`);
        } catch (e) {
            console.error(`Error al subir ${campo} a Firebase:`, e);
        }
    }
}

/**
 * Carga la configuración de Firebase y la pone en LocalStorage
 */
export async function sincronizarConfiguracionDesdeFirebase(cantoId) {
    if (!auth.currentUser || !cantoId) return;

    window.bloqueoSincronizacion = true; 
    console.log("🔒 Bloqueo GLOBAL activado");

    try {

        // --- PARTE A: Datos del Canto (Scroll, Notas, etc.) ---
        const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // --- 1. Sincronizar Scroll (Velocidad e Incremento) ---
            const config = data.scrollConfig;
            if (config) {
                ['mobile', 'tablet', 'desktop'].forEach(dev => {
                    if (config[dev]) {
                        if (config[dev].v !== undefined) {
                            localStorage.setItem(`scroll_v_${dev}_${cantoId}`, config[dev].v);
                        }
                        if (config[dev].i !== undefined) {
                            localStorage.setItem(`scroll_i_${dev}_${cantoId}`, config[dev].i);
                        }
                    }
                });
            }
            console.log("✅ [LocalStorage] Sincronizado con éxito desde la nube.");
            // Marcamos que la sincronización ocurrió para evitar que el setTimeout de setting.js pise los datos


            // --- PARTE B: Preferencias Globales (Expandir Todo, Idioma, etc.) ---
        const prefRef = doc(db, "usuarios", auth.currentUser.uid, "configuracion", "preferencias");
        const prefSnap = await getDoc(prefRef);

        if (prefSnap.exists()) {
            const prefs = prefSnap.data();
            
            // Descargamos específicamente 'pref-expandir-todo'
            if (prefs["pref-expandir-todo"] !== undefined) {
                localStorage.setItem('pref-expandir-todo', prefs["pref-expandir-todo"]);
                console.log("📂 [Firebase] Estado de 'Expandir Todo' sincronizado:", prefs["pref-expandir-todo"]);
            }
            
            // También puedes bajar el idioma si quieres asegurar consistencia
            if (prefs["pref-lang"]) localStorage.setItem('pref-lang', prefs["pref-lang"]);

            if (prefs["pref-font-size"]) localStorage.setItem("pref-font-size", prefs["pref-font-size"]);

            console.log("🌍 [Preferencias] Idioma y estilos sincronizados.");
        }

        // FINALIZACIÓN --- PARTE B: Preferencias Globales (Expandir Todo, Idioma, etc.) ---

            window._uiYaSincronizada = true;

            // --- 2. Sincronizar Notas y URLs personales ---
            if (data.notaPersonal !== undefined) localStorage.setItem(`nota_personal_${cantoId}`, data.notaPersonal);
            if (data.urlPersonal !== undefined) localStorage.setItem(`url_personal_${cantoId}`, data.urlPersonal);
            if (data.audioPersonalUrl !== undefined) localStorage.setItem(`audio_personal_url_${cantoId}`, data.audioPersonalUrl);

            console.log("💾 [Local] LocalStorage reconstruido con éxito.");
            
            // Avisamos a la UI para que mueva los sliders y refresque componentes
            if (window.actualizarValoresUI) {
                window.actualizarValoresUI();
            }
        }
    } catch (e) {
        console.error("❌ Error al descargar configuración:", e);
    } finally {
        setTimeout(() => {
            window.bloqueoSincronizacion = false;
            console.log("🔓 Bloqueo GLOBAL desactivado");
        }, 0);
    }
}


// =====================================================================
// Guarda las preferencias globales (Idioma, Modo Oscuro, Expandir Todo)
// en la ruta: usuarios/UID/configuracion/preferencias
// =====================================================================
export async function guardarPreferenciasGlobales() {

    if (bloqueoSincronizacion) {
        console.log("🚫 Subida cancelada: Se está sincronizando desde la nube.");
        return; 
    }

    if (!auth.currentUser) return;

    // Mapeamos lo que hay en LocalStorage a las llaves reales de tu Firebase
    const preferencias = {
        // Llaves originales de tu backup/imagen:
        "global-set-dark": localStorage.getItem('pref-dark-mode') === 'true',
        "syncToggle": localStorage.getItem('syncToggle') === 'true',
        "toggle-gestion": localStorage.getItem('toggle-gestion') === 'true',
        "toggle-perfil": localStorage.getItem('toggle-perfil') === 'true',
        "toggle-settings": localStorage.getItem('toggle-settings') === 'true',
        "wrapper-resumen": localStorage.getItem('wrapper-resumen') === 'true',
        
        // La nueva llave que estamos añadiendo:
        "pref-expandir-todo": localStorage.getItem('pref-expandir-todo') === 'true',
        
        // Otros ajustes:
        "pref-lang": localStorage.getItem('pref-lang') || 'Español',
        "ultimaActualizacion": new Date()
    };

    try {
        const docRef = doc(db, "usuarios", auth.currentUser.uid, "configuracion", "preferencias");
        
        // IMPORTANTE: merge: true evita borrar cualquier otra llave que no hayamos puesto aquí
        await setDoc(docRef, preferencias, { merge: true });
        
        console.log("☁️ [Firebase] Preferencias unificadas sincronizadas correctamente.");
    } catch (e) {
        console.error("❌ Error al sincronizar con Firebase:", e);
    }
}

// Aseguramos la exposición global
// Exponerla al objeto window

// Exponer funciones al objeto window para acceso global
window.guardarPreferenciasGlobales = guardarPreferenciasGlobales;
window.guardarVelocidadCanto = guardarVelocidadCanto;
window.guardarNotaPersonalCanto = guardarNotaPersonalCanto;
window.sincronizarConfiguracionDesdeFirebase = sincronizarConfiguracionDesdeFirebase;