const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-ByWotMPG.js","./preload-helper-G5qyM6n5.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,T as n,_ as r,c as i,f as a,i as o,l as s,m as c,p as l,t as u,u as d,v as f,x as p}from"./preload-helper-G5qyM6n5.js";(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let e=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`,m=`
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
              <span id="badge-chat-account-popup" class="badge-unread-chat-popup" style="display: none;">0</span>
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
          v${e}
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
            <a href="chat.html" id="nav-resucito-chat"><span class="material-symbols-outlined arrow-icon">chat</span> <span style="flex: 1;">Asistencia y Chat</span><span id="badge-chat-nav-submenu" class="badge-unread-chat-popup" style="display: none; margin-left: auto;">0</span></a>
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
          <span id="badge-chat-nav-cuenta" class="badge-unread-chat-nav" style="display: none;">0</span>
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
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${e}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${e} (Versión Actual)</strong>
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
  `;window.mostrarConfirmacion=function({titulo:e=`Confirmar`,mensaje:t=`¿Estás seguro?`,icono:n=`help_outline`,textoSi:r=`Sí`,textoNo:i=`No`,onConfirm:a=null,onCancel:o=null,iconoColor:s=null,iconoBg:c=null}={}){let l=document.getElementById(`custom-confirm-modal`),u=document.getElementById(`custom-confirm-title`),d=document.getElementById(`custom-confirm-message`),f=document.getElementById(`custom-confirm-icon`),p=document.getElementById(`custom-confirm-badge`),m=document.getElementById(`custom-confirm-btn-si`),h=document.getElementById(`custom-confirm-btn-no`);if(!l||!u||!d||!f||!m||!h)return;u.innerText=e,d.innerText=t,f.innerText=n,m.innerText=r,h.innerText=i,p&&(s?p.style.color=s:p.style.color=`var(--accent-color, #d01212)`,c?p.style.background=c:p.style.background=`rgba(208, 18, 18, 0.1)`),i===``?(h.style.display=`none`,m.style.flex=`none`,m.style.padding=`10px 32px`):(h.style.display=`block`,m.style.flex=`1`,m.style.padding=`10px 20px`);let g=async e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),a&&await a()},_=e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),o&&o()},v=()=>{m.removeEventListener(`click`,g),h.removeEventListener(`click`,_)};m.addEventListener(`click`,g),h.addEventListener(`click`,_),l.style.display=`flex`},window.mostrarAlerta=function({titulo:e=`Aviso`,mensaje:t=``,icono:n=`warning`,textoBoton:r=`Aceptar`,iconoColor:i=null,iconoBg:a=null,onClose:o=null}={}){window.mostrarConfirmacion({titulo:e,mensaje:t,icono:n,textoSi:r,textoNo:``,iconoColor:i,iconoBg:a,onConfirm:o,onCancel:o})},window.mostrarProgreso=function({titulo:e=`Procesando...`,mensaje:t=`Por favor espere un momento...`,icono:n=`sync`,porcentaje:r=null}={}){let i=document.getElementById(`custom-progress-modal`),a=document.getElementById(`custom-progress-title`),o=document.getElementById(`custom-progress-message`),s=document.getElementById(`custom-progress-icon`),c=document.getElementById(`custom-progress-bar-fill`);i&&a&&o&&s&&(a.innerText=e,o.innerText=t,s.innerText=n,n===`sync`?(s.classList.add(`spin-icon`),s.style.animation=`spin 1.5s linear infinite`):(s.classList.remove(`spin-icon`),s.style.animation=`none`),c&&(typeof r==`number`?(c.style.animation=`none`,c.style.left=`0`,c.style.width=`${r}%`):c.style.animation=`greenProgressIndeterminate 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`),i.style.display=`flex`)},window.ocultarProgreso=function(){let e=document.getElementById(`custom-progress-modal`);e&&(e.style.display=`none`)};let g=()=>{document.getElementById(`nav-wrapper`)||document.body.insertAdjacentHTML(`beforeend`,m),document.getElementById(`app-info-modal`)||document.body.insertAdjacentHTML(`beforeend`,h),document.getElementById(`custom-confirm-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),_()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g):g();function _(){let m=document.getElementById(`nav-toggle`);m&&m.addEventListener(`click`,v);let h=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},g=document.getElementById(`btn-nav-inicio`);g&&g.addEventListener(`click`,h);let _=document.getElementById(`nav-resucito-camino`);_&&_.addEventListener(`click`,h);let y=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&n.addEventListener(`click`,e=>{e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)})};y(`btn-nav-menu`,`nav-submenu`),y(`btn-nav-neocate`,`nav-submenu-neocate`),y(`btn-nav-resucito`,`nav-submenu-resucito`);let b=document.getElementById(`btn-open-settings`);b&&b.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():u(()=>import(`./ajustes-ByWotMPG.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let S=document.getElementById(`account-popup-card`),C=document.getElementById(`account-popup-close`),w=document.getElementById(`account-popup-toggle-header`),T=document.getElementById(`account-actions-list`),E=document.getElementById(`account-toggle-text`),D=document.getElementById(`account-toggle-icon`);C&&S&&C.addEventListener(`click`,e=>{e.stopPropagation(),S.classList.add(`hidden`)}),w&&T&&E&&D&&w.addEventListener(`click`,e=>{e.stopPropagation(),T.classList.contains(`collapsed`)?(T.classList.remove(`collapsed`),E.innerText=`Ocultar`,D.innerText=`expand_less`):(T.classList.add(`collapsed`),E.innerText=`Mostrar`,D.innerText=`expand_more`)});let O=document.getElementById(`account-popup-manage`),k=document.getElementById(`account-action-perfil`),A=document.getElementById(`account-action-preparar`),j=document.getElementById(`account-action-actualizar`),M=document.getElementById(`account-action-logout`),N=document.getElementById(`account-info-app-link`),P=document.getElementById(`app-info-modal`),F=document.getElementById(`close-app-info-modal`),I=window.location.pathname.includes(`/src/`),L=e=>{e.stopPropagation(),window.location.href=I?`../perfil.html`:`perfil.html`};O&&O.addEventListener(`click`,L),k&&k.addEventListener(`click`,L),A&&A.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../preparar.html`:`preparar.html`});let R=document.getElementById(`account-action-bitacora`);R&&R.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../bitacora.html`:`bitacora.html`}),j&&j.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),B()});let z=document.getElementById(`account-action-chat`);z&&z.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.location.href=I?`../chat.html`:`chat.html`}),M&&M.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():l()}})}),N&&P&&N.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),P.style.display=`flex`}),F&&P&&F.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),P.style.display=`none`});let B=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}S&&S.classList.add(`hidden`),P&&(P.style.display=`none`);let t=window._latestRemoteVersion||`Nueva versión`,n=e||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${n} a la v${t}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let e=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=e.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${n} ➔ v${t}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let t of e){try{await fetch(t+`?t=`+Date.now(),{cache:`reload`})}catch(e){console.warn(`Aviso al descargar ${t}:`,e)}r++;let e=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${t} (${r}/${i})`,icono:`sync`,porcentaje:e}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`sync`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v311`,t=await caches.open(e),n=await fetch(`data/songs-index.json?t=`+Date.now());if(n.ok){let e=await n.clone().json();await t.put(`data/songs-index.json`,n);for(let n=0;n<e.length;n+=10){let r=e.slice(n,n+10);await Promise.all(r.map(async e=>{let n=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(n);e.ok&&await t.put(n,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${t} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function V(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function H(){try{let t=(window.location.origin||``)+`/version.json?t=`+Date.now();console.log(`🔍 Comprobando versión remota en:`,t);let n=await fetch(t,{cache:`no-store`});if(!n.ok){console.warn(`⚠️ No se pudo obtener version.json, status:`,n.status);return}let r=await n.json();if(console.log(`📦 Info de versión recibida:`,r,`Versión local instalada:`,e),r&&r.latestVersion&&V(r.latestVersion,e)){console.log(`✨ ¡Nueva versión detectada!: v${r.latestVersion} (Actual: v${e})`),window._latestRemoteVersion=r.latestVersion,j&&(j.classList.add(`has-update-ready`),j.innerHTML=`
              <div class="account-update-halo-ring" title="¡Nueva versión disponible v${r.latestVersion}!"></div>
              <span style="font-weight: 700; color: #00e676;">Actualizar App</span>
              <span class="account-update-badge-pill">v${r.latestVersion}</span>
            `);let t=document.querySelector(`#app-info-modal .settings-body`);if(t&&!document.getElementById(`app-update-live-card`)){let n=document.createElement(`div`);n.id=`app-update-live-card`,n.className=`app-update-badge-container`,n.style.cssText=`margin-bottom: 20px; background: rgba(0,0,0,0.04); padding: 16px; border-radius: 18px; border: 1px solid rgba(255, 215, 0, 0.4);`,n.innerHTML=`
              <div class="app-update-badge-ring" id="btn-ring-update-modal" title="Pulsar para actualizar">
                <div class="app-update-badge-inner">
                  <span class="ver-txt">v${r.latestVersion}</span>
                </div>
              </div>
              <button type="button" class="app-update-banner-btn" id="btn-banner-update-modal">
                <span class="material-symbols-outlined" style="font-size: 1.2rem;">upgrade</span>
                Actualiza a v${r.latestVersion}
              </button>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 6px;">
                Versión actual: v${e} ➔ Nueva: v${r.latestVersion}
              </div>
            `;let i=t.firstElementChild;i?i.insertAdjacentElement(`afterend`,n):t.prepend(n),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,B),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,B)}}}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(H,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);S&&!S.contains(e.target)&&(!t||!t.contains(e.target))&&S.classList.add(`hidden`),P&&e.target===P&&(P.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let U=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),i=document.getElementById(`account-popup-card`),o=document.getElementById(`account-popup-email`),s=document.getElementById(`account-popup-greeting`),c=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(o&&(o.innerText=e.email||`usuario@gmail.com`),s&&(s.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),c&&e.photoURL&&(c.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i&&i.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,i&&i.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){U(t),i&&i.classList.remove(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():a()}))};function W(){let e=d(),t=e||o(`page_inicio`),n=e||o(`page_perfil`),r=e||o(`page_preparar`),a=e||o(`page_bitacora`),s=e||o(`page_introduccion`),c=e||o(`page_resucito_pdf`),l=e||o(`page_instalar_app`),u=e||o(`page_mantcantos`),f=e||o(`page_respaldo`),p=i()||window.firebaseAPI?.getCurrentUser?.(),m=e||!!p&&o(`page_chat`),h=document.getElementById(`btn-nav-inicio`);h&&(h.style.display=t?`flex`:`none`);let g=document.getElementById(`nav-resucito-camino`),_=document.getElementById(`nav-resucito-perfil`),v=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-intro`),x=document.getElementById(`nav-resucito-pdf`),S=document.getElementById(`nav-resucito-mantcantos`),C=document.getElementById(`nav-resucito-datosparroquia`),w=document.getElementById(`nav-resucito-respaldo`),T=document.getElementById(`nav-resucito-chat`),E=document.getElementById(`installButton`);g&&(g.style.display=t?`flex`:`none`),_&&(_.style.display=n?`flex`:`none`),v&&(v.style.display=r?`flex`:`none`),y&&(y.style.display=a?`flex`:`none`),b&&(b.style.display=s?`flex`:`none`),x&&(x.style.display=c?`flex`:`none`),S&&(S.style.display=u?`flex`:`none`),C&&(C.style.display=e?`flex`:`none`),w&&(w.style.display=f?`flex`:`none`),T&&(T.style.display=m?`flex`:`none`),E&&(E.style.display=l?`flex`:`none`);let D=document.getElementById(`account-action-preparar`),O=document.getElementById(`account-action-perfil`),k=document.getElementById(`account-action-bitacora`),A=document.getElementById(`account-action-chat`),j=document.getElementById(`account-popup-manage`);D&&(D.style.display=r?`flex`:`none`),O&&(O.style.display=n?`flex`:`none`),k&&(k.style.display=a?`flex`:`none`),A&&(A.style.display=m?`flex`:`none`),j&&(j.style.display=n?`block`:`none`),G()}function G(){if(!s())return;let e=window.location.pathname.toLowerCase();d()||(e.includes(`perfil.html`)&&!o(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!o(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!o(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!o(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!o(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!o(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!o(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(i()||window.firebaseAPI?.getCurrentUser?.())||!o(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=W,window.checkCurrentPagePermissionAndRedirect=G,W();let K=null,q=0;function J(){return localStorage.getItem(`resucito_chat_notificaciones`)!==`false`}function Y(){let e=document.getElementById(`badge-chat-nav-cuenta`),t=document.getElementById(`badge-chat-account-popup`),n=document.getElementById(`badge-chat-nav-submenu`),r=J(),a=i()||window.firebaseAPI?.getCurrentUser?.(),o=window.location.pathname.includes(`chat.html`),s=r&&!o&&!!a&&q>0,c=q>99?`99+`:String(q);e&&(s?(e.textContent=c,e.style.display=`inline-flex`):e.style.display=`none`),t&&(s?(t.textContent=c,t.style.display=`inline-flex`):t.style.display=`none`),n&&(s?(n.textContent=c,n.style.display=`inline-flex`):n.style.display=`none`)}function X(e){if(K&&=(K(),null),!e||!f){q=0,Y();return}if(e.email&&e.email.toLowerCase().trim()===`dbaezh78@gmail.com`||d())try{K=n(r(f,`support_chats`),t=>{let n=0,r=e.email?e.email.toLowerCase().trim():``,i=new Map;t.forEach(e=>{let t=e.data();if(t&&typeof t.unreadAdmin==`number`&&t.unreadAdmin>0&&(t.lastSenderEmail?t.lastSenderEmail.toLowerCase().trim():``)!==r){let n=(t.userEmail||e.id).toLowerCase().trim(),r=i.get(n)||0;i.set(n,Math.max(r,t.unreadAdmin))}});for(let e of i.values())n+=e;q=n,Y()},e=>{console.warn(`Aviso escuchando chats admin:`,e)})}catch(e){console.warn(`Error inicializando listener chats admin:`,e)}else try{let t=e.email?e.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,r=e.email?e.email.toLowerCase().trim():``,i=0,a=0;function o(e,t){let n=0;e&&typeof e.unreadUser==`number`&&e.unreadUser>0&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==r&&(n=e.unreadUser),t===`uid`&&(i=n),t===`email`&&(a=n),q=Math.max(i,a),Y()}let s=n(p(f,`support_chats`,e.uid),e=>{o(e.exists()?e.data():null,`uid`)},e=>{console.warn(`Aviso escuchando chat usuario por uid:`,e)}),c=null;t&&t!==e.uid&&(c=n(p(f,`support_chats`,t),e=>{o(e.exists()?e.data():null,`email`)},()=>{})),K=()=>{s&&s(),c&&c()}}catch(e){console.warn(`Error inicializando listener chat usuario:`,e)}if(localStorage.getItem(`resucito_chat_notificaciones`)===null)try{t(p(f,`usuarios`,e.uid,`perfil`,`config`)).then(e=>{if(e&&e.exists()){let t=e.data();typeof t.chatNotificaciones==`boolean`&&(localStorage.setItem(`resucito_chat_notificaciones`,t.chatNotificaciones?`true`:`false`),Y())}}).catch(()=>{})}catch{}}window.addEventListener(`chat_notificaciones_changed`,()=>{Y()}),window.addEventListener(`storage`,e=>{e.key===`resucito_chat_notificaciones`&&Y()}),c(e=>{U(e),W(),X(e),Y()});let Z=document.getElementById(`installButton`);Z&&(window.deferredPrompt||(Z.style.opacity=`0.85`),Z.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&(Z.style.opacity=`0.5`,Z.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),I&&document.querySelectorAll(`#nav-submenu-resucito a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),x()}function v(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=v;let y;function b(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){y&&clearTimeout(y);return}clearTimeout(y),y=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=b,document.addEventListener(`mousemove`,b),document.addEventListener(`touchstart`,b),document.addEventListener(`scroll`,b);function x(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=x})();var m=`resucito_backups_history`;function h(){c(e=>{s()&&(d()||o(`page_respaldo`)||(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)))})}async function g(){try{let e=await fetch(`version.json?t=`+Date.now());if(e.ok){let t=await e.json();if(t.latestVersion){let e=`v`+t.latestVersion;return document.getElementById(`current-version-badge`).textContent=e,e}}}catch(e){console.warn(`No se pudo leer version.json:`,e)}return`v2.1.07`}var _=`ResucitoBackupDB`,v=1,y=`backups`;function b(){return new Promise((e,t)=>{let n=indexedDB.open(_,v);n.onupgradeneeded=e=>{let t=e.target.result;t.objectStoreNames.contains(y)||t.createObjectStore(y,{keyPath:`filename`})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function x(e,t){try{let n=(await b()).transaction(y,`readwrite`);return n.objectStore(y).put({filename:e.filename,blob:t,date:e.date,time:e.time,timestamp:e.timestamp,version:e.version,sizeBytes:e.sizeBytes,sizeFormatted:e.sizeFormatted,location:e.location||`C:\\db\\Github\\backup\\resucito\\Backup`}),new Promise((e,t)=>{n.oncomplete=()=>e(!0),n.onerror=()=>t(n.error)})}catch(e){console.warn(`No se pudo guardar blob en IndexedDB:`,e)}}async function S(e){try{let t=(await b()).transaction(y,`readonly`).objectStore(y).get(e);return new Promise((e,n)=>{t.onsuccess=()=>{t.result&&t.result.blob?e(t.result.blob):e(null)},t.onerror=()=>n(t.error)})}catch(e){return console.warn(`Error leyendo blob de IndexedDB:`,e),null}}async function C(e){try{(await b()).transaction(y,`readwrite`).objectStore(y).delete(e)}catch(e){console.warn(`Error eliminando de IndexedDB:`,e)}}function w(){try{let e=localStorage.getItem(m);if(e){let t=JSON.parse(e);if(Array.isArray(t))return t}}catch(e){console.warn(`Error al leer historial de respaldos:`,e)}return[]}function T(e){try{localStorage.setItem(m,JSON.stringify(e))}catch(e){console.warn(`Error al guardar historial de respaldos:`,e)}}async function E(e,t){let n=`C:\\db\\Github\\backup\\resucito\\Backup`;if(typeof window.showSaveFilePicker==`function`)try{let r=await(await window.showSaveFilePicker({suggestedName:t,types:[{description:`Archivo comprimido 7z / ZIP`,accept:{"application/x-7z-compressed":[`.7z`],"application/zip":[`.7z`,`.zip`]}}]})).createWritable();return await r.write(e),await r.close(),n=`C:\\db\\Github\\backup\\resucito\\Backup`,{success:!0,location:n}}catch(e){if(e.name===`AbortError`)return console.log(`El usuario cerró o canceló el selector de guardado.`),{success:!1,aborted:!0};console.warn(`showSaveFilePicker no completado, usando método de descarga estándar:`,e)}let r=URL.createObjectURL(e),i=document.createElement(`a`);return i.href=r,i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>URL.revokeObjectURL(r),6e4),{success:!0,location:n}}function D(){let e=document.getElementById(`backups-table-body`),t=w();if(!t||t.length===0){e.innerHTML=`
          <tr>
            <td colspan="7" class="empty-state">
              <span class="material-symbols-outlined">folder_open</span>
              No hay respaldos generados todavía. Haz clic en <strong>"Generar Respaldo Ahora"</strong> para crear el primero.
            </td>
          </tr>
        `;return}e.innerHTML=t.map((e,t)=>{let n=e.location||`C:\\db\\Github\\backup\\resucito\\Backup`;return`
        <tr>
          <td>
            <span class="file-pill">
              <span class="material-symbols-outlined" style="font-size: 1.15rem;">folder_zip</span>
              ${e.filename}
            </span>
          </td>
          <td>${e.date}</td>
          <td>${e.time}</td>
          <td><span class="badge-version">${e.version||`v2.1.07`}</span></td>
          <td><strong>${e.sizeFormatted||(e.sizeBytes/(1024*1024)).toFixed(2)+` MB`}</strong></td>
          <td>
            <span class="location-pill" title="${n}">
              <span class="material-symbols-outlined" style="font-size: 1rem; color: #0284c7;">folder</span>
              ${n}
            </span>
          </td>
          <td style="text-align: right;">
            <button class="btn-download" data-action="download-again" data-filename="${e.filename}">
              <span class="material-symbols-outlined" style="font-size: 1rem;">download</span>
              Descargar 7z
            </button>
            <button class="btn-delete" title="Eliminar del historial" data-action="delete-item" data-index="${t}" data-filename="${e.filename}">
              <span class="material-symbols-outlined" style="font-size: 1.05rem;">delete</span>
            </button>
          </td>
        </tr>
      `}).join(``),e.querySelectorAll(`button[data-action="download-again"]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.getAttribute(`data-filename`);e.disabled=!0;let n=e.innerHTML;e.innerHTML=`<span class="material-symbols-outlined spinner" style="font-size: 1rem;">sync</span> Preparando...`;try{let e=await S(t);e?await E(e,t):alert(`El archivo ${t} no se encuentra almacenado en la memoria local de este navegador. Haz clic en "Generar Respaldo Ahora" para obtener una copia actualizada.`)}catch(e){console.error(`Error al re-descargar:`,e),alert(`No se pudo completar la descarga: `+e.message)}finally{e.disabled=!1,e.innerHTML=n}})}),e.querySelectorAll(`button[data-action="delete-item"]`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=parseInt(e.getAttribute(`data-index`)),n=e.getAttribute(`data-filename`);if(confirm(`¿Deseas eliminar ${n} del historial de respaldos?`)){let e=w();e.splice(t,1),T(e),await C(n),D()}})})}async function O(){try{console.log(`🔥 Consultando Firestore: global_positions...`);let t=await e(r(f,`global_positions`)),n={};if(t&&!t.empty)return t.forEach(e=>{n[e.id]=e.data()}),console.log(`✅ [Firebase] ${Object.keys(n).length} posiciones obtenidas en vivo.`),n}catch(e){console.warn(`⚠️ No se pudo obtener posiciones en vivo de Firestore, usando archivo local:`,e)}return null}async function k(e,t=!1){try{let n=await fetch(e+(e.includes(`?`)?`&`:`?`)+`t=`+Date.now());return n.ok?t?await n.arrayBuffer():await n.text():null}catch{return null}}async function A(){let e=document.getElementById(`btn-generate-backup`),t=document.getElementById(`progress-box`),n=document.getElementById(`progress-status-text`),r=document.getElementById(`progress-subtext`),i=document.getElementById(`progress-fill-bar`);if(typeof JSZip>`u`){alert(`❌ Error: La librería de compresión JSZip no está cargada.`);return}try{e.disabled=!0,t.style.display=`block`,i&&(i.style.width=`10%`),n.innerHTML=`<span class="material-symbols-outlined spinner">sync</span> 1/5: Sincronizando acordes y posiciones desde Firebase...`,r.textContent=`Consultando colección global_positions...`;let a=await O();i&&(i.style.width=`25%`),n.innerHTML=`<span class="material-symbols-outlined spinner">sync</span> 2/5: Recopilando páginas, scripts y estilos del sistema...`,r.textContent=`Empaquetando estructura principal...`;let o=new JSZip;for(let e of`index.html,perfil.html,preparar.html,expancion.html,cliturgico.html,bitacora.html,mantcantos.html,respaldo.html,manifest.json,sw.js,version.json,CNAME,.nojekyll,ACTUALIZACIONES.md,CAMBIOS_2026-09-08.md,HOWTO.md,package.json,package-lock.json,vite.config.js,firestore.rules,favicon.svg,icons.svg,compile_data.cjs,copy_assets.cjs,update_index_chords.cjs,pull_positions.js,respaldar_posiciones.html,PositionChrordDown.bat,run bajar Position Acorde.bat,.well-known/assetlinks.json`.split(`,`)){let t=await k(e);t!==null&&o.file(e,t)}for(let e of[`src/main.js`,`src/style.css`,`src/navegador.js`,`src/navegador.css`,`src/sync.js`,`src/chords.js`,`src/auth.js`,`src/firebase.js`,`src/accesscontrol.js`,`src/canto.js`,`src/search.js`,`src/scroll.js`,`src/pwa.js`,`src/counter.js`,`src/songs-data.js`,`src/styleCanto.css`,`src/bitacora.css`,`src/bitacoraLogger.js`,`src/js/ajustes.js`,`src/js/bitacora.js`,`src/js/datos.js`,`src/js/perfil.js`,`src/js/preparar.js`,`src/lib/jszip.min.js`]){let t=await k(e);t!==null&&o.file(e,t)}for(let e of[`data/songs-index.json`,`data/catequesis.json`,`data/paises.json`,`data/ajustes_modal.html`]){let t=await k(e);t!==null&&o.file(e,t)}if(a&&Object.keys(a).length>0)o.file(`data/chord_positions.json`,JSON.stringify(a,null,2));else{let e=await k(`data/chord_positions.json`);e!==null&&o.file(`data/chord_positions.json`,e)}i&&(i.style.width=`45%`),n.innerHTML=`<span class="material-symbols-outlined spinner">sync</span> 3/5: Empaquetando cantos individuales (data/songs/)...`;let s=0;try{let e=await k(`data/songs-index.json`);if(e){let t=JSON.parse(e);if(Array.isArray(t)){let e=0;for(let n=0;n<t.length;n+=25){let i=t.slice(n,n+25);await Promise.all(i.map(async e=>{if(e&&e.id){let t=`data/songs/${e.id}.json`,n=await k(t);n!==null&&(o.file(t,n),s++)}})),e+=i.length,r.textContent=`Descargando cantos: ${e} de ${t.length}...`}}}}catch(e){console.warn(`Error leyendo data/songs-index.json para empaquetar cantos:`,e)}i&&(i.style.width=`65%`),n.innerHTML=`<span class="material-symbols-outlined spinner">sync</span> 4/5: Empaquetando carpetas completas (src/css, src/img, data/songs-ae, ima, img)...`,r.textContent=`Cargando lista de archivos del cancionero...`;try{let e=await k(`data/backup_all_files.json`);if(e){let t=JSON.parse(e);if(Array.isArray(t)){let e=0;for(let n=0;n<t.length;n+=30){let a=t.slice(n,n+30);await Promise.all(a.map(async t=>{let n=/\.(png|jpg|jpeg|gif|ico|ttf|woff|woff2|eot|webp)$/i.test(t),r=await k(t,n);r!==null&&(n?o.file(t,r,{binary:!0}):o.file(t,r),e++)}));let s=65+Math.round(e/t.length*25);i&&(i.style.width=`${s}%`),r.textContent=`Empaquetando recursos: ${e} de ${t.length}...`}console.log(`✅ Empaquetados ${e} archivos de carpetas requeridas.`)}}}catch(e){console.warn(`Error cargando data/backup_all_files.json:`,e)}for(let e of[`fonts/framd.ttf`,`fonts/framdit.ttf`]){let t=await k(e,!0);t!==null&&o.file(e,t,{binary:!0})}i&&(i.style.width=`90%`),n.innerHTML=`<span class="material-symbols-outlined spinner">sync</span> 5/5: Comprimiendo archivo de respaldo...`,r.textContent=`Generando compresión 7z...`;let c=await o.generateAsync({type:`blob`,compression:`DEFLATE`,compressionOptions:{level:9}});i&&(i.style.width=`100%`);let l=new Date,u=String(l.getDate()).padStart(2,`0`),d=String(l.getMonth()+1).padStart(2,`0`),f=String(l.getFullYear()).slice(-2),p=String(l.getHours()).padStart(2,`0`),m=String(l.getMinutes()).padStart(2,`0`),h=`resucito_${`${u}${d}${f}${`${p}${m}`}`}.7z`,_=await g(),v=c.size,y=(v/(1024*1024)).toFixed(2)+` MB`,b=await E(c,h),S=b&&b.location?b.location:`C:\\db\\Github\\backup\\resucito\\Backup`,C={filename:h,date:`${u}/${d}/${l.getFullYear()}`,time:`${p}:${m}`,timestamp:l.getTime(),version:_,sizeBytes:v,sizeFormatted:y,location:S};await x(C,c);let A=w();A.unshift(C),T(A),D(),n.innerHTML=`<span class="material-symbols-outlined" style="color: #28a745;">check_circle</span> ¡Respaldo generado con éxito!`,r.textContent=`Archivo: ${h} (${y}) guardado en ${S}`,setTimeout(()=>{t.style.display=`none`,i&&(i.style.width=`0%`)},6e3)}catch(e){console.error(`Error al generar respaldo en el cliente:`,e),alert(`❌ Error al generar respaldo: `+e.message),t.style.display=`none`,i&&(i.style.width=`0%`)}finally{e.disabled=!1}}document.addEventListener(`DOMContentLoaded`,()=>{h(),g(),D();let e=document.getElementById(`btn-generate-backup`);e&&e.addEventListener(`click`,A)});