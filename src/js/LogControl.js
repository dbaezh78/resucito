// LogControl.js
// 1. Guardamos la función real en una "caja fuerte" global
if (!window.originalConsoleLog) {
    window.originalConsoleLog = console.log;
}

// 2. Definimos la función que controla el estado
window.controlarLogs = (habilitar) => {
    // Si 'habilitar' es true, restauramos el log real.
    // Si es false, lo reemplazamos por una función vacía.
    console.log = habilitar ? window.originalConsoleLog : () => {};
};

// 3. Aplicar estado inicial (Se ejecuta al cargar)
// Si no hay nada en localStorage, el valor será false (Silenciado)
const logsHabilitados = localStorage.getItem('pref-logs-habilitados') === 'true';
window.controlarLogs(logsHabilitados);