document.addEventListener('DOMContentLoaded', () => {
    const infoHeader = document.getElementById('fecha-actual');
    const diaSemanaSpan = document.getElementById('dia-semana');
    const fechaCompletaSpan = document.getElementById('fecha-completa');
    const tiempoActualDiv = document.getElementById('tiempo-actual');
    
    const cicloBtns = document.querySelectorAll('.ciclo-btn');
    const tiemposContainer = document.getElementById('tiempos-container');
    const semanasContainer = document.getElementById('semanas-container');

    const getCicloLiturgico = (year) => {
        const remainder = (year - 1) % 3;
        if (remainder === 0) return 'A';
        if (remainder === 1) return 'B';
        if (remainder === 2) return 'C';
    };
    
    // CORRECCIÓN: Inicializar el ciclo con el valor calculado para el año actual
    let selectedCiclo = getCicloLiturgico(new Date().getFullYear());
    let selectedTiempo = null;
    let selectedSemana = null;
    let urlBase = '/src/ainterleccional.html?canto=';

// *****************************************

const getInfoLiturgicaActual = () => {
    const today = new Date();
    // Usar Date.UTC para una comparación fiable, evitando problemas de zona horaria
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    
    const diaSemana = today.toLocaleString('es-ES', { weekday: 'long' });
    const fechaCompleta = today.toLocaleDateString('es-ES');
    
    let cicloActual = getCicloLiturgico(today.getFullYear());
    // Si el mes es noviembre o diciembre, y la fecha es a partir del primer domingo de Adviento,
    // el ciclo litúrgico del año actual ya no es el de ese año, sino el del siguiente.
    if (today.getMonth() >= 10) { // Noviembre o Diciembre (0-index)
        // Lógica para el primer domingo de Adviento
        const firstSundayOfAdvent = new Date(today.getFullYear(), 11, 1);
        while (firstSundayOfAdvent.getDay() !== 0) { // getDay() returns 0 for Sunday
            firstSundayOfAdvent.setDate(firstSundayOfAdvent.getDate() + 1);
        }
        if (today >= firstSundayOfAdvent) {
            cicloActual = getCicloLiturgico(today.getFullYear() + 1);
        }
    }
    
    let info = {
        dia: diaSemana,
        fecha: fechaCompleta,
        tiempo: 'Tiempo Ordinario', // Valor por defecto
        semana: '' // Valor por defecto
    };

    // Buscamos el tiempo litúrgico actual en el objeto `tiemposLiturgicos`
    const tiempos = tiemposLiturgicos[cicloActual];
    if (tiempos) {
        for (const tiempo of tiempos) {
            if (tiempo.tipo === 'semanas') {
                const inicio = new Date(tiempo.inicio);
                const fin = new Date(tiempo.fin);
                if (today >= inicio && today <= fin) {
                    info.tiempo = tiempo.tiempo;
                    // Lógica para calcular la semana
                    if (tiempo.codigo === 'to' && tiempo.hasOwnProperty('inicioSemana')) {
                        // Es Tiempo Ordinario, hay que calcular la semana
                        const inicioOrdinario = new Date(tiempo.inicio);
                        const diffTime = Math.abs(today - inicioOrdinario);
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                        const weekNumber = Math.floor(diffDays / 7) + tiempo.inicioSemana;
                        info.semana = `, Semana ${weekNumber}`;
                    } else if (tiempo.codigo === 'tc' || tiempo.codigo === 'tp' || tiempo.codigo === 'ta' || tiempo.codigo === 'tn') {
                        // Cuaresma, Pascua, Adviento, Navidad
                        const weeks = ordinaryTimeWeeks[tiempo.tiempo];
                        if (weeks) {
                            for (const week of weeks) {
                                const weekStart = new Date(week.inicio);
                                const weekEnd = new Date(week.fin);
                                if (today >= weekStart && today <= weekEnd) {
                                    info.semana = `, Semana ${week.semana}`;
                                    break;
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    }

    // Lógica para Fiestas
    const fiestas = tiemposLiturgicos[cicloActual].find(t => t.tipo === 'fiestas');
    if (fiestas) {
        const todayMonth = today.toLocaleString('es-ES', { month: 'long' });
        const todayDay = today.getDate();
        const fiestasMes = fiestas.fiestas[todayMonth];
        if (fiestasMes) {
            const fiestaHoy = fiestasMes.find(f => f.fecha.startsWith(todayDay.toString()));
            if (fiestaHoy) {
                info.tiempo = fiestaHoy.nombre;
                info.semana = '';
            }
        }
    }
    
    return info;
};
    const displayTiempos = (ciclo) => {
        const tiempos = tiemposLiturgicos[ciclo];
        if (!tiempos) return;
        
        tiemposContainer.innerHTML = '';
        semanasContainer.innerHTML = '';

        tiempos.forEach(tiempo => {
            const tiempoBtn = document.createElement('button');
            tiempoBtn.classList.add('tiempo-btn');
            tiempoBtn.textContent = tiempo.tiempo;
            tiempoBtn.addEventListener('click', () => {
                tiemposContainer.querySelectorAll('.tiempo-btn').forEach(btn => btn.classList.remove('selected'));
                tiempoBtn.classList.add('selected');
                selectedTiempo = tiempo;
                displaySemanas(tiempo);
            });
            tiemposContainer.appendChild(tiempoBtn);
        });
    };

    const displaySemanas = (tiempo) => {
        semanasContainer.innerHTML = '';
        selectedSemana = null;

        if (tiempo.tipo === 'semanas') {
            let semanas = [];
            if (tiempo.codigo === 'to') {
                // Lógica para generar las semanas del Tiempo Ordinario
                let startWeek = tiempo.inicioSemana || 1;
                let numSemanas = tiempo.semanas;
                for (let i = 0; i < numSemanas; i++) {
                    semanas.push({ semana: startWeek + i });
                }
            } else {
                // Lógica para generar las semanas de otros tiempos
                semanas = ordinaryTimeWeeks[tiempo.tiempo] || [];
            }

            semanas.forEach(semana => {
                const semanaBtn = document.createElement('button');
                semanaBtn.classList.add('semana-btn');
                semanaBtn.textContent = `Semana ${semana.semana}`;
                semanaBtn.addEventListener('click', () => {
                    semanasContainer.querySelectorAll('.semana-btn').forEach(btn => btn.classList.remove('selected'));
                    semanaBtn.classList.add('selected');
                    selectedSemana = semana.semana;
                });
                semanasContainer.appendChild(semanaBtn);
            });
        } else if (tiempo.tipo === 'fiestas') {
            // Lógica para las fiestas
            const mesesContainer = document.createElement('div');
            mesesContainer.classList.add('meses-container');
            semanasContainer.appendChild(mesesContainer);
            
            const fiestasContainer = document.createElement('div');
            fiestasContainer.classList.add('fiestas-container');
            semanasContainer.appendChild(fiestasContainer);

            Object.keys(tiempo.fiestas).forEach(mes => {
                const mesBtn = document.createElement('button');
                mesBtn.classList.add('mes-btn');
                mesBtn.textContent = mes.charAt(0).toUpperCase() + mes.slice(1);
                mesBtn.dataset.mes = mes;
                mesBtn.addEventListener('click', () => {
                    mesesContainer.querySelectorAll('.mes-btn').forEach(btn => btn.classList.remove('selected'));
                    mesBtn.classList.add('selected');
                    fiestasContainer.innerHTML = '';
                    tiempo.fiestas[mes].forEach(fiesta => {
                        const btn = document.createElement('button');
                        btn.classList.add('fiesta-btn');
                        btn.textContent = `${fiesta.nombre} (${fiesta.fecha})`;
                        btn.dataset.url = fiesta.url;
                        btn.addEventListener('click', () => {
                            window.location.href = urlBase + fiesta.url;
                        });
                        fiestasContainer.appendChild(btn);
                    });
                });
                mesesContainer.appendChild(mesBtn);
            });

            const primerMes = Object.keys(tiempo.fiestas)[0];
            if (primerMes) {
                const primerBoton = mesesContainer.querySelector(`[data-mes=\"${primerMes}\"]`);
                if (primerBoton) {
                    primerBoton.click();
                }
            }
        }
    };
    
    const info = getInfoLiturgicaActual();
    diaSemanaSpan.textContent = info.dia;
    fechaCompletaSpan.textContent = info.fecha;
    tiempoActualDiv.textContent = `${info.tiempo}${info.semana}`;
    
    // Marcar el ciclo actual por defecto
    cicloBtns.forEach(btn => {
        const ciclo = btn.textContent.split(' ')[1];
        if (ciclo === selectedCiclo) {
            btn.classList.add('selected');
        }
    });

    // Event listeners para los botones de ciclo
    cicloBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cicloBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedCiclo = btn.textContent.split(' ')[1];
            displayTiempos(selectedCiclo);
        });
    });

    // Mostrar los tiempos del ciclo inicial
    displayTiempos(selectedCiclo);
});