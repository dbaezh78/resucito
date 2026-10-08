const fs = require('fs');
const path = require('path');

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
  let idx = 0;
  while (idx < bodyLines.length && !bodyLines[idx].trim()) idx++;

  let respLines = [];
  let respOptLines = [];
  let hasOpt = false;

  // 1. Bloque de respuesta principal
  while (idx < bodyLines.length && bodyLines[idx].trim()) {
    const l = bodyLines[idx].trim();
    if (l.toLowerCase().match(/^o bien[:;]?/)) {
      hasOpt = true;
      const rest = l.replace(/^o bien[:;]?\s*/i, '').trim();
      if (rest) respOptLines.push(rest);
      idx++;
      break;
    }
    respLines.push(l);
    idx++;
  }

  // 2. Bloque opcional (O bien:)
  while (idx < bodyLines.length && !bodyLines[idx].trim()) idx++;

  if (idx < bodyLines.length && bodyLines[idx].trim().toLowerCase().match(/^o bien[:;]?/)) {
    hasOpt = true;
    const l = bodyLines[idx].trim();
    const rest = l.replace(/^o bien[:;]?\s*/i, '').trim();
    if (rest) respOptLines.push(rest);
    idx++;
  }

  if (hasOpt && respOptLines.length === 0) {
    while (idx < bodyLines.length && !bodyLines[idx].trim()) idx++;
    while (idx < bodyLines.length && bodyLines[idx].trim()) {
      respOptLines.push(bodyLines[idx].trim());
      idx++;
    }
  }

  // 3. Estrofas
  let strophes = [];
  let currentStrophe = [];

  while (idx < bodyLines.length) {
    const l = bodyLines[idx].trim();
    if (!l) {
      if (currentStrophe.length > 0) {
        strophes.push(currentStrophe);
        currentStrophe = [];
      }
    } else {
      currentStrophe.push(l);
    }
    idx++;
  }
  if (currentStrophe.length > 0) {
    strophes.push(currentStrophe);
  }

  // Asegurar que cada estrofa termine con ' R.'
  strophes.forEach(str => {
    if (str.length > 0) {
      const last = str[str.length - 1];
      if (!last.match(/R\.?$/i)) {
        str[str.length - 1] = last.trimEnd() + ' R.';
      } else if (!last.match(/R\.$/i)) {
        str[str.length - 1] = last.replace(/R$/i, 'R.');
      }
    }
  });

  return { respLines, respOptLines, strophes };
}

function generateLizq(respLines, respOptLines, strophes) {
  const lizq = [];

  // 1. Líneas de la respuesta principal
  respLines.forEach((rLine, rIdx) => {
    const sC = rIdx === 0
      ? 'salmo-linea salmo-respuesta'
      : 'salmo-linea salmo-respuesta salmo-sangria';
    lizq.push({ line: rLine, sC });
  });

  // 2. Líneas de respuesta opcional (si existe)
  if (respOptLines && respOptLines.length > 0) {
    lizq.push({ line: '', sC: 'salmo-espacio' });
    lizq.push({ line: 'O bien:', sC: 'salmo-linea salmo-obien' });
    respOptLines.forEach((oLine, oIdx) => {
      const sC = oIdx === 0
        ? 'salmo-linea salmo-respuesta'
        : 'salmo-linea salmo-respuesta salmo-sangria';
      lizq.push({ line: oLine, sC });
    });
  }

  // 3. Espacio antes de las estrofas
  if (strophes.length > 0) {
    lizq.push({ line: '', sC: 'salmo-espacio' });
  }

  // 4. Estrofas
  strophes.forEach((strophe, sIdx) => {
    strophe.forEach((verse, vIdx) => {
      const isFirst = (vIdx === 0);
      const isLast = (vIdx === strophe.length - 1);

      let sC = 'salmo-linea salmo-verso';
      if (isFirst) {
        sC += ' salmo-verso-primero';
      } else {
        sC += ' salmo-sangria';
      }
      if (isLast) {
        sC += ' salmo-verso-fin';
      }

      lizq.push({ line: verse, sC });
    });

    if (sIdx < strophes.length - 1) {
      lizq.push({ line: '', sC: 'salmo-espacio' });
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
      if (l.match(/(\.|\!|\?|\:|\))\s*R\.?$/i) || l.endsWith('R.') || l.endsWith('R')) {
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
      if (l.match(/(\.|\!|\?|\:|\))\s*R\.?$/i) || l.endsWith('R.') || l.endsWith('R')) {
        endVerseIdx = k + 1;
        break;
      }
    }

    const bodyRaw = lines.slice(sIdx + 1, endVerseIdx);

    // Limpiar headers quitando 'Ciclo A', 'Ciclo B', 'Ciclo C', 'Ciclos A, B y C'
    let titleParts = [];
    for (let h of headerLines) {
      if (!h.match(/^ciclos?\s+[abc]/i)) {
        if (h.endsWith(',') || (h[0] && h[0] === h[0].toLowerCase() && !h.match(/^\d/))) {
          continue;
        }
        titleParts.push(h);
      }
    }
    let title = titleParts.join(' - ').trim();
    if (!title) {
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
    const { respLines, respOptLines, strophes } = parseSalmoBody(bodyRaw);
    const respuesta = respLines.join(' ');
    const respuestaOpcional = respOptLines.join(' ');
    const estrofas = strophes.map(s => s.join('\n'));
    const textoCompleto = estrofas.join('\n\n');
    const lizq = generateLizq(respLines, respOptLines, strophes);

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

function parseFeriaRaw(rawText, cicloName, idPrefix) {
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
  const dayOrderMap = { 'lunes': 1, 'martes': 2, 'miércoles': 3, 'miercoles': 3, 'jueves': 4, 'viernes': 5, 'sábado': 6, 'sabado': 6 };
  const romanos = ['i','ii','iii','iv','v','vi','vii','viii','ix','x','xi','xii','xiii','xiv','xv','xvi','xvii','xviii','xix','xx','xxi','xxii','xxiii','xxiv','xxv','xxvi','xxvii','xxviii','xxix','xxx','xxxi','xxxii','xxxiii','xxxiv'];

  for (let s = 0; s < salmoIndices.length; s++) {
    const sIdx = salmoIndices[s];
    const prevIdx = (s === 0) ? -1 : salmoIndices[s - 1];
    const nextIdx = (s === salmoIndices.length - 1) ? lines.length : salmoIndices[s + 1];

    let headerLines = [];
    for (let k = sIdx - 1; k > prevIdx; k--) {
      const l = lines[k].trim();
      if (l.match(/(\.|\!|\?|\:|\))\s*R\.?$/i) || l.endsWith('R.') || l.endsWith('R')) {
        break;
      }
      if (l && !l.match(/^año\s+[i|1|2]/i)) headerLines.unshift(l);
    }

    const salmoRef = lines[sIdx].trim();

    let endVerseIdx = nextIdx;
    for (let k = nextIdx - 1; k > sIdx; k--) {
      const l = lines[k].trim();
      if (l.match(/(\.|\!|\?|\:|\))\s*R\.?$/i) || l.endsWith('R.') || l.endsWith('R')) {
        endVerseIdx = k + 1;
        break;
      }
    }

    const bodyRaw = lines.slice(sIdx + 1, endVerseIdx);

    const cleanHeaders = headerLines.filter(h => !h.match(/^semana\s+[ivxlcdm\d]+/i));
    let title = cleanHeaders.join(' - ').trim();
    if (!title && headerLines.length > 0) {
      title = headerLines.join(' - ').trim();
    }

    // Determinar día
    let dia = 'Lunes';
    const tLower = title.toLowerCase();
    if (tLower.includes('martes')) dia = 'Martes';
    else if (tLower.includes('miércoles') || tLower.includes('miercoles')) dia = 'Miércoles';
    else if (tLower.includes('jueves')) dia = 'Jueves';
    else if (tLower.includes('viernes')) dia = 'Viernes';
    else if (tLower.includes('sábado') || tLower.includes('sabado')) dia = 'Sábado';
    else if (tLower.includes('domingo')) dia = 'Domingo';

    // Determinar semana (1 a 34)
    const m = title.match(/(\d+)ª|(\d+)a|(\d+)º/i);
    let semNum = m ? parseInt(m[1] || m[2] || m[3], 10) : null;
    if (!semNum) {
      for (let h of headerLines) {
        const hm = h.match(/semana\s+([ivxlcdm]+)/i);
        if (hm) {
          const rIdx = romanos.indexOf(hm[1].toLowerCase());
          if (rIdx !== -1) semNum = rIdx + 1;
        }
      }
    }
    if (!semNum) semNum = 1;

    const dayNum = dayOrderMap[dia.toLowerCase()] || 1;
    const orden = 5000 + (semNum * 10) + dayNum;
    const tiempo = 'Tiempo Ordinario';

    const { respLines, respOptLines, strophes } = parseSalmoBody(bodyRaw);
    const respuesta = respLines.join(' ');
    const respuestaOpcional = respOptLines.join(' ');
    const estrofas = strophes.map(s => s.join('\n'));
    const textoCompleto = estrofas.join('\n\n');
    const lizq = generateLizq(respLines, respOptLines, strophes);

    const id = `${idPrefix}_${String(counter++).padStart(3, '0')}`;
    const roman = romanos[semNum - 1] || '';
    const extraSearch = `semana ${semNum} semana ${roman} ${dia.toLowerCase()} ${semNum} ${roman}`;
    const searchPool = normalizeText(`${title} ${cicloName} ${tiempo} ${dia} ${salmoRef} ${extraSearch} ${respuesta} ${respuestaOpcional} ${textoCompleto}`);

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

function parseSantosRaw(content) {
  const lines = content.split(/\r?\n/).map(l => l.replace(/[\u200B-\u200D\uFEFF]/g, '').trimEnd());

  function isComunHeader(idx) {
    return /SALMOS PARA COM[UÚ]N|^PARA COM[UÚ]N|^COM[UÚ]N DE/i.test(lines[idx].trim());
  }
  function isCelebrationHeader(idx) {
    return /^\d{1,2}\s+de\s+[a-záéíóú]+/i.test(lines[idx].trim());
  }
  function isMonthHeader(idx) {
    return /^(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE)$/i.test(lines[idx].trim());
  }

  function getComunKey(rawTitle, isPascual) {
    const t = rawTitle.toLowerCase();
    if (t.includes('mártires') || t.includes('martires')) return 'martires';
    if (t.includes('pastores')) return 'pastores';
    if (t.includes('misioneros')) return 'misioneros';
    if (t.includes('doctores')) return 'doctores';
    if (t.includes('santos')) return 'santos';
    if (t.includes('religiosos')) return 'religiosos';
    if (t.includes('vírgenes') || t.includes('virgenes')) return 'virgenes';
    if (t.includes('dedicación') || t.includes('dedicacion')) return 'dedicacion';
    if (t.includes('santa maría') || t.includes('santa maria')) {
      return isPascual ? 'virgen_maria_pascual' : 'virgen_maria';
    }
    return 'santos';
  }

  function classifyCelebration(title, note) {
    const t = (title + ' ' + (note || '')).toLowerCase();
    if (t.includes('dedicación') || t.includes('dedicacion') || t.includes('basílica') || t.includes('basilica')) return 'dedicacion';
    if (t.includes('virgen maría') || t.includes('virgen maria') || t.includes('santísima virgen') || t.includes('santisima virgen') ||
        t.includes('nuestra señora') || t.includes('santa maría madre') || t.includes('santa maria madre') ||
        t.includes('asunción') || t.includes('asuncion') || t.includes('inmaculada') || t.includes('maternidad') ||
        t.includes('del carmen') || t.includes('del pilar') || t.includes('de guadalupe') || t.includes('de loreto') ||
        t.includes('de fátima') || t.includes('de fatima') || t.includes('de lourdes') || t.includes('reina') ||
        t.includes('anunciación') || t.includes('anunciacion') || t.includes('visitación') || t.includes('visitacion') ||
        t.includes('dolores') || t.includes('rosario')) {
      return 'virgen_maria';
    }
    if (t.includes('doctor') || t.includes('doctora')) return 'doctores';
    if (t.includes('obispo') || t.includes('papa') || t.includes('presbítero') || t.includes('presbitero') || t.includes('pastor')) {
      if (t.includes('fructuoso')) return 'martires';
      return 'pastores';
    }
    if (t.includes('mártir') || t.includes('martir') || t.includes('mártires') || t.includes('martires') || t.includes('protomártir')) return 'martires';
    if (t.includes('misioner')) return 'misioneros';
    if (t.includes('religios') || t.includes('abad') || t.includes('monje') || t.includes('ermitaño') || t.includes('ermitano')) return 'religiosos';
    if (t.includes('virgen') || t.includes('vírgen')) return 'virgenes';
    return 'santos';
  }

  // 1. Extraer todos los comunes
  const comunesMap = {};
  for (let i = 0; i < lines.length; i++) {
    if (isComunHeader(i)) {
      const rawTitle = lines[i].trim();
      const isPascual = (i + 1 < lines.length && /tiempo pascual/i.test(lines[i + 1]));
      let j = i + 1;
      while (j < lines.length) {
        if (j > i + 3 && (isComunHeader(j) || isCelebrationHeader(j) || isMonthHeader(j))) {
          break;
        }
        j++;
      }
      const key = getComunKey(rawTitle, isPascual);
      let optIndices = [];
      for (let k = i; k < j; k++) {
        if (/^OPCION\s*\d+/i.test(lines[k].trim())) optIndices.push(k);
      }
      const parsedOpts = optIndices.map((optIdx, optNum) => {
        const nextIdx = (optNum + 1 < optIndices.length) ? optIndices[optNum + 1] : j;
        const optHeader = lines[optIdx].trim();
        let refIdx = optIdx + 1;
        while (refIdx < nextIdx && !lines[refIdx].trim()) refIdx++;
        const salmoRef = lines[refIdx] ? lines[refIdx].trim() : '';
        const bodyLines = lines.slice(refIdx + 1, nextIdx);
        const parsedBody = parseSalmoBody(bodyLines);
        const lizq = generateLizq(parsedBody.respLines, parsedBody.respOptLines, parsedBody.strophes);
        return {
          optHeader,
          salmoRef,
          respuesta: parsedBody.respLines.join(' '),
          respuestaOpcional: parsedBody.respOptLines.join(' '),
          strophes: parsedBody.strophes,
          textoCompleto: parsedBody.strophes.map(s => s.join('\n')).join('\n\n'),
          lizq
        };
      });
      if (!comunesMap[key]) comunesMap[key] = [];
      comunesMap[key].push(...parsedOpts);
    }
  }

  // 2. Extraer celebraciones
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthMap = {
    'enero': 'Enero', 'febrero': 'Febrero', 'marzo': 'Marzo', 'abril': 'Abril',
    'mayo': 'Mayo', 'junio': 'Junio', 'julio': 'Julio', 'agosto': 'Agosto',
    'septiembre': 'Septiembre', 'octubre': 'Octubre', 'noviembre': 'Noviembre', 'diciembre': 'Diciembre'
  };
  let currentMonth = 'Enero';
  let currentMonthNum = 1;
  const celebrations = [];
  const daySubIndexMap = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    const mMonth = line.match(/^(ENERO|FEBRERO|MARZO|ABRIL|MAYO|JUNIO|JULIO|AGOSTO|SEPTIEMBRE|OCTUBRE|NOVIEMBRE|DICIEMBRE)$/i);
    if (mMonth) {
      const rawM = mMonth[1].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      currentMonth = monthMap[rawM] || (mMonth[1].charAt(0).toUpperCase() + mMonth[1].slice(1).toLowerCase());
      currentMonthNum = monthNames.indexOf(currentMonth) + 1;
      i++;
      continue;
    }

    const mDate = line.match(/^(\d{1,2})\s+de\s+([a-záéíóú]+)$/i);
    if (mDate) {
      const day = parseInt(mDate[1], 10);
      const rawMonth = mDate[2].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const month = monthMap[rawMonth] || currentMonth;
      const monthNum = monthNames.indexOf(month) + 1;
      currentMonth = month;
      currentMonthNum = monthNum;

      let note = '';
      if (i > 0 && /Debajo dice|com[uú]n/i.test(lines[i - 1])) note = lines[i - 1];
      else if (i > 1 && /Debajo dice|com[uú]n/i.test(lines[i - 2])) note = lines[i - 2];

      let j = i + 1;
      let titleLines = [];
      let rank = '';
      let hasPsalm = false;
      let localSalmoRef = '';
      let psalmBodyStart = -1;

      while (j < lines.length) {
        const l = lines[j].trim();
        if (!l) { j++; continue; }
        if (isCelebrationHeader(j) || isMonthHeader(j) || isComunHeader(j)) break;
        if (/^(Memoria|Memoria libre|Fiesta|Solemnidad)$/i.test(l)) {
          rank = l;
        } else if (/^(?:Salmo responsorial|Interleccional)\s*:?/i.test(l)) {
          hasPsalm = true;
          localSalmoRef = l;
          psalmBodyStart = j + 1;
          break;
        } else if (/^(OPCION|Seleccionar salmo|Debajo dice)/i.test(l)) {
          break;
        } else if (!rank && titleLines.length < 2) {
          titleLines.push(l);
        }
        j++;
      }

      let k = (psalmBodyStart !== -1) ? psalmBodyStart : j;
      while (k < lines.length) {
        if (isCelebrationHeader(k) || isMonthHeader(k) || isComunHeader(k)) break;
        k++;
      }

      let properPsalm = null;
      if (hasPsalm && psalmBodyStart !== -1) {
        const bodyLines = lines.slice(psalmBodyStart, k);
        const parsedBody = parseSalmoBody(bodyLines);
        properPsalm = {
          salmoRef: localSalmoRef,
          respuesta: parsedBody.respLines.join(' '),
          respuestaOpcional: parsedBody.respOptLines.join(' '),
          strophes: parsedBody.strophes,
          textoCompleto: parsedBody.strophes.map(s => s.join('\n')).join('\n\n'),
          lizq: generateLizq(parsedBody.respLines, parsedBody.respOptLines, parsedBody.strophes)
        };
      }

      const title = titleLines.join(' - ');
      const cat = classifyCelebration(title, note);

      const dayKey = `${monthNum}_${day}`;
      daySubIndexMap[dayKey] = (daySubIndexMap[dayKey] || 0) + 1;
      const subIdx = daySubIndexMap[dayKey] - 1;
      const orden = monthNum * 1000 + day * 10 + subIdx;

      celebrations.push({
        day,
        month,
        monthNum,
        title,
        rank,
        cat,
        properPsalm,
        orden
      });

      i = k - 1;
    }
    i++;
  }

  // 3. Crear objetos finales para cada celebración
  const items = celebrations.map((cel, idx) => {
    const id = `seus_${String(idx + 1).padStart(3, '0')}`;
    const variants = [];
    let variantCounter = 1;

    const cleanRef = (r) => (r || '').replace(/^(?:Salmo responsorial|Interleccional)\s*:?\s*/i, '').trim();

    if (cel.properPsalm) {
      variants.push({
        id: `opt_${variantCounter}`,
        name: `Opción ${variantCounter}: ${cleanRef(cel.properPsalm.salmoRef)}`,
        salmo: cel.properPsalm.salmoRef,
        subtitle: cel.properPsalm.salmoRef,
        respuesta: cel.properPsalm.respuesta,
        respuestaOpcional: cel.properPsalm.respuestaOpcional,
        strophes: cel.properPsalm.strophes,
        textoCompleto: cel.properPsalm.textoCompleto,
        lines: cel.properPsalm.lizq
      });
      variantCounter++;

      const comunOpts = comunesMap[cel.cat] || comunesMap['santos'] || [];
      const normProperRef = normalizeText(cleanRef(cel.properPsalm.salmoRef));
      const normProperResp = normalizeText(cel.properPsalm.respuesta);

      comunOpts.forEach(cOpt => {
        const normOptRef = normalizeText(cleanRef(cOpt.salmoRef));
        const normOptResp = normalizeText(cOpt.respuesta);
        if (normOptRef !== normProperRef && normOptResp !== normProperResp) {
          variants.push({
            id: `opt_${variantCounter}`,
            name: `Opción ${variantCounter}: ${cleanRef(cOpt.salmoRef)}`,
            salmo: cOpt.salmoRef,
            subtitle: cOpt.salmoRef,
            respuesta: cOpt.respuesta,
            respuestaOpcional: cOpt.respuestaOpcional,
            strophes: cOpt.strophes,
            textoCompleto: cOpt.textoCompleto,
            lines: cOpt.lizq
          });
          variantCounter++;
        }
      });
    } else {
      const comunOpts = comunesMap[cel.cat] || comunesMap['santos'] || [];
      comunOpts.forEach(cOpt => {
        variants.push({
          id: `opt_${variantCounter}`,
          name: `Opción ${variantCounter}: ${cleanRef(cOpt.salmoRef)}`,
          salmo: cOpt.salmoRef,
          subtitle: cOpt.salmoRef,
          respuesta: cOpt.respuesta,
          respuestaOpcional: cOpt.respuestaOpcional,
          strophes: cOpt.strophes,
          textoCompleto: cOpt.textoCompleto,
          lines: cOpt.lizq
        });
        variantCounter++;
      });
    }

    const defaultVariant = variants[0] || {
      salmo: 'Salmo responsorial',
      subtitle: '',
      respuesta: '',
      respuestaOpcional: '',
      strophes: [],
      textoCompleto: '',
      lines: []
    };

    const lizq = [
      {
        type: "variant-group",
        id: "salmo_variantes",
        label: "Salmo Responsorial",
        color: "var(--Rojo-Leccionario)",
        variants: variants
      }
    ];

    const searchOptions = variants.map(v => `${v.name} ${v.respuesta} ${v.textoCompleto}`).join(' ');
    const searchPool = normalizeText(`${cel.title} ${cel.rank || ''} Santos ${cel.month} ${cel.day} ${searchOptions}`);

    return {
      id,
      title: cel.title,
      celebracion: cel.title,
      subtitle: defaultVariant.salmo || '',
      salmo: defaultVariant.salmo || '',
      ciclo: 'Santos',
      tiempo: cel.month,
      dia: String(cel.day),
      orden: cel.orden,
      respuesta: defaultVariant.respuesta,
      respuestaOpcional: defaultVariant.respuestaOpcional || '',
      estrofas: defaultVariant.strophes,
      textoCompleto: defaultVariant.textoCompleto,
      sourceBook: 'eucaristia',
      stage: 'Liturgia',
      catCanto: 'Salmo Eucaristía',
      hasAudio: false,
      searchPool,
      lizq
    };
  });

  return items;
}

function parseFeriasRaw(content) {
  const lines = content.split(/\r?\n/).map(l => l.replace(/[\u200B-\u200D\uFEFF]/g, '').trimEnd());
  const rawEntries = [];

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (l.match(/^(salmo responsorial|interleccional):/i)) {
      const colonIdx = l.indexOf(':');
      const ref = l.substring(colonIdx + 1).trim();

      let t = '';
      let extraTitle = '';
      let titleIdx = i - 1;
      let extraTitleIdx = null;

      for (let j = i - 1; j >= Math.max(0, i - 10); j--) {
        const prev = lines[j].trim();
        if (prev && !prev.toUpperCase().match(/^(ADVIENTO|NAVIDAD|CUARESMA|PASCUA|SEMANA SANTA|TIEMPO PASCUAL|CICLO)/)) {
          if (!t) {
            t = prev;
            titleIdx = j;
          } else if (prev.match(/\d+\s+de\s+enero/i) || t.toLowerCase().includes('epifania') || t.toLowerCase().includes('epifanía')) {
            extraTitle = prev;
            extraTitleIdx = j;
            break;
          } else {
            break;
          }
        }
      }
      if (extraTitle) {
        t = extraTitle + ': ' + t;
      }

      const startOfCurrentCelebration = extraTitleIdx !== null ? extraTitleIdx : titleIdx;

      if (rawEntries.length > 0) {
        const prevEntry = rawEntries[rawEntries.length - 1];
        prevEntry.body = lines.slice(prevEntry.bodyStartIdx, startOfCurrentCelebration);
      }

      rawEntries.push({
        title: t,
        ref,
        bodyStartIdx: i + 1,
        body: []
      });
    }
  }

  if (rawEntries.length > 0) {
    const prevEntry = rawEntries[rawEntries.length - 1];
    prevEntry.body = lines.slice(prevEntry.bodyStartIdx);
  }

  const items = [];
  let counter = 1;

  rawEntries.forEach((entry, idx) => {
    let { title, ref, body } = entry;

    // Normalizar correcciones tipográficas conocidas
    body = body.map(line => {
      let cl = line.trim();
      if (cl.match(/^R\s+Cuando te invoqu/i)) return 'R. Cuando te invoqué, me escuchaste, Señor.';
      if (cl.match(/^R\s+Que tu misericordia/i)) return 'R. Que tu misericordia, Señor, venga sobre nosotros,';
      if (cl.match(/\s+R$/)) return cl + '.';
      return line;
    });

    // Caso especial: "Id al mundo entero y proclamad el Evangelio. Aleluya."
    const bodyText = body.join('\n');
    if (bodyText.includes('Id al mundo entero') && bodyText.includes('Aleluya')) {
      body = [
        'R. Id al mundo entero y proclamad el Evangelio. Aleluya.',
        '',
        ...body.filter(l => !l.includes('Id al mundo entero') && !l.includes('Aleluya') && !l.toLowerCase().includes('o bien'))
      ];
    }

    // Clasificar Tiempo Litúrgico
    let tiempo = 'Adviento';
    if (idx < 25) {
      tiempo = 'Adviento';
    } else if (idx < 39) {
      tiempo = 'Navidad';
    } else if (idx < 80) {
      tiempo = 'Cuaresma';
    } else {
      tiempo = 'Pascua';
    }

    // Clasificar Día de la semana
    const tLower = title.toLowerCase();
    let dia = 'Feria';
    if (tLower.includes('lunes')) dia = 'Lunes';
    else if (tLower.includes('martes')) dia = 'Martes';
    else if (tLower.includes('miercoles') || tLower.includes('miércoles') || tLower.includes('ceniza')) dia = 'Miércoles';
    else if (tLower.includes('jueves') || tLower.includes('crismal')) dia = 'Jueves';
    else if (tLower.includes('viernes')) dia = 'Viernes';
    else if (tLower.includes('sabado') || tLower.includes('sábado')) dia = 'Sábado';
    else if (tLower.includes('domingo')) dia = 'Domingo';

    // Extraer número de semana si existe
    let semNum = null;
    const mSem = title.match(/(\d+)[ªºa-z]*\s+semana/i) || title.match(/semana\s+(\d+)/i);
    if (mSem) {
      semNum = parseInt(mSem[1], 10);
    } else {
      if (title.match(/segunda semana/i)) semNum = 2;
      else if (title.match(/tercera semana/i)) semNum = 3;
      else if (title.match(/cuarta semana/i)) semNum = 4;
      else if (title.match(/quinta semana/i)) semNum = 5;
      else if (title.match(/sexta semana/i)) semNum = 6;
      else if (title.match(/s[eé]ptima semana/i)) semNum = 7;
      else if (title.match(/primera semana/i)) semNum = 1;
    }

    // Orden cronológico
    const dayOffsetMap = {
      lunes: 1, martes: 2, 'miércoles': 3, miercoles: 3, jueves: 4, viernes: 5, 'sábado': 6, sabado: 6, domingo: 0, feria: 0
    };
    const dayOffset = dayOffsetMap[dia.toLowerCase()] || 0;
    let orden = 1000 + idx;

    if (tiempo === 'Adviento') {
      if (semNum) {
        orden = 100 + (semNum * 10) + dayOffset;
      } else {
        const mDia = title.match(/(\d+)\s+de\s+diciembre/i);
        if (mDia) {
          orden = 170 + (parseInt(mDia[1], 10) - 16);
        } else {
          orden = 170 + idx;
        }
      }
    } else if (tiempo === 'Navidad') {
      if (tLower.includes('octava')) {
        const mDia = title.match(/(\d+)\s+de\s+diciembre/i);
        orden = mDia ? (210 + parseInt(mDia[1], 10) - 28) : 215;
      } else if (tLower.includes('antes de epifania') || tLower.includes('antes de epifanía') || tLower.includes('2 de enero')) {
        const mDia = title.match(/(\d+)\s+de\s+enero/i);
        orden = mDia ? (220 + parseInt(mDia[1], 10)) : 225;
      } else if (tLower.includes('después de epifanía') || tLower.includes('despues de epifania')) {
        orden = 230 + dayOffset;
      } else {
        orden = 210 + idx;
      }
    } else if (tiempo === 'Cuaresma') {
      if (tLower.includes('ceniza')) {
        orden = 300 + (dayOffset === 3 ? 0 : (dayOffset >= 4 ? dayOffset - 3 : dayOffset));
      } else if (tLower.includes('santo') || tLower.includes('santa') || tLower.includes('crismal')) {
        orden = 370 + dayOffset;
      } else if (tLower.includes('libre elección') || tLower.includes('libre eleccion')) {
        orden = 300 + ((semNum || 3) * 10) + 0.5;
      } else if (semNum) {
        orden = 300 + (semNum * 10) + dayOffset;
      } else {
        orden = 300 + idx;
      }
    } else if (tiempo === 'Pascua') {
      if (tLower.includes('octava')) {
        orden = 400 + dayOffset;
      } else if (semNum) {
        orden = 400 + (semNum * 10) + dayOffset;
      } else {
        orden = 400 + idx;
      }
    }

    const { respLines, respOptLines, strophes } = parseSalmoBody(body);
    const respuesta = respLines.join(' ');
    const respuestaOpcional = respOptLines.join(' ');
    const estrofas = strophes.map(s => s.join('\n'));
    const textoCompleto = estrofas.join('\n\n');
    const lizq = generateLizq(respLines, respOptLines, strophes);

    const id = `seuf_${String(counter++).padStart(3, '0')}`;
    const romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const roman = semNum ? (romanos[semNum - 1] || '') : '';
    const extraSearch = `${semNum ? 'semana ' + semNum + ' semana ' + roman : ''} ${dia !== 'Feria' ? dia.toLowerCase() : ''} feria`;
    const searchPool = normalizeText(`${title} Ciclo A Ciclo B Ciclo C Ciclo A, B y C ${tiempo} ${dia} ${ref} ${extraSearch} ${respuesta} ${respuestaOpcional} ${textoCompleto}`);

    items.push({
      id,
      title,
      celebracion: title,
      subtitle: ref,
      salmo: ref,
      ciclo: 'Ciclo A, B y C',
      ciclos: ['Ciclo A', 'Ciclo B', 'Ciclo C', 'Año Par', 'Año Impar'],
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
  });

  return items;
}

// 1. Ciclo A y B
const contentAB = fs.readFileSync(path.join(__dirname, '../data/seucaristia/Ciclo A y B.txt'), 'utf8');
const parts = contentAB.split(/\r?\n(?=Ciclo B\r?\nDomingo 1)/i);
const itemsCicloA = parseCycleRaw(parts[0], 'Ciclo A', 'seua');
const itemsCicloB = parseCycleRaw(parts[1], 'Ciclo B', 'seub');

// 2. Ciclo C
const contentC = fs.readFileSync(path.join(__dirname, '../data/seucaristia/Ciclo C.txt'), 'utf8');
const itemsCicloC = parseCycleRaw(contentC, 'Ciclo C', 'seuc');

// 3. Año Par (Año II)
const contentPar = fs.readFileSync(path.join(__dirname, '../data/seucaristia/añopar.txt'), 'utf8');
const itemsAnoPar = parseFeriaRaw(contentPar, 'Año Par', 'seup');

// 4. Año Impar (Año I)
const contentImpar = fs.readFileSync(path.join(__dirname, '../data/seucaristia/añoimpar.txt'), 'utf8');
const itemsAnoImpar = parseFeriaRaw(contentImpar, 'Año Impar', 'seui');

// 5. Ferias de Adviento, Navidad, Cuaresma y Pascua
const contentFerias = fs.readFileSync(path.join(__dirname, '../data/seucaristia/Ferias.txt'), 'utf8');
const itemsFerias = parseFeriasRaw(contentFerias);

// 6. Santos
const contentSantos = fs.readFileSync(path.join(__dirname, '../data/seucaristia/Santos.txt'), 'utf8');
const itemsSantos = parseSantosRaw(contentSantos);

const outDir = path.join(__dirname, '../data/seucaristia');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Escribir colecciones JSON completas
fs.writeFileSync(path.join(outDir, 'cicloa.json'), JSON.stringify(itemsCicloA, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'ciclob.json'), JSON.stringify(itemsCicloB, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'cicloc.json'), JSON.stringify(itemsCicloC, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'añopar.json'), JSON.stringify(itemsAnoPar, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'anopar.json'), JSON.stringify(itemsAnoPar, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'añoimpar.json'), JSON.stringify(itemsAnoImpar, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'anoimpar.json'), JSON.stringify(itemsAnoImpar, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'ferias.json'), JSON.stringify(itemsFerias, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'santos.json'), JSON.stringify(itemsSantos, null, 2), 'utf8');

// Guardar cada salmo individualmente para carga directa y offline
const allItems = [...itemsCicloA, ...itemsCicloB, ...itemsCicloC, ...itemsAnoPar, ...itemsAnoImpar, ...itemsFerias, ...itemsSantos];
allItems.forEach(item => {
  fs.writeFileSync(path.join(outDir, `${item.id}.json`), JSON.stringify(item, null, 2), 'utf8');
});

console.log(`✅ cicloa.json generado con ${itemsCicloA.length} salmos.`);
console.log(`✅ ciclob.json generado con ${itemsCicloB.length} salmos.`);
console.log(`✅ cicloc.json generado con ${itemsCicloC.length} salmos.`);
console.log(`✅ añopar.json generado con ${itemsAnoPar.length} salmos.`);
console.log(`✅ añoimpar.json generado con ${itemsAnoImpar.length} salmos.`);
console.log(`✅ ferias.json generado con ${itemsFerias.length} salmos.`);
console.log(`✅ santos.json generado con ${itemsSantos.length} salmos.`);
console.log(`✅ Total de salmos generados: ${allItems.length} archivos individuales en data/seucaristia.`);

