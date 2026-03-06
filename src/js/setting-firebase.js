// src/js/setting-firebase.js
import { db, auth } from './firebase-auth.js';
import { doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/**
 * Limpia valores para evitar que "undefined" o "null" se suban a Firebase
 */
const limpiarValor = (val) => (val === undefined || val === null || val === "undefined" || val === "null") ? "" : val;

/**
 * Guarda la configuración de un canto (Velocidad o Incremento)
 */
/**
 * Guarda la configuración de un canto (Solo sube a la nube si es manual)
 */
// Dentro de guardarVelocidadCanto en setting-firebase.js
export async function guardarVelocidadCanto(dispositivo, valor, tipo, esManual = false) {
    const params = new URLSearchParams(window.location.search);
    const cantoId = params.get('canto');
    if (!cantoId) return;

    const valorNum = parseInt(valor);
    if (isNaN(valorNum)) return; // Seguridad extra
    
    // Guardar localmente con la llave que espera setting.js
    localStorage.setItem(`scroll_${tipo}_${dispositivo}_${cantoId}`, valorNum);

    if (auth.currentUser && esManual) {
        try {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
            const campoUpdate = `scrollConfig.${dispositivo}.${tipo}`;
            
            await setDoc(docRef, {
                [campoUpdate]: valorNum,
                ultimaActualizacion: new Date()
            }, { merge: true });
            
            console.log(`☁️ [Firebase] Guardado en nube: ${dispositivo} ${tipo} = ${valorNum}`);
        } catch (e) {
            console.error("❌ Error Firebase:", e);
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

    const valorLimpio = limpiarValor(valor);
    
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

    // Guardar localmente
    if (storageKey) localStorage.setItem(storageKey, valorLimpio);

    // 2. Guardar en Firebase
    if (auth.currentUser && keyFirebase) {
        try {
            const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
            
            await setDoc(docRef, {
                [keyFirebase]: valorLimpio,
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

    try {
        const docRef = doc(db, "usuarios", auth.currentUser.uid, "config_cantos", cantoId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            
            // --- 1. Sincronizar Scroll (Velocidad e Incremento) ---
            const config = data.scrollConfig;
            if (config) {
                console.log("☁️ [Firebase] Datos de scroll recibidos:", config);
                ['mobile', 'tablet', 'desktop'].forEach(dev => {
                    if (config[dev]) {
                        if (config[dev].v !== undefined) {
                            const valV = parseInt(config[dev].v);
                            localStorage.setItem(`scroll_v_${dev}_${cantoId}`, valV);
                            console.log(`🔢 [Nube -> Local] ${dev} Velocidad: ${valV}`);
                        }
                        if (config[dev].i !== undefined) {
                            const valI = parseInt(config[dev].i);
                            localStorage.setItem(`scroll_i_${dev}_${cantoId}`, valI);
                            console.log(`🔢 [Nube -> Local] ${dev} Incremento: ${valI}`);
                        }
                    }
                });
            }

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
    }
}

// Exponer funciones al objeto window para acceso global
window.guardarVelocidadCanto = guardarVelocidadCanto;
window.guardarNotaPersonalCanto = guardarNotaPersonalCanto;
window.sincronizarConfiguracionDesdeFirebase = sincronizarConfiguracionDesdeFirebase;