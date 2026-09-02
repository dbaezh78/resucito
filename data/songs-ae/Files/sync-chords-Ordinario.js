import fs from 'node:fs';
import path from 'node:path';

const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');
const BASE_FILE = 'aetas1a.json';

// Expresión regular para capturar la secuencia de acordes al final de la línea o sola
const CHORD_REGEX = /(\s*,\s*)?(\([A-Za-zÁ-Úá-ú0-9#b/, ]+\))+$/;

function extractChords(lineStr) {
  if (!lineStr) return null;
  const match = lineStr.match(CHORD_REGEX);
  return match ? match[0] : null;
}

function removeChords(lineStr) {
  if (!lineStr) return '';
  return lineStr.replace(CHORD_REGEX, '');
}

function syncFile() {
  const baseFilePath = path.join(TARGET_DIR, BASE_FILE);
  if (!fs.existsSync(baseFilePath)) {
    console.error(`Error: No se encontró el archivo base en ${baseFilePath}`);
    return;
  }

  const baseData = JSON.parse(fs.readFileSync(baseFilePath, 'utf8'));

  // Leer todos los archivos JSON del directorio
  const files = fs.readdirSync(TARGET_DIR).filter(file => file.endsWith('.json') && file !== BASE_FILE);

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    let modified = false;

    // Recorrer los bloques lizq
    if (Array.isArray(data.lizq) && Array.isArray(baseData.lizq)) {
      baseData.lizq.forEach((baseBlock, blockIndex) => {
        const targetBlock = data.lizq[blockIndex];
        if (!targetBlock || !Array.isArray(targetBlock.lines)) return;

        baseBlock.lines.forEach((baseLineObj, lineIndex) => {
          const targetLineObj = targetBlock.lines[lineIndex];
          if (!targetLineObj || typeof targetLineObj.line !== 'string') return;

          const baseChord = extractChords(baseLineObj.line);
          const targetText = removeChords(targetLineObj.line);

          if (baseChord) {
            targetLineObj.line = targetText ? `${targetText}${baseChord}` : baseChord.trim();
          } else {
            targetLineObj.line = targetText;
          }
          modified = true;
        });
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Actualizado: ${file}`);
    }
  });

  console.log('\nProceso completado.');
}

syncFile();