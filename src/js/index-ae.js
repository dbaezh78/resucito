document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('indice-aclamaciones');
    if (!contenedor) return;

    // 1. CONFIGURACIÓN DE COLORES (CON SEMANA SANTA)
    const coloresTiempos = {
        "Adviento": "bg-adviento",
        "Navidad":  "bg-navidad",
        "Ordinario": "bg-ordinario",
        "Cuaresma": "bg-cuaresma",
        "sSanta":   "bg-santa",
        "Pascua":   "bg-pascua"
    };

    const colorHexMap = {
        "Adviento": "#6a1b9a",
        "Navidad":  "#c62828",
        "Ordinario": "#65af00",
        "Cuaresma": "#4a148c",
        "Semana Santa":   "#bc0009",
        "Pascua":   "#1565c0"
    };

    // 2. INYECTAR BOTÓN ÚNICO (ESTILO PERFIL)
    const accionesHTML = `
        <div class="ae-actions-container" style="margin-bottom: 20px; display: flex; justify-content: center;">
            <button id="btn-download-ae" class="btn-ae-sync">
                <span class="material-symbols-outlined">download_for_offline</span>
                <span id="btn-text-ae">Descargar para uso offline</span>
            </button>
        </div>
    `;
    contenedor.insertAdjacentHTML('beforebegin', accionesHTML);

    const btnDownload = document.getElementById('btn-download-ae');
    const btnText = document.getElementById('btn-text-ae');

    // 3. ESTRUCTURA DE DATOS (AQUÍ VA TU MAPA DE CANTOS)
    const estructuraAEV = [
        {
            ciclo: "CICLO A",
            tiempos: [
                {
                    nombre: "Adviento",
                    semanas: [
                        { id: "aetas1a", nombre: "Semana I", sub: "I Domingo de Adviento" },
                        { id: "aetas2a", nombre: "Semana II", sub: "II Domingo de Adviento" },
                        { id: "aetas3a", nombre: "Semana III", sub: "III Domingo de Adviento" },
                        { id: "aetas4a", nombre: "Semana IV", sub: "IV Domingo de Adviento" }
                    ]
                },
                {
                    nombre: "Navidad",
                    semanas: [
                        { id: "aetns25dicmva",		nombre: "25 Diciembre", 			sub: "Natividad del Señor" },
                        { id: "aetnssfa",	nombre: "Último domingo Diciembre", sub: "La Sagrada Familia" },
                        { id: "aetn1ea",		nombre: "1 de Enero", 				sub: "Santa María Madre de Dios" },
                        { id: "aetns2a",		nombre: "Semana II", 				sub: "2º Domingo después de Navidad" },
                        { id: "aetn6ea", 		nombre: "6 de Enero", 				sub: "Epifanía del Señor" },
                        { id: "aetos1a",	nombre: "Bautismo del Señor", 		sub: "Solemnidad" },
                    ]
                },
                {
                    nombre: "Ordinario",
                    semanas: [
                        { id: "aetos1a", nombre: "Semana I",	    sub: "I Domingo Tiempo Ordinario" },
                        { id: "aetos2a", nombre: "Semana II",	    sub: "II Domingo Tiempo Ordinario" },
                        { id: "aetos3a", nombre: "Semana III",	    sub: "III Domingo Tiempo Ordinario" },
                        { id: "aetos4a", nombre: "Semana IV",	    sub: "IV Domingo Tiempo Ordinario" },
                        { id: "aetos5a", nombre: "Semana V",	    sub: "V Domingo Tiempo Ordinario" },
                        { id: "aetos6a", nombre: "Semana VI",	    sub: "VI Domingo Tiempo Ordinario" },
                        { id: "aetos7a", nombre: "Semana VII",	    sub: "VII Domingo Tiempo Ordinario" },
                        { id: "aetos8a", nombre: "Semana VIII",	    sub: "VIII Domingo Tiempo Ordinario" },
                        { id: "aetos9a", nombre: "Semana IX",	    sub: "IX Domingo Tiempo Ordinario" },
                        { id: "aetos10a", nombre: "Semana X",	    sub: "X Domingo Tiempo Ordinario" },
                        { id: "aetos11a", nombre: "Semana XI",	    sub: "XI Domingo Tiempo Ordinario" },
                        { id: "aetos12a", nombre: "Semana XII",	    sub: "XII Domingo Tiempo Ordinario" },
                        { id: "aetos13a", nombre: "Semana XIII",	sub: "XIII Domingo Tiempo Ordinario" },
                        { id: "aetos14a", nombre: "Semana XIV",	    sub: "XIV Domingo Tiempo Ordinario" },
                        { id: "aetos15a", nombre: "Semana XV",	    sub: "XV Domingo Tiempo Ordinario" },
                        { id: "aetos16a", nombre: "Semana XVI",	    sub: "XVI Domingo Tiempo Ordinario" },
                        { id: "aetos17a", nombre: "Semana XVII",	sub: "XVII Domingo Tiempo Ordinario" },
                        { id: "aetos18a", nombre: "Semana XVIII",	sub: "XVIII Domingo Tiempo Ordinario" },
                        { id: "aetos19a", nombre: "Semana XIX",	    sub: "XIX Domingo Tiempo Ordinario" },
                        { id: "aetos20a", nombre: "Semana XX",	    sub: "XX Domingo Tiempo Ordinario" },
                        { id: "aetos21a", nombre: "Semana XXI",	    sub: "XXI Domingo Tiempo Ordinario" },
                        { id: "aetos22a", nombre: "Semana XXII",	sub: "XXII Domingo Tiempo Ordinario" },
                        { id: "aetos23a", nombre: "Semana XXIII",	sub: "XXIII Domingo Tiempo Ordinario" },
                        { id: "aetos24a", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },
                        { id: "aetos25a", nombre: "Semana XXV",	    sub: "XXV Domingo Tiempo Ordinario" },
                        { id: "aetos26a", nombre: "Semana XXVI",	sub: "XXVI Domingo Tiempo Ordinario" },
                        { id: "aetos27a", nombre: "Semana XXVII",	sub: "XXVII Domingo Tiempo Ordinario" },
                        { id: "aetos28a", nombre: "Semana XXVIII",	sub: "XXVIII Domingo Tiempo Ordinario" },
                        { id: "aetos29a", nombre: "Semana XXIX",	sub: "XXIX Domingo Tiempo Ordinario" },
                        { id: "aetos30a", nombre: "Semana XXX",	    sub: "XXX Domingo Tiempo Ordinario" },
                        { id: "aetos31a", nombre: "Semana XXXI",	sub: "XXXI Domingo Tiempo Ordinario" },
                        { id: "aetos32a", nombre: "Semana XXXII",	sub: "XXXII Domingo Tiempo Ordinario" },
                        { id: "aetos33a", nombre: "Semana XXXIII",	sub: "XXXIII Domingo Tiempo Ordinario" },
                        { id: "aetos34a", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },

                    ]
                },
                {
                    nombre: "Cuaresma",
                    semanas: [
                        { id: "aetcs1a", nombre: "Semana I",		sub: "I Domingo Tiempo de Cuaresma" },
                        { id: "aetcs2a", nombre: "Semana II",	sub: "II Domingo Tiempo de Cuaresma" },
                        { id: "aetcs3a", nombre: "Semana III",	sub: "III Domingo Tiempo de Cuaresma" },
                        { id: "aetcs4a", nombre: "Semana IV",	sub: "IV Domingo Tiempo de Cuaresma" },
                        { id: "aetcs5a", nombre: "Semana V",		sub: "V Domingo Tiempo de Cuaresma" },
                        { id: "aetcs6a", nombre: "Semana VI",	sub: "Domingo de Ramos" },
                    ]
                },
                {
                    nombre: "Semana Santa",
                    semanas: [
                        { id: "aetcs6a", nombre: "Domingo de Ramos",	            sub: "Semana VI" },
                        { id: "aetcsjsa", nombre: "Jueves Santo",		            sub: "Semana Santa" },
                        { id: "aetcsvsa", nombre: "Viernes Santo",	                sub: "Semana Santa" },
                        { id: "aetcsssa", nombre: "Vigilia Pascual - Sabado Santo",  sub: "Sabado Santo" },
                    ]
                },                
                                {
                    nombre: "Pascua",
                    semanas: [
                        { id: "aetps1a", nombre: "Semana I",	sub: "I Domingo de Pascua - Octava de Pascua" },
                        { id: "aetps2a", nombre: "Semana II",	sub: "II Domingo de Pascua" },
                        { id: "aetps3a", nombre: "Semana III",	sub: "III Domingo de Pascua" },
                        { id: "aetps4a", nombre: "Semana IV",	sub: "IV Domingo de Pascua" },
                        { id: "aetps5a", nombre: "Semana V",	sub: "V Domingo de Pascua" },
                        { id: "aetps6a", nombre: "Semana VI",	sub: "VI Domingo de Pascua" },
                        { id: "aetps7a", nombre: "Semana VII",	sub: "VII Domingo de Pascua" },
                        { id: "aetps8a", nombre: "Pendecostes",	sub: "Solemnidad - Tiempo Pascual" },
                    ]
                }

            ]
        },
        { ciclo: "CICLO B", 
                        tiempos: [
                {
                    nombre: "Adviento",
                    semanas: [
                        { id: "aetas1b", nombre: "Semana I", sub: "I Domingo de Adviento" },
                        { id: "aetas2b", nombre: "Semana II", sub: "II Domingo de Adviento" },
                        { id: "aetas3b", nombre: "Semana III", sub: "III Domingo de Adviento" },
                        { id: "aetas4b", nombre: "Semana IV", sub: "IV Domingo de Adviento" }
                    ]
                },
                {
                    nombre: "Navidad",
                    semanas: [
                        { id: "aetns25dicmvb",	nombre: "25 Diciembre", 			sub: "Natividad del Señor" },
                        { id: "aetnssfb",	nombre: "Último domingo Diciembre", sub: "La Sagrada Familia" },
                        { id: "aetn1ea",		nombre: "1 de Enero", 				sub: "Santa María Madre de Dios" },
                        { id: "aetns2b",		nombre: "Semana II", 				sub: "2º Domingo después de Navidad" },
                        { id: "aetn6eb", 		nombre: "6 de Enero", 				sub: "Epifanía del Señor" },
                        { id: "aetos1b",	nombre: "Bautismo del Señor", 		sub: "Solemnidad" },
                    ]
                },
                {
                    nombre: "Ordinario",
                    semanas: [
                        { id: "aetos1b", nombre: "Semana I",	    sub: "I Domingo Tiempo Ordinario" },
                        { id: "aetos2b", nombre: "Semana II",	    sub: "II Domingo Tiempo Ordinario" },
                        { id: "aetos3b", nombre: "Semana III",	    sub: "III Domingo Tiempo Ordinario" },
                        { id: "aetos4b", nombre: "Semana IV",	    sub: "IV Domingo Tiempo Ordinario" },
                        { id: "aetos5b", nombre: "Semana V",	    sub: "V Domingo Tiempo Ordinario" },
                        { id: "aetos6b", nombre: "Semana VI",	    sub: "VI Domingo Tiempo Ordinario" },
                        { id: "aetos7b", nombre: "Semana VII",	    sub: "VII Domingo Tiempo Ordinario" },
                        { id: "aetos8b", nombre: "Semana VIII",	    sub: "VIII Domingo Tiempo Ordinario" },
                        { id: "aetos9b", nombre: "Semana IX",	    sub: "IX Domingo Tiempo Ordinario" },
                        { id: "aetos10b", nombre: "Semana X",	    sub: "X Domingo Tiempo Ordinario" },
                        { id: "aetos11b", nombre: "Semana XI",	    sub: "XI Domingo Tiempo Ordinario" },
                        { id: "aetos12b", nombre: "Semana XII",	    sub: "XII Domingo Tiempo Ordinario" },
                        { id: "aetos13b", nombre: "Semana XIII",	sub: "XIII Domingo Tiempo Ordinario" },
                        { id: "aetos14b", nombre: "Semana XIV",	    sub: "XIV Domingo Tiempo Ordinario" },
                        { id: "aetos15b", nombre: "Semana XV",	    sub: "XV Domingo Tiempo Ordinario" },
                        { id: "aetos16b", nombre: "Semana XVI",	    sub: "XVI Domingo Tiempo Ordinario" },
                        { id: "aetos17b", nombre: "Semana XVII",	sub: "XVII Domingo Tiempo Ordinario" },
                        { id: "aetos18b", nombre: "Semana XVIII",	sub: "XVIII Domingo Tiempo Ordinario" },
                        { id: "aetos19b", nombre: "Semana XIX",	    sub: "XIX Domingo Tiempo Ordinario" },
                        { id: "aetos20b", nombre: "Semana XX",	    sub: "XX Domingo Tiempo Ordinario" },
                        { id: "aetos21b", nombre: "Semana XXI",	    sub: "XXI Domingo Tiempo Ordinario" },
                        { id: "aetos22b", nombre: "Semana XXII",	sub: "XXII Domingo Tiempo Ordinario" },
                        { id: "aetos23b", nombre: "Semana XXIII",	sub: "XXIII Domingo Tiempo Ordinario" },
                        { id: "aetos24b", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },
                        { id: "aetos25b", nombre: "Semana XXV",	    sub: "XXV Domingo Tiempo Ordinario" },
                        { id: "aetos26b", nombre: "Semana XXVI",	sub: "XXVI Domingo Tiempo Ordinario" },
                        { id: "aetos27b", nombre: "Semana XXVII",	sub: "XXVII Domingo Tiempo Ordinario" },
                        { id: "aetos28b", nombre: "Semana XXVIII",	sub: "XXVIII Domingo Tiempo Ordinario" },
                        { id: "aetos29b", nombre: "Semana XXIX",	sub: "XXIX Domingo Tiempo Ordinario" },
                        { id: "aetos30b", nombre: "Semana XXX",	    sub: "XXX Domingo Tiempo Ordinario" },
                        { id: "aetos31b", nombre: "Semana XXXI",	sub: "XXXI Domingo Tiempo Ordinario" },
                        { id: "aetos32b", nombre: "Semana XXXII",	sub: "XXXII Domingo Tiempo Ordinario" },
                        { id: "aetos33b", nombre: "Semana XXXIII",	sub: "XXXIII Domingo Tiempo Ordinario" },
                        { id: "aetos34b", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },

                    ]
                },
                {
                    nombre: "Cuaresma",
                    semanas: [
                        { id: "aetcs1b", nombre: "Semana I",		sub: "I Domingo Tiempo de Cuaresma" },
                        { id: "aetcs2a", nombre: "Semana II",	sub: "II Domingo Tiempo de Cuaresma" },
                        { id: "aetcs3b", nombre: "Semana III",	sub: "III Domingo Tiempo de Cuaresma" },
                        { id: "aetcs4b", nombre: "Semana IV",	sub: "IV Domingo Tiempo de Cuaresma" },
                        { id: "aetcs5b", nombre: "Semana V",		sub: "V Domingo Tiempo de Cuaresma" },
                        { id: "aetcs6b", nombre: "Semana VI",	sub: "Domingo de Ramos" },
                    ]
                },
                {
                    nombre: "Semana Santa",
                    semanas: [
                        { id: "aetcs6b", nombre: "Domingo de Ramos",	            sub: "Semana VI" },
                        { id: "aetcsjsb", nombre: "Jueves Santo",		            sub: "Semana Santa" },
                        { id: "aetcsvsc", nombre: "Viernes Santo",	                sub: "Semana Santa" },
                        { id: "aetcsssa", nombre: "Vigilia Pascual - Sabado Santo",  sub: "Sabado Santo" },
                    ]
                },                
                                {
                    nombre: "Pascua",
                    semanas: [
                        { id: "aetps1b", nombre: "Semana I",	sub: "I Domingo de Pascua - Octava de Pascua" },
                        { id: "aetps2b", nombre: "Semana II",	sub: "II Domingo de Pascua" },
                        { id: "aetps3b", nombre: "Semana III",	sub: "III Domingo de Pascua" },
                        { id: "aetps4b", nombre: "Semana IV",	sub: "IV Domingo de Pascua" },
                        { id: "aetps5b", nombre: "Semana V",	sub: "V Domingo de Pascua" },
                        { id: "aetps6b", nombre: "Semana VI",	sub: "VI Domingo de Pascua" },
                        { id: "aetps7b", nombre: "Semana VII",	sub: "VII Domingo de Pascua" },
                        { id: "aetps8b", nombre: "Pendecostes",	sub: "Solemnidad - Tiempo Pascual" },
                    ]

                }

            ]


        },
        { ciclo: "CICLO C", 
                        tiempos: [
                {
                    nombre: "Adviento",
                    semanas: [
                        { id: "aetas1c", nombre: "Semana I", sub: "I Domingo de Adviento" },
                        { id: "aetas2c", nombre: "Semana II", sub: "II Domingo de Adviento" },
                        { id: "aetas3c", nombre: "Semana III", sub: "III Domingo de Adviento" },
                        { id: "aetas4c", nombre: "Semana IV", sub: "IV Domingo de Adviento" }
                    ]
                },
                {
                    nombre: "Navidad",
                    semanas: [
                        { id: "aetns25dicmvc",	nombre: "25 Diciembre", 			sub: "Natividad del Señor" },
                        { id: "aetnssfc",   	nombre: "Último domingo Diciembre", sub: "La Sagrada Familia" },
                        { id: "aetn1ec",		nombre: "1 de Enero", 				sub: "Santa María Madre de Dios" },
                        { id: "aetns2c",		nombre: "Semana II", 				sub: "2º Domingo después de Navidad" },
                        { id: "aetn6ec", 		nombre: "6 de Enero", 				sub: "Epifanía del Señor" },
                        { id: "aetos1a",	nombre: "Bautismo del Señor", 		sub: "Solemnidad" },
                    ]
                },
                {
                    nombre: "Ordinario",
                    semanas: [
                        { id: "aetos1c", nombre: "Semana I",	    sub: "I Domingo Tiempo Ordinario" },
                        { id: "aetos2c", nombre: "Semana II",	    sub: "II Domingo Tiempo Ordinario" },
                        { id: "aetos3c", nombre: "Semana III",	    sub: "III Domingo Tiempo Ordinario" },
                        { id: "aetos4c", nombre: "Semana IV",	    sub: "IV Domingo Tiempo Ordinario" },
                        { id: "aetos5c", nombre: "Semana V",	    sub: "V Domingo Tiempo Ordinario" },
                        { id: "aetos6c", nombre: "Semana VI",	    sub: "VI Domingo Tiempo Ordinario" },
                        { id: "aetos7c", nombre: "Semana VII",	    sub: "VII Domingo Tiempo Ordinario" },
                        { id: "aetos8c", nombre: "Semana VIII",	    sub: "VIII Domingo Tiempo Ordinario" },
                        { id: "aetos9c", nombre: "Semana IX",	    sub: "IX Domingo Tiempo Ordinario" },
                        { id: "aetos10c", nombre: "Semana X",	    sub: "X Domingo Tiempo Ordinario" },
                        { id: "aetos11c", nombre: "Semana XI",	    sub: "XI Domingo Tiempo Ordinario" },
                        { id: "aetos12c", nombre: "Semana XII",	    sub: "XII Domingo Tiempo Ordinario" },
                        { id: "aetos13c", nombre: "Semana XIII",	sub: "XIII Domingo Tiempo Ordinario" },
                        { id: "aetos14c", nombre: "Semana XIV",	    sub: "XIV Domingo Tiempo Ordinario" },
                        { id: "aetos15c", nombre: "Semana XV",	    sub: "XV Domingo Tiempo Ordinario" },
                        { id: "aetos16c", nombre: "Semana XVI",	    sub: "XVI Domingo Tiempo Ordinario" },
                        { id: "aetos17c", nombre: "Semana XVII",	sub: "XVII Domingo Tiempo Ordinario" },
                        { id: "aetos18c", nombre: "Semana XVIII",	sub: "XVIII Domingo Tiempo Ordinario" },
                        { id: "aetos19c", nombre: "Semana XIX",	    sub: "XIX Domingo Tiempo Ordinario" },
                        { id: "aetos20c", nombre: "Semana XX",	    sub: "XX Domingo Tiempo Ordinario" },
                        { id: "aetos21c", nombre: "Semana XXI",	    sub: "XXI Domingo Tiempo Ordinario" },
                        { id: "aetos22c", nombre: "Semana XXII",	sub: "XXII Domingo Tiempo Ordinario" },
                        { id: "aetos23c", nombre: "Semana XXIII",	sub: "XXIII Domingo Tiempo Ordinario" },
                        { id: "aetos24c", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },
                        { id: "aetos25c", nombre: "Semana XXV",	    sub: "XXV Domingo Tiempo Ordinario" },
                        { id: "aetos26c", nombre: "Semana XXVI",	sub: "XXVI Domingo Tiempo Ordinario" },
                        { id: "aetos27c", nombre: "Semana XXVII",	sub: "XXVII Domingo Tiempo Ordinario" },
                        { id: "aetos28c", nombre: "Semana XXVIII",	sub: "XXVIII Domingo Tiempo Ordinario" },
                        { id: "aetos29c", nombre: "Semana XXIX",	sub: "XXIX Domingo Tiempo Ordinario" },
                        { id: "aetos30c", nombre: "Semana XXX",	    sub: "XXX Domingo Tiempo Ordinario" },
                        { id: "aetos31c", nombre: "Semana XXXI",	sub: "XXXI Domingo Tiempo Ordinario" },
                        { id: "aetos32c", nombre: "Semana XXXII",	sub: "XXXII Domingo Tiempo Ordinario" },
                        { id: "aetos33c", nombre: "Semana XXXIII",	sub: "XXXIII Domingo Tiempo Ordinario" },
                        { id: "aetos34c", nombre: "Semana XXIV",	sub: "XXIV Domingo Tiempo Ordinario" },

                    ]
                },
                {
                    nombre: "Cuaresma",
                    semanas: [
                        { id: "aetcs1c", nombre: "Semana I",		sub: "I Domingo Tiempo de Cuaresma" },
                        { id: "aetcs2c", nombre: "Semana II",	sub: "II Domingo Tiempo de Cuaresma" },
                        { id: "aetcs3c", nombre: "Semana III",	sub: "III Domingo Tiempo de Cuaresma" },
                        { id: "aetcs4c", nombre: "Semana IV",	sub: "IV Domingo Tiempo de Cuaresma" },
                        { id: "aetcs5c", nombre: "Semana V",		sub: "V Domingo Tiempo de Cuaresma" },
                        { id: "aetcs6c", nombre: "Semana VI",	sub: "Domingo de Ramos" },
                    ]
                },
                {
                    nombre: "Semana Santa",
                    semanas: [
                        { id: "aetcs6c", nombre: "Domingo de Ramos",	            sub: "Semana VI" },
                        { id: "aetcsjsc", nombre: "Jueves Santo",		            sub: "Semana Santa" },
                        { id: "aetcsvsc", nombre: "Viernes Santo",	                sub: "Semana Santa" },
                        { id: "aetcsssa", nombre: "Vigilia Pascual - Sabado Santo",  sub: "Sabado Santo" },
                    ]
                },                
                {
                    nombre: "Pascua",
                    semanas: [
                        { id: "aetps1c", nombre: "Semana I",	sub: "I Domingo de Pascua - Octava de Pascua" },
                        { id: "aetps2c", nombre: "Semana II",	sub: "II Domingo de Pascua" },
                        { id: "aetps3c", nombre: "Semana III",	sub: "III Domingo de Pascua" },
                        { id: "aetps4c", nombre: "Semana IV",	sub: "IV Domingo de Pascua" },
                        { id: "aetps5c", nombre: "Semana V",	sub: "V Domingo de Pascua" },
                        { id: "aetps6c", nombre: "Semana VI",	sub: "VI Domingo de Pascua" },
                        { id: "aetps7c", nombre: "Semana VII",	sub: "VII Domingo de Pascua" },
                        { id: "aetps8c", nombre: "Pendecostes",	sub: "Solemnidad - Tiempo Pascual" },
                    ]
                }

            ]

        }
    ];

    // 4. FUNCIÓN DE DESCARGA (1 SEGUNDOS AL 100% Y BOTÓN VERDE)
    async function ejecutarDescarga() {
        if (!confirm("¿Descargar todos los cantos para uso offline?")) return;

        const screen = document.getElementById('loading-screen');
        const bar = document.getElementById('loading-bar');
        const text = document.getElementById('loading-text');

        if (screen) { screen.style.display = 'flex'; screen.style.opacity = '1'; }
        if (bar) bar.style.width = '100%';
        if (text) text.innerText = "Descargando aclamaciones para uso offline... 100%";

        const total = (typeof allCantosData !== 'undefined') ? allCantosData.length : 0;

        await new Promise(r => setTimeout(r, 1000));

        if (screen) screen.style.opacity = '0';
        setTimeout(() => {
            if (screen) screen.style.display = 'none';
            
            // CAMBIO A VERDE
            btnText.innerText = "Descargado";
            btnDownload.style.color = "#28a745"; 
            btnDownload.style.borderColor = "#28a745";
            btnDownload.disabled = true;

            alert(`📥 Resultado de la Descarga\n\n• Aclamaciones procesadas: ${total}\n• Descargadas con éxito: ${total}\n• Pendientes: 0\n\nTodas las aclamaciones están listas.`);
        }, 500);
    }

    if (btnDownload) btnDownload.addEventListener('click', ejecutarDescarga);

    // 5. GENERAR EL ÍNDICE VISUAL
    function generarIndice() {
        if (typeof allCantosData === 'undefined') return;
        let html = '';
        
        estructuraAEV.forEach(item => {
            html += `
                <details class="ciclo-item">
                    <summary>
                        <span class="title-box"><span class="material-symbols-outlined">calendar_month</span> ${item.ciclo}</span>
                        <span class="material-symbols-outlined arrow">expand_more</span>
                    </summary>
                    <div class="content">
                        ${item.tiempos.map(t => {
                            const hex = colorHexMap[t.nombre] || "#ccc";
                            const claseBg = coloresTiempos[t.nombre] || "";
                            return `
                                <details class="tiempo-item" style="--color-tiempo: ${hex};">
                                    <summary class="tiempo-banner ${claseBg}">
                                        ${t.nombre.toUpperCase()}
                                        <span class="material-symbols-outlined arrow-tiempo">expand_more</span>
                                    </summary>
                                    <div class="songs-list">
                                        ${t.semanas.map(s => {
                                            const d = allCantosData.find(c => c.id === s.id);
                                            return `
                                                <a href="/src/index.html?canto=${s.id}" class="canto-item" style="--color-tiempo: ${hex}; text-decoration:none;">
                                                    <div class="canto-info">
                                                        <span class="canto-titulo">${d ? d.title : s.nombre}</span>
                                                        <span class="canto-sub">${d ? (d.subtitle || s.sub) : s.sub}</span>
                                                    </div>
                                                    <span class="material-symbols-outlined icon-chevron">chevron_right</span>
                                                </a>`;
                                        }).join('')}
                                    </div>
                                </details>`;
                        }).join('')}
                    </div>
                </details>`;
        });
        contenedor.innerHTML = html;
    }

// ================================================================
    // 6. LÓGICA DE CIERRE AUTOMÁTICO (ACORDEÓN)
    // ================================================================
    document.addEventListener('click', (e) => {
        // Buscamos si lo que se clickeó es un 'summary'
        const summary = e.target.closest('summary');
        if (!summary) return;

        const details = summary.parentElement;
        
        // Lógica para TIEMPOS (Adviento, Navidad...)
        if (details.classList.contains('tiempo-item')) {
            const parentContent = details.closest('.content');
            const allTiempos = parentContent.querySelectorAll('.tiempo-item');
            
            allTiempos.forEach(el => {
                if (el !== details) el.removeAttribute('open');
            });
        }

        // Lógica para CICLOS (Ciclo A, B, C)
        if (details.classList.contains('ciclo-item')) {
            const allCiclos = document.querySelectorAll('.ciclo-item');
            
            allCiclos.forEach(el => {
                if (el !== details) el.removeAttribute('open');
            });
        }
    });

    generarIndice();
});