const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-D6HqGDky.js","./preload-helper-44F9sIZn.js"])))=>i.map(i=>d[i]);
import{A as e,T as t,_ as n,b as r,c as i,f as a,i as o,k as s,l as c,m as l,p as u,t as d,u as f,v as p,x as m}from"./preload-helper-44F9sIZn.js";var h=[],g={songs:{}};function _(e,t=!1){let n=document.getElementById(`expansion-toast`);n&&n.remove();let r=document.createElement(`div`);r.id=`expansion-toast`,r.style.cssText=`
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: ${t?`#dc3545`:`#28a745`};
        color: white;
        padding: 10px 18px;
        border-radius: 8px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.2);
        font-size: 0.85rem;
        font-weight: 600;
        z-index: 99999;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: opacity 0.3s ease;
      `,r.innerHTML=`
        <span class="material-symbols-outlined" style="font-size: 1.1rem;">${t?`error`:`check_circle`}</span>
        <span>${e}</span>
      `,document.body.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,setTimeout(()=>r.remove(),300)},3500)}async function v(){try{let e=await fetch(`data/songs-index.json`);e.ok&&(h=await e.json(),y(),x())}catch(e){console.error(`Error al cargar data/songs-index.json:`,e)}}function y(){let e=document.getElementById(`expansion-song-select`),t=document.getElementById(`expansion-search-input`),n=t?t.value.toLowerCase().trim():``;if(!e)return;let r=h.filter(e=>!n||e.title&&e.title.toLowerCase().includes(n)||e.dbno&&e.dbno.toString().includes(n)||e.id&&e.id.toLowerCase().includes(n));if(r.length===0){e.innerHTML=`<option value="">No hay coincidencias</option>`,b();return}e.innerHTML=r.map(e=>{let t=!!(g.songs&&g.songs[e.id]),n=t?` (Ya registrado)`:``;return`<option value="${e.id}" ${t?`disabled style="color: #999;"`:``}>#${e.dbno||`S/N`} - ${e.title}${n}</option>`}).join(``),b()}function b(){let e=document.getElementById(`expansion-song-select`),t=document.getElementById(`expansion-btn-add`);if(!e||!t)return;let n=e.value,r=!n||g.songs&&g.songs[n]!==void 0;t.disabled=r,r?(t.style.opacity=`0.5`,t.style.cursor=`not-allowed`):(t.style.opacity=`1`,t.style.cursor=`pointer`)}function x(){let e=document.getElementById(`expansion-table-body`),t=document.getElementById(`expansion-count-badge`),n=document.getElementById(`expansion-table-filter`),r=n?n.value.toLowerCase().trim():``;if(!e)return;let i=Object.keys(g.songs||{});t&&(t.textContent=`${i.length} ${i.length===1?`registro`:`registros`}`);let a=[];if(i.forEach(e=>{let t=g.songs[e]===!0,n=h.find(t=>t.id===e)||{id:e,title:e,dbno:`S/N`};(!r||n.title.toLowerCase().includes(r)||n.dbno&&n.dbno.toString().includes(r)||e.toLowerCase().includes(r))&&a.push({id:e,title:n.title,dbno:n.dbno,enabled:t})}),a.sort((e,t)=>(e.title||``).localeCompare(t.title||``)),a.length===0){e.innerHTML=`<tr><td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted, #888);">
          ${i.length===0?`No hay cantos con expansión registrados aún.`:`No se encontraron cantos con ese filtro.`}
        </td></tr>`;return}e.innerHTML=a.map((e,t)=>`
        <tr>
          <td style="text-align: center; font-weight: 700; color: var(--text-muted, #888);">${t+1}</td>
          <td style="font-weight: 700; color: var(--accent-color, #d54d5e);">#${e.dbno||`S/N`}</td>
          <td style="font-weight: 600;">${e.title}</td>
          <td style="text-align: center;">
            ${e.enabled?`
              <span style="font-size: 0.75rem; background: rgba(40, 167, 69, 0.12); color: #28a745; font-weight: 700; padding: 3px 8px; border-radius: 8px;">
                Superposición Activa
              </span>
            `:`
              <span style="font-size: 0.75rem; background: rgba(108, 117, 125, 0.12); color: #6c757d; font-weight: 700; padding: 3px 8px; border-radius: 8px;">
                Desactivada
              </span>
            `}
          </td>
          <td style="text-align: center;">
            <div class="action-cell">
              <label class="switch-toggle" title="${e.enabled?`Desactivar superposición`:`Activar superposición`}">
                <input type="checkbox" class="expansion-toggle-checkbox" data-id="${e.id}" ${e.enabled?`checked`:``}>
                <span class="slider"></span>
              </label>
              <button class="btn-delete" data-id="${e.id}" title="Eliminar registro">
                <span class="material-symbols-outlined" style="font-size: 1.2rem;">delete</span>
              </button>
            </div>
          </td>
        </tr>
      `).join(``),e.querySelectorAll(`.expansion-toggle-checkbox`).forEach(e=>{e.addEventListener(`change`,async t=>{let n=e.dataset.id,r=e.checked;n&&await S(n,r)})}),e.querySelectorAll(`.btn-delete`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.id;t&&await w(t)})})}async function S(e,t){try{g.songs||={},g.songs[e]=t,localStorage.setItem(`expansion_songs_config`,JSON.stringify(g)),await s(m(p,`global_positions`,e),{expansion:t},{merge:!0}),x(),_(t?`Superposición activada en Firebase`:`Superposición desactivada en Firebase`)}catch(e){console.error(`Error al actualizar estado en Firebase global_positions:`,e),localStorage.setItem(`expansion_songs_config`,JSON.stringify(g)),x(),_(`Error al sincronizar con Firebase: `+(e.message||e),!0)}}async function C(e){try{g.songs||={},g.songs[e]=!0,localStorage.setItem(`expansion_songs_config`,JSON.stringify(g)),await s(m(p,`global_positions`,e),{expansion:!0},{merge:!0});let t=document.getElementById(`expansion-search-input`),n=document.getElementById(`expansion-clear-search`);t&&(t.value=``),n&&(n.style.display=`none`),x(),y(),_(`Canto registrado permanentemente en Firebase`)}catch(e){console.error(`Error al guardar en Firebase global_positions:`,e),localStorage.setItem(`expansion_songs_config`,JSON.stringify(g)),x(),y(),_(`Error al guardar en Firebase: `+(e.message||e),!0)}}async function w(t){try{g.songs&&delete g.songs[t],localStorage.setItem(`expansion_songs_config`,JSON.stringify(g));let n=m(p,`global_positions`,t);try{await e(n,{expansion:r()})}catch{await s(n,{expansion:r()},{merge:!0})}x(),y(),_(`Registro eliminado de Firebase`)}catch(e){console.error(`Error al eliminar en Firebase global_positions:`,e),x(),y(),_(`Error al eliminar: `+(e.message||e),!0)}}function T(){try{let e=localStorage.getItem(`expansion_songs_config`);if(e)try{g=JSON.parse(e)||{songs:{}},x()}catch{}t(n(p,`global_positions`),e=>{g.songs||={},e.forEach(e=>{let t=e.data();t&&t.expansion!==void 0?g.songs[e.id]=t.expansion===!0:g.songs[e.id]!==void 0&&delete g.songs[e.id]}),localStorage.setItem(`expansion_songs_config`,JSON.stringify(g)),x(),y()},e=>{console.warn(`Firebase global_positions (offline/permisos):`,e)})}catch(e){console.warn(`Error iniciando listener de expansion_songs:`,e)}}document.addEventListener(`DOMContentLoaded`,()=>{v(),T();let e=document.getElementById(`expansion-search-input`),t=document.getElementById(`expansion-clear-search`);e&&e.addEventListener(`input`,()=>{t&&(t.style.display=e.value?`block`:`none`),y()}),t&&t.addEventListener(`click`,()=>{e.value=``,t.style.display=`none`,y()});let n=document.getElementById(`expansion-song-select`);n&&n.addEventListener(`change`,b);let r=document.getElementById(`expansion-btn-add`);r&&r.addEventListener(`click`,async()=>{let e=n?n.value:``;e&&await C(e)});let i=document.getElementById(`expansion-table-filter`),a=document.getElementById(`expansion-clear-table-filter`);i&&i.addEventListener(`input`,()=>{a&&(a.style.display=i.value?`block`:`none`),x()}),a&&a.addEventListener(`click`,()=>{i.value=``,a.style.display=`none`,x()})}),(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let e=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`,t=`
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
              <span>Asistencia y Chat</span>
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
            <a href="bitacora.html" id="nav-resucito-bitacora"><span class="material-symbols-outlined arrow-icon">history</span> Bitácora</a>
            <a href="/src/html/intro.html" id="nav-resucito-intro"><span class="material-symbols-outlined arrow-icon">menu_book</span> Introducción</a>
            <a href="https://docs.resucito.do/resucito.pdf" target="_blank" id="nav-resucito-pdf"><span class="material-symbols-outlined arrow-icon">menu_book</span> Resucitó PDF</a>
            <a href="mantcantos.html" id="nav-resucito-mantcantos"><span class="material-symbols-outlined arrow-icon">build</span> Mantenimiento</a>
            <a href="respaldo.html" id="nav-resucito-respaldo"><span class="material-symbols-outlined arrow-icon">archive</span> Respaldo</a>
            <a href="chat.html" id="nav-resucito-chat"><span class="material-symbols-outlined arrow-icon">chat</span> Asistencia y Chat</a>
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
        </a>
      </div>
    </div>
  `,n=`
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
  `;window.mostrarConfirmacion=function({titulo:e=`Confirmar`,mensaje:t=`¿Estás seguro?`,icono:n=`help_outline`,textoSi:r=`Sí`,textoNo:i=`No`,onConfirm:a=null,onCancel:o=null,iconoColor:s=null,iconoBg:c=null}={}){let l=document.getElementById(`custom-confirm-modal`),u=document.getElementById(`custom-confirm-title`),d=document.getElementById(`custom-confirm-message`),f=document.getElementById(`custom-confirm-icon`),p=document.getElementById(`custom-confirm-badge`),m=document.getElementById(`custom-confirm-btn-si`),h=document.getElementById(`custom-confirm-btn-no`);if(!l||!u||!d||!f||!m||!h)return;u.innerText=e,d.innerText=t,f.innerText=n,m.innerText=r,h.innerText=i,p&&(s?p.style.color=s:p.style.color=`var(--accent-color, #d01212)`,c?p.style.background=c:p.style.background=`rgba(208, 18, 18, 0.1)`),i===``?(h.style.display=`none`,m.style.flex=`none`,m.style.padding=`10px 32px`):(h.style.display=`block`,m.style.flex=`1`,m.style.padding=`10px 20px`);let g=async e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),a&&await a()},_=e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),o&&o()},v=()=>{m.removeEventListener(`click`,g),h.removeEventListener(`click`,_)};m.addEventListener(`click`,g),h.addEventListener(`click`,_),l.style.display=`flex`},window.mostrarAlerta=function({titulo:e=`Aviso`,mensaje:t=``,icono:n=`warning`,textoBoton:r=`Aceptar`,iconoColor:i=null,iconoBg:a=null,onClose:o=null}={}){window.mostrarConfirmacion({titulo:e,mensaje:t,icono:n,textoSi:r,textoNo:``,iconoColor:i,iconoBg:a,onConfirm:o,onCancel:o})},window.mostrarProgreso=function({titulo:e=`Procesando...`,mensaje:t=`Por favor espere un momento...`,icono:n=`sync`,porcentaje:r=null}={}){let i=document.getElementById(`custom-progress-modal`),a=document.getElementById(`custom-progress-title`),o=document.getElementById(`custom-progress-message`),s=document.getElementById(`custom-progress-icon`),c=document.getElementById(`custom-progress-bar-fill`);i&&a&&o&&s&&(a.innerText=e,o.innerText=t,s.innerText=n,c&&(typeof r==`number`?(c.style.animation=`none`,c.style.left=`0`,c.style.width=`${r}%`):c.style.animation=`greenProgressIndeterminate 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`),i.style.display=`flex`)},window.ocultarProgreso=function(){let e=document.getElementById(`custom-progress-modal`);e&&(e.style.display=`none`)};let r=()=>{document.getElementById(`nav-wrapper`)||document.body.insertAdjacentHTML(`beforeend`,t),document.getElementById(`app-info-modal`)||document.body.insertAdjacentHTML(`beforeend`,n),document.getElementById(`custom-confirm-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),s()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,r):r();function s(){let t=document.getElementById(`nav-toggle`);t&&t.addEventListener(`click`,p);let n=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},r=document.getElementById(`btn-nav-inicio`);r&&r.addEventListener(`click`,n);let s=document.getElementById(`nav-resucito-camino`);s&&s.addEventListener(`click`,n);let m=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&n.addEventListener(`click`,e=>{e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)})};m(`btn-nav-menu`,`nav-submenu`),m(`btn-nav-neocate`,`nav-submenu-neocate`),m(`btn-nav-resucito`,`nav-submenu-resucito`);let h=document.getElementById(`btn-open-settings`);h&&h.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():d(()=>import(`./ajustes-D6HqGDky.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let _=document.getElementById(`account-popup-card`),v=document.getElementById(`account-popup-close`),y=document.getElementById(`account-popup-toggle-header`),b=document.getElementById(`account-actions-list`),x=document.getElementById(`account-toggle-text`),S=document.getElementById(`account-toggle-icon`);v&&_&&v.addEventListener(`click`,e=>{e.stopPropagation(),_.classList.add(`hidden`)}),y&&b&&x&&S&&y.addEventListener(`click`,e=>{e.stopPropagation(),b.classList.contains(`collapsed`)?(b.classList.remove(`collapsed`),x.innerText=`Ocultar`,S.innerText=`expand_less`):(b.classList.add(`collapsed`),x.innerText=`Mostrar`,S.innerText=`expand_more`)});let C=document.getElementById(`account-popup-manage`),w=document.getElementById(`account-action-perfil`),T=document.getElementById(`account-action-preparar`),E=document.getElementById(`account-action-actualizar`),D=document.getElementById(`account-action-logout`),O=document.getElementById(`account-info-app-link`),k=document.getElementById(`app-info-modal`),A=document.getElementById(`close-app-info-modal`),j=window.location.pathname.includes(`/src/`),M=e=>{e.stopPropagation(),window.location.href=j?`../perfil.html`:`perfil.html`};C&&C.addEventListener(`click`,M),w&&w.addEventListener(`click`,M),T&&T.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=j?`../preparar.html`:`preparar.html`});let N=document.getElementById(`account-action-bitacora`);N&&N.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=j?`../bitacora.html`:`bitacora.html`}),E&&E.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),F()});let P=document.getElementById(`account-action-chat`);P&&P.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),_&&_.classList.add(`hidden`),window.location.href=j?`../chat.html`:`chat.html`}),D&&D.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),_&&_.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():u()}})}),O&&k&&O.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),_&&_.classList.add(`hidden`),k.style.display=`flex`}),A&&k&&A.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),k.style.display=`none`});let F=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}_&&_.classList.add(`hidden`),k&&(k.style.display=`none`);let t=window._latestRemoteVersion||`Nueva versión`,n=e||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${n} a la v${t}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let e=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=e.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${n} ➔ v${t}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let t of e){try{await fetch(t+`?t=`+Date.now(),{cache:`reload`})}catch(e){console.warn(`Aviso al descargar ${t}:`,e)}r++;let e=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${t} (${r}/${i})`,icono:`download`,porcentaje:e}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`cloud_sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`download`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v311`,t=await caches.open(e),n=await fetch(`data/songs-index.json?t=`+Date.now());if(n.ok){let e=await n.clone().json();await t.put(`data/songs-index.json`,n);for(let n=0;n<e.length;n+=10){let r=e.slice(n,n+10);await Promise.all(r.map(async e=>{let n=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(n);e.ok&&await t.put(n,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${t} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function I(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function L(){try{let t=(window.location.origin||``)+`/version.json?t=`+Date.now();console.log(`🔍 Comprobando versión remota en:`,t);let n=await fetch(t,{cache:`no-store`});if(!n.ok){console.warn(`⚠️ No se pudo obtener version.json, status:`,n.status);return}let r=await n.json();if(console.log(`📦 Info de versión recibida:`,r,`Versión local instalada:`,e),r&&r.latestVersion&&I(r.latestVersion,e)){console.log(`✨ ¡Nueva versión detectada!: v${r.latestVersion} (Actual: v${e})`),window._latestRemoteVersion=r.latestVersion,E&&(E.classList.add(`has-update-ready`),E.innerHTML=`
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
            `;let i=t.firstElementChild;i?i.insertAdjacentElement(`afterend`,n):t.prepend(n),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,F),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,F)}}}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(L,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);_&&!_.contains(e.target)&&(!t||!t.contains(e.target))&&_.classList.add(`hidden`),k&&e.target===k&&(k.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let R=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),i=document.getElementById(`account-popup-card`),o=document.getElementById(`account-popup-email`),s=document.getElementById(`account-popup-greeting`),c=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(o&&(o.innerText=e.email||`usuario@gmail.com`),s&&(s.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),c&&e.photoURL&&(c.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i&&i.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,i&&i.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){R(t),i&&i.classList.remove(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():a()}))};function z(){let e=f(),t=e||o(`page_inicio`),n=e||o(`page_perfil`),r=e||o(`page_preparar`),a=e||o(`page_bitacora`),s=e||o(`page_introduccion`),c=e||o(`page_resucito_pdf`),l=e||o(`page_instalar_app`),u=e||o(`page_mantcantos`),d=e||o(`page_respaldo`),p=i()||window.firebaseAPI?.getCurrentUser?.(),m=e||!!p&&o(`page_chat`),h=document.getElementById(`btn-nav-inicio`);h&&(h.style.display=t?`flex`:`none`);let g=document.getElementById(`nav-resucito-camino`),_=document.getElementById(`nav-resucito-perfil`),v=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-intro`),x=document.getElementById(`nav-resucito-pdf`),S=document.getElementById(`nav-resucito-mantcantos`),C=document.getElementById(`nav-resucito-respaldo`),w=document.getElementById(`nav-resucito-chat`),T=document.getElementById(`installButton`);g&&(g.style.display=t?`flex`:`none`),_&&(_.style.display=n?`flex`:`none`),v&&(v.style.display=r?`flex`:`none`),y&&(y.style.display=a?`flex`:`none`),b&&(b.style.display=s?`flex`:`none`),x&&(x.style.display=c?`flex`:`none`),S&&(S.style.display=u?`flex`:`none`),C&&(C.style.display=d?`flex`:`none`),w&&(w.style.display=m?`flex`:`none`),T&&(T.style.display=l?`flex`:`none`);let E=document.getElementById(`account-action-preparar`),D=document.getElementById(`account-action-perfil`),O=document.getElementById(`account-action-bitacora`),k=document.getElementById(`account-action-chat`),A=document.getElementById(`account-popup-manage`);E&&(E.style.display=r?`flex`:`none`),D&&(D.style.display=n?`flex`:`none`),O&&(O.style.display=a?`flex`:`none`),k&&(k.style.display=m?`flex`:`none`),A&&(A.style.display=n?`block`:`none`),B()}function B(){if(!c())return;let e=window.location.pathname.toLowerCase();f()||(e.includes(`perfil.html`)&&!o(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!o(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!o(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!o(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!o(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!o(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!o(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(i()||window.firebaseAPI?.getCurrentUser?.())||!o(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=z,window.checkCurrentPagePermissionAndRedirect=B,z(),l(e=>{R(e),z()});let V=document.getElementById(`installButton`);V&&(window.deferredPrompt||(V.style.opacity=`0.85`),V.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&(V.style.opacity=`0.5`,V.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),j&&document.querySelectorAll(`#nav-submenu-resucito a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),g()}function p(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=p;let m;function h(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){m&&clearTimeout(m);return}clearTimeout(m),m=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=h,document.addEventListener(`mousemove`,h),document.addEventListener(`touchstart`,h),document.addEventListener(`scroll`,h);function g(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=g})();