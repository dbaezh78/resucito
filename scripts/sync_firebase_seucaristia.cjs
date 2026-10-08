// scripts/sync_firebase_seucaristia.cjs
// Sincroniza y descarga salmos eucarísticos desde Firebase Firestore
// y los guarda directamente en la ruta local: data/seucaristia/

const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'data', 'seucaristia');
const distTargetDir = path.resolve(__dirname, '..', 'dist', 'data', 'seucaristia');

// Deserializador universal de Firestore REST API
function deserializeFirestoreValue(val) {
  if (!val) return null;
  if ('stringValue' in val) return val.stringValue;
  if ('integerValue' in val) return parseInt(val.integerValue, 10);
  if ('doubleValue' in val) return parseFloat(val.doubleValue);
  if ('booleanValue' in val) return val.booleanValue;
  if ('nullValue' in val) return null;
  if ('arrayValue' in val) {
    const arr = val.arrayValue.values || [];
    return arr.map(deserializeFirestoreValue);
  }
  if ('mapValue' in val) {
    const fields = val.mapValue.fields || {};
    const res = {};
    for (const [k, v] of Object.entries(fields)) {
      res[k] = deserializeFirestoreValue(v);
    }
    return res;
  }
  return val;
}

function deserializeDoc(doc) {
  const fields = doc.fields || {};
  const res = {};
  for (const [k, v] of Object.entries(fields)) {
    res[k] = deserializeFirestoreValue(v);
  }
  if (!res.id && doc.name) {
    const parts = doc.name.split('/');
    res.id = parts[parts.length - 1];
  }
  return res;
}

async function fetchAllPages(baseUrl) {
  const allDocs = [];
  let nextPageToken = null;

  do {
    const url = nextPageToken 
      ? `${baseUrl}&pageToken=${encodeURIComponent(nextPageToken)}`
      : baseUrl;

    const res = await fetch(url);
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Firestore REST error ${res.status}: ${errText}`);
    }

    const data = await res.json();
    if (data.documents && Array.isArray(data.documents)) {
      allDocs.push(...data.documents);
    }
    nextPageToken = data.nextPageToken || null;
  } while (nextPageToken);

  return allDocs;
}

async function syncSeucaristia() {
  console.log('🔄 Sincronizando salmos eucarísticos desde Firebase Cloud...');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let items = [];

  // 1. Intentar descargar paquetes de ciclos (más rápido)
  try {
    const ciclosUrl = 'https://firestore.googleapis.com/v1/projects/cristoresucito/databases/(default)/documents/salmos_eucaristia_ciclos?pageSize=50';
    const rawCiclos = await fetchAllPages(ciclosUrl);

    if (rawCiclos.length > 0) {
      console.log(`📦 Encontrados ${rawCiclos.length} paquetes de ciclos en Firebase.`);
      rawCiclos.forEach(cd => {
        const cObj = deserializeDoc(cd);
        if (Array.isArray(cObj.items)) {
          items.push(...cObj.items);
        }
      });
    }
  } catch (errCiclos) {
    console.warn('Aviso al consultar salmos_eucaristia_ciclos:', errCiclos.message);
  }

  // 2. Si no hubo paquetes o están incompletos (< 900 salmos), consultar colección individual completa
  if (items.length < 900) {
    items = []; // Limpiar para tomar la colección individual completa de 981 salmos
    try {
      const indUrl = 'https://firestore.googleapis.com/v1/projects/cristoresucito/databases/(default)/documents/salmos_eucaristia?pageSize=300';
      const rawInd = await fetchAllPages(indUrl);

      if (rawInd.length > 0) {
        console.log(`📄 Descargando ${rawInd.length} salmos individuales de Firebase...`);
        rawInd.forEach(d => {
          items.push(deserializeDoc(d));
        });
      }
    } catch (errInd) {
      console.warn('Aviso al consultar salmos_eucaristia:', errInd.message);
    }
  }

  if (items.length === 0) {
    console.error('❌ No se encontraron salmos en Firebase o no se tienen permisos de lectura pública aún.');
    console.log('💡 Tip: Puedes ingresar a seucaristico.html en el navegador con tu cuenta y usar "Descargar Todo (ZIP)" o "Subir TODOS a Firebase".');
    process.exit(1);
  }

  // Desduplicar por ID
  const mapById = new Map();
  items.forEach(it => {
    if (it && it.id) {
      mapById.set(it.id, it);
    }
  });

  function normalizeStrophes(estrofas) {
    if (!Array.isArray(estrofas)) return estrofas;
    return estrofas.map(st => {
      if (Array.isArray(st)) return st;
      if (typeof st === 'string') return st.split(/\r?\n/);
      return [String(st)];
    });
  }

  function normalizePsalmStrophes(p) {
    if (!p) return p;
    const clone = { ...p };
    if (Array.isArray(clone.estrofas)) {
      clone.estrofas = normalizeStrophes(clone.estrofas);
    } else if (clone.textoCompleto) {
      clone.estrofas = clone.textoCompleto.split(/\r?\n\s*\r?\n/).map(b => b.split(/\r?\n/));
    }
    if (Array.isArray(clone.lizq)) {
      clone.lizq = clone.lizq.map(lz => {
        if (lz && Array.isArray(lz.variants)) {
          return {
            ...lz,
            variants: lz.variants.map(v => ({
              ...v,
              strophes: normalizeStrophes(v.strophes)
            }))
          };
        }
        return lz;
      });
    }
    return clone;
  }

  const uniqueList = Array.from(mapById.values()).map(normalizePsalmStrophes);
  console.log(`💾 Guardando ${uniqueList.length} salmos individuales en ${targetDir}...`);

  // Guardar cada archivo individual [id].json
  uniqueList.forEach(p => {
    const filePath = path.join(targetDir, `${p.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(p, null, 2), 'utf8');

    if (fs.existsSync(distTargetDir)) {
      const distFilePath = path.join(distTargetDir, `${p.id}.json`);
      fs.writeFileSync(distFilePath, JSON.stringify(p, null, 2), 'utf8');
    }
  });

  // Agrupar y guardar los 7 archivos por ciclo (también con nombres con ñ para compatibilidad)
  const ciclosMap = {
    'cicloa.json': uniqueList.filter(p => p.ciclo === 'Ciclo A' || (p.id && p.id.startsWith('seua_'))),
    'ciclob.json': uniqueList.filter(p => p.ciclo === 'Ciclo B' || (p.id && p.id.startsWith('seub_'))),
    'cicloc.json': uniqueList.filter(p => p.ciclo === 'Ciclo C' || (p.id && p.id.startsWith('seuc_'))),
    'anopar.json': uniqueList.filter(p => p.ciclo === 'Año Par' || (p.id && p.id.startsWith('seup_'))),
    'añopar.json': uniqueList.filter(p => p.ciclo === 'Año Par' || (p.id && p.id.startsWith('seup_'))),
    'anoimpar.json': uniqueList.filter(p => p.ciclo === 'Año Impar' || (p.id && p.id.startsWith('seui_'))),
    'añoimpar.json': uniqueList.filter(p => p.ciclo === 'Año Impar' || (p.id && p.id.startsWith('seui_'))),
    'ferias.json': uniqueList.filter(p => p.ciclo === 'Ferias' || (p.id && p.id.startsWith('seuf_'))),
    'santos.json': uniqueList.filter(p => p.ciclo === 'Santos' || (p.id && p.id.startsWith('seus_')))
  };

  Object.entries(ciclosMap).forEach(([file, list]) => {
    list.sort((a, b) => (a.orden || 0) - (b.orden || 0));
    const filePath = path.join(targetDir, file);
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
    console.log(`  ✓ ${file}: ${list.length} salmos`);

    if (fs.existsSync(distTargetDir)) {
      const distFilePath = path.join(distTargetDir, file);
      fs.writeFileSync(distFilePath, JSON.stringify(list, null, 2), 'utf8');
    }
  });

  console.log(`\n🎉 ¡Sincronización completada con éxito!`);
  console.log(`Total sincronizado: ${uniqueList.length} salmos en ${targetDir}`);
}

syncSeucaristia().catch(err => {
  console.error('❌ Error fatal durante la sincronización:', err);
  process.exit(1);
});
