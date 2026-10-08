import{C as e,_ as t,c as n,g as r,j as i,m as a,v as o,w as s,x as c}from"./preload-helper-BoU5IU9X.js";/* empty css                  */import"./main-rLZJCTWK.js";import{t as l}from"./songs-data-BjOYZCsz.js";/* empty css              *//* empty css               */function u(e,t){if(!e)return`-`;let n=parseInt(t)||0,r=e.acorde||`La m`,i=[`Do`,`Do#`,`Re`,`Re#`,`Mi`,`Fa`,`Fa#`,`Sol`,`Sol#`,`La`,`Sib`,`Si`],a=r.toLowerCase().includes(`m`),o=r.split(` `)[0].replace(`m`,``).trim(),s=i.indexOf(o);if(s!==-1){let e=(s+n)%12;return e<0&&(e+=12),i[e]+(a?` m`:``)}return r}var d=e=>e?e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/ñ/g,`n`).replace(/[^a-z0-9\s]/g,``).trim():``,f=[],p=null;function m(){try{let e=localStorage.getItem(`resucito_parroquias_cache`);if(e){let t=JSON.parse(e);if(Array.isArray(t)&&t.length>0)return t}}catch{}return[]}document.addEventListener(`DOMContentLoaded`,async()=>{h(),y(),b(),await g(),await v()});function h(){document.querySelectorAll(`.perfil-section`).forEach(e=>{let t=e.querySelector(`.section-header`),n=e.querySelector(`.section-content`);t&&n&&!t.getAttribute(`onclick`)&&t.addEventListener(`click`,t=>{t.target.closest(`button, select, input, a`)||(e.classList.toggle(`collapsed`)?n.classList.add(`cfg-close`):n.classList.remove(`cfg-close`))})})}async function g(){let e=document.getElementById(`userCountry`),t=document.getElementById(`link-crear-parroquia`);if(e)try{let n=await fetch(`./data/paises.json`);if(!n.ok)throw Error(`No se pudo cargar paises.json`);let r=(await n.json()).map(e=>e.nombre||e).filter(Boolean),i=r.findIndex(e=>d(e).includes(`dominicana`)),a=`República Dominicana`;i!==-1&&(a=r.splice(i,1)[0]),r.sort((e,t)=>e.localeCompare(t,`es`,{sensitivity:`base`})),e.innerHTML=`<option value="">-- Selecciona tu país --</option>`+[a,...r].map(e=>`<option value="${e}">${d(e).includes(`dominicana`)?`🇩🇴 `:``}${e}</option>`).join(``),e.addEventListener(`change`,()=>{let n=e.value;t&&(t.href=`datosparroquia.html?pais=${encodeURIComponent(n)}&retorno=perfil.html`),v(n)})}catch(t){console.error(`Error cargando países:`,t),e.innerHTML=`<option value="">Error al cargar países</option>`}}function _(e,t,n){if(!e)return;let r=f;if(t){let e=d(t);r=f.filter(t=>{let n=d(t.pais||t.ciudad||``);return n===e||n.includes(e)||e.includes(n)})}let i=`<option value="">-- Selecciona tu parroquia --</option>`;r.length>0?i+=r.map(e=>{let n=[];e.sector&&n.push(e.sector),e.provincia&&n.push(e.provincia);let r=n.length>0?` (${n.join(`, `)})`:``,i=!t&&e.pais?` - ${e.pais}`:``;return`<option value="${e.nombre}">${e.nombre}${r}${i}</option>`}).join(``):t&&(i+=`<option value="" disabled>No hay parroquias registradas para ${t}</option>`),i+=`<option value="__CREAR__">➕ Mi parroquia no existe (Crear Parroquia)...</option>`,e.innerHTML=i;let a=n||e.dataset.valorSeleccionado||``;if(a&&a!==`__CREAR__`){if(!Array.from(e.options).some(e=>e.value===a)){let t=document.createElement(`option`);t.value=a,t.textContent=`${a} (Guardada)`,e.insertBefore(t,e.lastElementChild)}e.value=a,e.dataset.valorSeleccionado=a}}async function v(e=``,a=``){let l=document.getElementById(`userParroquia`),u=document.getElementById(`userCountry`),h=document.getElementById(`link-crear-parroquia`);if(!l)return;let g=e||(u?u.value:``);if(h&&(h.href=`datosparroquia.html?pais=${encodeURIComponent(g)}&retorno=perfil.html`),a&&(l.dataset.valorSeleccionado=a),f.length===0){let e=m();e.length>0&&(f=e)}if(f.length===0)try{let e=await fetch(`./data/parroquias.json`);if(e.ok){let t=await e.json();if(Array.isArray(t)&&t.length>0){f=t;try{localStorage.setItem(`resucito_parroquias_cache`,JSON.stringify(f))}catch{}}}}catch(e){console.warn(`No se pudo cargar data/parroquias.json:`,e)}_(l,g,a),l.dataset.hasCrearListener||(l.dataset.hasCrearListener=`true`,l.addEventListener(`change`,async()=>{if(l.value===`__CREAR__`){let e=u?u.value:``;window.location.href=`datosparroquia.html?pais=${encodeURIComponent(e)}&retorno=perfil.html`;return}let e=l.value;if(l.dataset.valorSeleccionado=e,!e)return;let t=f.find(t=>t.nombre===e||t.id===e),a=t?t.nombre:e,s=t?t.pais||``:u?u.value:``,d=t?t.id:``;localStorage.setItem(`parroquia_perfil_nombre`,a),localStorage.setItem(`parroquia_activa_nombre`,a),d&&localStorage.setItem(`parroquia_activa_id`,d);try{let e={},t=localStorage.getItem(`user_profile_data`);t&&(e=JSON.parse(t)),e.parroquia=a,s&&(e.pais=s),e.ultimaActualizacion=new Date().toISOString(),localStorage.setItem(`user_profile_data`,JSON.stringify(e))}catch{}let p=n()||r.currentUser;if(p)try{await i(c(o,`usuarios`,p.uid,`perfil`,`config`),{parroquia:a,pais:s,ultimaActualizacion:new Date().toISOString()},{merge:!0})}catch(e){console.warn(`Error sincronizando parroquia a perfil en Firestore:`,e)}})),p||=(async()=>{try{let e=s(t(o,`parroquias`)),n=new Promise((e,t)=>setTimeout(()=>t(Error(`timeout`)),4e3)),r=(await Promise.race([e,n])).docs.map(e=>({id:e.id,...e.data()}));if(r.length>0){let e=new Map;f.forEach(t=>e.set(`${d(t.nombre)}|${d(t.sector||``)}`,t)),r.forEach(t=>e.set(`${d(t.nombre)}|${d(t.sector||``)}`,t)),f=Array.from(e.values()),f.sort((e,t)=>(e.nombre||``).localeCompare(t.nombre||``,`es`,{sensitivity:`base`}));try{localStorage.setItem(`resucito_parroquias_cache`,JSON.stringify(f))}catch{}let t=u?u.value:g,n=l.value||l.dataset.valorSeleccionado||a;_(l,t,n)}}catch(e){e.message!==`timeout`&&console.warn(`Advertencia al sincronizar parroquias con Firestore:`,e)}finally{p=null}})()}function y(){let e=document.getElementById(`userComunidad`);if(e){e.innerHTML=`<option value="">Seleccione la comunidad</option>`;for(let t=1;t<=73;t++){let n=document.createElement(`option`);n.value=t,n.innerText=`Comunidad ${t}`,e.appendChild(n)}}}function b(){a(async t=>{let a=document.getElementById(`overlay-auth-aviso`);if(t){a&&a.remove();let n=document.getElementById(`profile-info`),r=document.getElementById(`user-photo`),s=document.getElementById(`user-name`),l=document.getElementById(`user-email`),u=document.getElementById(`userName`);n&&(n.style.display=`flex`),r&&(r.src=t.photoURL||`/img/christ.png`),s&&(s.innerText=t.displayName||`Usuario`),l&&(l.innerText=t.email||``),u&&(u.value=t.displayName||`Usuario`);try{let n=null,r=await e(c(o,`usuarios`,t.uid,`perfil`,`config`));if(r.exists()&&(n=r.data()),n)await S(n),localStorage.setItem(`user_profile_data`,JSON.stringify(n));else{let e=localStorage.getItem(`user_profile_data`);e&&await S(JSON.parse(e))}if(!sessionStorage.getItem(`login_registrado_`+t.uid)){let e=new Date().getTime();await i(c(o,`usuarios`,t.uid,`perfil`,`config`,`inicioSesion`,e.toString()),{fecha:new Date().toLocaleString(),timestamp:e},{merge:!0}),sessionStorage.setItem(`login_registrado_`+t.uid,`true`)}}catch(e){console.warn(`⚠️ Error cargando el perfil desde Firestore:`,e)}await T()}else setTimeout(()=>{if(n()||r.currentUser){let e=document.getElementById(`overlay-auth-aviso`);e&&e.remove()}else x()},600)})}function x(){if(document.getElementById(`overlay-auth-aviso`))return;let e=document.createElement(`div`);e.id=`overlay-auth-aviso`,e.className=`modal-overlay`,e.innerHTML=`
    <div class="modal-content-card" style="text-align: center;">
      <span class="material-symbols-outlined" style="font-size: 64px; color: var(--accent-color, #d01212);">lock</span>
      <h2 style="margin: 16px 0 8px; font-size: 1.4rem;">Cuenta Necesaria</h2>
      <p style="color: var(--text-muted, #666); font-size: 0.9rem; line-height: 1.5; margin-bottom: 24px;">
        Para entrar a tu Perfil de Salmista y sincronizar tus cejillas, notas y valoraciones en la nube, debes iniciar sesión con tu cuenta de Google.
      </p>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <button id="btn-modal-login" style="background: var(--accent-color, #d01212); color: white; border: none; padding: 12px; border-radius: 12px; font-weight: bold; font-size: 0.95rem; cursor: pointer;">
          Iniciar Sesión con Google
        </button>
        <button id="btn-modal-back" style="background: rgba(0,0,0,0.06); color: var(--text-color, #333); border: none; padding: 12px; border-radius: 12px; font-weight: bold; font-size: 0.95rem; cursor: pointer;">
          Volver al Inicio
        </button>
      </div>
    </div>
  `,document.body.appendChild(e),document.getElementById(`btn-modal-login`)?.addEventListener(`click`,()=>{window.firebaseAPI?.login&&window.firebaseAPI.login()}),document.getElementById(`btn-modal-back`)?.addEventListener(`click`,()=>{window.location.href=`./index.html`})}async function S(e){if(!e)return;let t=document.getElementById(`userCountry`);document.getElementById(`userParroquia`);let n=document.getElementById(`userComunidad`),r=document.getElementById(`userStep`);t&&e.pais&&(t.value=e.pais);let i=e.parroquia||e.nombreParroquia||``;i||=localStorage.getItem(`parroquia_perfil_nombre`)||localStorage.getItem(`parroquia_activa_nombre`)||``,await v(e.pais||(t?t.value:``),i),n&&(e.comunidad||e.numeroComunidad)&&(n.value=e.comunidad||e.numeroComunidad),r&&(e.etapa!==void 0||e.etapaCamino!==void 0)&&(r.value=e.etapa??e.etapaCamino)}window.guardarPerfil=async function(){let e=document.getElementById(`userName`),t=document.getElementById(`userCountry`),a=document.getElementById(`userParroquia`),s=document.getElementById(`userComunidad`),l=document.getElementById(`userStep`),u=a?a.value:``;u===`__CREAR__`&&(u=``);let d={nombre:e?e.value:``,pais:t?t.value:``,parroquia:u,comunidad:s?s.value:``,etapa:l?l.value:`0`,ultimaActualizacion:new Date().toISOString()};if(localStorage.setItem(`user_profile_data`,JSON.stringify(d)),u){localStorage.setItem(`parroquia_perfil_nombre`,u),localStorage.setItem(`parroquia_activa_nombre`,u);let e=f.find(e=>e.nombre===u||e.id===u);e&&localStorage.setItem(`parroquia_activa_id`,e.id)}let p=n()||r.currentUser;if(!p){window.mostrarConfirmacion&&window.mostrarConfirmacion({titulo:`Perfil Guardado`,mensaje:`Perfil guardado localmente en este dispositivo. Inicia sesión para sincronizarlo con la nube.`,icono:`save`,textoSi:`Aceptar`,textoNo:`Cerrar`});return}try{await i(c(o,`usuarios`,p.uid,`perfil`,`config`),d,{merge:!0}),window.mostrarConfirmacion&&window.mostrarConfirmacion({titulo:`Perfil Guardado`,mensaje:`¡Todo listo! Tu perfil de salmista se ha guardado y sincronizado en la nube 🎸`,icono:`cloud_done`,textoSi:`Aceptar`,textoNo:`Cerrar`})}catch(e){console.error(`Error guardando perfil en Firestore:`,e),window.mostrarConfirmacion&&window.mostrarConfirmacion({titulo:`Guardado Local`,mensaje:`Perfil guardado en este teléfono. Ocurrió un detalle al sincronizar con la nube.`,icono:`warning`,textoSi:`Aceptar`,textoNo:`Cerrar`})}};var C={};async function w(){let e=n()||r.currentUser;if(e)try{(await s(t(o,`usuarios`,e.uid,`dbdata`))).forEach(e=>{let t=e.id.toLowerCase().trim(),n=e.data();C[t]=n.valor||n})}catch(e){console.warn(`⚠️ Error cargando dbdata de Firestore:`,e)}}async function T(){let e=document.getElementById(`lista-cantos-gestion`);if(!e)return;Object.keys(C).length===0&&await w();let t=l.filter(e=>e.id);if(t.sort((e,t)=>d(e.title||e.titulo).localeCompare(d(t.title||t.titulo))),t.length===0){e.innerHTML=`<p style='text-align:center; padding: 20px;'>Cargando base de datos de canciones...</p>`;return}let n=`
    <div style="position: relative; width: 100%; margin-bottom: 15px;">
      <input id="inputBuscador" type="text" placeholder="🔍 Buscar por título..." 
        style="width: 100%; padding: 10px 40px 10px 14px; border-radius: 20px; border: 1.5px solid var(--panel-border, #ccc); background: #ffffff !important; color: #212529 !important; font-size: 0.9rem; box-sizing: border-box;">
      <span id="btnLimpiar" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); cursor: pointer; color: #888; font-size: 20px; font-weight: bold; display: none;">&times;</span>
    </div>
    
    <div class="tabla-wrapper">
      <table class="tabla-gestion" id="tablaCantos">
        <thead>
          <tr>
            <th style="text-align: left;">Canto</th>
            <th>Valoración</th>
            <th>Uso</th>
            <th>Cejilla</th>
            <th>Tono</th>
          </tr>
        </thead>
        <tbody id="cuerpo-tabla-perfil">
  `;t.forEach(e=>{let t=e.id,r=t.toLowerCase().trim(),i=localStorage.getItem(`canto-config-${t}`)||localStorage.getItem(`data-${t}`),a=null;if(i)try{a=JSON.parse(i)}catch{}let o=C[r]||null,s=a||o?Object.assign({},o,a):null,c=`-`;if(s&&(s.cejilla!==void 0||s.capo!==void 0)){let e=String(s.cejilla??s.capo).trim();e!==``&&(c=e)}let l=`-`;s&&(s.acorde!==void 0||s.key!==void 0)&&(l=u(e,String(s.acorde??s.key).trim()));let d=`---`;if(s&&(s.fecha||s.valor)){let e=s.fecha||s.valor,t=null;e&&typeof e.toDate==`function`?t=e.toDate():e&&e.seconds?t=new Date(e.seconds*1e3):e&&(t=new Date(e)),t&&!isNaN(t.getTime())&&(d=`${String(t.getDate()).padStart(2,`0`)} ${[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sep`,`oct`,`nov`,`dic`][t.getMonth()]}`)}let f=`./#canto=${t}`,p=e.title||e.titulo||`Sin título`;n+=`
      <tr class="fila-canto" id="fila-${t}">
        <td style="text-align:left;">
          <a href="${f}" class="listcanto">
            ${p}
          </a>
        </td>
        <td id="valoracion-${t}">
          ${E(t,s?.valoracion||0)}
        </td>
        <td id="uso-${t}">
          ${d} <span onclick="window.abrirCalendario('${t}', '${p.replace(/'/g,`\\'`)}')" style="cursor:pointer; font-size:16px;">📅</span>
        </td>
        <td>${e.cejilla||0} / <b id="cejilla-tu-${t}" style="color: var(--accent-color, #d01212);">${c}</b></td>
        <td>${e.acorde||`La`} / <b id="acorde-tu-${t}" style="color: var(--accent-color, #d01212);">${l}</b></td>
      </tr>
    `}),n+=`</tbody></table></div>`,e.innerHTML=n;let r=document.getElementById(`inputBuscador`),i=document.getElementById(`btnLimpiar`);r&&(r.addEventListener(`input`,()=>{let e=d(r.value);i&&(i.style.display=e?`block`:`none`),document.querySelectorAll(`#cuerpo-tabla-perfil tr`).forEach(t=>{let n=d(t.textContent);t.style.display=n.includes(e)?``:`none`})}),r.addEventListener(`keydown`,e=>{if(e.key===`Tab`&&!e.shiftKey){let t=Array.from(document.querySelectorAll(`#cuerpo-tabla-perfil tr`)).find(e=>e.style.display!==`none`);if(t){let n=t.querySelector(`.listcanto`);n&&(e.preventDefault(),n.focus())}}else if(e.key===`Enter`){let t=Array.from(document.querySelectorAll(`#cuerpo-tabla-perfil tr`)).find(e=>e.style.display!==`none`);if(t){let n=t.querySelector(`.listcanto`);n&&(e.preventDefault(),n.click())}}})),i&&r&&i.addEventListener(`click`,()=>{r.value=``,i.style.display=`none`,document.querySelectorAll(`#cuerpo-tabla-perfil tr`).forEach(e=>e.style.display=``)})}function E(e,t){let n=`<div class="estrellas-contenedor" style="cursor:pointer;">`;for(let r=1;r<=5;r++)n+=`<span onclick="window.guardarValoracion('${e}', ${r})" style="color: ${r<=t?`#FFD700`:`#C0C0C0`}; padding: 0 1px;">★</span>`;return n+=`</div>`,n}window.guardarValoracion=function(e,t){let n=`canto-config-${e}`,r={};try{r=JSON.parse(localStorage.getItem(n)||`{}`)}catch{}let i=parseInt(r.valoracion)||0,a=t;t===1&&i===1&&(a=0),r.valoracion=a,localStorage.setItem(n,JSON.stringify(r));let o=document.getElementById(`valoracion-${e}`);if(o&&(o.innerHTML=E(e,a)),typeof window.guardarHistorialCantoEnNube==`function`){let t=C[e.toLowerCase().trim()]||{},n=t.cejilla||`0`,r=t.acorde||`0`;window.guardarHistorialCantoEnNube(e,r,n)}};var D=new Date().getFullYear(),O=new Date().getMonth(),k=null,A=``,j=`days`,M=[];window.abrirCalendario=async function(e,i){k=e,A=i,j=`days`,M=[];let a=document.getElementById(`modalCalendario`),c=document.getElementById(`nombreCantoCalendario`),l=document.getElementById(`calendarioDinamico`);if(!a)return;c&&(c.innerText=i||`Canto #${e}`),l&&(l.innerHTML=`
      <div style="text-align: center; padding: 40px 10px; color: #777;">
        <div class="spinner" style="border: 3px solid rgba(0,0,0,0.1); border-top: 3px solid #d4af37; border-radius: 50%; width: 28px; height: 28px; animation: spin 1s linear infinite; margin: 0 auto 12px;"></div>
        <p style="margin: 0; font-size: 0.9rem;">Cargando historial desde Firebase...</p>
      </div>
    `),a.style.display=`flex`;let u=n()||r.currentUser;if(u)try{let n=e.toLowerCase().trim();(await s(t(o,`usuarios`,u.uid,`dbdata`,n,`historial`))).forEach(e=>{let t=e.id,n=e.data(),r=n.valor||n,i=null;if(r.fecha&&(typeof r.fecha.toDate==`function`?i=r.fecha.toDate():r.fecha.seconds?i=new Date(r.fecha.seconds*1e3):isNaN(new Date(r.fecha).getTime())||(i=new Date(r.fecha))),!i||isNaN(i.getTime())){let e=Number(t);i=isNaN(e)?new Date:new Date(e)}M.push({id:t,timestamp:i.getTime(),dateObj:i,acorde:r.acorde,cejilla:r.cejilla,valoracion:r.valoracion,detalle:`Acorde: ${r.acorde===void 0?`-`:r.acorde}, Cejilla: ${r.cejilla||`0`}`})})}catch(e){console.warn(`⚠️ Error cargando historial desde Firebase:`,e)}if(M.length===0){let t=localStorage.getItem(`canto-config-${e}`)||localStorage.getItem(`data-${e}`);if(t)try{let e=JSON.parse(t);if((Array.isArray(e.historial)?e.historial:[]).forEach(t=>{if(t&&t.fecha){let n=new Date(t.fecha);isNaN(n.getTime())||M.push({timestamp:n.getTime(),dateObj:n,acorde:t.acorde===void 0?e.acorde||e.key||`0`:t.acorde,cejilla:t.cejilla===void 0?e.cejilla||e.capo||`0`:t.cejilla,valoracion:e.valoracion||0,detalle:t.detalle||`Uso registrado`})}}),M.length===0&&(e.fecha||e.valor)){let t=new Date(e.fecha||e.valor);isNaN(t.getTime())||M.push({timestamp:t.getTime(),dateObj:t,acorde:e.acorde||e.key||`0`,cejilla:e.cejilla||e.capo||`0`,valoracion:e.valoracion||0,detalle:`Uso registrado`})}}catch{}}if(M.length>0){M.sort((e,t)=>t.timestamp-e.timestamp);let e=M[0].dateObj;D=e.getFullYear(),O=e.getMonth()}else{let e=new Date;D=e.getFullYear(),O=e.getMonth()}N()};function N(){let e=document.getElementById(`calendarioDinamico`);if(!e||!k)return;let t={};M.forEach(e=>{if(e&&e.dateObj){let n=e.dateObj,r=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}`;t[r]||(t[r]=[]),t[r].push(e)}});let n=M.length,r=[`ENERO`,`FEBRERO`,`MARZO`,`ABRIL`,`MAYO`,`JUNIO`,`JULIO`,`AGOSTO`,`SEPTIEMBRE`,`OCTUBRE`,`NOVIEMBRE`,`DICIEMBRE`],i=r[O];if(j===`months`){let t=``;r.forEach((e,n)=>{let r=n===O;t+=`
        <button class="cal-select-month-btn" data-month="${n}" style="background: ${r?`#d4af37`:`var(--panel-bg, #ffffff)`}; color: ${r?`#ffffff`:`var(--text-color, #333)`}; ${r?`box-shadow: 0 3px 8px rgba(212, 175, 55, 0.4);`:`border: 1px solid var(--panel-border, rgba(0,0,0,0.1));`} padding: 12px 6px; border-radius: 0px; font-weight: 700; font-size: 0.85rem; cursor: pointer; border: none; text-transform: uppercase;">
          ${e.slice(0,3)}
        </button>
      `}),e.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
        <span style="font-size: 1.1rem; font-weight: 700; color: var(--text-color);">Seleccionar Mes</span>
        <button id="btn-cal-year-trigger" style="background: rgba(0,0,0,0.08); border: none; border-radius: 8px; padding: 6px 12px; font-weight: 800; cursor: pointer; color: var(--accent-color, #d01212); font-size: 0.95rem;">
          ${D} ▾
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
        ${t}
      </div>

      <div style="text-align: center; margin-top: 10px;">
        <button id="btn-cal-cancel-nav" style="background: transparent; border: none; color: var(--text-muted, #777); font-size: 0.85rem; font-weight: 600; cursor: pointer; text-decoration: underline;">Volver al Calendario</button>
      </div>
    `,document.getElementById(`btn-cal-year-trigger`)?.addEventListener(`click`,()=>{j=`years`,N()}),document.getElementById(`btn-cal-cancel-nav`)?.addEventListener(`click`,()=>{j=`days`,N()}),e.querySelectorAll(`.cal-select-month-btn`).forEach(e=>{e.addEventListener(`click`,()=>{O=parseInt(e.dataset.month),j=`days`,N()})});return}if(j===`years`){let t=new Date().getFullYear()+5,n=``;for(let e=2020;e<=t;e++){let t=e===D;n+=`
        <button class="cal-select-year-btn" data-year="${e}" style="background: ${t?`#d4af37`:`var(--panel-bg, #ffffff)`}; color: ${t?`#ffffff`:`var(--text-color, #333)`}; ${t?`box-shadow: 0 3px 8px rgba(212, 175, 55, 0.4);`:`border: 1px solid var(--panel-border, rgba(0,0,0,0.1));`} padding: 12px 6px; border-radius: 10px; font-weight: 700; font-size: 0.95rem; cursor: pointer; border: none;">
          ${e}
        </button>
      `}e.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
        <span style="font-size: 1.1rem; font-weight: 700; color: var(--text-color);">Seleccionar Año</span>
        <button id="btn-cal-back-to-months" style="background: rgba(0,0,0,0.08); border: none; border-radius: 8px; padding: 6px 12px; font-weight: 700; cursor: pointer; color: var(--text-color); font-size: 0.85rem;">
          Meses
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-height: 240px; overflow-y: auto; padding-right: 4px; margin-bottom: 16px;">
        ${n}
      </div>

      <div style="text-align: center; margin-top: 10px;">
        <button id="btn-cal-cancel-nav-years" style="background: transparent; border: none; color: var(--text-muted, #777); font-size: 0.85rem; font-weight: 600; cursor: pointer; text-decoration: underline;">Volver al Calendario</button>
      </div>
    `,document.getElementById(`btn-cal-back-to-months`)?.addEventListener(`click`,()=>{j=`months`,N()}),document.getElementById(`btn-cal-cancel-nav-years`)?.addEventListener(`click`,()=>{j=`days`,N()}),e.querySelectorAll(`.cal-select-year-btn`).forEach(e=>{e.addEventListener(`click`,()=>{D=parseInt(e.dataset.year),j=`months`,N()})});return}let a=new Date(D,O,1).getDay(),o=new Date(D,O+1,0).getDate(),s=``;for(let e=0;e<a;e++)s+=`<div></div>`;for(let e=1;e<=o;e++){let n=`${D}-${String(O+1).padStart(2,`0`)}-${String(e).padStart(2,`0`)}`;t[n]?s+=`
        <div class="dia-calendario activo" data-fecha="${n}" style="background: #d4af37; color: #ffffff; font-weight: 800; border-radius: 0px; padding: 6px 0; text-align: center; cursor: pointer; box-shadow: 0 3px 8px rgba(212, 175, 55, 0.4); font-size: 0.95rem;">
          ${e}
        </div>
      `:s+=`
        <div class="dia-calendario" style="color: var(--text-color, #333); font-weight: 500; padding: 6px 0; text-align: center; font-size: 0.95rem;">
          ${e}
        </div>
      `}e.innerHTML=`
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
      <button id="btn-cal-prev" style="background: rgba(0,0,0,0.08); border: none; border-radius: 6px; padding: 4px 14px; font-weight: bold; cursor: pointer; color: var(--text-color); font-size: 1rem;">&lt;</button>
      
      <button id="btn-cal-title-selector" class="cCalendar" title="Toca para cambiar Mes y Año">
        <span>${i} ${D}</span>
        <span style="font-size: 0.75rem; color: var(--accent-color, #d01212);">▼</span>
      </button>

      <button id="btn-cal-next" style="background: rgba(0,0,0,0.08); border: none; border-radius: 6px; padding: 4px 14px; font-weight: bold; cursor: pointer; color: var(--text-color); font-size: 1rem;">&gt;</button>
    </div>

    <div style="background: var(--input-bg, #fafafa); border: 1px solid var(--panel-border, rgba(0,0,0,0.08)); border-radius: 12px; padding: 12px; margin-bottom: 16px;">
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-weight: 700; font-size: 0.8rem; color: var(--text-muted, #777); margin-bottom: 10px;">
        <div>D</div><div>L</div><div>M</div><div>M</div><div>J</div><div>V</div><div>S</div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; align-items: center;">
        ${s}
      </div>
    </div>

    <hr style="border: none; border-top: 1px solid var(--panel-border, rgba(0,0,0,0.1)); margin: 14px 0;">

    <div style="text-align: center;">
      <p style="margin: 0; font-size: 0.95rem; color: var(--text-color);">
        Has cambiado el Acordes o Cejilla <b id="btn-ver-reporte-historial" style="color: #d01212; border-bottom: 2px solid #d01212; font-size: 1.15rem; cursor: pointer;" title="Toca para ver el reporte de historial">${n}</b> veces
      </p>
      <p style="margin: 4px 0 0 0; font-size: 0.75rem; color: var(--text-muted, #888); font-style: italic;">
        (Toca el número para ver el detalle)
      </p>
    </div>

    <div id="cal-detalle-box" style="display: none; margin-top: 12px; background: rgba(0,0,0,0.03); border: 1px solid var(--panel-border); border-radius: 8px; padding: 10px; font-size: 0.8rem;"></div>
  `,document.getElementById(`btn-ver-reporte-historial`)?.addEventListener(`click`,()=>{window.abrirReporteHistorial(k,A)}),document.getElementById(`btn-cal-title-selector`)?.addEventListener(`click`,()=>{j=`months`,N()}),document.getElementById(`btn-cal-prev`)?.addEventListener(`click`,()=>{O--,O<0&&(O=11,D--),N()}),document.getElementById(`btn-cal-next`)?.addEventListener(`click`,()=>{O++,O>11&&(O=0,D++),N()}),e.querySelectorAll(`.dia-calendario.activo`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.fecha,r=t[n]||[],i=document.getElementById(`cal-detalle-box`);if(i&&r.length>0){let e=n.split(`-`);i.innerHTML=`
          <strong style="color: var(--accent-color, #d01212);">📅 Detalle del ${`${e[2]}/${e[1]}/${e[0]}`}:</strong>
          <ul style="margin: 6px 0 0 0; padding-left: 18px;">
            ${r.map(e=>{let t=e.fecha?new Date(e.fecha).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):``;return`<li>${e.detalle||`Actividad registrada`} ${t?`(${t})`:``}</li>`}).join(``)}
          </ul>
        `,i.style.display=`block`}})})}window.abrirReporteHistorial=async function(e,i){let a=document.getElementById(`modalReporteHistorial`),c=document.getElementById(`reporteCantoTitulo`),d=document.getElementById(`reporteHistorialLista`);if(!a||!d)return;c&&(c.textContent=i||`Canto #${e}`),d.innerHTML=`
    <div style="text-align: center; padding: 30px 10px; color: #777;">
      <div class="spinner" style="border: 3px solid rgba(0,0,0,0.1); border-top: 3px solid #d4af37; border-radius: 50%; width: 26px; height: 26px; animation: spin 1s linear infinite; margin: 0 auto 10px;"></div>
      <p style="margin: 0; font-size: 0.85rem;">Cargando tu historial desde la nube...</p>
    </div>
  `,a.style.display=`flex`;let f=n()||r.currentUser,p=[];if(f)try{let n=e.toLowerCase().trim();(await s(t(o,`usuarios`,f.uid,`dbdata`,n,`historial`))).forEach(e=>{let t=e.id,n=e.data(),r=n.valor||n,i=null;if(r.fecha&&(typeof r.fecha.toDate==`function`?i=r.fecha.toDate():r.fecha.seconds?i=new Date(r.fecha.seconds*1e3):isNaN(new Date(r.fecha).getTime())||(i=new Date(r.fecha))),!i||isNaN(i.getTime())){let e=Number(t);i=isNaN(e)?new Date:new Date(e)}p.push({timestamp:i.getTime(),dateObj:i,acorde:r.acorde,cejilla:r.cejilla,valoracion:r.valoracion})})}catch(e){console.warn(`⚠️ Error leyendo historial desde Firestore:`,e)}if(p.length===0){let t=localStorage.getItem(`canto-config-${e}`)||localStorage.getItem(`data-${e}`);if(t)try{let e=JSON.parse(t);if((Array.isArray(e.historial)?e.historial:[]).forEach(t=>{if(t&&t.fecha){let n=new Date(t.fecha);isNaN(n.getTime())||p.push({timestamp:n.getTime(),dateObj:n,acorde:t.acorde===void 0?e.acorde||e.key||`0`:t.acorde,cejilla:t.cejilla===void 0?e.cejilla||e.capo||`0`:t.cejilla,valoracion:e.valoracion||0})}}),p.length===0&&(e.fecha||e.valor)){let t=new Date(e.fecha||e.valor);isNaN(t.getTime())||p.push({timestamp:t.getTime(),dateObj:t,acorde:e.acorde||e.key||`0`,cejilla:e.cejilla||e.capo||`0`,valoracion:e.valoracion||0})}}catch{}}if(p.length===0){d.innerHTML=`
      <div style="text-align: center; padding: 30px 10px; color: #777;">
        <span class="material-symbols-outlined" style="font-size: 40px; color: #ccc; margin-bottom: 8px;">history</span>
        <p style="margin: 0; font-size: 0.9rem;">No hay registros de historial de cejilla o acorde para este canto.</p>
      </div>
    `;return}p.sort((e,t)=>t.timestamp-e.timestamp);let m=p.length,h=[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sep`,`oct`,`nov`,`dic`],g=l.find(t=>t.id===e),_=``;p.forEach((e,t)=>{let n=m-t,r=e.dateObj,i=`${String(r.getDate()).padStart(2,`0`)} ${h[r.getMonth()]} ${r.getFullYear()} - ${String(r.getHours()).padStart(2,`0`)}:${String(r.getMinutes()).padStart(2,`0`)}`,a=`-`;if(e.acorde!==void 0&&e.acorde!==null){let t=String(e.acorde).trim();a=u(g,t)}let o=e.cejilla!==void 0&&e.cejilla!==null?String(e.cejilla):`0`;_+=`
      <div style="padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.06); display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem;">
          <span style="color: #888; font-weight: 500;">${i}</span>
          <span style="color: #d4af37; font-weight: 800; font-size: 0.85rem;">#${n}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 6px; font-weight: 800; font-size: 1.05rem; color: #212529;">
            <span style="font-size: 1rem;">🎸</span>
            <span>${a}</span>
          </div>
          <div style="background: rgba(0,0,0,0.05); padding: 4px 10px; border-radius: 12px; font-weight: 700; font-size: 0.85rem; color: #333; display: flex; align-items: center; gap: 4px;">
            <span style="font-size: 0.9rem;">🗜️</span>
            <span>${o}</span>
          </div>
        </div>
      </div>
    `}),d.innerHTML=_},document.addEventListener(`click`,e=>{let t=document.getElementById(`modalCalendario`),n=document.getElementById(`closeCalendario`);t&&(e.target===t||e.target===n)&&(t.style.display=`none`);let r=document.getElementById(`modalReporteHistorial`),i=document.getElementById(`closeReporteHistorial`);r&&(e.target===r||e.target===i)&&(r.style.display=`none`)}),window.addEventListener(`pageshow`,()=>{let e=localStorage.getItem(`parroquia_perfil_nombre`)||localStorage.getItem(`parroquia_activa_nombre`),t=document.getElementById(`userParroquia`),n=document.getElementById(`userCountry`);t&&e&&t.value!==e&&_(t,n?n.value:``,e)});