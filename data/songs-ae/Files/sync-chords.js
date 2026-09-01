import fs from 'node:fs';
import path from 'node:path';

// Ajusta a tu carpeta de pruebas o a la principal según necesites
const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');
const BASE_FILE = 'aetcs1a.json';

// Captura acordes al final de una línea o la línea completa si solo son acordes
const CHORD_REGEX = /(\s*,\s*)?(\([A-Za-zÁ-Úá-ú0-9#b/, ]+\))+$/;

function extractChords(lineStr) {
  if (!lineStr || typeof lineStr !== 'string') return null;
  const match = lineStr.match(CHORD_REGEX);
  return match ? match[0] : null;
}

function removeChords(lineStr) {
  if (!lineStr || typeof lineStr !== 'string') return '';
  return lineStr.replace(CHORD_REGEX, '');
}

// Sincroniza un arreglo de elementos (pueden ser líneas directas o bloques)
function syncElements(baseArr, targetArr) {
  if (!Array.isArray(baseArr) || !Array.isArray(targetArr)) return;

  baseArr.forEach((baseItem, idx) => {
    const targetItem = targetArr[idx];
    if (!targetItem) return;

    // Caso 1: Si es un bloque con 'lines'
    if (Array.isArray(baseItem.lines) && Array.isArray(targetItem.lines)) {
      // Sincronizar triggerLine si tiene acordes
      if (typeof baseItem.triggerLine === 'string' && typeof targetItem.triggerLine === 'string') {
        const baseTriggerChord = extractChords(baseItem.triggerLine);
        const targetTriggerText = removeChords(targetItem.triggerLine);
        if (baseTriggerChord) {
          targetItem.triggerLine = targetTriggerText ? `${targetTriggerText}${baseTriggerChord}` : baseTriggerChord.trim();
        }
      }
      syncElements(baseItem.lines, targetItem.lines);
    }

    // Caso 2: Si es una línea individual
    if (typeof baseItem.line === 'string' && typeof targetItem.line === 'string') {
      const baseChord = extractChords(baseItem.line);
      const targetText = removeChords(targetItem.line);

      if (baseChord) {
        // Si la línea base solo tiene acordes (sin texto)
        if (baseItem.line.trim().startsWith('(')) {
          targetItem.line = baseChord.trim();
        } else {
          targetItem.line = targetText ? `${targetText}${baseChord}` : baseChord.trim();
        }
      } else {
        targetItem.line = targetText;
      }
    }
  });
}

function syncFile() {
  const baseFilePath = path.join(TARGET_DIR, BASE_FILE);
  if (!fs.existsSync(baseFilePath)) {
    console.error(`Error: No se encontró el archivo base en ${baseFilePath}`);
    return;
  }

  const baseData = JSON.parse(fs.readFileSync(baseFilePath, 'utf8'));
  const files = fs.readdirSync(TARGET_DIR).filter(file => file.endsWith('.json') && file !== BASE_FILE);

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Sincronizar columna izquierda (lizq)
    if (baseData.lizq && data.lizq) {
      syncElements(baseData.lizq, data.lizq);
    }

    // Sincronizar columna derecha (lder)
    if (baseData.lder && data.lder) {
      syncElements(baseData.lder, data.lder);
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Actualizado correctamente: ${file}`);
  });

  console.log('\nProceso completado.');
}

syncFile();