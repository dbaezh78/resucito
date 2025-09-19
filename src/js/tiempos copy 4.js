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
            fiestas: [
                { nombre: 'Santa María, Madre de Dios', fecha: '1 de enero' },
                { nombre: 'Epifanía del Señor', fecha: '6 de enero (o el domingo siguiente)' },
                { nombre: 'San José', fecha: '19 de marzo' },
                { nombre: 'Anunciación del Señor', fecha: '25 de marzo' },
                { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua' },
                { nombre: 'Visitación de María a Isabel', fecha: '31 de mayo' },
                { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés' },
                { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio' },
                { nombre: 'Inmaculado Corazón de María', fecha: 'En junio' },
                { nombre: 'Nacimiento de San Juan Bautista', fecha: '24 de junio' },
                { nombre: 'San Pedro y San Pablo', fecha: '29 de junio' },
                { nombre: 'Transfiguración del Señor', fecha: '6 de agosto' },
                { nombre: 'Asunción de la Santísima Virgen María', fecha: '15 de agosto' },
                { nombre: 'Santa María, Reina', fecha: '22 de agosto' },
                { nombre: 'Natividad de María', fecha: '8 de septiembre' },
                { nombre: 'Todos los Santos', fecha: '1 de noviembre' },
                { nombre: 'Todos los Fieles Difuntos', fecha: '2 de noviembre' },
                { nombre: 'Inmaculada Concepción de María', fecha: '8 de diciembre' },
                { nombre: 'Natividad del Señor (Navidad)', fecha: '25 de diciembre', url: 'aitns25dicmmb' }
            ]
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
            fiestas: [
                { nombre: 'Santa María, Madre de Dios', fecha: '1 de enero' },
                { nombre: 'Epifanía del Señor', fecha: '6 de enero (o el domingo siguiente)' },
                { nombre: 'San José', fecha: '19 de marzo' },
                { nombre: 'Anunciación del Señor', fecha: '25 de marzo' },
                { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua' },
                { nombre: 'Visitación de María a Isabel', fecha: '31 de mayo' },
                { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés' },
                { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio' },
                { nombre: 'Inmaculado Corazón de María', fecha: 'En junio' },
                { nombre: 'Nacimiento de San Juan Bautista', fecha: '24 de junio' },
                { nombre: 'San Pedro y San Pablo', fecha: '29 de junio' },
                { nombre: 'Transfiguración del Señor', fecha: '6 de agosto' },
                { nombre: 'Asunción de la Santísima Virgen María', fecha: '15 de agosto' },
                { nombre: 'Santa María, Reina', fecha: '22 de agosto' },
                { nombre: 'Natividad de María', fecha: '8 de septiembre' },
                { nombre: 'Todos los Santos', fecha: '1 de noviembre' },
                { nombre: 'Todos los Fieles Difuntos', fecha: '2 de noviembre' },
                { nombre: 'Inmaculada Concepción de María', fecha: '8 de diciembre' },
                { nombre: 'Natividad del Señor (Navidad)', fecha: '25 de diciembre', url: 'aitns25dicmmb' }
            ]
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
            fiestas: [
                { nombre: 'Santa María, Madre de Dios', fecha: '1 de enero' },
                { nombre: 'Epifanía del Señor', fecha: '6 de enero (o el domingo siguiente)' },
                { nombre: 'San José', fecha: '19 de marzo' },
                { nombre: 'Anunciación del Señor', fecha: '25 de marzo' },
                { nombre: 'Ascensión del Señor', fecha: 'El Jueves de la Sexta Semana de Pascua' },
                { nombre: 'Visitación de María a Isabel', fecha: '31 de mayo' },
                { nombre: 'Corpus Christi', fecha: 'El Jueves después de la octava de Pentecostés' },
                { nombre: 'Sagrado Corazón de Jesús', fecha: 'En junio' },
                { nombre: 'Inmaculado Corazón de María', fecha: 'En junio' },
                { nombre: 'Nacimiento de San Juan Bautista', fecha: '24 de junio' },
                { nombre: 'San Pedro y San Pablo', fecha: '29 de junio' },
                { nombre: 'Transfiguración del Señor', fecha: '6 de agosto' },
                { nombre: 'Asunción de la Santísima Virgen María', fecha: '15 de agosto' },
                { nombre: 'Santa María, Reina', fecha: '22 de agosto' },
                { nombre: 'Natividad de María', fecha: '8 de septiembre' },
                { nombre: 'Todos los Santos', fecha: '1 de noviembre' },
                { nombre: 'Todos los Fieles Difuntos', fecha: '2 de noviembre' },
                { nombre: 'Inmaculada Concepción de María', fecha: '8 de diciembre' },
                { nombre: 'Natividad del Señor (Navidad)', fecha: '25 de diciembre', url: 'aitns25dicmmb' }
            ]
        }
    ]
};