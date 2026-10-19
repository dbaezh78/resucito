// src/js/frmcanto.js - Lógica interactiva para la creación de cantos en Resucitó

import { db, doc, setDoc, getDoc, collection, getDocs, onSnapshot } from "../firebase.js";
import { getCurrentUser, isCurrentUserAdmin, onAuthStateChanged } from "../auth.js";
import { hasPermission } from "../accesscontrol.js";
import { CHROMATIC_SCALE, parseChord, normalizeChord } from "../chords.js";

// Estado principal del Canto
export const songState = {
  id: '',
  title: '',
  subtitle: '',
  book: 'resucito',
  stage: 'Precatecumenado',
  stageColor: '#F8D147',
  acorde: 'La',
  cejilla: '',
  moments: ['Entrada'],
  audioSrc: '',
  dbno: '',
  lines: []
};

// Generar ID / slug limpio para URL y archivo JSON
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
    .replace(/[^a-z0-9]/g, '')       // Solo letras y números sin guiones
    .trim();
}

// Colores oficiales por Etapa y Categoría
export const STAGE_COLORS = {
  'Precatecumenado': '#F8D147',
  'Liturgia': '#2E7D32',
  'Catecumenado': '#1565C0',
  'Elección': '#EEEEEE',
  'Salmodias': '#F8D147',
  'Católicos': '#6f42c1',
  'Aclamaciones': '#2E7D32',
  'Eucaristía': '#d01212'
};

// Opciones de Etapa / Categoría según el Libro seleccionado
export const BOOK_STAGES = {
  'resucito': [
    { value: 'Precatecumenado', label: 'Precatecumenado (Amarillo)', color: '#F8D147' },
    { value: 'Liturgia', label: 'Liturgia (Verde)', color: '#2E7D32' },
    { value: 'Catecumenado', label: 'Catecumenado (Azul)', color: '#1565C0' },
    { value: 'Elección', label: 'Elección (Blanco)', color: '#EEEEEE' },
    { value: 'Salmodias', label: 'Salmodias', color: '#F8D147' }
  ],
  'joven': [
    { value: 'Católicos', label: 'Católicos', color: '#6f42c1' }
  ],
  'aclamaciones': [
    { value: 'Aclamaciones', label: 'Aclamaciones', color: '#2E7D32' },
    { value: 'Liturgia', label: 'Liturgia (Verde)', color: '#2E7D32' }
  ],
  'eucaristia': [
    { value: 'Eucaristía', label: 'Eucaristía (Salmos)', color: '#d01212' }
  ],
  'salmodias': [
    { value: 'Salmodias', label: 'Salmodias', color: '#F8D147' },
    { value: 'Precatecumenado', label: 'Precatecumenado', color: '#F8D147' },
    { value: 'Liturgia', label: 'Liturgia', color: '#2E7D32' }
  ]
};

// Carpetas de destino por Libro
export const BOOK_FOLDERS = {
  'resucito': 'data/songs',
  'joven': 'data/joven',
  'aclamaciones': 'data/songs-ae',
  'eucaristia': 'data/seucaristia',
  'salmodias': 'data/songs'
};

// Referencias a elementos del DOM
let elFormTitle, elFormSubtitle, elFormId, elFormBook, elFormStage, elFormAcorde, elFormCejilla, elFormAudio, elFormDbno;
let elRawTextarea, elBtnParseRaw, elStavesContainer, elContextMenu, elCreatedSongsList;
let activeChordTarget = { lineIdx: -1, chordIdx: -1, clickOffsetPct: 0 };

// Inicializar la interfaz del formulario
export function initFrmCanto() {
  // Bind inputs
  elFormTitle = document.getElementById('frm-title');
  elFormSubtitle = document.getElementById('frm-subtitle');
  elFormId = document.getElementById('frm-id');
  elFormBook = document.getElementById('frm-book');
  elFormStage = document.getElementById('frm-stage');
  elFormAcorde = document.getElementById('frm-acorde');
  elFormCejilla = document.getElementById('frm-cejilla');
  elFormAudio = document.getElementById('frm-audio');
  elFormDbno = document.getElementById('frm-dbno');

  elRawTextarea = document.getElementById('raw-lyrics-input');
  elBtnParseRaw = document.getElementById('btn-parse-raw');
  elStavesContainer = document.getElementById('staves-container');
  elContextMenu = document.getElementById('chord-context-menu');
  elCreatedSongsList = document.getElementById('created-songs-list');

  // Auto-slugify ID al escribir el título
  if (elFormTitle) {
    elFormTitle.addEventListener('input', () => {
      songState.title = elFormTitle.value;
      if (!elFormId.dataset.manualEdit) {
        songState.id = slugify(elFormTitle.value);
        elFormId.value = songState.id;
      }
      if (!songState.audioSrc || songState.audioSrc.includes('audio.resucito.do')) {
        elFormAudio.value = `https://audio.resucito.do/${songState.id}.mp3`;
        songState.audioSrc = elFormAudio.value;
      }
    });
  }

  if (elFormId) {
    elFormId.addEventListener('input', () => {
      elFormId.dataset.manualEdit = 'true';
      songState.id = slugify(elFormId.value);
    });
  }

  if (elFormStage) {
    elFormStage.addEventListener('change', () => {
      songState.stage = elFormStage.value;
      songState.stageColor = STAGE_COLORS[songState.stage] || '#F8D147';
      updateStagePillPreview();
    });
  }

  if (elFormBook) {
    elFormBook.addEventListener('change', () => {
      songState.book = elFormBook.value;
      const folderHint = document.getElementById('target-folder-hint');
      if (folderHint) {
        folderHint.textContent = BOOK_FOLDERS[songState.book] || 'data/songs';
      }
      // Actualizar dinámicamente las opciones de etapa / categoría para el libro
      updateStageOptions(songState.book);

      // Si es Canto Joven, ajustar prefijo de audio por defecto
      if (songState.book === 'joven' && songState.id) {
        if (!elFormAudio.value || elFormAudio.value.includes('audio.resucito.do')) {
          elFormAudio.value = `https://audio.resucito.do/catolico/${songState.id}.mp3`;
          songState.audioSrc = elFormAudio.value;
        }
      }
    });
  }

  // Inicializar opciones de etapa según el libro inicial
  updateStageOptions(songState.book || 'resucito');

  // Parsear texto completo desde el textarea conservando acordes ya colocados
  if (elBtnParseRaw) {
    elBtnParseRaw.addEventListener('click', () => {
      const preserved = parseRawLyrics(elRawTextarea.value, true);
      renderStaves();
      if (preserved > 0) {
        showToast(`Texto actualizado en el editor (${preserved} ${preserved === 1 ? 'acorde conservado' : 'acordes conservados'})`);
      } else {
        showToast('Texto cargado en el editor de líneas');
      }
    });
  }

  // Cargar texto de ejemplo proporcionado por el usuario
  const btnLoadExample = document.getElementById('btn-load-example');
  if (btnLoadExample) {
    btnLoadExample.addEventListener('click', () => {
      const exampleText = `tu eres mi esperanza Señor
y no seé confundido,
con tu gloria tu mes has creado,
en la misericordia tu me has formado.

ME HAS SACADO DE LO PROFUNDO DEL SEON
DE LA BOCA DE LA MUERTE ME HAS ARRANCADO`;

      elRawTextarea.value = exampleText;
      elFormTitle.value = "Tú eres mi esperanza, Señor";
      elFormSubtitle.value = "Salmo 71 (70)";
      songState.title = elFormTitle.value;
      songState.subtitle = elFormSubtitle.value;
      songState.id = slugify(elFormTitle.value);
      elFormId.value = songState.id;
      elFormAudio.value = `https://audio.resucito.do/${songState.id}.mp3`;
      songState.audioSrc = elFormAudio.value;

      parseRawLyrics(exampleText, false); // Cargar ejemplo inicial fresco
      // Pre-configurar Asamblea en el segundo párrafo
      if (songState.lines.length >= 6) {
        songState.lines[4].role = 'A';
        songState.lines[5].role = 'A';
      }
      renderStaves();
      showToast('Texto de ejemplo cargado');
    });
  }

  // Botón para agregar línea vacía o línea normal
  const btnAddLine = document.getElementById('btn-add-line');
  if (btnAddLine) {
    btnAddLine.addEventListener('click', () => {
      addLine('', null);
      renderStaves();
    });
  }

  const btnAddSeparator = document.getElementById('btn-add-separator');
  if (btnAddSeparator) {
    btnAddSeparator.addEventListener('click', () => {
      addLine('', null, true);
      renderStaves();
    });
  }

  // Botón para añadir separador de columna derecha (lder)
  const btnAddColBreak = document.getElementById('btn-add-col-break');
  if (btnAddColBreak) {
    btnAddColBreak.addEventListener('click', () => {
      // Si ya hay un separador de columna, moverlo o avisar
      const existingIdx = songState.lines.findIndex(l => l.isColumnBreak);
      if (existingIdx !== -1) {
        songState.lines.splice(existingIdx, 1);
      }
      songState.lines.push({
        id: 'col_break_' + Math.random().toString(36).substring(2, 9),
        isColumnBreak: true
      });
      renderStaves();
      showToast('Separador de Lado Derecho añadido');
    });
  }

  // Acciones Principales: Guardar en Firebase, Lista, Descargar Canto, Probar
  const btnSaveFirebase = document.getElementById('btn-save-firebase');
  if (btnSaveFirebase) {
    btnSaveFirebase.addEventListener('click', guardarEnFirebase);
  }

  const btnOpenList = document.getElementById('btn-open-list');
  if (btnOpenList) {
    btnOpenList.addEventListener('click', abrirModalLista);
  }

  const btnDownloadCanto = document.getElementById('btn-download-canto');
  if (btnDownloadCanto) {
    btnDownloadCanto.addEventListener('click', descargarCantoJSON);
  }

  const btnPreviewCanto = document.getElementById('btn-preview-canto');
  if (btnPreviewCanto) {
    btnPreviewCanto.addEventListener('click', abrirVistaPrevia);
  }

  // Inicializar Menú Contextual de Acordes
  initChordContextMenu();

  // Escuchar clics globales para cerrar menús
  document.addEventListener('click', (e) => {
    if (elContextMenu && !elContextMenu.contains(e.target)) {
      elContextMenu.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elContextMenu) {
      elContextMenu.style.display = 'none';
    }
  });

  // Cargar lista de cantos creados anteriormente
  cargarCantosGuardados();
}

// Actualizar opciones del select de etapa según el libro seleccionado
export function updateStageOptions(book = 'resucito', keepValue = false) {
  if (!elFormStage) return;
  const stages = BOOK_STAGES[book] || BOOK_STAGES['resucito'];
  const prevVal = keepValue ? elFormStage.value : null;

  elFormStage.innerHTML = stages.map(s => `
    <option value="${s.value}">${s.label}</option>
  `).join('');

  // Actualizar etiqueta visual si es Canto Joven
  const stageLabel = document.querySelector('label[for="frm-stage"]');
  if (stageLabel) {
    stageLabel.textContent = book === 'joven' ? 'Categoría (Canto Joven) *' : 'Etapa Litúrgica *';
  }

  // Si el valor previo es válido en la nueva lista, mantenerlo; sino, seleccionar el primero (ej: Católicos)
  if (prevVal && stages.some(s => s.value === prevVal)) {
    elFormStage.value = prevVal;
  } else {
    elFormStage.value = stages[0].value;
  }

  songState.stage = elFormStage.value;
  songState.stageColor = STAGE_COLORS[songState.stage] || '#F8D147';
  updateStagePillPreview();
}

function updateStagePillPreview() {
  const pill = document.getElementById('stage-color-pill');
  if (pill) {
    pill.style.background = songState.stageColor;
  }
}

// Sincronizar el textarea de texto completo cuando se edita directamente en las líneas
function syncRawTextareaFromLines() {
  if (!elRawTextarea) return;
  if (document.activeElement !== elRawTextarea) {
    elRawTextarea.value = songState.lines.map(l => l.isEmpty ? '' : l.text).join('\n');
  }
}

// Convertir texto plano a la estructura de líneas PRESERVANDO ACORDES Y ROLES EXISTENTES
export function parseRawLyrics(rawText, preserveExisting = true) {
  if (typeof rawText !== 'string') return 0;
  const rawLines = rawText.split('\n');

  // Si debemos conservar datos, guardar copia de líneas previas
  const oldLines = (preserveExisting && Array.isArray(songState.lines)) ? [...songState.lines] : [];
  const claimedOldIndices = new Set();

  const newLines = [];
  let preservedChordsCount = 0;

  rawLines.forEach((raw, newIdx) => {
    const trimmed = raw.trim();
    const isEmpty = trimmed === '';

    let matchedOld = null;
    let matchedOldIdx = -1;

    if (oldLines.length > 0) {
      // 1. Intento de coincidencia exacta por texto
      if (!isEmpty) {
        for (let j = 0; j < oldLines.length; j++) {
          if (!claimedOldIndices.has(j) && oldLines[j].text && oldLines[j].text.trim() === trimmed) {
            matchedOld = oldLines[j];
            matchedOldIdx = j;
            break;
          }
        }
      }

      // 2. Intento de coincidencia difusa (si corrigió un error ortográfico o una palabra)
      if (!matchedOld && !isEmpty) {
        let bestScore = 0;
        let bestIdx = -1;
        for (let j = 0; j < oldLines.length; j++) {
          if (!claimedOldIndices.has(j) && oldLines[j].text) {
            const score = computeTextSimilarity(oldLines[j].text, trimmed);
            if (score > 0.55 && score > bestScore) {
              bestScore = score;
              bestIdx = j;
            }
          }
        }
        if (bestIdx !== -1) {
          matchedOld = oldLines[bestIdx];
          matchedOldIdx = bestIdx;
        }
      }

      // 3. Intento de coincidencia por índice (posición de línea) si aún no fue reclamado
      if (!matchedOld && oldLines[newIdx] && !claimedOldIndices.has(newIdx)) {
        if (Boolean(oldLines[newIdx].isEmpty) === isEmpty) {
          matchedOld = oldLines[newIdx];
          matchedOldIdx = newIdx;
        }
      }
    }

    if (matchedOldIdx !== -1) {
      claimedOldIndices.add(matchedOldIdx);
    }

    // Extraer acordes y propiedades a conservar
    let chords = [];
    let role = null;
    let bisOffsetPct = 88;
    let isParentTitle = false;
    let parentId = null;

    if (matchedOld) {
      if (Array.isArray(matchedOld.chords) && matchedOld.chords.length > 0) {
        // Clonar acordes para mantenerlos completamente intactos
        chords = matchedOld.chords.map(c => ({ ...c }));
        preservedChordsCount += chords.length;
      }
      if (matchedOld.role) {
        role = matchedOld.role;
      }
      if (typeof matchedOld.bisOffsetPct === 'number') {
        bisOffsetPct = matchedOld.bisOffsetPct;
      }
      if (matchedOld.isParentTitle) {
        isParentTitle = true;
      }
      if (matchedOld.parentId) {
        parentId = matchedOld.parentId;
      }
    }

    // Si no tenía rol previo y está en mayúsculas, asignar Asamblea por defecto
    if (!role && !isEmpty) {
      const isUppercase = trimmed.length > 5 && trimmed === trimmed.toUpperCase();
      if (isUppercase) role = 'A';
    }

    newLines.push({
      id: matchedOld ? matchedOld.id : ('line_' + Math.random().toString(36).substring(2, 9)),
      text: trimmed,
      role: role,
      bisOffsetPct: bisOffsetPct,
      isEmpty: isEmpty,
      chords: chords,
      isParentTitle: isParentTitle,
      parentId: parentId
    });
  });

  songState.lines = newLines;
  return preservedChordsCount;
}

// Medir similitud de texto entre dos líneas para reconciliar cambios sin perder acordes
function computeTextSimilarity(s1, s2) {
  if (!s1 || !s2) return 0;
  if (s1 === s2) return 1;
  const c1 = s1.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  const c2 = s2.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  if (c1 === c2) return 1;
  if (c1.length === 0 || c2.length === 0) return 0;
  if (c1.includes(c2) || c2.includes(c1)) return 0.85;

  const tri1 = [];
  for (let i = 0; i < c1.length - 2; i++) tri1.push(c1.substring(i, i + 3));
  if (tri1.length === 0) return 0;
  let matches = 0;
  tri1.forEach(t => { if (c2.includes(t)) matches++; });
  return matches / tri1.length;
}

// Agregar una línea al estado
export function addLine(text = '', role = null, isEmpty = false, isParentTitle = false, parentId = null) {
  songState.lines.push({
    id: 'line_' + Math.random().toString(36).substring(2, 9),
    text: text,
    role: role, // null, 'A', 'C', 'B', 'N'
    bisOffsetPct: 88, // Posición por defecto del BIS (al final de la línea)
    isEmpty: isEmpty,
    chords: [], // [{ id, name, type, offsetPct }]
    isParentTitle: isParentTitle,
    parentId: parentId
  });
}

// Calcular jerarquía de Títulos Expandibles (t1, t2...) y Versos Anidados (t1a, t1b...)
export function computeTitleHierarchy(lines) {
  const parentMap = new Map(); // parentLineId -> { code: 't1', parentLine, childIds: [] }
  const lineInfoMap = new Map(); // lineId -> { isParent: boolean, parentCode: 't1', isChild: boolean, childCode: 't1a', parentLineId: ... }
  let parentCount = 0;

  if (!Array.isArray(lines)) return { parentMap, lineInfoMap };

  // 1. Identificar padres en orden de aparición en el canto
  lines.forEach(l => {
    if (l && l.isParentTitle && !l.isEmpty && !l.isColumnBreak) {
      parentCount++;
      const code = `t${parentCount}`;
      parentMap.set(l.id, {
        code: code,
        parentLine: l,
        childIds: []
      });
      lineInfoMap.set(l.id, {
        isParent: true,
        parentCode: code
      });
    }
  });

  // 2. Asociar versos hijos a sus respectivos padres
  lines.forEach(l => {
    if (!l || l.isEmpty || l.isColumnBreak || l.isParentTitle) return;
    if (l.parentId && parentMap.has(l.parentId)) {
      const pData = parentMap.get(l.parentId);
      pData.childIds.push(l.id);
      const letter = String.fromCharCode(97 + ((pData.childIds.length - 1) % 26)); // 'a', 'b', 'c'...
      const childCode = `${pData.code}${letter}`;
      lineInfoMap.set(l.id, {
        isChild: true,
        parentCode: pData.code,
        childCode: childCode,
        parentLineId: l.parentId
      });
    }
  });

  return { parentMap, lineInfoMap };
}

// Renderizar las líneas en el contenedor interactivo
export function renderStaves() {
  if (!elStavesContainer) return;
  if (songState.lines.length === 0) {
    elStavesContainer.innerHTML = `
      <div style="padding: 30px; text-align: center; color: var(--frm-muted); background: rgba(0,0,0,0.02); border-radius: 12px; border: 1.5px dashed var(--frm-border);">
        <span class="material-symbols-outlined" style="font-size: 36px; color: var(--frm-accent); opacity: 0.6;">edit_note</span>
        <p style="margin: 8px 0 0 0; font-size: 0.9rem;">Escribe o pega el canto arriba y pulsa "Cargar en el Editor", o añade líneas manualmente.</p>
      </div>
    `;
    return;
  }

  // Calcular jerarquía de Títulos y Versos Anidados
  const { parentMap, lineInfoMap } = computeTitleHierarchy(songState.lines);

  // Habilitar arrastre con el mouse de filas (drag and drop)
  function setupRowDragAndDrop(element, idx) {
    const handle = element.querySelector('.stave-drag-handle');
    if (!handle) return;

    handle.addEventListener('mousedown', () => {
      element.draggable = true;
    });

    handle.addEventListener('mouseleave', () => {
      if (!element.classList.contains('is-dragging')) {
        element.draggable = false;
      }
    });

    element.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', String(idx));
      e.dataTransfer.effectAllowed = 'move';
      element.classList.add('is-dragging');
    });

    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      element.classList.add('drag-over');
    });

    element.addEventListener('dragleave', () => {
      element.classList.remove('drag-over');
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      element.classList.remove('drag-over');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
      if (!isNaN(fromIdx) && fromIdx !== idx) {
        const item = songState.lines.splice(fromIdx, 1)[0];
        songState.lines.splice(idx, 0, item);

        // Adopción inteligente del padre en arrastrar y soltar
        if (!item.isParentTitle && !item.isEmpty && !item.isColumnBreak) {
          const prevLine = idx > 0 ? songState.lines[idx - 1] : null;
          const nextLine = idx < songState.lines.length - 1 ? songState.lines[idx + 1] : null;

          if (prevLine && (prevLine.isParentTitle || prevLine.parentId)) {
            const targetParentId = prevLine.isParentTitle ? prevLine.id : prevLine.parentId;
            if (nextLine && nextLine.parentId === targetParentId) {
              item.parentId = targetParentId;
            } else if (item.parentId === targetParentId) {
              // Mantuvo su posición dentro del mismo padre
            }
          } else if (!prevLine || (!prevLine.isParentTitle && !prevLine.parentId)) {
            if (nextLine && !nextLine.parentId && !nextLine.isParentTitle) {
              // Se movió a una sección común fuera de bloques
              item.parentId = null;
            }
          }
        }

        renderStaves();
        syncRawTextareaFromLines();
      }
    });

    element.addEventListener('dragend', () => {
      element.draggable = false;
      element.classList.remove('is-dragging');
      document.querySelectorAll('.drag-over, .is-dragging').forEach(el => el.classList.remove('drag-over', 'is-dragging'));
    });
  }

  elStavesContainer.innerHTML = '';
  let currentSide = 'izq';

  songState.lines.forEach((line, idx) => {
    // 1. Caso especial: Separador de Columna Derecha (lder)
    if (line.isColumnBreak) {
      currentSide = 'der';
      const sepEl = document.createElement('div');
      sepEl.className = 'column-separator-card';
      sepEl.dataset.lineIdx = idx;
      sepEl.innerHTML = `
        <span class="stave-drag-handle material-symbols-outlined" title="Arrastra con el mouse para reordenar">drag_indicator</span>
        <div class="col-sep-line"></div>
        <div class="col-sep-badge">
          <span class="material-symbols-outlined">view_column</span>
          <span>INICIO LADO DERECHO (Columna Derecha - lder)</span>
        </div>
        <div class="col-sep-line"></div>
        <button type="button" class="btn-stave-ctrl" title="Subir separador" data-action="move-up" ${idx === 0 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_upward</span></button>
        <button type="button" class="btn-stave-ctrl" title="Bajar separador" data-action="move-down" ${idx === songState.lines.length - 1 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_downward</span></button>
        <button type="button" class="btn-col-sep-delete" data-action="delete-col-break" title="Eliminar separador de columna">&times;</button>
      `;

      setupRowDragAndDrop(sepEl, idx);

      const btnMoveUpSep = sepEl.querySelector('[data-action="move-up"]');
      if (btnMoveUpSep) {
        btnMoveUpSep.addEventListener('click', () => {
          if (idx > 0) {
            const item = songState.lines.splice(idx, 1)[0];
            songState.lines.splice(idx - 1, 0, item);
            renderStaves();
            syncRawTextareaFromLines();
          }
        });
      }

      const btnMoveDownSep = sepEl.querySelector('[data-action="move-down"]');
      if (btnMoveDownSep) {
        btnMoveDownSep.addEventListener('click', () => {
          if (idx < songState.lines.length - 1) {
            const item = songState.lines.splice(idx, 1)[0];
            songState.lines.splice(idx + 1, 0, item);
            renderStaves();
            syncRawTextareaFromLines();
          }
        });
      }

      const btnDelCol = sepEl.querySelector('[data-action="delete-col-break"]');
      if (btnDelCol) {
        btnDelCol.addEventListener('click', () => {
          songState.lines.splice(idx, 1);
          renderStaves();
          showToast('Separador de columna eliminado. Todas las líneas vuelven al Lado Izquierdo.');
        });
      }
      elStavesContainer.appendChild(sepEl);
      return;
    }

    const lineInfo = lineInfoMap.get(line.id) || {};
    const isParent = !!lineInfo.isParent;
    const isChild = !!lineInfo.isChild;
    const parentCode = lineInfo.parentCode || '';
    const childCode = lineInfo.childCode || '';

    // Buscar si hay un título padre activo previo para ofrecer la opción de anidar
    let nearestParentAbove = null;
    for (let j = idx - 1; j >= 0; j--) {
      if (songState.lines[j].isColumnBreak) break;
      if (songState.lines[j].isParentTitle) {
        nearestParentAbove = songState.lines[j];
        break;
      } else if (songState.lines[j].parentId) {
        nearestParentAbove = songState.lines.find(p => p.id === songState.lines[j].parentId);
        break;
      }
    }

    const rowEl = document.createElement('div');
    rowEl.className = `stave-line-row ${line.isEmpty ? 'is-empty-line' : ''} ${line.role ? 'role-' + line.role.toLowerCase() : ''} ${isParent ? 'is-parent-title' : ''} ${isChild ? 'is-child-line' : ''}`;
    rowEl.dataset.lineIdx = idx;

    if (line.isEmpty) {
      rowEl.innerHTML = `
        <span class="stave-drag-handle material-symbols-outlined" title="Arrastra con el mouse para reordenar línea">drag_indicator</span>
        <span class="stave-line-idx">${idx + 1}</span>
        <span class="stave-side-indicator side-${currentSide}">${currentSide.toUpperCase()}</span>
        <span style="font-size: 0.78rem; color: var(--frm-muted); font-style: italic; flex: 1; user-select: none;">[ Separador de Estrofa ]</span>
        <div class="stave-controls">
          <button type="button" class="btn-stave-ctrl" title="Subir línea" data-action="move-up" ${idx === 0 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_upward</span></button>
          <button type="button" class="btn-stave-ctrl" title="Bajar línea" data-action="move-down" ${idx === songState.lines.length - 1 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_downward</span></button>
          <button type="button" class="btn-stave-ctrl" title="Iniciar Lado Derecho debajo de esta línea" data-action="split-to-right"><span class="material-symbols-outlined">view_column</span></button>
          <button class="btn-stave-ctrl delete" title="Eliminar espacio" data-action="delete-line"><span class="material-symbols-outlined">delete</span></button>
        </div>
      `;
      setupRowDragAndDrop(rowEl, idx);
    } else {
      // Role badge text and icon
      let roleLetter = '-';
      if (line.role === 'A') roleLetter = 'A';
      else if (line.role === 'C') roleLetter = 'C';
      else if (line.role === 'B') roleLetter = 'B';
      else if (line.role === 'N') roleLetter = 'N';

      // Etiqueta visual de rol / jerarquía
      let hierarchyBadgeHtml = '';
      if (isParent) {
        hierarchyBadgeHtml = `<span class="parent-title-badge" title="Título Principal Expandible (${parentCode.toUpperCase()})"><span class="material-symbols-outlined" style="font-size:13px;">unfold_more</span> ${parentCode.toUpperCase()}</span>`;
      } else if (isChild) {
        hierarchyBadgeHtml = `<span class="child-title-badge" title="Verso anidado perteneciente a ${parentCode.toUpperCase()}"><span class="material-symbols-outlined">subdirectory_arrow_right</span> ${childCode}</span>`;
      } else {
        hierarchyBadgeHtml = `<span class="stave-side-indicator side-${currentSide}" title="${currentSide === 'izq' ? 'Lado Izquierdo (lizq)' : 'Lado Derecho (lder)'}">${currentSide.toUpperCase()}</span>`;
      }

      // Botones de jerarquía según el estado de la línea
      let hierarchyControlsHtml = '';
      if (isParent) {
        hierarchyControlsHtml = `
          <button type="button" class="btn-stave-ctrl btn-toggle-parent active" title="Quitar Título Expandible (${parentCode.toUpperCase()})" data-action="toggle-parent"><span class="material-symbols-outlined">unfold_less</span></button>
          <button type="button" class="btn-stave-ctrl" title="Añadir verso anidado a ${parentCode.toUpperCase()}" data-action="add-child-line"><span class="material-symbols-outlined">playlist_add</span></button>
        `;
      } else if (isChild) {
        hierarchyControlsHtml = `
          <button type="button" class="btn-stave-ctrl outdent-ctrl" title="Desanidar verso de ${parentCode.toUpperCase()} (convertir en verso normal)" data-action="outdent-child"><span class="material-symbols-outlined">format_indent_decrease</span></button>
        `;
      } else {
        hierarchyControlsHtml = `
          <button type="button" class="btn-stave-ctrl btn-toggle-parent" title="Convertir en Título Expandible (t1, t2...)" data-action="toggle-parent"><span class="material-symbols-outlined">unfold_more</span></button>
          ${nearestParentAbove ? `<button type="button" class="btn-stave-ctrl indent-ctrl" title="Anidar verso en ${parentMap.get(nearestParentAbove.id)?.code?.toUpperCase() || 'Título'}" data-action="indent-child"><span class="material-symbols-outlined">format_indent_increase</span></button>` : ''}
        `;
      }

      rowEl.innerHTML = `
        <span class="stave-drag-handle material-symbols-outlined" title="Arrastra con el mouse para reordenar línea">drag_indicator</span>
        <span class="stave-line-idx">${idx + 1}</span>
        ${hierarchyBadgeHtml}
        
        <!-- Botón de Rol (Normal -> A -> C -> B -> N -> Normal) -->
        <button type="button" class="btn-role-toggle ${line.role ? 'role-' + line.role.toLowerCase() : ''}" 
                title="Rol: ${line.role === 'A' ? 'Asamblea (A)' : line.role === 'C' ? 'Cantor (C)' : line.role === 'B' ? 'BIS (B)' : line.role === 'N' ? 'Negrita (N)' : 'Normal (Clic para A)'}">
          ${roleLetter}
        </button>

        <!-- Contenido Central: Pista de Acordes + Pista de Letra -->
        <div class="stave-content">
          <!-- Pista Superior de Acordes (Clic derecho para agregar acorde o dividir columna) -->
          <div class="chord-track" title="Clic derecho aquí para poner un acorde o insertar Separador Lado Derecho">
            ${line.chords.length === 0 ? '<span class="chord-track-empty-hint">Clic derecho para colocar acorde</span>' : ''}
            <!-- Los acordes se insertan aquí como chips arrastrables -->
          </div>

          <!-- Pista Inferior de Letra -->
          <div class="lyrics-track-wrapper">
            <input type="text" class="lyrics-input" value="${escapeHtml(line.text)}" placeholder="Escribe aquí la letra de la línea...">
            <!-- Si está activo el modo BIS (B), insertar la píldora desplazable de BIS -->
            ${line.role === 'B' ? `
              <div class="bis-movable-pill" style="left: ${line.bisOffsetPct || 88}%;" title="Arrastra el BIS a donde lo necesites en esta línea">
                <span class="material-symbols-outlined">repeat</span>
                <span>BIS</span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Controles de Línea -->
        <div class="stave-controls">
          <button type="button" class="btn-stave-ctrl" title="Subir línea" data-action="move-up" ${idx === 0 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_upward</span></button>
          <button type="button" class="btn-stave-ctrl" title="Bajar línea" data-action="move-down" ${idx === songState.lines.length - 1 ? 'disabled style="opacity:0.25;cursor:not-allowed;"' : ''}><span class="material-symbols-outlined">arrow_downward</span></button>
          ${hierarchyControlsHtml}
          <button type="button" class="btn-stave-ctrl" title="Añadir acorde rápido" data-action="quick-chord"><span class="material-symbols-outlined">music_note</span></button>
          <button type="button" class="btn-stave-ctrl" title="Insertar Separador de Estrofa debajo" data-action="insert-space"><span class="material-symbols-outlined">space_bar</span></button>
          <button type="button" class="btn-stave-ctrl" title="Iniciar Lado Derecho debajo de esta línea" data-action="split-to-right"><span class="material-symbols-outlined">view_column</span></button>
          <button type="button" class="btn-stave-ctrl" title="Añadir línea debajo" data-action="insert-below"><span class="material-symbols-outlined">add</span></button>
          <button type="button" class="btn-stave-ctrl delete" title="Eliminar línea" data-action="delete-line"><span class="material-symbols-outlined">delete</span></button>
        </div>
      `;

      // Habilitar drag & drop con el mouse para esta fila
      setupRowDragAndDrop(rowEl, idx);

      // Renderizar los chips de acordes en la pista
      const chordTrack = rowEl.querySelector('.chord-track');
      renderLineChords(chordTrack, line, idx);

      // Listener para arrastrar el BIS si existe
      if (line.role === 'B') {
        const bisPill = rowEl.querySelector('.bis-movable-pill');
        const lyricsWrapper = rowEl.querySelector('.lyrics-track-wrapper');
        setupBisDragging(bisPill, lyricsWrapper, line);
      }

      // Evento input para sincronizar el texto editado en tiempo real sin tocar los acordes
      const inputEl = rowEl.querySelector('.lyrics-input');
      inputEl.addEventListener('input', () => {
        line.text = inputEl.value;
        syncRawTextareaFromLines();
      });

      // Evento de clic en el botón de Rol (ciclo: Normal -> A -> C -> B -> N -> Normal)
      const btnRole = rowEl.querySelector('.btn-role-toggle');
      btnRole.addEventListener('click', () => {
        if (!line.role) line.role = 'A';
        else if (line.role === 'A') line.role = 'C';
        else if (line.role === 'C') line.role = 'B';
        else if (line.role === 'B') line.role = 'N';
        else line.role = null;
        renderStaves();
      });

      // Clic derecho en la pista de acordes para abrir el selector de acordes
      chordTrack.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openChordMenuAt(e, idx, -1, chordTrack);
      });

      // Botón para convertir o quitar Título Expandible
      const btnToggleParent = rowEl.querySelector('[data-action="toggle-parent"]');
      if (btnToggleParent) {
        btnToggleParent.addEventListener('click', () => {
          if (line.isParentTitle) {
            line.isParentTitle = false;
            // Desanidar hijos
            songState.lines.forEach(l => {
              if (l.parentId === line.id) l.parentId = null;
            });
            showToast('Título Expandible desmarcado');
          } else {
            line.isParentTitle = true;
            line.parentId = null;
            if (!line.role) line.role = 'A';
            showToast('Convertido en Título Principal Expandible');
          }
          renderStaves();
          syncRawTextareaFromLines();
        });
      }

      // Botón para añadir verso anidado al título
      const btnAddChild = rowEl.querySelector('[data-action="add-child-line"]');
      if (btnAddChild) {
        btnAddChild.addEventListener('click', () => {
          let insertIdx = idx;
          for (let j = idx + 1; j < songState.lines.length; j++) {
            if (songState.lines[j].parentId === line.id) {
              insertIdx = j;
            } else {
              break;
            }
          }
          songState.lines.splice(insertIdx + 1, 0, {
            id: 'line_' + Math.random().toString(36).substring(2, 9),
            text: '',
            role: line.role || 'A',
            bisOffsetPct: 88,
            isEmpty: false,
            chords: [],
            isParentTitle: false,
            parentId: line.id
          });
          renderStaves();
          syncRawTextareaFromLines();
          showToast(`Verso anidado a ${parentCode.toUpperCase()} añadido`);
        });
      }

      // Botón para anidar verso en el título padre previo
      const btnIndent = rowEl.querySelector('[data-action="indent-child"]');
      if (btnIndent && nearestParentAbove) {
        btnIndent.addEventListener('click', () => {
          line.parentId = nearestParentAbove.id;
          line.isParentTitle = false;
          renderStaves();
          syncRawTextareaFromLines();
          showToast(`Línea anidada en ${parentMap.get(nearestParentAbove.id)?.code?.toUpperCase() || 'Título'}`);
        });
      }

      // Botón para desanidar verso
      const btnOutdent = rowEl.querySelector('[data-action="outdent-child"]');
      if (btnOutdent) {
        btnOutdent.addEventListener('click', () => {
          line.parentId = null;
          renderStaves();
          syncRawTextareaFromLines();
          showToast('Verso desanidado (convertido a línea normal)');
        });
      }
    }

    // Acción para subir línea
    const btnMoveUp = rowEl.querySelector('[data-action="move-up"]');
    if (btnMoveUp) {
      btnMoveUp.addEventListener('click', () => {
        if (idx > 0) {
          const item = songState.lines.splice(idx, 1)[0];
          songState.lines.splice(idx - 1, 0, item);
          renderStaves();
          syncRawTextareaFromLines();
        }
      });
    }

    // Acción para bajar línea
    const btnMoveDown = rowEl.querySelector('[data-action="move-down"]');
    if (btnMoveDown) {
      btnMoveDown.addEventListener('click', () => {
        if (idx < songState.lines.length - 1) {
          const item = songState.lines.splice(idx, 1)[0];
          songState.lines.splice(idx + 1, 0, item);
          renderStaves();
          syncRawTextareaFromLines();
        }
      });
    }

    // Acción para insertar separador de estrofa debajo
    const btnInsertSpace = rowEl.querySelector('[data-action="insert-space"]');
    if (btnInsertSpace) {
      btnInsertSpace.addEventListener('click', () => {
        songState.lines.splice(idx + 1, 0, {
          id: 'line_' + Math.random().toString(36).substring(2, 9),
          text: '',
          role: null,
          bisOffsetPct: 88,
          isEmpty: true,
          chords: []
        });
        renderStaves();
        syncRawTextareaFromLines();
      });
    }

    // Acción para dividir e iniciar Lado Derecho debajo de esta línea
    const btnSplitRight = rowEl.querySelector('[data-action="split-to-right"]');
    if (btnSplitRight) {
      btnSplitRight.addEventListener('click', () => {
        // Eliminar cualquier column break previo para moverlo a este punto
        songState.lines = songState.lines.filter(l => !l.isColumnBreak);
        songState.lines.splice(idx + 1, 0, {
          id: 'col_break_' + Math.random().toString(36).substring(2, 9),
          isColumnBreak: true
        });
        renderStaves();
        showToast('Separador de Lado Derecho insertado después de la línea');
      });
    }

    // Acciones de controles
    const btnDelete = rowEl.querySelector('[data-action="delete-line"]');
    if (btnDelete) {
      btnDelete.addEventListener('click', () => {
        if (line.isParentTitle) {
          songState.lines.forEach(l => {
            if (l.parentId === line.id) l.parentId = null;
          });
        }
        songState.lines.splice(idx, 1);
        renderStaves();
        syncRawTextareaFromLines();
      });
    }

    const btnInsert = rowEl.querySelector('[data-action="insert-below"]');
    if (btnInsert) {
      btnInsert.addEventListener('click', () => {
        songState.lines.splice(idx + 1, 0, {
          id: 'line_' + Math.random().toString(36).substring(2, 9),
          text: '',
          role: null,
          bisOffsetPct: 88,
          isEmpty: false,
          chords: []
        });
        renderStaves();
        syncRawTextareaFromLines();
      });
    }

    const btnQuickChord = rowEl.querySelector('[data-action="quick-chord"]');
    if (btnQuickChord) {
      btnQuickChord.addEventListener('click', (e) => {
        const chordTrack = rowEl.querySelector('.chord-track');
        openChordMenuAt(e, idx, -1, chordTrack);
      });
    }

    elStavesContainer.appendChild(rowEl);
  });
}

// Helpers de Medición de Texto en 'Franklin Gothic Medium' para alineación perfecta de acordes
let _measureCanvas = null;
let _measureCtx = null;

function getMeasureContext() {
  if (!_measureCtx) {
    _measureCanvas = document.createElement('canvas');
    _measureCtx = _measureCanvas.getContext('2d');
  }
  return _measureCtx;
}

function getCharPixelOffset(text, charIndex, isBold = false, isItalic = false) {
  if (!text) return 8;
  const ctx = getMeasureContext();
  const fontStyle = isItalic ? 'italic ' : '';
  const fontWeight = isBold ? '800 ' : '400 ';
  ctx.font = `${fontStyle}${fontWeight}16.8px "Franklin Gothic Medium", Arial, sans-serif`;
  const safeIdx = Math.max(0, Math.min(text.length, charIndex));
  const sub = text.substring(0, safeIdx);
  const width = ctx.measureText(sub).width;
  // 8px corresponde al padding-left exacto del .lyrics-input
  return 8 + width;
}

function getCharIndexFromPixel(text, pixelX, isBold = false, isItalic = false) {
  if (!text) return 0;
  const ctx = getMeasureContext();
  const fontStyle = isItalic ? 'italic ' : '';
  const fontWeight = isBold ? '800 ' : '400 ';
  ctx.font = `${fontStyle}${fontWeight}16.8px "Franklin Gothic Medium", Arial, sans-serif`;

  const targetX = Math.max(0, pixelX - 8);
  let bestIdx = 0;
  let minDiff = Infinity;

  for (let i = 0; i <= text.length; i++) {
    const w = ctx.measureText(text.substring(0, i)).width;
    const diff = Math.abs(w - targetX);
    if (diff < minDiff) {
      minDiff = diff;
      bestIdx = i;
    }
  }
  return bestIdx;
}

// Renderizar los chips de acordes de una línea y habilitar su arrastre alineado a caracteres
function renderLineChords(chordTrackEl, line, lineIdx) {
  if (!chordTrackEl || !line.chords) return;

  const isBold = line.role === 'A' || line.role === 'N';
  const isItalic = line.role === 'C';

  line.chords.forEach((chord, chordIdx) => {
    // Si no tiene charIndex, calcularlo a partir de offsetPct o posición
    if (typeof chord.charIndex !== 'number') {
      const len = (line.text || '').length || 1;
      chord.charIndex = Math.min(len, Math.floor(((chord.offsetPct || 0) / 100) * len));
    }

    const leftPx = getCharPixelOffset(line.text || '', chord.charIndex, isBold, isItalic);

    const chip = document.createElement('div');
    chip.className = 'chord-chip';
    chip.style.left = `${leftPx}px`;
    chip.innerHTML = `
      <span>${escapeHtml(chord.name)}${escapeHtml(chord.type || '')}</span>
      <span class="chord-delete-quick" title="Eliminar acorde">&times;</span>
    `;

    // Clic en la cruz pequeña para eliminar
    chip.querySelector('.chord-delete-quick').addEventListener('click', (e) => {
      e.stopPropagation();
      line.chords.splice(chordIdx, 1);
      renderStaves();
    });

    // Clic derecho en el chip para editarlo o eliminarlo
    chip.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openChordMenuAt(e, lineIdx, chordIdx, chordTrackEl);
    });

    // Habilitar arrastre horizontal interactivo del acorde
    setupChordDragging(chip, chordTrackEl, chord, line);

    chordTrackEl.appendChild(chip);
  });
}

// Sistema de Arrastre de Acordes anclado a cada letra
function setupChordDragging(chipEl, trackEl, chordObj, lineObj) {
  let isDragging = false;
  let startX = 0;

  const onMouseDown = (e) => {
    if (e.target.classList.contains('chord-delete-quick')) return;
    if (e.button !== 0) return; // Solo clic primario
    isDragging = true;
    startX = e.clientX;
    document.body.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const rect = trackEl.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const isBold = lineObj.role === 'A' || lineObj.role === 'N';
    const isItalic = lineObj.role === 'C';

    const charIndex = getCharIndexFromPixel(lineObj.text || '', newX, isBold, isItalic);
    chordObj.charIndex = charIndex;
    const textLen = (lineObj.text || '').length || 1;
    chordObj.offsetPct = Math.round((charIndex / textLen) * 100);

    const leftPx = getCharPixelOffset(lineObj.text || '', charIndex, isBold, isItalic);
    chipEl.style.left = `${leftPx}px`;
  };

  const onMouseUp = () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = 'default';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      // Ordenar acordes de la línea según su orden de caracteres
      lineObj.chords.sort((a, b) => (a.charIndex || 0) - (b.charIndex || 0));
    }
  };

  chipEl.addEventListener('mousedown', onMouseDown);

  // Soporte Touch para móviles y tablets
  chipEl.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
    }
  }, { passive: true });

  chipEl.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const rect = trackEl.getBoundingClientRect();
    const newX = e.touches[0].clientX - rect.left;
    const isBold = lineObj.role === 'A' || lineObj.role === 'N';
    const isItalic = lineObj.role === 'C';

    const charIndex = getCharIndexFromPixel(lineObj.text || '', newX, isBold, isItalic);
    chordObj.charIndex = charIndex;
    const textLen = (lineObj.text || '').length || 1;
    chordObj.offsetPct = Math.round((charIndex / textLen) * 100);

    const leftPx = getCharPixelOffset(lineObj.text || '', charIndex, isBold, isItalic);
    chipEl.style.left = `${leftPx}px`;
  }, { passive: true });

  chipEl.addEventListener('touchend', () => {
    isDragging = false;
    lineObj.chords.sort((a, b) => (a.charIndex || 0) - (b.charIndex || 0));
  });
}

// Sistema de Arrastre de la Píldora de BIS
function setupBisDragging(bisPillEl, wrapperEl, lineObj) {
  let isDragging = false;

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    document.body.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const rect = wrapperEl.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    let pct = (newX / rect.width) * 100;
    pct = Math.max(5, Math.min(95, pct));

    lineObj.bisOffsetPct = Math.round(pct);
    bisPillEl.style.left = `${lineObj.bisOffsetPct}%`;
  };

  const onMouseUp = () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = 'default';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  };

  bisPillEl.addEventListener('mousedown', onMouseDown);

  // Soporte Touch
  bisPillEl.addEventListener('touchstart', () => {
    isDragging = true;
  }, { passive: true });

  bisPillEl.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const rect = wrapperEl.getBoundingClientRect();
    let newX = e.touches[0].clientX - rect.left;
    let pct = (newX / rect.width) * 100;
    pct = Math.max(5, Math.min(95, pct));
    lineObj.bisOffsetPct = Math.round(pct);
    bisPillEl.style.left = `${lineObj.bisOffsetPct}%`;
  }, { passive: true });

  bisPillEl.addEventListener('touchend', () => {
    isDragging = false;
  });
}

// Inicializar Menú Contextual Flotante de Acordes
function initChordContextMenu() {
  if (!elContextMenu) return;

  // Botones de Acordes Rápidos
  const quickChords = ['Do', 'Rem', 'Mi', 'Mim', 'Fa', 'Sol', 'Sol7', 'La', 'Lam', 'Si7', 'Si♭', 'Re'];
  const gridEl = document.getElementById('chord-quick-grid');
  if (gridEl) {
    gridEl.innerHTML = quickChords.map(c => `
      <button type="button" class="btn-chord-quick" data-chord="${c}">${c}</button>
    `).join('');

    gridEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-chord]');
      if (!btn) return;
      const raw = btn.dataset.chord;
      applyChordSelection(raw);
    });
  }

  // Constructor personalizado de acordes
  const btnApplyCustom = document.getElementById('btn-apply-custom-chord');
  if (btnApplyCustom) {
    btnApplyCustom.addEventListener('click', () => {
      const root = document.getElementById('chord-builder-root')?.value || 'Do';
      const suffix = document.getElementById('chord-builder-suffix')?.value || '';
      applyChordSelection(root + suffix);
    });
  }

  // Botón para eliminar acorde desde el menú contextual
  const btnDeleteChord = document.getElementById('btn-menu-delete-chord');
  if (btnDeleteChord) {
    btnDeleteChord.addEventListener('click', () => {
      if (activeChordTarget.lineIdx !== -1 && activeChordTarget.chordIdx !== -1) {
        const line = songState.lines[activeChordTarget.lineIdx];
        if (line && line.chords) {
          line.chords.splice(activeChordTarget.chordIdx, 1);
          renderStaves();
        }
      }
      elContextMenu.style.display = 'none';
    });
  }

  // Botón en el menú contextual para insertar Separador de Lado Derecho
  const btnMenuInsertColBreak = document.getElementById('btn-menu-insert-col-break');
  if (btnMenuInsertColBreak) {
    btnMenuInsertColBreak.addEventListener('click', () => {
      if (activeChordTarget.lineIdx !== -1) {
        // Eliminar cualquier column break previo para moverlo a este punto
        songState.lines = songState.lines.filter(l => !l.isColumnBreak);
        songState.lines.splice(activeChordTarget.lineIdx + 1, 0, {
          id: 'col_break_' + Math.random().toString(36).substring(2, 9),
          isColumnBreak: true
        });
        elContextMenu.style.display = 'none';
        renderStaves();
        showToast('Separador de Lado Derecho insertado después de la línea');
      }
    });
  }

  // Cerrar menú
  const btnClose = document.getElementById('chord-menu-close');
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      elContextMenu.style.display = 'none';
    });
  }
}

// Abrir Menú Contextual en posición X, Y
function openChordMenuAt(e, lineIdx, chordIdx = -1, trackEl) {
  activeChordTarget.lineIdx = lineIdx;
  activeChordTarget.chordIdx = chordIdx;

  if (trackEl) {
    const rect = trackEl.getBoundingClientRect();
    let clickX = (e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : rect.left)) - rect.left;
    activeChordTarget.clickPixelX = Math.max(0, clickX);
    let pct = (clickX / rect.width) * 100;
    activeChordTarget.clickOffsetPct = Math.max(0, Math.min(98, Math.round(pct * 10) / 10));
  } else {
    activeChordTarget.clickPixelX = 8;
    activeChordTarget.clickOffsetPct = 0;
  }

  // Mostrar u ocultar botón de eliminar en el menú contextual
  const btnDelete = document.getElementById('btn-menu-delete-chord');
  if (btnDelete) {
    btnDelete.style.display = chordIdx !== -1 ? 'inline-flex' : 'none';
  }

  // Ubicar el menú en pantalla
  elContextMenu.style.display = 'block';
  const posX = Math.min(window.innerWidth - 340, Math.max(10, e.clientX || 50));
  const posY = Math.min(window.innerHeight - 360, Math.max(10, e.clientY || 50));
  elContextMenu.style.left = `${posX}px`;
  elContextMenu.style.top = `${posY}px`;
}

// Aplicar el acorde seleccionado al estado y renderizar
function applyChordSelection(chordStr) {
  if (!chordStr || activeChordTarget.lineIdx === -1) return;
  const line = songState.lines[activeChordTarget.lineIdx];
  if (!line) return;

  const parsed = parseChord(chordStr);
  const chordName = parsed.noteName || chordStr;
  const chordType = parsed.typeSuffix || '';

  if (activeChordTarget.chordIdx !== -1) {
    // Editando un acorde existente
    line.chords[activeChordTarget.chordIdx].name = chordName;
    line.chords[activeChordTarget.chordIdx].type = chordType;
  } else {
    // Añadiendo un nuevo acorde en la posición del clic exacto sobre la letra
    const isBold = line.role === 'A' || line.role === 'N';
    const isItalic = line.role === 'C';
    const clickX = typeof activeChordTarget.clickPixelX === 'number' ? activeChordTarget.clickPixelX : 8;
    const charIndex = getCharIndexFromPixel(line.text || '', clickX, isBold, isItalic);
    const textLen = (line.text || '').length || 1;
    const offsetPct = Math.round((charIndex / textLen) * 100);

    line.chords.push({
      id: 'ch_' + Math.random().toString(36).substring(2, 9),
      name: chordName,
      type: chordType,
      offsetPct: offsetPct,
      charIndex: charIndex
    });

    // Ordenar acordes por posición de carácter en la línea
    line.chords.sort((a, b) => (a.charIndex || 0) - (b.charIndex || 0));
  }

  elContextMenu.style.display = 'none';
  renderStaves();
}

// Generar objeto JSON oficial del canto completo
export function buildSongJSON() {
  const songId = slugify(elFormId?.value || songState.title);
  const songTitle = elFormTitle?.value?.trim() || 'Nuevo Canto';
  const songSubtitle = elFormSubtitle?.value?.trim() || '';
  const songBook = elFormBook?.value || 'resucito';
  const songStage = elFormStage?.value || 'Precatecumenado';
  const songAcorde = elFormAcorde?.value || 'La';
  const songCejilla = elFormCejilla?.value || '';
  const songAudio = elFormAudio?.value || `https://audio.resucito.do/${songId}.mp3`;
  const songDbno = elFormDbno?.value || '';

  // Calcular jerarquía de Títulos Expandibles
  const { parentMap, lineInfoMap } = computeTitleHierarchy(songState.lines);
  const consumedChildIds = new Set();
  let hasAnyCollapsibleBlocks = false;

  // Construir lizq y lder oficial
  const lizq = [];
  const chordPositionsLizq = [];
  const lder = [];
  const chordPositionsLder = [];

  let currentTargetList = lizq;
  let currentTargetPositions = chordPositionsLizq;

  songState.lines.forEach(line => {
    // Si ya fue incluido dentro de un bloque colapsable, no duplicarlo en la lista raíz
    if (consumedChildIds.has(line.id)) return;

    // Si es separador de columna, cambiar destino a Columna Derecha (lder)
    if (line.isColumnBreak) {
      currentTargetList = lder;
      currentTargetPositions = chordPositionsLder;
      return;
    }

    if (line.isEmpty) {
      currentTargetList.push({ line: '', sC: 'adb1' });
      currentTargetPositions.push([]);
      return;
    }

    const lineInfo = lineInfoMap.get(line.id);

    // Si es un Título Principal Expandible (Padre - T1, T2...)
    if (line.isParentTitle && lineInfo && lineInfo.isParent) {
      hasAnyCollapsibleBlocks = true;
      const parentCode = lineInfo.parentCode; // e.g. "t1"
      const pData = parentMap.get(line.id);

      // 1. Procesar acordes y texto de la línea disparador (triggerLine)
      let parentChordsStr = '';
      const parentChordList = [];
      if (line.chords && line.chords.length > 0) {
        line.chords.forEach(c => {
          const pos = typeof c.charIndex === 'number' ? c.charIndex : Math.round((c.offsetPct / 100) * (line.text.length || 1));
          parentChordsStr += `(${c.name},${c.type || ''},${pos})`;
          parentChordList.push({
            name: c.name,
            type: c.type || '',
            pos: pos
          });
        });
      }

      let parentText = line.text;
      if (line.role === 'B' && !parentText.toUpperCase().includes('(BIS)')) {
        parentText = `${parentText} (BIS)`;
      }
      const fullParentLine = parentChordsStr ? `${parentText}, ${parentChordsStr}` : parentText;

      let parentSC = 'ta as';
      if (line.role === 'C') parentSC = 'tc';
      else if (line.role === 'B') parentSC = 'tb';
      else if (line.role === 'N') parentSC = 'as';

      // 2. Procesar versos anidados (hijos: t1a, t1b, t1c...)
      const subLinesData = [];
      const subLinesPositions = [];

      if (pData && Array.isArray(pData.childIds)) {
        pData.childIds.forEach((childId, cIdx) => {
          consumedChildIds.add(childId);
          const childLine = songState.lines.find(l => l.id === childId);
          if (!childLine) return;

          const letter = String.fromCharCode(97 + (cIdx % 26)); // 'a', 'b', 'c'...
          const childCode = `${parentCode}${letter}`; // e.g. "t1a", "t1b"

          let childChordsStr = '';
          const childChordList = [];
          if (childLine.chords && childLine.chords.length > 0) {
            childLine.chords.forEach(c => {
              const pos = typeof c.charIndex === 'number' ? c.charIndex : Math.round((c.offsetPct / 100) * (childLine.text.length || 1));
              childChordsStr += `(${c.name},${c.type || ''},${pos})`;
              childChordList.push({
                name: c.name,
                type: c.type || '',
                pos: pos
              });
            });
          }

          let childText = childLine.text;
          if (childLine.role === 'B' && !childText.toUpperCase().includes('(BIS)')) {
            childText = `${childText} (BIS)`;
          }
          const fullChildLine = childChordsStr ? `${childText}, ${childChordsStr}` : childText;

          let childSC = '';
          if (childLine.role === 'A') childSC = 'ta as';
          else if (childLine.role === 'C') childSC = 'tc';
          else if (childLine.role === 'B') childSC = 'tb';
          else if (childLine.role === 'N') childSC = 'as';

          subLinesData.push({
            id: childCode,
            line: fullChildLine,
            sC: childSC
          });
          subLinesPositions.push(childChordList);
        });
      }

      currentTargetList.push({
        type: 'collapsible-block',
        id: parentCode,
        keepTriggerVisible: true,
        initialState: 'collapsed',
        triggerLine: fullParentLine,
        sC: parentSC,
        lines: subLinesData
      });

      currentTargetPositions.push({
        type: 'collapsible-block',
        id: parentCode,
        triggerLine: parentChordList,
        lines: subLinesPositions
      });

      return;
    }

    // Línea común
    let lineText = line.text;
    let lineChordsStr = '';
    const lineChordList = [];

    if (line.chords && line.chords.length > 0) {
      line.chords.forEach(c => {
        const pos = typeof c.charIndex === 'number' ? c.charIndex : Math.round((c.offsetPct / 100) * (line.text.length || 1));
        lineChordsStr += `(${c.name},${c.type || ''},${pos})`;
        lineChordList.push({
          name: c.name,
          type: c.type || '',
          pos: pos
        });
      });
    }

    if (line.role === 'B' && !lineText.toUpperCase().includes('(BIS)')) {
      lineText = `${lineText} (BIS)`;
    }

    const fullLineWithChords = lineChordsStr ? `${lineText}, ${lineChordsStr}` : lineText;

    let sCClass = '';
    if (line.role === 'A') sCClass = 'ta as';
    else if (line.role === 'C') sCClass = 'tc';
    else if (line.role === 'B') sCClass = 'tb';
    else if (line.role === 'N') sCClass = 'as';

    currentTargetList.push({
      line: fullLineWithChords,
      sC: sCClass
    });

    currentTargetPositions.push(lineChordList);
  });

  const songData = {
    id: songId,
    tt: songTitle,
    title: songTitle,
    subtitle: songSubtitle,
    category: [songStage, 'Entrada'],
    catCanto: songStage,
    stage: songStage,
    cejilla: songCejilla,
    acorde: songAcorde,
    nCan: "",
    nCanURL: "",
    dbno: songDbno,
    notes: "",
    mant: "No",
    audioSrc: songAudio,
    sourceBook: songBook,
    expansion: hasAnyCollapsibleBlocks ? true : false,
    scrollConfig: {
      mobile: { v: 25, i: 1 },
      tablet: { v: 25, i: 1 },
      desktopsmall: { v: 7, i: 1 }
    },
    ant: "",
    sig: "",
    lizq: lizq,
    lder: lder
  };

  return { songData, chordPositionsLizq, chordPositionsLder, songId };
}

// Guardar en Firebase Cloud Firestore y localmente
export async function guardarEnFirebase() {
  const { songData, chordPositionsLizq, chordPositionsLder, songId } = buildSongJSON();

  if (!songId) {
    alert("Por favor ingresa un título para el canto.");
    return;
  }

  showToast("Guardando canto en Firebase...");

  try {
    // 1. Guardar en colección Firestore 'cantos_creados'
    const docRef = doc(db, "cantos_creados", songId);
    await setDoc(docRef, {
      ...songData,
      creadoPor: getCurrentUser()?.email || 'anónimo',
      fechaCreacion: new Date()
    }, { merge: true });

    // 2. Guardar posiciones de acordes para lizq y lder en 'global_positions'
    const posRef = doc(db, "global_positions", songId);
    await setDoc(posRef, {
      lizq: chordPositionsLizq.map(line => JSON.stringify(line)),
      lder: chordPositionsLder.map(line => JSON.stringify(line)),
      updatedAt: new Date()
    }, { merge: true });

    // 3. Guardar en localStorage para disponibilidad sin conexión inmediata
    localStorage.setItem(`resucito_reloaded_song_${songId}`, JSON.stringify(songData));

    // Guardar en listado de cantos creados de localStorage
    let createdList = [];
    try {
      const raw = localStorage.getItem('resucito_created_songs');
      if (raw) createdList = JSON.parse(raw);
    } catch (e) {}
    if (!createdList.some(s => s.id === songId)) {
      createdList.unshift({
        id: songId,
        title: songData.title,
        subtitle: songData.subtitle,
        stage: songData.stage,
        book: songData.sourceBook,
        date: new Date().toLocaleDateString()
      });
      localStorage.setItem('resucito_created_songs', JSON.stringify(createdList));
    }

    // 4. Intentar guardar en disco local a través del backend de Vite SOLO si estamos en desarrollo local
    const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalDev) {
      const folder = BOOK_FOLDERS[songData.sourceBook] || 'data/songs';
      fetch('/api/save-canto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          songId: songId,
          targetFolder: folder,
          songData: songData
        })
      }).then(r => r.json()).then(res => {
        console.log('✅ Archivo físico guardado en disco:', res);
      }).catch(() => {});
    }

    showToast(`✅ ¡Canto "${songData.title}" guardado con éxito en Firebase y en la App!`);
    cargarCantosGuardados();

  } catch (err) {
    console.error("Error al guardar en Firebase:", err);
    // Respaldo sin conexión
    localStorage.setItem(`resucito_reloaded_song_${songId}`, JSON.stringify(songData));
    showToast(`⚠️ Guardado en caché local (${err.message || 'offline'})`);
  }
}

// Descargar archivo individual .json del Canto
export function descargarCantoJSON() {
  const { songData, songId } = buildSongJSON();
  if (!songId) {
    alert("Por favor ingresa un título para el canto antes de descargarlo.");
    return;
  }

  const jsonStr = JSON.stringify(songData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${songId}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast(`Descargando ${songId}.json (guárdalo en ${BOOK_FOLDERS[songData.sourceBook] || 'data/songs'}/)`);
}

// Abrir Modal de la Lista e Índice
export function abrirModalLista() {
  const { songData, songId } = buildSongJSON();
  const modal = document.getElementById('modal-lista');
  if (!modal) return;

  const previewBox = document.getElementById('index-entry-preview');
  const indexEntry = {
    id: songId,
    title: songData.title,
    subtitle: songData.subtitle,
    category: songData.category,
    stage: songData.stage,
    cejilla: songData.cejilla,
    acorde: songData.acorde,
    dbno: songData.dbno,
    hasAudio: !!songData.audioSrc,
    audioSrc: songData.audioSrc,
    sourceBook: songData.sourceBook,
    searchPool: `${songData.title} ${songData.subtitle} ${songState.lines.map(l => l.text).join(' ')}`.toLowerCase()
  };

  if (previewBox) {
    previewBox.textContent = JSON.stringify(indexEntry, null, 2);
  }

  modal.style.display = 'flex';

  // Botón para actualizar el índice en Vite / descargar
  const btnUpdateIndex = document.getElementById('btn-add-to-index-file');
  if (btnUpdateIndex) {
    btnUpdateIndex.onclick = () => {
      const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      // 1. Enviar a API Vite solo si está en entorno dev
      if (isLocalDev) {
        fetch('/api/save-index-entry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(indexEntry)
        }).then(r => r.json()).then(res => {
          showToast(`✅ songs-index.json actualizado en disco con éxito (${res.count} cantos)`);
        }).catch(() => {
          showToast(`Descargando entrada del índice...`);
        });
      } else {
        showToast(`Descargando entrada del índice...`);
      }

      // 2. Descargar archivo JSON de la entrada
      const blob = new Blob([JSON.stringify(indexEntry, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `index-entry-${songId}.json`;
      a.click();
      URL.revokeObjectURL(url);
    };
  }
}

// Abrir Vista Previa del Canto
export function abrirVistaPrevia() {
  const { songData, songId } = buildSongJSON();
  const modal = document.getElementById('modal-preview');
  if (!modal) return;

  const titleEl = document.getElementById('preview-song-title');
  const subEl = document.getElementById('preview-song-sub');
  const badgeEl = document.getElementById('preview-song-stage-badge');
  const bodyEl = document.getElementById('preview-song-body');
  const btnOpenViewer = document.getElementById('preview-btn-open-viewer');

  if (titleEl) titleEl.textContent = songData.title;
  if (subEl) subEl.textContent = songData.subtitle || 'Sin cita bíblica';
  if (badgeEl) {
    badgeEl.textContent = songData.stage;
    badgeEl.style.background = songState.stageColor;
  }

  if (btnOpenViewer) {
    btnOpenViewer.onclick = () => {
      // Guardar antes de abrir en index.html
      localStorage.setItem(`resucito_reloaded_song_${songId}`, JSON.stringify(songData));
      window.open(`index.html#canto=${encodeURIComponent(songId)}`, '_blank');
    };
  }

  // Helper para renderizar letras con acordes anclados
  function formatLineWithChordsHtml(cleanLetra, chords) {
    let lineContentHtml = '';
    let lastIndex = 0;

    if (!chords || chords.length === 0) {
      lineContentHtml = escapeHtml(cleanLetra);
    } else {
      const sortedChords = chords.slice().sort((a, b) => (a.charIndex || 0) - (b.charIndex || 0));
      sortedChords.forEach(c => {
        const charIndex = Math.min(cleanLetra.length, Math.max(0, typeof c.charIndex === 'number' ? c.charIndex : Math.round(((c.offsetPct || 0) / 100) * cleanLetra.length)));

        if (charIndex > lastIndex) {
          lineContentHtml += escapeHtml(cleanLetra.substring(lastIndex, charIndex));
        }

        const char = (charIndex >= lastIndex && charIndex < cleanLetra.length) ? cleanLetra[charIndex] : (charIndex >= cleanLetra.length ? ' ' : '');
        const chordName = `${escapeHtml(c.name)}${escapeHtml(c.type || '')}`;

        lineContentHtml += `
          <span class="chord-anchor-wrapper" style="position: relative; display: inline-block;">
            <span class="nota-posicionada" style="position: absolute; top: -14px; left: 0; font-family: sans-serif, cursive, 'system-ui', 'Franklin Gothic', Arial; font-weight: 700; font-size: 0.88rem; color: #d01212; white-space: nowrap; user-select: none; padding: 0 1px; border-radius: 0;">${chordName}</span>${escapeHtml(char)}
          </span>
        `;

        if (char !== '') {
          lastIndex = charIndex + 1;
        } else {
          lastIndex = charIndex;
        }
      });

      if (lastIndex < cleanLetra.length) {
        lineContentHtml += escapeHtml(cleanLetra.substring(lastIndex));
      }
    }
    return lineContentHtml;
  }

  // Renderizar estrofas en la vista previa (soporta 1 o 2 columnas)
  if (bodyEl) {
    const { parentMap, lineInfoMap } = computeTitleHierarchy(songState.lines);
    const linesIzq = [];
    const linesDer = [];
    let target = linesIzq;

    songState.lines.forEach(l => {
      if (l.isColumnBreak) {
        target = linesDer;
        return;
      }
      target.push(l);
    });

    const renderColumnHtml = (linesArray) => {
      const renderedHtmls = [];
      const consumedChildren = new Set();

      linesArray.forEach(line => {
        if (consumedChildren.has(line.id)) return;

        if (line.isEmpty) {
          renderedHtmls.push('<div style="height: 16px;"></div>');
          return;
        }

        const lineInfo = lineInfoMap.get(line.id) || {};
        const isA = line.role === 'A';
        const isC = line.role === 'C';
        const isB = line.role === 'B';
        const isN = line.role === 'N';
        const cleanLetra = line.text || '';
        const lineContentHtml = formatLineWithChordsHtml(cleanLetra, line.chords);

        // Si es un Título Principal Expandible (Padre - T1, T2...)
        if (line.isParentTitle && lineInfo.isParent) {
          const parentCode = lineInfo.parentCode || 't1';
          const pData = parentMap.get(line.id);
          const childHtmls = [];

          if (pData && Array.isArray(pData.childIds)) {
            pData.childIds.forEach(childId => {
              consumedChildren.add(childId);
              const childLine = linesArray.find(l => l.id === childId);
              if (!childLine) return;

              const cInfo = lineInfoMap.get(childLine.id) || {};
              const cIsA = childLine.role === 'A';
              const cIsC = childLine.role === 'C';
              const cIsB = childLine.role === 'B';
              const cIsN = childLine.role === 'N';
              const cClean = childLine.text || '';
              const cContent = formatLineWithChordsHtml(cClean, childLine.chords);

              childHtmls.push(`
                <div style="margin-bottom: 10px; line-height: 1.8; position: relative;">
                  <div style="display: flex; align-items: baseline; gap: 8px;">
                    <span class="preview-child-badge">${escapeHtml(cInfo.childCode || '')}</span>
                    ${cIsA ? '<span style="background: #dc2626; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">A</span>' : ''}
                    ${cIsC ? '<span style="background: #d97706; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">C</span>' : ''}
                    ${cIsN ? '<span style="background: #0f172a; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">N</span>' : ''}
                    <span style="font-family: \'Franklin Gothic Medium\', Arial, sans-serif; font-size: 1.05rem; ${(cIsA || cIsN) ? 'font-weight: 800;' : ''} ${cIsC ? 'font-style: italic;' : ''}">
                      ${cContent}
                    </span>
                    ${cIsB ? '<span style="background: #7c3aed; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 10px; margin-left: auto;">(BIS)</span>' : ''}
                  </div>
                </div>
              `);
            });
          }

          renderedHtmls.push(`
            <div class="preview-collapsible-block">
              <div class="preview-collapsible-trigger" data-preview-toggle="${line.id}" title="Clic para expandir / contraer">
                <div style="display: flex; align-items: baseline; gap: 8px;">
                  <span class="preview-parent-badge">${parentCode.toUpperCase()}</span>
                  ${isA ? '<span style="background: #dc2626; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">A</span>' : ''}
                  ${isC ? '<span style="background: #d97706; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">C</span>' : ''}
                  ${isN ? '<span style="background: #0f172a; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px;">N</span>' : ''}
                  <span style="font-family: \'Franklin Gothic Medium\', Arial, sans-serif; font-size: 1.1rem; font-weight: 800; color: #b45309;">
                    ${lineContentHtml}
                  </span>
                  <span class="collapsible-dots-indicator" id="dots-${line.id}" style="color: #f59e0b; font-weight: 900; font-size: 1.25rem; margin-left: 6px;">...</span>
                </div>
                <span class="material-symbols-outlined expand-chevron" id="icon-${line.id}" style="color: #f59e0b; font-size: 20px; transition: transform 0.2s;">expand_more</span>
              </div>
              <div class="preview-collapsible-content" id="preview-content-${line.id}" style="display: none;">
                ${childHtmls.join('')}
              </div>
            </div>
          `);
          return;
        }

        // Línea común
        renderedHtmls.push(`
          <div style="margin-bottom: 12px; line-height: 1.8; position: relative;">
            <div style="display: flex; align-items: baseline; gap: 8px;">
              ${isA ? '<span style="background: #dc2626; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px; vertical-align: middle;">A</span>' : ''}
              ${isC ? '<span style="background: #d97706; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px; vertical-align: middle;">C</span>' : ''}
              ${isN ? '<span style="background: #0f172a; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 4px; vertical-align: middle;">N</span>' : ''}
              <span style="font-family: \'Franklin Gothic Medium\', Arial, sans-serif; font-size: 1.1rem; ${(isA || isN) ? 'font-weight: 800;' : ''} ${isC ? 'font-style: italic;' : ''}">
                ${lineContentHtml}
              </span>
              ${isB ? '<span style="background: #7c3aed; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 1px 6px; border-radius: 10px; margin-left: auto;">(BIS)</span>' : ''}
            </div>
          </div>
        `);
      });

      return renderedHtmls.join('');
    };

    if (linesDer.length > 0) {
      bodyEl.innerHTML = `
        <div class="preview-columns-layout">
          <div class="preview-col-izq">
            <div style="font-size: 0.75rem; font-weight: 800; color: var(--frm-muted); text-transform: uppercase; margin-bottom: 10px; border-bottom: 1px solid var(--frm-border); padding-bottom: 4px; display: flex; align-items: center; gap: 6px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">view_column</span> Columna Izquierda
            </div>
            ${renderColumnHtml(linesIzq)}
          </div>
          <div class="preview-col-der">
            <div style="font-size: 0.75rem; font-weight: 800; color: #4f46e5; text-transform: uppercase; margin-bottom: 10px; border-bottom: 1px solid rgba(99, 102, 241, 0.3); padding-bottom: 4px; display: flex; align-items: center; gap: 6px;">
              <span class="material-symbols-outlined" style="font-size: 16px;">view_column</span> Columna Derecha
            </div>
            ${renderColumnHtml(linesDer)}
          </div>
        </div>
      `;
    } else {
      bodyEl.innerHTML = renderColumnHtml(linesIzq);
    }

    // Configurar interactividad de plegar / desplegar en vista previa
    bodyEl.querySelectorAll('[data-preview-toggle]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const pId = trigger.dataset.previewToggle;
        const content = bodyEl.querySelector(`#preview-content-${pId}`);
        const icon = bodyEl.querySelector(`#icon-${pId}`);
        const dots = bodyEl.querySelector(`#dots-${pId}`);
        if (!content) return;
        const isOpen = content.style.display !== 'none';
        content.style.display = isOpen ? 'none' : 'block';
        if (icon) icon.textContent = isOpen ? 'expand_more' : 'expand_less';
        if (dots) dots.style.display = isOpen ? 'inline' : 'none';
      });
    });
  }

  modal.style.display = 'flex';
}

// Cargar lista de cantos creados anteriormente
function cargarCantosGuardados() {
  if (!elCreatedSongsList) return;
  let items = [];
  try {
    const raw = localStorage.getItem('resucito_created_songs');
    if (raw) items = JSON.parse(raw);
  } catch (e) {}

  if (items.length === 0) {
    elCreatedSongsList.innerHTML = `<li style="padding: 10px; color: var(--frm-muted); font-size: 0.85rem; text-align: center;">No hay cantos creados recientemente.</li>`;
    return;
  }

  elCreatedSongsList.innerHTML = items.map((item, idx) => `
    <li style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid var(--frm-border); gap: 10px;">
      <div>
        <div style="font-weight: 700; font-size: 0.88rem; color: var(--frm-text);">${escapeHtml(item.title)}</div>
        <div style="font-size: 0.75rem; color: var(--frm-muted);">${escapeHtml(item.stage || '')} • ${escapeHtml(item.book || '')} • ${escapeHtml(item.date || '')}</div>
      </div>
      <div style="display: flex; gap: 6px;">
        <button type="button" class="btn-frm btn-frm-secondary" style="padding: 4px 8px; font-size: 0.75rem;" data-action="load-saved" data-song-id="${item.id}">Cargar</button>
        <a href="index.html#canto=${encodeURIComponent(item.id)}" target="_blank" class="btn-frm btn-frm-primary" style="padding: 4px 8px; font-size: 0.75rem; text-decoration: none;">Ver</a>
      </div>
    </li>
  `).join('');

  elCreatedSongsList.querySelectorAll('[data-action="load-saved"]').forEach(btn => {
    btn.addEventListener('click', () => {
      cargarCantoPorId(btn.dataset.songId);
    });
  });
}

// Parsear una línea individual con acordes y rol
function parseSingleLineItem(lineStr, sC = '') {
  const rawLine = lineStr || '';
  const chordRegex = /\(([^,\)]+),?([^,\)]*),?(\d*)\)/g;
  const chords = [];
  let match;

  while ((match = chordRegex.exec(rawLine)) !== null) {
    const cName = match[1].trim();
    const cType = match[2].trim();
    const cPos = parseInt(match[3] || '0', 10);
    chords.push({
      id: 'ch_' + Math.random().toString(36).substring(2, 9),
      name: cName,
      type: cType,
      charIndex: cPos,
      offsetPct: 0
    });
  }

  let cleanText = rawLine.replace(chordRegex, '').trim();
  if (cleanText.endsWith(',')) cleanText = cleanText.substring(0, cleanText.length - 1).trim();

  let role = null;
  if (cleanText.toUpperCase().includes('(BIS)')) {
    role = 'B';
    cleanText = cleanText.replace(/\(BIS\)/gi, '').trim();
  } else if (sC && sC.includes('ta')) {
    role = 'A';
  } else if (sC && sC.includes('tc')) {
    role = 'C';
  } else if (sC && sC.includes('tb')) {
    role = 'B';
  } else if (sC && sC.includes('as')) {
    role = 'N';
  }

  const textLen = Math.max(cleanText.length, 1);
  chords.forEach(c => {
    c.offsetPct = Math.max(0, Math.min(98, Math.round((c.charIndex / textLen) * 100)));
  });

  return { cleanText, role, chords };
}

function parseSongListItems(rawList) {
  if (!Array.isArray(rawList)) return [];
  const parsedLines = [];

  rawList.forEach(item => {
    if (!item.line && item.sC === 'adb1') {
      parsedLines.push({
        id: 'line_' + Math.random().toString(36).substring(2, 9),
        text: '',
        role: null,
        bisOffsetPct: 88,
        isEmpty: true,
        chords: [],
        isParentTitle: false,
        parentId: null
      });
      return;
    }

    // Caso 1: Estructura oficial collapsible-block
    if (item.type === 'collapsible-block') {
      const parentId = 'line_' + Math.random().toString(36).substring(2, 9);
      const triggerRaw = (typeof item.triggerLine === 'object' && item.triggerLine.line)
        ? item.triggerLine.line
        : (typeof item.triggerLine === 'string' ? item.triggerLine : '');
      const triggerSC = (typeof item.triggerLine === 'object' && item.triggerLine.sC)
        ? item.triggerLine.sC
        : (item.sC || '');

      const parsedTrigger = parseSingleLineItem(triggerRaw, triggerSC);
      parsedLines.push({
        id: parentId,
        text: parsedTrigger.cleanText,
        role: parsedTrigger.role || 'A',
        bisOffsetPct: 88,
        isEmpty: false,
        chords: parsedTrigger.chords,
        isParentTitle: true,
        parentId: null
      });

      if (Array.isArray(item.lines)) {
        item.lines.forEach(subItem => {
          const subRaw = (typeof subItem === 'object' && subItem.line) ? subItem.line : (typeof subItem === 'string' ? subItem : '');
          const subSC = (typeof subItem === 'object' && subItem.sC) ? subItem.sC : '';
          const parsedSub = parseSingleLineItem(subRaw, subSC);
          parsedLines.push({
            id: 'line_' + Math.random().toString(36).substring(2, 9),
            text: parsedSub.cleanText,
            role: parsedSub.role || null,
            bisOffsetPct: 88,
            isEmpty: false,
            chords: parsedSub.chords,
            isParentTitle: false,
            parentId: parentId
          });
        });
      }
      return;
    }

    // Caso 2: Línea común
    const isParentByClass = item.sC && /\bt\d+\b/.test(item.sC);
    const parsed = parseSingleLineItem(item.line, item.sC);

    parsedLines.push({
      id: 'line_' + Math.random().toString(36).substring(2, 9),
      text: parsed.cleanText,
      role: parsed.role,
      bisOffsetPct: 88,
      isEmpty: false,
      chords: parsed.chords,
      isParentTitle: Boolean(isParentByClass),
      parentId: null
    });
  });

  return parsedLines;
}

function cargarCantoPorId(songId) {
  try {
    const raw = localStorage.getItem(`resucito_reloaded_song_${songId}`);
    if (!raw) return;
    const data = JSON.parse(raw);
    elFormTitle.value = data.title || '';
    elFormSubtitle.value = data.subtitle || '';
    elFormId.value = data.id || '';
    elFormBook.value = data.sourceBook || 'resucito';
    songState.book = elFormBook.value;
    updateStageOptions(songState.book, true);

    if (data.stage) {
      elFormStage.value = data.stage;
      songState.stage = data.stage;
      songState.stageColor = STAGE_COLORS[songState.stage] || '#F8D147';
      updateStagePillPreview();
    }
    elFormAcorde.value = data.acorde || 'La';
    elFormCejilla.value = data.cejilla || '';
    elFormAudio.value = data.audioSrc || '';
    elFormDbno.value = data.dbno || '';

    // Procesar lizq
    const linesLizq = parseSongListItems(data.lizq);
    songState.lines = [...linesLizq];

    // Si tiene lder, insertar column break y luego los items de lder
    if (Array.isArray(data.lder) && data.lder.length > 0) {
      songState.lines.push({
        id: 'col_break_' + Math.random().toString(36).substring(2, 9),
        isColumnBreak: true
      });
      const linesLder = parseSongListItems(data.lder);
      songState.lines.push(...linesLder);
    }

    renderStaves();
    syncRawTextareaFromLines();
    showToast(`Canto "${data.title}" cargado en el editor`);
  } catch (e) {
    console.error("Error al cargar canto guardado:", e);
  }
}

// Toast Notificación
export function showToast(message) {
  let toast = document.getElementById('frm-toast-global');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'frm-toast-global';
    toast.className = 'frm-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="color: var(--frm-accent); font-size: 20px;">info</span>
    <span>${escapeHtml(message)}</span>
  `;
  toast.style.display = 'flex';
  if (window._frmToastTimer) clearTimeout(window._frmToastTimer);
  window._frmToastTimer = setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
