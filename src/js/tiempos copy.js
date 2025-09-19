const tiemposLiturgicos = {
    // Ejemplo de un año litúrgico (2024-2025)
    'C': [
        // Adviento y Navidad (finales de 2024)
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2024-12-01', fin: '2024-12-24', semanas: 4, tipo: 'semanas' },
        { tiempo: 'Navidad', codigo: 'tn', inicio: '2024-12-25', fin: '2025-01-12', semanas: 2, tipo: 'semanas' },
        { tiempo: 'Cuaresma', codigo: 'tc', inicio: '2025-03-05', fin: '2025-04-19', semanas: 6, tipo: 'semanas' },
        { tiempo: 'Pascua', codigo: 'tp', inicio: '2025-04-20', fin: '2025-06-08', semanas: 7, tipo: 'semanas' },
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-01-13', fin: '2025-03-04', semanas: 34, tipo: 'semanas', inicioSemana: 2 }, // Ordinario I
        { tiempo: 'Ordinario', codigo: 'to', inicio: '2025-06-09', fin: '2025-11-29', semanas: 34, tipo: 'semanas', inicioSemana: 9 }, // Ordinario II

        // Fiestas del Señor (añade las que necesites)
        { fiesta: 'Fiestas del Señor', codigo: 'fds', inicio: '2025-06-19', tipo: 'fiesta' },
        { fiesta: 'Corpus Christi', codigo: 'cc', inicio: '2025-06-22', tipo: 'fiesta' }
    ],
    'A': [
        // Aquí irían los datos para el ciclo A (2025-2026)
        // Por ejemplo: Adviento 2025, Navidad 2025-2026, Cuaresma 2026...
        { tiempo: 'Adviento', codigo: 'ta', inicio: '2025-11-30', fin: '2025-12-24', semanas: 4, tipo: 'semanas' },
        // ... (resto de los tiempos y fiestas)
    ],
    'B': [
        // Aquí irían los datos para el ciclo B
    ]
};