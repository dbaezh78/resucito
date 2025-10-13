document.addEventListener('DOMContentLoaded', () => {
    const infoHeader = document.getElementById('fecha-actual');
    const diaSemanaSpan = document.getElementById('dia-semana');
    const fechaCompletaSpan = document.getElementById('fecha-completa');
    const tiempoActualDiv = document.getElementById('tiempo-actual');
    
    const cicloBtns = document.querySelectorAll('.ciclo-btn');
    const tiemposContainer = document.getElementById('tiempos-container');
    const semanasContainer = document.getElementById('semanas-container');
    const goButton = document.getElementById('go-button');

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


//*****************************************














const getInfoLiturgicaActual = () => {
    const today = new Date();
    const todayUTC = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const diaSemana = today.toLocaleString('es-ES', { weekday: 'long' });
    const fechaCompleta = today.toLocaleDateString('es-ES');
    
    let cicloActual = getCicloLiturgico(today.getFullYear());
    
    // Verificar si estamos en Adviento (noviembre/diciembre) que pertenece al próximo año litúrgico
    const mesActual = today.getMonth();
    if (mesActual === 11) {
        const proximoCiclo = getCicloLiturgico(today.getFullYear() + 1);
        const tiemposProximo = tiemposLiturgicos[proximoCiclo];
        const advientoProximo = tiemposProximo.find(t => t.codigo === 'ta');
        
        if (advientoProximo) {
            const inicioAdvientoUTC = Date.UTC(new Date(advientoProximo.inicio).getFullYear(), new Date(advientoProximo.inicio).getMonth(), new Date(advientoProximo.inicio).getDate());
            if (todayUTC >= inicioAdvientoUTC) {
                cicloActual = proximoCiclo;
            }
        }
    }
    
    let infoActual = null;
    let semanaTexto = '';
    
    // Buscar la semana litúrgica en los tiempos del calendario que tienen semanas definidas
    const tiemposConSemanas = ['Ordinario', 'Pascua', 'Cuaresma', 'Adviento', 'Navidad'];
    
    for (const tiempo of tiemposConSemanas) {
        if (ordinaryTimeWeeks[cicloActual]) { // Si es tiempo ordinario
            for (const semana of ordinaryTimeWeeks[cicloActual]) {
                const inicioUTC = Date.UTC(new Date(semana.inicio).getFullYear(), new Date(semana.inicio).getMonth(), new Date(semana.inicio).getDate());
                const finUTC = Date.UTC(new Date(semana.fin).getFullYear(), new Date(semana.fin).getMonth(), new Date(semana.fin).getDate());
                
                if (todayUTC >= inicioUTC && todayUTC <= finUTC) {
                    infoActual = { tiempo: 'Tiempo Ordinario', codigo: 'to' };
                    semanaTexto = `, Semana ${semana.semana}`;
                    break;
                }
            }
        }
        
        if (infoActual) break;
        
        if (tiemposLiturgicos[cicloActual]) { // Buscar en otros tiempos si no se encontró en el ordinario
            const tiempoLiturgico = tiemposLiturgicos[cicloActual].find(t => t.tiempo === tiempo);
            if (tiempoLiturgico) {
                const semanas = ordinaryTimeWeeks[tiempo];
                if (semanas) {
                    for (const semana of semanas) {
                        const inicioUTC = Date.UTC(new Date(semana.inicio).getFullYear(), new Date(semana.inicio).getMonth(), new Date(semana.inicio).getDate());
                        const finUTC = Date.UTC(new Date(semana.fin).getFullYear(), new Date(semana.fin).getMonth(), new Date(semana.fin).getDate());
                        
                        if (todayUTC >= inicioUTC && todayUTC <= finUTC) {
                            infoActual = { tiempo: tiempoLiturgico.tiempo, codigo: tiempoLiturgico.codigo };
                            semanaTexto = `, Semana ${semana.semana}`;
                            break;
                        }
                    }
                }
            }
        }
        if (infoActual) break;
    }
    
    // Si no se encontró en ninguna semana, buscar en los tiempos generales para obtener el nombre
    if (!infoActual) {
        const infoCiclo = tiemposLiturgicos[cicloActual];
        infoCiclo.forEach(item => {
            const inicioUTC = Date.UTC(new Date(item.inicio).getFullYear(), new Date(item.inicio).getMonth(), new Date(item.inicio).getDate());
            const finUTC = Date.UTC(new Date(item.fin).getFullYear(), new Date(item.fin).getMonth(), new Date(item.fin).getDate());
            
            if (todayUTC >= inicioUTC && todayUTC <= finUTC) {
                infoActual = item;
            }
        });
    }
    
    if (!infoActual) {
        return {
            tiempo: 'No se encontró un tiempo litúrgico',
            semana: '',
            dia: diaSemana,
            fecha: fechaCompleta
        };
    }
    
    return {
        tiempo: infoActual.tiempo,
        semana: semanaTexto,
        dia: diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1),
        fecha: fechaCompleta
    };
};
//*************************************************************************







    //*************************************************************************

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
            const primerMes = Object.keys(tiempo.fiestas)[0];
            if (primerMes) {
                const primerBoton = mesesContainer.querySelector(`[data-mes="${primerMes}"]`);
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
    
    cicloBtns.forEach(btn => {
        const ciclo = btn.textContent.split(' ')[1];
        if (ciclo === selectedCiclo) {
            btn.classList.add('selected');
        }
    });

    cicloBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            cicloBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedCiclo = btn.textContent.split(' ')[1];
            displayTiempos(selectedCiclo);
        });
    });

    displayTiempos(selectedCiclo);

    goButton.addEventListener('click', () => {
        if (!selectedTiempo) {
            alert('La paz de Cristo Hermano,\\nPor favor, selecciona un tiempo litúrgico.');
            return;
        }
        
        let url = urlBase;
        
        if (selectedTiempo.tipo === 'fiestas') {
             url += `fds-${selectedCiclo.toLowerCase()}`;
             window.location.href = url;
        } else {
            if (!selectedSemana) {
                alert('La paz de Cristo Hermano,\\nPor favor, selecciona una semana.');
                return;
            }
            url += `ai${selectedTiempo.codigo}s${selectedSemana}${selectedCiclo.toLowerCase()}`;
            window.location.href = url;
        }
    });
});