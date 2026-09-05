import { onAuthStateChanged, loginMock, logoutMock, isCurrentUserAdmin, isAuthInitialized } from './auth.js';
import { hasPermission } from './accesscontrol.js';

(function () {
  // Evitar inyecciones duplicadas
  if (document.getElementById('nav-wrapper')) return;

  // Lógica para PWA: Guardar el prompt de instalación
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    console.log('📥 PWA: beforeinstallprompt guardado.');
    const installBtn = document.getElementById('installButton');
    if (installBtn) {
      installBtn.style.opacity = '1';
      installBtn.style.pointerEvents = 'auto';
    }
  });

  window.addEventListener('appinstalled', (e) => {
    console.log('🎉 PWA: La aplicación fue instalada con éxito.');
    window.deferredPrompt = null;
    const installBtn = document.getElementById('installButton');
    if (installBtn) {
      installBtn.style.opacity = '0.5';
      installBtn.style.pointerEvents = 'none';
    }
  });

  const appVersion = window.APP_VERSION || localStorage.getItem('resucito_installed_version') || '2.1.00';

  // 1. Estructura HTML del navegador
  const navHTML = `
    <div id="nav-wrapper">
      <div id="nav-toggle" title="Ocultar / Mostrar Navegación">
        <span class="material-symbols-outlined arrow-icon" id="toggle-icon">keyboard_arrow_down</span>
      </div>

      <!-- Card Popup de Cuenta (Estilo Google Account) -->
      <div id="account-popup-card" class="account-popup-card hidden">
        <div class="account-popup-header">
          <span class="account-user-email" id="account-popup-email">usuario@gmail.com</span>
          <button class="account-popup-close-btn" id="account-popup-close" title="Cerrar">&times;</button>
        </div>

        <div class="account-popup-profile">
          <div class="account-avatar-wrapper">
            <img id="account-popup-img" src="/img/christ.png" alt="Perfil" class="account-avatar-img">
            <div class="account-camera-badge" title="Cambiar foto">
              <span class="material-symbols-outlined">photo_camera</span>
            </div>
          </div>
          <h3 class="account-greeting" id="account-popup-greeting">¡Hola, Usuario!</h3>
          <button class="account-manage-btn" id="account-popup-manage">
            Administrar tu Cuenta de <span style="font-weight: 700;">Resucitó</span>
          </button>
        </div>

        <div class="account-popup-actions-wrapper">
          <div class="account-toggle-row" id="account-popup-toggle-header">
            <span id="account-toggle-text">Ocultar</span>
            <span class="material-symbols-outlined" id="account-toggle-icon">expand_less</span>
          </div>

          <div class="account-actions-list" id="account-actions-list">
            <button class="account-action-item" id="account-action-preparar">
              <span class="material-symbols-outlined">add</span>
              <span>Preparar Cantos</span>
            </button>

            <button class="account-action-item" id="account-action-perfil">
              <span class="material-symbols-outlined">badge</span>
              <span>Perfil Cuenta</span>
            </button>

            <button class="account-action-item" id="account-action-bitacora">
              <span class="material-symbols-outlined">history</span>
              <span>Bitácora de Actividad</span>
            </button>

            <button class="account-action-item" id="account-action-actualizar">
              <span class="material-symbols-outlined">system_update</span>
              <span>Actualizar App</span>
            </button>
          </div>

          <div class="account-actions-logout">
            <button class="account-action-item" id="account-action-logout">
              <span class="material-symbols-outlined">logout</span>
              <span>Salir de la cuenta</span>
            </button>
          </div>
        </div>

        <div class="account-popup-footer">
          <a href="#" class="account-footer-link">Política de Privacidad</a>
          <span class="account-footer-dot">•</span>
          <a href="#" id="account-info-app-link" class="account-footer-link">Info de la App</a>
        </div>
      </div>

      <div class="nav-bottom-bar" id="main-navbar">
        <div class="nav-version-display ver">
          v${appVersion}
        </div>

        <button class="nav-item" id="btn-nav-inicio" title="Ir al Inicio">
          <span class="material-symbols-outlined arrow-icon">home</span>
          <span>Inicio</span>
        </button>

        <button class="nav-item" id="btn-nav-menu">
          <span class="material-symbols-outlined arrow-icon">menu</span>
          <span>Menú</span>
          <div class="nav-submenu" id="nav-submenu">
            <a href="https://www.youtube.com/@CristoJesusReydereyes" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">youtube_activity</span> YouTube</a>
            <a href="https://www.facebook.com/groups/721999947892692" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">communities</span> Facebook</a>
            <a href="https://dbaezh78.github.io/ev/" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">book_2</span> Evangelio del Día</a>
            <a href="https://dbaezh78.github.io/salterios/" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">prayer_times</span> Laudes</a>
            <a href="https://biblia.resucito.do/" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">book_2</span> Biblia de Jerusalén</a>
          </div>
        </button>

        <button class="nav-item" id="btn-nav-neocate">
          <span class="material-symbols-outlined arrow-icon">church</span>
          <span>NeoCate</span>
          <div class="nav-submenu" id="nav-submenu-neocate">
            <a href="https://neocatechumenaleiter.org/noticias/" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">newspaper</span> Noticias</a>
            <a href="https://app.resucito.es/home" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">library_music</span> Cantos del Camino</a>
            <a href="https://www.facebook.com/groups/323608705177419" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">groups</span> Comunidades</a>
            <a href="https://www.facebook.com/cantordelcaminoneocatecumenal" target="_blank" rel="noopener"><span class="material-symbols-outlined arrow-icon">record_voice_over</span> Cantores</a>
            
            <a href="https://carmenhernandez.org/" target="_blank" rel="noopener"> 
              <img src="/img/carmen_hernandez.jpg" alt="Carmen Hernández" class="img-perfil-link">
              <span>Carmen Hernández</span>
            </a>

            <a href="https://neocatechumenaleiter.org/historia/kiko-arguello/" target="_blank" rel="noopener"> 
              <img src="/img/kiko_arguello.jpg" alt="Kiko Argüello" class="img-perfil-link">
              <span>Kiko Argüello</span>
            </a>

            <a href="https://neocatechumenaleiter.org/historia/mario-pezzi/" target="_blank" rel="noopener">
              <img src="/img/mariopezzi.jpg" alt="P. Mario Pezzi" class="img-perfil-link">
              <span>P. Mario Pezzi</span>
            </a>
            
            <a href="https://neocatechumenaleiter.org/historia/maria-ascension/" target="_blank" rel="noopener">
              <img src="/img/maria_ascension.jpg" alt="Maria Ascension" class="img-perfil-link">
              <span>Maria Ascension</span>
            </a>
          </div>
        </button>

        <button class="nav-item" id="btn-nav-resucito">
          <span class="material-symbols-outlined arrow-icon">menu_book</span>
          <span>Resucitó</span>
          <div class="nav-submenu" id="nav-submenu-resucito">
            <a href="#" id="nav-resucito-camino"><span class="material-symbols-outlined arrow-icon">home</span> Inicio</a>
            <a href="perfil.html" id="nav-resucito-perfil"><span class="material-symbols-outlined arrow-icon">person</span> Perfil</a>
            <a href="preparar.html" id="nav-resucito-preparar"><span class="material-symbols-outlined arrow-icon">playlist_add</span>Preparar Cantos</a>
            <a href="bitacora.html" id="nav-resucito-bitacora"><span class="material-symbols-outlined arrow-icon">history</span> Bitácora</a>
            <a href="/src/html/intro.html" id="nav-resucito-intro"><span class="material-symbols-outlined arrow-icon">menu_book</span> Introducción</a>
            <a href="https://docs.resucito.do/resucito.pdf" target="_blank" id="nav-resucito-pdf"><span class="material-symbols-outlined arrow-icon">menu_book</span> Resucitó PDF</a>
            <a href="#" id="installButton"><span class="material-symbols-outlined arrow-icon">download_for_offline</span>Instalar App</a>
          </div>
        </button>

        <button class="nav-item" id="btn-open-settings" title="Ajustes y Configuración">
          <span class="material-symbols-outlined arrow-icon">settings</span>
          <span>Ajustes</span>
        </button>

        <a id="nav-google-auth" class="nav-item">
          <span class="material-symbols-outlined arrow-icon" id="nav-auth-icon">account_circle</span>
          <span id="nav-auth-text">Entrar</span>
        </a>
      </div>
    </div>
  `;

  // 2. Estructura HTML del Modal Info de la App (directo en body)
  const infoModalHTML = `
    <div id="app-info-modal" style="display: none;">
      <div class="settings-modal-content" style="max-width: 480px; width: 92%; padding: 20px; border-radius: 20px;">
        <div class="settings-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--panel-border); padding-bottom: 12px; margin-bottom: 16px;">
          <h3 style="margin: 0; display: flex; align-items: center; gap: 8px; font-size: 1.15rem;">
            <span class="material-symbols-outlined" style="color: var(--accent-color, #d01212);">info</span> Info de la App
          </h3>
          <button class="modal-close-btn" id="close-app-info-modal" style="background: transparent; border: none; font-size: 1.4rem; cursor: pointer; color: var(--text-color);">&times;</button>
        </div>
        <div class="settings-body" style="padding: 4px; color: var(--text-color);">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="/img/logo_cantos.png" alt="Resucitó" style="width: 68px; height: 68px; border-radius: 16px; margin-bottom: 8px; box-shadow: var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.15));">
            <h2 style="margin: 4px 0 2px 0; font-size: 1.35rem;">Resucitó</h2>
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${appVersion}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${appVersion} (Versión Actual)</strong>
              <small style="color: var(--text-muted); font-size: 0.75rem;">2026</small>
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.83rem; color: var(--text-color); line-height: 1.5;">
              <li>Nueva barra de navegación inferior interactiva con accesos directos.</li>
              <li>Personalización completa de colores normales y efectos al pasar el puntero.</li>
              <li>Panel de cuenta emergente al estilo Google Account con control de sesión.</li>
              <li>Preparar Cantos y opción de Actualizar la Aplicación.</li>
              <li>Ajustes avanzados, transposición de acordes y cejilla dinámica.</li>
            </ul>
          </div>

          <div class="version-log-item" style="background: rgba(0,0,0,0.02); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="font-size: 0.9rem;">v1.0 (Versión Inicial)</strong>
              <small style="color: var(--text-muted); font-size: 0.75rem;">Histórico</small>
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.83rem; color: var(--text-color); line-height: 1.5;">
              <li>Índice digital del Libro de Cantos por etapas.</li>
              <li>Búsqueda rápida por título y número de página.</li>
              <li>Reproductor de audio demostrativo integrado.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  // 3. Estructura HTML del Modal Universal de Consulta / Confirmación
  const customConfirmModalHTML = `
    <div id="custom-confirm-modal" style="display: none;">
      <div class="settings-modal-content" style="max-width: 360px; width: 88%; padding: 24px; border-radius: 24px; text-align: center;">
        <div id="custom-confirm-badge" style="width: 56px; height: 56px; border-radius: 50%; background: rgba(208, 18, 18, 0.1); color: var(--accent-color, #d01212); display: flex; align-items: center; justify-content: center; margin: 0 auto 14px auto;">
          <span class="material-symbols-outlined" id="custom-confirm-icon" style="font-size: 32px;">help_outline</span>
        </div>
        <h3 id="custom-confirm-title" style="margin: 0 0 8px 0; font-size: 1.25rem; color: var(--text-color);">Confirmar</h3>
        <p id="custom-confirm-message" style="margin: 0 0 22px 0; font-size: 0.95rem; color: var(--text-muted, #666); line-height: 1.4; white-space: pre-line;">
          ¿Estás seguro?
        </p>

        <div style="display: flex; justify-content: center; gap: 14px;">
          <button id="custom-confirm-btn-si" style="flex: 1; padding: 10px 20px; border-radius: 25px; border: none; background: var(--accent-color, #d01212); color: #ffffff; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: transform 0.15s, background 0.2s;">
            Sí
          </button>
          <button id="custom-confirm-btn-no" style="flex: 1; padding: 10px 20px; border-radius: 25px; border: 1.5px solid var(--panel-border, #ccc); background: transparent; color: var(--text-color, #333); font-weight: 600; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
            No
          </button>
        </div>
      </div>
    </div>
  `;

  // 4. Estructura HTML del Modal Universal de Progreso
  const customProgressModalHTML = `
    <div id="custom-progress-modal" style="display: none;">
      <div class="settings-modal-content" style="max-width: 360px; width: 88%; padding: 28px 24px; border-radius: 24px; text-align: center;">
        <div id="custom-progress-badge" style="width: 60px; height: 60px; border-radius: 50%; background: rgba(40, 167, 69, 0.12); color: #28a745; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto;">
          <span class="material-symbols-outlined spin-icon" id="custom-progress-icon" style="font-size: 34px;">sync</span>
        </div>
        <h3 id="custom-progress-title" style="margin: 0 0 8px 0; font-size: 1.25rem; color: var(--text-color);">Actualizando App</h3>
        <p id="custom-progress-message" style="margin: 0 0 16px 0; font-size: 0.95rem; color: var(--text-muted, #666); line-height: 1.4;">
          Actualizando la aplicación a la última versión...
        </p>

        <!-- Barra de Progreso Verde -->
        <div class="green-progress-bar-container">
          <div id="custom-progress-bar-fill" class="green-progress-bar-fill"></div>
        </div>
      </div>
    </div>
  `;

  // Función Global reutilizable para mostrar cualquier consulta con diseño redondo
  window.mostrarConfirmacion = function ({
    titulo = 'Confirmar',
    mensaje = '¿Estás seguro?',
    icono = 'help_outline',
    textoSi = 'Sí',
    textoNo = 'No',
    onConfirm = null,
    onCancel = null,
    iconoColor = null,
    iconoBg = null
  } = {}) {
    const modal = document.getElementById('custom-confirm-modal');
    const titleEl = document.getElementById('custom-confirm-title');
    const messageEl = document.getElementById('custom-confirm-message');
    const iconEl = document.getElementById('custom-confirm-icon');
    const badgeEl = document.getElementById('custom-confirm-badge');
    const btnSi = document.getElementById('custom-confirm-btn-si');
    const btnNo = document.getElementById('custom-confirm-btn-no');

    if (!modal || !titleEl || !messageEl || !iconEl || !btnSi || !btnNo) return;

    titleEl.innerText = titulo;
    messageEl.innerText = mensaje;
    iconEl.innerText = icono;
    btnSi.innerText = textoSi;
    btnNo.innerText = textoNo;

    // Configurar colores personalizados del badge si se especifican
    if (badgeEl) {
      if (iconoColor) badgeEl.style.color = iconoColor;
      else badgeEl.style.color = 'var(--accent-color, #d01212)';
      if (iconoBg) badgeEl.style.background = iconoBg;
      else badgeEl.style.background = 'rgba(208, 18, 18, 0.1)';
    }

    // Si textoNo es vacío, mostramos como Alerta (1 botón)
    if (textoNo === '') {
      btnNo.style.display = 'none';
      btnSi.style.flex = 'none';
      btnSi.style.padding = '10px 32px';
    } else {
      btnNo.style.display = 'block';
      btnSi.style.flex = '1';
      btnSi.style.padding = '10px 20px';
    }

    const handleSi = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.style.display = 'none';
      cleanup();
      if (onConfirm) await onConfirm();
    };

    const handleNo = (e) => {
      e.preventDefault();
      e.stopPropagation();
      modal.style.display = 'none';
      cleanup();
      if (onCancel) onCancel();
    };

    const cleanup = () => {
      btnSi.removeEventListener('click', handleSi);
      btnNo.removeEventListener('click', handleNo);
    };

    btnSi.addEventListener('click', handleSi);
    btnNo.addEventListener('click', handleNo);

    modal.style.display = 'flex';
  };

  // Función de atajo global para mostrar Alertas (1 solo botón Aceptar)
  window.mostrarAlerta = function ({
    titulo = 'Aviso',
    mensaje = '',
    icono = 'warning',
    textoBoton = 'Aceptar',
    iconoColor = null,
    iconoBg = null,
    onClose = null
  } = {}) {
    window.mostrarConfirmacion({
      titulo,
      mensaje,
      icono,
      textoSi: textoBoton,
      textoNo: '',
      iconoColor,
      iconoBg,
      onConfirm: onClose,
      onCancel: onClose
    });
  };

  // Función Global para mostrar ventana de progreso estilizada (sin alert nativo)
  window.mostrarProgreso = function ({
    titulo = 'Procesando...',
    mensaje = 'Por favor espere un momento...',
    icono = 'sync',
    porcentaje = null
  } = {}) {
    const modal = document.getElementById('custom-progress-modal');
    const titleEl = document.getElementById('custom-progress-title');
    const messageEl = document.getElementById('custom-progress-message');
    const iconEl = document.getElementById('custom-progress-icon');
    const fillEl = document.getElementById('custom-progress-bar-fill');

    if (modal && titleEl && messageEl && iconEl) {
      titleEl.innerText = titulo;
      messageEl.innerText = mensaje;
      iconEl.innerText = icono;

      if (fillEl) {
        if (typeof porcentaje === 'number') {
          fillEl.style.animation = 'none';
          fillEl.style.left = '0';
          fillEl.style.width = `${porcentaje}%`;
        } else {
          fillEl.style.animation = 'greenProgressIndeterminate 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite';
        }
      }

      modal.style.display = 'flex';
    }
  };

  window.ocultarProgreso = function () {
    const modal = document.getElementById('custom-progress-modal');
    if (modal) modal.style.display = 'none';
  };

  const injectNav = () => {
    if (!document.getElementById('nav-wrapper')) {
      document.body.insertAdjacentHTML('beforeend', navHTML);
    }
    if (!document.getElementById('app-info-modal')) {
      document.body.insertAdjacentHTML('beforeend', infoModalHTML);
    }
    if (!document.getElementById('custom-confirm-modal')) {
      document.body.insertAdjacentHTML('beforeend', customConfirmModalHTML);
    }
    if (!document.getElementById('custom-progress-modal')) {
      document.body.insertAdjacentHTML('beforeend', customProgressModalHTML);
    }
    setupNavListeners();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  function setupNavListeners() {
    // 2. Lógica del Botón Toggle (Flecha ocultar/mostrar)
    const toggleBtn = document.getElementById('nav-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleNavbar);
    }

    // 3. Lógica del botón Inicio & opción Camino
    const resetToInicio = (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-submenu').forEach(m => m.classList.remove('active'));
      const accountCard = document.getElementById('account-popup-card');
      if (accountCard) accountCard.classList.add('hidden');

      if (window.location.pathname.includes('perfil.html') || !document.getElementById('dashboard-view')) {
        window.location.href = './';
        return;
      }

      const dashboardView = document.getElementById('dashboard-view');
      const songView = document.getElementById('song-viewer-view');
      if (dashboardView && songView) {
        songView.style.display = 'none';
        dashboardView.style.display = 'block';
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const btnInicio = document.getElementById('btn-nav-inicio');
    if (btnInicio) btnInicio.addEventListener('click', resetToInicio);

    const linkCamino = document.getElementById('nav-resucito-camino');
    if (linkCamino) linkCamino.addEventListener('click', resetToInicio);

    // 4. Lógica de Submenús (desplegar / ocultar)
    const setupSubmenu = (btnId, menuId) => {
      const btn = document.getElementById(btnId);
      const menu = document.getElementById(menuId);
      if (btn && menu) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const accountCard = document.getElementById('account-popup-card');
          if (accountCard) accountCard.classList.add('hidden');

          document.querySelectorAll('.nav-submenu').forEach((m) => {
            if (m !== menu) m.classList.remove('active');
          });
          menu.classList.toggle('active');
        });
      }
    };

    setupSubmenu('btn-nav-menu', 'nav-submenu');
    setupSubmenu('btn-nav-neocate', 'nav-submenu-neocate');
    setupSubmenu('btn-nav-resucito', 'nav-submenu-resucito');

    // 5. Lógica del botón Ajustes -> Abrir el Modal de Ajustes V2
    const btnOpenSettings = document.getElementById('btn-open-settings');
    if (btnOpenSettings) {
      btnOpenSettings.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const accountCard = document.getElementById('account-popup-card');
        if (accountCard) accountCard.classList.add('hidden');

        if (typeof window.abrirModalConfiguracion === 'function') {
          window.abrirModalConfiguracion();
        } else {
          import('./js/ajustes.js').then(() => {
            if (typeof window.abrirModalConfiguracion === 'function') {
              window.abrirModalConfiguracion();
            } else {
              const modal = document.getElementById('settings-modal');
              if (modal) modal.style.display = 'flex';
            }
          }).catch(err => {
            console.warn("No se pudo cargar ajustes in-situ:", err);
            window.location.href = './index.html#ajustes';
          });
        }
      });
    }

    // 6. Lógica del Pop-up de Cuenta Google
    const accountCard = document.getElementById('account-popup-card');
    const closeAccountBtn = document.getElementById('account-popup-close');
    const toggleHeader = document.getElementById('account-popup-toggle-header');
    const actionsList = document.getElementById('account-actions-list');
    const toggleText = document.getElementById('account-toggle-text');
    const toggleIcon = document.getElementById('account-toggle-icon');

    if (closeAccountBtn && accountCard) {
      closeAccountBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        accountCard.classList.add('hidden');
      });
    }

    if (toggleHeader && actionsList && toggleText && toggleIcon) {
      toggleHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        const isCollapsed = actionsList.classList.contains('collapsed');
        if (isCollapsed) {
          actionsList.classList.remove('collapsed');
          toggleText.innerText = 'Ocultar';
          toggleIcon.innerText = 'expand_less';
        } else {
          actionsList.classList.add('collapsed');
          toggleText.innerText = 'Mostrar';
          toggleIcon.innerText = 'expand_more';
        }
      });
    }

    // Botones dentro del Pop-up de Cuenta
    const manageBtn = document.getElementById('account-popup-manage');
    const perfilBtn = document.getElementById('account-action-perfil');
    const prepararBtn = document.getElementById('account-action-preparar');
    const actualizarBtn = document.getElementById('account-action-actualizar');
    const logoutBtn = document.getElementById('account-action-logout');
    const infoAppLink = document.getElementById('account-info-app-link');
    const appInfoModal = document.getElementById('app-info-modal');
    const closeAppInfoModal = document.getElementById('close-app-info-modal');

    const goToPerfil = (e) => {
      e.stopPropagation();
      window.location.href = '/perfil.html';
    };

    if (manageBtn) manageBtn.addEventListener('click', goToPerfil);
    if (perfilBtn) perfilBtn.addEventListener('click', goToPerfil);

    if (prepararBtn) {
      prepararBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'preparar.html';
      });
    }

    const bitacoraBtn = document.getElementById('account-action-bitacora');
    if (bitacoraBtn) {
      bitacoraBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'bitacora.html';
      });
    }

    // Botón para Actualizar App -> Ventana de Progreso Redonda
    if (actualizarBtn) {
      actualizarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        ejecutarProcesoActualizacion();
      });
    }

    // Modal de confirmación para Salir de la Cuenta (Cerrar Sesión)
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (accountCard) accountCard.classList.add('hidden');

        window.mostrarConfirmacion({
          titulo: 'Cerrar Sesión',
          mensaje: '¿Desea cerrar sesión de su cuenta?',
          icono: 'logout',
          textoSi: 'Sí',
          textoNo: 'No',
          onConfirm: async () => {
            if (window.firebaseAPI?.logout) await window.firebaseAPI.logout();
            else logoutMock();
          }
        });
      });
    }

    if (infoAppLink && appInfoModal) {
      infoAppLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (accountCard) accountCard.classList.add('hidden');
        appInfoModal.style.display = 'flex';
      });
    }

    if (closeAppInfoModal && appInfoModal) {
      closeAppInfoModal.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        appInfoModal.style.display = 'none';
      });
    }

    // --- Sistema de Detección y Descarga de Actualizaciones ---
    const ejecutarProcesoActualizacion = () => {
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

      if (accountCard) accountCard.classList.add('hidden');
      if (appInfoModal) appInfoModal.style.display = 'none';

      const versionNueva = window._latestRemoteVersion || 'Nueva versión';
      const versionActual = appVersion || '2.0';

      window.mostrarConfirmacion({
        titulo: 'Actualizar Aplicación',
        mensaje: `¿Desea actualizar de la versión v${versionActual} a la v${versionNueva}? Sus datos personales y cantos se conservarán intactos.`,
        icono: 'system_update',
        textoSi: 'Sí, Actualizar',
        textoNo: 'Cancelar',
        onConfirm: async () => {
          // Lista de archivos críticos que se van a verificar/descargar con barra de progreso
          const archivosAActualizar = [
            'version.json',
            'sw.js',
            'index.html',
            'src/main.js',
            'src/navegador.js',
            'src/navegador.css',
            'src/style.css',
            'data/songs-index.json',
            'data/ajustes_modal.html'
          ];

          let completados = 0;
          const total = archivosAActualizar.length;

          window.mostrarProgreso({
            titulo: 'Actualizando App',
            mensaje: `Comparando v${versionActual} ➔ v${versionNueva}\nIniciando descarga de archivos...`,
            icono: 'sync',
            porcentaje: 5
          });

          // 1. Descarga de archivos centrales de la app
          for (const archivo of archivosAActualizar) {
            try {
              await fetch(archivo + '?t=' + Date.now(), { cache: 'reload' });
            } catch (err) {
              console.warn(`Aviso al descargar ${archivo}:`, err);
            }

            completados++;
            const pct = Math.round((completados / total) * 40); // 40% para archivos centrales
            window.mostrarProgreso({
              titulo: 'Actualizando Sistema',
              mensaje: `Descargando: ${archivo} (${completados}/${total})`,
              icono: 'download',
              porcentaje: pct
            });

            await new Promise(r => setTimeout(r, 60));
          }

          // 2. FASE FINAL: Cargar absolutamente todos los recursos y cantos faltantes con el motor de Ajustes
          try {
            window.mostrarProgreso({
              titulo: 'Sincronizando Todo el Cancionero',
              mensaje: 'Analizando y descargando todos los recursos faltantes...',
              icono: 'cloud_sync',
              porcentaje: 35
            });

            if (typeof window.cargarTodosLosRecursosFaltantes === 'function') {
              await window.cargarTodosLosRecursosFaltantes((prog) => {
                const globalPct = 35 + Math.round((prog.percent / 100) * 60); // Escala de 35% a 95%
                window.mostrarProgreso({
                  titulo: 'Descargando Recursos Faltantes',
                  mensaje: `${prog.status || ''} (${prog.current || 0}/${prog.total || 0})`,
                  icono: 'download',
                  porcentaje: globalPct
                });
              });
            } else {
              // Fallback directo con los cantos
              const keys = await caches.keys();
              const cacheName = keys.find(k => k.startsWith('resucito-cache-')) || 'resucito-cache-v311';
              const cache = await caches.open(cacheName);
              const indexRes = await fetch('data/songs-index.json?t=' + Date.now());
              if (indexRes.ok) {
                const songs = await indexRes.clone().json();
                await cache.put('data/songs-index.json', indexRes);
                for (let i = 0; i < songs.length; i += 10) {
                  const slice = songs.slice(i, i + 10);
                  await Promise.all(slice.map(async s => {
                    const folder = (s.id && s.id.startsWith('aet')) ? 'data/songs-ae' : 'data/songs';
                    const u = `${folder}/${s.id}.json?offline=true`;
                    try {
                      const cr = await fetch(u);
                      if (cr.ok) await cache.put(u, cr);
                    } catch(e) {}
                  }));
                }
              }
            }
          } catch (errRecursos) {
            console.warn('Aviso en fase de sincronización de recursos:', errRecursos);
          }

          // 3. Notificar al Service Worker para tomar los archivos nuevos
          if ('serviceWorker' in navigator) {
            try {
              const reg = await navigator.serviceWorker.getRegistration();
              if (reg) {
                if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
                await reg.update();
              }
            } catch (err) {}
          }

          // 4. Guardar registro de la versión instalada para que se actualice la vista
          if (window._latestRemoteVersion) {
            localStorage.setItem('resucito_installed_version', window._latestRemoteVersion);
          }

          window.mostrarProgreso({
            titulo: '¡Actualización Lista!',
            mensaje: `Todo el contenido y la versión v${versionNueva} están listos. Reiniciando...`,
            icono: 'check_circle',
            porcentaje: 100
          });

          setTimeout(() => {
            window.location.reload();
          }, 900);
        }
      });
    };

    // Función auxiliar para comparar versiones del formato X.Y.ZZ (ej. 2.1.01 vs 2.1.00)
    function esVersionSuperior(versionRemota, versionLocal) {
      if (!versionRemota || !versionLocal) return false;
      const partesR = String(versionRemota).replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
      const partesL = String(versionLocal).replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);

      const maxLen = Math.max(partesR.length, partesL.length);
      for (let i = 0; i < maxLen; i++) {
        const vr = partesR[i] || 0;
        const vl = partesL[i] || 0;
        if (vr > vl) return true;
        if (vr < vl) return false;
      }
      return false;
    }

    // Comprobar remotamente si hay una nueva versión (vía version.json)
    async function checkRemoteVersionForUpdates() {
      try {
        const fetchUrl = (window.location.origin || '') + '/version.json?t=' + Date.now();
        console.log('🔍 Comprobando versión remota en:', fetchUrl);
        const res = await fetch(fetchUrl, { cache: 'no-store' });
        if (!res.ok) {
          console.warn('⚠️ No se pudo obtener version.json, status:', res.status);
          return;
        }
        const info = await res.json();
        console.log('📦 Info de versión recibida:', info, 'Versión local instalada:', appVersion);
        
        if (info && info.latestVersion && esVersionSuperior(info.latestVersion, appVersion)) {
          console.log(`✨ ¡Nueva versión detectada!: v${info.latestVersion} (Actual: v${appVersion})`);
          window._latestRemoteVersion = info.latestVersion;

          // Destacar el botón "Actualizar App" DENTRO del menú Cuenta con la marca y el halo dorado/verde
          if (actualizarBtn) {
            actualizarBtn.classList.add('has-update-ready');
            actualizarBtn.innerHTML = `
              <div class="account-update-halo-ring" title="¡Nueva versión disponible v${info.latestVersion}!"></div>
              <span style="font-weight: 700; color: #00e676;">Actualizar App</span>
              <span class="account-update-badge-pill">v${info.latestVersion}</span>
            `;
          }

          // Activar placa destacada dentro de "Info de la App"
          const appInfoBody = document.querySelector('#app-info-modal .settings-body');
          if (appInfoBody && !document.getElementById('app-update-live-card')) {
            const updateCard = document.createElement('div');
            updateCard.id = 'app-update-live-card';
            updateCard.className = 'app-update-badge-container';
            updateCard.style.cssText = 'margin-bottom: 20px; background: rgba(0,0,0,0.04); padding: 16px; border-radius: 18px; border: 1px solid rgba(255, 215, 0, 0.4);';
            updateCard.innerHTML = `
              <div class="app-update-badge-ring" id="btn-ring-update-modal" title="Pulsar para actualizar">
                <div class="app-update-badge-inner">
                  <span class="ver-txt">v${info.latestVersion}</span>
                </div>
              </div>
              <button type="button" class="app-update-banner-btn" id="btn-banner-update-modal">
                <span class="material-symbols-outlined" style="font-size: 1.2rem;">upgrade</span>
                Actualiza a v${info.latestVersion}
              </button>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
                Versión actual: v${appVersion} ➔ Nueva: v${info.latestVersion}
              </div>
            `;
            
            const logoSec = appInfoBody.firstElementChild;
            if (logoSec) {
              logoSec.insertAdjacentElement('afterend', updateCard);
            } else {
              appInfoBody.prepend(updateCard);
            }

            document.getElementById('btn-ring-update-modal')?.addEventListener('click', ejecutarProcesoActualizacion);
            document.getElementById('btn-banner-update-modal')?.addEventListener('click', ejecutarProcesoActualizacion);
          }
        }
      } catch (err) {
        console.warn('No se pudo verificar actualización remota:', err);
      }
    }

    // Ejecutar la comprobación tras cargar el navegador
    setTimeout(checkRemoteVersionForUpdates, 1500);



    // Cierre de ventanas al hacer clic fuera
    document.addEventListener('click', (e) => {
      document.querySelectorAll('.nav-submenu').forEach((m) => m.classList.remove('active'));
      const btnAuth = document.getElementById('nav-google-auth');
      const confirmModal = document.getElementById('custom-confirm-modal');
      if (accountCard && !accountCard.contains(e.target) && (!btnAuth || !btnAuth.contains(e.target))) {
        accountCard.classList.add('hidden');
      }
      if (appInfoModal && e.target === appInfoModal) {
        appInfoModal.style.display = 'none';
      }
      if (confirmModal && e.target === confirmModal) {
        confirmModal.style.display = 'none';
      }
    });

    // 7. Lógica de Autenticación Firebase
    const updateAuthUI = (user) => {
      const icon = document.getElementById('nav-auth-icon');
      const text = document.getElementById('nav-auth-text');
      const btnAuth = document.getElementById('nav-google-auth');
      const card = document.getElementById('account-popup-card');
      const emailEl = document.getElementById('account-popup-email');
      const greetingEl = document.getElementById('account-popup-greeting');
      const imgEl = document.getElementById('account-popup-img');

      if (!btnAuth || !icon || !text) return;

      if (user) {
        // Datos del modal de cuenta
        if (emailEl) emailEl.innerText = user.email || 'usuario@gmail.com';
        if (greetingEl) {
          greetingEl.innerText = `¡Hola, ${user.displayName || 'Usuario'}!`;
        }
        if (imgEl && user.photoURL) {
          imgEl.src = user.photoURL;
        }

        // Actualizar el botón de la barra inferior
        icon.innerHTML = user.photoURL
          ? `<img src="${user.photoURL}" class="dbperfil">`
          : `<span class="material-symbols-outlined arrow-icon">person</span>`;
        text.innerText = 'Cuenta';

        btnAuth.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          document.querySelectorAll('.nav-submenu').forEach((m) => m.classList.remove('active'));
          if (card) card.classList.toggle('hidden');
        };
      } else {
        icon.innerHTML = `<span class="material-symbols-outlined arrow-icon">account_circle</span>`;
        text.innerText = 'Entrar';

        if (card) card.classList.add('hidden');

        btnAuth.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          // Verificar que el usuario no esté realmente autenticado antes de abrir la ventana de login
          const activeUser = window.firebaseAPI?.getCurrentUser?.();
          if (activeUser) {
            updateAuthUI(activeUser);
            if (card) card.classList.remove('hidden');
            return;
          }
          if (window.firebaseAPI?.login) window.firebaseAPI.login();
          else loginMock();
        };
      }
    };

    // Control de visibilidad de páginas según Permisos (Ajustes: Páginas)
    function updateNavPagesVisibility() {
      const isAdmin = isCurrentUserAdmin();

      const canInicio = isAdmin || hasPermission('page_inicio');
      const canPerfil = isAdmin || hasPermission('page_perfil');
      const canPreparar = isAdmin || hasPermission('page_preparar');
      const canBitacora = isAdmin || hasPermission('page_bitacora');
      const canIntro = isAdmin || hasPermission('page_introduccion');
      const canPdf = isAdmin || hasPermission('page_resucito_pdf');
      const canInstalar = isAdmin || hasPermission('page_instalar_app');

      // Botón Inicio en barra inferior
      const btnInicio = document.getElementById('btn-nav-inicio');
      if (btnInicio) btnInicio.style.display = canInicio ? 'flex' : 'none';

      // Enlaces en Submenú Resucitó
      const navResucitoCamino = document.getElementById('nav-resucito-camino');
      const navResucitoPerfil = document.getElementById('nav-resucito-perfil');
      const navResucitoPreparar = document.getElementById('nav-resucito-preparar');
      const navResucitoBitacora = document.getElementById('nav-resucito-bitacora');
      const navResucitoIntro = document.getElementById('nav-resucito-intro');
      const navResucitoPdf = document.getElementById('nav-resucito-pdf');
      const navResucitoInstalar = document.getElementById('installButton');

      if (navResucitoCamino) navResucitoCamino.style.display = canInicio ? 'flex' : 'none';
      if (navResucitoPerfil) navResucitoPerfil.style.display = canPerfil ? 'flex' : 'none';
      if (navResucitoPreparar) navResucitoPreparar.style.display = canPreparar ? 'flex' : 'none';
      if (navResucitoBitacora) navResucitoBitacora.style.display = canBitacora ? 'flex' : 'none';
      if (navResucitoIntro) navResucitoIntro.style.display = canIntro ? 'flex' : 'none';
      if (navResucitoPdf) navResucitoPdf.style.display = canPdf ? 'flex' : 'none';
      if (navResucitoInstalar) navResucitoInstalar.style.display = canInstalar ? 'flex' : 'none';

      // Acciones en Popup de Cuenta
      const accountActionPreparar = document.getElementById('account-action-preparar');
      const accountActionPerfil = document.getElementById('account-action-perfil');
      const accountActionBitacora = document.getElementById('account-action-bitacora');
      const accountPopupManage = document.getElementById('account-popup-manage');

      if (accountActionPreparar) accountActionPreparar.style.display = canPreparar ? 'flex' : 'none';
      if (accountActionPerfil) accountActionPerfil.style.display = canPerfil ? 'flex' : 'none';
      if (accountActionBitacora) accountActionBitacora.style.display = canBitacora ? 'flex' : 'none';
      if (accountPopupManage) accountPopupManage.style.display = canPerfil ? 'block' : 'none';

      // Verificar si la página actual tiene permiso o debe redirigir al inicio
      checkCurrentPagePermissionAndRedirect();
    }

    function checkCurrentPagePermissionAndRedirect() {
      // Si Firebase Auth aún no ha resuelto la sesión, no redirigir prematuramente
      if (!isAuthInitialized()) return;

      const pathname = window.location.pathname.toLowerCase();
      const isAdmin = isCurrentUserAdmin();
      if (isAdmin) return;

      if (pathname.includes('perfil.html') && !hasPermission('page_perfil')) {
        console.warn("Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...");
        window.location.replace('./index.html');
      } else if (pathname.includes('preparar.html') && !hasPermission('page_preparar')) {
        console.warn("Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...");
        window.location.replace('./index.html');
      } else if (pathname.includes('bitacora.html') && !hasPermission('page_bitacora')) {
        console.warn("Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...");
        window.location.replace('./index.html');
      } else if (pathname.includes('intro.html') && !hasPermission('page_introduccion')) {
        console.warn("Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...");
        window.location.replace('/index.html');
      }
    }

    window.updateNavPagesVisibility = updateNavPagesVisibility;
    window.checkCurrentPagePermissionAndRedirect = checkCurrentPagePermissionAndRedirect;

    // Ejecución inicial para renderizar botones de navegación
    updateNavPagesVisibility();

    onAuthStateChanged((user) => {
      updateAuthUI(user);
      updateNavPagesVisibility();
    });

    // Lógica del botón de instalar PWA
    const installBtn = document.getElementById('installButton');
    if (installBtn) {
      if (!window.deferredPrompt) {
        installBtn.style.opacity = '0.85';
      }
      installBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Cerrar submenús abiertos al hacer clic
        document.querySelectorAll('.nav-submenu').forEach((m) => m.classList.remove('active'));

        const promptEvent = window.deferredPrompt;
        if (promptEvent) {
          promptEvent.prompt();
          const { outcome } = await promptEvent.userChoice;
          console.log(`PWA: Elección del usuario para instalar: ${outcome}`);
          window.deferredPrompt = null;
          
          if (outcome === 'accepted') {
            installBtn.style.opacity = '0.5';
            installBtn.style.pointerEvents = 'none';
          }
        } else {
          // Si no está disponible el prompt (ya está instalada o navegador de Apple / no compatible)
          if (window.mostrarAlerta) {
            window.mostrarAlerta({
              titulo: 'Instalar Aplicación',
              mensaje: 'Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").',
              icono: 'download_for_offline'
            });
          } else {
            alert('Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").');
          }
        }
      });
    }

    // Aplicar tema de colores del navegador
    applyNavTheme();
  }

  // 8. Función de Toggle para el Wrapper
  function toggleNavbar() {
    const wrapper = document.getElementById('nav-wrapper');
    const icon = document.getElementById('toggle-icon');
    if (wrapper) wrapper.classList.toggle('hidden');
    if (icon) icon.classList.toggle('rotate-180');
  }
  window.toggleNavbar = toggleNavbar;

  // 9. Ocultamiento automático opcional
  let autoHideTimer;
  function startAutoHideTimer() {
    const isEnabled = localStorage.getItem('pref-autohide-nav') === 'true';
    if (!isEnabled) {
      if (autoHideTimer) clearTimeout(autoHideTimer);
      return;
    }

    clearTimeout(autoHideTimer);
    autoHideTimer = setTimeout(() => {
      const wrapper = document.getElementById('nav-wrapper');
      if (wrapper && !wrapper.classList.contains('hidden')) {
        window.toggleNavbar();
      }
    }, 30000);
  }
  window.startAutoHideTimer = startAutoHideTimer;

  document.addEventListener('mousemove', startAutoHideTimer);
  document.addEventListener('touchstart', startAutoHideTimer);
  document.addEventListener('scroll', startAutoHideTimer);

  // 10. Aplicar Tema de Colores del Navegador
  function applyNavTheme() {
    const textColor = localStorage.getItem('nav-color-text');
    const textHoverColor = localStorage.getItem('nav-color-text-hover');
    const bgColor = localStorage.getItem('nav-color-bg');
    const bgHoverColor = localStorage.getItem('nav-color-bg-hover');
    const btnBgColor = localStorage.getItem('nav-color-btn-bg');
    const btnHoverBgColor = localStorage.getItem('nav-color-btn-bg-hover') || localStorage.getItem('nav-color-btn-hover-bg');
    const iconColor = localStorage.getItem('nav-color-icon');
    const iconHoverColor = localStorage.getItem('nav-color-icon-hover');
    const submenuIconColor = localStorage.getItem('nav-color-submenu-icon');
    const submenuIconHoverColor = localStorage.getItem('nav-color-submenu-icon-hover');
    const wrapperBgColor = localStorage.getItem('nav-color-wrapper-bg');
    const wrapperHoverBgColor = localStorage.getItem('nav-color-wrapper-bg-hover') || localStorage.getItem('nav-color-wrapper-hover-bg');

    const root = document.documentElement;

    if (textColor) root.style.setProperty('--nav-text-color', textColor);
    else root.style.removeProperty('--nav-text-color');

    if (textHoverColor) root.style.setProperty('--nav-text-hover-color', textHoverColor);
    else root.style.removeProperty('--nav-text-hover-color');

    if (bgColor) root.style.setProperty('--nav-bg-color', bgColor);
    else root.style.removeProperty('--nav-bg-color');

    if (bgHoverColor) root.style.setProperty('--nav-bg-hover-color', bgHoverColor);
    else root.style.removeProperty('--nav-bg-hover-color');

    if (btnBgColor) root.style.setProperty('--nav-btn-bg', btnBgColor);
    else root.style.removeProperty('--nav-btn-bg');

    if (btnHoverBgColor) root.style.setProperty('--nav-btn-hover-bg', btnHoverBgColor);
    else root.style.removeProperty('--nav-btn-hover-bg');

    if (iconColor) root.style.setProperty('--nav-icon-color', iconColor);
    else root.style.removeProperty('--nav-icon-color');

    if (iconHoverColor) root.style.setProperty('--nav-icon-hover-color', iconHoverColor);
    else root.style.removeProperty('--nav-icon-hover-color');

    if (submenuIconColor) root.style.setProperty('--nav-submenu-icon-color', submenuIconColor);
    else root.style.removeProperty('--nav-submenu-icon-color');

    if (submenuIconHoverColor) root.style.setProperty('--nav-submenu-icon-hover-color', submenuIconHoverColor);
    else root.style.removeProperty('--nav-submenu-icon-hover-color');

    if (wrapperBgColor) root.style.setProperty('--nav-wrapper-bg', wrapperBgColor);
    else root.style.removeProperty('--nav-wrapper-bg');

    if (wrapperHoverBgColor) root.style.setProperty('--nav-wrapper-hover-bg', wrapperHoverBgColor);
    else root.style.removeProperty('--nav-wrapper-hover-bg');
  }

  window.applyNavTheme = applyNavTheme;
})();
