    import { auth, db } from './firebase-auth.js';
    import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
    import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


    // Si quieres un botón de salir dentro del perfil:
    const btnLogout = document.getElementById('btn-logout-perfil');
    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
    if (confirm("¿La paz hermano, quieres cerrar la sesión de Google?")) {
                signOut(auth).then(() => {
                    window.location.href = 'index.html';
                }).catch((error) => {
                    console.error("Error al salir:", error);            
                });
            }
        });
    }

    const stepSelector = document.getElementById('userStep');
    const comunidadSelector = document.getElementById('userComunidad');
    let etapaGuardada = null;
    const CODIGO_ADMIN_SECRETO = "RE77"; // Cambia esto por el que tú quieras

    // 1. Llenar comunidades 1-73
    for(let i=1; i<=73; i++) {
        let opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        comunidadSelector.appendChild(opt);
    }

    // 2. Cargar datos al iniciar
    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const docRef = doc(db, "usuarios", user.uid, "perfil", "config");
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                const data = docSnap.data();
                document.getElementById('userCountry').value = data.pais || "Rep. Dominicana";
                document.getElementById('userParroquia').value = data.parroquia || "";
                document.getElementById('userComunidad').value = data.comunidad || 1;
                stepSelector.value = data.etapa || 0;
                etapaGuardada = data.etapa; // Guardamos la etapa inicial
            }
        } else {
            window.location.href = "index.html"; // Redirigir si no hay login
        }
    });

    // 3. Validar cambio de etapa
    window.checkStepChange = (newVal) => {
        // Si ya había una etapa guardada y el usuario intenta cambiarla
        if (etapaGuardada !== null && newVal != etapaGuardada) {
            document.getElementById('adminSection').style.display = 'block';
        } else {
            document.getElementById('adminSection').style.display = 'none';
        }
    };

    // 4. Guardar Datos
    document.getElementById('btnSave').addEventListener('click', async () => {
        const user = auth.currentUser;
        const selectedStep = stepSelector.value;
        const adminInput = document.getElementById('adminCode').value;

        // Si cambió la etapa y no es la primera vez, pedir código
        if (etapaGuardada !== null && selectedStep != etapaGuardada) {
            if (adminInput !== CODIGO_ADMIN_SECRETO) {
                alert("Código de administrador incorrecto. No se puede cambiar la etapa.");
                return;
            }
        }

        const perfilData = {
            pais: document.getElementById('userCountry').value,
            parroquia: document.getElementById('userParroquia').value,
            comunidad: document.getElementById('userComunidad').value,
            etapa: selectedStep,
            actualizado: new Date()
        };

        try {
            await setDoc(doc(db, "usuarios", user.uid, "perfil", "config"), perfilData);
            alert("¡Perfil actualizado con éxito!");
            etapaGuardada = selectedStep; // Actualizamos la referencia
            document.getElementById('adminSection').style.display = 'none';
        } catch (e) {
            console.error("Error guardando perfil", e);
        }
    });