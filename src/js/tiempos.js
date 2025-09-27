//db
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
        { nombre: 'Asunción de la Santísima Virgen María', fecha: '15 de agosto', url: 'fsm15ago' },
        { nombre: 'La Transfiguración del Señor', fecha: '6 de agosto', url: 'fts6ago' },
        { nombre: 'Fiesta de San Lorenzo', fecha: '10 de agosto', url: 'fsl10ago' },
        { nombre: 'Santa Clara de Asís', fecha: '11 de agosto', url: 'fsca11ago' },
        { nombre: 'San Agustín', fecha: '28 de agosto', url: 'fsa28ago' },
        { nombre: 'San Juan el Bautista', fecha: '29 de agosto', url: 'fsm29ago' }
    ],
    'septiembre': [
        { nombre: 'Exaltación de la Santa Cruz', fecha: '14 de septiembre', url: 'esc14sep' },
        { nombre: 'Nuestra Señora de los Dolores', fecha: '15 de septiembre', url: 'fsm15sep' },
        { nombre: 'San Vicente de Paúl', fecha: '27 de septiembre', url: 'fsvp27sep' },
        { nombre: 'San Miguel, Gabriel y Rafael, Arcángeles', fecha: '29 de septiembre', url: 'fsmar29sep' }
    ],
    'octubre': [
        { nombre: 'Nuestra Señora del Rosario', fecha: '7 de octubre', url: 'fsm7oct' },
        { nombre: 'San Francisco de Asís', fecha: '4 de octubre', url: 'fsfa4oct' },
        { nombre: 'Santa Teresa de Jesús', fecha: '15 de octubre', url: 'fstj15oct' }
    ],
    'noviembre': [
        { nombre: 'Todos los Santos', fecha: '1 de noviembre', url: 'fts1nov' },
        { nombre: 'Todos los Fieles Difuntos', fecha: '2 de noviembre', url: 'tfd2nov' },
    ],
    'diciembre': [
        { nombre: 'Inmaculada Concepción', fecha: '8 de diciembre', url: 'fic8dic' },
        { nombre: 'Nuestra Señora de Guadalupe', fecha: '12 de diciembre', url: 'fsm12dic' },
        { nombre: 'Navidad del Señor', fecha: '25 de diciembre', url: 'fns25dic' }
    ]
};

// Este objeto contiene las semanas del tiempo ordinario, con inicio en Domingo.
const ordinaryTimeWeeks = {
    'A': [
        // Año Litúrgico 2025-2026
        { semana: 2, inicio: '2026-01-11', fin: '2026-01-17' },
        { semana: 3, inicio: '2026-01-18', fin: '2026-01-24' },
        { semana: 4, inicio: '2026-01-25', fin: '2026-01-31' },
        { semana: 5, inicio: '2026-02-01', fin: '2026-02-07' },
        { semana: 6, inicio: '2026-02-08', fin: '2026-02-14' },
        { semana: 7, inicio: '2026-02-15', fin: '2026-02-17' }, // Parte 1
        { semana: 8, inicio: '2026-05-24', fin: '2026-05-30' },
        { semana: 9, inicio: '2026-05-31', fin: '2026-06-06' },
        { semana: 10, inicio: '2026-06-07', fin: '2026-06-13' },
        { semana: 11, inicio: '2026-06-14', fin: '2026-06-20' },
        { semana: 12, inicio: '2026-06-21', fin: '2026-06-27' },
        { semana: 13, inicio: '2026-06-28', fin: '2026-07-04' },
        { semana: 14, inicio: '2026-07-05', fin: '2026-07-11' },
        { semana: 15, inicio: '2026-07-12', fin: '2026-07-18' },
        { semana: 16, inicio: '2026-07-19', fin: '2026-07-25' },
        { semana: 17, inicio: '2026-07-26', fin: '2026-08-01' },
        { semana: 18, inicio: '2026-08-02', fin: '2026-08-08' },
        { semana: 19, inicio: '2026-08-09', fin: '2026-08-15' },
        { semana: 20, inicio: '2026-08-16', fin: '2026-08-22' },
        { semana: 21, inicio: '2026-08-23', fin: '2026-08-29' },
        { semana: 22, inicio: '2026-08-30', fin: '2026-09-05' },
        { semana: 23, inicio: '2026-09-06', fin: '2026-09-12' },
        { semana: 24, inicio: '2026-09-13', fin: '2026-09-19' },
        { semana: 25, inicio: '2026-09-20', fin: '2026-09-26' },
        { semana: 26, inicio: '2026-09-27', fin: '2026-10-03' },
        { semana: 27, inicio: '2026-10-04', fin: '2026-10-10' },
        { semana: 28, inicio: '2026-10-11', fin: '2026-10-17' },
        { semana: 29, inicio: '2026-10-18', fin: '2026-10-24' },
        { semana: 30, inicio: '2026-10-25', fin: '2026-10-31' },
        { semana: 31, inicio: '2026-11-01', fin: '2026-11-07' },
        { semana: 32, inicio: '2026-11-08', fin: '2026-11-14' },
        { semana: 33, inicio: '2026-11-15', fin: '2026-11-21' },
        { semana: 34, inicio: '2026-11-22', fin: '2026-11-28' },
    ],
    'B': [
        // Año Litúrgico 2026-2027
        { semana: 2, inicio: '2027-01-10', fin: '2027-01-16' },
        { semana: 3, inicio: '2027-01-17', fin: '2027-01-23' },
        { semana: 4, inicio: '2027-01-24', fin: '2027-01-30' },
        { semana: 5, inicio: '2027-01-31', fin: '2027-02-06' },
        { semana: 6, inicio: '2027-02-07', fin: '2027-02-13' }, // Parte 1
        { semana: 7, inicio: '2027-05-16', fin: '2027-05-22' },
        { semana: 8, inicio: '2027-05-23', fin: '2027-05-29' },
        { semana: 9, inicio: '2027-05-30', fin: '2027-06-05' },
        { semana: 10, inicio: '2027-06-06', fin: '2027-06-12' },
        { semana: 11, inicio: '2027-06-13', fin: '2027-06-19' },
        { semana: 12, inicio: '2027-06-20', fin: '2027-06-26' },
        { semana: 13, inicio: '2027-06-27', fin: '2027-07-03' },
        { semana: 14, inicio: '2027-07-04', fin: '2027-07-10' },
        { semana: 15, inicio: '2027-07-11', fin: '2027-07-17' },
        { semana: 16, inicio: '2027-07-18', fin: '2027-07-24' },
        { semana: 17, inicio: '2027-07-25', fin: '2027-07-31' },
        { semana: 18, inicio: '2027-08-01', fin: '2027-08-07' },
        { semana: 19, inicio: '2027-08-08', fin: '2027-08-14' },
        { semana: 20, inicio: '2027-08-15', fin: '2027-08-21' },
        { semana: 21, inicio: '2027-08-22', fin: '2027-08-28' },
        { semana: 22, inicio: '2027-08-29', fin: '2027-09-04' },
        { semana: 23, inicio: '2027-09-05', fin: '2027-09-11' },
        { semana: 24, inicio: '2027-09-12', fin: '2027-09-18' },
        { semana: 25, inicio: '2027-09-19', fin: '2027-09-25' },
        { semana: 26, inicio: '2027-09-26', fin: '2027-10-02' },
        { semana: 27, inicio: '2027-10-03', fin: '2027-10-09' },
        { semana: 28, inicio: '2027-10-10', fin: '2027-10-16' },
        { semana: 29, inicio: '2027-10-17', fin: '2027-10-23' },
        { semana: 30, inicio: '2027-10-24', fin: '2027-10-30' },
        { semana: 31, inicio: '2027-10-31', fin: '2027-11-06' },
        { semana: 32, inicio: '2027-11-07', fin: '2027-11-13' },
        { semana: 33, inicio: '2027-11-14', fin: '2027-11-20' },
        { semana: 34, inicio: '2027-11-21', fin: '2027-11-27' },
    ],
    'C': [
        // Año Litúrgico 2024-2025
        { semana: 2, inicio: '2025-01-12', fin: '2025-01-18' },
        { semana: 3, inicio: '2025-01-19', fin: '2025-01-25' },
        { semana: 4, inicio: '2025-01-26', fin: '2025-02-01' },
        { semana: 5, inicio: '2025-02-02', fin: '2025-02-08' },
        { semana: 6, inicio: '2025-02-09', fin: '2025-02-15' },
        { semana: 7, inicio: '2025-02-16', fin: '2025-02-22' },
        { semana: 8, inicio: '2025-02-23', fin: '2025-03-01' },
        { semana: 9, inicio: '2025-03-02', fin: '2025-03-04' },
        { semana: 10, inicio: '2025-06-08', fin: '2025-06-14' },
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
        { semana: 34, inicio: '2025-11-23', fin: '2025-11-29' },
    ]
};

// Este objeto contiene la información de los tiempos litúrgicos por ciclo
const tiemposLiturgicos = {
    'A': [
        // Año Litúrgico 2025-2026
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2025-11-30', fin: '2025-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2025-12-25', fin: '2026-01-10', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2026-01-11', fin: '2026-02-17', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2026-02-18', fin: '2026-04-04', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2026-04-05', fin: '2026-05-23', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2026-05-24', fin: '2026-11-28', semanas: 34, tipo: 'semanas', inicioSemana: 8 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ],
    'B': [
        // Año Litúrgico 2026-2027
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2026-11-29', fin: '2026-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2026-12-25', fin: '2027-01-09', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2027-01-10', fin: '2027-02-13', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2027-02-14', fin: '2027-03-27', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2027-03-28', fin: '2027-05-15', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2027-05-16', fin: '2027-11-27', semanas: 34, tipo: 'semanas', inicioSemana: 7 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ],
    'C': [
        // Año Litúrgico 2024-2025
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2024-12-01', fin: '2024-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2024-12-25', fin: '2025-01-11', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-01-12', fin: '2025-03-04', semanas: 34, tipo: 'semanas', inicioSemana: 2 },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2025-03-05', fin: '2025-04-19', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2025-04-20', fin: '2025-06-07', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-06-08', fin: '2025-11-29', semanas: 34, tipo: 'semanas', inicioSemana: 10 },
        { tiempo: 'Fiestas', codigo: 'tf', tipo: 'fiestas', fiestas: fiestasDeFechaFija }
    ]
};
