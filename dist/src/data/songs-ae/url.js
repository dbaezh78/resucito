import fs from 'node:fs';
import path from 'node:path';

// Directorio objetivo
const TARGET_DIR = path.resolve('C:/db/Github/resucito/data/songs-ae');

const OLD_AUDIO_SRC = 'https://audio.resucito.do/aleluyainterleccional.mp3';
const NEW_AUDIO_SRC = 'https://audio.resucito.do/gloriaatiohcristo.mp3';

function updateAudioSrc() {
  if (!fs.existsSync(TARGET_DIR)) {
    console.error(`Error: No existe el directorio ${TARGET_DIR}`);
    return;
  }

  // Filtrar solo archivos JSON que empiecen por "aetc"
  const files = fs.readdirSync(TARGET_DIR).filter(file => {
    return file.startsWith('aetc') && file.endsWith('.json');
  });

  console.log(`Se encontraron ${files.length} archivos que coinciden con el patrón "aetc*.json".\n`);

  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(TARGET_DIR, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(content);

      if (data.audioSrc === OLD_AUDIO_SRC) {
        data.audioSrc = NEW_AUDIO_SRC;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`✔ Actualizado: ${file}`);
        updatedCount++;
      } else {
        console.log(`- Sin cambios (audioSrc diferente o ya actualizado): ${file}`);
      }
    } catch (err) {
      console.error(`✖ Error procesando ${file}:`, err.message);
    }
  });

  console.log(`\nProceso completado. Total de archivos modificados: ${updatedCount}`);
}

updateAudioSrc();