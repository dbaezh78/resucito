import fs from 'node:fs';
import path from 'node:path';

const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');

const REPLACEMENTS_CUARESMA = {
  '(Mi,m,0)(Re,,10)':'(Mi,m,0)(Re,,100)'
};

function processElements(items) {
  let changed = false;
  if (!Array.isArray(items)) return false;

  items.forEach(item => {
    if (item.lines && Array.isArray(item.lines)) {
      if (processElements(item.lines)) changed = true;
    }

    if (typeof item.line === 'string') {
      const trimmed = item.line.trim();
      if (REPLACEMENTS_CUARESMA[trimmed]) {
        item.line = REPLACEMENTS_CUARESMA[trimmed];
        changed = true;
      }
    }
  });

  return changed;
}

function run() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Error: No existe la ruta ${TARGET_DIR}`);
    return;
  }

  // Filtrar exclusivamente archivos aetc*.json
  const files = fs.readdirSync(TARGET_DIR).filter(file => {
    return file.startsWith('aetc') && file.endsWith('.json');
  });

  console.log(`Procesando ${files.length} archivos de Cuaresma...\n`);
  let count = 0;

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      let modified = false;

      if (processElements(data.lizq)) modified = true;
      if (processElements(data.lder)) modified = true;

      if (modified) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`✔ Actualizado (Cuaresma): ${file}`);
        count++;
      }
    } catch (err) {
      console.error(`✖ Error en ${file}:`, err.message);
    }
  });

  console.log(`\nCompletado. Archivos de Cuaresma modificados: ${count}`);
}

run();