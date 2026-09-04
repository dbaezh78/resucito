// src/js/ajustes.js
// Centralización de todos los ajustes y preferencias de la aplicación.
import { auth, db, doc, getDoc, setDoc, collection, getDocs } from '../firebase.js';
import { getCurrentUser, isCurrentUserAdmin, onAuthStateChanged, loginMock, logoutMock } from '../auth.js';
import { setupAccessControlUI, getAccessControlState, hasPermission } from '../accesscontrol.js';

// --- Indicador de Estado del Canto Offline ---
export function updateCantoEquipoBadge() {
  const badge = document.getElementById('cloud-connection-badge');
  if (!badge) return;
  const toggle = document.getElementById('canto-equipo-toggle');
  const isActive = toggle ? toggle.checked : (localStorage.getItem('cantoEquipoOffline') === 'true');
  
  if (isActive) {
    badge.textContent = "OnLine";
    badge.style.background = "#28a745";
    badge.style.boxShadow = "0 0 10px rgba(40, 167, 69, 0.8)";
  } else {
    badge.textContent = "OffLine";
    badge.style.background = "#dc3545";
    badge.style.boxShadow = "0 0 10px rgba(220, 53, 69, 0.8)";
  }
}

// 1. Exponer variables de ajustes en `window` mediante getters/setters que leen/escriben en `localStorage`.
// De esta manera, cualquier acceso o asignación (ej: `scrollIntervalMs = 50`) actualiza automáticamente localStorage y el estado.

Object.defineProperty(window, 'scrollIntervalMs', {
  get() { return parseInt(localStorage.getItem('scroll-interval')) || 40; },
  set(v) { localStorage.setItem('scroll-interval', v); },
  configurable: true,
  enumerable: true
});

Object.defineProperty(window, 'scrollStepPx', {
  get() { return parseInt(localStorage.getItem('scroll-step')) || 1; },
  set(v) { localStorage.setItem('scroll-step', v); },
  configurable: true,
  enumerable: true
});

Object.defineProperty(window, 'scrollIntervalLimit', {
  get() { return parseInt(localStorage.getItem('scroll-interval-limit')) || 1000; },
  set(v) { localStorage.setItem('scroll-interval-limit', v); },
  configurable: true,
  enumerable: true
});

Object.defineProperty(window, 'scrollStepLimit', {
  get() { return parseInt(localStorage.getItem('scroll-step-limit')) || 100; },
  set(v) { localStorage.setItem('scroll-step-limit', v); },
  configurable: true,
  enumerable: true
});

Object.defineProperty(window, 'isSplitLayout', {
  get() { return localStorage.getItem('split-layout') !== 'false'; },
  set(v) { localStorage.setItem('split-layout', v ? 'true' : 'false'); },
  configurable: true,
  enumerable: true
});

Object.defineProperty(window, 'songListStyle', {
  get() { return localStorage.getItem('song-list-style') || 'simple'; },
  set(v) { localStorage.setItem('song-list-style', v); },
  configurable: true,
  enumerable: true
});

window.getDeviceCategory = function() {
  const w = window.innerWidth;
  if (w <= 768) return 'mobile';
  if (w <= 1024) return 'tablet';
  return 'pc';
};

window.getDefaultBaseZoomForDevice = function(device) {
  device = device || window.getDeviceCategory();
  if (device === 'mobile') return 0.8; // 📱 Celular (< 768px) => 80%
  if (device === 'tablet') return 1.5; // 📟 Tablet (768-1024px) => 150%
  return 1.0;                         // 🖥️ PC/Laptop (> 1024px) => 100%
};

window.getDefaultZoom = function(songId) {
  const targetSongId = songId || window.currentCanto?.id || window.currentCanto?.songId;
  const device = window.getDeviceCategory();

  // 1. Si el canto específico tiene un zoom personalizado guardado para este tipo de dispositivo
  if (targetSongId) {
    try {
      const songZooms = JSON.parse(localStorage.getItem('resucito_song_zooms') || '{}');
      if (songZooms[targetSongId] && songZooms[targetSongId][device] !== undefined) {
        return parseFloat(songZooms[targetSongId][device]);
      }
    } catch(e) {}
  }

  // 2. Si hay un zoom guardado por tipo de dispositivo
  const savedDeviceZoom = localStorage.getItem('font-zoom-' + device);
  if (savedDeviceZoom) return parseFloat(savedDeviceZoom);

  // 3. Si hay un zoom guardado globalmente
  if (localStorage.getItem('font-zoom-custom') === 'true') {
    const saved = localStorage.getItem('font-zoom');
    if (saved) return parseFloat(saved);
  }

  // 4. Valor por defecto del dispositivo
  return window.getDefaultBaseZoomForDevice(device);
};

window.getZoomForSong = function(songId, device) {
  return window.getDefaultZoom(songId);
};

window.applyZoom = function(factor) {
  const zoom = Math.max(0.4, Math.min(2.5, factor));
  document.documentElement.style.setProperty('--font-zoom', zoom);
  const settingsZoomBadge = document.getElementById('settings-zoom-badge');
  if (settingsZoomBadge) {
    settingsZoomBadge.textContent = `${Math.round(zoom * 100)}%`;
  }
};

window.updateZoomUIState = function() {
  const currentSong = window.currentCanto;
  const currentSongId = currentSong?.id || currentSong?.songId;
  const device = window.getDeviceCategory();
  const badge = document.getElementById('settings-zoom-badge');
  const desc = document.getElementById('settings-zoom-context-desc');
  const resetBtn = document.getElementById('settings-zoom-reset-btn');

  const currentZoom = window.getDefaultZoom(currentSongId);
  if (badge) badge.textContent = `${Math.round(currentZoom * 100)}%`;

  const deviceName = device === 'mobile' ? 'Celular' : (device === 'tablet' ? 'Tablet' : 'PC');

  let hasCustomSongZoom = false;
  if (currentSongId) {
    try {
      const songZooms = JSON.parse(localStorage.getItem('resucito_song_zooms') || '{}');
      if (songZooms[currentSongId] && songZooms[currentSongId][device] !== undefined) {
        hasCustomSongZoom = true;
      }
    } catch(e) {}
  }

  if (desc) {
    if (currentSong) {
      const songTitle = currentSong.title || currentSong.tt || currentSongId;
      if (hasCustomSongZoom) {
        desc.innerHTML = `Zoom para <strong>${songTitle}</strong> en <strong>${deviceName}</strong> (Personalizado)`;
      } else {
        desc.innerHTML = `Zoom para <strong>${songTitle}</strong> en <strong>${deviceName}</strong> (Por defecto)`;
      }
    } else {
      desc.textContent = `Ajusta el zoom de la letra para ${deviceName}`;
    }
  }

  if (resetBtn) {
    resetBtn.style.display = hasCustomSongZoom ? 'inline-flex' : 'none';
  }
};

window.saveSongZoom = function(songId, zoom, device) {
  device = device || window.getDeviceCategory();
  const cleanZoom = Math.round(Math.max(0.4, Math.min(2.5, zoom)) * 10) / 10;

  if (songId) {
    let songZooms = {};
    try {
      songZooms = JSON.parse(localStorage.getItem('resucito_song_zooms') || '{}');
    } catch(e) { songZooms = {}; }

    if (!songZooms[songId]) songZooms[songId] = {};
    songZooms[songId][device] = cleanZoom;
    localStorage.setItem('resucito_song_zooms', JSON.stringify(songZooms));

    if (typeof window.guardarZoomCantoEnNube === 'function') {
      window.guardarZoomCantoEnNube(songId, songZooms[songId]);
    }
  } else {
    localStorage.setItem('font-zoom-' + device, cleanZoom);
    localStorage.setItem('font-zoom', cleanZoom);
    localStorage.setItem('font-zoom-custom', 'true');
  }

  window.applyZoom(cleanZoom);
  window.updateZoomUIState();
};

window.resetSongZoom = function(songId, device) {
  device = device || window.getDeviceCategory();
  const targetSongId = songId || window.currentCanto?.id || window.currentCanto?.songId;

  if (targetSongId) {
    let songZooms = {};
    try {
      songZooms = JSON.parse(localStorage.getItem('resucito_song_zooms') || '{}');
    } catch(e) { songZooms = {}; }

    if (songZooms[targetSongId]) {
      delete songZooms[targetSongId][device];
      if (Object.keys(songZooms[targetSongId]).length === 0) {
        delete songZooms[targetSongId];
      }
      localStorage.setItem('resucito_song_zooms', JSON.stringify(songZooms));

      if (typeof window.guardarZoomCantoEnNube === 'function') {
        window.guardarZoomCantoEnNube(targetSongId, songZooms[targetSongId] || null);
      }
    }
  }

  const defaultZoom = window.getDefaultZoom(targetSongId);
  window.applyZoom(defaultZoom);
  window.updateZoomUIState();
};

window.updateZoom = function(factor) {
  const currentSongId = window.currentCanto?.id || window.currentCanto?.songId;
  const cleanZoom = Math.round(Math.max(0.4, Math.min(2.5, factor)) * 10) / 10;
  window.saveSongZoom(currentSongId, cleanZoom);
};

Object.defineProperty(window, 'zoomFactor', {
  get() {
    const currentSongId = window.currentCanto?.id || window.currentCanto?.songId;
    return window.getDefaultZoom ? window.getDefaultZoom(currentSongId) : 1.0;
  },
  set(v) {
    window.updateZoom(v);
  },
  configurable: true,
  enumerable: true
});

// Inicializar favoritos globalmente
if (!window.favorites) {
  window.favorites = new Set();
  const savedFavorites = localStorage.getItem('favorites');
  if (savedFavorites) {
    try {
      window.favorites = new Set(JSON.parse(savedFavorites));
    } catch (e) {
      console.error('Error al cargar favoritos:', e);
    }
  }
}

// Inicializar administrador globalmente
if (typeof window.isAdmin === 'undefined') {
  window.isAdmin = false;
}

// Mapa de fuentes tipográficas
window.FONT_MAP = {
  'franklin': "'Franklin Gothic Medium', Arial, sans-serif",
  'sans-serif': "sans-serif",
  'arial': "'Arial', sans-serif",
  'aptos': "'Aptos', sans-serif",
  'cavolini': "'Cavolini', sans-serif",
  'comic-sans': "'Comic Sans MS', cursive, sans-serif",
  'fairwater-script': "'Fairwater Script', 'Brush Script MT', cursive",
  'mv-boli': "'MV Boli', sans-serif",
  'neocat': "'Neocat', sans-serif",
  'pristina': "'Pristina', cursive, serif",
  'segoe-print': "'Segoe Print', cursive, sans-serif",
  'viner-hand': "'Viner Hand ITC', cursive, serif"
};

window.applyFontFamily = function(key) {
  const css = window.FONT_MAP[key] || window.FONT_MAP['franklin'];
  document.documentElement.style.setProperty('--font-family-lyrics', css);
};

window.setTheme = function(theme) {
  document.body.className = '';
  document.body.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
  
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  window.applyBookTheme();
};

window.setListStyle = function(style) {
  window.songListStyle = style; // setter
  const songsGrid = document.getElementById('songs-grid');
  if (songsGrid) {
    songsGrid.className = `songs-grid style-${style}`;
  }
  document.querySelectorAll('.list-style-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.style === style);
  });
};

window.formatColorToHex = function(colorStr) {
  if (!colorStr) return '';
  colorStr = colorStr.trim();
  if (colorStr.startsWith('#')) return colorStr;
  
  const temp = document.createElement('div');
  temp.style.color = colorStr;
  document.body.appendChild(temp);
  const resolved = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  
  const match = resolved.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match) {
    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return '';
};

window.applyStageColors = function() {
  const preColor  = localStorage.getItem('stage-color-pre')  || '#ffffff';
  const cateColor = localStorage.getItem('stage-color-cate') || '#2196f3';
  const eleColor  = localStorage.getItem('stage-color-ele')  || '#8bc34a';
  const litColor  = localStorage.getItem('stage-color-lit')  || '#FFEB3B';
  const catColor  = localStorage.getItem('stage-color-cat')  || '#6f42c1';

  const preActive  = localStorage.getItem('btn-color-pre-active')  || '#495057';
  const cateActive = localStorage.getItem('btn-color-cate-active') || '#1976d2';
  const eleActive  = localStorage.getItem('btn-color-ele-active')  || '#558b2f';
  const litActive  = localStorage.getItem('btn-color-lit-active')  || '#f9a825';
  const catActive  = localStorage.getItem('btn-color-cat-active')  || '#4a1d96';

  const preText  = localStorage.getItem('btn-color-pre-text')  || '#212529';
  const cateText = localStorage.getItem('btn-color-cate-text') || '#ffffff';
  const eleText  = localStorage.getItem('btn-color-ele-text')  || '#ffffff';
  const litText  = localStorage.getItem('btn-color-lit-text')  || '#212529';
  const catText  = localStorage.getItem('btn-color-cat-text')  || '#ffffff';

  const settingsBtnBg = localStorage.getItem('settings-btn-bg') || '#d01212';
  const settingsBtnText = localStorage.getItem('settings-btn-text') || '#ffffff';

  document.body.style.setProperty('--color-pre', preColor);
  document.body.style.setProperty('--color-cate', cateColor);
  document.body.style.setProperty('--color-ele', eleColor);
  document.body.style.setProperty('--color-lit', litColor);
  document.body.style.setProperty('--color-cat', catColor);

  document.body.style.setProperty('--color-pre-active', preActive);
  document.body.style.setProperty('--color-cate-active', cateActive);
  document.body.style.setProperty('--color-ele-active', eleActive);
  document.body.style.setProperty('--color-lit-active', litActive);
  document.body.style.setProperty('--color-cat-active', catActive);

  document.body.style.setProperty('--text-pre', preText);
  document.body.style.setProperty('--text-cate', cateText);
  document.body.style.setProperty('--text-ele', eleText);
  document.body.style.setProperty('--text-lit', litText);
  document.body.style.setProperty('--text-cat', catText);

  document.body.style.setProperty('--settings-btn-bg', settingsBtnBg);
  document.body.style.setProperty('--settings-btn-text', settingsBtnText);
  document.documentElement.style.setProperty('--settings-btn-bg', settingsBtnBg);
  document.documentElement.style.setProperty('--settings-btn-text', settingsBtnText);

  const updatePreview = (id, color) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.backgroundColor = color;
      const icon = el.querySelector('span');
      if (icon) {
        const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(color.replace('#',''));
        icon.style.color = isLight ? '#212529' : '#ffffff';
      }
      const input = el.querySelector('input');
      if (input) input.value = color;
    }
  };
  updatePreview('preview-pre-default', preColor);
  updatePreview('preview-pre-active', preActive);
  updatePreview('preview-pre-text', preText);
  updatePreview('preview-cate-default', cateColor);
  updatePreview('preview-cate-active', cateActive);
  updatePreview('preview-cate-text', cateText);
  updatePreview('preview-ele-default', eleColor);
  updatePreview('preview-ele-active', eleActive);
  updatePreview('preview-ele-text', eleText);
  updatePreview('preview-lit-default', litColor);
  updatePreview('preview-lit-active', litActive);
  updatePreview('preview-lit-text', litText);
  updatePreview('preview-cat-default', catColor);
  updatePreview('preview-cat-active', catActive);
  updatePreview('preview-cat-text', catText);
  updatePreview('preview-settings-btn-bg', settingsBtnBg);
  updatePreview('preview-settings-btn-text', settingsBtnText);

  document.querySelectorAll('.color-swatches').forEach(container => {
    const stage = container.dataset.stage;
    let activeColor = '#6c757d';
    if (stage === 'pre') activeColor = preColor;
    if (stage === 'cate') activeColor = cateColor;
    if (stage === 'ele') activeColor = eleColor;
    if (stage === 'lit') activeColor = litColor;

    let presetMatched = false;
    container.querySelectorAll('.color-swatch-btn').forEach(btn => {
      const btnColor = btn.dataset.color.toLowerCase();
      const isMatched = btnColor === activeColor.toLowerCase();
      btn.classList.toggle('active', isMatched);
      if (isMatched) presetMatched = true;
    });

    const labelBtn = container.querySelector('.color-picker-label-btn');
    const inputPicker = container.querySelector('.stage-color-input');
    if (inputPicker) {
      inputPicker.value = activeColor.startsWith('#') ? activeColor : '#6c757d';
    }
    if (labelBtn) {
      if (!presetMatched) {
        labelBtn.classList.add('active');
        labelBtn.style.backgroundColor = activeColor;
        const isLight = activeColor.toLowerCase() === '#eeeeee' || activeColor.toLowerCase() === '#ffffff' || activeColor.toLowerCase() === '#ffeb3b';
        labelBtn.querySelector('span').style.color = isLight ? '#212529' : '#ffffff';
      } else {
        labelBtn.classList.remove('active');
        labelBtn.style.backgroundColor = 'var(--panel-bg)';
        labelBtn.querySelector('span').style.color = 'var(--text-color)';
      }
    }
  });
};

window.applyBookTheme = function() {
  const suffix = localStorage.getItem('theme') || 'light';
  
  const customBg = localStorage.getItem('book-theme-bg-' + suffix);
  const customAccent = localStorage.getItem('book-theme-accent-' + suffix);
  const customText = localStorage.getItem('book-theme-text-' + suffix);
  const customSongTitle = localStorage.getItem('book-theme-song-title-' + suffix);
  const customChord = localStorage.getItem('book-theme-chord-' + suffix);
  const customChordAlt = localStorage.getItem('book-theme-chord-alt-' + suffix);
  const customFooterLink = localStorage.getItem('book-theme-footer-link-' + suffix);
  
  if (customBg) {
    document.body.style.setProperty('--bg-color', customBg);
  } else {
    document.body.style.removeProperty('--bg-color');
  }
  
  if (customAccent) {
    document.body.style.setProperty('--accent-color', customAccent);
    let glow = customAccent;
    if (customAccent.startsWith('#')) {
      const r = parseInt(customAccent.slice(1, 3), 16);
      const g = parseInt(customAccent.slice(3, 5), 16);
      const b = parseInt(customAccent.slice(5, 7), 16);
      if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
        glow = `rgba(${r}, ${g}, ${b}, 0.35)`;
      }
    }
    document.body.style.setProperty('--accent-glow', glow);
  } else {
    document.body.style.removeProperty('--accent-color');
    document.body.style.removeProperty('--accent-glow');
  }

  if (customText) {
    document.body.style.setProperty('--text-color', customText);
  } else {
    document.body.style.removeProperty('--text-color');
  }

  if (customSongTitle) {
    document.body.style.setProperty('--song-title-color', customSongTitle);
  } else {
    document.body.style.removeProperty('--song-title-color');
  }

  if (customChord) {
    document.body.style.setProperty('--chord-color', customChord);
  } else {
    document.body.style.removeProperty('--chord-color');
  }

  if (customChordAlt) {
    document.body.style.setProperty('--chord-color-alt', customChordAlt);
  } else {
    document.body.style.removeProperty('--chord-color-alt');
  }

  if (customFooterLink) {
    document.body.style.setProperty('--SangreCristo', customFooterLink);
  } else {
    document.body.style.removeProperty('--SangreCristo');
  }
  
  const bgInput = document.querySelector('.book-theme-input[data-type="bg"]');
  const accentInput = document.querySelector('.book-theme-input[data-type="accent"]');
  const textInput = document.querySelector('.book-theme-input[data-type="text"]');
  const songTitleInput = document.querySelector('.book-theme-input[data-type="song-title"]');
  const chordInput = document.querySelector('.book-theme-input[data-type="chord"]');
  const chordAltInput = document.querySelector('.book-theme-input[data-type="chord-alt"]');
  const footerLinkInput = document.querySelector('.book-theme-input[data-type="footer-link"]');
  
  requestAnimationFrame(() => {
    const computedStyle = getComputedStyle(document.body);
    const currentBg = computedStyle.getPropertyValue('--bg-color').trim();
    const currentAccent = computedStyle.getPropertyValue('--accent-color').trim();
    const currentText = computedStyle.getPropertyValue('--text-color').trim();
    const currentSongTitle = computedStyle.getPropertyValue('--song-title-color').trim() || currentAccent || '#d01212';
    const currentChord = computedStyle.getPropertyValue('--chord-color').trim();
    const currentChordAlt = computedStyle.getPropertyValue('--chord-color-alt').trim();
    const currentFooterLink = computedStyle.getPropertyValue('--SangreCristo').trim() || '#3d0706';
    
    if (bgInput) {
      const hex = window.formatColorToHex(currentBg) || '#0a0a0a';
      bgInput.value = hex;
      const preview = bgInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }
    
    if (accentInput) {
      const hex = window.formatColorToHex(currentAccent) || '#d01212';
      accentInput.value = hex;
      const preview = accentInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }

    if (textInput) {
      const hex = window.formatColorToHex(currentText) || '#ffffff';
      textInput.value = hex;
      const preview = textInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }

    if (songTitleInput) {
      const hex = window.formatColorToHex(currentSongTitle) || '#d01212';
      songTitleInput.value = hex;
      const preview = songTitleInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }

    if (chordInput) {
      const hex = window.formatColorToHex(currentChord) || '#d01212';
      chordInput.value = hex;
      const preview = chordInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }

    if (chordAltInput) {
      const hex = window.formatColorToHex(currentChordAlt) || '#944c18';
      chordAltInput.value = hex;
      const preview = chordAltInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }

    if (footerLinkInput) {
      const hex = window.formatColorToHex(currentFooterLink) || '#3d0706';
      footerLinkInput.value = hex;
      const preview = footerLinkInput.closest('.btn-pill-preview');
      if (preview) {
        preview.style.backgroundColor = hex;
        const icon = preview.querySelector('span');
        if (icon) {
          const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#',''));
          icon.style.color = isLight ? '#212529' : '#ffffff';
        }
      }
    }
    window.updateNavInputs();
  });
};

window.updateNavInputs = function() {
  const inputs = document.querySelectorAll('.nav-theme-input');
  if (!inputs.length) return;

  const navBar = document.getElementById('main-navbar');
  const toggleBtn = document.getElementById('nav-toggle');
  const computedNav = navBar ? getComputedStyle(navBar) : null;
  const computedToggle = toggleBtn ? getComputedStyle(toggleBtn) : null;

  inputs.forEach(input => {
    const type = input.dataset.type;
    const mode = input.dataset.mode || 'normal';
    const key = mode === 'hover' ? `nav-color-${type}-hover` : `nav-color-${type}`;
    let colorVal = localStorage.getItem(key);

    if (!colorVal) {
      if (type === 'text') {
        colorVal = mode === 'hover' ? '#ffffff' : '#301d1d';
      } else if (type === 'bg') {
        colorVal = computedNav ? computedNav.getPropertyValue('background-color').trim() : '#ffffff';
      } else if (type === 'btn-bg') {
        colorVal = mode === 'hover' ? '#390404' : '#f7f7f7';
      } else if (type === 'icon') {
        colorVal = mode === 'hover' ? '#f4ebeb' : '#301d1d';
      } else if (type === 'submenu-icon') {
        colorVal = mode === 'hover' ? '#ffffff' : '#3d0706';
      } else if (type === 'wrapper-bg') {
        colorVal = computedToggle ? computedToggle.getPropertyValue('background-color').trim() : '#ffffff';
      }
    }

    const hex = window.formatColorToHex(colorVal) || '#ffffff';
    input.value = hex;

    const preview = input.closest('.btn-pill-preview');
    if (preview) {
      preview.style.backgroundColor = hex;
      const icon = preview.querySelector('span');
      if (icon) {
        const isLight = /ffeb3b|ffffff|eeeeee|fafafa|fff9c4|f0f4c3/i.test(hex.replace('#', ''));
        icon.style.color = isLight ? '#212529' : '#ffffff';
      }
    }
  });
};

let currentSettingsTab = 'general';
let currentThemeSubmodule = 'visual';
let currentThemeFunctionModule = 'toolbar';
let currentUserSubmodule = 'account';
let currentGeneralSubmodule = 'comun';

window.openSettingsTab = function(tabName = 'general') {
  currentSettingsTab = tabName;
  const tabBtns = document.querySelectorAll('.settings-tab-btn');
  tabBtns.forEach((b) => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });

  const panelGroups = document.querySelectorAll('.settings-panel-group');
  panelGroups.forEach((panel) => {
    panel.style.display = 'none';
  });

  const targetPanel = document.getElementById(`settings-panel-${tabName}`);
  if (targetPanel) {
    targetPanel.style.display = 'block';
  }

  if (tabName === 'log') {
    if (typeof window.switchLogSubmodule === 'function') {
      const canViewLogs = (typeof window.isCurrentUserAdmin === 'function' && window.isCurrentUserAdmin()) || 
                          (typeof window.hasPermission === 'function' && window.hasPermission('view_logs'));
      const canViewStatus = (typeof window.isCurrentUserAdmin === 'function' && window.isCurrentUserAdmin()) || 
                            (typeof window.hasPermission === 'function' && window.hasPermission('view_status'));
      
      if (canViewLogs) {
        window.switchLogSubmodule('console');
      } else if (canViewStatus) {
        window.switchLogSubmodule('status');
      } else {
        window.switchLogSubmodule('console');
      }
    }
    if (window.renderAppLogs) {
      window.renderAppLogs();
    }
  }
  if (tabName === 'datos' && window.renderDatosModule) {
    window.renderDatosModule();
  }
  if (tabName === 'paginas' && window.initBitacoraSettings) {
    window.initBitacoraSettings();
  }
};

window.abrirModalConfiguracion = async function() {
  if (!document.getElementById('settings-modal') && typeof window.initAjustes === 'function') {
    await window.initAjustes();
  }

  const modal = document.getElementById('settings-modal');
  if (modal && (modal.style.display === 'flex' || modal.style.display === 'block')) {
    // Si ya está abierto, actuar como toggle cerrándolo (guardando cambios)
    modal.style.display = 'none';
    if (typeof window.guardarAjustesEnNube === 'function') {
      window.guardarAjustesEnNube();
    }
    return;
  }

  window.openSettingsTab(currentSettingsTab);
  if (typeof window.populateBisSongList === 'function') {
    try { window.populateBisSongList(); } catch (e) {}
  }
  if (typeof window.switchThemeSubmodule === 'function') {
    window.switchThemeSubmodule(currentThemeSubmodule);
  }
  if (typeof window.switchThemeFunctionModule === 'function') {
    window.switchThemeFunctionModule(currentThemeFunctionModule);
  }
  if (typeof window.switchGeneralSubmodule === 'function') {
    window.switchGeneralSubmodule(currentGeneralSubmodule);
  }
  const targetUserBtn = document.querySelector(`.user-subtab-btn[data-subtab="${currentUserSubmodule}"]`) || 
                        document.getElementById('user-subtab-account-btn');
  if (targetUserBtn) {
    targetUserBtn.click();
  }
  if (typeof window.updateZoomUIState === 'function') {
    window.updateZoomUIState();
  }
  if (modal) modal.style.display = 'flex';
};

window.exportNotes = function() {
  const notesObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('notes_')) {
      notesObj[key] = localStorage.getItem(key);
    }
  }
  
  const blob = new Blob([JSON.stringify(notesObj, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `resucito_notas_cantor_${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.importNotes = function() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        let count = 0;
        for (const [key, value] of Object.entries(importedData)) {
          if (key.startsWith('notes_')) {
            localStorage.setItem(key, value);
            count++;
          }
        }
        alert(`Se importaron con éxito ${count} anotaciones de cantos.`);
        const notesTextarea = document.getElementById('notes-textarea');
        if (window.currentCanto && notesTextarea) {
          notesTextarea.value = localStorage.getItem(`notes_${window.currentCanto.id}`) || '';
        }
      } catch (err) {
        alert('El archivo no es un backup válido de notas de cantor.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
};

// Wake Lock (Pantalla encendida)
let wakeLock = null;
window.requestWakeLock = async function() {
  try {
    if ('wakeLock' in navigator) {
      if (wakeLock) {
        try { await wakeLock.release(); } catch(e) {}
      }
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Screen Wake Lock is active');
      wakeLock.addEventListener('release', () => {
        console.log('Screen Wake Lock was released');
        wakeLock = null;
      });
    }
  } catch (err) {
    console.warn('Wake Lock request failed:', err);
  }
};

window.releaseWakeLock = function() {
  if (wakeLock !== null) {
    try { wakeLock.release(); } catch(e) {}
    wakeLock = null;
  }
};

window.handleVisibilityChange = async function() {
  if (document.visibilityState === 'visible') {
    const isWakeLockPrefActive = localStorage.getItem('pref-wakelock') === 'true';
    if (isWakeLockPrefActive) {
      await window.requestWakeLock();
    }
  }
};

window.initWakeLockPreference = function() {
  const isWakeLockPrefActive = localStorage.getItem('pref-wakelock') === 'true';
  const wakelockToggle = document.getElementById('wakelock-toggle');
  
  if (wakelockToggle) {
    wakelockToggle.checked = isWakeLockPrefActive;
    
    if (isWakeLockPrefActive) {
      window.requestWakeLock();
      document.addEventListener('visibilitychange', window.handleVisibilityChange);
    }

    wakelockToggle.addEventListener('change', async (e) => {
      const active = e.target.checked;
      localStorage.setItem('pref-wakelock', active ? 'true' : 'false');
      
      if (active) {
        await window.requestWakeLock();
        document.addEventListener('visibilitychange', window.handleVisibilityChange);
      } else {
        window.releaseWakeLock();
        document.removeEventListener('visibilitychange', window.handleVisibilityChange);
      }
    });
  }
};

window.initAutoHideNavPreference = function() {
  const isAutoHideActive = localStorage.getItem('pref-autohide-nav') === 'true';
  const autohideToggle = document.getElementById('autohide-nav-toggle');

  if (autohideToggle) {
    autohideToggle.checked = isAutoHideActive;

    autohideToggle.addEventListener('change', (e) => {
      const active = e.target.checked;
      localStorage.setItem('pref-autohide-nav', active ? 'true' : 'false');
      if (typeof window.startAutoHideTimer === 'function') {
        window.startAutoHideTimer();
      }
    });
  }
};

// Zoom con los dedos (Pinch-to-zoom)
let zoomFingerEnabled = true;

window.initZoomFingerPreference = function() {
  const isZoomFingerActive = localStorage.getItem('pref-zoom-finger') !== 'false'; // Por defecto true
  const zoomFingerToggle = document.getElementById('zoom-finger-toggle');
  
  const applyZoomFinger = (enabled) => {
    zoomFingerEnabled = enabled;
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      if (enabled) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
      } else {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover');
      }
    }
  };

  if (zoomFingerToggle) {
    zoomFingerToggle.checked = isZoomFingerActive;
    applyZoomFinger(isZoomFingerActive);
    
    zoomFingerToggle.addEventListener('change', (e) => {
      const active = e.target.checked;
      localStorage.setItem('pref-zoom-finger', active ? 'true' : 'false');
      applyZoomFinger(active);
    });
  } else {
    applyZoomFinger(isZoomFingerActive);
  }
};

// Prevenir zoom multitáctil si está deshabilitado
document.addEventListener('touchstart', (e) => {
  if (e.touches.length > 1 && !zoomFingerEnabled) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('gesturestart', (e) => {
  if (!zoomFingerEnabled) {
    e.preventDefault();
  }
}, { passive: false });

// Estilos de cabecera de grupo de categoría (Preparación y Perfil)
window.applyCatHeaderStyles = function() {
  const color = localStorage.getItem('cat-header-color');
  const size  = localStorage.getItem('cat-header-font-size');
  const weight = localStorage.getItem('cat-header-font-weight');
  if (color)  document.documentElement.style.setProperty('--cat-header-color', color);
  if (size)   document.documentElement.style.setProperty('--cat-header-font-size', size + 'px');
  if (weight) document.documentElement.style.setProperty('--cat-header-font-weight', weight);
};

window.updateCatHeaderPreview = function() {
  const el = document.getElementById('preview-cat-header-text');
  const prevText = document.getElementById('prev-preparar-texto');
  const prevColor = document.getElementById('prev-preparar-color');

  const color  = localStorage.getItem('cat-header-color') || '#d01212';
  const size   = localStorage.getItem('cat-header-font-size') || '16';
  const weight = localStorage.getItem('cat-header-font-weight') || '700';

  if (el) {
    el.style.color = color;
    el.style.fontSize = size + 'px';
    el.style.fontWeight = weight;
  }
  if (prevText) {
    prevText.style.color      = color;
    prevText.style.fontSize   = size + 'px';
    prevText.style.fontWeight = weight;
  }
  if (prevColor) prevColor.style.backgroundColor = color;
};

window.applyPerfilHeaderStyles = function() {
  const color  = localStorage.getItem('perfil-header-color');
  const size   = localStorage.getItem('perfil-header-font-size');
  const weight = localStorage.getItem('perfil-header-font-weight');
  if (color)  document.documentElement.style.setProperty('--perfil-header-color', color);
  if (size)   document.documentElement.style.setProperty('--perfil-header-font-size', size + 'px');
  if (weight) document.documentElement.style.setProperty('--perfil-header-font-weight', weight);
};

window.updatePerfilHeaderPreview = function() {
  const el = document.getElementById('preview-perfil-header-text');
  const prevText = document.getElementById('prev-perfil-texto');
  const prevColor = document.getElementById('prev-perfil-color');

  const color  = localStorage.getItem('perfil-header-color') || '#d01212';
  const size   = localStorage.getItem('perfil-header-font-size') || '16';
  const weight = localStorage.getItem('perfil-header-font-weight') || '700';

  if (el) {
    el.style.color = color;
    el.style.fontSize = size + 'px';
    el.style.fontWeight = weight;
  }
  if (prevText) {
    prevText.style.color      = color;
    prevText.style.fontSize   = size + 'px';
    prevText.style.fontWeight = weight;
  }
  if (prevColor) prevColor.style.backgroundColor = color;
};

let settingsModalPromise = null;

// Función principal de inicialización de Ajustes
window.initAjustes = async function() {
  // Cargar el HTML del modal si no existe en el DOM
  if (!document.getElementById('settings-modal')) {
    if (!settingsModalPromise) {
      settingsModalPromise = (async () => {
        try {
          const response = await fetch('data/ajustes_modal.html?v=129');
          if (response.ok) {
            const html = await response.text();
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            document.body.appendChild(tempDiv.firstElementChild);
          }
        } catch (e) {
          console.error('Error al cargar el modal de ajustes dinámicamente:', e);
        }
      })();
    }
    await settingsModalPromise;
  }

  // Actualizar placa de conexión del submódulo Cloud
  if (typeof updateCantoEquipoBadge === 'function') {
    updateCantoEquipoBadge();
  }
  
  // Evitar duplicar los escuchadores de eventos si initAjustes se ejecuta de nuevo
  if (window.ajustesListenersAttached) {
    const loopToggle = document.getElementById('audio-loop-toggle');
    const player = document.getElementById('viewer-audio-player');
    if (loopToggle && player) {
      const loopEnabled = localStorage.getItem('audioLoopEnabled') === 'true';
      loopToggle.checked = loopEnabled;
      player.loop = loopEnabled;
    }
    
    const bassSlider = document.getElementById('eq-bass-slider');
    const midSlider = document.getElementById('eq-mid-slider');
    const trebleSlider = document.getElementById('eq-treble-slider');
    const bassVal = document.getElementById('eq-bass-val');
    const midVal = document.getElementById('eq-mid-val');
    const trebleVal = document.getElementById('eq-treble-val');
    
    if (bassSlider) {
      const bassValDB = localStorage.getItem('eqGainBass') || '0';
      bassSlider.value = bassValDB;
      if (bassVal) bassVal.textContent = parseFloat(bassValDB) > 0 ? `+${bassValDB} dB` : `${bassValDB} dB`;
    }
    if (midSlider) {
      const midValDB = localStorage.getItem('eqGainMid') || '0';
      midSlider.value = midValDB;
      if (midVal) midVal.textContent = parseFloat(midValDB) > 0 ? `+${midValDB} dB` : `${midValDB} dB`;
    }
    if (trebleSlider) {
      const trebleValDB = localStorage.getItem('eqGainTreble') || '0';
      trebleSlider.value = trebleValDB;
      if (trebleVal) trebleVal.textContent = parseFloat(trebleValDB) > 0 ? `+${trebleValDB} dB` : `${trebleValDB} dB`;
    }

    // Sincronizar Inicio Toggles
    const closeFiltersToggle = document.getElementById('close-filters-on-select-toggle');
    if (closeFiltersToggle) {
      closeFiltersToggle.checked = localStorage.getItem('closeFiltersOnSelect') !== 'false';
    }
    const multiMomentToggle = document.getElementById('multi-moment-filter-toggle');
    if (multiMomentToggle) {
      multiMomentToggle.checked = localStorage.getItem('multiMomentFilter') === 'true';
    }
    const combineStageMomentToggle = document.getElementById('combine-stage-moment-filter-toggle');
    if (combineStageMomentToggle) {
      combineStageMomentToggle.checked = localStorage.getItem('combineStageMomentFilter') === 'true';
    }
    const stickySearchToggle = document.getElementById('sticky-search-toggle');
    if (stickySearchToggle) {
      stickySearchToggle.checked = localStorage.getItem('stickySearch') !== 'false';
    }
    const keepStageToggle = document.getElementById('keep-stage-filter-active-toggle');
    if (keepStageToggle) {
      keepStageToggle.checked = localStorage.getItem('keepStageFilterActive') !== 'false';
    }
    const cantoEquipoToggle = document.getElementById('canto-equipo-toggle');
    if (cantoEquipoToggle) {
      cantoEquipoToggle.checked = localStorage.getItem('cantoEquipoOffline') === 'true';
    }
    const zoomFingerToggle = document.getElementById('zoom-finger-toggle');
    if (zoomFingerToggle) {
      zoomFingerToggle.checked = localStorage.getItem('pref-zoom-finger') !== 'false';
    }
    if (typeof updateCantoEquipoBadge === 'function') {
      updateCantoEquipoBadge();
    }
    
    return;
  }
  window.ajustesListenersAttached = true;
  // 1. Inicializar preferencias visuales generales
  const savedTheme = localStorage.getItem('theme') || 'light';
  window.setTheme(savedTheme);
  window.setListStyle(window.songListStyle);
  window.applyStageColors();
  window.applyBookTheme();
  window.applyCatHeaderStyles();
  window.applyPerfilHeaderStyles();

  // Zoom
  const initialZoom = window.getDefaultZoom();
  window.applyZoom(initialZoom);

  // Ancho
  const savedWidth = localStorage.getItem('app-max-width') || '1200';
  document.documentElement.style.setProperty('--app-max-width', savedWidth + 'px');
  const widthSlider = document.getElementById('app-width-slider');
  const widthBadge = document.getElementById('app-width-badge');
  const widthDefaultBtn = document.getElementById('app-width-default-btn');
  if (widthSlider) {
    widthSlider.value = savedWidth;
    widthSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      if (widthBadge) widthBadge.textContent = val + 'px';
      document.documentElement.style.setProperty('--app-max-width', val + 'px');
      localStorage.setItem('app-max-width', val);
    });
  }
  if (widthBadge) widthBadge.textContent = savedWidth + 'px';
  if (widthDefaultBtn) {
    widthDefaultBtn.addEventListener('click', () => {
      if (widthSlider) widthSlider.value = 1200;
      if (widthBadge) widthBadge.textContent = '1200px';
      document.documentElement.style.setProperty('--app-max-width', '1200px');
      localStorage.setItem('app-max-width', '1200');
    });
  }

  // Tipografía
  const savedFont = localStorage.getItem('lyrics-font-family') || 'franklin';
  window.applyFontFamily(savedFont);
  const fontFamilySelect = document.getElementById('font-family-select');
  if (fontFamilySelect) {
    fontFamilySelect.value = savedFont;
    fontFamilySelect.addEventListener('change', () => {
      const key = fontFamilySelect.value;
      window.applyFontFamily(key);
      localStorage.setItem('lyrics-font-family', key);
    });
  }

  window.initWakeLockPreference();
  window.initAutoHideNavPreference();
  window.initZoomFingerPreference();

  // --- SUBMÓDULO INICIO ---
  const closeFiltersToggle = document.getElementById('close-filters-on-select-toggle');
  if (closeFiltersToggle) {
    const isCloseOnSelect = localStorage.getItem('closeFiltersOnSelect') !== 'false';
    closeFiltersToggle.checked = isCloseOnSelect;
    closeFiltersToggle.addEventListener('change', (e) => {
      localStorage.setItem('closeFiltersOnSelect', e.target.checked);
    });
  }

  const multiMomentToggle = document.getElementById('multi-moment-filter-toggle');
  if (multiMomentToggle) {
    const isMultiMoment = localStorage.getItem('multiMomentFilter') === 'true';
    multiMomentToggle.checked = isMultiMoment;
    multiMomentToggle.addEventListener('change', (e) => {
      localStorage.setItem('multiMomentFilter', e.target.checked);
      if (typeof window.limpiarFiltrosIndex === 'function') {
        window.limpiarFiltrosIndex();
      }
    });
  }

  const combineStageMomentToggle = document.getElementById('combine-stage-moment-filter-toggle');
  if (combineStageMomentToggle) {
    const isCombine = localStorage.getItem('combineStageMomentFilter') === 'true';
    combineStageMomentToggle.checked = isCombine;
    combineStageMomentToggle.addEventListener('change', (e) => {
      localStorage.setItem('combineStageMomentFilter', e.target.checked);
      if (typeof window.limpiarFiltrosIndex === 'function') {
        window.limpiarFiltrosIndex();
      }
    });
  }

  const keepStageToggle = document.getElementById('keep-stage-filter-active-toggle');
  if (keepStageToggle) {
    const isKeepActive = localStorage.getItem('keepStageFilterActive') !== 'false';
    keepStageToggle.checked = isKeepActive;
    keepStageToggle.addEventListener('change', (e) => {
      localStorage.setItem('keepStageFilterActive', e.target.checked);
    });
  }

  const stickySearchToggle = document.getElementById('sticky-search-toggle');
  if (stickySearchToggle) {
    const isSticky = localStorage.getItem('stickySearch') !== 'false';
    stickySearchToggle.checked = isSticky;
    if (typeof window.applyStickySearchPreference === 'function') {
      window.applyStickySearchPreference();
    }
    stickySearchToggle.addEventListener('change', (e) => {
      localStorage.setItem('stickySearch', e.target.checked);
      if (typeof window.applyStickySearchPreference === 'function') {
        window.applyStickySearchPreference();
      }
    });
  }

  // Loop de Reproducción
  const loopToggle = document.getElementById('audio-loop-toggle');
  const player = document.getElementById('viewer-audio-player');
  if (loopToggle && player) {
    const loopEnabled = localStorage.getItem('audioLoopEnabled') === 'true';
    loopToggle.checked = loopEnabled;
    player.loop = loopEnabled;
    
    loopToggle.addEventListener('change', (e) => {
      localStorage.setItem('audioLoopEnabled', e.target.checked);
      player.loop = e.target.checked;
    });
  }

  // Ecualizador de Audio (Bucle y Filtros)
  const eqHeader = document.getElementById('eq-accordion-header');
  const eqContainer = document.getElementById('eq-controls-container');
  const eqIcon = document.getElementById('eq-collapse-icon');
  
  if (eqHeader && eqContainer) {
    eqHeader.addEventListener('click', () => {
      const isOpen = eqContainer.style.display !== 'none';
      eqContainer.style.display = isOpen ? 'none' : 'flex';
      if (eqIcon) {
        eqIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  }

  window.initAudioEqualizer = function() {
    if (window.eqCtx) return; // Ya inicializado
    const playerEl = document.getElementById('viewer-audio-player');
    if (!playerEl) return;
    
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      window.eqCtx = new AudioContextClass();
      
      // Crear filtros
      window.eqBassFilter = window.eqCtx.createBiquadFilter();
      window.eqBassFilter.type = 'lowshelf';
      window.eqBassFilter.frequency.value = 200;
      
      window.eqMidFilter = window.eqCtx.createBiquadFilter();
      window.eqMidFilter.type = 'peaking';
      window.eqMidFilter.frequency.value = 1000;
      window.eqMidFilter.Q.value = 1.0;
      
      window.eqTrebleFilter = window.eqCtx.createBiquadFilter();
      window.eqTrebleFilter.type = 'highshelf';
      window.eqTrebleFilter.frequency.value = 4000;
      
      // Permitir CORS dinámicamente
      playerEl.crossOrigin = 'anonymous';
      
      // Crear fuente y conectar
      window.eqSource = window.eqCtx.createMediaElementSource(playerEl);
      window.eqSource.connect(window.eqBassFilter);
      window.eqBassFilter.connect(window.eqMidFilter);
      window.eqMidFilter.connect(window.eqTrebleFilter);
      window.eqTrebleFilter.connect(window.eqCtx.destination);
      
      // Aplicar ganancias iniciales desde localStorage
      const bassG = parseFloat(localStorage.getItem('eqGainBass') || '0');
      const midG = parseFloat(localStorage.getItem('eqGainMid') || '0');
      const trebleG = parseFloat(localStorage.getItem('eqGainTreble') || '0');
      
      window.eqBassFilter.gain.value = bassG;
      window.eqMidFilter.gain.value = midG;
      window.eqTrebleFilter.gain.value = trebleG;
    } catch (err) {
      console.error("Error al inicializar el ecualizador Web Audio:", err);
    }
  };

  // Manejar Sliders del Ecualizador
  const bassSlider = document.getElementById('eq-bass-slider');
  const midSlider = document.getElementById('eq-mid-slider');
  const trebleSlider = document.getElementById('eq-treble-slider');
  
  const bassVal = document.getElementById('eq-bass-val');
  const midVal = document.getElementById('eq-mid-val');
  const trebleVal = document.getElementById('eq-treble-val');
  
  const resetBtn = document.getElementById('eq-reset-btn');
  
  const updateBass = (val) => {
    localStorage.setItem('eqGainBass', val);
    if (bassVal) bassVal.textContent = val > 0 ? `+${val} dB` : `${val} dB`;
    if (window.initAudioEqualizer) window.initAudioEqualizer();
    if (window.eqBassFilter) window.eqBassFilter.gain.value = parseFloat(val);
  };
  
  const updateMid = (val) => {
    localStorage.setItem('eqGainMid', val);
    if (midVal) midVal.textContent = val > 0 ? `+${val} dB` : `${val} dB`;
    if (window.initAudioEqualizer) window.initAudioEqualizer();
    if (window.eqMidFilter) window.eqMidFilter.gain.value = parseFloat(val);
  };
  
  const updateTreble = (val) => {
    localStorage.setItem('eqGainTreble', val);
    if (trebleVal) trebleVal.textContent = val > 0 ? `+${val} dB` : `${val} dB`;
    if (window.initAudioEqualizer) window.initAudioEqualizer();
    if (window.eqTrebleFilter) window.eqTrebleFilter.gain.value = parseFloat(val);
  };
  
  if (bassSlider) {
    bassSlider.value = localStorage.getItem('eqGainBass') || '0';
    updateBass(bassSlider.value);
    bassSlider.addEventListener('input', (e) => {
      if (window.eqCtx && window.eqCtx.state === 'suspended') window.eqCtx.resume();
      updateBass(e.target.value);
    });
  }
  if (midSlider) {
    midSlider.value = localStorage.getItem('eqGainMid') || '0';
    updateMid(midSlider.value);
    midSlider.addEventListener('input', (e) => {
      if (window.eqCtx && window.eqCtx.state === 'suspended') window.eqCtx.resume();
      updateMid(e.target.value);
    });
  }
  if (trebleSlider) {
    trebleSlider.value = localStorage.getItem('eqGainTreble') || '0';
    updateTreble(trebleSlider.value);
    trebleSlider.addEventListener('input', (e) => {
      if (window.eqCtx && window.eqCtx.state === 'suspended') window.eqCtx.resume();
      updateTreble(e.target.value);
    });
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (window.eqCtx && window.eqCtx.state === 'suspended') window.eqCtx.resume();
      if (bassSlider) { bassSlider.value = '0'; updateBass('0'); }
      if (midSlider) { midSlider.value = '0'; updateMid('0'); }
      if (trebleSlider) { trebleSlider.value = '0'; updateTreble('0'); }
    });
  }

  // 2. Adjuntar listeners para controles del modal de Ajustes
  
  // Selección de pestañas
  const settingsTabBtns = document.querySelectorAll('.settings-tab-btn');
  settingsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      window.openSettingsTab(tab);
      if (tab === 'canto' && typeof window.populateBisSongList === 'function') {
        window.populateBisSongList();
      }
    });
  });

  // Botones de tema
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      window.setTheme(theme);
    });
  });

  // Botones de estilo de lista
  document.querySelectorAll('.list-style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const style = btn.dataset.style;
      window.setListStyle(style);
    });
  });

  // Botones de zoom en ajustes
  const settingsZoomOutBtn = document.getElementById('settings-zoom-out-btn');
  const settingsZoomInBtn = document.getElementById('settings-zoom-in-btn');
  const settingsZoomResetBtn = document.getElementById('settings-zoom-reset-btn');
  if (settingsZoomOutBtn) {
    settingsZoomOutBtn.addEventListener('click', () => {
      window.updateZoom(window.zoomFactor - 0.1);
    });
  }
  if (settingsZoomInBtn) {
    settingsZoomInBtn.addEventListener('click', () => {
      window.updateZoom(window.zoomFactor + 0.1);
    });
  }
  if (settingsZoomResetBtn) {
    settingsZoomResetBtn.addEventListener('click', () => {
      window.resetSongZoom();
    });
  }

  // Importar / Exportar Notas
  const exportNotesBtn = document.getElementById('export-notes-btn');
  const importNotesBtn = document.getElementById('import-notes-btn');
  if (exportNotesBtn) exportNotesBtn.addEventListener('click', window.exportNotes);
  if (importNotesBtn) importNotesBtn.addEventListener('click', window.importNotes);

  // Manejo de subpestañas dentro del Módulo General (Gral Común y Cloud)
  window.switchGeneralSubmodule = function(subtab) {
    currentGeneralSubmodule = subtab;
    const btns = document.querySelectorAll('.general-subtab-btn');
    btns.forEach(b => {
      b.classList.toggle('active', b.dataset.subtab === subtab);
      if (b.dataset.subtab === subtab) {
        b.style.borderBottom = '2.5px solid var(--accent-color)';
        b.style.color = 'var(--accent-color)';
        b.style.fontWeight = '700';
      } else {
        b.style.borderBottom = 'none';
        b.style.color = 'var(--text-muted)';
        b.style.fontWeight = '600';
      }
    });

    const panels = {
      'comun': document.getElementById('general-submodule-comun-content'),
      'cloud': document.getElementById('general-submodule-cloud-content')
    };

    for (const [key, el] of Object.entries(panels)) {
      if (el) {
        el.style.display = key === subtab ? 'block' : 'none';
      }
    }
  };

  const generalSubtabBtns = document.querySelectorAll('.general-subtab-btn');
  generalSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.switchGeneralSubmodule(btn.dataset.subtab);
    });
  });

  // Manejo de subpestañas dentro del Módulo LOG (LOG, Estado Resucitó y Manejo)
  window.switchLogSubmodule = function(subtab) {
    const btns = document.querySelectorAll('.log-subtab-btn');
    btns.forEach(b => {
      b.classList.toggle('active', b.dataset.subtab === subtab);
      if (b.dataset.subtab === subtab) {
        b.style.borderBottom = '2.5px solid var(--accent-color)';
        b.style.color = 'var(--accent-color)';
        b.style.fontWeight = '700';
      } else {
        b.style.borderBottom = 'none';
        b.style.color = 'var(--text-muted)';
        b.style.fontWeight = '600';
      }
    });

    const panels = {
      'console': document.getElementById('log-submodule-console-content'),
      'status': document.getElementById('log-submodule-status-content'),
      'manejo': document.getElementById('log-submodule-manejo-content')
    };

    for (const [key, el] of Object.entries(panels)) {
      if (el) {
        el.style.display = key === subtab ? 'block' : 'none';
      }
    }

    if (subtab === 'status') {
      window.recalcularEstadoRecursos();
    } else if (subtab === 'manejo') {
      if (typeof window.initManejoInspeccionSettings === 'function') {
        window.initManejoInspeccionSettings();
      }
    }
  };

  const logSubtabBtns = document.querySelectorAll('.log-subtab-btn');
  logSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.switchLogSubmodule(btn.dataset.subtab);
    });
  });

  // --- Lógica del Módulo Manejo (Bloqueo de Inspección de Página / DevTools) ---
  let devToolsProtectionInterval = null;

  function mostrarAvisoInspeccionBloqueada() {
    let toast = document.getElementById('toast-inspeccion-bloqueada');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-inspeccion-bloqueada';
      toast.style.cssText = `
        position: fixed;
        top: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: #dc2626;
        color: #ffffff;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.95rem;
        box-shadow: 0 8px 24px rgba(0,0,0,0.35);
        z-index: 9999999;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        font-family: sans-serif;
      `;
      toast.innerHTML = `
        <span class="material-symbols-outlined" style="font-size: 1.3rem;">shield_lock</span>
        <span>¡La inspección de la página está bloqueada!</span>
      `;
      document.body.appendChild(toast);
    }
    
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    clearTimeout(toast.__timer);
    toast.__timer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-20px)';
    }, 2800);
  }

  function aplicarBloqueoInspeccion(bloquear) {
    if (bloquear) {
      if (!window.__resucitoPreventInspectHandler) {
        window.__resucitoPreventInspectHandler = function(e) {
          // Bloquear F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S
          if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I / J / C
            (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) // Ctrl+U / Ctrl+S
          ) {
            e.preventDefault();
            e.stopPropagation();
            mostrarAvisoInspeccionBloqueada();
            return false;
          }
        };
      }
      if (!window.__resucitoPreventContextMenuHandler) {
        window.__resucitoPreventContextMenuHandler = function(e) {
          // Permitir clic derecho si es en campos de texto editables
          if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
            return true;
          }
          e.preventDefault();
          mostrarAvisoInspeccionBloqueada();
          return false;
        };
      }
      window.addEventListener('keydown', window.__resucitoPreventInspectHandler, true);
      window.addEventListener('contextmenu', window.__resucitoPreventContextMenuHandler, true);

      // Trampa activa anti-DevTools con mensaje explícito
      if (!devToolsProtectionInterval) {
        const debuggerCode = 
          '/* ========================================================= */\n' +
          '/* ⚠️ ¡LA INSPECCIÓN DE LA PÁGINA ESTÁ BLOQUEADA!           */\n' +
          '/* ========================================================= */\n' +
          'debugger;\n' +
          'return "¡La inspección de la página está bloqueada!";';

        const triggerDebuggerTrap = () => {
          try {
            const start = performance.now();
            const fn = new Function(debuggerCode);
            fn();
            const end = performance.now();
            if (end - start > 100) {
              try {
                console.clear();
                console.warn('%c⚠️ ¡La inspección de la página está bloqueada!', 'color: #fff; background: #dc2626; font-size: 16px; font-weight: bold; padding: 10px 16px; border-radius: 8px;');
              } catch (err) {}
            }
          } catch (err) {}
        };
        triggerDebuggerTrap();
        devToolsProtectionInterval = setInterval(triggerDebuggerTrap, 300);
      }

      console.log('🔒 Protección de inspección de página activada (Anti-DevTools & Debugger Trap activo).');
    } else {
      if (window.__resucitoPreventInspectHandler) {
        window.removeEventListener('keydown', window.__resucitoPreventInspectHandler, true);
        window.__resucitoPreventInspectHandler = null;
      }
      if (window.__resucitoPreventContextMenuHandler) {
        window.removeEventListener('contextmenu', window.__resucitoPreventContextMenuHandler, true);
        window.__resucitoPreventContextMenuHandler = null;
      }
      if (devToolsProtectionInterval) {
        clearInterval(devToolsProtectionInterval);
        devToolsProtectionInterval = null;
      }
      console.log('🔓 Protección de inspección de página desactivada (Inspección permitida).');
    }
  }
  window.aplicarBloqueoInspeccion = aplicarBloqueoInspeccion;

  // Inicializar estado guardado
  const initialBloqueo = localStorage.getItem('resucito_bloquear_inspeccion') === 'true';
  aplicarBloqueoInspeccion(initialBloqueo);

  window.initBitacoraSettings = function() {
    const switchEl = document.getElementById('switch-bitacora-delete');
    const labelEl = document.getElementById('label-estado-bitacora-delete');

    if (switchEl) {
      const isEnabled = localStorage.getItem('resucito_bitacora_show_delete') === 'true';
      switchEl.checked = isEnabled;
      if (labelEl) {
        labelEl.textContent = isEnabled ? 'Habilitado (Visible)' : 'Deshabilitado (Oculto)';
        labelEl.style.color = isEnabled ? 'var(--accent-color, #dc2626)' : 'var(--text-muted)';
      }

      switchEl.onchange = () => {
        const checked = switchEl.checked;
        localStorage.setItem('resucito_bitacora_show_delete', checked ? 'true' : 'false');
        if (labelEl) {
          labelEl.textContent = checked ? 'Habilitado (Visible)' : 'Deshabilitado (Oculto)';
          labelEl.style.color = checked ? 'var(--accent-color, #dc2626)' : 'var(--text-muted)';
        }
      };
    }
  };

  window.initManejoInspeccionSettings = function() {
    const switchEl = document.getElementById('switch-bloqueo-inspeccion');
    const labelEl = document.getElementById('label-estado-bloqueo-inspeccion');

    if (switchEl) {
      const isBlocked = localStorage.getItem('resucito_bloquear_inspeccion') === 'true';
      switchEl.checked = isBlocked;
      if (labelEl) {
        labelEl.textContent = isBlocked ? 'Habilitado (Bloqueado)' : 'Deshabilitado (Permitido)';
        labelEl.style.color = isBlocked ? 'var(--accent-color, #d54d5e)' : 'var(--text-muted)';
      }

      switchEl.onchange = () => {
        const checked = switchEl.checked;
        localStorage.setItem('resucito_bloquear_inspeccion', checked ? 'true' : 'false');
        if (labelEl) {
          labelEl.textContent = checked ? 'Habilitado (Bloqueado)' : 'Deshabilitado (Permitido)';
          labelEl.style.color = checked ? 'var(--accent-color, #d54d5e)' : 'var(--text-muted)';
        }
        aplicarBloqueoInspeccion(checked);
      };
    }
  };

  // --- MÓDULO CONTROL DE ACCESO Y VISIBILIDAD DE AJUSTES ---
  function updateAccessControlVisibilityInternal() {
    const user = getCurrentUser() || auth.currentUser;
    const isAdmin = isCurrentUserAdmin();

    const canViewMembers = isAdmin || hasPermission('view_access_miembros');
    const canViewGroups = isAdmin || hasPermission('view_access_grupos');
    const canViewInternalMembers = isAdmin || hasPermission('view_access_miembros_internos');
    const canViewPermissions = isAdmin || hasPermission('view_access_permisos');
    const canViewInspector = isAdmin || hasPermission('view_access_inspector');
    const canViewSongStages = isAdmin || hasPermission('edit_song_stages');
    const canViewAccessSection = isAdmin || hasPermission('manage_access') || canViewMembers || canViewGroups || canViewInternalMembers || canViewPermissions || canViewInspector || canViewSongStages;

    const canViewGeneralComun = isAdmin || hasPermission('view_general_comun');
    const canViewGeneralCloud = isAdmin || hasPermission('view_general_cloud');
    const canViewThemeVisual = isAdmin || hasPermission('view_theme_visual');
    const canViewThemeInicio = isAdmin || hasPermission('view_theme_inicio');
    const canViewThemePreparacion = isAdmin || hasPermission('view_theme_preparacion');
    const canViewThemePerfil = isAdmin || hasPermission('view_theme_perfil');
    const canViewUserCuenta = isAdmin || hasPermission('view_user_cuenta');
    const canViewUsage = isAdmin || hasPermission('view_usage');
    const canViewLogs = isAdmin || hasPermission('view_logs');
    const canViewStatus = isAdmin || hasPermission('view_status');
    const canManageInspection = isAdmin || hasPermission('manage_page_inspection');
    const canViewSongCanto = isAdmin || hasPermission('view_song_canto');
    const canViewSongLiturgia = isAdmin || hasPermission('view_song_liturgia');
    // Si el usuario no tiene permiso para ver Libro Catequesis, tampoco debe ver Ajustes > Canto > Catequesis
    const hasBookCatequesis = isAdmin || hasPermission('book_catequesis');
    const canViewSongCatequesis = hasBookCatequesis && (isAdmin || hasPermission('view_song_catequesis'));

    // Visibilidad de subpestañas dentro de Canto
    const cantoSubtabCantoBtn = document.getElementById('canto-subtab-canto-btn');
    const cantoSubtabLiturgiaBtn = document.getElementById('canto-subtab-liturgia-btn');
    const cantoSubtabCatequesisBtn = document.getElementById('canto-subtab-catequesis-btn');

    if (cantoSubtabCantoBtn) cantoSubtabCantoBtn.style.display = canViewSongCanto ? 'inline-flex' : 'none';
    if (cantoSubtabLiturgiaBtn) cantoSubtabLiturgiaBtn.style.display = canViewSongLiturgia ? 'inline-flex' : 'none';
    if (cantoSubtabCatequesisBtn) cantoSubtabCatequesisBtn.style.display = canViewSongCatequesis ? 'inline-flex' : 'none';

    // Si el submódulo activo de Canto ya no está disponible, seleccionar el primero disponible
    const activeCantoSubtab = document.querySelector('.canto-subtab-btn.active');
    if (activeCantoSubtab && activeCantoSubtab.style.display === 'none') {
      const firstAvailableCantoBtn = [cantoSubtabCantoBtn, cantoSubtabLiturgiaBtn, cantoSubtabCatequesisBtn].find(b => b && b.style.display !== 'none');
      if (firstAvailableCantoBtn) {
        firstAvailableCantoBtn.click();
      }
    }

    // Visibilidad de subpestaña Cuenta en Usuario
    const userSubtabAccountBtn = document.getElementById('user-subtab-account-btn');
    if (userSubtabAccountBtn) {
      userSubtabAccountBtn.style.display = canViewUserCuenta ? 'inline-flex' : 'none';
    }

    // Visibilidad de subpestaña Uso App en Usuario
    const userSubtabUsageBtn = document.getElementById('user-subtab-usage-btn');
    if (userSubtabUsageBtn) {
      userSubtabUsageBtn.style.display = canViewUsage ? 'inline-flex' : 'none';
    }

    // Visibilidad de subpestaña Acceso en Usuario
    const userSubtabAccessBtn = document.getElementById('user-subtab-access-btn');
    if (userSubtabAccessBtn) {
      userSubtabAccessBtn.style.display = canViewAccessSection ? 'inline-flex' : 'none';
    }

    // Si el submódulo activo de Usuario ya no está disponible, seleccionar el primero disponible
    const activeUserSubtab = document.querySelector('.user-subtab-btn.active');
    if (activeUserSubtab && activeUserSubtab.style.display === 'none') {
      const firstAvailableUserBtn = [userSubtabAccountBtn, userSubtabAccessBtn, userSubtabUsageBtn].find(b => b && b.style.display !== 'none');
      if (firstAvailableUserBtn) {
        firstAvailableUserBtn.click();
      }
    }

    // Subpestañas internas dentro de Acceso
    const accessSubtabMembers = document.querySelector('.access-subtab-btn[data-subtab="members"]');
    const accessSubtabGroups = document.querySelector('.access-subtab-btn[data-subtab="groups"]');
    const accessSubtabInternalMembers = document.querySelector('.access-subtab-btn[data-subtab="internal-members"]');
    const accessSubtabPermissions = document.querySelector('.access-subtab-btn[data-subtab="permissions"]');
    const accessSubtabInspector = document.querySelector('.access-subtab-btn[data-subtab="inspector"]');
    const accessSubtabSongStages = document.querySelector('.access-subtab-btn[data-subtab="song-stages"]');

    if (accessSubtabMembers) accessSubtabMembers.style.display = (isAdmin || canViewMembers) ? 'inline-block' : 'none';
    if (accessSubtabGroups) accessSubtabGroups.style.display = (isAdmin || canViewGroups) ? 'inline-block' : 'none';
    if (accessSubtabInternalMembers) accessSubtabInternalMembers.style.display = (isAdmin || canViewInternalMembers) ? 'inline-block' : 'none';
    if (accessSubtabPermissions) accessSubtabPermissions.style.display = (isAdmin || canViewPermissions) ? 'inline-block' : 'none';
    if (accessSubtabInspector) accessSubtabInspector.style.display = (isAdmin || canViewInspector) ? 'inline-block' : 'none';
    if (accessSubtabSongStages) accessSubtabSongStages.style.display = (isAdmin || canViewSongStages) ? 'inline-block' : 'none';

    // Subpestañas de LOG (Console, Status y Manejo)
    const logSubtabConsoleBtn = document.getElementById('log-subtab-console-btn');
    const logSubtabStatusBtn = document.getElementById('log-subtab-status-btn');
    const logSubtabManejoBtn = document.getElementById('log-subtab-manejo-btn');

    if (logSubtabConsoleBtn) logSubtabConsoleBtn.style.display = (isAdmin || canViewLogs) ? 'flex' : 'none';
    if (logSubtabStatusBtn) logSubtabStatusBtn.style.display = (isAdmin || canViewStatus) ? 'flex' : 'none';
    if (logSubtabManejoBtn) logSubtabManejoBtn.style.display = (isAdmin || canManageInspection) ? 'flex' : 'none';

    // Pestañas principales
    const settingsTabGeneral = document.querySelector('.settings-tab-btn[data-tab="general"]');
    const settingsTabTheme = document.querySelector('.settings-tab-btn[data-tab="theme"]');
    const settingsTabSong = document.querySelector('.settings-tab-btn[data-tab="canto"]');
    const settingsTabUser = document.querySelector('.settings-tab-btn[data-tab="user"]');
    const settingsTabData = document.querySelector('.settings-tab-btn[data-tab="datos"]');
    const settingsTabPaginas = document.querySelector('.settings-tab-btn[data-tab="paginas"]');
    const settingsTabLog = document.querySelector('.settings-tab-btn[data-tab="log"]');

    const canViewGeneral = isAdmin || hasPermission('view_settings_general') || canViewGeneralComun || canViewGeneralCloud;
    const canViewTheme = isAdmin || hasPermission('view_settings_theme') || canViewThemeVisual || canViewThemeInicio || canViewThemePreparacion || canViewThemePerfil;
    const canViewSong = isAdmin || hasPermission('view_settings_song') || canViewSongCanto || canViewSongLiturgia || canViewSongCatequesis;
    const canViewUser = isAdmin || hasPermission('view_settings_user') || canViewUserCuenta || canViewAccessSection || canViewUsage;
    const canViewData = isAdmin || hasPermission('view_settings_data');
    const canViewPaginas = isAdmin || hasPermission('page_opciones_paginas');
    const canViewLogSection = isAdmin || hasPermission('view_settings_log') || canViewLogs || canViewStatus || canManageInspection;

    if (settingsTabGeneral) settingsTabGeneral.style.display = canViewGeneral ? 'flex' : 'none';
    if (settingsTabTheme) settingsTabTheme.style.display = canViewTheme ? 'flex' : 'none';
    if (settingsTabSong) settingsTabSong.style.display = canViewSong ? 'flex' : 'none';
    if (settingsTabUser) settingsTabUser.style.display = canViewUser ? 'flex' : 'none';
    if (settingsTabData) settingsTabData.style.display = canViewData ? 'flex' : 'none';
    if (settingsTabPaginas) settingsTabPaginas.style.display = canViewPaginas ? 'flex' : 'none';
    if (settingsTabLog) settingsTabLog.style.display = canViewLogSection ? 'flex' : 'none';

    // Actualizar sección de cuenta en Modal
    const authUnauthenticated = document.getElementById('auth-unauthenticated');
    const authAuthenticated = document.getElementById('auth-authenticated');
    const authUserEmail = document.getElementById('auth-user-email');
    const authAdminBadge = document.getElementById('auth-admin-badge');
    const authRegularBadge = document.getElementById('auth-regular-badge');
    const authAdminActions = document.getElementById('auth-admin-actions');
    const authUserPhoto = document.getElementById('auth-user-photo');
    const authUserIcon = document.getElementById('auth-user-icon');
    const authUserWelcome = document.getElementById('auth-user-welcome');

    if (user) {
      if (authUnauthenticated) authUnauthenticated.style.display = 'none';
      if (authAuthenticated) authAuthenticated.style.display = 'block';

      if (user.photoURL && authUserPhoto) {
        authUserPhoto.src = user.photoURL;
        authUserPhoto.style.display = 'block';
        if (authUserIcon) authUserIcon.style.display = 'none';
      } else {
        if (authUserPhoto) authUserPhoto.style.display = 'none';
        if (authUserIcon) authUserIcon.style.display = 'block';
      }

      if (authUserWelcome) {
        const displayName = user.displayName || (user.email ? user.email.split('@')[0] : 'Hermano');
        authUserWelcome.textContent = `Bienvenido: ${displayName}`;
      }

      if (authUserEmail) authUserEmail.textContent = user.email;
      if (authAdminBadge) authAdminBadge.style.display = isAdmin ? 'inline-flex' : 'none';
      if (authRegularBadge) {
        authRegularBadge.style.display = isAdmin ? 'none' : 'inline-flex';
        try {
          const state = getAccessControlState();
          const emailKey = user.email ? user.email.toLowerCase().trim() : '';
          const userGroups = state ? state.userDirectGroups[emailKey] : null;
          if (userGroups && userGroups.size > 0) {
            const gid = Array.from(userGroups)[0];
            const groupObj = state.groups[gid];
            const groupName = groupObj ? groupObj.name : 'Cantor';
            authRegularBadge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 1rem;">person</span> Hermano (${groupName})`;
          } else {
            authRegularBadge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 1rem;">person</span> Hermano Cantor`;
          }
        } catch (e) {
          authRegularBadge.innerHTML = `<span class="material-symbols-outlined" style="font-size: 1rem;">person</span> Hermano Cantor`;
        }
      }
      if (authAdminActions) authAdminActions.style.display = isAdmin ? 'block' : 'none';
    } else {
      if (authUnauthenticated) authUnauthenticated.style.display = 'block';
      if (authAuthenticated) authAuthenticated.style.display = 'none';
      if (authAdminActions) authAdminActions.style.display = 'none';
    }

    if (typeof window.updateNavPagesVisibility === 'function') {
      window.updateNavPagesVisibility();
    }
  }
  window.updateAccessControlVisibility = updateAccessControlVisibilityInternal;

  // Vincular eventos de Cuenta e inicio/cierre de sesión
  function bindUserAccountEvents() {
    const authLoginBtn = document.getElementById('auth-login-btn');
    const authLogoutBtn = document.getElementById('auth-logout-btn');
    const authUpdateBtn = document.getElementById('auth-update-btn');

    if (authLoginBtn && !authLoginBtn.__resucitoBound) {
      authLoginBtn.__resucitoBound = true;
      authLoginBtn.addEventListener('click', async () => {
        try {
          authLoginBtn.disabled = true;
          authLoginBtn.textContent = 'Conectando...';
          await loginMock();
        } catch (err) {
          console.error('Error al iniciar sesión:', err);
          const ignoredCodes = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request'];
          if (err && !ignoredCodes.includes(err.code)) {
            alert('Error al iniciar sesión: ' + (err.message || err));
          }
        } finally {
          authLoginBtn.disabled = false;
          const unauthEl = document.getElementById('auth-unauthenticated');
          if (unauthEl && unauthEl.style.display !== 'none') {
            authLoginBtn.innerHTML = `
              <svg viewBox="0 0 24 24" width="18" height="18" style="background: white; border-radius: 50%; padding: 2px;">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Iniciar Sesión con Google
            `;
          }
        }
      });
    }

    if (authLogoutBtn && !authLogoutBtn.__resucitoBound) {
      authLogoutBtn.__resucitoBound = true;
      authLogoutBtn.addEventListener('click', () => {
        logoutMock();
      });
    }

    if (authUpdateBtn && !authUpdateBtn.__resucitoBound) {
      authUpdateBtn.__resucitoBound = true;
      authUpdateBtn.addEventListener('click', async () => {
        if (!navigator.onLine) {
          if (window.mostrarAlerta) {
            window.mostrarAlerta({
              titulo: 'Sin Conexión',
              mensaje: 'No puede Actualizar sin internet',
              icono: 'wifi_off'
            });
          } else {
            alert("⚠️ No puede Actualizar sin internet");
          }
          return;
        }
        try {
          if (window.mostrarProgreso) {
            window.mostrarProgreso({
              titulo: 'Actualizando App',
              mensaje: 'Limpiando caché completa y forzando recarga...',
              icono: 'system_update'
            });
          }

          authUpdateBtn.disabled = true;
          authUpdateBtn.textContent = 'Actualizando...';
          
          if ('caches' in window) {
            const cacheKeys = await caches.keys();
            await Promise.all(cacheKeys.map(key => caches.delete(key)));
          }
          
          if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (let reg of registrations) {
              await reg.unregister();
            }
          }

          localStorage.removeItem('resucito_update_available');
          setTimeout(() => {
            window.location.reload(true);
          }, 600);
        } catch(e) {
          console.error("Error al actualizar la app:", e);
          window.location.reload(true);
        }
      });
    }
  }

  // Configurar interfaz de Control de Acceso y autenticación
  setupAccessControlUI();
  bindUserAccountEvents();
  updateAccessControlVisibilityInternal();
  onAuthStateChanged(() => {
    updateAccessControlVisibilityInternal();
  });

  // --- MÓDULO ESTADO RESUCITÓ ---
  async function loadResourceIntoCache(url) {
    try {
      const keys = await caches.keys();
      const cacheName = keys.find(k => k.startsWith('resucito-cache-')) || 'resucito-cache-v304';
      const cache = await caches.open(cacheName);
      
      const res = await fetch(url);
      if (res.ok) {
        await cache.put(url, res.clone());
        return true;
      }
    } catch (e) {
      console.error('Error cargando recurso a caché:', url, e);
    }
    return false;
  }

  function bindStatusButtons() {
    // Botones individuales "Cargar recurso"
    document.querySelectorAll('.btn-status-load-single').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = btn.dataset.url;
        btn.disabled = true;
        btn.textContent = 'Cargando...';
        const success = await loadResourceIntoCache(url);
        if (success) {
          window.recalcularEstadoRecursos();
        } else {
          btn.disabled = false;
          btn.textContent = 'Reintentar';
          if (window.mostrarAlerta) {
            window.mostrarAlerta({
              titulo: 'Error de carga',
              mensaje: `No se pudo descargar el recurso: ${url}. Verifique su conexión a Internet.`,
              icono: 'error'
            });
          } else {
            alert(`No se pudo descargar el recurso: ${url}`);
          }
        }
      });
    });

    // Botones de grupo "Cargar faltantes"
    document.querySelectorAll('.btn-status-load-group').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const urls = JSON.parse(btn.dataset.urls);
        btn.disabled = true;
        btn.textContent = 'Cargando...';
        
        let loaded = 0;
        for (const url of urls) {
          const success = await loadResourceIntoCache(url);
          if (success) loaded++;
        }
        
        window.recalcularEstadoRecursos();
      });
    });
  }

  // Vincular botón "Cargar todos los faltantes" (general) una sola vez al cargar el DOM o usar delegación
  document.addEventListener('click', async (e) => {
    if (e.target && e.target.id === 'btn-status-load-all') {
      e.preventDefault();
      e.stopPropagation();
      const btn = e.target;
      const urls = JSON.parse(btn.dataset.urls || '[]');
      const total = urls.length;
      if (total === 0) return;
      
      btn.disabled = true;
      btn.textContent = 'Cargando...';
      
      const progressContainer = document.getElementById('status-progress-container');
      const progressText = document.getElementById('status-progress-text');
      const progressPercent = document.getElementById('status-progress-percent');
      const progressBar = document.getElementById('status-progress-bar');
      
      if (progressContainer) {
        progressContainer.style.display = 'block';
      }
      if (progressBar) progressBar.style.width = '0%';
      if (progressPercent) progressPercent.textContent = '0%';
      if (progressText) progressText.textContent = `Descargando: 0 de ${total} recursos...`;
      
      let count = 0;
      for (const url of urls) {
        await loadResourceIntoCache(url);
        count++;
        const percent = Math.round((count / total) * 100);
        
        if (progressBar) progressBar.style.width = `${percent}%`;
        if (progressPercent) progressPercent.textContent = `${percent}%`;
        if (progressText) progressText.textContent = `Descargando: ${count} de ${total} recursos...`;
      }
      
      if (progressText) progressText.textContent = '¡Descarga completada!';
      
      setTimeout(() => {
        if (progressContainer) progressContainer.style.display = 'none';
        if (progressBar) progressBar.style.width = '0%';
        if (progressPercent) progressPercent.textContent = '0%';
        btn.disabled = false;
        btn.textContent = 'Cargar todos los faltantes';
        window.recalcularEstadoRecursos();
      }, 1800);
    }
    
    if (e.target && e.target.id === 'btn-status-refresh') {
      e.preventDefault();
      e.stopPropagation();
      window.recalcularEstadoRecursos();
    }
  });

  // Helper para garantizar que window.allSongs esté disponible para offline y estado
  async function getOrFetchAllSongs() {
    if (window.allSongs && Array.isArray(window.allSongs) && window.allSongs.length > 0) {
      return window.allSongs;
    }
    try {
      const res = await fetch('data/songs-index.json');
      if (res.ok) {
        const data = await res.json();
        window.allSongs = data;
        return data;
      }
    } catch (e) {
      console.warn("Error cargando songs-index.json:", e);
    }
    return [];
  }

  // Helper para recopilar todos los recursos de la aplicación (HTMLs, JS, CSS, JSONs, Cantos y Assets)
  async function getAllAppResources() {
    const htmlResources = [
      { label: 'Inicio o Index.html', url: 'index.html' },
      { label: 'Perfil Cuenta (HTML)', url: 'perfil.html' },
      { label: 'Preparar Cantos (HTML)', url: 'preparar.html' },
      { label: 'Bitácora de Uso (HTML)', url: 'bitacora.html' },
      { label: 'Expansión de Libros (HTML)', url: 'expancion.html' },
      { label: 'Ciclo Litúrgico (HTML)', url: 'cliturgico.html' },
      { label: 'Ajustes de la App (HTML)', url: 'data/ajustes_modal.html' }
    ];

    const jsonResources = [
      { label: 'Índice de Búsqueda (JSON)', url: 'data/songs-index.json' },
      { label: 'Posiciones de Acordes (JSON)', url: 'data/chord_positions.json' },
      { label: 'Catequesis (JSON)', url: 'data/catequesis.json' },
      { label: 'Paises y Diócesis (JSON)', url: 'data/paises.json' }
    ];

    const htmlsToParse = ['index.html', 'perfil.html', 'preparar.html', 'bitacora.html', 'expancion.html', 'cliturgico.html'];
    const jsSet = new Set();
    const cssSet = new Set();
    const assetSet = new Set();

    jsSet.add('sw.js');
    assetSet.add('manifest.json');

    for (const htmlPath of htmlsToParse) {
      try {
        const res = await fetch(htmlPath);
        if (res.ok) {
          const text = await res.text();
          const jsMatches = text.matchAll(/src="([^"]+\.js)"/g);
          for (const m of jsMatches) jsSet.add(m[1].replace(/^\.\//, ''));
          const cssMatches = text.matchAll(/href="([^"]+\.css)"/g);
          for (const m of cssMatches) cssSet.add(m[1].replace(/^\.\//, ''));
          const imgMatches = text.matchAll(/src="([^"]+\.(png|jpg|jpeg|gif|ico|svg))"/g);
          for (const m of imgMatches) assetSet.add(m[1].replace(/^\.\//, ''));
          const preloadMatches = text.matchAll(/href="([^"]+\.(js|css))"/g);
          for (const m of preloadMatches) {
            if (m[2] === 'js') jsSet.add(m[1].replace(/^\.\//, ''));
            else if (m[2] === 'css') cssSet.add(m[1].replace(/^\.\//, ''));
          }
        }
      } catch (e) {
        console.warn('Error escaneando HTML:', htmlPath, e);
      }
    }

    const jsResources = Array.from(jsSet).map(url => ({ url }));
    const cssResources = Array.from(cssSet).map(url => ({ url }));
    const assetResources = Array.from(assetSet).map(url => ({ url }));

    const songs = await getOrFetchAllSongs();
    const songResources = songs.map(s => {
      const id = s.id;
      const folder = (id && id.startsWith('aet')) ? 'data/songs-ae' : 'data/songs';
      return { url: `${folder}/${id}.json?offline=true` };
    });

    return {
      htmlResources,
      jsonResources,
      jsResources,
      cssResources,
      assetResources,
      songResources,
      songs
    };
  }

  window.recalcularEstadoRecursos = async function() {
    const listEl = document.getElementById('status-resources-list');
    const totalRatioEl = document.getElementById('status-total-ratio');
    const loadAllBtn = document.getElementById('btn-status-load-all');
    const missingCountEl = document.getElementById('status-missing-count');
    const missingListEl = document.getElementById('status-missing-list');

    if (!listEl) return;

    listEl.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 20px 0;">Escaneando recursos en la caché local...</div>';

    try {
      const {
        htmlResources,
        jsonResources,
        jsResources,
        cssResources,
        assetResources,
        songResources
      } = await getAllAppResources();

      // 2. Conectar a la caché
      const keys = await caches.keys();
      const cacheName = keys.find(k => k.startsWith('resucito-cache-')) || 'resucito-cache-v304';
      const cache = await caches.open(cacheName);
      
      // Obtener todas las claves cacheadas para búsqueda rápida
      const cachedRequests = await cache.keys();
      const cachedUrls = new Set();
      cachedRequests.forEach(r => {
        const urlObj = new URL(r.url, window.location.href);
        let path = urlObj.pathname;
        if (path.startsWith('/')) {
          path = path.substring(1);
        }
        cachedUrls.add(path + urlObj.search);
        cachedUrls.add(path); // También registrar sin query string
      });

      // Helper para comprobar existencia en caché (tolerante a ?offline=true y ?v=...)
      const checkCached = (relUrl) => {
        let cleanRel = relUrl.replace(/^\.\//, '');
        if (cleanRel.startsWith('/')) {
          cleanRel = cleanRel.substring(1);
        }
        if (cachedUrls.has(cleanRel)) return true;
        
        // Probar sin query string
        const baseRel = cleanRel.split('?')[0];
        if (cachedUrls.has(baseRel)) return true;

        // Probar con ?offline=true
        if (cachedUrls.has(`${baseRel}?offline=true`)) return true;

        return false;
      };

      // 3. Evaluar el estado de cada categoría
      let totalCount = 0;
      let cachedCount = 0;
      const missingFiles = [];

      const evaluateGroup = (resourcesList) => {
        let groupTotal = resourcesList.length;
        let groupCached = 0;
        const missingGroup = [];
        
        resourcesList.forEach(r => {
          const isCached = checkCached(r.url);
          if (isCached) {
            groupCached++;
          } else {
            missingGroup.push(r.url);
            missingFiles.push(r.url);
          }
        });
        
        totalCount += groupTotal;
        cachedCount += groupCached;
        
        return { total: groupTotal, cached: groupCached, missing: missingGroup };
      };

      // Evaluar archivos HTML individuales
      const htmlResults = htmlResources.map(r => {
        const isCached = checkCached(r.url);
        totalCount++;
        if (isCached) cachedCount++;
        else missingFiles.push(r.url);
        return { ...r, isCached };
      });

      // Evaluar grupos
      const jsResults = evaluateGroup(jsResources);
      const cssResults = evaluateGroup(cssResources);
      const jsonResults = evaluateGroup(jsonResources);
      const songResults = evaluateGroup(songResources);
      const assetResults = evaluateGroup(assetResources);

      // 4. Renderizar UI
      let html = '';

      // Renderizar HTMLs individuales
      htmlResults.forEach(r => {
        const dotColor = r.isCached ? '#28a745' : '#dc3545';
        const dotSize = '1.8rem';
        const buttonHtml = r.isCached ? '' : `
          <button class="btn theme-btn btn-status-load-single" data-url="${r.url}" style="font-size: 0.75rem; padding: 4px 10px;">Cargar recurso</button>
        `;
        html += `
          <div class="status-item" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; border: 1.5px solid var(--panel-border); border-radius: 12px; background: var(--input-bg);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: ${dotSize}; line-height: 1; color: ${dotColor}; user-select: none; margin-top: -4px;">•</span>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-color);">${r.label}</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${r.url}</span>
              </div>
            </div>
            ${buttonHtml}
          </div>
        `;
      });

      // Renderizar filas de grupos
      const renderGroupRow = (title, detailsText, results) => {
        const isComplete = results.cached === results.total;
        const dotColor = isComplete ? '#28a745' : '#dc3545';
        const dotSize = '1.8rem';
        const buttonHtml = isComplete ? '' : `
          <button class="btn theme-btn btn-status-load-group" data-urls='${JSON.stringify(results.missing)}' style="font-size: 0.75rem; padding: 4px 10px;">Cargar faltantes</button>
        `;
        html += `
          <div class="status-item" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; border: 1.5px solid var(--panel-border); border-radius: 12px; background: var(--input-bg);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: ${dotSize}; line-height: 1; color: ${dotColor}; user-select: none; margin-top: -4px;">•</span>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-color);">${title}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted);">${results.cached}/${results.total} archivos (${detailsText})</span>
              </div>
            </div>
            ${buttonHtml}
          </div>
        `;
      };

      renderGroupRow('Archivos JavaScript (.js)', 'Scripts de la aplicación', jsResults);
      renderGroupRow('Archivos CSS (.css)', 'Estilos visuales', cssResults);
      renderGroupRow('Archivos JSON de Datos', 'Diócesis, catequesis, acordes', jsonResults);
      renderGroupRow('Archivos JSON de Cantos', 'Acordes, letras y cejillas', songResults);
      renderGroupRow('Otros Recursos', 'Imágenes, fuentes y PWA Manifest', assetResults);

      listEl.innerHTML = html;

      // Actualizar Totales
      totalRatioEl.textContent = `${cachedCount}/${totalCount}`;
      if (missingFiles.length === 0) {
        totalRatioEl.style.color = '#28a745';
      } else {
        totalRatioEl.style.color = '#dc3545';
      }
      missingCountEl.textContent = missingFiles.length;

      // Actualizar color de la nube (verde si está completo, rojo si falta algo)
      const cloudIconEl = document.getElementById('status-cloud-icon');
      if (cloudIconEl) {
        if (missingFiles.length === 0) {
          cloudIconEl.style.color = '#28a745';
        } else {
          cloudIconEl.style.color = '#dc3545';
        }
      }

      if (missingFiles.length > 0) {
        loadAllBtn.style.display = 'block';
        loadAllBtn.dataset.urls = JSON.stringify(missingFiles);
        missingListEl.innerHTML = missingFiles.map(f => `<div style="word-break: break-all; color: #dc3545; padding: 2px 0;">• ${f}</div>`).join('');
      } else {
        loadAllBtn.style.display = 'none';
        missingListEl.innerHTML = '<div style="color: #28a745; font-weight: 600;">¡Todos los recursos están cargados correctamente!</div>';
      }

      bindStatusButtons();

    } catch (err) {
      console.error(err);
      listEl.innerHTML = `<div style="text-align: center; color: #dc3545; padding: 20px 0;">Error al evaluar recursos: ${err.message}</div>`;
    }
  };


  // --- MÓDULO CLOUD ---
  function updateCloudProgress(statusText, percentage) {
    const container = document.getElementById('cloud-progress-container');
    const status = document.getElementById('cloud-progress-status');
    const pctText = document.getElementById('cloud-progress-percentage');
    const fill = document.getElementById('cloud-progress-bar-fill');
    
    if (container) container.style.display = 'block';
    if (status) {
      status.textContent = statusText;
      // Remover negrita si es el mensaje de éxito de descarga o sincronización
      if (statusText === "¡Todos los recursos y cantos descargados offline con éxito!" || statusText === "¡Tus cejillas y notas se activaron de forma offline!") {
        status.style.fontWeight = 'normal';
      } else {
        status.style.fontWeight = '600';
      }
    }
    if (pctText) pctText.textContent = `${percentage}%`;
    if (fill) fill.style.width = `${percentage}%`;
  }
  
  function hideCloudProgress() {
    const container = document.getElementById('cloud-progress-container');
    if (container) {
      setTimeout(() => {
        container.style.display = 'none';
      }, 3000);
    }
  }

  const cantoEquipoToggle = document.getElementById('canto-equipo-toggle');
  if (cantoEquipoToggle) {
    cantoEquipoToggle.checked = localStorage.getItem('cantoEquipoOffline') === 'true';
    if (typeof updateCantoEquipoBadge === 'function') {
      updateCantoEquipoBadge();
    }
    cantoEquipoToggle.addEventListener('change', async () => {
      // Comprobar si hay conexión a Internet para cualquier cambio (activar o desactivar)
      if (!navigator.onLine) {
        if (window.mostrarAlerta) {
          window.mostrarAlerta({
            titulo: 'Sin Conexión',
            mensaje: 'No puedes Habilitar Resucitó sin Internet si no tienes internet',
            icono: 'wifi_off'
          });
        } else {
          alert("⚠️ Sin Conexión\nNo puedes Habilitar Resucitó sin Internet si no tienes internet");
        }
        // Revertir al estado persistido previamente
        cantoEquipoToggle.checked = localStorage.getItem('cantoEquipoOffline') === 'true';
        updateCantoEquipoBadge();
        return;
      }

      updateCantoEquipoBadge();
      const isChecked = cantoEquipoToggle.checked;
      if (isChecked) {

        // ACTIVAR: Descargar todos los cantos y todos los recursos de la aplicación
        cantoEquipoToggle.disabled = true;
        try {
          updateCloudProgress("Iniciando escaneo y descarga...", 0);
          
          const keys = await caches.keys();
          const cacheName = keys.find(k => k.startsWith('resucito-cache-')) || 'resucito-cache-v304';
          const cache = await caches.open(cacheName);
          
          const resourcesData = await getAllAppResources();
          
          // Crear lista completa de URLs a cachear
          const allUrlsToCache = [];
          
          // 1. HTMLs
          resourcesData.htmlResources.forEach(r => allUrlsToCache.push(r.url));
          // 2. JSONs
          resourcesData.jsonResources.forEach(r => allUrlsToCache.push(r.url));
          // 3. JS
          resourcesData.jsResources.forEach(r => allUrlsToCache.push(r.url));
          // 4. CSS
          resourcesData.cssResources.forEach(r => allUrlsToCache.push(r.url));
          // 5. Assets
          resourcesData.assetResources.forEach(r => allUrlsToCache.push(r.url));
          // 6. Cantos JSON
          resourcesData.songResources.forEach(r => allUrlsToCache.push(r.url));

          // Eliminar duplicados
          const uniqueUrls = Array.from(new Set(allUrlsToCache));
          const total = uniqueUrls.length;

          if (total === 0) {
            throw new Error("No hay recursos identificados para descargar.");
          }
          
          let downloaded = 0;
          const batchSize = 15;
          
          for (let i = 0; i < total; i += batchSize) {
            const batch = uniqueUrls.slice(i, i + batchSize);
            await Promise.all(batch.map(async (url) => {
              try {
                const res = await fetch(url);
                if (res.ok) {
                  await cache.put(url, res.clone());
                }
              } catch (err) {
                console.warn(`Error descargando recurso ${url}:`, err);
              }
              downloaded++;
            }));
            
            const pct = Math.min(100, Math.round((downloaded / total) * 100));
            updateCloudProgress(`Descargando recursos (${downloaded}/${total})...`, pct);
          }
          
          localStorage.setItem('cantoEquipoOffline', 'true');
          updateCloudProgress("¡Todos los recursos y cantos descargados offline con éxito!", 100);
        } catch (err) {
          console.error(err);
          if (window.mostrarAlerta) {
            window.mostrarAlerta({
              titulo: 'Error',
              mensaje: 'Error al descargar recursos: ' + err.message,
              icono: 'error'
            });
          } else {
            alert("Error al descargar recursos: " + err.message);
          }
          updateCloudProgress("Error en la descarga", 0);
          cantoEquipoToggle.checked = false;
          updateCantoEquipoBadge();
        } finally {
          cantoEquipoToggle.disabled = false;
          hideCloudProgress();
        }
      } else {
        // DESACTIVAR: Eliminar cantos de la caché
        const doDeactivate = async () => {
          cantoEquipoToggle.disabled = true;
          try {
            updateCloudProgress("Eliminando cantos guardados...", 20);
            const keys = await caches.keys();
            const cacheName = keys.find(k => k.startsWith('resucito-cache-')) || 'resucito-cache-v304';
            const cache = await caches.open(cacheName);
            
            const songs = await getOrFetchAllSongs();
            const songIds = songs.map(s => s.id);
            let deleted = 0;
            
            for (const id of songIds) {
              const folder = id.startsWith('aet') ? 'data/songs-ae' : 'data/songs';
              const url = `${folder}/${id}.json?offline=true`;
              await cache.delete(url);
              deleted++;
              const pct = 20 + Math.round((deleted / songIds.length) * 80);
              updateCloudProgress(`Eliminando canto ${deleted}/${songIds.length}...`, pct);
            }
            
            localStorage.setItem('cantoEquipoOffline', 'false');
            updateCloudProgress("¡Modo sin conexión desactivado y caché liberada!", 100);
          } catch (err) {
            console.error(err);
            if (window.mostrarAlerta) {
              window.mostrarAlerta({
                titulo: 'Error',
                mensaje: 'Error al desactivar: ' + err.message,
                icono: 'error'
              });
            } else {
              alert("Error al desactivar: " + err.message);
            }
            cantoEquipoToggle.checked = true;
            updateCantoEquipoBadge();

          } finally {
            cantoEquipoToggle.disabled = false;
            hideCloudProgress();
          }
        };

        if (window.mostrarConfirmacion) {
          window.mostrarConfirmacion({
            titulo: 'Resucitó solo con Internet',
            mensaje: '¿Deseas desactivar el modo sin conexión y eliminar los cantos guardados localmente?',
            icono: 'wifi',
            textoSi: 'Sí',
            textoNo: 'No',
            onConfirm: doDeactivate,
            onCancel: () => {
              cantoEquipoToggle.checked = true;
              updateCantoEquipoBadge();
            }
          });
        } else {
          if (confirm("¿Deseas desactivar el modo sin conexión y eliminar los cantos guardados localmente?")) {
            doDeactivate();
          } else {
            cantoEquipoToggle.checked = true;
            updateCantoEquipoBadge();
          }
        }
      }
    });
  }

  const btnSyncOffline = document.getElementById('btn-cloud-sync-offline');
  if (btnSyncOffline) {
    btnSyncOffline.addEventListener('click', async () => {
      const user = getCurrentUser() || auth.currentUser;
      if (!user) {
        if (window.mostrarAlerta) {
          window.mostrarAlerta({
            titulo: 'Iniciar Sesión',
            mensaje: 'Debes iniciar sesión con tu cuenta de Google para descargar tus datos desde la nube.',
            icono: 'account_circle'
          });
        } else {
          alert("⚠️ Debes iniciar sesión con tu cuenta de Google para descargar tus datos desde la nube.");
        }
        return;
      }
      
      btnSyncOffline.disabled = true;
      try {
        updateCloudProgress("Conectando con la nube...", 10);
        
        const dbdataRef = collection(db, "usuarios", user.uid, "dbdata");
        const snap = await getDocs(dbdataRef);
        
        updateCloudProgress("Procesando datos del salmista...", 40);
        
        if (snap.empty) {
          updateCloudProgress("No tienes datos personales guardados en la nube.", 100);
          return;
        }
        
        let processed = 0;
        const total = snap.docs.length;
        
        snap.forEach(docSnap => {
          const songId = docSnap.id;
          const dataDoc = docSnap.data();
          const val = dataDoc.valor || dataDoc;
          
          const localConfig = {
            valoracion: parseInt(val.valoracion) || 0,
            cejilla: String(val.cejilla || "0"),
            acorde: String(val.acorde || "0")
          };
          localStorage.setItem(`canto-config-${songId}`, JSON.stringify(localConfig));
          
          if (val.notesCantor !== undefined) {
            localStorage.setItem(`notes_${songId}`, val.notesCantor);
          }
          
          processed++;
          const pct = 40 + Math.round((processed / total) * 60);
          updateCloudProgress(`Guardando datos del canto ${processed}/${total}...`, pct);
        });
        
        updateCloudProgress("¡Tus cejillas y notas se activaron de forma offline!", 100);
        if (typeof window.routeSPA === 'function') window.routeSPA();
      } catch (err) {
        console.error(err);
        if (window.mostrarAlerta) {
          window.mostrarAlerta({
            titulo: 'Error',
            mensaje: 'Error al descargar datos personales: ' + err.message,
            icono: 'error'
          });
        } else {
          alert("Error al descargar datos personales: " + err.message);
        }
        updateCloudProgress("Error al activar offline", 0);
      } finally {
        btnSyncOffline.disabled = false;
        hideCloudProgress();
      }
    });
  }

  const btnClearCache = document.getElementById('btn-cloud-clear-cache');
  if (btnClearCache) {
    btnClearCache.addEventListener('click', async () => {
      if (!navigator.onLine) {
        if (window.mostrarAlerta) {
          window.mostrarAlerta({
            titulo: 'Sin Conexión',
            mensaje: 'No puedes limpiar la caché estando sin conexión. Es obligatorio tener conexión a Internet para garantizar la re-descarga de recursos necesarios.',
            icono: 'wifi_off'
          });
        } else {
          alert("⚠️ No puedes limpiar la caché estando sin conexión. Es obligatorio tener conexión a Internet para garantizar la re-descarga de recursos necesarios.");
        }
        return;
      }
      
      const doClear = async () => {
        btnClearCache.disabled = true;
        try {
          updateCloudProgress("Eliminando caché...", 20);
          const keys = await caches.keys();
          let deletedCount = 0;
          
          for (const key of keys) {
            await caches.delete(key);
            deletedCount++;
            const pct = 20 + Math.round((deletedCount / keys.length) * 80);
            updateCloudProgress(`Eliminado caché: ${key}...`, pct);
          }
          
          if (window.loadedSongsCache) {
            window.loadedSongsCache = {};
          }
          
          localStorage.setItem('cantoEquipoOffline', 'false'); // Desactivar el toggle de canto offline
          
          updateCloudProgress("¡Caché limpiada con éxito! Recargando aplicación...", 100);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (err) {
          console.error(err);
          if (window.mostrarAlerta) {
            window.mostrarAlerta({
              titulo: 'Error',
              mensaje: 'Error al limpiar caché: ' + err.message,
              icono: 'error'
            });
          } else {
            alert("Error al limpiar caché: " + err.message);
          }
          updateCloudProgress("Error al limpiar", 0);
          btnClearCache.disabled = false;
          hideCloudProgress();
        }
      };

      if (window.mostrarConfirmacion) {
        window.mostrarConfirmacion({
          titulo: 'Limpiar Caché',
          mensaje: '¿Estás seguro de que deseas limpiar la caché de la aplicación? Esto forzará la descarga de las últimas versiones de cantos y recursos la próxima vez que los abras.',
          icono: 'delete_forever',
          textoSi: 'Sí',
          textoNo: 'No',
          onConfirm: doClear
        });
      } else {
        if (confirm("¿Estás seguro de que deseas limpiar la caché de la aplicación? Esto forzará la descarga de las últimas versiones de cantos y recursos la próxima vez que los abras.")) {
          doClear();
        }
      }
    });
  }


  // Sliders de zoom / ancho
  if (widthSlider) {
    widthSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      localStorage.setItem('app-max-width', val);
      document.documentElement.style.setProperty('--app-max-width', val + 'px');
      if (widthBadge) widthBadge.textContent = val + 'px';
    });
  }

  // Selección de colores de etapa
  document.querySelectorAll('.color-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.color-swatches');
      if (!container) return;
      const stage = container.dataset.stage;
      const color = btn.dataset.color;
      
      localStorage.setItem(`stage-color-${stage}`, color);
      window.applyStageColors();
      
      // Forzar renderizado
      if (window.filteredSongs && window.filteredSongs.length > 0) {
        if (typeof window.renderSongsList === 'function') window.renderSongsList(window.filteredSongs);
      } else if (window.allSongs) {
        if (typeof window.renderSongsList === 'function') window.renderSongsList(window.allSongs);
      }
    });
  });

  // Color pickers personalizados para etapas
  document.querySelectorAll('.stage-color-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const stage = input.dataset.stage;
      const color = e.target.value;
      
      localStorage.setItem(`stage-color-${stage}`, color);
      window.applyStageColors();
      
      if (window.filteredSongs && window.filteredSongs.length > 0) {
        if (typeof window.renderSongsList === 'function') window.renderSongsList(window.filteredSongs);
      } else if (window.allSongs) {
        if (typeof window.renderSongsList === 'function') window.renderSongsList(window.allSongs);
      }
    });
  });

  // Personalizar colores de botones de etapa y de ajustes
  document.querySelectorAll('.btn-color-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const stage = input.dataset.stage;
      const mode = input.dataset.mode;
      const color = e.target.value;
      
      if (stage === 'settings-btn') {
        if (mode === 'bg') {
          localStorage.setItem('settings-btn-bg', color);
        } else if (mode === 'text') {
          localStorage.setItem('settings-btn-text', color);
        }
      } else {
        if (mode === 'default') {
          localStorage.setItem(`stage-color-${stage}`, color);
        } else if (mode === 'text') {
          localStorage.setItem(`btn-color-${stage}-text`, color);
        } else {
          localStorage.setItem(`btn-color-${stage}-active`, color);
        }
      }
      window.applyStageColors();
    });
  });

  // Personalizar colores del Tema de Libro de Canto
  document.querySelectorAll('.book-theme-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const suffix = localStorage.getItem('theme') || 'light';
      const type = input.dataset.type;
      const color = e.target.value;
      
      localStorage.setItem(`book-theme-${type}-${suffix}`, color);
      window.applyBookTheme();
    });
  });

  // Reset del tema de libro
  const resetBookThemeBtn = document.getElementById('reset-book-theme-btn');
  if (resetBookThemeBtn) {
    resetBookThemeBtn.addEventListener('click', () => {
      const suffixes = ['dark', 'light', 'sepia'];
      suffixes.forEach(suffix => {
        localStorage.removeItem(`book-theme-bg-${suffix}`);
        localStorage.removeItem(`book-theme-accent-${suffix}`);
        localStorage.removeItem(`book-theme-text-${suffix}`);
        localStorage.removeItem(`book-theme-song-title-${suffix}`);
        localStorage.removeItem(`book-theme-chord-${suffix}`);
        localStorage.removeItem(`book-theme-chord-alt-${suffix}`);
        localStorage.removeItem(`book-theme-footer-link-${suffix}`);
      });
      const props = ['--bg-color', '--accent-color', '--text-color', '--accent-glow', '--song-title-color', '--chord-color', '--chord-color-alt', '--SangreCristo'];
      props.forEach(p => {
        document.body.style.removeProperty(p);
        document.documentElement.style.removeProperty(p);
      });
      window.applyBookTheme();
    });
  }

  // Reset de colores de canto
  const resetCantoColorsBtn = document.getElementById('reset-canto-colors-btn');
  if (resetCantoColorsBtn) {
    resetCantoColorsBtn.addEventListener('click', () => {
      const suffixes = ['dark', 'light', 'sepia'];
      suffixes.forEach(suffix => {
        localStorage.removeItem(`book-theme-song-title-${suffix}`);
        localStorage.removeItem(`book-theme-chord-${suffix}`);
        localStorage.removeItem(`book-theme-chord-alt-${suffix}`);
        localStorage.removeItem(`book-theme-footer-link-${suffix}`);
      });
      ['--song-title-color', '--chord-color', '--chord-color-alt', '--SangreCristo'].forEach(p => {
        document.body.style.removeProperty(p);
        document.documentElement.style.removeProperty(p);
      });
      window.applyBookTheme();
    });
  }

  // Reset de colores de etapas
  const resetStageColorsBtn = document.getElementById('reset-stage-colors-btn');
  if (resetStageColorsBtn) {
    resetStageColorsBtn.addEventListener('click', () => {
      ['pre', 'cate', 'ele', 'lit', 'cat'].forEach(stg => {
        localStorage.removeItem(`stage-color-${stg}`);
        document.body.style.removeProperty(`--color-${stg}`);
        document.documentElement.style.removeProperty(`--color-${stg}`);
      });
      window.applyStageColors();
    });
  }

  // Reset de colores de botones
  const resetBtnColorsBtn = document.getElementById('reset-btn-colors-btn');
  if (resetBtnColorsBtn) {
    resetBtnColorsBtn.addEventListener('click', () => {
      ['pre', 'cate', 'ele', 'lit', 'cat'].forEach(stg => {
        localStorage.removeItem(`btn-color-${stg}-default`);
        localStorage.removeItem(`btn-color-${stg}-active`);
        localStorage.removeItem(`btn-color-${stg}-text`);
        document.body.style.removeProperty(`--color-${stg}-active`);
        document.body.style.removeProperty(`--text-${stg}`);
        document.documentElement.style.removeProperty(`--color-${stg}-active`);
        document.documentElement.style.removeProperty(`--text-${stg}`);
      });
      localStorage.removeItem('settings-btn-bg');
      localStorage.removeItem('settings-btn-text');
      document.body.style.removeProperty('--settings-btn-bg');
      document.body.style.removeProperty('--settings-btn-text');
      document.documentElement.style.removeProperty('--settings-btn-bg');
      document.documentElement.style.removeProperty('--settings-btn-text');
      window.applyStageColors();
    });
  }

  // Personalizar colores del Navegador
  document.querySelectorAll('.nav-theme-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const type = input.dataset.type;
      const mode = input.dataset.mode || 'normal';
      const color = e.target.value;
      const key = mode === 'hover' ? `nav-color-${type}-hover` : `nav-color-${type}`;
      localStorage.setItem(key, color);
      if (mode === 'hover' && type === 'btn-bg') {
        localStorage.setItem('nav-color-btn-hover-bg', color);
      } else if (mode === 'hover' && type === 'wrapper-bg') {
        localStorage.setItem('nav-color-wrapper-hover-bg', color);
      }
      window.updateNavInputs();
    });
  });

  const resetNavThemeBtn = document.getElementById('reset-nav-theme-btn');
  if (resetNavThemeBtn) {
    resetNavThemeBtn.addEventListener('click', () => {
      const types = ['text', 'bg', 'btn-bg', 'icon', 'submenu-icon', 'wrapper-bg'];
      types.forEach(t => {
        localStorage.removeItem(`nav-color-${t}`);
        localStorage.removeItem(`nav-color-${t}-hover`);
      });
      localStorage.removeItem('nav-color-btn-hover-bg');
      localStorage.removeItem('nav-color-wrapper-hover-bg');
      window.updateNavInputs();
    });
  }

  // ══════════════════════════════════════════════════
  // PESTAÑA: PREPARAR CANTO — Cabecera de grupo
  // ══════════════════════════════════════════════════
  (function setupPrepararCantoListeners() {
    const colorInput  = document.getElementById('preparar-header-color');
    const sizeInput   = document.getElementById('preparar-header-size');
    const sizeLabel   = document.getElementById('preparar-header-size-label');
    const boldOnBtn   = document.getElementById('preparar-bold-on');
    const boldOffBtn  = document.getElementById('preparar-bold-off');
    const resetBtn    = document.getElementById('preparar-header-reset');

    function setBold(w) {
      localStorage.setItem('cat-header-font-weight', w);
      document.documentElement.style.setProperty('--cat-header-font-weight', w);
      if (boldOnBtn)  boldOnBtn.classList.toggle('active', w === '700');
      if (boldOffBtn) boldOffBtn.classList.toggle('active', w === '400');
      window.updateCatHeaderPreview();
    }

    const savedC = localStorage.getItem('cat-header-color')       || '#d01212';
    const savedS = localStorage.getItem('cat-header-font-size')   || '16';
    const savedW = localStorage.getItem('cat-header-font-weight') || '700';

    if (colorInput) colorInput.value = savedC;
    if (sizeInput)  sizeInput.value  = savedS;
    if (sizeLabel)  sizeLabel.textContent = savedS + 'px';

    setBold(savedW);
    window.updateCatHeaderPreview();

    if (colorInput) {
      colorInput.addEventListener('input', e => {
        localStorage.setItem('cat-header-color', e.target.value);
        document.documentElement.style.setProperty('--cat-header-color', e.target.value);
        window.updateCatHeaderPreview();
      });
    }

    if (sizeInput) {
      sizeInput.addEventListener('input', e => {
        localStorage.setItem('cat-header-font-size', e.target.value);
        document.documentElement.style.setProperty('--cat-header-font-size', e.target.value + 'px');
        if (sizeLabel) sizeLabel.textContent = e.target.value + 'px';
        window.updateCatHeaderPreview();
      });
    }

    if (boldOnBtn)  boldOnBtn.addEventListener('click',  () => setBold('700'));
    if (boldOffBtn) boldOffBtn.addEventListener('click', () => setBold('400'));

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        localStorage.removeItem('cat-header-color');
        localStorage.removeItem('cat-header-font-size');
        localStorage.removeItem('cat-header-font-weight');
        document.documentElement.style.removeProperty('--cat-header-color');
        document.documentElement.style.removeProperty('--cat-header-font-size');
        document.documentElement.style.removeProperty('--cat-header-font-weight');
        if (colorInput) colorInput.value = '#d01212';
        if (sizeInput)  { sizeInput.value = '16'; if (sizeLabel) sizeLabel.textContent = '16px'; }
        setBold('700');
      });
    }
  })();

  // ══════════════════════════════════════════════════
  // PESTAÑA: PERFIL — Cabecera de grupo
  // ══════════════════════════════════════════════════
  (function setupPerfilCantoListeners() {
    const colorInput  = document.getElementById('perfil-header-color');
    const sizeInput   = document.getElementById('perfil-header-size');
    const sizeLabel   = document.getElementById('perfil-header-size-label');
    const boldOnBtn   = document.getElementById('perfil-bold-on');
    const boldOffBtn  = document.getElementById('perfil-bold-off');
    const resetBtn    = document.getElementById('perfil-header-reset');

    function setBold(w) {
      localStorage.setItem('perfil-header-font-weight', w);
      document.documentElement.style.setProperty('--perfil-header-font-weight', w);
      if (boldOnBtn)  boldOnBtn.classList.toggle('active', w === '700');
      if (boldOffBtn) boldOffBtn.classList.toggle('active', w === '400');
      window.updatePerfilHeaderPreview();
    }

    const savedC = localStorage.getItem('perfil-header-color')       || '#d01212';
    const savedS = localStorage.getItem('perfil-header-font-size')   || '16';
    const savedW = localStorage.getItem('perfil-header-font-weight') || '700';

    if (colorInput) colorInput.value = savedC;
    if (sizeInput)  sizeInput.value  = savedS;
    if (sizeLabel)  sizeLabel.textContent = savedS + 'px';

    setBold(savedW);
    window.updatePerfilHeaderPreview();

    if (colorInput) {
      colorInput.addEventListener('input', e => {
        localStorage.setItem('perfil-header-color', e.target.value);
        document.documentElement.style.setProperty('--perfil-header-color', e.target.value);
        window.updatePerfilHeaderPreview();
      });
    }

    if (sizeInput) {
      sizeInput.addEventListener('input', e => {
        localStorage.setItem('perfil-header-font-size', e.target.value);
        document.documentElement.style.setProperty('--perfil-header-font-size', e.target.value + 'px');
        if (sizeLabel) sizeLabel.textContent = e.target.value + 'px';
        window.updatePerfilHeaderPreview();
      });
    }

    if (boldOnBtn)  boldOnBtn.addEventListener('click',  () => setBold('700'));
    if (boldOffBtn) boldOffBtn.addEventListener('click', () => setBold('400'));

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        localStorage.removeItem('perfil-header-color');
        localStorage.removeItem('perfil-header-font-size');
        localStorage.removeItem('perfil-header-font-weight');
        document.documentElement.style.removeProperty('--perfil-header-color');
        document.documentElement.style.removeProperty('--perfil-header-font-size');
        document.documentElement.style.removeProperty('--perfil-header-font-weight');
        if (colorInput) colorInput.value = '#d01212';
        if (sizeInput)  { sizeInput.value = '16'; if (sizeLabel) sizeLabel.textContent = '16px'; }
        setBold('700');
      });
    }
  })();

  // Manejo de la navegación de subpestañas de Tema
  window.switchThemeSubmodule = function(subtab) {
    currentThemeSubmodule = subtab;
    const btns = document.querySelectorAll('.theme-subtab-btn');
    btns.forEach(b => {
      b.classList.toggle('active', b.dataset.subtab === subtab);
    });
    
    const subPanels = {
      'visual': document.getElementById('theme-submodule-visual-content'),
      'inicio': document.getElementById('theme-submodule-inicio-content'),
      'preparar-canto': document.getElementById('theme-submodule-preparar-content'),
      'perfil': document.getElementById('theme-submodule-perfil-content')
    };
    
    for (const [key, el] of Object.entries(subPanels)) {
      if (el) {
        el.style.display = key === subtab ? 'block' : 'none';
      }
    }
  };

  // Manejo de la navegación de subpestañas de Función (Personalizar Función)
  window.switchThemeFunctionModule = function(funcKey) {
    currentThemeFunctionModule = funcKey;
    const btns = document.querySelectorAll('.func-subtab-btn');
    btns.forEach(b => {
      b.classList.toggle('active', b.dataset.func === funcKey);
    });
    
    const sections = {
      book: document.getElementById('theme-section-book'),
      canto: document.getElementById('theme-section-canto'),
      etapas: document.getElementById('theme-section-etapas'),
      botones: document.getElementById('theme-section-botones'),
      navegador: document.getElementById('theme-section-navegador'),
      toolbar: document.getElementById('theme-section-toolbar')
    };

    for (const [key, el] of Object.entries(sections)) {
      if (el) {
        if (key === funcKey) {
          el.style.display = 'block';
          el.classList.remove('collapsed');
          const content = el.querySelector('.collapsible-content');
          if (content) content.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      }
    }
  };

  const funcSubtabBtns = document.querySelectorAll('.func-subtab-btn');
  funcSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.switchThemeFunctionModule(btn.dataset.func);
    });
  });

  const themeSubtabBtns = document.querySelectorAll('.theme-subtab-btn');
  themeSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.switchThemeSubmodule(btn.dataset.subtab);
    });
  });

  // Manejo de sub-pestañas dentro del Módulo Usuario (Cuenta, Acceso y Uso App)
  const userSubtabBtns = document.querySelectorAll('.user-subtab-btn');
  userSubtabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const subtab = btn.dataset.subtab;
      currentUserSubmodule = subtab;
      userSubtabBtns.forEach(b => b.classList.toggle('active', b.dataset.subtab === subtab));

      const subpanels = document.querySelectorAll('.user-subpanel');
      subpanels.forEach(p => p.style.display = 'none');

      const targetSubpanel = document.getElementById(`user-subpanel-${subtab}`);
      if (targetSubpanel) {
        targetSubpanel.style.display = 'block';
      }

      if (subtab === 'usage') {
        window.renderUsoAppModule();
      }
    });
  });

  // --- REGISTRO DE USO DE LA APP EN FIREBASE ---
  function getOrCreateDeviceId() {
    let deviceId = localStorage.getItem('usoAppDeviceId');
    if (!deviceId) {
      deviceId = 'dev_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
      localStorage.setItem('usoAppDeviceId', deviceId);
    }
    return deviceId;
  }

  function getDeviceDescription() {
    const ua = navigator.userAgent;
    let os = 'Desconocido';
    if (/android/i.test(ua)) os = 'Android';
    else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) os = 'iOS';
    else if (/Windows/i.test(ua)) os = 'Windows';
    else if (/Mac/i.test(ua)) os = 'macOS';
    else if (/Linux/i.test(ua)) os = 'Linux';

    let browser = 'Desconocido';
    if (/chrome|crios/i.test(ua)) browser = 'Chrome';
    else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
    else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
    else if (/edge|edg/i.test(ua)) browser = 'Edge';
    else if (/msie|trident/i.test(ua)) browser = 'IE';

    let type = 'Escritorio';
    if (/tablet|ipad|playbook|silk/i.test(ua)) type = 'Tablet';
    else if (/Mobile|Android|iP(hone|od)|IEMobile/i.test(ua)) type = 'Móvil';

    return `${type} (${os} / ${browser})`;
  }

  window.registrarUsoApp = async function() {
    try {
      const deviceId = getOrCreateDeviceId();
      const device = getDeviceDescription();
      
      let ip = 'Desconocida';
      let pais = 'Desconocido';
      
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          ip = data.ip || 'Desconocida';
          pais = data.country_name || 'Desconocido';
        }
      } catch (e1) {
        console.warn('Error al consultar ipapi.co, intentando fallback:', e1);
        try {
          const res = await fetch('https://api.db-ip.com/v2/free/self');
          if (res.ok) {
            const data = await res.json();
            ip = data.ipAddress || 'Desconocida';
            pais = data.countryName || 'Desconocido';
          }
        } catch (e2) {
          console.warn('Error en fallback de geolocalización:', e2);
        }
      }

      const currentUser = getCurrentUser();
      const usageData = {
        uid: currentUser ? currentUser.uid : 'Invitado',
        nombre: currentUser ? (currentUser.displayName || 'Usuario Google') : 'Invitado',
        email: currentUser ? (currentUser.email || '') : '',
        ip: ip,
        pais: pais,
        dispositivo: device,
        lastActive: Date.now()
      };

      const docRef = doc(db, "registro_uso", deviceId);
      await setDoc(docRef, usageData, { merge: true });
      console.log("📊 Registro de uso de la app sincronizado con Firebase.");
    } catch (err) {
      console.warn("⚠️ No se pudo registrar el uso en Firebase:", err);
    }
  };

  let usageTableZoom = parseFloat(localStorage.getItem('usageTableZoom')) || 0.8;

  function makeTableResizable(table) {
    const row = table.querySelector('thead tr');
    const cols = row ? row.children : [];
    if (cols.length === 0) return;
    
    table.style.tableLayout = 'fixed';
    
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i];
      if (!col.style.width) {
        col.style.width = col.clientWidth + 'px';
      }
      
      if (!col.querySelector('.resize-handle')) {
        col.style.position = 'relative';
        const handle = document.createElement('div');
        handle.className = 'resize-handle';
        handle.style.position = 'absolute';
        handle.style.right = '0';
        handle.style.top = '0';
        handle.style.bottom = '0';
        handle.style.width = '8px';
        handle.style.cursor = 'col-resize';
        handle.style.userSelect = 'none';
        handle.style.zIndex = '5';
        
        handle.addEventListener('mouseenter', () => { handle.style.backgroundColor = 'rgba(0,0,0,0.15)'; });
        handle.addEventListener('mouseleave', () => { handle.style.backgroundColor = 'transparent'; });
        
        col.appendChild(handle);
        
        let startX, startWidth;
        
        const onMouseDown = (e) => {
          startX = e.pageX !== undefined ? e.pageX : e.touches[0].pageX;
          startWidth = parseFloat(col.style.width);
          
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
          document.addEventListener('touchmove', onMouseMove);
          document.addEventListener('touchend', onMouseUp);
          
          handle.style.backgroundColor = 'rgba(0,0,0,0.25)';
          document.body.style.cursor = 'col-resize';
        };
        
        const onMouseMove = (e) => {
          const pageX = e.pageX !== undefined ? e.pageX : e.touches[0].pageX;
          const dx = pageX - startX;
          const newWidth = Math.max(50, startWidth + dx);
          col.style.width = newWidth + 'px';
        };
        
        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('touchmove', onMouseMove);
          document.removeEventListener('touchend', onMouseUp);
          
          handle.style.backgroundColor = 'transparent';
          document.body.style.cursor = 'default';
        };
        
        handle.addEventListener('mousedown', onMouseDown);
        handle.addEventListener('touchstart', onMouseDown, { passive: true });
      }
    }
  }

  let lastUsageRecords = [];

  window.applyUsageFilters = function() {
    const tableBody = document.getElementById('usage-users-table-body');
    if (!tableBody) return;

    const searchInput = document.getElementById('usage-search-input');
    const countrySelect = document.getElementById('usage-country-filter');

    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCountry = countrySelect ? countrySelect.value : 'all';

    const filtered = lastUsageRecords.filter(r => {
      // Filtro de País
      if (selectedCountry !== 'all') {
        const countryVal = r.pais || 'Desconocido';
        if (countryVal !== selectedCountry) return false;
      }

      // Filtro de búsqueda por texto
      if (query) {
        const name = (r.nombre || '').toLowerCase();
        const email = (r.email || '').toLowerCase();
        const ip = (r.ip || '').toLowerCase();
        const device = (r.dispositivo || '').toLowerCase();
        const country = (r.pais || '').toLowerCase();

        if (!name.includes(query) && 
            !email.includes(query) && 
            !ip.includes(query) && 
            !device.includes(query) && 
            !country.includes(query)) {
          return false;
        }
      }
      return true;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 20px; text-align: center; color: var(--text-muted);">
            Ningún registro coincide con los filtros aplicados.
          </td>
        </tr>
      `;
      return;
    }

    const now = Date.now();
    const oneHourMs = 60 * 60 * 1000;

    tableBody.innerHTML = filtered.map(r => {
      const lastActiveTime = r.lastActive ? new Date(r.lastActive) : null;
      const lastActiveStr = lastActiveTime 
        ? lastActiveTime.toLocaleString('es-ES', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) 
        : 'Desconocida';
      
      const diff = now - (r.lastActive || 0);
      const isOnline = diff < oneHourMs;
      const statusBadge = isOnline 
        ? `<span style="padding: 3px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; background: rgba(40, 167, 69, 0.15); color: #28a745; text-transform: uppercase;">OnLine</span>`
        : `<span style="padding: 3px 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; background: rgba(220, 53, 69, 0.15); color: #dc3545; text-transform: uppercase;">OffLine</span>`;

      const userHtml = r.nombre === 'Invitado' 
        ? `<span style="font-weight: 600; color: var(--text-muted);">Invitado</span>`
        : `
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: 700; color: var(--text-color);">${r.nombre}</span>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${r.email || ''}</span>
          </div>
        `;

      return `
        <tr style="border-bottom: 1px solid var(--panel-border); transition: background 0.2s;">
          <td style="padding: 10px 12px; vertical-align: middle; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${userHtml}</td>
          <td style="padding: 10px 12px; vertical-align: middle; font-family: monospace; font-size: 0.75rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${r.ip || 'Desconocida'}</td>
          <td style="padding: 10px 12px; vertical-align: middle; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${r.pais || 'Desconocido'}</td>
          <td style="padding: 10px 12px; vertical-align: middle; font-size: 0.75rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${r.dispositivo || 'Desconocido'}</td>
          <td style="padding: 10px 12px; vertical-align: middle; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${statusBadge}</td>
          <td style="padding: 10px 12px; vertical-align: middle; font-size: 0.75rem; color: var(--text-muted); overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${lastActiveStr}</td>
        </tr>
      `;
    }).join('');

    const table = document.getElementById('usage-users-table');
    if (table) {
      table.style.fontSize = `${usageTableZoom}rem`;
      makeTableResizable(table);
    }
  };

  window.renderUsoAppModule = async function() {
    const tableBody = document.getElementById('usage-users-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="padding: 20px; text-align: center; color: var(--text-muted);">
          Obteniendo registros de uso desde Firebase...
        </td>
      </tr>
    `;

    try {
      const colRef = collection(db, "registro_uso");
      const snap = await getDocs(colRef);
      
      const records = [];
      snap.forEach(docSnap => {
        records.push({
          id: docSnap.id,
          ...docSnap.data()
        });
      });

      records.sort((a, b) => (b.lastActive || 0) - (a.lastActive || 0));
      lastUsageRecords = records;

      if (records.length === 0) {
        tableBody.innerHTML = `
          <tr>
            <td colspan="6" style="padding: 20px; text-align: center; color: var(--text-muted);">
              No hay registros de uso en Firebase.
            </td>
          </tr>
        `;
        return;
      }

      // Rellenar dinámicamente el selector de países
      const countrySelect = document.getElementById('usage-country-filter');
      if (countrySelect) {
        const currentSel = countrySelect.value || 'all';
        const countries = Array.from(new Set(records.map(r => r.pais || 'Desconocido'))).filter(Boolean).sort();
        countrySelect.innerHTML = `<option value="all">Todos los países</option>` + 
          countries.map(c => `<option value="${c}">${c}</option>`).join('');
        
        if (countries.includes(currentSel)) {
          countrySelect.value = currentSel;
        } else {
          countrySelect.value = 'all';
        }
      }

      // Aplicar filtros (renderiza el contenido final)
      window.applyUsageFilters();

    } catch (err) {
      console.error("Error al cargar registros de uso:", err);
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" style="padding: 20px; text-align: center; color: #dc3545; font-weight: 600;">
            Error al conectar con Firebase: ${err.message}
          </td>
        </tr>
      `;
    }
  };

  // Registrar uso automáticamente cada vez que se detecte cambio de sesión
  auth.onAuthStateChanged(() => {
    window.registrarUsoApp();
  });

  // Escuchar clicks de refrescar y zoom de letra en la tabla
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-usage-refresh') {
      e.preventDefault();
      e.stopPropagation();
      window.renderUsoAppModule();
    }
    
    if (e.target && e.target.id === 'btn-usage-zoom-in') {
      e.preventDefault();
      e.stopPropagation();
      usageTableZoom = Math.min(1.4, usageTableZoom + 0.05);
      localStorage.setItem('usageTableZoom', usageTableZoom);
      const table = document.getElementById('usage-users-table');
      if (table) table.style.fontSize = `${usageTableZoom}rem`;
    }

    if (e.target && e.target.id === 'btn-usage-zoom-out') {
      e.preventDefault();
      e.stopPropagation();
      usageTableZoom = Math.max(0.55, usageTableZoom - 0.05);
      localStorage.setItem('usageTableZoom', usageTableZoom);
      const table = document.getElementById('usage-users-table');
      if (table) table.style.fontSize = `${usageTableZoom}rem`;
    }
  });

  // Escuchar entrada en el buscador y filtros por país de la tabla de uso
  document.addEventListener('input', (e) => {
    if (e.target && e.target.id === 'usage-search-input') {
      window.applyUsageFilters();
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target && e.target.id === 'usage-country-filter') {
      window.applyUsageFilters();
    }
  });
  
  // Manejo del cierre del modal de Ajustes (guardando los cambios en la nube)
  const btnCloseModal = document.getElementById('settings-modal-close');
  const modalContainer = document.getElementById('settings-modal');
  
  const closeModalAction = () => {
    if (modalContainer) modalContainer.style.display = 'none';
    if (typeof window.guardarAjustesEnNube === 'function') {
      window.guardarAjustesEnNube();
    }
  };

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', closeModalAction);
  }
  if (modalContainer) {
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        closeModalAction();
      }
    });
  }

  // Submódulo Canto vs Liturgia vs Catequesis
  let currentCantoSubmodule = 'canto';
  window.switchCantoSubmodule = function(submodule) {
    currentCantoSubmodule = submodule;
    document.querySelectorAll('.canto-subtab-btn').forEach(btn => {
      const isCurrent = btn.dataset.subtab === submodule;
      btn.classList.toggle('active', isCurrent);
      btn.style.borderBottom = isCurrent ? '2.5px solid var(--accent-color)' : 'none';
      btn.style.fontWeight = isCurrent ? '700' : '600';
      btn.style.color = isCurrent ? 'var(--accent-color)' : 'var(--text-muted)';
    });

    const cantoContent = document.getElementById('canto-submodule-canto-content');
    const liturgiaContent = document.getElementById('canto-submodule-liturgia-content');
    const catequesisContent = document.getElementById('canto-submodule-catequesis-content');
    if (cantoContent) cantoContent.style.display = submodule === 'canto' ? 'block' : 'none';
    if (liturgiaContent) liturgiaContent.style.display = submodule === 'liturgia' ? 'block' : 'none';
    if (catequesisContent) catequesisContent.style.display = submodule === 'catequesis' ? 'block' : 'none';

    if (submodule === 'liturgia') {
      window.refreshLiturgiaStatus();
    } else if (submodule === 'catequesis') {
      window.initCatequesisVoiceSettings();
    }
  };

  window.initCatequesisVoiceSettings = function() {
    const voiceSelect = document.getElementById('tts-voice-select');
    const rateSlider = document.getElementById('tts-rate-slider');
    const rateLabel = document.getElementById('tts-rate-value-label');
    const btnTest = document.getElementById('btn-test-tts-voice');
    const btnTestText = document.getElementById('btn-test-tts-text');

    if (!voiceSelect || !rateSlider) return;

    const savedRate = localStorage.getItem('resucito_tts_rate') || '0.95';
    rateSlider.value = savedRate;
    if (rateLabel) rateLabel.textContent = `${parseFloat(savedRate).toFixed(2)}x`;

    rateSlider.oninput = () => {
      const val = rateSlider.value;
      if (rateLabel) rateLabel.textContent = `${parseFloat(val).toFixed(2)}x`;
      localStorage.setItem('resucito_tts_rate', val);
    };

    function populateVoices() {
      if (!('speechSynthesis' in window)) {
        voiceSelect.innerHTML = '<option value="">Síntesis de voz no soportada en este navegador</option>';
        return;
      }

      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) {
        voiceSelect.innerHTML = '<option value="">Cargando voces del sistema...</option>';
        return;
      }

      const savedVoiceURI = localStorage.getItem('resucito_tts_voice_uri') || '';

      // Ordenar: primero voces en español, luego el resto
      const spanishVoices = voices.filter(v => v.lang.startsWith('es') || v.lang.includes('ES') || v.lang.includes('MX'));
      const otherVoices = voices.filter(v => !v.lang.startsWith('es') && !v.lang.includes('ES') && !v.lang.includes('MX'));

      let html = '';
      if (spanishVoices.length > 0) {
        html += '<optgroup label="Voces en Español (Recomendadas)">';
        spanishVoices.forEach(v => {
          const isSelected = v.voiceURI === savedVoiceURI || (!savedVoiceURI && (v.default || v.lang === 'es-ES'));
          html += `<option value="${v.voiceURI}" ${isSelected ? 'selected' : ''}>${v.name} (${v.lang}) ${v.default ? '★ Por defecto' : ''}</option>`;
        });
        html += '</optgroup>';
      }

      if (otherVoices.length > 0) {
        html += '<optgroup label="Otras Voces del Sistema">';
        otherVoices.forEach(v => {
          const isSelected = v.voiceURI === savedVoiceURI;
          html += `<option value="${v.voiceURI}" ${isSelected ? 'selected' : ''}>${v.name} (${v.lang})</option>`;
        });
        html += '</optgroup>';
      }

      voiceSelect.innerHTML = html;
    }

    populateVoices();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }

    voiceSelect.onchange = () => {
      localStorage.setItem('resucito_tts_voice_uri', voiceSelect.value);
    };

    if (btnTest) {
      btnTest.onclick = () => {
        if (!('speechSynthesis' in window)) return;

        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          if (btnTestText) btnTestText.textContent = 'Probar Voz Seleccionada';
          btnTest.style.background = '#0284c7';
          return;
        }

        const utter = new SpeechSynthesisUtterance("La paz de Cristo esté con vosotros. Esta es una prueba de la voz configurada para la catequesis.");
        utter.rate = parseFloat(rateSlider.value) || 0.95;

        const voices = window.speechSynthesis.getVoices();
        const selectedURI = voiceSelect.value;
        const voice = voices.find(v => v.voiceURI === selectedURI);
        if (voice) {
          utter.voice = voice;
          utter.lang = voice.lang || 'es-ES';
        }

        utter.onstart = () => {
          if (btnTestText) btnTestText.textContent = 'Detener Prueba';
          btnTest.style.background = '#dc2626';
        };

        utter.onend = utter.onerror = () => {
          if (btnTestText) btnTestText.textContent = 'Probar Voz Seleccionada';
          btnTest.style.background = '#0284c7';
        };

        window.speechSynthesis.speak(utter);
      };
    }

    // --- Lógica de Importación y Exportación de CSV de Catequesis ---
    const fileInput = document.getElementById('input-importar-csv-catequesis');
    const btnSelectCSV = document.getElementById('btn-seleccionar-csv-catequesis');
    const btnExportCSV = document.getElementById('btn-exportar-csv-catequesis');
    const statusBox = document.getElementById('catequesis-import-status');

    function parseCSVData(text) {
      text = text.replace(/^\uFEFF/, '');
      const rows = [];
      let row = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const next = text[i+1];
        
        if (char === '"') {
          if (inQuotes && next === '"') {
            current += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          row.push(current.trim());
          current = '';
        } else if ((char === '\r' || char === '\n') && !inQuotes) {
          if (char === '\r' && next === '\n') i++;
          row.push(current.trim());
          if (row.some(field => field.length > 0)) {
            rows.push(row);
          }
          row = [];
          current = '';
        } else {
          current += char;
        }
      }
      if (current.length > 0 || row.length > 0) {
        row.push(current.trim());
        if (row.some(field => field.length > 0)) rows.push(row);
      }
      return rows;
    }

    function normalizeSongKey(str) {
      return (str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
    }

    if (btnSelectCSV && fileInput) {
      btnSelectCSV.onclick = () => {
        fileInput.value = '';
        fileInput.click();
      };

      fileInput.onchange = async (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.style.background = '#eff6ff';
          statusBox.style.color = '#1d4ed8';
          statusBox.style.border = '1px solid #bfdbfe';
          statusBox.innerHTML = '⏳ Procesando archivo CSV...';
        }

        try {
          const text = await file.text();
          const rows = parseCSVData(text);
          if (rows.length < 2) {
            throw new Error('El archivo CSV está vacío o no tiene registros válidos.');
          }

          const songs = window.allSongs || [];
          const songMapByNorm = new Map();
          songs.forEach(s => {
            songMapByNorm.set(normalizeSongKey(s.id), s);
            songMapByNorm.set(normalizeSongKey(s.title || s.tt), s);
          });

          const currentMap = window.allCatequesisMap || {};
          let importedCount = 0;

          for (let r = 1; r < rows.length; r++) {
            const row = rows[r];
            if (!row || row.length === 0 || !row[0]) continue;
            const [canto, autor, fuente, tema, significado_teologico, esencia_cristo, testimonio, citas_paralelos, otros] = row;
            const norm = normalizeSongKey(canto);
            const song = songMapByNorm.get(norm);
            const cantoId = song ? song.id : norm;
            const cantoTitulo = song ? (song.title || song.tt) : canto;

            currentMap[cantoId] = {
              ...(currentMap[cantoId] || {}),
              cantoId,
              cantoTitulo,
              autor: autor || '',
              fuente: fuente || '',
              tema: tema || '',
              significado_teologico: significado_teologico || '',
              esencia_cristo: esencia_cristo || '',
              testimonio: testimonio || '',
              citas_paralelos: citas_paralelos || '',
              otros: otros || '',
              updatedAt: Date.now()
            };
            importedCount++;
          }

          window.allCatequesisMap = currentMap;
          localStorage.setItem('resucito_all_catequesis', JSON.stringify(currentMap));

          if (statusBox) {
            statusBox.style.background = '#f0fdf4';
            statusBox.style.color = '#15803d';
            statusBox.style.border = '1px solid #bbf7d0';
            statusBox.innerHTML = `✅ <strong>${importedCount} catequesis importadas con éxito</strong> en la memoria local y listas para consultar.`;
          }

          if (typeof window.handleSearchAndFilters === 'function') {
            window.handleSearchAndFilters();
          }
        } catch (err) {
          if (statusBox) {
            statusBox.style.background = '#fef2f2';
            statusBox.style.color = '#b91c1c';
            statusBox.style.border = '1px solid #fecaca';
            statusBox.innerHTML = `❌ Error al importar CSV: ${err.message}`;
          }
        }
      };
    }

    if (btnExportCSV) {
      btnExportCSV.onclick = () => {
        const currentMap = window.allCatequesisMap || {};
        const keys = Object.keys(currentMap);
        if (keys.length === 0) {
          alert('No hay catequesis registradas para exportar.');
          return;
        }

        const headers = ['Canto', 'Autor', 'Fuente', 'Tema o esencia del canto', 'Significado Teológico', 'Esencia de Cristo en el canto', 'Testimonio', 'Citas del canto y sus paralelos', 'Otros'];
        
        function escapeCSV(val) {
          if (val === null || val === undefined) return '""';
          const str = String(val).replace(/"/g, '""');
          return `"${str}"`;
        }

        const lines = [headers.join(',')];
        keys.forEach(k => {
          const c = currentMap[k];
          const row = [
            escapeCSV(c.cantoTitulo || c.titulo || c.title || k),
            escapeCSV(c.autor || ''),
            escapeCSV(c.fuente || ''),
            escapeCSV(c.tema || ''),
            escapeCSV(c.significado_teologico || ''),
            escapeCSV(c.esencia_cristo || ''),
            escapeCSV(c.testimonio || ''),
            escapeCSV(c.citas_paralelos || ''),
            escapeCSV(c.otros || '')
          ];
          lines.push(row.join(','));
        });

        const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `catequesis_cantos_backup_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
      };
    }

    // --- Subir todas las catequesis a Firebase Cloud ---
    const btnUploadAllFirebase = document.getElementById('btn-subir-todas-catequesis-firebase');
    const btnUploadAllText = document.getElementById('btn-subir-catequesis-text');

    if (btnUploadAllFirebase) {
      btnUploadAllFirebase.onclick = async () => {
        let currentMap = window.allCatequesisMap || {};
        let keys = Object.keys(currentMap);

        // Si el mapa en memoria está vacío, intentar cargar desde data/catequesis.json
        if (keys.length === 0) {
          try {
            const res = await fetch('data/catequesis.json');
            if (res.ok) {
              const list = await res.json();
              if (Array.isArray(list)) {
                list.forEach(item => {
                  const k = item.cantoId || item.id || normalizeSongKey(item.cantoTitulo || item.titulo || item.title);
                  currentMap[k] = item;
                });
                window.allCatequesisMap = currentMap;
                keys = Object.keys(currentMap);
              }
            }
          } catch (e) {}
        }

        if (keys.length === 0) {
          if (statusBox) {
            statusBox.style.display = 'block';
            statusBox.style.background = '#fef2f2';
            statusBox.style.color = '#b91c1c';
            statusBox.style.border = '1px solid #fecaca';
            statusBox.innerHTML = '❌ No hay catequesis disponibles para subir. Importa primero un archivo CSV o recarga la app.';
          }
          return;
        }

        const total = keys.length;
        if (!confirm(`¿Deseas subir ${total} catequesis a Firebase Cloud? Esta acción respaldará toda la base de datos en la nube.`)) {
          return;
        }

        btnUploadAllFirebase.disabled = true;
        btnUploadAllFirebase.style.opacity = '0.7';
        if (btnUploadAllText) btnUploadAllText.textContent = 'Subiendo a Firebase...';

        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.style.background = '#eff6ff';
          statusBox.style.color = '#1d4ed8';
          statusBox.style.border = '1px solid #bfdbfe';
          statusBox.innerHTML = `⏳ Subiendo 0 de ${total} catequesis a Firebase Cloud...`;
        }

        let uploaded = 0;
        let errors = 0;
        let lastErrorMsg = '';

        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const item = currentMap[k];
          try {
            if (typeof window.guardarCatequesisEnFirebase === 'function') {
              const ok = await window.guardarCatequesisEnFirebase(k, item);
              if (ok) uploaded++;
              else errors++;
            } else {
              const docRef = doc(db, 'catequesis', k);
              await setDoc(docRef, { ...item, updatedAt: Date.now() }, { merge: true });
              uploaded++;
            }
          } catch (err) {
            errors++;
            lastErrorMsg = err.message || String(err);
          }

          // Actualizar progreso periódicamente
          if (statusBox && (i % 10 === 0 || i === keys.length - 1)) {
            statusBox.innerHTML = `⏳ Subiendo ${i + 1} de ${total} catequesis a Firebase Cloud (${uploaded} exitosos)...`;
          }
        }

        btnUploadAllFirebase.disabled = false;
        btnUploadAllFirebase.style.opacity = '1';
        if (btnUploadAllText) btnUploadAllText.textContent = 'Subir Todo a Firebase Cloud';

        if (statusBox) {
          if (errors === 0) {
            statusBox.style.background = '#f0fdf4';
            statusBox.style.color = '#15803d';
            statusBox.style.border = '1px solid #bbf7d0';
            statusBox.innerHTML = `✅ <strong>¡Éxito! Las ${uploaded} catequesis fueron subidas y respaldadas correctamente en Firebase Cloud.</strong>`;
          } else {
            statusBox.style.background = '#fffbeb';
            statusBox.style.color = '#b45309';
            statusBox.style.border = '1px solid #fde68a';
            statusBox.innerHTML = `⚠️ Se subieron <strong>${uploaded} de ${total}</strong> catequesis. Hubo ${errors} avisos (posible límite de cuota o permisos: ${lastErrorMsg}).`;
          }
        }
      };
    }
  };

  document.querySelectorAll('.canto-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      window.switchCantoSubmodule(btn.dataset.subtab);
    });
  });

  // --- Lógica del Módulo Liturgia (Ciclo, Tiempo, Semana y Firebase) ---
  const liturgiaSemanasPorTiempo = {
    'Adviento': [
      { id: '1', name: 'Domingo I de Adviento' },
      { id: '2', name: 'Domingo II de Adviento' },
      { id: '3', name: 'Domingo III de Adviento (Gaudete)' },
      { id: '4', name: 'Domingo IV de Adviento' }
    ],
    'Navidad': [
      { id: '25dicmv', name: '25 Dic - Misa de la Vigilia' },
      { id: '25dicmm', name: '25 Dic - Misa de Medianoche' },
      { id: '25dicma', name: '25 Dic - Misa de la Aurora' },
      { id: '25dicmd', name: '25 Dic - Misa del Día' },
      { id: 'ssf', name: 'Sagrada Familia' },
      { id: '1e', name: 'Santa María Madre de Dios (1 Ene)' },
      { id: '6e', name: 'Epifanía del Señor (6 Ene)' }
    ],
    'Cuaresma': [
      { id: 'ceniza', name: 'Miércoles de Ceniza' },
      { id: '1', name: 'Domingo I de Cuaresma' },
      { id: '2', name: 'Domingo II de Cuaresma' },
      { id: '3', name: 'Domingo III de Cuaresma' },
      { id: '4', name: 'Domingo IV de Cuaresma (Laetare)' },
      { id: '5', name: 'Domingo V de Cuaresma' },
      { id: '6', name: 'Domingo de Ramos' },
      { id: 'js', name: 'Jueves Santo (Cena del Señor)' },
      { id: 'vs', name: 'Viernes Santo (Pasión del Señor)' },
      { id: 'ss', name: 'Sábado Santo' }
    ],
    'Pascua': [
      { id: '1', name: 'Domingo de Pascua (Resurrección)' },
      { id: '2', name: 'Domingo II de Pascua (Divina Misericordia)' },
      { id: '3', name: 'Domingo III de Pascua' },
      { id: '4', name: 'Domingo IV de Pascua (Buen Pastor)' },
      { id: '5', name: 'Domingo V de Pascua' },
      { id: '6', name: 'Domingo VI de Pascua' },
      { id: 'asc', name: 'Ascensión del Señor' },
      { id: 'pent', name: 'Domingo de Pentecostés' }
    ],
    'Tiempo Ordinario': [
      { id: '1', name: 'Bautismo del Señor (Domingo I)' },
      ...Array.from({ length: 33 }, (_, i) => {
        const num = i + 2;
        const romanos = ['II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIV','XXV','XXVI','XXVII','XXVIII','XXIX','XXX','XXXI','XXXII','XXXIII','XXXIV'];
        return { id: String(num), name: `Domingo ${romanos[i] || num} del T. Ordinario` };
      }),
      { id: 'trinidad', name: 'Santísima Trinidad' },
      { id: 'corpus', name: 'Corpus Christi' },
      { id: 'corazon', name: 'Sagrado Corazón de Jesús' },
      { id: '34', name: 'Jesucristo Rey del Universo (Semana XXXIV)' }
    ],
    'Solemnidades y Fiestas': [
      { id: 'fiesta_generica', name: 'Fiesta / Solemnidad Especial' }
    ]
  };

  window.actualizarSelectSemanasLiturgia = function() {
    const selectTiempo = document.getElementById('liturgia-select-tiempo');
    const selectSemana = document.getElementById('liturgia-select-semana');
    if (!selectTiempo || !selectSemana) return;

    const tiempo = selectTiempo.value;
    selectSemana.innerHTML = '<option value="auto">Automático (Según Fecha)</option>';

    if (tiempo !== 'auto' && liturgiaSemanasPorTiempo[tiempo]) {
      liturgiaSemanasPorTiempo[tiempo].forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = item.name;
        selectSemana.appendChild(opt);
      });
    }
  };

  window.refreshLiturgiaStatus = function() {
    const label = document.getElementById('liturgia-status-label');
    const badge = document.getElementById('liturgia-mode-badge');
    const selectCiclo = document.getElementById('liturgia-select-ciclo');
    const selectTiempo = document.getElementById('liturgia-select-tiempo');
    const selectSemana = document.getElementById('liturgia-select-semana');

    const overrideStr = localStorage.getItem('liturgia_override');
    let override = null;
    if (overrideStr) {
      try {
        override = JSON.parse(overrideStr);
        // Verificar si expiró
        if (override.expiresAt && Date.now() > override.expiresAt) {
          localStorage.removeItem('liturgia_override');
          override = null;
        }
      } catch (e) {
        override = null;
      }
    }

    if (override && override.active) {
      if (label) label.textContent = `${override.semanaNombre || override.tiempo} (${override.ciclo})`;
      if (badge) {
        badge.textContent = 'Manual (Esta Semana)';
        badge.style.background = '#d01212';
        badge.style.color = '#fff';
      }
      if (selectCiclo) selectCiclo.value = override.ciclo || 'auto';
      if (selectTiempo) {
        selectTiempo.value = override.tiempo || 'auto';
        window.actualizarSelectSemanasLiturgia();
      }
      if (selectSemana) selectSemana.value = override.semanaId || 'auto';
    } else {
      const currentId = (typeof window.obtenerIdAclamacionSemanaActual === 'function') 
        ? window.obtenerIdAclamacionSemanaActual() : 'aetos22a';
      const info = (typeof window.clasificarAclamacion === 'function') 
        ? window.clasificarAclamacion({ id: currentId, title: 'Semana Actual', subtitle: '' })
        : { celebracion: 'Domingo XXII del T. Ordinario', ciclo: 'Ciclo A' };

      if (label) label.textContent = `${info.celebracion} (${info.ciclo})`;
      if (badge) {
        badge.textContent = 'Automático (Oficial)';
        badge.style.background = '#eab308';
        badge.style.color = '#000';
      }
    }
  };

  const selectTiempoEl = document.getElementById('liturgia-select-tiempo');
  if (selectTiempoEl) {
    selectTiempoEl.addEventListener('change', window.actualizarSelectSemanasLiturgia);
  }

  const btnGuardarLiturgia = document.getElementById('btn-guardar-liturgia');
  if (btnGuardarLiturgia) {
    btnGuardarLiturgia.addEventListener('click', async () => {
      const ciclo = document.getElementById('liturgia-select-ciclo')?.value || 'auto';
      const tiempo = document.getElementById('liturgia-select-tiempo')?.value || 'auto';
      const semanaId = document.getElementById('liturgia-select-semana')?.value || 'auto';
      const semanaNombre = document.getElementById('liturgia-select-semana')?.selectedOptions[0]?.textContent || '';

      if (ciclo === 'auto' && tiempo === 'auto' && semanaId === 'auto') {
        localStorage.removeItem('liturgia_override');
        try {
          await setDoc(doc(db, 'config', 'liturgia'), { active: false, updatedAt: Date.now() });
        } catch (e) {
          console.warn('Error al guardar en Firebase:', e);
        }
        window.refreshLiturgiaStatus();
        if (typeof window.handleSearchAndFilters === 'function') window.handleSearchAndFilters();
        alert('Configuración Litúrgica restablecida a modo Automático.');
        return;
      }

      // Calcular fecha de expiración: Próximo sábado a las 3:00 PM (15:00)
      const now = new Date();
      const nextSat = new Date(now);
      const daysUntilSat = (6 - now.getDay() + 7) % 7 || 7;
      nextSat.setDate(now.getDate() + daysUntilSat);
      nextSat.setHours(15, 0, 0, 0);

      // Determinar ID del canto de aclamación correspondiente
      let songId = '';
      let cicloLetra = (ciclo === 'Ciclo A' ? 'a' : ciclo === 'Ciclo B' ? 'b' : ciclo === 'Ciclo C' ? 'c' : 's');
      if (tiempo === 'Adviento') songId = `aetas${semanaId}${cicloLetra}`;
      else if (tiempo === 'Navidad') songId = `aetns${semanaId}${cicloLetra}`;
      else if (tiempo === 'Cuaresma') songId = `aetcs${semanaId}${cicloLetra}`;
      else if (tiempo === 'Pascua') songId = `aetps${semanaId}${cicloLetra}`;
      else if (tiempo === 'Tiempo Ordinario') songId = `aetos${semanaId}${cicloLetra}`;
      else songId = `aetfs1s`;

      const overrideData = {
        active: true,
        ciclo,
        tiempo,
        semanaId,
        semanaNombre,
        songId,
        expiresAt: nextSat.getTime(),
        updatedAt: Date.now()
      };

      localStorage.setItem('liturgia_override', JSON.stringify(overrideData));

      try {
        if (auth.currentUser) {
          await setDoc(doc(db, 'config', 'liturgia'), overrideData);
        }
      } catch (e) {
        // Silencioso si no hay permisos en Firestore
      }

      window.refreshLiturgiaStatus();
      if (typeof window.handleSearchAndFilters === 'function') window.handleSearchAndFilters();
      alert('Configuración Litúrgica guardada exitosamente. Se aplicará durante esta semana.');
    });
  }

  const btnResetLiturgia = document.getElementById('btn-reset-liturgia');
  if (btnResetLiturgia) {
    btnResetLiturgia.addEventListener('click', async () => {
      localStorage.removeItem('liturgia_override');
      const selectCiclo = document.getElementById('liturgia-select-ciclo');
      const selectTiempo = document.getElementById('liturgia-select-tiempo');
      const selectSemana = document.getElementById('liturgia-select-semana');
      if (selectCiclo) selectCiclo.value = 'auto';
      if (selectTiempo) selectTiempo.value = 'auto';
      if (selectSemana) selectSemana.value = 'auto';

      try {
        if (auth.currentUser) {
          await setDoc(doc(db, 'config', 'liturgia'), { active: false, updatedAt: Date.now() });
        }
      } catch (e) {
        // Silencioso si no hay permisos en Firestore
      }

      window.refreshLiturgiaStatus();
      if (typeof window.handleSearchAndFilters === 'function') window.handleSearchAndFilters();
      alert('Configuración Litúrgica restablecida a modo Automático.');
    });
  }

  // Cargar configuración de Firebase al inicio si existe
  async function cargarLiturgiaDesdeFirebase() {
    try {
      if (auth.currentUser) {
        const snap = await getDoc(doc(db, 'config', 'liturgia'));
        if (snap && snap.exists()) {
          const data = snap.data();
          if (data && data.active && (!data.expiresAt || Date.now() <= data.expiresAt)) {
            localStorage.setItem('liturgia_override', JSON.stringify(data));
            if (typeof window.handleSearchAndFilters === 'function') window.handleSearchAndFilters();
          } else if (data && data.expiresAt && Date.now() > data.expiresAt) {
            localStorage.removeItem('liturgia_override');
          }
        }
      }
    } catch (e) {
      // Silencioso si no hay permisos en Firestore
    }
  }
  auth.onAuthStateChanged((user) => {
    if (user) cargarLiturgiaDesdeFirebase();
  });

  // Forzar el estado por defecto al iniciar
  window.switchThemeSubmodule('visual');
  window.switchThemeFunctionModule('toolbar');
  window.switchGeneralSubmodule('comun');
  window.switchCantoSubmodule('canto');
};
