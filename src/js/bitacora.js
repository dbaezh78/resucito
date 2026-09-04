// src/js/bitacora.js - Controlador de la Bitácora de Actividad y Calendario
import { db, auth, collection, doc, deleteDoc, getDocs, query, orderBy, limit, onSnapshot } from "../firebase.js";
import { isCurrentUserAdmin, getCurrentUser, onAuthStateChanged } from "../auth.js";
import { hasPermission } from "../accesscontrol.js";
import { songs } from "../songs-data.js";
import { transposeNote, parseChord } from "../chords.js";

const LOCAL_STORAGE_KEY = 'resucito_bitacora_local';

/**
 * Convierte cualquier hora o timestamp al formato militar de 24 horas sin segundos (HH:mm)
 */
function formatearHoraMilitar(ev) {
  if (ev && ev.timestampNum) {
    const d = new Date(ev.timestampNum);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
  }
  if (ev && ev.horaStr) {
    const h = ev.horaStr.trim();
    // Si ya es "14:30" o "14:30:00"
    const match24 = h.match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);
    if (match24) {
      return `${match24[1].padStart(2, '0')}:${match24[2]}`;
    }
    // Si viene en formato 12h: "2:30:00 p.m." o "02:30 PM"
    const match12 = h.match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*([ap]\.?\s*m\.?)/i);
    if (match12) {
      let hours = parseInt(match12[1], 10);
      const minutes = match12[2];
      const isPm = match12[3].toLowerCase().startsWith('p');
      if (isPm && hours < 12) hours += 12;
      if (!isPm && hours === 12) hours = 0;
      return `${String(hours).padStart(2, '0')}:${minutes}`;
    }
    return h;
  }
  return '-';
}

/**
 * Formatea el nombre del usuario para evitar que se desborde o corte feo.
 * Si es un nombre compuesto largo como "Carlos David Baez", muestra "Carlos David".
 */
function formatearNombreUsuario(nombreOEmail) {
  if (!nombreOEmail) return 'Cantor';
  let str = String(nombreOEmail).trim();
  if (str.includes('@')) {
    str = str.split('@')[0];
  }
  const parts = str.split(/\s+/).filter(Boolean);
  if (parts.length >= 3) {
    return `${parts[0]} ${parts[1]}`;
  }
  return str;
}

const todayInit = new Date();
const todayDateStr = `${todayInit.getFullYear()}-${String(todayInit.getMonth() + 1).padStart(2, '0')}-${String(todayInit.getDate()).padStart(2, '0')}`;

// Estado global de la vista
let allEvents = [];
let filteredEvents = [];
let selectedDateStr = todayDateStr; // Por defecto inicia mostrando SOLO el día de hoy
let selectedUserEmail = 'all';
let searchQuery = '';
let currentCalendarDate = new Date();
let contextMenuUser = null;

// Elementos DOM
let calendarCardEl, calendarToggleHeaderEl, calendarSelectedBadgeEl, calendarTitleEl, calendarDaysEl, eventsTableBodyEl, searchInputEl, userSelectEl, userFilterGroupEl, contextMenuEl;

document.addEventListener('DOMContentLoaded', () => {
  initElements();
  initCalendar();
  initEventListeners();
  initTheme();

  // Escuchar estado de autenticación
  onAuthStateChanged((user) => {
    updateUserPermissionsUI();
    cargarEventos();
  });
});

function initElements() {
  calendarCardEl = document.getElementById('calendar-card');
  calendarToggleHeaderEl = document.getElementById('calendar-toggle-header');
  calendarSelectedBadgeEl = document.getElementById('calendar-selected-badge');
  calendarTitleEl = document.getElementById('calendar-title');
  calendarDaysEl = document.getElementById('calendar-days');
  eventsTableBodyEl = document.getElementById('events-table-body');
  searchInputEl = document.getElementById('search-input');
  userSelectEl = document.getElementById('user-select');
  userFilterGroupEl = document.getElementById('user-filter-group');
  contextMenuEl = document.getElementById('context-menu');
}

function updateSelectedDateBadge() {
  if (!calendarSelectedBadgeEl) return;
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  const yest = new Date(now);
  yest.setDate(yest.getDate() - 1);
  const yestStr = `${yest.getFullYear()}-${String(yest.getMonth() + 1).padStart(2, '0')}-${String(yest.getDate()).padStart(2, '0')}`;

  if (!selectedDateStr) {
    calendarSelectedBadgeEl.textContent = 'Todo el Historial';
  } else if (selectedDateStr === todayStr) {
    calendarSelectedBadgeEl.textContent = 'Hoy';
  } else if (selectedDateStr === yestStr) {
    calendarSelectedBadgeEl.textContent = 'Ayer';
  } else {
    // Formato DD/MM/YYYY
    const parts = selectedDateStr.split('-');
    if (parts.length === 3) {
      calendarSelectedBadgeEl.textContent = `${parts[2]}/${parts[1]}/${parts[0]}`;
    } else {
      calendarSelectedBadgeEl.textContent = selectedDateStr;
    }
  }
}

function initTheme() {
  // Asegurar que la bitácora siempre se vea a escala 100% (sin arrastrar zoom del canto)
  document.documentElement.style.setProperty('--font-zoom', '1');

  const isDark = localStorage.getItem('dark-mode') === 'true' || localStorage.getItem('theme') === 'dark';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
}

function puedeBorrarRegistros() {
  const isEnabledInSettings = localStorage.getItem('resucito_bitacora_show_delete') === 'true';
  if (!isEnabledInSettings) return false;

  const isAdmin = isCurrentUserAdmin();
  if (isAdmin) return true;

  return hasPermission('delete_bitacora');
}

function updateUserPermissionsUI() {
  const isAdmin = isCurrentUserAdmin();
  if (userFilterGroupEl) {
    userFilterGroupEl.style.display = isAdmin ? 'flex' : 'none';
  }

  const canDelete = puedeBorrarRegistros();
  const thActions = document.getElementById('th-col-actions');
  if (thActions) {
    thActions.style.display = canDelete ? 'table-cell' : 'none';
  }
}

/**
 * Carga eventos desde Firestore (en tiempo real) y combina con localStorage
 */
function cargarEventos() {
  // 1. Cargar locales primero
  try {
    const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    allEvents = [...local];
    renderAll();
  } catch (e) {
    console.warn("Error leyendo local bitacora:", e);
  }

  // 2. Escuchar Firestore si está disponible
  if (db) {
    try {
      const colRef = collection(db, "bitacora");
      const q = query(colRef, orderBy("timestampNum", "desc"), limit(600));

      onSnapshot(q, (snapshot) => {
        const firestoreEvents = [];
        snapshot.forEach((doc) => {
          firestoreEvents.push({ id: doc.id, ...doc.data() });
        });

        if (firestoreEvents.length > 0) {
          // Usar directamente los eventos activos de Firestore para reflejar eliminaciones en tiempo real
          const fsKeys = new Set(firestoreEvents.map(ev => `${ev.timestampNum}_${ev.usuarioId}`));
          
          // Mantener locales solo si están pendientes o si no existen aún en Firestore
          const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
          const validLocals = local.filter(l => fsKeys.has(`${l.timestampNum}_${l.usuarioId}`));
          
          allEvents = firestoreEvents;
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(validLocals));
        } else {
          allEvents = [];
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        }

        popularUsuariosSelect();
        renderAll();
      }, (err) => {
        console.warn("⚠️ Error en snapshot Firestore de bitácora:", err);
      });
    } catch (e) {
      console.warn("⚠️ Error conectando con bitácora en Firestore:", e);
    }
  }
}

/**
 * Llena el selector de usuarios si es administrador
 */
function popularUsuariosSelect() {
  if (!userSelectEl || !isCurrentUserAdmin()) return;
  
  const currentVal = userSelectEl.value;
  const usersMap = new Map();
  allEvents.forEach(ev => {
    if (ev.usuarioEmail) {
      usersMap.set(ev.usuarioEmail, ev.usuarioNombre || ev.usuarioEmail);
    }
  });

  userSelectEl.innerHTML = '<option value="all">Todos los usuarios</option>';
  usersMap.forEach((nombre, email) => {
    const opt = document.createElement('option');
    opt.value = email;
    opt.textContent = `${nombre} (${email})`;
    userSelectEl.appendChild(opt);
  });

  if (usersMap.has(currentVal) || currentVal === 'all') {
    userSelectEl.value = currentVal;
  }
}

/**
 * Renderiza el calendario y la tabla filtrada
 */
function renderAll() {
  updateSelectedDateBadge();
  renderCalendar();
  aplicarFiltros();
}

/**
 * Lógica del Calendario
 */
function initCalendar() {
  if (calendarToggleHeaderEl && calendarCardEl) {
    calendarToggleHeaderEl.addEventListener('click', () => {
      calendarCardEl.classList.toggle('collapsed');
    });
  }

  document.getElementById('cal-prev')?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById('cal-next')?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
  });
}

function renderCalendar() {
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();
  
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  if (calendarTitleEl) {
    calendarTitleEl.textContent = `${monthNames[month]} ${year}`;
  }

  if (!calendarDaysEl) return;
  calendarDaysEl.innerHTML = '';

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Domingo
  // Ajustar para empezar en Lunes (0 = Lunes, 6 = Domingo)
  const startDay = (firstDayIndex === 0 ? 6 : firstDayIndex - 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // Obtener fechas con actividad
  const activeDatesSet = new Set();
  const user = getCurrentUser();
  const isAdmin = isCurrentUserAdmin();

  allEvents.forEach(ev => {
    // Si no es admin, solo cuenta sus eventos
    if (!isAdmin && user && ev.usuarioId !== user.uid && ev.usuarioEmail !== user.email) {
      return;
    }
    if (ev.timestampNum) {
      const d = new Date(ev.timestampNum);
      const str = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      activeDatesSet.add(str);
    }
  });

  // Días del mes anterior
  for (let i = startDay - 1; i >= 0; i--) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'cal-day other-month';
    dayDiv.textContent = prevMonthTotalDays - i;
    calendarDaysEl.appendChild(dayDiv);
  }

  // Días del mes actual
  for (let d = 1; d <= totalDays; d++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'cal-day';
    dayDiv.textContent = d;

    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

    if (dateStr === todayStr) {
      dayDiv.classList.add('today');
    }
    if (selectedDateStr === dateStr) {
      dayDiv.classList.add('selected');
    }
    if (activeDatesSet.has(dateStr)) {
      dayDiv.classList.add('has-activity');
    }

    dayDiv.addEventListener('click', () => {
      if (selectedDateStr === dateStr) {
        selectedDateStr = null; // Toggle off
      } else {
        selectedDateStr = dateStr;
      }
      // Desactivar botones de filtro rápido
      document.querySelectorAll('.quick-filter-btn').forEach(btn => btn.classList.remove('active'));
      renderAll();
    });

    calendarDaysEl.appendChild(dayDiv);
  }
}

/**
 * Filtra los eventos según fecha, usuario, permisos y texto
 */
function aplicarFiltros() {
  const user = getCurrentUser();
  const isAdmin = isCurrentUserAdmin();

  filteredEvents = allEvents.filter(ev => {
    // 1. Control de Permisos: El usuario regular SOLO ve sus propios eventos
    if (!isAdmin && user) {
      const isOwner = (ev.usuarioId === user.uid) || (ev.usuarioEmail && ev.usuarioEmail.toLowerCase() === user.email.toLowerCase());
      if (!isOwner) return false;
    }

    // 2. Filtro por Usuario seleccionado (si es admin)
    if (isAdmin && selectedUserEmail !== 'all') {
      if (ev.usuarioEmail !== selectedUserEmail) return false;
    }

    // 3. Filtro por Fecha
    if (selectedDateStr && ev.timestampNum) {
      const d = new Date(ev.timestampNum);
      const evDateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      if (evDateStr !== selectedDateStr) return false;
    }

    // 4. Búsqueda de texto (Canto, Detalle, Usuario)
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchCanto = (ev.cantoTitulo || '').toLowerCase().includes(q);
      const matchDetalle = (ev.detalle || '').toLowerCase().includes(q);
      const matchUser = (ev.usuarioNombre || '').toLowerCase().includes(q) || (ev.usuarioEmail || '').toLowerCase().includes(q);
      if (!matchCanto && !matchDetalle && !matchUser) return false;
    }

    return true;
  });

  renderTable();
}

/**
 * Renderiza la tabla de eventos con soporte de anidación/agrupación por canto
 */
function renderTable() {
  if (!eventsTableBodyEl) return;
  eventsTableBodyEl.innerHTML = '';

  const countBadge = document.getElementById('events-count-badge');
  if (countBadge) {
    countBadge.textContent = `${filteredEvents.length} eventos`;
  }

  if (filteredEvents.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
      <td colspan="5" class="empty-state">
        <div class="empty-icon">📭</div>
        <div>No hay actividades registradas con los filtros actuales.</div>
      </td>
    `;
    eventsTableBodyEl.appendChild(emptyRow);
    return;
  }

  // Agrupar eventos consecutivos del mismo canto en el mismo día y usuario
  const grupos = agruparEventos(filteredEvents);

  grupos.forEach((grupo, gIdx) => {
    if (grupo.eventos.length === 1) {
      // Evento único: fila directa estándar
      const ev = grupo.eventos[0];
      const row = crearFilaEvento(ev);
      eventsTableBodyEl.appendChild(row);
    } else {
      // Múltiples eventos: Fila Padre colapsable + Subfilas anidadas (inician contraídas por defecto)
      const parentRow = document.createElement('tr');
      parentRow.className = 'group-parent-row';
      parentRow.dataset.groupId = `group-${gIdx}`;

      // 1. Columna Canto con toggle y link
      const tdCanto = document.createElement('td');
      tdCanto.innerHTML = `
        <span class="group-toggle-icon">▶</span>
        <a href="index.html#canto=${encodeURIComponent(grupo.cantoId)}" class="canto-link" onclick="event.stopPropagation();">
          📖 ${escapeHtml(grupo.cantoTitulo || grupo.cantoId)}
        </a>
        <span class="group-count-tag">${grupo.eventos.length} registros</span>
      `;

      // 2. Columna Detalle con badges resumidos de las diferencias
      const tdDetalle = document.createElement('td');
      tdDetalle.innerHTML = generarResumenDiferenciasHTML(grupo.eventos);

      // 3. Fecha
      const tdFecha = document.createElement('td');
      tdFecha.textContent = grupo.fechaStr || '-';

      // 4. Hora más reciente
      const tdHora = document.createElement('td');
      tdHora.textContent = formatearHoraMilitar({ horaStr: grupo.horaReciente, timestampNum: grupo.timestampNum });

      // 5. Usuario
      const tdUser = document.createElement('td');
      tdUser.className = 'user-cell';
      tdUser.title = isCurrentUserAdmin() ? 'Clic derecho para filtrar por este usuario' : '';
      const nombreUsuarioLimpio = formatearNombreUsuario(grupo.usuarioNombre || grupo.usuarioEmail);
      tdUser.innerHTML = `👤 ${escapeHtml(nombreUsuarioLimpio)}`;

      if (isCurrentUserAdmin() && grupo.usuarioEmail) {
        tdUser.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          e.stopPropagation();
          mostrarMenuContextual(e.pageX, e.pageY, grupo.usuarioEmail, grupo.usuarioNombre);
        });
      }

      parentRow.appendChild(tdCanto);
      parentRow.appendChild(tdDetalle);
      parentRow.appendChild(tdFecha);
      parentRow.appendChild(tdHora);
      parentRow.appendChild(tdUser);

      // Columna de Acción (Borrar grupo) si está permitido
      if (puedeBorrarRegistros()) {
        const tdAction = document.createElement('td');
        tdAction.className = 'col-actions';
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete-bitacora';
        btnDelete.title = `Eliminar estos ${grupo.eventos.length} registros`;
        btnDelete.innerHTML = '🗑️';
        btnDelete.addEventListener('click', async (e) => {
          e.stopPropagation();
          await eliminarGrupoBitacora(grupo);
        });
        tdAction.appendChild(btnDelete);
        parentRow.appendChild(tdAction);
      }

      eventsTableBodyEl.appendChild(parentRow);

      // Crear subfilas anidadas (inicialmente ocultas)
      const subRows = [];
      grupo.eventos.forEach((ev, evIdx) => {
        const isLast = (evIdx === grupo.eventos.length - 1);
        const subRow = crearSubFilaAnidada(ev, isLast, `group-${gIdx}`);
        subRow.classList.add('hidden');
        eventsTableBodyEl.appendChild(subRow);
        subRows.push(subRow);
      });

      // Toggle al hacer clic en la fila padre
      parentRow.addEventListener('click', () => {
        const isExpanded = parentRow.classList.contains('expanded');
        if (isExpanded) {
          parentRow.classList.remove('expanded');
          subRows.forEach(sr => sr.classList.add('hidden'));
        } else {
          parentRow.classList.add('expanded');
          subRows.forEach(sr => sr.classList.remove('hidden'));
        }
      });
    }
  });
}

function agruparEventos(eventos) {
  const mapGrupos = new Map();

  eventos.forEach(ev => {
    const songKey = ev.cantoId || ev.cantoTitulo || 'general';
    const dateKey = ev.fechaStr || '';
    const userKey = ev.usuarioEmail || ev.usuarioId || '';
    const key = `${songKey}___${dateKey}___${userKey}`;

    if (mapGrupos.has(key)) {
      const g = mapGrupos.get(key);
      g.eventos.push(ev);
      // Mantener la hora/timestamp más reciente como referencia del grupo
      if ((ev.timestampNum || 0) > (g.timestampNum || 0)) {
        g.timestampNum = ev.timestampNum;
        g.horaReciente = ev.horaStr;
      }
    } else {
      mapGrupos.set(key, {
        songKey,
        dateKey,
        userKey,
        cantoId: ev.cantoId,
        cantoTitulo: ev.cantoTitulo || ev.cantoId,
        fechaStr: ev.fechaStr,
        horaReciente: ev.horaStr,
        timestampNum: ev.timestampNum || 0,
        usuarioId: ev.usuarioId,
        usuarioEmail: ev.usuarioEmail,
        usuarioNombre: ev.usuarioNombre,
        eventos: [ev]
      });
    }
  });

  // Convertir a array y ordenar por la hora más reciente de cada grupo (descendente)
  const grupos = Array.from(mapGrupos.values());
  grupos.sort((a, b) => (b.timestampNum || 0) - (a.timestampNum || 0));

  // Ordenar los sub-eventos dentro de cada grupo por timestamp descendente
  grupos.forEach(g => {
    g.eventos.sort((a, b) => (b.timestampNum || 0) - (a.timestampNum || 0));
  });

  return grupos;
}

function resolverDetalleTono(ev) {
  let det = ev.detalle || '';
  
  // Si el detalle ya tiene el acorde bien formateado (ej: "🎼 Do", "🎼 La m", "🎼 Re#"), limpiarlo a "🎼 [Acorde]"
  if (det.startsWith('🎼 Tono: ')) {
    det = det.replace('🎼 Tono: ', '🎼 ');
  }

  // Si el detalle contiene un número relativo antiguo como "🎼 0", "🎼 -9", "🎼 +3", "Tono: 0", "Tono: -9"
  const matchNum = det.match(/^(?:🎼\s*)?(?:Tono:\s*)?([+-]?\d+)$/i);
  if (matchNum) {
    const semitones = parseInt(matchNum[1]);
    const songId = ev.cantoId;
    const songObj = songs.find(s => s.id === songId);
    const baseChordStr = (songObj && songObj.acorde) ? songObj.acorde : (ev.datosExtra?.acordeOriginal || 'La');
    const parsed = parseChord(baseChordStr);
    const transposedKey = transposeNote(parsed.noteName, semitones);
    const suffix = parsed.typeSuffix ? (parsed.typeSuffix.startsWith(' ') ? '' : ' ') + parsed.typeSuffix : '';
    return `🎼 ${transposedKey}${suffix}`;
  }

  return det;
}

function generarResumenDiferenciasHTML(eventos) {
  const counts = new Map();
  let totalTonos = 0;

  eventos.forEach(ev => {
    const det = resolverDetalleTono(ev) || '😎';
    if (ev.tipo === 'tono' || ev.tipo === 'acorde' || det.startsWith('🎼') || det.includes('Tono') || det.includes('Acorde')) {
      totalTonos++;
    } else {
      counts.set(det, (counts.get(det) || 0) + 1);
    }
  });

  let html = '<div class="summary-badges-container">';
  
  if (totalTonos > 0) {
    html += `<span class="detalle-badge tono" title="${totalTonos} cambio(s) de tono/acorde">🎼 ${totalTonos > 1 ? `×${totalTonos}` : ''}</span>`;
  }

  counts.forEach((qty, det) => {
    if (det === '😎') {
      html += `<span class="detalle-badge visita" title="${qty} visitas sin cambios">😎 ${qty > 1 ? `×${qty}` : ''}</span>`;
    } else if (det.startsWith('🎸')) {
      html += `<span class="detalle-badge traste" title="${det}">${det} ${qty > 1 ? `×${qty}` : ''}</span>`;
    } else if (det.includes('⭐')) {
      html += `<span class="detalle-badge estrella" title="Valoración: ${det}">${det} ${qty > 1 ? `×${qty}` : ''}</span>`;
    } else {
      html += `<span class="detalle-badge" title="${det}">${det} ${qty > 1 ? `×${qty}` : ''}</span>`;
    }
  });
  html += '</div>';
  return html;
}

function crearSubFilaAnidada(ev, isLast, groupId) {
  const row = document.createElement('tr');
  row.className = `nested-subrow ${groupId}`;

  // Columna Canto con rama de árbol
  const tdCanto = document.createElement('td');
  tdCanto.style.paddingLeft = '2.2rem';
  tdCanto.innerHTML = `
    <span class="nested-tree-icon">${isLast ? '└─' : '├─'}</span>
    <span style="font-size: 0.82rem; opacity: 0.85;">${escapeHtml(ev.cantoTitulo || ev.cantoId)}</span>
  `;

  // Detalle individual
  const tdDetalle = document.createElement('td');
  tdDetalle.innerHTML = formatearDetalleHTML(resolverDetalleTono(ev), ev.tipo);

  // Fecha
  const tdFecha = document.createElement('td');
  tdFecha.style.fontSize = '0.82rem';
  tdFecha.textContent = ev.fechaStr || '-';

  // Hora
  const tdHora = document.createElement('td');
  tdHora.style.fontSize = '0.82rem';
  tdHora.textContent = formatearHoraMilitar(ev);

  // Usuario
  const tdUser = document.createElement('td');
  tdUser.style.fontSize = '0.82rem';
  const nombreSubUser = formatearNombreUsuario(ev.usuarioNombre || ev.usuarioEmail);
  tdUser.textContent = `👤 ${nombreSubUser}`;

  row.appendChild(tdCanto);
  row.appendChild(tdDetalle);
  row.appendChild(tdFecha);
  row.appendChild(tdHora);
  row.appendChild(tdUser);

  // Botón borrar subfila si está permitido
  if (puedeBorrarRegistros()) {
    const tdAction = document.createElement('td');
    tdAction.className = 'col-actions';
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete-bitacora';
    btnDelete.title = 'Eliminar este registro';
    btnDelete.innerHTML = '🗑️';
    btnDelete.addEventListener('click', async (e) => {
      e.stopPropagation();
      await eliminarEventoBitacora(ev);
    });
    tdAction.appendChild(btnDelete);
    row.appendChild(tdAction);
  }

  return row;
}

function crearFilaEvento(ev) {
  const row = document.createElement('tr');

  const tdCanto = document.createElement('td');
  if (ev.cantoId && ev.cantoId !== 'general' && ev.cantoId !== 'listas') {
    tdCanto.innerHTML = `
      <a href="index.html#canto=${encodeURIComponent(ev.cantoId)}" class="canto-link">
        📖 ${escapeHtml(ev.cantoTitulo || ev.cantoId)}
      </a>
    `;
  } else {
    tdCanto.textContent = ev.cantoTitulo || 'General';
  }

  const tdDetalle = document.createElement('td');
  tdDetalle.innerHTML = formatearDetalleHTML(resolverDetalleTono(ev), ev.tipo);

  const tdFecha = document.createElement('td');
  tdFecha.textContent = ev.fechaStr || (ev.timestampNum ? new Date(ev.timestampNum).toLocaleDateString('es-ES') : '-');

  const tdHora = document.createElement('td');
  tdHora.textContent = formatearHoraMilitar(ev);

  const tdUser = document.createElement('td');
  tdUser.className = 'user-cell';
  tdUser.title = isCurrentUserAdmin() ? 'Clic derecho para filtrar por este usuario' : '';
  const nombreFilaUser = formatearNombreUsuario(ev.usuarioNombre || ev.usuarioEmail);
  tdUser.innerHTML = `👤 ${escapeHtml(nombreFilaUser)}`;

  if (isCurrentUserAdmin() && ev.usuarioEmail) {
    tdUser.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      mostrarMenuContextual(e.pageX, e.pageY, ev.usuarioEmail, ev.usuarioNombre);
    });
  }

  row.appendChild(tdCanto);
  row.appendChild(tdDetalle);
  row.appendChild(tdFecha);
  row.appendChild(tdHora);
  row.appendChild(tdUser);

  // Botón borrar fila individual si está permitido
  if (puedeBorrarRegistros()) {
    const tdAction = document.createElement('td');
    tdAction.className = 'col-actions';
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete-bitacora';
    btnDelete.title = 'Eliminar este registro';
    btnDelete.innerHTML = '🗑️';
    btnDelete.addEventListener('click', async (e) => {
      e.stopPropagation();
      await eliminarEventoBitacora(ev);
    });
    tdAction.appendChild(btnDelete);
    row.appendChild(tdAction);
  }

  return row;
}

/**
 * Elimina un registro individual de Firestore y LocalStorage
 */
async function eliminarEventoBitacora(ev) {
  const detalleResuelto = resolverDetalleTono(ev) || 'Visita';
  const cantoNombre = ev.cantoTitulo || ev.cantoId || 'General';
  const fechaCompleta = `${ev.fechaStr || ''} ${ev.horaStr || ''}`.trim();

  const ejecutarEliminacion = async () => {
    try {
      // 1. Borrar de Firestore si tiene ID
      if (ev.id && db) {
        await deleteDoc(doc(db, "bitacora", ev.id));
      }

      // 2. Borrar de allEvents en memoria y de localStorage
      allEvents = allEvents.filter(item => {
        if (ev.id && item.id) {
          return item.id !== ev.id;
        }
        return !(item.timestampNum === ev.timestampNum && item.usuarioId === ev.usuarioId);
      });

      try {
        const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const filteredLocal = local.filter(item => {
          if (ev.id && item.id) return item.id !== ev.id;
          return !(item.timestampNum === ev.timestampNum && item.usuarioId === ev.usuarioId);
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredLocal));
      } catch(e) {}

      popularUsuariosSelect();
      renderAll();
    } catch (err) {
      console.error("Error al eliminar registro de bitácora:", err);
      if (window.mostrarAlerta) {
        window.mostrarAlerta({
          titulo: 'Error',
          mensaje: 'Hubo un error al eliminar el registro.',
          icono: 'error'
        });
      }
    }
  };

  if (window.mostrarConfirmacion) {
    window.mostrarConfirmacion({
      titulo: '¿Deseas eliminar este registro?',
      mensaje: `Canto: ${cantoNombre}\nDetalle: ${detalleResuelto}\nFecha: ${fechaCompleta}`,
      icono: 'delete',
      textoSi: 'Eliminar',
      textoNo: 'Cancelar',
      iconoColor: '#dc2626',
      iconoBg: 'rgba(220, 38, 38, 0.1)',
      onConfirm: ejecutarEliminacion
    });
  } else {
    if (confirm(`¿Deseas eliminar este registro de la bitácora?\n\nCanto: ${cantoNombre}\nDetalle: ${detalleResuelto}\nFecha: ${fechaCompleta}`)) {
      await ejecutarEliminacion();
    }
  }
}

/**
 * Elimina todos los registros de un grupo agrupado
 */
async function eliminarGrupoBitacora(grupo) {
  const cantoNombre = grupo.cantoTitulo || grupo.cantoId || 'General';
  const fechaGrupo = grupo.fechaStr || '';
  const totalRegs = grupo.eventos.length;

  const ejecutarEliminacionGrupo = async () => {
    try {
      // 1. Borrar de Firestore
      if (db) {
        for (const ev of grupo.eventos) {
          if (ev.id) {
            try {
              await deleteDoc(doc(db, "bitacora", ev.id));
            } catch(e) {
              console.warn("Error borrando doc:", ev.id, e);
            }
          }
        }
      }

      // 2. Borrar de allEvents
      const idsABorrar = new Set(grupo.eventos.map(e => e.id).filter(Boolean));
      const timestampsABorrar = new Set(grupo.eventos.map(e => `${e.timestampNum}_${e.usuarioId}`));

      allEvents = allEvents.filter(item => {
        if (item.id && idsABorrar.has(item.id)) return false;
        if (timestampsABorrar.has(`${item.timestampNum}_${item.usuarioId}`)) return false;
        return true;
      });

      try {
        const local = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const filteredLocal = local.filter(item => {
          if (item.id && idsABorrar.has(item.id)) return false;
          if (timestampsABorrar.has(`${item.timestampNum}_${item.usuarioId}`)) return false;
          return true;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredLocal));
      } catch(e) {}

      popularUsuariosSelect();
      renderAll();
    } catch (err) {
      console.error("Error al eliminar grupo de bitácora:", err);
      if (window.mostrarAlerta) {
        window.mostrarAlerta({
          titulo: 'Error',
          mensaje: 'Hubo un error al eliminar el grupo de registros.',
          icono: 'error'
        });
      }
    }
  };

  if (window.mostrarConfirmacion) {
    window.mostrarConfirmacion({
      titulo: '¿Eliminar registros agrupados?',
      mensaje: `¿Deseas eliminar todos los ${totalRegs} registros de "${cantoNombre}" del día ${fechaGrupo}?`,
      icono: 'delete_sweep',
      textoSi: 'Eliminar todos',
      textoNo: 'Cancelar',
      iconoColor: '#dc2626',
      iconoBg: 'rgba(220, 38, 38, 0.1)',
      onConfirm: ejecutarEliminacionGrupo
    });
  } else {
    if (confirm(`¿Deseas eliminar todos los ${totalRegs} registros agrupados de "${cantoNombre}" del día ${fechaGrupo}?`)) {
      await ejecutarEliminacionGrupo();
    }
  }
}

function formatearDetalleHTML(detalle, tipo) {
  if (!detalle) return '😎';
  if (detalle === '😎' || tipo === 'visita') {
    return `<span class="detalle-badge visita" title="Visita sin cambios">😎</span>`;
  }
  if (detalle.startsWith('🎸') || tipo === 'traste') {
    return `<span class="detalle-badge traste">${escapeHtml(detalle)}</span>`;
  }
  if (detalle.includes('⭐') || tipo === 'valoracion') {
    return `<span class="detalle-badge estrella">${escapeHtml(detalle)}</span>`;
  }
  if (detalle.includes('🎼') || tipo === 'tono') {
    return `<span class="detalle-badge tono">${escapeHtml(detalle)}</span>`;
  }
  if (detalle.includes('Acorde') || tipo === 'acorde') {
    return `<span class="detalle-badge acorde">${escapeHtml(detalle)}</span>`;
  }
  if (detalle.includes('Lista') || tipo === 'lista') {
    return `<span class="detalle-badge lista">${escapeHtml(detalle)}</span>`;
  }
  return `<span class="detalle-badge">${escapeHtml(detalle)}</span>`;
}

function initEventListeners() {
  // Buscador de texto
  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      aplicarFiltros();
    });
  }

  // Selector de usuario
  if (userSelectEl) {
    userSelectEl.addEventListener('change', (e) => {
      selectedUserEmail = e.target.value;
      aplicarFiltros();
    });
  }

  // Filtros rápidos de fecha
  document.querySelectorAll('.quick-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.quick-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const action = btn.dataset.filter;
      aplicarFiltroRapido(action);
    });
  });

  // Ocultar menú contextual al hacer clic fuera
  document.addEventListener('click', () => {
    if (contextMenuEl) contextMenuEl.style.display = 'none';
  });

  // Opción del menú contextual
  const filterUserMenuOpt = document.getElementById('ctx-filter-user');
  if (filterUserMenuOpt) {
    filterUserMenuOpt.addEventListener('click', () => {
      if (contextMenuUser && isCurrentUserAdmin()) {
        selectedUserEmail = contextMenuUser.email;
        if (userSelectEl) userSelectEl.value = contextMenuUser.email;
        aplicarFiltros();
      }
    });
  }

  // Escuchar cambios de almacenamiento (ej: Ajustes > Páginas activa/desactiva borrado)
  window.addEventListener('storage', (e) => {
    if (e.key === 'resucito_bitacora_show_delete') {
      updateUserPermissionsUI();
      renderAll();
    }
  });
}

function aplicarFiltroRapido(tipo) {
  const now = new Date();
  if (tipo === 'today') {
    selectedDateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  } else if (tipo === 'yesterday') {
    const yest = new Date(now);
    yest.setDate(yest.getDate() - 1);
    selectedDateStr = `${yest.getFullYear()}-${String(yest.getMonth() + 1).padStart(2, '0')}-${String(yest.getDate()).padStart(2, '0')}`;
  } else if (tipo === 'all') {
    selectedDateStr = null;
  }
  renderAll();
}

function mostrarMenuContextual(x, y, email, nombre) {
  if (!contextMenuEl) return;
  contextMenuUser = { email, nombre };
  const labelEl = document.getElementById('ctx-user-label');
  if (labelEl) {
    labelEl.textContent = `Filtrar por: ${nombre || email}`;
  }
  contextMenuEl.style.left = `${x}px`;
  contextMenuEl.style.top = `${y}px`;
  contextMenuEl.style.display = 'block';
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
