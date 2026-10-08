// scripts/upload_firebase_seucaristia.cjs
// Sube todos los salmos eucarísticos locales (981) a Firebase Firestore

const fs = require('fs');
const path = require('path');

function serializeValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'string') return { stringValue: val };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    if (Number.isInteger(val)) return { integerValue: String(val) };
    return { doubleValue: val };
  }
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(serializeValue) } };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        fields[k] = serializeValue(v);
      }
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

function sanitizeForFirestore(val) {
  if (val === null || val === undefined) return val;
  if (Array.isArray(val)) {
    return val.map(item => {
      if (Array.isArray(item)) {
        return item.map(sub => Array.isArray(sub) ? sub.join(' ') : String(sub)).join('\n');
      }
      if (typeof item === 'object' && item !== null) {
        return sanitizeForFirestore(item);
      }
      return item;
    });
  }
  if (typeof val === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(val)) {
      if (v !== undefined) {
        res[k] = sanitizeForFirestore(v);
      }
    }
    return res;
  }
  return val;
}

async function uploadDoc(collectionName, docId, obj) {
  const sanitized = sanitizeForFirestore(obj);
  const rootFields = {};
  for (const [k, v] of Object.entries(sanitized)) {
    if (v !== undefined) {
      rootFields[k] = serializeValue(v);
    }
  }

  const url = `https://firestore.googleapis.com/v1/projects/cristoresucito/databases/(default)/documents/${collectionName}/${docId}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: rootFields })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Error subiendo ${collectionName}/${docId}: ${res.status} ${errText}`);
  }
}

async function main() {
  const targetDir = path.resolve(__dirname, '..', 'data', 'seucaristia');
  console.log('🚀 Iniciando subida de salmos eucarísticos a Firebase Firestore...');

  const cycleFiles = ['cicloa.json', 'ciclob.json', 'cicloc.json', 'anopar.json', 'anoimpar.json', 'ferias.json', 'santos.json'];
  const allPsalms = [];
  const seen = new Set();

  cycleFiles.forEach(f => {
    const p = path.join(targetDir, f);
    if (fs.existsSync(p)) {
      const list = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (Array.isArray(list)) {
        list.forEach(item => {
          if (item && item.id && !seen.has(item.id)) {
            seen.add(item.id);
            allPsalms.push(item);
          }
        });
      }
    }
  });

  console.log(`📦 Encontrados ${allPsalms.length} salmos locales para subir.`);

  // 1. Subida individual de cada salmo
  const CHUNK_SIZE = 15;
  let count = 0;
  for (let i = 0; i < allPsalms.length; i += CHUNK_SIZE) {
    const chunk = allPsalms.slice(i, i + CHUNK_SIZE);
    await Promise.all(chunk.map(async p => {
      await uploadDoc('salmos_eucaristia', p.id, p);
      count++;
    }));
    process.stdout.write(`\rProgreso salmos individuales: ${count} / ${allPsalms.length} (${Math.round((count / allPsalms.length) * 100)}%)`);
  }
  console.log('\n✅ Todos los salmos individuales subidos a salmos_eucaristia.');

  // 2. Subida de ciclos empaquetados
  console.log('📦 Guardando paquetes por ciclo...');
  const ciclosMap = {
    'cicloa': allPsalms.filter(p => p.ciclo === 'Ciclo A' || (p.id && p.id.startsWith('seua_'))),
    'ciclob': allPsalms.filter(p => p.ciclo === 'Ciclo B' || (p.id && p.id.startsWith('seub_'))),
    'cicloc': allPsalms.filter(p => p.ciclo === 'Ciclo C' || (p.id && p.id.startsWith('seuc_'))),
    'anopar': allPsalms.filter(p => p.ciclo === 'Año Par' || (p.id && p.id.startsWith('seup_'))),
    'anoimpar': allPsalms.filter(p => p.ciclo === 'Año Impar' || (p.id && p.id.startsWith('seui_'))),
    'ferias': allPsalms.filter(p => p.ciclo === 'Ferias' || (p.id && p.id.startsWith('seuf_')))
  };

  for (const [cicloKey, items] of Object.entries(ciclosMap)) {
    try {
      await uploadDoc('salmos_eucaristia_ciclos', cicloKey, { id: cicloKey, items });
      console.log(`  ✓ Paquete ${cicloKey} guardado (${items.length} salmos)`);
    } catch (e) {
      console.warn(`  ⚠️ Paquete ${cicloKey}:`, e.message);
    }
  }

  console.log('\n🎉 ¡Subida a Firebase Firestore completada con éxito!');
}

main().catch(err => {
  console.error('\n❌ Error fatal:', err);
  process.exit(1);
});
