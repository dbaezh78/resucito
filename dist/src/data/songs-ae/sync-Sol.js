import fs from 'node:fs';
import path from 'node:path';

// Ajusta a la carpeta correspondiente ('/a' si sigues en pruebas)
const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');

// Elementos exactos a eliminar cuando sC sea "adb1"
const TARGET_LINES = new Set([
  '(Sol,,0)',
  '(Do,,0)',
  '(Mi,m,0)'
]);

function removeMatchingLines(items) {
  let modified = false;
  if (!Array.isArray(items)) return false;

  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    // Procesar bloques anidados
    if (item.lines && Array.isArray(item.lines)) {
      if (removeMatchingLines(item.lines)) {
        modified = true;
      }
    }

    // Coincidencia con la lista y sC: 'adb1'
    if (item && item.sC === 'adb1' && TARGET_LINES.has(item.line?.trim())) {
      items.splice(i, 1);
      modified = true;
    }
  }

  return modified;
}

function run() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Error: No existe la ruta ${TARGET_DIR}`);
    return;
  }

  // Prefijos permitidos excluyendo explícitamente Cuaresma (aetc)
  const validPrefixes = ['aeta', 'aeto', 'aetn', 'aetp'];
  const files = fs.readdirSync(TARGET_DIR).filter(file => {
    return file.endsWith('.json') &&
           !file.startsWith('aetc') &&
           validPrefixes.some(pref => file.startsWith(pref));
  });

  console.log(`Evaluando ${files.length} archivos regulares (excluyendo aetc)...\n`);
  let count = 0;

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let modified = false;

      if (removeMatchingLines(data.lizq)) modified = true;
      if (removeMatchingLines(data.lder)) modified = true;

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`✔ Elementos eliminados en: ${file}`);
        count++;
      }
    } catch (err) {
      console.error(`✖ Error en ${file}:`, err.message);
    }
  });

  console.log(`\n========================================`);
  console.log(`Total de archivos modificados: ${count}`);
  console.log(`========================================`);
}

run();