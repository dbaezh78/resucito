// Este objeto contiene las fiestas con fecha definida, organizadas por mes.
const fiestasDeFechaFija = {
    'enero': [
        { nombre: 'Santa María, Madre de Dios', fecha: '1 de enero', url: 'fsm1ene' },
        { nombre: 'Epifanía del Señor', fecha: '6 de enero (o el domingo siguiente)', url: 'fe6ene' }
    ],
    'febrero': [
        { nombre: 'Presentación del Señor', fecha: '2 de febrero', url: 'fsm2feb' },
    ],    
    'marzo': [
        { nombre: 'San José', fecha: '19 de marzo', url: 'fjs19mar' },
        { nombre: 'Anunciación del Señor', fecha: '25 de marzo', url: 'fas25mar' }
    ],
    'Abril': [
        { nombre: 'Domingo de Resurección', fecha: '', url: 'fsmabr' },
    ],        
    'mayo': [
        { nombre: 'Visitación de María a Isabel', fecha: '31 de mayo', url: 'fvm31may' }
    ],
    'junio': [
        { nombre: 'Nacimiento de San Juan Bautista', fecha: '24 de junio', url: 'fnsjb24jun' },
        { nombre: 'San Pedro y San Pablo', fecha: '29 de junio', url: 'fspp29jun' }
    ],
    'agosto': [
        { nombre: 'Transfiguración del Señor', fecha: '6 de agosto', url: 'fts6ago' },
        { nombre: 'Asunción de la Santísima Virgen María', fecha: '15 de agosto', url: 'favm15ago' },
        { nombre: 'Santa María, Reina', fecha: '22 de agosto', url: 'fsmr22ago' }
    ],
    'septiembre': [
        { nombre: 'Natividad de María', fecha: '8 de septiembre', url: 'fnm8sep' }
    ],
    'noviembre': [
        { nombre: 'Todos los Santos', fecha: '1 de noviembre', url: 'ftls1nov' },
        { nombre: 'Todos los Fieles Difuntos', fecha: '2 de noviembre', url: 'ftfd2nov' }
    ],
    'diciembre': [
        { nombre: 'Inmaculada Concepción de María', fecha: '8 de diciembre', url: 'ficm8dic' },
        { nombre: 'Natividad del Señor (Navidad)', fecha: '25 de diciembre', url: 'aitns25dicmmb' }
    ]
};

// Tabla de fechas completa para el Tiempo Ordinario de 2025 (Ciclo C)
const ordinaryTimeWeeksC = [
    // Primer período
    { semana: 1, inicio: '2025-01-13', fin: '2025-01-18' },
    { semana: 2, inicio: '2025-01-19', fin: '2025-01-25' },
    { semana: 3, inicio: '2025-01-26', fin: '2025-02-01' },
    { semana: 4, inicio: '2025-02-02', fin: '2025-02-08' },
    { semana: 5, inicio: '2025-02-09', fin: '2025-02-15' },
    { semana: 6, inicio: '2025-02-16', fin: '2025-02-22' },
    { semana: 7, inicio: '2025-02-23', fin: '2025-03-01' },
    { semana: 8, inicio: '2025-03-02', fin: '2025-03-08' },
    { semana: 9, inicio: '2025-03-09', fin: '2025-03-15' },
    // Segundo período
    { semana: 10, inicio: '2025-06-09', fin: '2025-06-14' },
    { semana: 11, inicio: '2025-06-15', fin: '2025-06-21' },
    { semana: 12, inicio: '2025-06-22', fin: '2025-06-28' },
    { semana: 13, inicio: '2025-06-29', fin: '2025-07-05' },
    { semana: 14, inicio: '2025-07-06', fin: '2025-07-12' },
    { semana: 15, inicio: '2025-07-13', fin: '2025-07-19' },
    { semana: 16, inicio: '2025-07-20', fin: '2025-07-26' },
    { semana: 17, inicio: '2025-07-27', fin: '2025-08-02' },
    { semana: 18, inicio: '2025-08-03', fin: '2025-08-09' },
    { semana: 19, inicio: '2025-08-10', fin: '2025-08-16' },
    { semana: 20, inicio: '2025-08-17', fin: '2025-08-23' },
    { semana: 21, inicio: '2025-08-24', fin: '2025-08-30' },
    { semana: 22, inicio: '2025-08-31', fin: '2025-09-06' },
    { semana: 23, inicio: '2025-09-07', fin: '2025-09-13' },
    { semana: 24, inicio: '2025-09-14', fin: '2025-09-20' },
    { semana: 25, inicio: '2025-09-21', fin: '2025-09-27' },
    { semana: 26, inicio: '2025-09-28', fin: '2025-10-04' },
    { semana: 27, inicio: '2025-10-05', fin: '2025-10-11' },
    { semana: 28, inicio: '2025-10-12', fin: '2025-10-18' },
    { semana: 29, inicio: '2025-10-19', fin: '2025-10-25' },
    { semana: 30, inicio: '2025-10-26', fin: '2025-11-01' },
    { semana: 31, inicio: '2025-11-02', fin: '2025-11-08' },
    { semana: 32, inicio: '2025-11-09', fin: '2025-11-15' },
    { semana: 33, inicio: '2025-11-16', fin: '2025-11-22' },
    { semana: 34, inicio: '2025-11-23', fin: '2025-11-29' }
];

const tiemposLiturgicos = {
    'A': [
        // Año Litúrgico 2025-2026
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2025-11-30', fin: '2025-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2025-12-25', fin: '2026-01-11', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2026-01-12', fin: '2026-02-21', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2026-02-22', fin: '2026-04-04', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2026-04-05', fin: '2026-05-23', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2026-05-24', fin: '2026-11-28', semanas: 34, tipo: 'semanas', inicioSemana: 9 },
        { 
            tiempo: 'Fiestas del Señor', 
            codigo: 'fds', 
            tipo: 'fiestas',
            fiestas: {
                ...fiestasDeFechaFija,
                'pascua': [
                    { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua', url: 'ftasc' },
                    { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés', url: 'fcc' },
                    { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio', url: 'fscj' },
                    { nombre: 'Inmaculado Corazón de María', fecha: 'En junio', url: 'ficm' }
                ]
            }
        }
    ],
    'B': [
        // Año Litúrgico 2026-2027
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2026-11-29', fin: '2026-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2026-12-25', fin: '2027-01-10', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2027-01-11', fin: '2027-02-09', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2027-02-10', fin: '2027-03-27', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2027-03-28', fin: '2027-05-15', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2027-05-16', fin: '2027-11-27', semanas: 34, tipo: 'semanas', inicioSemana: 9 },
        { 
            tiempo: 'Fiestas del Señor', 
            codigo: 'fds', 
            tipo: 'fiestas',
            fiestas: {
                ...fiestasDeFechaFija,
                'pascua': [
                    { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua', url: 'ftasc' },
                    { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés', url: 'fcc' },
                    { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio', url: 'fscj' },
                    { nombre: 'Inmaculado Corazón de María', fecha: 'En junio', url: 'ficm' }
                ]
            }
        }
    ],
    'C': [
        // Año Litúrgico 2024-2025
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2024-12-01', fin: '2024-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2024-12-25', fin: '2025-01-12', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-01-13', fin: '2025-03-04', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2025-03-05', fin: '2025-04-19', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2025-04-20', fin: '2025-06-08', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-06-09', fin: '2025-11-29', semanas: 34, tipo: 'semanas', inicioSemana: 9 },
        { 
            tiempo: 'Fiestas del Señor', 
            codigo: 'fds', 
            tipo: 'fiestas',
            fiestas: {
                ...fiestasDeFechaFija,
                'pascua': [
                    { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua', url: 'ftasc' },
                    { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés', url: 'fcc' },
                    { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio', url: 'fscj' },
                    { nombre: 'Inmaculado Corazón de María', fecha: 'En junio', url: 'ficm' }
                ]
            }
        }
    ]
};