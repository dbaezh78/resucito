import fs from 'node:fs';
import path from 'node:path';

// Cambia a la carpeta donde están los archivos (si es 'a', añade '/a')
const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');

// Búsquedas y sus reemplazos directos
const REPLACEMENTS = [
  {
    search: '(Mi,m,0)(Re,,10)(Mi,m,20)',
    replace: '(Mi,m,0)(Re,,100)(Mi,m,200)'
  },
  {
    search: '(Do,,0)(Mi,,10)(La,m,20)',
    replace: '(Do,,0)(Mi,,100)(La,m,200)'
  },
  {
    search: '(Mi,m,0)(La,m,10)(Mi,m,20)',
    replace: '(Mi,m,0)(La,m,100)(Mi,m,200)'
  }
];

function run() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Error: No existe el directorio ${TARGET_DIR}`);
    return;
  }

  // Filtrar archivos regulares (excluyendo aetc)
  const validPrefixes = ['aeta', 'aeto', 'aetn', 'aetp'];
  const files = fs.readdirSync(TARGET_DIR).filter(file => {
    return file.endsWith('.json') &&
           !file.startsWith('aetc') &&
           validPrefixes.some(pref => file.startsWith(pref));
  });

  console.log(`Evaluando ${files.length} archivos en: ${TARGET_DIR}\n`);
  let count = 0;

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      REPLACEMENTS.forEach(({ search, replace }) => {
        if (content.includes(search)) {
          content = content.replaceAll(search, replace);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✔ Archivo modificado: ${file}`);
        count++;
      }
    } catch (err) {
      console.error(`✖ Error en ${file}:`, err.message);
    }
  });

  console.log(`\n========================================`);
  console.log(`Total de archivos cambiados: ${count}`);
  console.log(`========================================`);
}

run();