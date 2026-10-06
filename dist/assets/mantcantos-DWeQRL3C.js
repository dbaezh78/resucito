const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-ByWotMPG.js","./preload-helper-G5qyM6n5.js"])))=>i.map(i=>d[i]);
import{S as e,T as t,_ as n,c as r,f as i,i as a,k as o,l as s,m as c,p as l,t as u,u as d,v as f,x as p}from"./preload-helper-G5qyM6n5.js";import{d as m,f as h}from"./sync-BZf8oP7A.js";var g=[{value:`0`,label:`Precatecumenado`},{value:`1`,label:`Primer Escrutinio`},{value:`1.5`,label:`SHEMA`},{value:`2`,label:`Segundo Escrutinio`},{value:`3`,label:`Iniciación a la Oración`},{value:`4`,label:`Traditio Symboli`},{value:`5`,label:`Redditio Symboli`},{value:`6`,label:`Padre Nuestro`},{value:`7`,label:`Elección`},{value:`8`,label:`Renovación de las Promesas Bautismales`}],_={numero:`Número (N°)`,nombre:`Nombre del Canto`,categoria:`Categoría / Etapa`,acorde:`Acorde`,posacorde:`PosAcorde`,notas:`Notas del Canto`,favorito:`Favorito`,sw:`Caché SW`},v=[],y={},b=new Set,x=new Set(JSON.parse(localStorage.getItem(`mant_hidden_columns`)||`[]`)),S={},C=null,w=new Set;try{let e=localStorage.getItem(`favorites`);e&&(w=new Set(JSON.parse(e)))}catch{}function T(){c(e=>{let t=d();t||a(`page_mantcantos`)||(console.warn(`Acceso no autorizado a Mantenimiento de Cantos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`));let n=document.getElementById(`btn-backup-user-pos`);n&&(n.style.display=t?`inline-flex`:`none`)})}async function E(){try{try{let e=await fetch(`data/chord_positions.json`);e.ok&&(y=await e.json())}catch(e){console.warn(`Error cargando data/chord_positions.json:`,e)}try{b.clear();let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`));e&&(await(await caches.open(e)).keys()).forEach(e=>{let t=new URL(e.url,window.location.href).pathname;t.startsWith(`/`)&&(t=t.substring(1)),b.add(t),b.add(t.split(`?`)[0])})}catch(e){console.warn(`Error leyendo Service Worker Cache:`,e)}try{await h(!0)}catch{}let e=await fetch(`data/songs-index.json`);e.ok&&(v=await e.json()),P(),N()}catch(e){console.error(`Error al cargar datos en mantcantos:`,e);let t=document.getElementById(`mant-table-body`);t&&(t.innerHTML=`<tr><td colspan="8" style="text-align: center; color: #dc3545; padding: 20px;">Error al cargar datos: ${e.message}</td></tr>`)}}function D(e,t){let n=e.id||``;if(t===`numero`)return e.dbno?e.dbno.toString():`S/N`;if(t===`nombre`)return e.title||``;if(t===`categoria`){let e=A(n),t=g.find(t=>t.value===e);return t?t.label:`Precatecumenado`}return t===`acorde`?e.acorde||`-`:t===`posacorde`?y[n]?`Sí`:`No`:t===`notas`?k(n)?`Con notas`:`Sin notas`:t===`favorito`?w.has(n)?`Favorito`:`No favorito`:t===`sw`?O(n)?`En caché`:`Faltante`:``}function O(e){if(!e)return!1;let t=`${e.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e}.json`;return b.has(t)}function k(e){let t=localStorage.getItem(`notes_${e}`);return t?t.trim():``}function A(e){return window.globalPositionsCache&&window.globalPositionsCache[e]&&window.globalPositionsCache[e].etapa!==void 0?window.globalPositionsCache[e].etapa.toString():`0`}async function j(e,t){window.globalPositionsCache||(window.globalPositionsCache={}),window.globalPositionsCache[e]||(window.globalPositionsCache[e]={}),window.globalPositionsCache[e].etapa=t,localStorage.setItem(`resucito_global_positions_cache`,JSON.stringify(window.globalPositionsCache));try{await o(p(f,`global_positions`,e),{etapa:t},{merge:!0}),console.log(`Etapa actualizada para ${e} -> ${t}`)}catch(e){console.warn(`Error guardando etapa en Firebase:`,e)}}function M(e,t){t?w.add(e):w.delete(e),localStorage.setItem(`favorites`,JSON.stringify(Array.from(w))),window.favorites&&(t?window.favorites.add(e):window.favorites.delete(e)),typeof window.guardarFavoritosEnNube==`function`&&window.guardarFavoritosEnNube([...w])}function N(){let e=document.getElementById(`mant-table-body`),t=document.getElementById(`mant-count-badge`),n=(document.getElementById(`mant-search-input`)?.value||``).toLowerCase().trim();if(!e)return;let r=v.filter(e=>{let t=e.id||``,r=(e.title||``).toLowerCase(),i=(e.dbno||``).toString().toLowerCase(),a=(e.acorde||``).toLowerCase(),o=k(t).toLowerCase(),s=A(t),c=g.find(e=>e.value===s),l=(c?c.label:``).toLowerCase();if(n&&!(r.includes(n)||i.includes(n)||a.includes(n)||o.includes(n)||l.includes(n)))return!1;for(let[t,n]of Object.entries(S)){if(!n||n.size===0)continue;let r=D(e,t);if(!n.has(r))return!1}return!0});if(t&&(t.innerText=`${r.length} de ${v.length} cantos`),r.length===0){e.innerHTML=`<tr><td colspan="8" style="text-align: center; padding: 30px; color: var(--text-muted);">No se encontraron cantos con los criterios actuales.</td></tr>`;return}e.innerHTML=r.map(e=>{let t=e.id,n=A(t),r=!!y[t],i=k(t),a=w.has(t),o=O(t),s=g.map(e=>`
          <option value="${e.value}" ${e.value===n?`selected`:``}>${e.label}</option>
        `).join(``);return`
          <tr data-song-id="${t}">
            <!-- Número del Canto -->
            <td data-col="numero" style="text-align: center;">
              <span class="badge-number">${e.dbno?`#${e.dbno}`:`S/N`}</span>
            </td>

            <!-- Nombre del Canto -->
            <td data-col="nombre">
              <div style="font-weight: 700; color: var(--text-color);">
                <a href="index.html#canto=${t}" style="text-decoration: none; color: inherit;" title="Abrir canto">
                  ${e.title}
                </a>
              </div>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${t}</div>
            </td>

            <!-- Categoría / Etapa -->
            <td data-col="categoria">
              <select class="stage-select" data-song-id="${t}">
                ${s}
              </select>
            </td>

            <!-- Acorde -->
            <td data-col="acorde" style="text-align: center;">
              <span class="badge-chord">${e.acorde||`-`}</span>
            </td>

            <!-- PosAcorde -->
            <td data-col="posacorde" style="text-align: center;">
              ${r?`<span class="badge-pos si"><span class="material-symbols-outlined" style="font-size: 0.9rem;">check</span> Sí</span>`:`<span class="badge-pos no"><span class="material-symbols-outlined" style="font-size: 0.9rem;">close</span> No</span>`}
            </td>

            <!-- Notas del Canto -->
            <td data-col="notas">
              <div class="notes-snippet ${i?`has-notes`:``}" title="${i?i.replace(/"/g,`&quot;`):`Sin notas`}">
                ${i||`<span style="color: var(--text-muted); opacity: 0.6;">(Sin notas)</span>`}
              </div>
            </td>

            <!-- Favorito -->
            <td data-col="favorito" style="text-align: center;">
              <input type="checkbox" class="fav-checkbox" data-song-id="${t}" ${a?`checked`:``} title="${a?`Quitar de favoritos`:`Marcar favorito`}">
            </td>

            <!-- Cargado en Service Worker -->
            <td data-col="sw" style="text-align: center;">
              ${o?`<span class="badge-sw cached" title="Cargado en caché offline"><span class="material-symbols-outlined">done</span></span>`:`<span class="badge-sw missing" title="No está en caché offline"><span class="material-symbols-outlined">close</span></span>`}
            </td>
          </tr>
        `}).join(``),e.querySelectorAll(`.stage-select`).forEach(e=>{e.addEventListener(`change`,async t=>{let n=e.dataset.songId,r=t.target.value;await j(n,r)})}),e.querySelectorAll(`.fav-checkbox`).forEach(e=>{e.addEventListener(`change`,t=>{let n=e.dataset.songId;M(n,t.target.checked)})}),P()}function P(){let e=[`numero`,`nombre`,`categoria`,`acorde`,`posacorde`,`notas`,`favorito`,`sw`];e.forEach(e=>{let t=x.has(e),n=document.querySelector(`th[data-col="${e}"]`);n&&(n.style.display=t?`none`:``),document.querySelectorAll(`td[data-col="${e}"]`).forEach(e=>e.style.display=t?`none`:``)}),e.forEach(e=>{let t=document.querySelector(`.filter-indicator[data-col-indicator="${e}"]`);t&&(t.style.display=S[e]?`inline-block`:`none`)});let t=document.getElementById(`hidden-columns-bar`),n=document.getElementById(`hidden-columns-list`);t&&n&&(x.size>0?(n.innerText=Array.from(x).map(e=>_[e]||e).join(`, `),t.style.display=`flex`):t.style.display=`none`),localStorage.setItem(`mant_hidden_columns`,JSON.stringify(Array.from(x)))}function F(e){e&&(x.add(e),P())}function I(){x.clear(),P()}var L=document.getElementById(`col-context-menu`),R=document.getElementById(`mant-table-header-row`);R&&R.addEventListener(`contextmenu`,e=>{let t=e.target.closest(`th`);if(!t||(e.preventDefault(),C=t.dataset.col,!C))return;let n=Math.min(e.clientX,window.innerWidth-210),r=Math.min(e.clientY,window.innerHeight-150);L.style.left=`${n}px`,L.style.top=`${r}px`,L.style.display=`block`}),document.addEventListener(`click`,e=>{L&&!L.contains(e.target)&&(L.style.display=`none`)}),document.getElementById(`ctx-hide-col`)?.addEventListener(`click`,()=>{C&&F(C),L.style.display=`none`}),document.getElementById(`ctx-show-all-cols`)?.addEventListener(`click`,()=>{I(),L.style.display=`none`}),document.getElementById(`btn-restore-columns`)?.addEventListener(`click`,()=>{I()});var z=document.getElementById(`modal-filter-col`),B=document.getElementById(`modal-filter-title`),ee=document.getElementById(`modal-filter-desc`),V=document.getElementById(`modal-filter-search`),H=document.getElementById(`modal-filter-options-list`),U=document.getElementById(`modal-filter-selected-count`),W=document.getElementById(`modal-filter-select-all`),G=document.getElementById(`modal-filter-deselect-all`),K=document.getElementById(`modal-filter-close`),te=document.getElementById(`modal-filter-btn-apply`),q=document.getElementById(`modal-filter-btn-clear`),J=[],Y=new Set;function X(){U&&(U.innerText=`${Y.size} de ${J.length} seleccionados`)}function Z(e=``){if(!H)return;let t=e.toLowerCase().trim(),n=J.filter(e=>!t||e.val.toLowerCase().includes(t));if(n.length===0){H.innerHTML=`<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.82rem;">No hay opciones que coincidan</div>`;return}H.innerHTML=n.map(e=>{let t=Y.has(e.val),n=e.val.replace(/"/g,`&quot;`);return`
          <div class="filter-option-item" data-val="${n}">
            <label class="filter-option-label">
              <input type="checkbox" class="filter-option-checkbox" data-val="${n}" ${t?`checked`:``} style="width: 16px; height: 16px; accent-color: var(--accent-color, #d01212); cursor: pointer;">
              <span>${e.val}</span>
            </label>
            <span class="filter-option-count">${e.count}</span>
          </div>
        `}).join(``),H.querySelectorAll(`.filter-option-checkbox`).forEach(e=>{e.addEventListener(`change`,t=>{let n=e.dataset.val;e.checked?Y.add(n):Y.delete(n),X()})})}document.getElementById(`ctx-filter-col`)?.addEventListener(`click`,()=>{if(L.style.display=`none`,!C)return;let e=_[C]||C;B.innerHTML=`<span class="material-symbols-outlined" style="color: var(--accent-color, #d01212);">filter_alt</span> Filtrar por ${e}`,ee.innerText=`Selecciona los valores de "${e}" que deseas visualizar en la tabla:`,V&&(V.value=``);let t=new Map;v.forEach(e=>{let n=D(e,C);t.set(n,(t.get(n)||0)+1)}),J=Array.from(t.entries()).map(([e,t])=>({val:e,count:t})),J.sort((e,t)=>{let n=parseInt(e.val.replace(/\D/g,``),10),r=parseInt(t.val.replace(/\D/g,``),10);return!isNaN(n)&&!isNaN(r)&&C===`numero`?n-r:e.val.localeCompare(t.val,`es`,{numeric:!0})}),Y=S[C]&&S[C].size>0?new Set(S[C]):new Set(J.map(e=>e.val)),Z(),X(),z.style.display=`flex`,setTimeout(()=>V?.focus(),50)}),V?.addEventListener(`input`,()=>{Z(V.value)}),W?.addEventListener(`click`,()=>{J.forEach(e=>Y.add(e.val)),Z(V?V.value:``),X()}),G?.addEventListener(`click`,()=>{Y.clear(),Z(V?V.value:``),X()}),K?.addEventListener(`click`,()=>{z.style.display=`none`}),q?.addEventListener(`click`,()=>{C&&delete S[C],z.style.display=`none`,N()}),te?.addEventListener(`click`,()=>{C&&(Y.size===J.length?delete S[C]:S[C]=new Set(Y)),z.style.display=`none`,N()});var Q=document.getElementById(`mant-search-input`),$=document.getElementById(`mant-search-clear`);Q?.addEventListener(`input`,()=>{$&&($.style.display=Q.value?`block`:`none`),N()}),$?.addEventListener(`click`,()=>{Q.value=``,$.style.display=`none`,N()}),document.getElementById(`btn-refresh-data`)?.addEventListener(`click`,()=>{E()}),document.getElementById(`btn-backup-user-pos`)?.addEventListener(`click`,async()=>{let e=document.getElementById(`btn-backup-user-pos`);try{e.disabled=!0,e.innerHTML=`<span class="material-symbols-outlined">sync</span> Respaldando...`;let t=await m(),n=`✅ Respaldo de Posiciones de Usuario completado:

`;n+=`• Total de cantos encontrados en /usuarios/USUARIO/posiciones/: ${t.total}\n`,n+=`• Ya presentes en Global: ${t.alreadyInGlobal.length}\n`,n+=`• Únicos en Usuario (no estaban en global): ${t.onlyInUser.length}\n`,t.onlyInUser.length>0&&(n+=`  (Cantos únicos: ${t.onlyInUser.join(`, `)})\n`),t.savedOnDisk&&(n+=`
💾 Guardado exitosamente en: data/chord_positions-backup.json`),n+=`
📥 Se ha descargado también el archivo en tu navegador.`,alert(n)}catch(e){console.error(`Error al respaldar posiciones:`,e),alert(`Error al respaldar: `+e.message)}finally{e.disabled=!1,e.innerHTML=`<span class="material-symbols-outlined" style="color: var(--accent-color, #d01212);">save_as</span> Respaldar Posiciones`}}),T(),E(),(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let o=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`,m=`
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
          v${o}
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
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${o}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${o} (Versión Actual)</strong>
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
  `),_()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g):g();function _(){let m=document.getElementById(`nav-toggle`);m&&m.addEventListener(`click`,v);let h=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},g=document.getElementById(`btn-nav-inicio`);g&&g.addEventListener(`click`,h);let _=document.getElementById(`nav-resucito-camino`);_&&_.addEventListener(`click`,h);let y=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&n.addEventListener(`click`,e=>{e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)})};y(`btn-nav-menu`,`nav-submenu`),y(`btn-nav-neocate`,`nav-submenu-neocate`),y(`btn-nav-resucito`,`nav-submenu-resucito`);let b=document.getElementById(`btn-open-settings`);b&&b.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():u(()=>import(`./ajustes-ByWotMPG.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let S=document.getElementById(`account-popup-card`),C=document.getElementById(`account-popup-close`),w=document.getElementById(`account-popup-toggle-header`),T=document.getElementById(`account-actions-list`),E=document.getElementById(`account-toggle-text`),D=document.getElementById(`account-toggle-icon`);C&&S&&C.addEventListener(`click`,e=>{e.stopPropagation(),S.classList.add(`hidden`)}),w&&T&&E&&D&&w.addEventListener(`click`,e=>{e.stopPropagation(),T.classList.contains(`collapsed`)?(T.classList.remove(`collapsed`),E.innerText=`Ocultar`,D.innerText=`expand_less`):(T.classList.add(`collapsed`),E.innerText=`Mostrar`,D.innerText=`expand_more`)});let O=document.getElementById(`account-popup-manage`),k=document.getElementById(`account-action-perfil`),A=document.getElementById(`account-action-preparar`),j=document.getElementById(`account-action-actualizar`),M=document.getElementById(`account-action-logout`),N=document.getElementById(`account-info-app-link`),P=document.getElementById(`app-info-modal`),F=document.getElementById(`close-app-info-modal`),I=window.location.pathname.includes(`/src/`),L=e=>{e.stopPropagation(),window.location.href=I?`../perfil.html`:`perfil.html`};O&&O.addEventListener(`click`,L),k&&k.addEventListener(`click`,L),A&&A.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../preparar.html`:`preparar.html`});let R=document.getElementById(`account-action-bitacora`);R&&R.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../bitacora.html`:`bitacora.html`}),j&&j.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),B()});let z=document.getElementById(`account-action-chat`);z&&z.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.location.href=I?`../chat.html`:`chat.html`}),M&&M.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():l()}})}),N&&P&&N.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),P.style.display=`flex`}),F&&P&&F.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),P.style.display=`none`});let B=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}S&&S.classList.add(`hidden`),P&&(P.style.display=`none`);let e=window._latestRemoteVersion||`Nueva versión`,t=o||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${t} a la v${e}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let n=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=n.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${t} ➔ v${e}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let e of n){try{await fetch(e+`?t=`+Date.now(),{cache:`reload`})}catch(t){console.warn(`Aviso al descargar ${e}:`,t)}r++;let t=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${e} (${r}/${i})`,icono:`sync`,porcentaje:t}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`sync`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v311`,t=await caches.open(e),n=await fetch(`data/songs-index.json?t=`+Date.now());if(n.ok){let e=await n.clone().json();await t.put(`data/songs-index.json`,n);for(let n=0;n<e.length;n+=10){let r=e.slice(n,n+10);await Promise.all(r.map(async e=>{let n=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(n);e.ok&&await t.put(n,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${e} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function ee(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function V(){try{let e=(window.location.origin||``)+`/version.json?t=`+Date.now();console.log(`🔍 Comprobando versión remota en:`,e);let t=await fetch(e,{cache:`no-store`});if(!t.ok){console.warn(`⚠️ No se pudo obtener version.json, status:`,t.status);return}let n=await t.json();if(console.log(`📦 Info de versión recibida:`,n,`Versión local instalada:`,o),n&&n.latestVersion&&ee(n.latestVersion,o)){console.log(`✨ ¡Nueva versión detectada!: v${n.latestVersion} (Actual: v${o})`),window._latestRemoteVersion=n.latestVersion,j&&(j.classList.add(`has-update-ready`),j.innerHTML=`
              <div class="account-update-halo-ring" title="¡Nueva versión disponible v${n.latestVersion}!"></div>
              <span style="font-weight: 700; color: #00e676;">Actualizar App</span>
              <span class="account-update-badge-pill">v${n.latestVersion}</span>
            `);let e=document.querySelector(`#app-info-modal .settings-body`);if(e&&!document.getElementById(`app-update-live-card`)){let t=document.createElement(`div`);t.id=`app-update-live-card`,t.className=`app-update-badge-container`,t.style.cssText=`margin-bottom: 20px; background: rgba(0,0,0,0.04); padding: 16px; border-radius: 18px; border: 1px solid rgba(255, 215, 0, 0.4);`,t.innerHTML=`
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
                Versión actual: v${o} ➔ Nueva: v${n.latestVersion}
              </div>
            `;let r=e.firstElementChild;r?r.insertAdjacentElement(`afterend`,t):e.prepend(t),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,B),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,B)}}}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(V,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);S&&!S.contains(e.target)&&(!t||!t.contains(e.target))&&S.classList.add(`hidden`),P&&e.target===P&&(P.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let H=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),a=document.getElementById(`account-popup-card`),o=document.getElementById(`account-popup-email`),s=document.getElementById(`account-popup-greeting`),c=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(o&&(o.innerText=e.email||`usuario@gmail.com`),s&&(s.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),c&&e.photoURL&&(c.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),a&&a.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,a&&a.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){H(t),a&&a.classList.remove(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():i()}))};function U(){let e=d(),t=e||a(`page_inicio`),n=e||a(`page_perfil`),i=e||a(`page_preparar`),o=e||a(`page_bitacora`),s=e||a(`page_introduccion`),c=e||a(`page_resucito_pdf`),l=e||a(`page_instalar_app`),u=e||a(`page_mantcantos`),f=e||a(`page_respaldo`),p=r()||window.firebaseAPI?.getCurrentUser?.(),m=e||!!p&&a(`page_chat`),h=document.getElementById(`btn-nav-inicio`);h&&(h.style.display=t?`flex`:`none`);let g=document.getElementById(`nav-resucito-camino`),_=document.getElementById(`nav-resucito-perfil`),v=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-intro`),x=document.getElementById(`nav-resucito-pdf`),S=document.getElementById(`nav-resucito-mantcantos`),C=document.getElementById(`nav-resucito-datosparroquia`),w=document.getElementById(`nav-resucito-respaldo`),T=document.getElementById(`nav-resucito-chat`),E=document.getElementById(`installButton`);g&&(g.style.display=t?`flex`:`none`),_&&(_.style.display=n?`flex`:`none`),v&&(v.style.display=i?`flex`:`none`),y&&(y.style.display=o?`flex`:`none`),b&&(b.style.display=s?`flex`:`none`),x&&(x.style.display=c?`flex`:`none`),S&&(S.style.display=u?`flex`:`none`),C&&(C.style.display=e?`flex`:`none`),w&&(w.style.display=f?`flex`:`none`),T&&(T.style.display=m?`flex`:`none`),E&&(E.style.display=l?`flex`:`none`);let D=document.getElementById(`account-action-preparar`),O=document.getElementById(`account-action-perfil`),k=document.getElementById(`account-action-bitacora`),A=document.getElementById(`account-action-chat`),j=document.getElementById(`account-popup-manage`);D&&(D.style.display=i?`flex`:`none`),O&&(O.style.display=n?`flex`:`none`),k&&(k.style.display=o?`flex`:`none`),A&&(A.style.display=m?`flex`:`none`),j&&(j.style.display=n?`block`:`none`),W()}function W(){if(!s())return;let e=window.location.pathname.toLowerCase();d()||(e.includes(`perfil.html`)&&!a(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!a(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!a(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!a(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!a(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!a(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!a(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(r()||window.firebaseAPI?.getCurrentUser?.())||!a(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=U,window.checkCurrentPagePermissionAndRedirect=W,U();let G=null,K=0;function te(){return localStorage.getItem(`resucito_chat_notificaciones`)!==`false`}function q(){let e=document.getElementById(`badge-chat-nav-cuenta`),t=document.getElementById(`badge-chat-account-popup`),n=document.getElementById(`badge-chat-nav-submenu`),i=te(),a=r()||window.firebaseAPI?.getCurrentUser?.(),o=window.location.pathname.includes(`chat.html`),s=i&&!o&&!!a&&K>0,c=K>99?`99+`:String(K);e&&(s?(e.textContent=c,e.style.display=`inline-flex`):e.style.display=`none`),t&&(s?(t.textContent=c,t.style.display=`inline-flex`):t.style.display=`none`),n&&(s?(n.textContent=c,n.style.display=`inline-flex`):n.style.display=`none`)}function J(r){if(G&&=(G(),null),!r||!f){K=0,q();return}if(r.email&&r.email.toLowerCase().trim()===`dbaezh78@gmail.com`||d())try{G=t(n(f,`support_chats`),e=>{let t=0,n=r.email?r.email.toLowerCase().trim():``,i=new Map;e.forEach(e=>{let t=e.data();if(t&&typeof t.unreadAdmin==`number`&&t.unreadAdmin>0&&(t.lastSenderEmail?t.lastSenderEmail.toLowerCase().trim():``)!==n){let n=(t.userEmail||e.id).toLowerCase().trim(),r=i.get(n)||0;i.set(n,Math.max(r,t.unreadAdmin))}});for(let e of i.values())t+=e;K=t,q()},e=>{console.warn(`Aviso escuchando chats admin:`,e)})}catch(e){console.warn(`Error inicializando listener chats admin:`,e)}else try{let e=r.email?r.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,n=r.email?r.email.toLowerCase().trim():``,i=0,a=0;function o(e,t){let r=0;e&&typeof e.unreadUser==`number`&&e.unreadUser>0&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==n&&(r=e.unreadUser),t===`uid`&&(i=r),t===`email`&&(a=r),K=Math.max(i,a),q()}let s=t(p(f,`support_chats`,r.uid),e=>{o(e.exists()?e.data():null,`uid`)},e=>{console.warn(`Aviso escuchando chat usuario por uid:`,e)}),c=null;e&&e!==r.uid&&(c=t(p(f,`support_chats`,e),e=>{o(e.exists()?e.data():null,`email`)},()=>{})),G=()=>{s&&s(),c&&c()}}catch(e){console.warn(`Error inicializando listener chat usuario:`,e)}if(localStorage.getItem(`resucito_chat_notificaciones`)===null)try{e(p(f,`usuarios`,r.uid,`perfil`,`config`)).then(e=>{if(e&&e.exists()){let t=e.data();typeof t.chatNotificaciones==`boolean`&&(localStorage.setItem(`resucito_chat_notificaciones`,t.chatNotificaciones?`true`:`false`),q())}}).catch(()=>{})}catch{}}window.addEventListener(`chat_notificaciones_changed`,()=>{q()}),window.addEventListener(`storage`,e=>{e.key===`resucito_chat_notificaciones`&&q()}),c(e=>{H(e),U(),J(e),q()});let Y=document.getElementById(`installButton`);Y&&(window.deferredPrompt||(Y.style.opacity=`0.85`),Y.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&(Y.style.opacity=`0.5`,Y.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),I&&document.querySelectorAll(`#nav-submenu-resucito a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),x()}function v(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=v;let y;function b(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){y&&clearTimeout(y);return}clearTimeout(y),y=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=b,document.addEventListener(`mousemove`,b),document.addEventListener(`touchstart`,b),document.addEventListener(`scroll`,b);function x(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=x})();