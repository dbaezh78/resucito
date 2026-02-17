// 5.2 FUNCIÓN MAESTRA DEL CALENDARIO VISUAL
window.abrirCalendario = async function(cantoId) {
    const user = auth.currentUser;
    if (!user) return;

    try {
        const { collection, getDocs } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
        
        // 1. Obtener historial de Firebase
        const refHistorial = collection(db, "usuarios", user.uid, "transportacion", cantoId, "historial");
        const snapshot = await getDocs(refHistorial);
        
        let diasActivos = [];
        snapshot.forEach(docSnap => {
            const d = docSnap.data().valor;
            if (d) {
                const f = d.toDate ? d.toDate() : new Date(d);
                // Formato YYYY-MM-DD para comparar
                const iso = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, '0') + "-" + String(f.getDate()).padStart(2, '0');
                diasActivos.push(iso);
            }
        });

        // 2. Eliminar modal si ya existe uno abierto
        const viejo = document.getElementById('calendar-modal');
        if (viejo) viejo.remove();

        // 3. Crear el HTML del Modal
        const modalHtml = `
            <div id="calendar-modal" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:999999; display:flex; align-items:center; justify-content:center;">
                <div style="background:white; padding:20px; border-radius:15px; width:300px; text-align:center; position:relative; font-family: sans-serif;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position:absolute; top:10px; right:15px; border:none; background:none; font-size:24px; cursor:pointer;">&times;</button>
                    <h3 style="margin: 0 0 15px 0;">Historial de Uso</h3>
                    <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;">
                        ${generarGridCalendario(diasActivos)}
                    </div>
                    <p style="margin-top:15px; font-size:12px; color:#666;">Días con <b style="color:#d4af37">●</b> tienen registros.</p>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

    } catch (e) {
        console.error("Error al cargar calendario:", e);
    }
};

// Función auxiliar para dibujar los números y negritas
function generarGridCalendario(fechasActivas) {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = hoy.getMonth();
    const ultimoDia = new Date(año, mes + 1, 0).getDate();
    let html = "";

    // Cabecera de días
    ['D','L','M','M','J','V','S'].forEach(d => html += `<b style="font-size:12px; color:#ccc;">${d}</b>`);

    for (let i = 1; i <= ultimoDia; i++) {
        const actualStr = año + "-" + String(mes + 1).padStart(2, '0') + "-" + String(i).padStart(2, '0');
        const tieneRegistro = fechasActivas.includes(actualStr);
        
        // Si tiene registro: Círculo dorado y negrita. Si no: Gris suave.
        const estilo = tieneRegistro 
            ? "background:#fff3cd; color:#856404; font-weight:bold; border-radius:50%; border:1px solid #ffeeba;" 
            : "color:#ddd;";
            
        html += `<div style="padding:5px; font-size:14px; ${estilo}">${i}</div>`;
    }
    return html;
}



// Función auxiliar (Debe estar fuera de abrirCalendario)
function generarMiniCalendarioHTML(fechasActivas) {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = hoy.getMonth();
    
    // Días del mes actual
    const ultimoDia = new Date(año, mes + 1, 0).getDate();
    let html = "";
    
    // Nombres de días (opcional)
    const diasSemana = ['D','L','M','X','J','V','S'];
    diasSemana.forEach(d => html += `<b style="font-size:10px; color:#bbb;">${d}</b>`);

    for (let i = 1; i <= ultimoDia; i++) {
        const fechaStr = año + "-" + String(mes + 1).padStart(2, '0') + "-" + String(i).padStart(2, '0');
        const activo = fechasActivas.includes(fechaStr);
        
        const estilo = activo 
            ? "background:#fff3cd; color:#856404; font-weight:bold; border: 1px solid #ffeeba; border-radius:50%;" 
            : "color:#eee;";
            
        html += `<div style="padding:5px; font-size:14px; ${estilo}">${i}</div>`;
    }
    return html;
}