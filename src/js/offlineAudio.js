// src/js/offlineAudio.js
// Administrador de descargas y caché offline para audios de cantos

const OFFLINE_AUDIO_CACHE = 'resucito-audio-offline-cache';
const STORAGE_KEY_REGISTRY = 'resucito_offline_audio_registry';

class OfflineAudioManager {
  constructor() {
    this.registry = this.loadRegistry();
    this.activeDownloads = new Set();
    this.blobUrlMap = new Map();
    this.initCacheVerification();
  }

  loadRegistry() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_REGISTRY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return {};
  }

  saveRegistry() {
    try {
      localStorage.setItem(STORAGE_KEY_REGISTRY, JSON.stringify(this.registry));
    } catch (e) {}
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('resucito_offline_audio_changed', {
        detail: { registry: this.registry }
      }));
    }
  }

  async initCacheVerification() {
    if (typeof caches === 'undefined') return;
    try {
      const cache = await caches.open(OFFLINE_AUDIO_CACHE);
      const keys = await cache.keys();
      const cachedUrls = new Set(keys.map(k => k.url));

      let changed = false;
      for (const [id, item] of Object.entries(this.registry)) {
        if (item && item.audioSrc) {
          let fullUrl = item.audioSrc;
          try {
            fullUrl = new URL(item.audioSrc, window.location.origin).href;
          } catch (e) {}
          if (!cachedUrls.has(fullUrl) && !cachedUrls.has(item.audioSrc)) {
            delete this.registry[id];
            changed = true;
          }
        }
      }
      if (changed) {
        this.saveRegistry();
      }
    } catch (e) {
      console.warn('Error verificando caché de audios offline:', e);
    }
  }

  isDownloaded(songId) {
    if (!songId) return false;
    return !!this.registry[String(songId)];
  }

  isDownloading(songId) {
    if (!songId) return false;
    return this.activeDownloads.has(String(songId));
  }

  async downloadAudio(song) {
    if (!song || !song.id || !song.audioSrc) {
      throw new Error('Canto no disponible o sin archivo de audio');
    }
    const songId = String(song.id);
    if (this.activeDownloads.has(songId)) return false;

    this.activeDownloads.add(songId);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('resucito_offline_audio_changed', {
        detail: { songId, state: 'downloading' }
      }));
    }

    try {
      let safeSrc = song.audioSrc;
      try {
        safeSrc = encodeURI(decodeURI(safeSrc));
      } catch (e) {
        safeSrc = encodeURI(safeSrc);
      }

      const response = await fetch(safeSrc, { mode: 'cors' });
      if (!response.ok) {
        throw new Error(`El servidor respondió con error (${response.status})`);
      }

      if (typeof caches !== 'undefined') {
        const cache = await caches.open(OFFLINE_AUDIO_CACHE);
        await cache.put(safeSrc, response.clone());
        try {
          const fullUrl = new URL(safeSrc, window.location.origin).href;
          if (fullUrl !== safeSrc) {
            await cache.put(fullUrl, response.clone());
          }
        } catch (e) {}
      }

      const contentLength = response.headers.get('content-length');
      const sizeBytes = contentLength ? parseInt(contentLength, 10) : 0;

      this.registry[songId] = {
        id: songId,
        title: song.title || '',
        audioSrc: safeSrc,
        sizeBytes,
        downloadedAt: Date.now()
      };
      this.saveRegistry();
      return true;
    } finally {
      this.activeDownloads.delete(songId);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('resucito_offline_audio_changed', {
          detail: { songId, state: 'idle' }
        }));
      }
    }
  }

  async deleteAudio(songId) {
    if (!songId) return false;
    const id = String(songId);
    const item = this.registry[id];
    const audioSrc = item ? item.audioSrc : null;

    delete this.registry[id];
    this.saveRegistry();

    if (audioSrc && this.blobUrlMap.has(audioSrc)) {
      try {
        URL.revokeObjectURL(this.blobUrlMap.get(audioSrc));
        this.blobUrlMap.delete(audioSrc);
      } catch (e) {}
    }

    if (typeof caches !== 'undefined' && audioSrc) {
      try {
        const cache = await caches.open(OFFLINE_AUDIO_CACHE);
        await cache.delete(audioSrc);
        try {
          const fullUrl = new URL(audioSrc, window.location.origin).href;
          await cache.delete(fullUrl);
        } catch (e) {}
      } catch (e) {
        console.warn('Error al borrar de caché offline:', e);
      }
    }

    return true;
  }

  async getPlayableAudioUrl(audioSrc) {
    if (!audioSrc) return audioSrc;
    if (typeof caches === 'undefined') return audioSrc;

    try {
      if (this.blobUrlMap.has(audioSrc)) {
        return this.blobUrlMap.get(audioSrc);
      }

      const cache = await caches.open(OFFLINE_AUDIO_CACHE);
      let match = await cache.match(audioSrc);
      if (!match) {
        try {
          match = await cache.match(new URL(audioSrc, window.location.origin).href);
        } catch (e) {}
      }

      if (match) {
        const blob = await match.blob();
        if (blob && blob.size > 0) {
          // Limitar caché de URLs de objetos para evitar acumulación
          if (this.blobUrlMap.size > 12) {
            const oldestKey = this.blobUrlMap.keys().next().value;
            try {
              URL.revokeObjectURL(this.blobUrlMap.get(oldestKey));
            } catch (e) {}
            this.blobUrlMap.delete(oldestKey);
          }

          const objUrl = URL.createObjectURL(blob);
          this.blobUrlMap.set(audioSrc, objUrl);
          return objUrl;
        }
      }
    } catch (e) {
      console.warn('Aviso al recuperar audio offline:', e);
    }

    return audioSrc;
  }
}

export const offlineAudio = new OfflineAudioManager();

if (typeof window !== 'undefined') {
  window.ResucitoOfflineAudio = offlineAudio;
}
