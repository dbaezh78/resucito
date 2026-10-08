import{D as e,M as t,_ as n,b as r,j as i,v as a,x as o}from"./preload-helper-BoU5IU9X.js";import"./navegador-DEDizaSL.js";var s=[],c={songs:{}};function l(e,t=!1){let n=document.getElementById(`expansion-toast`);n&&n.remove();let r=document.createElement(`div`);r.id=`expansion-toast`,r.style.cssText=`
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
      `,document.body.appendChild(r),setTimeout(()=>{r.style.opacity=`0`,setTimeout(()=>r.remove(),300)},3500)}async function u(){try{let e=await fetch(`data/songs-index.json`);e.ok&&(s=await e.json(),d(),p())}catch(e){console.error(`Error al cargar data/songs-index.json:`,e)}}function d(){let e=document.getElementById(`expansion-song-select`),t=document.getElementById(`expansion-search-input`),n=t?t.value.toLowerCase().trim():``;if(!e)return;let r=s.filter(e=>!n||e.title&&e.title.toLowerCase().includes(n)||e.dbno&&e.dbno.toString().includes(n)||e.id&&e.id.toLowerCase().includes(n));if(r.length===0){e.innerHTML=`<option value="">No hay coincidencias</option>`,f();return}e.innerHTML=r.map(e=>{let t=!!(c.songs&&c.songs[e.id]),n=t?` (Ya registrado)`:``;return`<option value="${e.id}" ${t?`disabled style="color: #999;"`:``}>#${e.dbno||`S/N`} - ${e.title}${n}</option>`}).join(``),f()}function f(){let e=document.getElementById(`expansion-song-select`),t=document.getElementById(`expansion-btn-add`);if(!e||!t)return;let n=e.value,r=!n||c.songs&&c.songs[n]!==void 0;t.disabled=r,r?(t.style.opacity=`0.5`,t.style.cursor=`not-allowed`):(t.style.opacity=`1`,t.style.cursor=`pointer`)}function p(){let e=document.getElementById(`expansion-table-body`),t=document.getElementById(`expansion-count-badge`),n=document.getElementById(`expansion-table-filter`),r=n?n.value.toLowerCase().trim():``;if(!e)return;let i=Object.keys(c.songs||{});t&&(t.textContent=`${i.length} ${i.length===1?`registro`:`registros`}`);let a=[];if(i.forEach(e=>{let t=c.songs[e]===!0,n=s.find(t=>t.id===e)||{id:e,title:e,dbno:`S/N`};(!r||n.title.toLowerCase().includes(r)||n.dbno&&n.dbno.toString().includes(r)||e.toLowerCase().includes(r))&&a.push({id:e,title:n.title,dbno:n.dbno,enabled:t})}),a.sort((e,t)=>(e.title||``).localeCompare(t.title||``)),a.length===0){e.innerHTML=`<tr><td colspan="5" style="text-align: center; padding: 20px; color: var(--text-muted, #888);">
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
      `).join(``),e.querySelectorAll(`.expansion-toggle-checkbox`).forEach(e=>{e.addEventListener(`change`,async t=>{let n=e.dataset.id,r=e.checked;n&&await m(n,r)})}),e.querySelectorAll(`.btn-delete`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.id;t&&await g(t)})})}async function m(e,t){try{c.songs||={},c.songs[e]=t,localStorage.setItem(`expansion_songs_config`,JSON.stringify(c)),await i(o(a,`global_positions`,e),{expansion:t},{merge:!0}),p(),l(t?`Superposición activada en Firebase`:`Superposición desactivada en Firebase`)}catch(e){console.error(`Error al actualizar estado en Firebase global_positions:`,e),localStorage.setItem(`expansion_songs_config`,JSON.stringify(c)),p(),l(`Error al sincronizar con Firebase: `+(e.message||e),!0)}}async function h(e){try{c.songs||={},c.songs[e]=!0,localStorage.setItem(`expansion_songs_config`,JSON.stringify(c)),await i(o(a,`global_positions`,e),{expansion:!0},{merge:!0});let t=document.getElementById(`expansion-search-input`),n=document.getElementById(`expansion-clear-search`);t&&(t.value=``),n&&(n.style.display=`none`),p(),d(),l(`Canto registrado permanentemente en Firebase`)}catch(e){console.error(`Error al guardar en Firebase global_positions:`,e),localStorage.setItem(`expansion_songs_config`,JSON.stringify(c)),p(),d(),l(`Error al guardar en Firebase: `+(e.message||e),!0)}}async function g(e){try{c.songs&&delete c.songs[e],localStorage.setItem(`expansion_songs_config`,JSON.stringify(c));let n=o(a,`global_positions`,e);try{await t(n,{expansion:r()})}catch{await i(n,{expansion:r()},{merge:!0})}p(),d(),l(`Registro eliminado de Firebase`)}catch(e){console.error(`Error al eliminar en Firebase global_positions:`,e),p(),d(),l(`Error al eliminar: `+(e.message||e),!0)}}function _(){try{let t=localStorage.getItem(`expansion_songs_config`);if(t)try{c=JSON.parse(t)||{songs:{}},p()}catch{}e(n(a,`global_positions`),e=>{c.songs||={},e.forEach(e=>{let t=e.data();t&&t.expansion!==void 0?c.songs[e.id]=t.expansion===!0:c.songs[e.id]!==void 0&&delete c.songs[e.id]}),localStorage.setItem(`expansion_songs_config`,JSON.stringify(c)),p(),d()},e=>{console.warn(`Firebase global_positions (offline/permisos):`,e)})}catch(e){console.warn(`Error iniciando listener de expansion_songs:`,e)}}document.addEventListener(`DOMContentLoaded`,()=>{u(),_();let e=document.getElementById(`expansion-search-input`),t=document.getElementById(`expansion-clear-search`);e&&e.addEventListener(`input`,()=>{t&&(t.style.display=e.value?`block`:`none`),d()}),t&&t.addEventListener(`click`,()=>{e.value=``,t.style.display=`none`,d()});let n=document.getElementById(`expansion-song-select`);n&&n.addEventListener(`change`,f);let r=document.getElementById(`expansion-btn-add`);r&&r.addEventListener(`click`,async()=>{let e=n?n.value:``;e&&await h(e)});let i=document.getElementById(`expansion-table-filter`),a=document.getElementById(`expansion-clear-table-filter`);i&&i.addEventListener(`input`,()=>{a&&(a.style.display=i.value?`block`:`none`),p()}),a&&a.addEventListener(`click`,()=>{i.value=``,a.style.display=`none`,p()})});