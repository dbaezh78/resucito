// src/js/play.js - Reproductor y Gestor de Listas de Reproducción (Cantos del Camino y Cantos Joven)

import { auth, db, doc, setDoc, deleteDoc, collection, getDocs, onSnapshot } from '../firebase.js';
import { onAuthStateChanged } from '../auth.js';
import { songs as fallbackSongsData } from '../songs-data.js';

const STORAGE_KEY_PLAYLISTS = 'resucito_reproductor_listas_v1';
const STORAGE_KEY_ACTIVE_PLAYLIST = 'resucito_reproductor_activa_v1';
const STORAGE_KEY_PLAYER_STATE = 'resucito_reproductor_estado_v1';

// Listas virtuales predefinidas para escuchar todo el catálogo si se desea
const BUILTIN_PLAYLISTS = [
  {
    id: '__builtin_camino__',
    nombre: 'Cantos del Camino (Todos)',
    builtin: true,
    icon: 'menu_book',
    filterFn: (s) => s.bookGroup === 'camino'
  },
  {
    id: '__builtin_joven__',
    nombre: 'Cantos Joven (Todos)',
    builtin: true,
    icon: 'music_note',
    filterFn: (s) => s.bookGroup === 'joven'
  }
];

let allCatalogSongs = [];
let customPlaylists = [];
let activePlaylistId = null; // ID de lista activa (personalizada o builtin)
let targetCustomPlaylistId = null; // Lista personalizada destino al pulsar "+" en el catálogo
let editingPlaylistId = null; // Si se está renombrando una lista existente

// Estado de reproducción
let currentQueue = []; // Array de objetos song actualmente en cola
let currentTrackIndex = -1;
let currentSong = null;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 'all'; // 'off' | 'all' | 'one'
let unsubscribeCloudPlaylists = null;

// Filtros del catálogo
let catalogBookFilter = 'all'; // 'all' | 'camino' | 'joven'
let catalogStageFilter = 'all';
let catalogSearchQuery = '';
let queueSearchQuery = '';

// Referencias DOM
const audioEl = document.getElementById('play-audio-element');
const playerCover = document.getElementById('player-cover');
const playerCoverIcon = document.getElementById('player-cover-icon');
const playerWaveBars = document.getElementById('player-wave-bars');
const playerPlaylistName = document.getElementById('player-playlist-name');
const playerBookBadge = document.getElementById('player-book-badge');
const playerStageBadge = document.getElementById('player-stage-badge');
const playerTrackTitle = document.getElementById('player-track-title');
const playerTrackSubtitle = document.getElementById('player-track-subtitle');
const playerOpenLyricsBtn = document.getElementById('player-open-lyrics-btn');

const playerTimeCurrent = document.getElementById('player-time-current');
const playerTimeTotal = document.getElementById('player-time-total');
const playerSeekSlider = document.getElementById('player-seek-slider');

const btnPlayerShuffle = document.getElementById('btn-player-shuffle');
const btnPlayerPrev = document.getElementById('btn-player-prev');
const btnPlayerPlay = document.getElementById('btn-player-play');
const iconPlayerPlay = document.getElementById('icon-player-play');
const btnPlayerNext = document.getElementById('btn-player-next');
const btnPlayerRepeat = document.getElementById('btn-player-repeat');
const iconPlayerRepeat = document.getElementById('icon-player-repeat');

const btnPlayerMute = document.getElementById('btn-player-mute');
const iconPlayerVolume = document.getElementById('icon-player-volume');
const playerVolumeSlider = document.getElementById('player-volume-slider');
const playerSpeedSelect = document.getElementById('player-speed-select');

const btnOpenNewPlaylist = document.getElementById('btn-open-new-playlist');
const playlistFormCard = document.getElementById('playlist-form-card');
const playlistFormTitle = document.getElementById('playlist-form-title');
const inputPlaylistName = document.getElementById('input-playlist-name');
const btnSavePlaylist = document.getElementById('btn-save-playlist');
const btnCancelPlaylist = document.getElementById('btn-cancel-playlist');
const btnClosePlaylistForm = document.getElementById('btn-close-playlist-form');

const playlistsListContainer = document.getElementById('playlists-list-container');
const playlistsTotalBadge = document.getElementById('playlists-total-badge');

const activePlaylistTitleText = document.getElementById('active-playlist-title-text');
const activePlaylistMetaText = document.getElementById('active-playlist-meta-text');
const btnPlayAllActive = document.getElementById('btn-play-all-active');
const btnShuffleActive = document.getElementById('btn-shuffle-active');
const btnClearActivePlaylist = document.getElementById('btn-clear-active-playlist');
const inputSearchQueue = document.getElementById('input-search-queue');
const btnClearSearchQueue = document.getElementById('btn-clear-search-queue');
const activeQueueContainer = document.getElementById('active-queue-container');

const catalogTargetPlaylistName = document.getElementById('catalog-target-playlist-name');
const catalogCountBadge = document.getElementById('catalog-count-badge');
const catalogBookTabs = document.getElementById('catalog-book-tabs');
const catalogStagePills = document.getElementById('catalog-stage-pills');
const inputSearchCatalog = document.getElementById('input-search-catalog');
const btnClearSearchCatalog = document.getElementById('btn-clear-search-catalog');
const catalogSongsContainer = document.getElementById('catalog-songs-container');

// --- UTILIDADES ---
function normalizeStr(str) {
  if (!str) return '';
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatSeconds(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00';
  const total = Math.floor(sec);
  const mins = Math.floor(total / 60);
  const secs = total % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function getStageMeta(song) {
  const rawStage = (song.stage || song.catCanto || '').toLowerCase();
  const cats = Array.isArray(song.category) ? song.category.join(' ').toLowerCase() : String(song.category || '').toLowerCase();
  const combined = `${rawStage} ${cats}`;

  if (song.sourceBook === 'joven' || combined.includes('catol') || combined.includes('catól')) {
    return { key: 'catolicos', label: song.sourceBook === 'joven' ? 'Cantos Joven' : 'Católicos', color: '#6f42c1' };
  }
  if (combined.includes('elecc')) {
    return { key: 'eleccion', label: 'Elección', color: '#16a34a' };
  }
  if (combined.includes('catecumenado') && !combined.includes('precatecumenado')) {
    return { key: 'catecumenado', label: 'Catecumenado', color: '#0284c7' };
  }
  if (combined.includes('liturg')) {
    return { key: 'liturgia', label: 'Liturgia', color: '#ca8a04' };
  }
  return { key: 'precatecumenado', label: 'Precatecumenado', color: '#d01212' };
}

function showPlayToast(message, isError = false) {
  const existing = document.getElementById('play-toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'play-toast-notification';
  toast.style.cssText = `
    position: fixed;
    bottom: 84px;
    left: 50%;
    transform: translateX(-50%);
    background: ${isError ? '#dc2626' : '#1e293b'};
    color: #ffffff;
    padding: 10px 18px;
    border-radius: 999px;
    font-size: 0.84rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
    z-index: 99999;
    transition: opacity 0.25s ease;
    max-width: 90vw;
  `;
  toast.innerHTML = `
    <span class="material-symbols-outlined" style="font-size: 18px; color: ${isError ? '#fecaca' : '#4ade80'};">
      ${isError ? 'error' : 'check_circle'}
    </span>
    <span>${escapeHtml(message)}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

// --- CARGA DEL CATÁLOGO DE CANTOS ---
async function loadCatalogSongs() {
  let rawList = [];
  try {
    const res = await fetch('data/songs-index.json');
    if (res.ok) {
      rawList = await res.json();
    }
  } catch (e) {
    console.warn('No se pudo cargar data/songs-index.json, usando fallback local:', e);
  }

  if (!Array.isArray(rawList) || rawList.length === 0) {
    rawList = Array.isArray(fallbackSongsData) ? fallbackSongsData : [];
  } else if (Array.isArray(fallbackSongsData)) {
    const seenIds = new Set(rawList.map(s => String(s.id)));
    fallbackSongsData.forEach(s => {
      if (s && s.id && !seenIds.has(String(s.id))) {
        rawList.push(s);
        seenIds.add(String(s.id));
      }
    });
  }

  const excludedIds = new Set(['cancionero', 'Salmodias']);

  allCatalogSongs = rawList
    .filter(s => s && s.id && s.visible !== 'index' && !excludedIds.has(String(s.id)) && s.sourceBook !== 'aclamaciones' && !String(s.id).startsWith('aet'))
    .map(s => {
      const id = String(s.id);
      const title = s.title || s.tt || id;
      const subtitle = s.subtitle || '';
      const sourceBook = s.sourceBook || 'resucito';
      const isJoven = sourceBook === 'joven';
      const bookGroup = isJoven ? 'joven' : 'camino';
      const stageMeta = getStageMeta(s);
      const audioSrc = s.audioSrc || `https://audio.resucito.do/${id}.mp3`;
      const searchNorm = normalizeStr(`${title} ${subtitle} ${s.dbno || ''} ${s.searchPool || ''}`);

      return {
        id,
        title,
        subtitle,
        dbno: s.dbno || '',
        sourceBook,
        bookGroup,
        stageKey: stageMeta.key,
        stageLabel: stageMeta.label,
        stageColor: stageMeta.color,
        audioSrc,
        hasAudio: s.hasAudio !== false,
        searchNorm
      };
    });

  allCatalogSongs.sort((a, b) => {
    const cleanA = a.title.replace(/^[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ]+/, '').trim();
    const cleanB = b.title.replace(/^[^a-zA-Z0-9áéíóúüñÁÉÍÓÚÜÑ]+/, '').trim();
    return cleanA.localeCompare(cleanB, 'es', { sensitivity: 'base' });
  });
}

// --- GESTIÓN DE LISTAS DE REPRODUCCIÓN (LOCAL + FIREBASE) ---
function loadLocalPlaylists() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PLAYLISTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        customPlaylists = parsed.filter(p => p && p.id && p.nombre);
      }
    }
  } catch (e) {
    console.warn('Error leyendo listas locales:', e);
  }

  // Si no hay ninguna lista personalizada aún, crear una lista inicial por defecto
  if (customPlaylists.length === 0) {
    const defaultList = {
      id: 'pl_' + Date.now(),
      nombre: 'Mi Lista de Reproducción',
      songIds: [],
      updatedAt: Date.now()
    };
    customPlaylists = [defaultList];
    saveLocalPlaylists();
  }

  const savedActive = localStorage.getItem(STORAGE_KEY_ACTIVE_PLAYLIST);
  if (savedActive && (customPlaylists.some(p => p.id === savedActive) || BUILTIN_PLAYLISTS.some(b => b.id === savedActive))) {
    activePlaylistId = savedActive;
  } else {
    activePlaylistId = customPlaylists[0].id;
  }

  // Asegurar que targetCustomPlaylistId apunte a una lista personalizada válida
  if (customPlaylists.some(p => p.id === activePlaylistId)) {
    targetCustomPlaylistId = activePlaylistId;
  } else {
    targetCustomPlaylistId = customPlaylists[0]?.id || null;
  }
}

function saveLocalPlaylists() {
  try {
    localStorage.setItem(STORAGE_KEY_PLAYLISTS, JSON.stringify(customPlaylists));
    if (activePlaylistId) {
      localStorage.setItem(STORAGE_KEY_ACTIVE_PLAYLIST, activePlaylistId);
    }
  } catch (e) {
    console.warn('No se pudo guardar en localStorage:', e);
  }
}

async function syncPlaylistToCloud(playlist) {
  const user = auth?.currentUser;
  if (!user || !playlist || !playlist.id || playlist.builtin) return;
  try {
    const ref = doc(db, 'usuarios', user.uid, 'reproductor_listas', playlist.id);
    await setDoc(ref, {
      id: playlist.id,
      nombre: playlist.nombre,
      songIds: Array.isArray(playlist.songIds) ? playlist.songIds : [],
      updatedAt: playlist.updatedAt || Date.now()
    }, { merge: true });
  } catch (e) {
    console.warn('Aviso al sincronizar lista en Firebase:', e);
  }
}

async function deletePlaylistFromCloud(playlistId) {
  const user = auth?.currentUser;
  if (!user || !playlistId) return;
  try {
    const ref = doc(db, 'usuarios', user.uid, 'reproductor_listas', playlistId);
    await deleteDoc(ref);
  } catch (e) {
    console.warn('Aviso al eliminar lista en Firebase:', e);
  }
}

function setupCloudSyncForUser(user) {
  if (unsubscribeCloudPlaylists) {
    unsubscribeCloudPlaylists();
    unsubscribeCloudPlaylists = null;
  }
  if (!user) return;

  try {
    const colRef = collection(db, 'usuarios', user.uid, 'reproductor_listas');
    unsubscribeCloudPlaylists = onSnapshot(colRef, (snapshot) => {
      if (snapshot.empty) {
        // Subir listas locales actuales si el usuario no tenía ninguna en la nube
        customPlaylists.forEach(p => syncPlaylistToCloud(p));
        return;
      }

      const cloudMap = new Map();
      snapshot.forEach(docSnap => {
        const data = docSnap.data();
        if (data && data.id && data.nombre) {
          cloudMap.set(data.id, {
            id: String(data.id),
            nombre: String(data.nombre),
            songIds: Array.isArray(data.songIds) ? data.songIds.map(String) : [],
            updatedAt: Number(data.updatedAt) || 0
          });
        }
      });

      if (cloudMap.size > 0) {
        // Combinar con locales priorizando la versión más reciente
        const mergedMap = new Map(cloudMap);
        customPlaylists.forEach(localPl => {
          const cloudPl = mergedMap.get(localPl.id);
          if (!cloudPl) {
            // Si la lista por defecto vacía fue reemplazada por listas de la nube, no duplicar si está vacía
            if (localPl.songIds && localPl.songIds.length > 0) {
              mergedMap.set(localPl.id, localPl);
              syncPlaylistToCloud(localPl);
            }
          } else if ((localPl.updatedAt || 0) > (cloudPl.updatedAt || 0)) {
            mergedMap.set(localPl.id, localPl);
          }
        });

        customPlaylists = Array.from(mergedMap.values()).sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
        if (!customPlaylists.some(p => p.id === activePlaylistId) && !BUILTIN_PLAYLISTS.some(b => b.id === activePlaylistId)) {
          activePlaylistId = customPlaylists[0]?.id || BUILTIN_PLAYLISTS[0].id;
        }
        if (customPlaylists.some(p => p.id === activePlaylistId)) {
          targetCustomPlaylistId = activePlaylistId;
        } else {
          targetCustomPlaylistId = customPlaylists[0]?.id || null;
        }

        saveLocalPlaylists();
        renderAll();
      }
    }, (err) => {
      console.warn('Listener de reproductor_listas no disponible:', err);
    });
  } catch (e) {
    console.warn('Error configurando sincronización de listas:', e);
  }
}

// Obtener objeto de lista por ID
function getPlaylistById(id) {
  const custom = customPlaylists.find(p => p.id === id);
  if (custom) return custom;
  const builtin = BUILTIN_PLAYLISTS.find(b => b.id === id);
  if (builtin) return builtin;
  return customPlaylists[0] || BUILTIN_PLAYLISTS[0];
}

// Obtener los objetos de canciones de una lista
function getSongsForPlaylist(playlist) {
  if (!playlist) return [];
  if (playlist.builtin && typeof playlist.filterFn === 'function') {
    return allCatalogSongs.filter(playlist.filterFn);
  }
  const songMap = new Map(allCatalogSongs.map(s => [s.id, s]));
  return (playlist.songIds || []).map(id => songMap.get(String(id))).filter(Boolean);
}

function getTargetCustomPlaylist() {
  if (targetCustomPlaylistId) {
    const found = customPlaylists.find(p => p.id === targetCustomPlaylistId);
    if (found) return found;
  }
  if (customPlaylists.length > 0) {
    targetCustomPlaylistId = customPlaylists[0].id;
    return customPlaylists[0];
  }
  return null;
}

// --- RENDERIZADO DE INTERFAZ ---
function renderPlaylistsSection() {
  if (!playlistsListContainer) return;

  if (playlistsTotalBadge) {
    const count = customPlaylists.length;
    playlistsTotalBadge.textContent = `${count} ${count === 1 ? 'lista' : 'listas'}`;
  }

  const customHtml = customPlaylists.map(pl => {
    const isActive = pl.id === activePlaylistId;
    const count = Array.isArray(pl.songIds) ? pl.songIds.length : 0;
    return `
      <div class="playlist-item-card ${isActive ? 'active' : ''}" data-playlist-id="${escapeHtml(pl.id)}">
        <div class="playlist-item-left">
          <div class="playlist-item-icon">
            <span class="material-symbols-outlined">queue_music</span>
          </div>
          <div class="playlist-item-texts">
            <div class="playlist-item-name">${escapeHtml(pl.nombre)}</div>
            <div class="playlist-item-sub">${count} ${count === 1 ? 'canto' : 'cantos'} • Lista personalizada</div>
          </div>
        </div>
        <div class="playlist-item-actions">
          <button class="playlist-action-btn play-pl-btn" data-id="${escapeHtml(pl.id)}" title="Reproducir esta lista">
            <span class="material-symbols-outlined">play_arrow</span>
          </button>
          <button class="playlist-action-btn edit-pl-btn" data-id="${escapeHtml(pl.id)}" title="Renombrar lista">
            <span class="material-symbols-outlined">edit</span>
          </button>
          <button class="playlist-action-btn delete delete-pl-btn" data-id="${escapeHtml(pl.id)}" title="Eliminar lista">
            <span class="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  const builtinHtml = BUILTIN_PLAYLISTS.map(b => {
    const isActive = b.id === activePlaylistId;
    const count = getSongsForPlaylist(b).length;
    return `
      <div class="playlist-item-card ${isActive ? 'active' : ''}" data-playlist-id="${escapeHtml(b.id)}">
        <div class="playlist-item-left">
          <div class="playlist-item-icon">
            <span class="material-symbols-outlined">${b.icon || 'library_music'}</span>
          </div>
          <div class="playlist-item-texts">
            <div class="playlist-item-name">${escapeHtml(b.nombre)}</div>
            <div class="playlist-item-sub">${count} cantos • Catálogo general</div>
          </div>
        </div>
        <div class="playlist-item-actions">
          <button class="playlist-action-btn play-pl-btn" data-id="${escapeHtml(b.id)}" title="Reproducir colección">
            <span class="material-symbols-outlined">play_arrow</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  playlistsListContainer.innerHTML = customHtml + builtinHtml;

  // Actualizar indicador de lista destino en el catálogo
  const targetPl = getTargetCustomPlaylist();
  if (catalogTargetPlaylistName) {
    catalogTargetPlaylistName.textContent = targetPl ? targetPl.nombre : 'Nueva Lista';
  }
}

function renderActiveQueueSection() {
  const activePl = getPlaylistById(activePlaylistId);
  if (!activePl || !activeQueueContainer) return;

  const songsInPl = getSongsForPlaylist(activePl);
  const isCustom = !activePl.builtin;

  if (activePlaylistTitleText) {
    activePlaylistTitleText.textContent = activePl.nombre;
  }
  if (activePlaylistMetaText) {
    activePlaylistMetaText.textContent = `${songsInPl.length} ${songsInPl.length === 1 ? 'canto' : 'cantos'} en esta lista`;
  }
  if (btnClearActivePlaylist) {
    btnClearActivePlaylist.style.display = (isCustom && songsInPl.length > 0) ? 'inline-flex' : 'none';
  }

  const filterNorm = normalizeStr(queueSearchQuery);
  const filtered = filterNorm
    ? songsInPl.map((song, idx) => ({ song, idx })).filter(item => item.song.searchNorm.includes(filterNorm))
    : songsInPl.map((song, idx) => ({ song, idx }));

  if (songsInPl.length === 0) {
    activeQueueContainer.innerHTML = `
      <div class="play-empty-state">
        <span class="material-symbols-outlined" style="font-size: 36px; color: var(--accent-color, #d01212); display: block; margin-bottom: 6px;">playlist_add</span>
        Esta lista aún no tiene cantos.<br>
        Usa el <strong>Catálogo de Cantos</strong> (Cantos del Camino o Cantos Joven) y pulsa el botón <strong>+</strong> para agregarlos.
      </div>
    `;
    return;
  }

  if (filtered.length === 0) {
    activeQueueContainer.innerHTML = `
      <div class="play-empty-state">No se encontraron cantos en esta lista con ese filtro.</div>
    `;
    return;
  }

  activeQueueContainer.innerHTML = filtered.map(({ song, idx }) => {
    const isCurrentPlaying = currentSong && currentSong.id === song.id;
    const bookBadgeText = song.bookGroup === 'joven' ? 'Joven' : 'Camino';
    const numberPrefix = song.dbno ? `#${song.dbno} • ` : '';

    return `
      <div class="play-song-row ${isCurrentPlaying ? 'playing' : ''}" data-song-id="${escapeHtml(song.id)}" data-queue-idx="${idx}">
        <div class="play-song-left" data-action="play-queue-song" data-idx="${idx}">
          <div class="play-song-index-badge">
            ${isCurrentPlaying && isPlaying
              ? '<span class="material-symbols-outlined" style="font-size: 17px;">equalizer</span>'
              : (idx + 1)}
          </div>
          <div class="play-song-info">
            <div class="play-song-title-line">
              <span class="song-stage-dot" style="background: ${song.stageColor};" title="${escapeHtml(song.stageLabel)}"></span>
              <span class="play-song-title">${escapeHtml(song.title)}</span>
              <span class="song-mini-badge ${song.bookGroup}">${bookBadgeText}</span>
            </div>
            <div class="play-song-sub">${escapeHtml(numberPrefix + (song.subtitle || song.stageLabel))}</div>
          </div>
        </div>

        <div class="play-song-actions">
          <a href="./index.html#canto=${encodeURIComponent(song.id)}" class="song-row-btn" title="Ver letra y acordes">
            <span class="material-symbols-outlined">menu_book</span>
          </a>
          ${isCustom ? `
            <button class="song-row-btn" data-action="move-up" data-idx="${idx}" ${idx === 0 ? 'disabled style="opacity:0.3;pointer-events:none;"' : ''} title="Subir en la lista">
              <span class="material-symbols-outlined">arrow_upward</span>
            </button>
            <button class="song-row-btn" data-action="move-down" data-idx="${idx}" ${idx === songsInPl.length - 1 ? 'disabled style="opacity:0.3;pointer-events:none;"' : ''} title="Bajar en la lista">
              <span class="material-symbols-outlined">arrow_downward</span>
            </button>
            <button class="song-row-btn remove-btn" data-action="remove-from-playlist" data-idx="${idx}" title="Quitar de la lista">
              <span class="material-symbols-outlined">close</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderCatalogSection() {
  if (!catalogSongsContainer) return;

  const targetPl = getTargetCustomPlaylist();
  const targetSongIds = new Set(targetPl && Array.isArray(targetPl.songIds) ? targetPl.songIds.map(String) : []);

  const searchNorm = normalizeStr(catalogSearchQuery);

  const filtered = allCatalogSongs.filter(song => {
    if (catalogBookFilter === 'camino' && song.bookGroup !== 'camino') return false;
    if (catalogBookFilter === 'joven' && song.bookGroup !== 'joven') return false;
    if (catalogStageFilter !== 'all' && song.stageKey !== catalogStageFilter) return false;
    if (searchNorm && !song.searchNorm.includes(searchNorm)) return false;
    return true;
  });

  if (catalogCountBadge) {
    catalogCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'canto' : 'cantos'}`;
  }

  if (filtered.length === 0) {
    catalogSongsContainer.innerHTML = `
      <div class="play-empty-state">No se encontraron cantos con los filtros seleccionados.</div>
    `;
    return;
  }

  // Renderizar hasta 200 resultados para máxima fluidez en móviles (con aviso si hay más)
  const visibleSlice = filtered.slice(0, 220);

  catalogSongsContainer.innerHTML = visibleSlice.map(song => {
    const isAdded = targetSongIds.has(song.id);
    const isCurrentPlaying = currentSong && currentSong.id === song.id;
    const bookBadgeText = song.bookGroup === 'joven' ? 'Joven' : 'Camino';
    const numberPrefix = song.dbno ? `#${song.dbno} • ` : '';

    return `
      <div class="play-song-row ${isCurrentPlaying ? 'playing' : ''}" data-song-id="${escapeHtml(song.id)}">
        <div class="play-song-left" data-action="preview-catalog-song" data-song-id="${escapeHtml(song.id)}">
          <div class="play-song-index-badge" title="Reproducir canto">
            <span class="material-symbols-outlined" style="font-size: 18px;">
              ${isCurrentPlaying && isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </div>
          <div class="play-song-info">
            <div class="play-song-title-line">
              <span class="song-stage-dot" style="background: ${song.stageColor};" title="${escapeHtml(song.stageLabel)}"></span>
              <span class="play-song-title">${escapeHtml(song.title)}</span>
              <span class="song-mini-badge ${song.bookGroup}">${bookBadgeText}</span>
            </div>
            <div class="play-song-sub">${escapeHtml(numberPrefix + (song.subtitle || song.stageLabel))}</div>
          </div>
        </div>

        <div class="play-song-actions">
          <a href="./index.html#canto=${encodeURIComponent(song.id)}" class="song-row-btn" title="Ver letra y acordes">
            <span class="material-symbols-outlined">menu_book</span>
          </a>
          <button class="song-row-btn ${isAdded ? 'added' : 'add-btn'}" data-action="toggle-add-song" data-song-id="${escapeHtml(song.id)}" title="${isAdded ? 'Quitar de la lista' : 'Agregar a la lista'}">
            <span class="material-symbols-outlined">${isAdded ? 'check' : 'add'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderAll() {
  renderPlaylistsSection();
  renderActiveQueueSection();
  renderCatalogSection();
}

// --- LÓGICA DE REPRODUCCIÓN DE AUDIO ---
function updatePlayerUI() {
  if (iconPlayerPlay) {
    iconPlayerPlay.textContent = isPlaying ? 'pause' : 'play_arrow';
  }
  if (playerWaveBars && playerCoverIcon) {
    playerWaveBars.style.display = isPlaying ? 'flex' : 'none';
    playerCoverIcon.style.display = isPlaying ? 'none' : 'inline-block';
  }

  if (!currentSong) {
    if (playerTrackTitle) playerTrackTitle.textContent = 'Ningún canto en reproducción';
    if (playerTrackSubtitle) playerTrackSubtitle.textContent = 'Elige un canto de tu lista o del catálogo para comenzar';
    if (playerBookBadge) playerBookBadge.style.display = 'none';
    if (playerStageBadge) playerStageBadge.style.display = 'none';
    if (playerOpenLyricsBtn) playerOpenLyricsBtn.style.display = 'none';
    return;
  }

  if (playerTrackTitle) {
    playerTrackTitle.textContent = currentSong.title;
  }
  if (playerTrackSubtitle) {
    const numStr = currentSong.dbno ? `#${currentSong.dbno} • ` : '';
    playerTrackSubtitle.textContent = numStr + (currentSong.subtitle || currentSong.stageLabel);
  }

  if (playerBookBadge) {
    playerBookBadge.style.display = 'inline-block';
    playerBookBadge.textContent = currentSong.bookGroup === 'joven' ? 'Cantos Joven' : 'Cantos del Camino';
    playerBookBadge.classList.toggle('joven', currentSong.bookGroup === 'joven');
  }

  if (playerStageBadge) {
    playerStageBadge.style.display = 'inline-block';
    playerStageBadge.textContent = currentSong.stageLabel;
    playerStageBadge.style.background = `${currentSong.stageColor}22`;
    playerStageBadge.style.color = currentSong.stageColor;
  }

  if (playerCover) {
    playerCover.style.background = `linear-gradient(135deg, ${currentSong.stageColor}, #1e293b)`;
  }

  if (playerOpenLyricsBtn) {
    playerOpenLyricsBtn.style.display = 'inline-flex';
    playerOpenLyricsBtn.href = `./index.html#canto=${encodeURIComponent(currentSong.id)}`;
  }

  updateMediaSessionMetadata();
}

function updateMediaSessionMetadata() {
  if (!('mediaSession' in navigator) || !currentSong) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentSong.title,
      artist: currentSong.bookGroup === 'joven' ? 'Resucitó - Cantos Joven' : 'Resucitó - Cantos del Camino',
      album: playerPlaylistName ? playerPlaylistName.textContent : 'Reproductor Resucitó',
      artwork: [
        { src: 'img/logo_cantos.png', sizes: '192x192', type: 'image/png' }
      ]
    });
  } catch (e) {}
}

function playSongAtIndex(index, customQueue = null, playlistLabel = null) {
  if (Array.isArray(customQueue)) {
    currentQueue = customQueue.slice();
  } else if (currentQueue.length === 0) {
    const activePl = getPlaylistById(activePlaylistId);
    currentQueue = getSongsForPlaylist(activePl);
    if (playerPlaylistName && activePl) {
      playerPlaylistName.textContent = activePl.nombre;
    }
  }

  if (playlistLabel && playerPlaylistName) {
    playerPlaylistName.textContent = playlistLabel;
  }

  if (currentQueue.length === 0 || index < 0 || index >= currentQueue.length) {
    showPlayToast('No hay cantos en la lista para reproducir', true);
    return;
  }

  currentTrackIndex = index;
  currentSong = currentQueue[currentTrackIndex];

  if (!audioEl || !currentSong) return;

  let safeSrc = currentSong.audioSrc;
  try {
    safeSrc = encodeURI(decodeURI(safeSrc));
  } catch (e) {
    safeSrc = encodeURI(safeSrc);
  }

  audioEl.src = safeSrc;
  audioEl.playbackRate = parseFloat(playerSpeedSelect?.value || '1') || 1;

  const playPromise = audioEl.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying = true;
        updatePlayerUI();
        renderActiveQueueSection();
        renderCatalogSection();
      })
      .catch(err => {
        console.warn('Error al reproducir audio:', err);
        isPlaying = false;
        updatePlayerUI();
        showPlayToast(`Audio no disponible para "${currentSong.title}"`, true);
      });
  }
}

function togglePlayPause() {
  if (!audioEl) return;

  if (!currentSong) {
    const activePl = getPlaylistById(activePlaylistId);
    const songs = getSongsForPlaylist(activePl);
    if (songs.length > 0) {
      playSongAtIndex(0, songs, activePl.nombre);
    } else if (allCatalogSongs.length > 0) {
      playSongAtIndex(0, allCatalogSongs, 'Catálogo General');
    }
    return;
  }

  if (audioEl.paused) {
    audioEl.play().then(() => {
      isPlaying = true;
      updatePlayerUI();
      renderActiveQueueSection();
      renderCatalogSection();
    }).catch(err => {
      console.warn('No se pudo reanudar el audio:', err);
    });
  } else {
    audioEl.pause();
    isPlaying = false;
    updatePlayerUI();
    renderActiveQueueSection();
    renderCatalogSection();
  }
}

function playNextTrack(fromAutoEnded = false) {
  if (currentQueue.length === 0) return;

  if (fromAutoEnded && repeatMode === 'one') {
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {});
    return;
  }

  if (isShuffle && currentQueue.length > 1) {
    let nextIdx = currentTrackIndex;
    while (nextIdx === currentTrackIndex) {
      nextIdx = Math.floor(Math.random() * currentQueue.length);
    }
    playSongAtIndex(nextIdx);
    return;
  }

  const nextIdx = currentTrackIndex + 1;
  if (nextIdx < currentQueue.length) {
    playSongAtIndex(nextIdx);
  } else if (repeatMode === 'all' || !fromAutoEnded) {
    playSongAtIndex(0);
  } else {
    isPlaying = false;
    updatePlayerUI();
    renderActiveQueueSection();
    renderCatalogSection();
  }
}

function playPrevTrack() {
  if (currentQueue.length === 0) return;

  if (audioEl && audioEl.currentTime > 4) {
    audioEl.currentTime = 0;
    return;
  }

  const prevIdx = currentTrackIndex > 0 ? currentTrackIndex - 1 : currentQueue.length - 1;
  playSongAtIndex(prevIdx);
}

// --- ACCIONES DE LISTAS DE REPRODUCCIÓN ---
function openPlaylistForm(editId = null) {
  if (!playlistFormCard || !inputPlaylistName) return;
  editingPlaylistId = editId;

  if (editId) {
    const pl = customPlaylists.find(p => p.id === editId);
    if (!pl) return;
    if (playlistFormTitle) {
      playlistFormTitle.innerHTML = `<span class="material-symbols-outlined">edit</span> Renombrar Lista`;
    }
    inputPlaylistName.value = pl.nombre;
  } else {
    if (playlistFormTitle) {
      playlistFormTitle.innerHTML = `<span class="material-symbols-outlined">playlist_add</span> Crear Nueva Lista de Reproducción`;
    }
    inputPlaylistName.value = '';
  }

  playlistFormCard.style.display = 'block';
  setTimeout(() => inputPlaylistName.focus(), 50);
}

function closePlaylistForm() {
  if (!playlistFormCard) return;
  playlistFormCard.style.display = 'none';
  editingPlaylistId = null;
}

function savePlaylistFromForm() {
  const name = (inputPlaylistName?.value || '').trim();
  if (!name) {
    showPlayToast('Escribe un nombre para la lista', true);
    inputPlaylistName?.focus();
    return;
  }

  if (editingPlaylistId) {
    const pl = customPlaylists.find(p => p.id === editingPlaylistId);
    if (pl) {
      pl.nombre = name;
      pl.updatedAt = Date.now();
      saveLocalPlaylists();
      syncPlaylistToCloud(pl);
      showPlayToast(`Lista renombrada a "${name}"`);
    }
  } else {
    const newPl = {
      id: 'pl_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
      nombre: name,
      songIds: [],
      updatedAt: Date.now()
    };
    customPlaylists.push(newPl);
    activePlaylistId = newPl.id;
    targetCustomPlaylistId = newPl.id;
    saveLocalPlaylists();
    syncPlaylistToCloud(newPl);
    showPlayToast(`Lista "${name}" creada`);
  }

  closePlaylistForm();
  renderAll();
}

function deletePlaylist(playlistId) {
  const pl = customPlaylists.find(p => p.id === playlistId);
  if (!pl) return;

  const executeDelete = () => {
    customPlaylists = customPlaylists.filter(p => p.id !== playlistId);
    deletePlaylistFromCloud(playlistId);

    if (customPlaylists.length === 0) {
      const fallback = {
        id: 'pl_' + Date.now(),
        nombre: 'Mi Lista de Reproducción',
        songIds: [],
        updatedAt: Date.now()
      };
      customPlaylists.push(fallback);
    }

    if (activePlaylistId === playlistId) {
      activePlaylistId = customPlaylists[0].id;
    }
    if (targetCustomPlaylistId === playlistId) {
      targetCustomPlaylistId = customPlaylists[0].id;
    }

    saveLocalPlaylists();
    renderAll();
    showPlayToast(`Lista "${pl.nombre}" eliminada`);
  };

  if (typeof window.mostrarConfirmacion === 'function') {
    window.mostrarConfirmacion({
      titulo: 'Eliminar Lista',
      mensaje: `¿Deseas eliminar la lista de reproducción "${pl.nombre}"?`,
      icono: 'delete',
      textoSi: 'Eliminar',
      textoNo: 'Cancelar',
      onConfirm: executeDelete
    });
  } else if (confirm(`¿Eliminar la lista "${pl.nombre}"?`)) {
    executeDelete();
  }
}

function toggleSongInTargetPlaylist(songId) {
  let targetPl = getTargetCustomPlaylist();
  if (!targetPl) {
    targetPl = {
      id: 'pl_' + Date.now(),
      nombre: 'Mi Lista de Reproducción',
      songIds: [],
      updatedAt: Date.now()
    };
    customPlaylists.push(targetPl);
    activePlaylistId = targetPl.id;
    targetCustomPlaylistId = targetPl.id;
  }

  if (!Array.isArray(targetPl.songIds)) {
    targetPl.songIds = [];
  }

  const idx = targetPl.songIds.indexOf(String(songId));
  const songObj = allCatalogSongs.find(s => s.id === String(songId));
  const songTitle = songObj ? songObj.title : songId;

  if (idx !== -1) {
    targetPl.songIds.splice(idx, 1);
    showPlayToast(`Quitado de "${targetPl.nombre}": ${songTitle}`);
  } else {
    targetPl.songIds.push(String(songId));
    showPlayToast(`Agregado a "${targetPl.nombre}": ${songTitle}`);
  }

  targetPl.updatedAt = Date.now();
  saveLocalPlaylists();
  syncPlaylistToCloud(targetPl);

  // Si la lista en reproducción actual es esta misma lista, sincronizar la cola activa
  if (activePlaylistId === targetPl.id && currentQueue.length > 0) {
    currentQueue = getSongsForPlaylist(targetPl);
    if (currentSong) {
      currentTrackIndex = currentQueue.findIndex(s => s.id === currentSong.id);
    }
  }

  renderAll();
}

function moveSongInActivePlaylist(index, direction) {
  const pl = customPlaylists.find(p => p.id === activePlaylistId);
  if (!pl || !Array.isArray(pl.songIds)) return;

  const targetIdx = index + direction;
  if (targetIdx < 0 || targetIdx >= pl.songIds.length) return;

  const temp = pl.songIds[index];
  pl.songIds[index] = pl.songIds[targetIdx];
  pl.songIds[targetIdx] = temp;
  pl.updatedAt = Date.now();

  saveLocalPlaylists();
  syncPlaylistToCloud(pl);

  if (currentSong) {
    currentQueue = getSongsForPlaylist(pl);
    currentTrackIndex = currentQueue.findIndex(s => s.id === currentSong.id);
  }

  renderActiveQueueSection();
}

function removeSongAtIndexFromActivePlaylist(index) {
  const pl = customPlaylists.find(p => p.id === activePlaylistId);
  if (!pl || !Array.isArray(pl.songIds)) return;
  if (index < 0 || index >= pl.songIds.length) return;

  pl.songIds.splice(index, 1);
  pl.updatedAt = Date.now();
  saveLocalPlaylists();
  syncPlaylistToCloud(pl);

  if (currentSong) {
    currentQueue = getSongsForPlaylist(pl);
    currentTrackIndex = currentQueue.findIndex(s => s.id === currentSong.id);
  }

  renderAll();
}

// --- CONFIGURACIÓN DE EVENTOS ---
function setupEventListeners() {
  // Crear / Editar Lista
  btnOpenNewPlaylist?.addEventListener('click', () => openPlaylistForm(null));
  btnClosePlaylistForm?.addEventListener('click', closePlaylistForm);
  btnCancelPlaylist?.addEventListener('click', closePlaylistForm);
  btnSavePlaylist?.addEventListener('click', savePlaylistFromForm);
  inputPlaylistName?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      savePlaylistFromForm();
    } else if (e.key === 'Escape') {
      closePlaylistForm();
    }
  });

  // Selección y acciones sobre Mis Listas
  playlistsListContainer?.addEventListener('click', (e) => {
    const playBtn = e.target.closest('.play-pl-btn');
    if (playBtn) {
      e.stopPropagation();
      const id = playBtn.dataset.id;
      activePlaylistId = id;
      if (customPlaylists.some(p => p.id === id)) {
        targetCustomPlaylistId = id;
      }
      saveLocalPlaylists();
      renderAll();
      const pl = getPlaylistById(id);
      const songs = getSongsForPlaylist(pl);
      playSongAtIndex(0, songs, pl?.nombre || 'Lista');
      return;
    }

    const editBtn = e.target.closest('.edit-pl-btn');
    if (editBtn) {
      e.stopPropagation();
      openPlaylistForm(editBtn.dataset.id);
      return;
    }

    const deleteBtn = e.target.closest('.delete-pl-btn');
    if (deleteBtn) {
      e.stopPropagation();
      deletePlaylist(deleteBtn.dataset.id);
      return;
    }

    const card = e.target.closest('.playlist-item-card');
    if (card) {
      const id = card.dataset.playlistId;
      activePlaylistId = id;
      if (customPlaylists.some(p => p.id === id)) {
        targetCustomPlaylistId = id;
      }
      saveLocalPlaylists();
      renderAll();
    }
  });

  // Botones de cabecera de la Lista Activa
  btnPlayAllActive?.addEventListener('click', () => {
    const activePl = getPlaylistById(activePlaylistId);
    const songs = getSongsForPlaylist(activePl);
    isShuffle = false;
    btnPlayerShuffle?.classList.remove('active');
    playSongAtIndex(0, songs, activePl?.nombre || 'Lista');
  });

  btnShuffleActive?.addEventListener('click', () => {
    const activePl = getPlaylistById(activePlaylistId);
    const songs = getSongsForPlaylist(activePl);
    if (songs.length === 0) {
      showPlayToast('Agrega cantos a la lista primero', true);
      return;
    }
    isShuffle = true;
    btnPlayerShuffle?.classList.add('active');
    const randomIdx = Math.floor(Math.random() * songs.length);
    playSongAtIndex(randomIdx, songs, activePl?.nombre || 'Lista');
  });

  btnClearActivePlaylist?.addEventListener('click', () => {
    const pl = customPlaylists.find(p => p.id === activePlaylistId);
    if (!pl || !pl.songIds || pl.songIds.length === 0) return;

    const doClear = () => {
      pl.songIds = [];
      pl.updatedAt = Date.now();
      saveLocalPlaylists();
      syncPlaylistToCloud(pl);
      renderAll();
      showPlayToast(`Se vació la lista "${pl.nombre}"`);
    };

    if (typeof window.mostrarConfirmacion === 'function') {
      window.mostrarConfirmacion({
        titulo: 'Vaciar Lista',
        mensaje: `¿Quitar todos los cantos de "${pl.nombre}"?`,
        icono: 'delete_sweep',
        textoSi: 'Sí, vaciar',
        textoNo: 'Cancelar',
        onConfirm: doClear
      });
    } else if (confirm(`¿Quitar todos los cantos de "${pl.nombre}"?`)) {
      doClear();
    }
  });

  // Interacciones en la Cola Activa
  activeQueueContainer?.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const idx = parseInt(actionEl.dataset.idx, 10);

    if (action === 'play-queue-song') {
      const activePl = getPlaylistById(activePlaylistId);
      const songs = getSongsForPlaylist(activePl);
      playSongAtIndex(idx, songs, activePl?.nombre || 'Lista');
    } else if (action === 'move-up') {
      moveSongInActivePlaylist(idx, -1);
    } else if (action === 'move-down') {
      moveSongInActivePlaylist(idx, 1);
    } else if (action === 'remove-from-playlist') {
      removeSongAtIndexFromActivePlaylist(idx);
    }
  });

  // Buscador de la Cola Activa
  inputSearchQueue?.addEventListener('input', () => {
    queueSearchQuery = inputSearchQueue.value || '';
    if (btnClearSearchQueue) {
      btnClearSearchQueue.style.display = queueSearchQuery ? 'inline-flex' : 'none';
    }
    renderActiveQueueSection();
  });

  btnClearSearchQueue?.addEventListener('click', () => {
    if (inputSearchQueue) inputSearchQueue.value = '';
    queueSearchQuery = '';
    btnClearSearchQueue.style.display = 'none';
    renderActiveQueueSection();
  });

  // Filtros del Catálogo (Libros: Todos / Camino / Joven)
  catalogBookTabs?.addEventListener('click', (e) => {
    const tab = e.target.closest('.catalog-book-tab');
    if (!tab) return;
    catalogBookFilter = tab.dataset.book || 'all';
    catalogBookTabs.querySelectorAll('.catalog-book-tab').forEach(b => {
      b.classList.toggle('active', b === tab);
    });
    renderCatalogSection();
  });

  // Filtros del Catálogo (Etapas)
  catalogStagePills?.addEventListener('click', (e) => {
    const pill = e.target.closest('.catalog-stage-pill');
    if (!pill) return;
    catalogStageFilter = pill.dataset.stage || 'all';
    catalogStagePills.querySelectorAll('.catalog-stage-pill').forEach(p => {
      p.classList.toggle('active', p === pill);
    });
    renderCatalogSection();
  });

  // Buscador del Catálogo
  inputSearchCatalog?.addEventListener('input', () => {
    catalogSearchQuery = inputSearchCatalog.value || '';
    if (btnClearSearchCatalog) {
      btnClearSearchCatalog.style.display = catalogSearchQuery ? 'inline-flex' : 'none';
    }
    renderCatalogSection();
  });

  btnClearSearchCatalog?.addEventListener('click', () => {
    if (inputSearchCatalog) inputSearchCatalog.value = '';
    catalogSearchQuery = '';
    btnClearSearchCatalog.style.display = 'none';
    renderCatalogSection();
  });

  // Interacciones en el Catálogo (Escuchar canto o Agregar a la lista)
  catalogSongsContainer?.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const songId = actionEl.dataset.songId;

    if (action === 'toggle-add-song') {
      e.stopPropagation();
      toggleSongInTargetPlaylist(songId);
    } else if (action === 'preview-catalog-song') {
      const songObj = allCatalogSongs.find(s => s.id === songId);
      if (!songObj) return;
      if (currentSong && currentSong.id === songId) {
        togglePlayPause();
      } else {
        // Si el canto está en la lista activa, reproducir desde la lista activa; si no, reproducir desde el catálogo filtrado
        const activePl = getPlaylistById(activePlaylistId);
        const activeSongs = getSongsForPlaylist(activePl);
        const idxInActive = activeSongs.findIndex(s => s.id === songId);
        if (idxInActive !== -1) {
          playSongAtIndex(idxInActive, activeSongs, activePl?.nombre || 'Lista');
        } else {
          const idxInAll = allCatalogSongs.findIndex(s => s.id === songId);
          playSongAtIndex(idxInAll !== -1 ? idxInAll : 0, allCatalogSongs, 'Catálogo de Cantos');
        }
      }
    }
  });

  // Controles del Reproductor Principal
  btnPlayerPlay?.addEventListener('click', togglePlayPause);
  btnPlayerNext?.addEventListener('click', () => playNextTrack(false));
  btnPlayerPrev?.addEventListener('click', playPrevTrack);

  btnPlayerShuffle?.addEventListener('click', () => {
    isShuffle = !isShuffle;
    btnPlayerShuffle.classList.toggle('active', isShuffle);
    btnPlayerShuffle.title = isShuffle
      ? 'Reproducción aleatoria (Activado)'
      : 'Reproducción aleatoria (Desactivado)';
  });

  btnPlayerRepeat?.addEventListener('click', () => {
    if (repeatMode === 'all') {
      repeatMode = 'one';
      btnPlayerRepeat.classList.add('active');
      if (iconPlayerRepeat) iconPlayerRepeat.textContent = 'repeat_one';
      btnPlayerRepeat.title = 'Modo repetición: Repetir canto actual';
    } else if (repeatMode === 'one') {
      repeatMode = 'off';
      btnPlayerRepeat.classList.remove('active');
      if (iconPlayerRepeat) iconPlayerRepeat.textContent = 'repeat';
      btnPlayerRepeat.title = 'Modo repetición: Desactivado';
    } else {
      repeatMode = 'all';
      btnPlayerRepeat.classList.add('active');
      if (iconPlayerRepeat) iconPlayerRepeat.textContent = 'repeat';
      btnPlayerRepeat.title = 'Modo repetición: Repetir lista';
    }
  });

  // Eventos del elemento <audio>
  if (audioEl) {
    audioEl.addEventListener('timeupdate', () => {
      if (!Number.isFinite(audioEl.duration) || audioEl.duration <= 0) return;
      if (playerTimeCurrent) playerTimeCurrent.textContent = formatSeconds(audioEl.currentTime);
      if (playerTimeTotal) playerTimeTotal.textContent = formatSeconds(audioEl.duration);
      if (playerSeekSlider) {
        playerSeekSlider.value = String((audioEl.currentTime / audioEl.duration) * 100);
      }
    });

    audioEl.addEventListener('loadedmetadata', () => {
      if (playerTimeTotal) playerTimeTotal.textContent = formatSeconds(audioEl.duration);
    });

    audioEl.addEventListener('ended', () => {
      playNextTrack(true);
    });

    audioEl.addEventListener('play', () => {
      isPlaying = true;
      updatePlayerUI();
    });

    audioEl.addEventListener('pause', () => {
      isPlaying = false;
      updatePlayerUI();
    });

    audioEl.addEventListener('error', () => {
      if (!currentSong) return;
      showPlayToast(`No se pudo cargar el audio de "${currentSong.title}"`, true);
      if (currentQueue.length > 1) {
        setTimeout(() => playNextTrack(true), 1200);
      }
    });
  }

  playerSeekSlider?.addEventListener('input', () => {
    if (!audioEl || !Number.isFinite(audioEl.duration) || audioEl.duration <= 0) return;
    const pct = parseFloat(playerSeekSlider.value) || 0;
    audioEl.currentTime = (pct / 100) * audioEl.duration;
  });

  playerVolumeSlider?.addEventListener('input', () => {
    if (!audioEl) return;
    const vol = parseFloat(playerVolumeSlider.value);
    audioEl.volume = vol;
    audioEl.muted = vol === 0;
    if (iconPlayerVolume) {
      iconPlayerVolume.textContent = vol === 0 ? 'volume_off' : (vol < 0.5 ? 'volume_down' : 'volume_up');
    }
  });

  btnPlayerMute?.addEventListener('click', () => {
    if (!audioEl) return;
    audioEl.muted = !audioEl.muted;
    if (iconPlayerVolume) {
      iconPlayerVolume.textContent = audioEl.muted ? 'volume_off' : 'volume_up';
    }
  });

  playerSpeedSelect?.addEventListener('change', () => {
    if (!audioEl) return;
    audioEl.playbackRate = parseFloat(playerSpeedSelect.value) || 1;
  });

  // Controles de pantalla de bloqueo / MediaSession
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.setActionHandler('play', () => togglePlayPause());
      navigator.mediaSession.setActionHandler('pause', () => togglePlayPause());
      navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
      navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack(false));
    } catch (e) {}
  }
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', async () => {
  await loadCatalogSongs();
  loadLocalPlaylists();
  setupEventListeners();
  renderAll();

  onAuthStateChanged((user) => {
    setupCloudSyncForUser(user);
  });
});
