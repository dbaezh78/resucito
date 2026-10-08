const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-Bgh8CwVv.js","./firebase-BqMPn9fH.js","./preload-helper-C0Gjw8uP.js"])))=>i.map(i=>d[i]);
import{h as e,i as t,l as n,r,s as i}from"./firebase-BqMPn9fH.js";import{c as a,f as o,i as s,l as c,m as l,p as u,t as d,u as f}from"./preload-helper-C0Gjw8uP.js";(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let p=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`;window._hasAppUpdateAvailable=!1;let m=`
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

            <button class="account-action-item" id="account-action-chat">
              <span class="material-symbols-outlined">chat</span>
              <span style="flex: 1;">Asistencia y Chat</span>
              <span id="badge-chat-account-popup" class="badge-unread-chat-popup" style="display: none; background-color: #25d366; color: #000000; font-size: 0.75rem; font-weight: 900; min-width: 20px; height: 20px; line-height: 20px; border-radius: 9999px; padding: 0 6px; align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.35); margin-left: auto; flex-shrink: 0; border: 1.5px solid #ffffff; box-sizing: border-box;">0</span>
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
          <a href="privacidad.html" class="account-footer-link">Política de Privacidad</a>
          <span class="account-footer-dot">•</span>
          <a href="#" id="account-info-app-link" class="account-footer-link">Info de la App</a>
        </div>
      </div>

      <div class="nav-bottom-bar" id="main-navbar">
        <div class="nav-version-display ver">
          v${p}
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
            <a href="parroquia.html" id="nav-resucito-parroquia"><span class="material-symbols-outlined arrow-icon">church</span> Cantos Eucaristía</a>
            <a href="datosparroquia.html" id="nav-resucito-datosparroquia" style="display: none;"><span class="material-symbols-outlined arrow-icon">edit_location_alt</span> Formulario Parroquia</a>
            <a href="bitacora.html" id="nav-resucito-bitacora"><span class="material-symbols-outlined arrow-icon">history</span> Bitácora</a>
            <a href="/src/html/intro.html" id="nav-resucito-intro"><span class="material-symbols-outlined arrow-icon">menu_book</span> Introducción</a>
            <a href="https://docs.resucito.do/resucito.pdf" target="_blank" id="nav-resucito-pdf"><span class="material-symbols-outlined arrow-icon">menu_book</span> Resucitó PDF</a>
            <a href="mantcantos.html" id="nav-resucito-mantcantos"><span class="material-symbols-outlined arrow-icon">build</span> Mantenimiento</a>
            <a href="respaldo.html" id="nav-resucito-respaldo"><span class="material-symbols-outlined arrow-icon">archive</span> Respaldo</a>
            <a href="chat.html" id="nav-resucito-chat"><span class="material-symbols-outlined arrow-icon">chat</span> <span style="flex: 1;">Asistencia y Chat</span><span id="badge-chat-nav-submenu" class="badge-unread-chat-popup" style="display: none; margin-left: auto; background-color: #25d366; color: #000000; font-size: 0.75rem; font-weight: 900; min-width: 20px; height: 20px; line-height: 20px; border-radius: 9999px; padding: 0 6px; align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.35); flex-shrink: 0; border: 1.5px solid #ffffff; box-sizing: border-box;">0</span></a>
            <a href="privacidad.html" id="nav-resucito-privacidad"><span class="material-symbols-outlined arrow-icon">policy</span> Política de Privacidad</a>
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
          <span id="badge-chat-nav-cuenta" class="badge-unread-chat-nav" style="display: none; position: absolute; top: -4px; right: calc(50% - 28px); background-color: #25d366; color: #000000; font-size: 0.72rem; font-weight: 900; min-width: 18px; height: 18px; line-height: 18px; border-radius: 9999px; align-items: center; justify-content: center; padding: 0 4px; box-shadow: 0 2px 6px rgba(0,0,0,0.4); pointer-events: none; z-index: 10; border: 1.5px solid #ffffff; box-sizing: border-box;">0</span>
        </a>
      </div>
    </div>
  `,h=`
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
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${p}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${p} (Versión Actual)</strong>
              <small style="color: var(--text-muted); font-size: 0.75rem;">2026</small>
            </div>
            <ul style="margin: 0; padding-left: 18px; font-size: 0.83rem; color: var(--text-color); line-height: 1.5;">
              <li>Aviso emergente interactivo estilo chat con campanilla armónica para nuevas versiones.</li>
              <li>Indicador badge con "1" en color azul en Cuenta para actualizaciones disponibles.</li>
              <li>Sincronización de lectura y contadores de chat perfeccionada.</li>
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
  `;window.mostrarConfirmacion=function({titulo:e=`Confirmar`,mensaje:t=`¿Estás seguro?`,icono:n=`help_outline`,textoSi:r=`Sí`,textoNo:i=`No`,onConfirm:a=null,onCancel:o=null,iconoColor:s=null,iconoBg:c=null}={}){let l=document.getElementById(`custom-confirm-modal`),u=document.getElementById(`custom-confirm-title`),d=document.getElementById(`custom-confirm-message`),f=document.getElementById(`custom-confirm-icon`),p=document.getElementById(`custom-confirm-badge`),m=document.getElementById(`custom-confirm-btn-si`),h=document.getElementById(`custom-confirm-btn-no`);if(!l||!u||!d||!f||!m||!h)return;u.innerText=e,d.innerText=t,f.innerText=n,m.innerText=r,h.innerText=i,p&&(s?p.style.color=s:p.style.color=`var(--accent-color, #d01212)`,c?p.style.background=c:p.style.background=`rgba(208, 18, 18, 0.1)`),i===``?(h.style.display=`none`,m.style.flex=`none`,m.style.padding=`10px 32px`):(h.style.display=`block`,m.style.flex=`1`,m.style.padding=`10px 20px`);let g=async e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),a&&await a()},_=e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),o&&o()},v=()=>{m.removeEventListener(`click`,g),h.removeEventListener(`click`,_)};m.addEventListener(`click`,g),h.addEventListener(`click`,_),l.style.display=`flex`},window.mostrarAlerta=function({titulo:e=`Aviso`,mensaje:t=``,icono:n=`warning`,textoBoton:r=`Aceptar`,iconoColor:i=null,iconoBg:a=null,onClose:o=null}={}){window.mostrarConfirmacion({titulo:e,mensaje:t,icono:n,textoSi:r,textoNo:``,iconoColor:i,iconoBg:a,onConfirm:o,onCancel:o})},window.mostrarProgreso=function({titulo:e=`Procesando...`,mensaje:t=`Por favor espere un momento...`,icono:n=`sync`,porcentaje:r=null}={}){let i=document.getElementById(`custom-progress-modal`),a=document.getElementById(`custom-progress-title`),o=document.getElementById(`custom-progress-message`),s=document.getElementById(`custom-progress-icon`),c=document.getElementById(`custom-progress-bar-fill`);i&&a&&o&&s&&(a.innerText=e,o.innerText=t,s.innerText=n,n===`sync`?(s.classList.add(`spin-icon`),s.style.animation=`spin 1.5s linear infinite`):(s.classList.remove(`spin-icon`),s.style.animation=`none`),c&&(typeof r==`number`?(c.style.animation=`none`,c.style.left=`0`,c.style.width=`${r}%`):c.style.animation=`greenProgressIndeterminate 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`),i.style.display=`flex`)},window.ocultarProgreso=function(){let e=document.getElementById(`custom-progress-modal`);e&&(e.style.display=`none`)};let g=()=>{if(!document.getElementById(`chat-badges-style`)){let e=document.createElement(`style`);e.id=`chat-badges-style`,e.textContent=`
        .badge-unread-chat-nav {
          position: absolute !important;
          top: -4px !important;
          right: calc(50% - 28px) !important;
          background-color: #25d366 !important;
          color: #000000 !important;
          font-size: 0.72rem !important;
          font-weight: 900 !important;
          min-width: 18px !important;
          height: 18px !important;
          line-height: 18px !important;
          border-radius: 9999px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 4px !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4) !important;
          pointer-events: none !important;
          z-index: 10 !important;
          border: 1.5px solid #ffffff !important;
          box-sizing: border-box !important;
          animation: wa-badge-pop 0.25s ease-out !important;
        }
        .badge-unread-chat-popup {
          background-color: #25d366 !important;
          color: #000000 !important;
          font-size: 0.75rem !important;
          font-weight: 900 !important;
          min-width: 20px !important;
          height: 20px !important;
          line-height: 20px !important;
          border-radius: 9999px !important;
          padding: 0 6px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35) !important;
          margin-left: auto !important;
          flex-shrink: 0 !important;
          border: 1.5px solid #ffffff !important;
          box-sizing: border-box !important;
          animation: wa-badge-pop 0.25s ease-out !important;
        }
        @keyframes wa-badge-pop {
          0% { transform: scale(0.6); opacity: 0; }
          80% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
      `,document.head.appendChild(e)}document.getElementById(`nav-wrapper`)||document.body.insertAdjacentHTML(`beforeend`,m),document.getElementById(`app-info-modal`)||document.body.insertAdjacentHTML(`beforeend`,h),document.getElementById(`custom-confirm-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),document.getElementById(`custom-progress-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),_()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g):g();function _(){let m=document.getElementById(`nav-toggle`);m&&m.addEventListener(`click`,v);let h=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},g=document.getElementById(`btn-nav-inicio`);g&&g.addEventListener(`click`,h);let _=document.getElementById(`nav-resucito-camino`);_&&_.addEventListener(`click`,h);let y=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&n.addEventListener(`click`,e=>{e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)})};y(`btn-nav-menu`,`nav-submenu`),y(`btn-nav-neocate`,`nav-submenu-neocate`),y(`btn-nav-resucito`,`nav-submenu-resucito`);let b=document.getElementById(`btn-open-settings`);b&&b.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():d(()=>import(`./ajustes-Bgh8CwVv.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1,2]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let S=document.getElementById(`account-popup-card`),C=document.getElementById(`account-popup-close`),w=document.getElementById(`account-popup-toggle-header`),T=document.getElementById(`account-actions-list`),E=document.getElementById(`account-toggle-text`),D=document.getElementById(`account-toggle-icon`);C&&S&&C.addEventListener(`click`,e=>{e.stopPropagation(),S.classList.add(`hidden`)}),w&&T&&E&&D&&w.addEventListener(`click`,e=>{e.stopPropagation(),T.classList.contains(`collapsed`)?(T.classList.remove(`collapsed`),E.innerText=`Ocultar`,D.innerText=`expand_less`):(T.classList.add(`collapsed`),E.innerText=`Mostrar`,D.innerText=`expand_more`)});let O=document.getElementById(`account-popup-manage`),k=document.getElementById(`account-action-perfil`),A=document.getElementById(`account-action-preparar`),j=document.getElementById(`account-action-actualizar`),M=document.getElementById(`account-action-logout`),N=document.getElementById(`account-info-app-link`),P=document.getElementById(`app-info-modal`),F=document.getElementById(`close-app-info-modal`),I=window.location.pathname.includes(`/src/`),L=e=>{e.stopPropagation(),window.location.href=I?`../perfil.html`:`perfil.html`};O&&O.addEventListener(`click`,L),k&&k.addEventListener(`click`,L),A&&A.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../preparar.html`:`preparar.html`});let R=document.getElementById(`account-action-bitacora`);R&&R.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../bitacora.html`:`bitacora.html`}),j&&j.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),B()});let z=document.getElementById(`account-action-chat`);z&&z.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.location.href=I?`../chat.html`:`chat.html`}),M&&M.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():u()}})}),N&&P&&N.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),P.style.display=`flex`}),F&&P&&F.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),P.style.display=`none`});let B=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}S&&S.classList.add(`hidden`),P&&(P.style.display=`none`);let e=window._latestRemoteVersion||`Nueva versión`,t=p||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${t} a la v${e}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let n=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=n.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${t} ➔ v${e}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let e of n){try{await fetch(e+`?t=`+Date.now(),{cache:`reload`})}catch(t){console.warn(`Aviso al descargar ${e}:`,t)}r++;let t=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${e} (${r}/${i})`,icono:`sync`,porcentaje:t}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`sync`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v311`,t=await caches.open(e),n=await fetch(`data/songs-index.json?t=`+Date.now());if(n.ok){let e=await n.clone().json();await t.put(`data/songs-index.json`,n);for(let n=0;n<e.length;n+=10){let r=e.slice(n,n+10);await Promise.all(r.map(async e=>{let n=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(n);e.ok&&await t.put(n,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${e} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function ee(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function te(){try{let e=(window.location.origin||``)+`/version.json?t=`+Date.now(),t=await fetch(e,{cache:`no-store`});if(!t.ok)return;let n=await t.json();if(n&&n.latestVersion&&ee(n.latestVersion,p)){window._latestRemoteVersion=n.latestVersion,window._hasAppUpdateAvailable=!0;let e=`resucito_update_notif_shown_`+n.latestVersion;sessionStorage.getItem(e)||(sessionStorage.setItem(e,`1`),Y(n.latestVersion)),typeof Q==`function`&&Q(),j&&(j.classList.add(`has-update-ready`),j.innerHTML=`
              <div class="account-update-halo-ring" title="¡Nueva versión disponible v${n.latestVersion}!"></div>
              <span style="font-weight: 700; color: #00e676;">Actualizar App</span>
              <span class="account-update-badge-pill">v${n.latestVersion}</span>
            `);let t=document.querySelector(`#app-info-modal .settings-body`);if(t&&!document.getElementById(`app-update-live-card`)){let e=document.createElement(`div`);e.id=`app-update-live-card`,e.className=`app-update-badge-container`,e.style.cssText=`margin-bottom: 20px; background: rgba(0,0,0,0.04); padding: 16px; border-radius: 18px; border: 1px solid rgba(255, 215, 0, 0.4);`,e.innerHTML=`
              <div class="app-update-badge-ring" id="btn-ring-update-modal" title="Pulsar para actualizar">
                <div class="app-update-badge-inner">
                  <span class="ver-txt">v${n.latestVersion}</span>
                </div>
              </div>
              <button type="button" class="app-update-banner-btn" id="btn-banner-update-modal">
                <span class="material-symbols-outlined" style="font-size: 1.2rem;">upgrade</span>
                Actualiza a v${n.latestVersion}
              </button>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
                Versión actual: v${p} ➔ Nueva: v${n.latestVersion}
              </div>
            `;let r=t.firstElementChild;r?r.insertAdjacentElement(`afterend`,e):t.prepend(e),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,B),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,B)}}else window._hasAppUpdateAvailable=!1,typeof Q==`function`&&Q()}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(te,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);S&&!S.contains(e.target)&&(!t||!t.contains(e.target))&&S.classList.add(`hidden`),P&&e.target===P&&(P.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let V=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),i=document.getElementById(`account-popup-card`),a=document.getElementById(`account-popup-email`),s=document.getElementById(`account-popup-greeting`),c=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(a&&(a.innerText=e.email||`usuario@gmail.com`),s&&(s.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),c&&e.photoURL&&(c.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i&&i.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,i&&i.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){V(t),i&&i.classList.remove(`hidden`);return}if(window._hasAppUpdateAvailable&&i){document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i.classList.toggle(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():o()}))};function H(){let e=f(),t=e||s(`page_inicio`),n=e||s(`page_perfil`),r=e||s(`page_preparar`),i=e||s(`page_bitacora`),o=e||s(`page_introduccion`),c=e||s(`page_resucito_pdf`),l=e||s(`page_instalar_app`),u=e||s(`page_mantcantos`),d=e||s(`page_respaldo`),p=a()||window.firebaseAPI?.getCurrentUser?.(),m=e||!!p&&s(`page_chat`),h=document.getElementById(`btn-nav-inicio`);h&&(h.style.display=t?`flex`:`none`);let g=document.getElementById(`nav-resucito-camino`),_=document.getElementById(`nav-resucito-perfil`),v=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-intro`),x=document.getElementById(`nav-resucito-pdf`),S=document.getElementById(`nav-resucito-mantcantos`),C=document.getElementById(`nav-resucito-datosparroquia`),w=document.getElementById(`nav-resucito-respaldo`),T=document.getElementById(`nav-resucito-chat`),E=document.getElementById(`installButton`);g&&(g.style.display=t?`flex`:`none`),_&&(_.style.display=n?`flex`:`none`),v&&(v.style.display=r?`flex`:`none`),y&&(y.style.display=i?`flex`:`none`),b&&(b.style.display=o?`flex`:`none`),x&&(x.style.display=c?`flex`:`none`),S&&(S.style.display=u?`flex`:`none`),C&&(C.style.display=e?`flex`:`none`),w&&(w.style.display=d?`flex`:`none`),T&&(T.style.display=m?`flex`:`none`),E&&(E.style.display=l?`flex`:`none`);let D=document.getElementById(`account-action-preparar`),O=document.getElementById(`account-action-perfil`),k=document.getElementById(`account-action-bitacora`),A=document.getElementById(`account-action-chat`),j=document.getElementById(`account-popup-manage`);D&&(D.style.display=r?`flex`:`none`),O&&(O.style.display=n?`flex`:`none`),k&&(k.style.display=i?`flex`:`none`),A&&(A.style.display=m?`flex`:`none`),j&&(j.style.display=n?`block`:`none`),U()}function U(){if(!c())return;let e=window.location.pathname.toLowerCase();f()||(e.includes(`perfil.html`)&&!s(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!s(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!s(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!s(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!s(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!s(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!s(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(a()||window.firebaseAPI?.getCurrentUser?.())||!s(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=H,window.checkCurrentPagePermissionAndRedirect=U,H();let W=null,G=0;function K(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function q(){return localStorage.getItem(`resucito_chat_notificaciones`)!==`false`}function J(){try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;t.state===`suspended`&&t.resume().catch(()=>{});let n=t.createOscillator(),r=t.createGain();n.type=`sine`,n.connect(r),r.connect(t.destination);let i=t.currentTime;n.frequency.setValueAtTime(587.33,i),n.frequency.setValueAtTime(880,i+.12),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.28,i+.03),r.gain.exponentialRampToValueAtTime(.001,i+.45),n.start(i),n.stop(i+.46)}catch{}}function ne(e,t){if(window.location.pathname.includes(`chat.html`))return;let n=document.getElementById(`resucito-chat-toast`);n||(n=document.createElement(`div`),n.id=`resucito-chat-toast`,n.style.cssText=`
          position: fixed;
          top: -85px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100000;
          background: #111b21;
          color: #ffffff;
          border: 1.5px solid #25d366;
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.55);
          cursor: pointer;
          transition: top 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          max-width: 90vw;
          min-width: 280px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        `,n.addEventListener(`click`,()=>{window.location.href=`chat.html`}),document.body.appendChild(n)),n.innerHTML=`
        <div style="background: #25d366; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <span class="material-symbols-outlined" style="color: #000; font-size: 20px;">chat</span>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; font-size: 0.85rem; color: #25d366; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${K(e||`Nuevo mensaje`)}
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${K(t||`Tienes un nuevo mensaje`)}
          </div>
        </div>
        <span class="material-symbols-outlined" style="color: #8696a0; font-size: 18px; margin-left: 6px;">chevron_right</span>
      `,n.style.top=`16px`,window._chatToastTimer&&clearTimeout(window._chatToastTimer),window._chatToastTimer=setTimeout(()=>{n.style.top=`-90px`},5e3)}function Y(e){let t=document.getElementById(`resucito-update-toast`);if(t||(t=document.createElement(`div`),t.id=`resucito-update-toast`,t.style.cssText=`
          position: fixed;
          top: -95px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100000;
          background: #111b21;
          color: #ffffff;
          border: 1.5px solid #007aff;
          border-radius: 14px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0, 122, 255, 0.45);
          cursor: pointer;
          transition: top 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          max-width: 90vw;
          min-width: 280px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        `,t.addEventListener(`click`,()=>{if(t.style.top=`-95px`,window.location.pathname.includes(`chat.html`)){window.location.href=`index.html?openAccount=1`;return}let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`),e.scrollIntoView({behavior:`smooth`,block:`nearest`}))}),document.body.appendChild(t)),t.innerHTML=`
        <div style="background: #007aff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0, 122, 255, 0.4);">
          <span class="material-symbols-outlined" style="color: #ffffff; font-size: 20px;">system_update</span>
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="font-weight: 700; font-size: 0.85rem; color: #007aff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            Actualización de la App (v${K(e)})
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            Toca aquí o entra a Cuenta ➔ Actualizar App
          </div>
        </div>
        <span class="material-symbols-outlined" style="color: #8696a0; font-size: 18px; margin-left: 6px;">chevron_right</span>
      `,J(),typeof Notification<`u`&&Notification.permission===`granted`)try{let t=new Notification(`🚀 Actualización de Resucitó (v`+e+`)`,{body:`Nueva versión disponible. Entra a Cuenta para actualizar la App.`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-update-notif`,renotify:!0});t.onclick=()=>{if(window.focus(),window.location.pathname.includes(`chat.html`)){window.location.href=`index.html?openAccount=1`;return}let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`)),t.close()}}catch{}t.style.top=`16px`,window._updateToastTimer&&clearTimeout(window._updateToastTimer),window._updateToastTimer=setTimeout(()=>{t.style.top=`-95px`},7e3)}window._mostrarBannerActualizacion=Y;function X(e,t){if(!(typeof Notification>`u`||Notification.permission!==`granted`))try{let n=new Notification(`💬 `+(e||`Resucitó Soporte`),{body:t||`Tienes un nuevo mensaje de chat`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-chat-msg`,renotify:!0});n.onclick=()=>{window.focus(),window.location.pathname.includes(`chat.html`)||(window.location.href=`chat.html`),n.close()}}catch{}}function Z(e,t){q()&&(J(),ne(e,t),X(e,t))}window._reproducirSonidoNotificacion=J,window._mostrarNotificacionNavegador=X,window._dispararNotificacionCompleta=Z,document.addEventListener(`click`,function e(){q()&&typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}),document.removeEventListener(`click`,e)},{once:!0});function Q(){let e=document.getElementById(`badge-chat-nav-cuenta`),t=document.getElementById(`badge-chat-account-popup`),n=document.getElementById(`badge-chat-nav-submenu`),r=q(),i=a()||window.firebaseAPI?.getCurrentUser?.(),o=window.location.pathname.includes(`chat.html`),s=r&&!o&&!!i&&G>0,c=G>99?`99+`:String(G),l=!!window._hasAppUpdateAvailable;e&&(s?(e.textContent=c,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#25d366`,`important`),e.style.setProperty(`color`,`#000000`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 0, 0, 0.4)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):l&&!o?(e.textContent=`1`,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#007aff`,`important`),e.style.setProperty(`color`,`#ffffff`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 122, 255, 0.55)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):e.style.setProperty(`display`,`none`,`important`)),t&&(s?(t.textContent=c,t.style.setProperty(`display`,`inline-flex`,`important`),t.style.setProperty(`background-color`,`#25d366`,`important`),t.style.setProperty(`color`,`#000000`,`important`),t.style.setProperty(`font-weight`,`900`,`important`),t.style.setProperty(`font-size`,`0.75rem`,`important`),t.style.setProperty(`min-width`,`20px`,`important`),t.style.setProperty(`height`,`20px`,`important`),t.style.setProperty(`line-height`,`20px`,`important`),t.style.setProperty(`border-radius`,`9999px`,`important`),t.style.setProperty(`padding`,`0 6px`,`important`),t.style.setProperty(`margin-left`,`auto`,`important`),t.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),t.style.setProperty(`box-sizing`,`border-box`,`important`),t.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),t.style.setProperty(`align-items`,`center`,`important`),t.style.setProperty(`justify-content`,`center`,`important`),t.style.setProperty(`flex-shrink`,`0`,`important`)):t.style.setProperty(`display`,`none`,`important`)),n&&(s?(n.textContent=c,n.style.setProperty(`display`,`inline-flex`,`important`),n.style.setProperty(`background-color`,`#25d366`,`important`),n.style.setProperty(`color`,`#000000`,`important`),n.style.setProperty(`font-weight`,`900`,`important`),n.style.setProperty(`font-size`,`0.75rem`,`important`),n.style.setProperty(`min-width`,`20px`,`important`),n.style.setProperty(`height`,`20px`,`important`),n.style.setProperty(`line-height`,`20px`,`important`),n.style.setProperty(`border-radius`,`9999px`,`important`),n.style.setProperty(`padding`,`0 6px`,`important`),n.style.setProperty(`margin-left`,`auto`,`important`),n.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),n.style.setProperty(`box-sizing`,`border-box`,`important`),n.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),n.style.setProperty(`align-items`,`center`,`important`),n.style.setProperty(`justify-content`,`center`,`important`),n.style.setProperty(`flex-shrink`,`0`,`important`)):n.style.setProperty(`display`,`none`,`important`))}function re(a){if(W&&=(W(),null),!a||!t){G=0,Q();return}let o=a.email&&a.email.toLowerCase().trim()===`dbaezh78@gmail.com`||f(),s=Date.now();if(o)try{W=e(r(t,`support_chats`),e=>{let t=0,n=a.email?a.email.toLowerCase().trim():``,r=new Map,i=null;e.forEach(e=>{let t=e.data();if(t&&typeof t.unreadAdmin==`number`&&t.unreadAdmin>0&&(t.lastSenderEmail?t.lastSenderEmail.toLowerCase().trim():``)!==n&&e.id!==a.uid&&e.id.toLowerCase()!==`dbaezh78_gmail_com`){let n=(t.userEmail||e.id).toLowerCase().trim(),a=r.get(n)||0;r.set(n,Math.max(a,t.unreadAdmin)),t.lastTimestamp&&t.lastTimestamp>s&&(!i||t.lastTimestamp>i.time)&&(i={remitente:t.userName||t.userEmail||`Hermano Cantor`,texto:t.lastMessage||`Nuevo mensaje recibido`,time:t.lastTimestamp})}}),i&&(s=i.time,Z(i.remitente,i.texto));for(let e of r.values())t+=e;G=t,Q()},e=>{console.warn(`Aviso escuchando chats admin:`,e)})}catch(e){console.warn(`Error inicializando listener chats admin:`,e)}else try{let n=a.email?a.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,r=a.email?a.email.toLowerCase().trim():``,o=0,s=0,c=!1,l=Date.now();function u(e,t,n){let i=0;e&&typeof e.unreadUser==`number`&&e.unreadUser>0&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==r&&(i=e.unreadUser),t===`uid`&&(o=i,n&&(c=!0)),t===`email`&&(s=i),G=c?o:s,Q(),e&&e.lastTimestamp&&e.lastTimestamp>l&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==r&&(l=e.lastTimestamp,Z(`Soporte Resucitó (Administrador)`,e.lastMessage||`Nuevo mensaje recibido`))}let d=e(i(t,`support_chats`,a.uid),e=>{u(e.exists()?e.data():null,`uid`,e.exists())},e=>{console.warn(`Aviso escuchando chat usuario por uid:`,e)}),f=null;n&&n!==a.uid&&(f=e(i(t,`support_chats`,n),e=>{u(e.exists()?e.data():null,`email`,e.exists())},()=>{})),W=()=>{d&&d(),f&&f()}}catch(e){console.warn(`Error inicializando listener chat usuario:`,e)}if(localStorage.getItem(`resucito_chat_notificaciones`)===null)try{n(i(t,`usuarios`,a.uid,`perfil`,`config`)).then(e=>{if(e&&e.exists()){let t=e.data();typeof t.chatNotificaciones==`boolean`&&(localStorage.setItem(`resucito_chat_notificaciones`,t.chatNotificaciones?`true`:`false`),Q())}}).catch(()=>{})}catch{}}window.addEventListener(`chat_notificaciones_changed`,()=>{Q()}),window.addEventListener(`storage`,e=>{e.key===`resucito_chat_notificaciones`&&Q()}),l(e=>{V(e),H(),re(e),Q()});let $=document.getElementById(`installButton`);$&&(window.deferredPrompt||($.style.opacity=`0.85`),$.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&($.style.opacity=`0.5`,$.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),I&&document.querySelectorAll(`#nav-submenu-resucito a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),window.location.search.includes(`openAccount=1`)&&setTimeout(()=>{let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`));try{let e=new URL(window.location.href);e.searchParams.delete(`openAccount`),window.history.replaceState({},``,e.pathname+(e.search?e.search:``)+e.hash)}catch{}},400),x()}function v(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=v;let y;function b(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){y&&clearTimeout(y);return}clearTimeout(y),y=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=b,document.addEventListener(`mousemove`,b),document.addEventListener(`touchstart`,b),document.addEventListener(`scroll`,b);function x(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=x})();