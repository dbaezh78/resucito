const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../data/seucaristia/Ciclo A y B.txt'), 'utf8');

function normalizeText(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clasificarItem(title, ref) {
  const t = title.toLowerCase();
  let tiempo = 'Tiempo Ordinario';
  let dia = 'Domingo';
  let orden = 500;

  if (t.includes('adviento')) {
    tiempo = 'Adviento';
    dia = 'Domingo';
    const m = t.match(/(\d+)/) || t.match(/([ivx]+)/);
    const num = m ? (parseInt(m[1], 10) || 1) : 1;
    orden = 100 + num;
  } else if (t.includes('navidad') || t.includes('natividad') || t.includes('sagrada familia') || t.includes('santa maría') || t.includes('santa maria') || t.includes('epifanía') || t.includes('epifania') || t.includes('bautismo')) {
    tiempo = 'Navidad';
    dia = 'Domingo';
    if (t.includes('vigilia')) { dia = 'Sábado'; orden = 201; }
    else if (t.includes('medianoche')) { orden = 202; }
    else if (t.includes('aurora')) { orden = 203; }
    else if (t.includes('misa del día') || t.includes('misa del dia')) { orden = 204; }
    else if (t.includes('sagrada familia')) { orden = 205; }
    else if (t.includes('santa maría') || t.includes('santa maria') || t.includes('1 de enero')) { orden = 206; }
    else if (t.includes('2º domingo después') || t.includes('2º domingo despues')) { orden = 207; }
    else if (t.includes('epifanía') || t.includes('epifania') || t.includes('6 de enero')) { orden = 208; }
    else if (t.includes('bautismo')) { orden = 209; }
    else { orden = 210; }
  } else if (t.includes('cuaresma') || t.includes('ceniza') || t.includes('ramos') || t.includes('jueves santo') || t.includes('viernes santo')) {
    tiempo = 'Cuaresma';
    if (t.includes('ceniza')) { dia = 'Miércoles'; orden = 300; }
    else if (t.includes('jueves santo')) { dia = 'Jueves'; orden = 315; }
    else if (t.includes('viernes santo')) { dia = 'Viernes'; orden = 316; }
    else if (t.includes('ramos')) { dia = 'Domingo'; orden = 310; }
    else {
      dia = 'Domingo';
      const m = t.match(/primer|segundo|tercer|cuarto|quinto|1|2|3|4|5/i);
      let num = 1;
      if (m) {
        const s = m[0].toLowerCase();
        if (s.startsWith('seg') || s === '2') num = 2;
        else if (s.startsWith('ter') || s === '3') num = 3;
        else if (s.startsWith('cua') || s === '4') num = 4;
        else if (s.startsWith('qui') || s === '5') num = 5;
      }
      orden = 300 + num;
    }
  } else if (t.includes('vigilia pascual')) {
    tiempo = 'Pascua';
    dia = 'Sábado';
    const m = t.match(/primer|segundo|tercer|cuarto|quinto|sexto|septimo|séptimo|octavo/i);
    let n = 1;
    if (m) {
      const s = m[0].toLowerCase();
      if (s.startsWith('seg')) n = 2;
      else if (s.startsWith('ter')) n = 3;
      else if (s.startsWith('cua')) n = 4;
      else if (s.startsWith('qui')) n = 5;
      else if (s.startsWith('sex')) n = 6;
      else if (s.startsWith('sep')) n = 7;
      else if (s.startsWith('oct')) n = 8;
    }
    orden = 400 + n;
  } else if (t.includes('pascua') || t.includes('ascensión') || t.includes('ascension') || t.includes('pentecostés') || t.includes('pentecostes')) {
    tiempo = 'Pascua';
    dia = 'Domingo';
    if (t.includes('domingo de pascua') || t.includes('resurrección')) { orden = 410; }
    else if (t.includes('ascensión') || t.includes('ascension')) { orden = 425; }
    else if (t.includes('pentecostés') || t.includes('pentecostes')) {
      if (t.includes('vigilia')) { dia = 'Sábado'; orden = 429; }
      else orden = 430;
    } else {
      const m = t.match(/segundo|tercer|cuarto|quinto|sexto|séptimo|septimo|vii|2|3|4|5|6|7/i);
      let num = 2;
      if (m) {
        const s = m[0].toLowerCase();
        if (s.startsWith('ter') || s === '3') num = 3;
        else if (s.startsWith('cua') || s === '4') num = 4;
        else if (s.startsWith('qui') || s === '5') num = 5;
        else if (s.startsWith('sex')) n = 6;
        else if (s.startsWith('sep') || s.startsWith('vii') || s === '7') num = 7;
      }
      orden = 410 + num;
    }
  } else if (t.includes('trinidad') || t.includes('cuerpo y sangre') || t.includes('corpus') || t.includes('sagrado corazón') || t.includes('sagrado corazon')) {
    tiempo = 'Tiempo Ordinario';
    if (t.includes('sagrado')) { dia = 'Viernes'; orden = 537; }
    else if (t.includes('trinidad')) { dia = 'Domingo'; orden = 535; }
    else if (t.includes('corpus') || t.includes('cuerpo')) { dia = 'Domingo'; orden = 536; }
  } else if (t.includes('cristo rey') || t.includes('jesucristo, rey')) {
    tiempo = 'Tiempo Ordinario';
    dia = 'Domingo';
    orden = 534;
  } else if (t.includes('ordinario')) {
    tiempo = 'Tiempo Ordinario';
    dia = 'Domingo';
    const m = t.match(/(\d+)/);
    const num = m ? parseInt(m[1], 10) : 2;
    orden = 500 + num;
  } else {
    tiempo = 'Solemnidades y Fiestas';
    dia = 'Domingo';
    orden = 600;
  }

  return { tiempo, dia, orden };
}

function parseSalmoBody(bodyLines) {
  let respuesta = '';
  let respuestaOpcional = '';
  let strophes = [];
  let currentStropheLines = [];

  let idx = 0;
  while (idx < bodyLines.length) {
    const l = bodyLines[idx].trim();
    if (!l) {
      if (currentStropheLines.length > 0) {
        strophes.push(currentStropheLines.join('\n'));
        currentStropheLines = [];
      }
      idx++;
      continue;
    }

    if (l.startsWith('R.') || l.startsWith('R .') || l.startsWith('R:')) {
      if (!respuesta) {
        respuesta = l;
        let next = idx + 1;
        while (next < bodyLines.length && bodyLines[next].trim() && !bodyLines[next].trim().toLowerCase().startsWith('o bien') && !bodyLines[next].trim().startsWith('R.')) {
          if (bodyLines[next].trim().length < 60 && !bodyLines[next].trim().endsWith('.')) {
            respuesta += ' ' + bodyLines[next].trim();
            idx = next;
          } else break;
          next++;
        }
      } else if (idx > 0 && bodyLines[idx - 1].trim().toLowerCase().startsWith('o bien')) {
        respuestaOpcional = l;
      } else {
        currentStropheLines.push(l);
      }
    } else if (l.toLowerCase().startsWith('o bien')) {
      // Ignorar marcador O bien
    } else {
      currentStropheLines.push(l);
    }

    idx++;
  }

  if (currentStropheLines.length > 0) {
    strophes.push(currentStropheLines.join('\n'));
  }

  return { respuesta, respuestaOpcional, strophes };
}

function generateLizq(respuesta, respuestaOpcional, strophes) {
  const lizq = [];
  lizq.push({ line: respuesta, sC: 'tc ta as bg', color: 'red' });
  if (respuestaOpcional) {
    lizq.push({ line: 'O bien: ' + respuestaOpcional, sC: 'fssmall', color: 'gray' });
  }
  lizq.push({ line: '', sC: 'adb1' });

  strophes.forEach((strophe, sIdx) => {
    const sLines = strophe.split('\n');
    sLines.forEach(line => {
      lizq.push({ line: line, sC: line.endsWith('R.') ? 'salmo-verso-fin' : '' });
    });
    if (sIdx < strophes.length - 1) {
      lizq.push({ line: '', sC: 'adb1' });
    }
  });

  return lizq;
}

function parseCycleRaw(rawText, cicloName, idPrefix) {
  const lines = rawText.split(/\r?\n/);
  const items = [];
  
  const salmoIndices = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim().toLowerCase();
    if (l.startsWith('salmo responsorial') || l.startsWith('interleccional:')) {
      salmoIndices.push(i);
    }
  }

  let counter = 1;

  for (let s = 0; s < salmoIndices.length; s++) {
    const sIdx = salmoIndices[s];
    const prevIdx = (s === 0) ? -1 : salmoIndices[s - 1];
    const nextIdx = (s === salmoIndices.length - 1) ? lines.length : salmoIndices[s + 1];

    let headerLines = [];
    for (let k = sIdx - 1; k > prevIdx; k--) {
      const l = lines[k].trim();
      if (l.endsWith('. R.') || l === 'R.' || l.endsWith('. R')) {
        break;
      }
      if (l) headerLines.unshift(l);
    }

    const salmoRef = lines[sIdx].trim();

    // Detección de duplicado adyacente (como el caso de Salmo 46 repetido sin encabezado)
    if (headerLines.length === 0 && items.length > 0 && items[items.length - 1].subtitle === salmoRef) {
      continue;
    }

    let endVerseIdx = nextIdx;
    for (let k = nextIdx - 1; k > sIdx; k--) {
      const l = lines[k].trim();
      if (l.endsWith('. R.') || l === 'R.' || l.endsWith('. R')) {
        endVerseIdx = k + 1;
        break;
      }
    }

    const bodyRaw = lines.slice(sIdx + 1, endVerseIdx);

    // Limpiar headers quitando 'Ciclo A', 'Ciclo B', 'Ciclos A, B y C'
    let titleParts = [];
    for (let h of headerLines) {
      if (!h.match(/^ciclos?\s+[abc]/i)) {
        titleParts.push(h);
      }
    }
    let title = titleParts.join(' - ').trim();
    if (!title) {
      // Si no tiene título propio pero es Salmo de la Vigilia Pascual
      if (salmoRef.includes('103') || salmoRef.includes('32') || salmoRef.includes('15') || salmoRef.includes('Éxodo')) {
        title = 'Vigilia Pascual';
      } else {
        title = cicloName;
      }
    }

    // Comprobar si es un duplicado idéntico del anterior
    if (items.length > 0) {
      const prev = items[items.length - 1];
      if (prev.title === title && prev.subtitle === salmoRef) {
        continue;
      }
    }

    const { tiempo, dia, orden } = clasificarItem(title, salmoRef);
    const { respuesta, respuestaOpcional, strophes } = parseSalmoBody(bodyRaw);
    const textoCompleto = strophes.join('\n\n');
    const lizq = generateLizq(respuesta, respuestaOpcional, strophes);

    const id = `${idPrefix}_${String(counter++).padStart(2, '0')}`;
    const searchPool = normalizeText(`${title} ${cicloName} ${tiempo} ${dia} ${salmoRef} ${respuesta} ${respuestaOpcional} ${textoCompleto}`);

    items.push({
      id,
      title,
      celebracion: title,
      subtitle: salmoRef,
      salmo: salmoRef,
      ciclo: cicloName,
      tiempo,
      dia,
      orden,
      respuesta,
      respuestaOpcional: respuestaOpcional || '',
      estrofas: strophes,
      textoCompleto,
      sourceBook: 'eucaristia',
      stage: 'Liturgia',
      catCanto: 'Salmo Eucaristía',
      hasAudio: false,
      searchPool,
      lizq
    });
  }

  return items;
}

const parts = content.split(/\r?\n(?=Ciclo B\r?\nDomingo 1)/i);
const itemsCicloA = parseCycleRaw(parts[0], 'Ciclo A', 'seua');
const itemsCicloB = parseCycleRaw(parts[1], 'Ciclo B', 'seub');

const outDir = path.join(__dirname, '../data/seucaristia');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'cicloa.json'), JSON.stringify(itemsCicloA, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'ciclob.json'), JSON.stringify(itemsCicloB, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'cicloc.json'), JSON.stringify([], null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'añopar.json'), JSON.stringify([], null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'anopar.json'), JSON.stringify([], null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'añoimpar.json'), JSON.stringify([], null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'anoimpar.json'), JSON.stringify([], null, 2), 'utf8');

// Guardar cada salmo individualmente para carga directa y offline
[...itemsCicloA, ...itemsCicloB].forEach(item => {
  fs.writeFileSync(path.join(outDir, `${item.id}.json`), JSON.stringify(item, null, 2), 'utf8');
});

console.log(`✅ cicloa.json generado con ${itemsCicloA.length} salmos.`);
console.log(`✅ ciclob.json generado con ${itemsCicloB.length} salmos.`);
console.log(`✅ ${itemsCicloA.length + itemsCicloB.length} archivos individuales generados en data/seucaristia.`);
console.log(`✅ cicloc.json, añopar.json y añoimpar.json inicializados.`);
