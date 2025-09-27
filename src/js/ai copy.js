document.addEventListener('DOMContentLoaded', () => {
    const infoHeader = document.getElementById('fecha-actual');
    const diaSemanaSpan = document.getElementById('dia-semana');
    const fechaCompletaSpan = document.getElementById('fecha-completa');
    const tiempoActualDiv = document.getElementById('tiempo-actual');
    
    const cicloBtns = document.querySelectorAll('.ciclo-btn');
    const tiemposContainer = document.getElementById('tiempos-container');
    const semanasContainer = document.getElementById('semanas-container');
    const goButton = document.getElementById('go-button');

    let selectedCiclo = 'C'; 
    let selectedTiempo = null;
    let selectedSemana = null;
    let urlBase = '/src/ainterleccional.html?canto=';

    const getCicloLiturgico = (year) => {
        const remainder = (year - 1) % 3;
        if (remainder === 0) return 'A';
        if (remainder === 1) return 'B';
        if (remainder === 2) return 'C';
    };

    const getInfoLiturgicaActual = () => {
        const today = new Date();
        const year = today.getFullYear();
        const diaSemana = today.toLocaleString('es-ES', { weekday: 'long' });
        const fechaCompleta = today.toLocaleDateString('es-ES');
        
        let cicloActual = getCicloLiturgico(year);
        // Si el mes es noviembre o diciembre, el ciclo litúrgico cambia para el próximo año.
        if (today.getMonth() >= 11) {
            cicloActual = getCicloLiturgico(year + 1);
        }
        
        const infoCiclo = tiemposLiturgicos[cicloActual];
        let infoActual = null;

        infoCiclo.forEach(item => {
            const inicio = new Date(item.inicio);
            const fin = new Date(item.fin);
            if (today >= inicio && today <= fin) {
                infoActual = item;
            }
        });
        
        if (!infoActual) {
            return {
                tiempo: 'Tiempo Ordinario',
                semana: '',
                dia: diaSemana,
                fecha: fechaCompleta
            };
        }
        
        let semanaTexto = '';
        if (infoActual.tipo === 'semanas') {
            const oneDay = 24 * 60 * 60 * 1000;
            const inicioSemanaDate = new Date(infoActual.inicio);
            const diasPasados = Math.floor((today - inicioSemanaDate) / oneDay);
            
            if (infoActual.inicioSemana) {
                const semanaActual = infoActual.inicioSemana + Math.floor(diasPasados / 7);
                semanaTexto = `, Semana ${semanaActual}`;
            } else {
                const semanaActual = Math.floor(diasPasados / 7) + 1;
                semanaTexto = `, Semana ${semanaActual}`;
            }
        }
        
        return {
            tiempo: infoActual.tiempo,
            semana: semanaTexto,
            dia: diaSemana,
            fecha: fechaCompleta
        };
    };

    const displayTiempos = (ciclo) => {
        tiemposContainer.innerHTML = '';
        semanasContainer.innerHTML = '';
        const tiempos = tiemposLiturgicos[ciclo];
        
        if (!tiempos) {
            tiemposContainer.innerHTML = '<p>No hay datos disponibles para este ciclo.</p>';
            return;
        }

        const tiempoBtns = document.createElement('div');
        tiempoBtns.classList.add('tiempo-botones');
        tiemposContainer.appendChild(tiempoBtns);
        
        tiempos.forEach(item => {
            const btn = document.createElement('button');
            btn.classList.add('tiempo-btn');
            btn.textContent = item.tiempo;
            btn.dataset.codigo = item.codigo;
            btn.dataset.tipo = item.tipo;
            btn.dataset.semanas = item.semanas || 1;
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tiempo-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedTiempo = item;
                displaySemanas(item);
            });
            tiempoBtns.appendChild(btn);
        });
    };
    
    const displaySemanas = (tiempo) => {
        semanasContainer.innerHTML = '';
        if (tiempo.tipo === 'semanas') {
            const semanasDiv = document.createElement('div');
            semanasDiv.classList.add('semana-botones');
            semanasContainer.appendChild(semanasDiv);
            
            let totalSemanas = tiempo.semanas;
            
            // Si es el Tiempo Ordinario, siempre muestra las 34 semanas completas
            if (tiempo.codigo === 'to') {
                totalSemanas = 34;
            }
            
            for (let i = 1; i <= totalSemanas; i++) {
                const btn = document.createElement('button');
                btn.classList.add('semana-btn');
                btn.textContent = i;
                btn.dataset.numero = i;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.semana-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedSemana = i;
                    const url = `${urlBase}ai${tiempo.codigo}s${selectedSemana}${selectedCiclo.toLowerCase()}`;
                    window.location.href = url;
                });
                semanasDiv.appendChild(btn);
            }
        } else if (tiempo.tipo === 'fiestas') {
            const mesesContainer = document.createElement('div');
            mesesContainer.classList.add('meses-container');
            semanasContainer.appendChild(mesesContainer);

            const fiestasContainer = document.createElement('div');
            fiestasContainer.classList.add('fiestas-mes');
            semanasContainer.appendChild(fiestasContainer);

            for (const mes in tiempo.fiestas) {
                const mesBtn = document.createElement('button');
                mesBtn.classList.add('mes-btn');
                mesBtn.textContent = mes.charAt(0).toUpperCase() + mes.slice(1);
                mesBtn.dataset.mes = mes;
                mesesContainer.appendChild(mesBtn);

                mesBtn.addEventListener('click', () => {
                    document.querySelectorAll('.fiestas-mes').forEach(f => f.innerHTML = '');
                    document.querySelectorAll('.mes-btn').forEach(b => b.classList.remove('selected'));
                    mesBtn.classList.add('selected');

                    const fiestasDelMes = tiempo.fiestas[mes];
                    fiestasDelMes.forEach(fiesta => {
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
            }
             // Selecciona y muestra por defecto el primer mes
            const primerMes = Object.keys(tiempo.fiestas)[0];
            if (primerMes) {
                const primerBoton = mesesContainer.querySelector(`[data-mes="${primerMes}"]`);
                if (primerBoton) {
                    primerBoton.click();
                }
            }
        }
    };
    
    // Inicializar la interfaz
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

    goButton.addEventListener('click', () => {
        if (!selectedTiempo) {
            alert('La paz de Cristo Hermano,\nPor favor, selecciona un tiempo litúrgico.');
            return;
        }
        
        let url = urlBase;
        
        if (selectedTiempo.tipo === 'fiestas') {
             url += `fds-${selectedCiclo.toLowerCase()}`;
             window.location.href = url;
        } else {
            if (!selectedSemana) {
                alert('La paz de Cristo Hermano,\nPor favor, selecciona una semana.');
                return;
            }
            url += `ai${selectedTiempo.codigo}s${selectedSemana}${selectedCiclo.toLowerCase()}`;
            window.location.href = url;
        }
    });
});