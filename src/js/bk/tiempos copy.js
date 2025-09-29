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
    'abril': [
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
        { nombre: 'Asunción de la Virgen María', fecha: '15 de agosto', url: 'favm15ago' }
    ],
    'septiembre': [
        { nombre: 'Nacimiento de la Virgen María', fecha: '8 de septiembre', url: 'fnvm8sep' },
        { nombre: 'Exaltación de la Santa Cruz', fecha: '14 de septiembre', url: 'fesc14sep' }
    ],
    'octubre': [
        { nombre: 'Nuestra Señora del Rosario', fecha: '7 de octubre', url: 'fnsr7oct' }
    ],
    'noviembre': [
        { nombre: 'Todos los Santos', fecha: '1 de noviembre', url: 'fts1nov' },
        { nombre: 'Conmemoración de los Fieles Difuntos', fecha: '2 de noviembre', url: 'cfd2nov' }
    ],
    'diciembre': [
        { nombre: 'La Inmaculada Concepción', fecha: '8 de diciembre', url: 'fic8dic' }
    ]
};

const ordinaryTimeWeeks = {
    'A': [
        // Año Litúrgico 2022-2023
        { semana: 2, inicio: '2023-01-09', fin: '2023-01-14' },
        { semana: 3, inicio: '2023-01-15', fin: '2023-01-21' },
        { semana: 4, inicio: '2023-01-22', fin: '2023-01-28' },
        { semana: 5, inicio: '2023-01-29', fin: '2023-02-04' },
        { semana: 6, inicio: '2023-02-05', fin: '2023-02-11' },
        { semana: 7, inicio: '2023-02-12', fin: '2023-02-18' },
        { semana: 8, inicio: '2023-02-19', fin: '2023-02-25' },
        { semana: 9, inicio: '2023-02-26', fin: '2023-03-04' },
        { semana: 10, inicio: '2023-03-05', fin: '2023-03-11' },
        { semana: 11, inicio: '2023-03-12', fin: '2023-03-18' },
        { semana: 12, inicio: '2023-03-19', fin: '2023-03-25' },
        { semana: 13, inicio: '2023-03-26', fin: '2023-04-01' },
        { semana: 14, inicio: '2023-04-02', fin: '2023-04-08' },
        { semana: 15, inicio: '2023-04-09', fin: '2023-04-15' },
        { semana: 16, inicio: '2023-04-16', fin: '2023-04-22' },
        { semana: 17, inicio: '2023-04-23', fin: '2023-04-29' },
        { semana: 18, inicio: '2023-04-30', fin: '2023-05-06' },
        { semana: 19, inicio: '2023-05-07', fin: '2023-05-13' },
        { semana: 20, inicio: '2023-05-14', fin: '2023-05-20' },
        { semana: 21, inicio: '2023-05-21', fin: '2023-05-27' },
        { semana: 22, inicio: '2023-05-28', fin: '2023-06-03' },
        { semana: 23, inicio: '2023-06-04', fin: '2023-06-10' },
        { semana: 24, inicio: '2023-06-11', fin: '2023-06-17' },
        { semana: 25, inicio: '2023-06-18', fin: '2023-06-24' },
        { semana: 26, inicio: '2023-06-25', fin: '2023-07-01' },
        { semana: 27, inicio: '2023-07-02', fin: '2023-07-08' },
        { semana: 28, inicio: '2023-07-09', fin: '2023-07-15' },
        { semana: 29, inicio: '2023-07-16', fin: '2023-07-22' },
        { semana: 30, inicio: '2023-07-23', fin: '2023-07-29' },
        { semana: 31, inicio: '2023-07-30', fin: '2023-08-05' },
        { semana: 32, inicio: '2023-08-06', fin: '2023-08-12' },
        { semana: 33, inicio: '2023-08-13', fin: '2023-08-19' },
        { semana: 34, inicio: '2023-08-20', fin: '2023-08-26' }
    ],
    'B': [
        // Año Litúrgico 2023-2024
        { semana: 2, inicio: '2024-01-08', fin: '2024-01-13' },
        { semana: 3, inicio: '2024-01-14', fin: '2024-01-20' },
        { semana: 4, inicio: '2024-01-21', fin: '2024-01-27' },
        { semana: 5, inicio: '2024-01-28', fin: '2024-02-03' },
        { semana: 6, inicio: '2024-02-04', fin: '2024-02-10' },
        { semana: 7, inicio: '2024-02-11', fin: '2024-02-17' },
        { semana: 8, inicio: '2024-02-18', fin: '2024-02-24' },
        { semana: 9, inicio: '2024-02-25', fin: '2024-03-02' },
        { semana: 10, inicio: '2024-03-03', fin: '2024-03-09' },
        { semana: 11, inicio: '2024-03-10', fin: '2024-03-16' },
        { semana: 12, inicio: '2024-03-17', fin: '2024-03-23' },
        { semana: 13, inicio: '2024-03-24', fin: '2024-03-30' },
        { semana: 14, inicio: '2024-03-31', fin: '2024-04-06' },
        { semana: 15, inicio: '2024-04-07', fin: '2024-04-13' },
        { semana: 16, inicio: '2024-04-14', fin: '2024-04-20' },
        { semana: 17, inicio: '2024-04-21', fin: '2024-04-27' },
        { semana: 18, inicio: '2024-04-28', fin: '2024-05-04' },
        { semana: 19, inicio: '2024-05-05', fin: '2024-05-11' },
        { semana: 20, inicio: '2024-05-12', fin: '2024-05-18' },
        { semana: 21, inicio: '2024-05-19', fin: '2024-05-25' },
        { semana: 22, inicio: '2024-05-26', fin: '2024-06-01' },
        { semana: 23, inicio: '2024-06-02', fin: '2024-06-08' },
        { semana: 24, inicio: '2024-06-09', fin: '2024-06-15' },
        { semana: 25, inicio: '2024-06-16', fin: '2024-06-22' },
        { semana: 26, inicio: '2024-06-23', fin: '2024-06-29' },
        { semana: 27, inicio: '2024-06-30', fin: '2024-07-06' },
        { semana: 28, inicio: '2024-07-07', fin: '2024-07-13' },
        { semana: 29, inicio: '2024-07-14', fin: '2024-07-20' },
        { semana: 30, inicio: '2024-07-21', fin: '2024-07-27' },
        { semana: 31, inicio: '2024-07-28', fin: '2024-08-03' },
        { semana: 32, inicio: '2024-08-04', fin: '2024-08-10' },
        { semana: 33, inicio: '2024-08-11', fin: '2024-08-17' },
        { semana: 34, inicio: '2024-08-18', fin: '2024-08-24' }
    ],
    'C': [
        // Año Litúrgico 2024-2025
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2024-12-01', fin: '2024-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2024-12-25', fin: '2025-01-12', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-01-13', fin: '2025-03-04', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2025-03-05', fin: '2025-04-19', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2025-04-20', fin: '2025-06-08', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-06-09', fin: '2025-11-29', semanas: 34, tipo: 'semanas', inicioSemana: 10 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ],
    'Pascua': [
        // Año Litúrgico 2024-2025
        { semana: 1, inicio: '2025-04-20', fin: '2025-04-26' },
        { semana: 2, inicio: '2025-04-27', fin: '2025-05-03' },
        { semana: 3, inicio: '2025-05-04', fin: '2025-05-10' },
        { semana: 4, inicio: '2025-05-11', fin: '2025-05-17' },
        { semana: 5, inicio: '2025-05-18', fin: '2025-05-24' },
        { semana: 6, inicio: '2025-05-25', fin: '2025-05-31' },
        { semana: 7, inicio: '2025-06-01', fin: '2025-06-07' }
    ],
    'Cuaresma': [
        // Año Litúrgico 2024-2025
        { semana: 1, inicio: '2025-03-05', fin: '2025-03-08' }, // Miércoles de Ceniza a Sábado
        { semana: 2, inicio: '2025-03-09', fin: '2025-03-15' },
        { semana: 3, inicio: '2025-03-16', fin: '2025-03-22' },
        { semana: 4, inicio: '2025-03-23', fin: '2025-03-29' },
        { semana: 5, inicio: '2025-03-30', fin: '2025-04-05' },
        { semana: 6, inicio: '2025-04-06', fin: '2025-04-12' },
        { semana: 7, inicio: '2025-04-13', fin: '2025-04-19' }
    ],
    'Adviento': [
        // Año Litúrgico 2024-2025
        { semana: 1, inicio: '2024-12-01', fin: '2024-12-07' },
        { semana: 2, inicio: '2024-12-08', fin: '2024-12-14' },
        { semana: 3, inicio: '2024-12-15', fin: '2024-12-21' },
        { semana: 4, inicio: '2024-12-22', fin: '2024-12-24' }
    ],
    'Navidad': [
        // Año Litúrgico 2024-2025
        { semana: 1, inicio: '2024-12-25', fin: '2024-12-31' },
        { semana: 2, inicio: '2025-01-01', fin: '2025-01-12' }
    ]
};

// Este objeto contiene la información principal de cada año (Ciclo A, B, C)
const tiemposLiturgicos = {
    'A': [
        // Año Litúrgico 2022-2023
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2022-11-27', fin: '2022-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2022-12-25', fin: '2023-01-08', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2023-01-09', fin: '2023-02-21', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2023-02-22', fin: '2023-04-08', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2023-04-09', fin: '2023-05-28', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2023-05-29', fin: '2023-12-02', semanas: 34, tipo: 'semanas', inicioSemana: 9 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ],
    'B': [
        // Año Litúrgico 2023-2024
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2023-12-03', fin: '2023-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2023-12-25', fin: '2024-01-07', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2024-01-08', fin: '2024-02-13', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2024-02-14', fin: '2024-03-30', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2024-03-31', fin: '2024-05-19', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2024-05-20', fin: '2024-11-30', semanas: 34, tipo: 'semanas', inicioSemana: 8 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ],
    'C': [
        // Año Litúrgico 2024-2025
        { tiempo: 'Adviento',  codigo: 'ta', inicio: '2024-12-01', fin: '2024-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad',   codigo: 'tn', inicio: '2024-12-25', fin: '2025-01-12', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-01-13', fin: '2025-03-04', semanas: 8, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma',  codigo: 'tc', inicio: '2025-03-05', fin: '2025-04-19', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua',    codigo: 'tp', inicio: '2025-04-20', fin: '2025-06-08', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-06-09', fin: '2025-11-29', semanas: 25, tipo: 'semanas', inicioSemana: 10 },
        { tiempo: 'Fiestas',   codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ]
};