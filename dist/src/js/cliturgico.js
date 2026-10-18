import { db, doc, setDoc, getDoc } from '../firebase.js';
import { getCurrentUser, onAuthStateChanged } from '../auth.js';
import { normalizeText } from '../search.js';

const STORAGE_KEY = 'resucito_calendario_liturgico_anual';
const DIAS_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MESES_LARGOS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let currentYear = new Date().getFullYear();
let weeksData = [];
let allEucaristiaPsalms = [];
let allAclamaciones = [];

function toLocalISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function parseLocalISO(isoStr) {
  if (!isoStr) return new Date();
  const [y, m, d] = isoStr.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

function calcularDomingoPascua(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function calcularCicloLetra(date) {
  const year = date.getFullYear();
  const nov30 = new Date(year, 10, 30);
  const dayOfWeek = nov30.getDay();
  const adviento1 = new Date(year, 10, 30 - ((dayOfWeek === 0) ? 0 : dayOfWeek));
  const liturgicalYear = (date >= adviento1) ? year + 1 : year;
  const mod = liturgicalYear % 3;
  if (mod === 1) return 'a';
  if (mod === 2) return 'b';
  return 'c';
}

function construirAclamacionId(tiempo, semanaNum, cicloDominical) {
  const cLetra = (cicloDominical === 'Ciclo A' ? 'a' : cicloDominical === 'Ciclo B' ? 'b' : 'c');
  const sem = Math.max(1, Number(semanaNum) || 1);
  if (tiempo === 'Adviento') return `aetas${Math.min(4, sem)}${cLetra}`;
  if (tiempo === 'Navidad') return `aetns25dicmda`;
  if (tiempo === 'Cuaresma') return `aetcs${Math.min(6, sem)}${cLetra}`;
  if (tiempo === 'Pascua') return `aetps${Math.min(7, sem)}${cLetra}`;
  if (tiempo === 'Solemnidades y Fiestas') return `aetfs1s`;
  return `aetos${Math.min(34, sem)}${cLetra}`;
}

function calcularSemanaLiturgicaParaDomingo(sundayDate) {
  const year = sundayDate.getFullYear();
  const cicloLetra = calcularCicloLetra(sundayDate);
  const cicloDominical = `Ciclo ${cicloLetra.toUpperCase()}`;
  const cicloParImpar = (year % 2 === 0) ? 'Año Par' : 'Año Impar';

  const pascua = calcularDomingoPascua(year);
  const miercolesCeniza = new Date(pascua.getFullYear(), pascua.getMonth(), pascua.getDate() - 46);
  const primerDomingoCuaresma = new Date(miercolesCeniza.getFullYear(), miercolesCeniza.getMonth(), miercolesCeniza.getDate() + 4);
  const pentecostes = new Date(pascua.getFullYear(), pascua.getMonth(), pascua.getDate() + 49);

  const nov30 = new Date(year, 10, 30);
  const adviento1 = new Date(year, 10, 30 - ((nov30.getDay() === 0) ? 0 : nov30.getDay()));

  const jan6 = new Date(year, 0, 6);
  const daysToBaptism = (7 - jan6.getDay()) % 7 || 7;
  const bautismo = new Date(year, 0, 6 + daysToBaptism);

  let tiempo = 'Tiempo Ordinario';
  let semanaNum = 1;
  let celebracion = '';
  let celebracionEspecial = '';

  if (sundayDate >= adviento1 && sundayDate < new Date(year, 11, 25)) {
    tiempo = 'Adviento';
    semanaNum = Math.min(4, Math.max(1, Math.round((sundayDate - adviento1) / (7 * 86400000)) + 1));
    celebracion = `Domingo ${semanaNum}º de Adviento`;
  } else if (sundayDate >= new Date(year, 11, 25) || sundayDate < bautismo) {
    tiempo = 'Navidad';
    semanaNum = (sundayDate.getMonth() === 11) ? 1 : 2;
    celebracion = (sundayDate.getMonth() === 11)
      ? 'Octava de Navidad / Sagrada Familia'
      : 'Tiempo de Navidad / Epifanía';
  } else if (sundayDate >= primerDomingoCuaresma && sundayDate < pascua) {
    tiempo = 'Cuaresma';
    semanaNum = Math.min(6, Math.max(1, Math.round((sundayDate - primerDomingoCuaresma) / (7 * 86400000)) + 1));
    if (semanaNum === 6) {
      celebracion = 'Domingo de Ramos y Semana Santa';
      celebracionEspecial = 'Semana Santa';
    } else {
      celebracion = `${semanaNum}ª Semana de Cuaresma`;
    }
  } else if (sundayDate >= pascua && sundayDate <= pentecostes) {
    tiempo = 'Pascua';
    semanaNum = Math.min(8, Math.max(1, Math.round((sundayDate - pascua) / (7 * 86400000)) + 1));
    if (semanaNum === 1) celebracion = 'Domingo de Resurrección (Octava de Pascua)';
    else if (semanaNum === 7) celebracion = '7ª Semana de Pascua / Ascensión del Señor';
    else if (semanaNum === 8) {
      celebracion = 'Domingo de Pentecostés';
      celebracionEspecial = 'Pentecostés';
    } else {
      celebracion = `${semanaNum}ª Semana de Pascua`;
    }
  } else {
    tiempo = 'Tiempo Ordinario';
    if (sundayDate < primerDomingoCuaresma) {
      semanaNum = Math.min(9, Math.max(1, Math.round((sundayDate - bautismo) / (7 * 86400000)) + 1));
      if (semanaNum === 1) {
        celebracion = '1ª Semana de Tiempo Ordinario (Bautismo del Señor)';
        celebracionEspecial = 'Bautismo del Señor';
      } else {
        celebracion = `${semanaNum}ª Semana de Tiempo Ordinario`;
      }
    } else {
      const weeksToAdvent = Math.round((adviento1 - sundayDate) / (7 * 86400000));
      semanaNum = Math.min(34, Math.max(1, 35 - weeksToAdvent));
      const daysAfterPent = Math.round((sundayDate - pentecostes) / 86400000);
      if (daysAfterPent === 7) {
        celebracion = `Santísima Trinidad (${semanaNum}ª Semana T. Ordinario)`;
        celebracionEspecial = 'Santísima Trinidad';
      } else if (daysAfterPent === 14) {
        celebracion = `Corpus Christi (${semanaNum}ª Semana T. Ordinario)`;
        celebracionEspecial = 'Corpus Christi';
      } else if (semanaNum === 34) {
        celebracion = '34ª Semana de Tiempo Ordinario (Jesucristo, Rey del Universo)';
        celebracionEspecial = 'Cristo Rey';
      } else {
        celebracion = `${semanaNum}ª Semana de Tiempo Ordinario`;
      }
    }
  }

  const saturdayDate = new Date(sundayDate.getFullYear(), sundayDate.getMonth(), sundayDate.getDate() + 6);
  const aclamacionId = construirAclamacionId(tiempo, semanaNum, cicloDominical);

  return {
    id: `${year}-${toLocalISO(sundayDate)}`,
    fechaInicio: toLocalISO(sundayDate),
    fechaFin: toLocalISO(saturdayDate),
    tiempo,
    semanaNum,
    celebracion,
    celebracionEspecial,
    cicloDominical,
    cicloParImpar,
    aclamacionId
  };
}

export function generarCalendarioAnual(year) {
  const numYear = Number(year) || new Date().getFullYear();
  const jan1 = new Date(numYear, 0, 1);
  // Empezar desde el domingo de la primera semana que toca el 1 de enero
  const firstSunday = new Date(numYear, 0, 1 - jan1.getDay());
  const weeks = [];
  let cursor = new Date(firstSunday.getTime());

  while (cursor.getFullYear() <= numYear) {
    weeks.push(calcularSemanaLiturgicaParaDomingo(cursor));
    cursor = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate() + 7);
  }
  return weeks;
}

async function cargarCatalogosLiturgicos() {
  try {
    const archivosEucaristia = [
      'data/seucaristia/cicloa.json',
      'data/seucaristia/ciclob.json',
      'data/seucaristia/cicloc.json',
      'data/seucaristia/ferias.json',
      'data/seucaristia/anopar.json',
      'data/seucaristia/anoimpar.json'
    ];
    const respuestas = await Promise.all(archivosEucaristia.map(url => fetch(url).then(r => r.ok ? r.json() : [])));
    allEucaristiaPsalms = respuestas.flat();

    const resAclam = await fetch('data/aclamaciones.json');
    if (resAclam.ok) {
      allAclamaciones = await resAclam.json();
    }
  } catch (e) {
    console.warn('Error cargando catálogos litúrgicos en cliturgico.js:', e);
  }
}

function buscarSalmoParaDia(weekRow, diaNombre, fechaDia) {
  if (!allEucaristiaPsalms.length || !weekRow) return null;
  const { tiempo, semanaNum, cicloDominical, cicloParImpar, celebracionEspecial } = weekRow;
  const diaNorm = normalizeText(diaNombre);

  if (tiempo === 'Tiempo Ordinario') {
    if (diaNombre === 'Domingo') {
      const delCiclo = allEucaristiaPsalms.filter(s => s.ciclo === cicloDominical);
      if (celebracionEspecial === 'Santísima Trinidad') {
        const m = delCiclo.find(s => normalizeText(s.title).includes('santisima trinidad'));
        if (m) return m;
      }
      if (celebracionEspecial === 'Corpus Christi') {
        const m = delCiclo.find(s => normalizeText(s.title).includes('cuerpo y sangre') || normalizeText(s.title).includes('corpus'));
        if (m) return m;
      }
      if (Number(semanaNum) === 1) {
        const m = delCiclo.find(s => normalizeText(s.title).includes('bautismo del senor'));
        if (m) return m;
      }
      return delCiclo.find(s => s.tiempo === 'Tiempo Ordinario' && s.title.includes(`${semanaNum}ª semana`)) || null;
    } else {
      return allEucaristiaPsalms.find(s =>
        s.ciclo === cicloParImpar &&
        s.tiempo === 'Tiempo Ordinario' &&
        normalizeText(s.dia || '') === diaNorm &&
        s.title.includes(`${semanaNum}ª semana`)
      ) || null;
    }
  }

  if (tiempo === 'Adviento') {
    if (diaNombre === 'Domingo') {
      return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Adviento' && (s.title.includes(`${semanaNum}º`) || s.title.includes(`${semanaNum}ª`))) || null;
    }
    if (fechaDia && fechaDia.getMonth() === 11 && fechaDia.getDate() >= 17 && fechaDia.getDate() <= 24) {
      const m = allEucaristiaPsalms.find(s => s.tiempo === 'Adviento' && s.title.includes(`${fechaDia.getDate()} de diciembre`));
      if (m) return m;
    }
    const semAdv = Math.min(3, Math.max(1, Number(semanaNum) || 1));
    return allEucaristiaPsalms.find(s => s.tiempo === 'Adviento' && normalizeText(s.dia || '') === diaNorm && s.title.includes(`${semAdv}ª semana`)) || null;
  }

  if (tiempo === 'Cuaresma') {
    if (Number(semanaNum) >= 6) {
      if (diaNombre === 'Domingo') {
        return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Cuaresma' && normalizeText(s.title).includes('ramos')) || null;
      }
      if (diaNombre === 'Jueves' || diaNombre === 'Viernes') {
        return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Cuaresma' && normalizeText(s.title).startsWith(diaNorm)) || null;
      }
      if (diaNombre === 'Sábado') {
        return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && normalizeText(s.title).includes('vigilia pascual')) || null;
      }
      return allEucaristiaPsalms.find(s => s.tiempo === 'Cuaresma' && normalizeText(s.title).startsWith(`${diaNorm} santo`)) || null;
    }
    if (diaNombre === 'Domingo') {
      const ordDom = ['', 'primer', 'segundo', 'tercer', 'cuarto', 'quinto'][Number(semanaNum)] || 'primer';
      return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Cuaresma' && normalizeText(s.title).includes(`${ordDom} domingo`)) || null;
    }
    return allEucaristiaPsalms.find(s => s.tiempo === 'Cuaresma' && normalizeText(s.dia || '') === diaNorm && s.title.includes(`${semanaNum}ª semana`)) || null;
  }

  if (tiempo === 'Pascua') {
    if (diaNombre === 'Domingo') {
      if (Number(semanaNum) >= 8 || celebracionEspecial === 'Pentecostés') {
        return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Pascua' && normalizeText(s.title).includes('pentecostes') && normalizeText(s.title).includes('dia')) || null;
      }
      if (Number(semanaNum) === 1) {
        return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Pascua' && normalizeText(s.title) === 'domingo de pascua') || null;
      }
      const ordDom = ['', 'domingo de pascua', 'segundo', 'tercer', 'cuarto', 'quinto', 'sexto', 'septimo'][Number(semanaNum)] || 'domingo de pascua';
      return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Pascua' && normalizeText(s.title).includes(ordDom)) || null;
    }
    if (Number(semanaNum) === 1) {
      return allEucaristiaPsalms.find(s => s.tiempo === 'Pascua' && normalizeText(s.dia || '') === diaNorm && normalizeText(s.title).includes('octava de pascua')) || null;
    }
    const ordFeria = ['', 'octava', 'segunda', 'tercera', 'cuarta', 'quinta', 'sexta', 'septima'][Math.min(7, Number(semanaNum))] || 'segunda';
    return allEucaristiaPsalms.find(s => s.tiempo === 'Pascua' && normalizeText(s.dia || '') === diaNorm && normalizeText(s.title).includes(`${ordFeria} semana de pascua`)) || null;
  }

  if (tiempo === 'Navidad') {
    return allEucaristiaPsalms.find(s => s.ciclo === cicloDominical && s.tiempo === 'Navidad') || null;
  }

  return null;
}

function renderHeroToday() {
  const now = new Date();
  const hoyISO = toLocalISO(now);
  const diaHoyNombre = DIAS_SEMANA[now.getDay()];

  let activeWeek = weeksData.find(w => hoyISO >= w.fechaInicio && hoyISO <= w.fechaFin);
  if (!activeWeek) {
    const domingoHoy = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    activeWeek = calcularSemanaLiturgicaParaDomingo(domingoHoy);
  }

  const titleEl = document.getElementById('hero-today-title');
  const pillsEl = document.getElementById('hero-today-pills');
  const linksEl = document.getElementById('hero-today-links');
  const stripEl = document.getElementById('hero-week-strip');

  const fechaLegible = `${diaHoyNombre}, ${now.getDate()} de ${MESES_LARGOS[now.getMonth()]} de ${now.getFullYear()}`;
  if (titleEl) {
    titleEl.textContent = `${fechaLegible} — ${activeWeek.celebracion || `Semana ${activeWeek.semanaNum} de ${activeWeek.tiempo}`}`;
  }

  if (pillsEl) {
    pillsEl.innerHTML = `
      <span class="meta-pill tiempo-pill"><span class="material-symbols-outlined" style="font-size: 1rem;">church</span> ${activeWeek.tiempo} (Semana ${activeWeek.semanaNum})</span>
      <span class="meta-pill ciclo-dom"><span class="material-symbols-outlined" style="font-size: 1rem;">sunny</span> Domingos: ${activeWeek.cicloDominical}</span>
      <span class="meta-pill ciclo-feria"><span class="material-symbols-outlined" style="font-size: 1rem;">date_range</span> Lunes a Sábado: ${activeWeek.cicloParImpar}</span>
    `;
  }

  const salmoHoy = buscarSalmoParaDia(activeWeek, diaHoyNombre, now);
  const aclamacionObj = allAclamaciones.find(a => a.id === activeWeek.aclamacionId);

  if (linksEl) {
    linksEl.innerHTML = `
      <a href="index.html#canto=${activeWeek.aclamacionId}" class="today-song-card">
        <div>
          <small>✨ Aclamación de la Semana</small>
          <strong>${aclamacionObj ? aclamacionObj.title : activeWeek.celebracion} (${activeWeek.cicloDominical})</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${aclamacionObj ? (aclamacionObj.subtitle || '') : activeWeek.aclamacionId}</span>
        </div>
        <span class="material-symbols-outlined" style="color: #ca8a04;">open_in_new</span>
      </a>
      <a href="${salmoHoy ? `index.html#canto=${salmoHoy.id}` : 'index.html'}" class="today-song-card">
        <div>
          <small>📖 Salmo de Hoy (${diaHoyNombre})</small>
          <strong>${salmoHoy ? salmoHoy.title : `${diaHoyNombre} de la ${activeWeek.semanaNum}ª semana`}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${salmoHoy ? (salmoHoy.subtitle || '') : activeWeek.cicloParImpar}</span>
        </div>
        <span class="material-symbols-outlined" style="color: var(--accent-color, #d01212);">open_in_new</span>
      </a>
    `;
  }

  if (stripEl) {
    const startSunday = parseLocalISO(activeWeek.fechaInicio);
    stripEl.innerHTML = DIAS_SEMANA.map((diaNom, idx) => {
      const dDate = new Date(startSunday.getFullYear(), startSunday.getMonth(), startSunday.getDate() + idx);
      const dISO = toLocalISO(dDate);
      const isToday = (dISO === hoyISO);
      const salmoDia = buscarSalmoParaDia(activeWeek, diaNom, dDate);
      const href = salmoDia ? `index.html#canto=${salmoDia.id}` : 'index.html';

      return `
        <a href="${href}" class="day-strip-item ${isToday ? 'is-today' : ''}">
          <div class="day-strip-header">
            <span>${diaNom.toUpperCase()} ${dDate.getDate()}/${dDate.getMonth() + 1}</span>
            ${isToday ? '<span style="background:#eab308;color:#fff;padding:1px 6px;border-radius:99px;font-size:0.65rem;">HOY</span>' : ''}
          </div>
          <div class="day-strip-title">${salmoDia ? salmoDia.title : `${diaNom} - Sem. ${activeWeek.semanaNum}`}</div>
          <div class="day-strip-sub">${salmoDia ? (salmoDia.subtitle || salmoDia.ciclo) : ''}</div>
        </a>
      `;
    }).join('');
  }
}

function renderWeeksTable() {
  const tbody = document.getElementById('liturgia-year-tbody');
  if (!tbody) return;

  const filterTiempo = document.getElementById('filter-lit-tiempo')?.value || 'Todos';
  const query = normalizeText(document.getElementById('search-lit-week')?.value || '');
  const hoyISO = toLocalISO(new Date());

  const rowsFiltered = weeksData.map((w, index) => ({ ...w, _origIdx: index })).filter(w => {
    if (filterTiempo !== 'Todos' && w.tiempo !== filterTiempo) return false;
    if (query) {
      const hay = normalizeText(`${w.tiempo} ${w.semanaNum} ${w.celebracion} ${w.fechaInicio} ${w.fechaFin} ${w.cicloDominical} ${w.cicloParImpar} ${w.aclamacionId}`);
      if (!hay.includes(query)) return false;
    }
    return true;
  });

  if (rowsFiltered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:2rem;color:var(--text-muted);">No hay semanas que coincidan con el filtro actual.</td></tr>`;
    return;
  }

  tbody.innerHTML = rowsFiltered.map(row => {
    const idx = row._origIdx;
    const isCurrent = (hoyISO >= row.fechaInicio && hoyISO <= row.fechaFin);

    return `
      <tr class="${isCurrent ? 'row-current-week' : ''}" data-row-idx="${idx}" id="${isCurrent ? 'current-liturgical-week-row' : ''}">
        <td style="font-weight:800; text-align:center;">
          #${idx + 1}
          ${isCurrent ? '<div style="font-size:0.65rem;background:#eab308;color:#fff;border-radius:4px;padding:1px 4px;margin-top:2px;">ACTUAL</div>' : ''}
        </td>
        <td>
          <input type="date" data-field="fechaInicio" data-idx="${idx}" value="${row.fechaInicio || ''}">
        </td>
        <td>
          <input type="date" data-field="fechaFin" data-idx="${idx}" value="${row.fechaFin || ''}">
        </td>
        <td>
          <select data-field="tiempo" data-idx="${idx}">
            ${['Adviento', 'Navidad', 'Tiempo Ordinario', 'Cuaresma', 'Pascua', 'Solemnidades y Fiestas'].map(t =>
              `<option value="${t}" ${row.tiempo === t ? 'selected' : ''}>${t}</option>`
            ).join('')}
          </select>
        </td>
        <td>
          <input type="number" min="0" max="34" data-field="semanaNum" data-idx="${idx}" value="${row.semanaNum ?? 1}">
        </td>
        <td>
          <input type="text" data-field="celebracion" data-idx="${idx}" value="${(row.celebracion || '').replace(/"/g, '&quot;')}">
        </td>
        <td>
          <select data-field="cicloDominical" data-idx="${idx}">
            ${['Ciclo A', 'Ciclo B', 'Ciclo C'].map(c =>
              `<option value="${c}" ${row.cicloDominical === c ? 'selected' : ''}>${c}</option>`
            ).join('')}
          </select>
        </td>
        <td>
          <select data-field="cicloParImpar" data-idx="${idx}">
            ${['Año Par', 'Año Impar'].map(p =>
              `<option value="${p}" ${row.cicloParImpar === p ? 'selected' : ''}>${p}</option>`
            ).join('')}
          </select>
        </td>
        <td>
          <input type="text" data-field="aclamacionId" data-idx="${idx}" value="${row.aclamacionId || ''}">
        </td>
        <td>
          <div class="row-actions">
            <a href="index.html#canto=${row.aclamacionId}" class="btn-row-icon" title="Abrir Aclamación de esta semana">
              <span class="material-symbols-outlined" style="font-size: 1rem;">music_note</span>
            </a>
            <button type="button" class="btn-row-icon btn-apply-week-now" data-idx="${idx}" title="Fijar esta semana como activa hoy">
              <span class="material-symbols-outlined" style="font-size: 1rem; color: #ca8a04;">star</span>
            </button>
            <button type="button" class="btn-row-icon btn-delete-week-row" data-idx="${idx}" title="Eliminar fila">
              <span class="material-symbols-outlined" style="font-size: 1rem; color: #dc2626;">delete</span>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function mostrarAlerta(mensaje, tipo = 'success') {
  const banner = document.getElementById('liturgia-alert-banner');
  if (!banner) return;
  banner.style.display = 'flex';
  if (tipo === 'success') {
    banner.style.background = '#dcfce7';
    banner.style.color = '#15803d';
    banner.style.border = '1px solid #86efac';
  } else {
    banner.style.background = '#fef3c7';
    banner.style.color = '#b45309';
    banner.style.border = '1px solid #fde68a';
  }
  banner.innerHTML = `<span class="material-symbols-outlined">${tipo === 'success' ? 'check_circle' : 'info'}</span> <span>${mensaje}</span>`;
  setTimeout(() => {
    banner.style.display = 'none';
  }, 5000);
}

async function guardarCalendarioCompleto() {
  const payload = {
    year: currentYear,
    updatedAt: Date.now(),
    semanas: weeksData
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

  let subidoCloud = false;
  try {
    if (getCurrentUser()) {
      await setDoc(doc(db, 'config', 'calendario_liturgico_anual'), payload);
      subidoCloud = true;
    }
  } catch (e) {
    console.warn('No se pudo respaldar en Firebase Cloud:', e);
  }

  renderHeroToday();
  mostrarAlerta(
    subidoCloud
      ? `¡Calendario Litúrgico Anual (${weeksData.length} semanas) guardado en el dispositivo y sincronizado en Firebase Cloud!`
      : `¡Calendario Litúrgico Anual (${weeksData.length} semanas) guardado exitosamente en este dispositivo!`
  );
}

function inicializarDatosAnuales(year) {
  currentYear = Number(year) || new Date().getFullYear();
  try {
    const savedStr = localStorage.getItem(STORAGE_KEY);
    if (savedStr) {
      const saved = JSON.parse(savedStr);
      const list = Array.isArray(saved) ? saved : (saved && Array.isArray(saved.semanas) ? saved.semanas : []);
      if (list.length > 0 && Number(saved.year || currentYear) === currentYear) {
        weeksData = list;
        return;
      }
    }
  } catch (e) {
    console.warn('Error leyendo calendario guardado:', e);
  }
  weeksData = generarCalendarioAnual(currentYear);
}

document.addEventListener('DOMContentLoaded', async () => {
  const selectYear = document.getElementById('select-lit-year');
  if (selectYear) {
    selectYear.value = String(currentYear);
  }

  inicializarDatosAnuales(currentYear);
  renderWeeksTable();
  await cargarCatalogosLiturgicos();
  renderHeroToday();

  // Intentar sincronizar desde Firebase Cloud si el usuario está autenticado
  onAuthStateChanged(async (user) => {
    if (!user) return;
    try {
      const snap = await getDoc(doc(db, 'config', 'calendario_liturgico_anual'));
      if (snap && snap.exists()) {
        const cloudData = snap.data();
        if (cloudData && Array.isArray(cloudData.semanas) && cloudData.semanas.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData));
          if (Number(cloudData.year) === currentYear) {
            weeksData = cloudData.semanas;
            renderWeeksTable();
            renderHeroToday();
          }
        }
      }
    } catch (e) {
      // Silencioso si no hay permisos
    }
  });

  // Listeners de tabla editable
  const tbody = document.getElementById('liturgia-year-tbody');
  if (tbody) {
    tbody.addEventListener('change', (e) => {
      const target = e.target;
      const idx = Number(target.dataset.idx);
      const field = target.dataset.field;
      if (isNaN(idx) || !field || !weeksData[idx]) return;

      weeksData[idx][field] = (field === 'semanaNum') ? Number(target.value) : target.value;

      // Si cambió tiempo, semanaNum o cicloDominical, actualizar automáticamente aclamacionId
      if (field === 'tiempo' || field === 'semanaNum' || field === 'cicloDominical') {
        weeksData[idx].aclamacionId = construirAclamacionId(
          weeksData[idx].tiempo,
          weeksData[idx].semanaNum,
          weeksData[idx].cicloDominical
        );
        renderWeeksTable();
      }
      renderHeroToday();
    });

    tbody.addEventListener('click', async (e) => {
      const btnApply = e.target.closest('.btn-apply-week-now');
      if (btnApply) {
        const idx = Number(btnApply.dataset.idx);
        const row = weeksData[idx];
        if (!row) return;

        const nextSat = new Date();
        const daysUntilSat = (6 - nextSat.getDay() + 7) % 7 || 7;
        nextSat.setDate(nextSat.getDate() + daysUntilSat);
        nextSat.setHours(15, 0, 0, 0);

        const overrideData = {
          active: true,
          ciclo: row.cicloDominical,
          cicloParImpar: row.cicloParImpar,
          tiempo: row.tiempo,
          semanaId: String(row.semanaNum),
          semanaNombre: row.celebracion,
          songId: row.aclamacionId,
          expiresAt: nextSat.getTime(),
          updatedAt: Date.now()
        };
        localStorage.setItem('liturgia_override', JSON.stringify(overrideData));
        mostrarAlerta(`Semana "${row.celebracion}" fijada como activa para Aclamaciones y Eucaristía.`);
        renderHeroToday();
        return;
      }

      const btnDelete = e.target.closest('.btn-delete-week-row');
      if (btnDelete) {
        const idx = Number(btnDelete.dataset.idx);
        if (!isNaN(idx) && weeksData[idx]) {
          weeksData.splice(idx, 1);
          renderWeeksTable();
        }
      }
    });
  }

  // Controles superiores
  if (selectYear) {
    selectYear.addEventListener('change', () => {
      currentYear = Number(selectYear.value);
      weeksData = generarCalendarioAnual(currentYear);
      renderWeeksTable();
      renderHeroToday();
    });
  }

  document.getElementById('filter-lit-tiempo')?.addEventListener('change', renderWeeksTable);
  document.getElementById('search-lit-week')?.addEventListener('input', renderWeeksTable);

  document.getElementById('btn-save-full-year')?.addEventListener('click', guardarCalendarioCompleto);

  document.getElementById('btn-recalc-year')?.addEventListener('click', () => {
    weeksData = generarCalendarioAnual(currentYear);
    localStorage.removeItem('liturgia_override');
    guardarCalendarioCompleto();
    renderWeeksTable();
  });

  document.getElementById('btn-add-week-row')?.addEventListener('click', () => {
    const last = weeksData[weeksData.length - 1];
    let start = new Date(currentYear, 0, 1);
    if (last && last.fechaFin) {
      const end = parseLocalISO(last.fechaFin);
      start = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 1);
    }
    const nueva = calcularSemanaLiturgicaParaDomingo(start);
    weeksData.push(nueva);
    renderWeeksTable();
  });

  document.getElementById('btn-scroll-current-week')?.addEventListener('click', () => {
    const rowEl = document.getElementById('current-liturgical-week-row');
    if (rowEl) {
      rowEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      mostrarAlerta('La semana actual no está visible con el filtro seleccionado.', 'info');
    }
  });

  document.getElementById('btn-export-lit-json')?.addEventListener('click', () => {
    const payload = { year: currentYear, updatedAt: Date.now(), semanas: weeksData };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calendario_liturgico_${currentYear}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  const fileInput = document.getElementById('input-import-lit-file');
  document.getElementById('btn-import-lit-json')?.addEventListener('click', () => fileInput?.click());
  fileInput?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        const list = Array.isArray(parsed) ? parsed : (parsed && Array.isArray(parsed.semanas) ? parsed.semanas : []);
        if (list.length > 0) {
          weeksData = list;
          if (parsed.year && selectYear) {
            currentYear = Number(parsed.year);
            selectYear.value = String(currentYear);
          }
          guardarCalendarioCompleto();
          renderWeeksTable();
        }
      } catch (err) {
        mostrarAlerta('El archivo JSON no tiene un formato válido.', 'info');
      }
    };
    reader.readAsText(file);
  });
});
