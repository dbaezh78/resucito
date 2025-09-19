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
        if (today.getMonth() >= 11) {
            cicloActual = getCicloLiturgico(year + 1);
        }
        
        const infoCiclo = tiemposLiturgicos[cicloActual];
        let infoActual = null;

        infoCiclo.forEach(item => {
            if (item.tipo === 'semanas') {
                const inicio = new Date(item.inicio);
                const fin = new Date(item.fin);
                if (today >= inicio && today <= fin) {
                    infoActual = item;
                }
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
            const inicioSemana = new Date(infoActual.inicio);
            const diasPasados = Math.floor((today - inicioSemana) / oneDay);
            const semanaActual = Math.floor(diasPasados / 7) + 1;
            semanaTexto = `, Semana ${semanaActual}`;
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
            for (let i = 1; i <= tiempo.semanas; i++) {
                const btn = document.createElement('button');
                btn.classList.add('semana-btn');
                btn.textContent = `${i}`;
                btn.dataset.numero = i;
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.semana-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedSemana = i;
                });
                semanasDiv.appendChild(btn);
            }
        } else if (tiempo.tipo === 'fiestas') {
            const fiestasDiv = document.createElement('div');
            fiestasDiv.classList.add('semana-botones'); // Reutilizamos la clase para el estilo
            semanasContainer.appendChild(fiestasDiv);

            if (tiempo.fiestas && tiempo.fiestas.length > 0) {
                tiempo.fiestas.forEach(fiesta => {
                    const btn = document.createElement('button');
                    btn.classList.add('semana-btn');
                    btn.textContent = `${fiesta.nombre}`;
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.semana-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        // Aquí podrías manejar la selección si cada fiesta tuviera un ID o enlace
                        selectedSemana = null; // Reinicia la semana ya que estamos en fiestas
                    });
                    fiestasDiv.appendChild(btn);
                });
            } else {
                fiestasDiv.innerHTML = '<p>No hay fiestas definidas para este ciclo.</p>';
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
        } else {
            if (!selectedSemana) {
                alert('La paz de Cristo Hermano,\nPor favor, selecciona una semana.');
                return;
            }
            url += `ai${selectedTiempo.codigo}s${selectedSemana}${selectedCiclo.toLowerCase()}`;
        }
        
        window.location.href = url;
    });
});