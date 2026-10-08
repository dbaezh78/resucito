const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-BDG8FWB6.js","./preload-helper-BoU5IU9X.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,_ as n,c as r,f as i,i as a,j as o,l as s,m as c,p as l,t as u,u as d,v as f,w as p,x as m}from"./preload-helper-BoU5IU9X.js";/* empty css              */var h=[],g=null,_=[],v=[{name:`Ciclo A`,file:`data/seucaristia/cicloa.json`},{name:`Ciclo B`,file:`data/seucaristia/ciclob.json`},{name:`Ciclo C`,file:`data/seucaristia/cicloc.json`},{name:`Año Par`,file:`data/seucaristia/anopar.json`},{name:`Año Impar`,file:`data/seucaristia/anoimpar.json`},{name:`Ferias`,file:`data/seucaristia/ferias.json`},{name:`Santos`,file:`data/seucaristia/santos.json`}],y=document.getElementById(`psalms-list-container`),b=document.getElementById(`search-psalms-input`),x=document.getElementById(`clear-search-btn`),S=document.getElementById(`filtered-count-badge`),C=document.getElementById(`cloud-status-text`),w=`Todos`,T=`Todos`,E=`Todos`,D=`Todos`,O=`Todos`;document.getElementById(`group-ciclo`);var k=document.getElementById(`group-tiempo`),A=document.getElementById(`group-dia`),j=document.getElementById(`group-mes`),M=document.getElementById(`group-dia-mes`),N=document.getElementById(`pills-ciclos`),P=document.getElementById(`pills-tiempos`),F=document.getElementById(`pills-dias`),I=document.getElementById(`pills-meses`),L=document.getElementById(`pills-dias-mes`),R=document.getElementById(`f-title`),ee=document.getElementById(`f-id`),z=document.getElementById(`f-subtitle`),B=document.getElementById(`f-respuesta`),V=document.getElementById(`f-respuesta-opt`),H=document.getElementById(`f-ciclo`),U=document.getElementById(`f-tiempo`),W=document.getElementById(`f-dia`),G=document.getElementById(`f-orden`),K=document.getElementById(`f-texto`),te=document.getElementById(`strophes-count-label`),ne=document.getElementById(`prev-title`),re=document.getElementById(`prev-subtitle`),ie=document.getElementById(`prev-body`);function q(e,t=`check_circle`){let n=document.getElementById(`app-status-toast`),r=document.getElementById(`toast-message`),i=document.getElementById(`toast-icon`);r.textContent=e,i.textContent=t,n.classList.add(`show`),setTimeout(()=>n.classList.remove(`show`),3500)}function J(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`):``}function Y(e){return e?e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9\s]/g,` `).replace(/\s+/g,` `).trim():``}function X(){let e=document.getElementById(`btn-theme-toggle`);(localStorage.getItem(`theme`)===`dark`||document.body.classList.contains(`theme-dark`))&&document.body.classList.add(`theme-dark`),e.onclick=()=>{document.body.classList.toggle(`theme-dark`);let e=document.body.classList.contains(`theme-dark`);localStorage.setItem(`theme`,e?`dark`:`light`)}}async function ae(){try{let e=[],t=new Set;for(let n of v)try{let r=await fetch(n.file);if(r.ok){let n=await r.json();Array.isArray(n)&&n.forEach(n=>{n&&n.id&&!t.has(n.id)&&(t.add(n.id),e.push(n))})}}catch(e){console.warn(`Error cargando archivo ${n.file}:`,e)}h=e,C.textContent=`Local (${h.length} Salmos)`,Q(),h.length>0&&ue(h[0])}catch(e){console.error(`Error al inicializar salmos locales:`,e),q(`Error cargando salmos locales`,`error`)}}function Z(e,t){e&&(e.querySelectorAll(`.aclamaciones-pill`).forEach(e=>{e.classList.remove(`active`)}),t&&t.classList.add(`active`))}function oe(){w===`Santos`?(k&&(k.style.display=`none`),A&&(A.style.display=`none`),j&&(j.style.display=`flex`),M&&(D===`Todos`?M.style.display=`none`:(M.style.display=`flex`,se()))):w===`Todos`?(k&&(k.style.display=`none`),A&&(A.style.display=`none`),j&&(j.style.display=`none`),M&&(M.style.display=`none`)):(j&&(j.style.display=`none`),M&&(M.style.display=`none`),k&&(k.style.display=`flex`),A&&(T===`Todos`?A.style.display=`none`:A.style.display=`flex`))}function se(){if(!L)return;L.innerHTML=``;let e=h.filter(e=>e.ciclo===`Santos`&&Y(e.tiempo||``)===Y(D)),t=Array.from(new Set(e.map(e=>parseInt(e.dia,10)).filter(e=>!isNaN(e)))).sort((e,t)=>e-t),n=document.createElement(`button`);n.type=`button`,n.className=`aclamaciones-pill${O===`Todos`?` active`:``}`,n.dataset.diaMes=`Todos`,n.textContent=`Todos`,n.onclick=()=>{Z(L,n),O=`Todos`,Q()},L.appendChild(n),t.forEach(e=>{let t=document.createElement(`button`);t.type=`button`;let n=String(e);t.className=`aclamaciones-pill${O===n?` active`:``}`,t.dataset.diaMes=n,t.textContent=n,t.onclick=()=>{Z(L,t),O=n,Q()},L.appendChild(t)})}function ce(){N&&N.querySelectorAll(`.aclamaciones-pill`).forEach(e=>{e.onclick=()=>{Z(N,e),w=e.dataset.ciclo,T=`Todos`,E=`Todos`,D=`Todos`,O=`Todos`,P&&Z(P,P.querySelector(`[data-tiempo="Todos"]`)),F&&Z(F,F.querySelector(`[data-dia="Todos"]`)),I&&Z(I,I.querySelector(`[data-mes="Todos"]`)),oe(),Q()}}),P&&P.querySelectorAll(`.aclamaciones-pill`).forEach(e=>{e.onclick=()=>{Z(P,e),T=e.dataset.tiempo,E=`Todos`,F&&Z(F,F.querySelector(`[data-dia="Todos"]`)),oe(),Q()}}),F&&F.querySelectorAll(`.aclamaciones-pill`).forEach(e=>{e.onclick=()=>{Z(F,e),E=e.dataset.dia,Q()}}),I&&I.querySelectorAll(`.aclamaciones-pill`).forEach(e=>{e.onclick=()=>{Z(I,e),D=e.dataset.mes,O=`Todos`,oe(),Q()}})}function Q(){let e=Y(b?b.value:``);_=h.filter(t=>{if(w===`Santos`){if(t.ciclo!==`Santos`)return!1;if(D!==`Todos`){let e=Y(D);if(Y(t.tiempo||``)!==e)return!1}if(O!==`Todos`&&String(t.dia||``).trim()!==String(O).trim())return!1}else if(w!==`Todos`){let e=Y(w),n=Y(t.ciclo||``);if(!(n===e||n.includes(e)||Array.isArray(t.ciclos)&&t.ciclos.some(t=>Y(t)===e)))return!1;if(T!==`Todos`){let e=Y(T),n=Y(t.tiempo||``);if(!(n===e||n.includes(e)||e.includes(`fiesta`)&&(n.includes(`fiesta`)||n.includes(`solemnidad`))))return!1}if(E!==`Todos`){let e=Y(E);if(!Y(t.dia||``).includes(e))return!1}}if(!e)return!0;let n=Y(t.title||``).includes(e),r=Y(t.subtitle||``).includes(e),i=Y(t.respuesta||``).includes(e),a=Y(t.textoCompleto||``).includes(e),o=Y(t.searchPool||``).includes(e);return n||r||i||a||o}),S.textContent=`${_.length} de ${h.length}`,le()}function le(){if(y.innerHTML=``,_.length===0){y.innerHTML=`
          <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
            No se encontraron salmos que coincidan con la búsqueda.
          </div>
        `;return}_.forEach(e=>{let t=document.createElement(`div`);t.className=`psalm-list-item`+(g&&g.id===e.id?` active`:``),t.innerHTML=`
          <div class="psalm-item-title">
            <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${J(e.title||`Sin título`)}</span>
            <span class="psalm-item-badge">${J(e.ciclo||``)}</span>
          </div>
          <div class="psalm-item-subtitle">${J(e.subtitle||e.respuesta||``)}</div>
        `,t.onclick=()=>ue(e),y.appendChild(t)})}function ue(e){g=e,le(),R.value=e.title||e.celebracion||``,ee.value=e.id||``,z.value=e.subtitle||e.salmo||``,B.value=e.respuesta||``,V.value=e.respuestaOpcional||``,H.value=e.ciclo||`Ciclo A`,U.value=e.tiempo||`Tiempo Ordinario`,W.value=e.dia||`Domingo`,G.value=e.orden||500,e.textoCompleto?K.value=e.textoCompleto:Array.isArray(e.estrofas)?K.value=e.estrofas.map(e=>e.join(`
`)).join(`

`):K.value=``,pe()}function de(e){if(!e)return[];let t=e.split(/\r?\n\s*\r?\n/),n=[];return t.forEach(e=>{let t=e.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0);if(t.length>0){let e=t.length-1,r=t[e];/(\s+|^)R\.?$/i.test(r)?r=r.replace(/(\s+|^)R\.?$/i,` R.`):r+=` R.`,t[e]=r,n.push(t)}}),n}function fe(e,t,n){let r=[];(e||``).split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0).forEach((e,t)=>{r.push({line:e,sC:t===0?`salmo-linea salmo-respuesta`:`salmo-linea salmo-respuesta salmo-sangria`})});let i=(t||``).split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0);return i.length>0&&(r.push({line:``,sC:`salmo-espacio`}),r.push({line:`O bien:`,sC:`salmo-linea salmo-obien`}),i.forEach((e,t)=>{r.push({line:e,sC:t===0?`salmo-linea salmo-respuesta`:`salmo-linea salmo-respuesta salmo-sangria`})})),n.length>0&&r.push({line:``,sC:`salmo-espacio`}),n.forEach((e,t)=>{e.forEach((t,n)=>{let i=n===0,a=n===e.length-1,o=`salmo-linea salmo-verso`;i?o+=` salmo-verso-primero`:o+=` salmo-sangria`,a&&(o+=` salmo-verso-fin`),r.push({line:t,sC:o})}),t<n.length-1&&r.push({line:``,sC:`salmo-espacio`})}),r}function pe(){let e=R.value.trim()||`Título del Salmo`,t=z.value.trim()||`Salmo responsorial: ...`,n=B.value.trim(),r=V.value.trim(),i=K.value;ne.textContent=e,re.textContent=t;let a=de(i);te.textContent=`${a.length} estrofas detectadas`;let o=fe(n,r,a),s=``;o.forEach(e=>{let t=e.sC||``,n=e.line||``;if(t.includes(`salmo-espacio`)){s+=`<div class="salmo-espacio"></div>`;return}if(t.includes(`salmo-obien`)){s+=`<div class="salmo-linea salmo-obien">${J(n)}</div>`;return}if(t.includes(`salmo-respuesta`)){let e=n.match(/^(R\.?|R\s*\.|R:)\s*(.*)$/i),r=``;r=e?`<span class="salmo-r">R.</span> `+J(e[2]):J(n),s+=`<div class="${t}">${r}</div>`;return}if(t.includes(`salmo-verso`)){let e=n.match(/^(.*?)(?:\s+)R\.?$/i),r=``;r=e?J(e[1].trimEnd())+` <span class="salmo-r">R.</span>`:J(n),s+=`<div class="${t}">${r}</div>`;return}s+=`<div class="${t}">${J(n)}</div>`}),ie.innerHTML=s}[R,z,B,V,H,U,W,G,K].forEach(e=>{e.addEventListener(`input`,pe)}),b.addEventListener(`input`,()=>{x.style.display=b.value?`block`:`none`,Q()}),x.onclick=()=>{b.value=``,x.style.display=`none`,Q()},document.getElementById(`btn-fix-r`).onclick=()=>{K.value=de(K.value).map(e=>e.join(`
`)).join(`

`),pe(),q(`Estrofas normalizadas con R. al final`)},document.getElementById(`btn-new-psalm`).onclick=()=>{let e=`seunew_`+Date.now().toString().slice(-4),t=w===`Todos`?`Ciclo A`:w,n={id:e,title:`Nuevo Salmo Eucarístico`,celebracion:`Nuevo Salmo Eucarístico`,subtitle:`Salmo responsorial: Salmo ...`,salmo:`Salmo responsorial: Salmo ...`,ciclo:t,tiempo:T===`Todos`?t===`Santos`?D===`Todos`?`Enero`:D:`Tiempo Ordinario`:T,dia:E===`Todos`?t===`Santos`?O===`Todos`?`1`:O:`Domingo`:E,orden:500,respuesta:`R. `,respuestaOpcional:``,estrofas:[[`Primera línea del verso,`,`segunda línea con sangría. R.`]],textoCompleto:`Primera línea del verso,
segunda línea con sangría. R.`,sourceBook:`eucaristia`,stage:`Liturgia`,catCanto:`Salmo Eucaristía`};h.unshift(n),Q(),ue(n),q(`Nuevo salmo creado. Modifica sus campos y guárdalo.`)};function me(){let e=ee.value.trim()||`seu_`+Date.now(),t=R.value.trim(),n=z.value.trim(),r=B.value.trim(),i=V.value.trim(),a=H.value,o=U.value.trim()||`Tiempo Ordinario`,s=W.value.trim()||`Domingo`,c=parseInt(G.value,10)||500,l=de(K.value),u=l.map(e=>e.join(`
`)).join(`

`),d=fe(r,i,l);return{id:e,title:t,celebracion:t,subtitle:n,salmo:n,ciclo:a,tiempo:o,dia:s,orden:c,respuesta:r,respuestaOpcional:i,estrofas:l,textoCompleto:u,sourceBook:`eucaristia`,stage:`Liturgia`,catCanto:`Salmo Eucaristía`,hasAudio:!1,searchPool:Y(`${t} ${a} ${o} ${s} ${n} ${r} ${i} ${u}`),lizq:d}}function he(e){if(e==null)return e;if(Array.isArray(e))return e.map(e=>Array.isArray(e)?e.map(e=>Array.isArray(e)?e.join(` `):String(e)).join(`
`):typeof e==`object`&&e?he(e):e);if(typeof e==`object`){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=he(r));return t}return e}function $(e){return e&&he(e)}function ge(e){return Array.isArray(e)?e.map(e=>Array.isArray(e)?e:typeof e==`string`?e.split(/\r?\n/):[String(e)]):e}function _e(e){if(!e)return e;let t={...e};return Array.isArray(t.estrofas)?t.estrofas=ge(t.estrofas):t.textoCompleto&&(t.estrofas=de(t.textoCompleto)),Array.isArray(t.lizq)&&(t.lizq=t.lizq.map(e=>e&&Array.isArray(e.variants)?{...e,variants:e.variants.map(e=>({...e,strophes:ge(e.strophes)}))}:e)),t}document.getElementById(`btn-save-firebase`).onclick=async()=>{let e=me();try{q(`Guardando en Firebase Firestore...`,`sync`);let t=$(e);await o(m(f,`salmos_eucaristia`,t.id),t);let n=h.findIndex(t=>t.id===e.id);n===-1?h.unshift(e):h[n]=e,Q(),q(`✅ Salmo "${e.title}" subido a Firebase con éxito.`)}catch(e){console.error(`Error al guardar salmo en Firebase:`,e),q(`Error al subir a Firebase: ${e.message}`,`error`)}},document.getElementById(`btn-download-json`).onclick=()=>{let e=me(),t=JSON.stringify(e,null,2),n=new Blob([t],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`${e.id}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),q(`Archivo ${e.id}.json descargado`)},document.getElementById(`btn-download-all-zip`).onclick=async()=>{let e=window.JSZip||(typeof JSZip<`u`?JSZip:null);if(!e)try{await new Promise((e,t)=>{let n=document.createElement(`script`);n.src=`src/lib/jszip.min.js`,n.onload=e,n.onerror=t,document.head.appendChild(n)}),e=window.JSZip}catch(e){console.warn(`Error cargando JSZip dinámicamente:`,e)}if(!e){q(`Error: Biblioteca JSZip no cargada`,`error`);return}q(`Generando archivo ZIP de salmos eucarísticos...`,`archive`);let t=new e,n={"Ciclo A":{file:`cicloa.json`,items:[]},"Ciclo B":{file:`ciclob.json`,items:[]},"Ciclo C":{file:`cicloc.json`,items:[]},"Año Par":{file:`anopar.json`,items:[]},"Año Impar":{file:`anoimpar.json`,items:[]},Ferias:{file:`ferias.json`,items:[]},Santos:{file:`santos.json`,items:[]}};h.forEach(e=>{let r=JSON.stringify(e,null,2);t.file(`${e.id}.json`,r),n[e.ciclo]&&n[e.ciclo].items.push(e)}),Object.keys(n).forEach(e=>{let r=n[e];r.items.sort((e,t)=>(e.orden||0)-(t.orden||0)),t.file(r.file,JSON.stringify(r.items,null,2))});let r=await t.generateAsync({type:`blob`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`salmos_eucaristia_actualizados.zip`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),q(`✅ Descarga completada: salmos_eucaristia_actualizados.zip`)},document.getElementById(`btn-batch-upload-firebase`).onclick=async()=>{if(!confirm(`¿Deseas subir todos los ${h.length} salmos locales a Firebase Firestore? Esto creará/actualizará la colección 'salmos_eucaristia' y los paquetes por ciclo.`))return;let e=document.getElementById(`batch-progress-modal`),t=document.getElementById(`batch-progress-bar`),n=document.getElementById(`batch-progress-status`),r=document.getElementById(`batch-progress-percent`),i=document.getElementById(`batch-log-msg`),a=document.getElementById(`btn-close-batch-modal`);e.classList.add(`active`),a.style.display=`none`,i.textContent=`Iniciando subida por lotes a Firestore...`;try{let s=h.length,c=0;for(let e=0;e<s;e+=25){let a=h.slice(e,e+25);await Promise.all(a.map(async e=>{let t=$(e);await o(m(f,`salmos_eucaristia`,t.id),t)})),c+=a.length;let l=Math.round(c/s*90);t.style.width=`${l}%`,r.textContent=`${l}%`,n.textContent=`Salmo ${c} de ${s}`,i.textContent=`Lote de ${a.length} salmos guardado correctamente...`}n.textContent=`Guardando paquetes por ciclo...`;let l={cicloa:h.filter(e=>e.ciclo===`Ciclo A`).map($),ciclob:h.filter(e=>e.ciclo===`Ciclo B`).map($),cicloc:h.filter(e=>e.ciclo===`Ciclo C`).map($),anopar:h.filter(e=>e.ciclo===`Año Par`).map($),anoimpar:h.filter(e=>e.ciclo===`Año Impar`).map($),ferias:h.filter(e=>e.ciclo===`Ferias`).map($),santos:h.filter(e=>e.ciclo===`Santos`).map($)};for(let[e,t]of Object.entries(l))await o(m(f,`salmos_eucaristia_ciclos`,e),{id:e,items:t});t.style.width=`100%`,r.textContent=`100%`,n.textContent=`¡Completado con éxito!`,i.textContent=`✅ ${s} salmos individuales y 7 paquetes de ciclo sincronizados en Firebase Cloud.`,a.style.display=`inline-flex`,a.onclick=()=>e.classList.remove(`active`),q(`Subida masiva a Firebase completada`)}catch(t){console.error(`Error en batch upload:`,t),n.textContent=`Error en la sincronización`,i.textContent=`Error: ${t.message}`,a.style.display=`inline-flex`,a.onclick=()=>e.classList.remove(`active`),q(`Error en la subida a Firebase`,`error`)}},document.getElementById(`btn-load-cloud`).onclick=async()=>{try{q(`Consultando Firebase Cloud...`,`cloud_download`);let e=[];try{let t=await p(n(f,`salmos_eucaristia_ciclos`));t.empty||t.forEach(t=>{let n=t.data();Array.isArray(n.items)&&e.push(...n.items.map(_e))})}catch{}if(e.length===0){let t=await p(n(f,`salmos_eucaristia`));t.empty||t.forEach(t=>{e.push(_e({id:t.id,...t.data()}))})}e.length>0?(h=e,C.textContent=`Firebase Cloud (${h.length} Salmos)`,C.style.background=`rgba(208, 18, 18, 0.15)`,C.style.color=`var(--salmo-red)`,Q(),h.length>0&&ue(h[0]),q(`✅ ${h.length} salmos cargados desde Firebase Cloud.`)):q(`No se encontraron salmos en Firebase aún. Usa "Subir TODOS a Firebase" para inicializarlos.`,`warning`)}catch(e){console.error(`Error cargando de Firebase:`,e),q(`Error al conectar con Firebase: ${e.message}`,`error`)}};function ve(){c(e=>{s()&&(d()||a(`page_seucaristico`)||(console.warn(`Acceso denegado a seucaristico.html por permisos. Redirigiendo a Inicio...`),alert(`Acceso restringido: no tienes permisos para acceder a Salmo Eucarístico.`),window.location.replace(`./index.html`)))})}ve(),X(),ce(),oe(),ae(),(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let o=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`;window._hasAppUpdateAvailable=!1;let p=`
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
            <a href="bitacora.html" id="nav-resucito-bitacora"><span class="material-symbols-outlined arrow-icon">history</span> Bitácora</a>
            <a href="https://docs.resucito.do/resucito.pdf" target="_blank" id="nav-resucito-pdf"><span class="material-symbols-outlined arrow-icon">menu_book</span> Resucitó PDF</a>
            <a href="chat.html" id="nav-resucito-chat"><span class="material-symbols-outlined arrow-icon">chat</span> <span style="flex: 1;">Asistencia y Chat</span><span id="badge-chat-nav-submenu" class="badge-unread-chat-popup" style="display: none; margin-left: auto; background-color: #25d366; color: #000000; font-size: 0.75rem; font-weight: 900; min-width: 20px; height: 20px; line-height: 20px; border-radius: 9999px; padding: 0 6px; align-items: center; justify-content: center; box-shadow: 0 1px 4px rgba(0,0,0,0.35); flex-shrink: 0; border: 1.5px solid #ffffff; box-sizing: border-box;">0</span></a>
            <a href="privacidad.html" id="nav-resucito-privacidad"><span class="material-symbols-outlined arrow-icon">policy</span> Política de Privacidad</a>
            <a href="#" id="installButton"><span class="material-symbols-outlined arrow-icon">download_for_offline</span>Instalar App</a>
          </div>
        </button>

        <button class="nav-item" id="btn-nav-formulario">
          <span class="material-symbols-outlined arrow-icon">edit_note</span>
          <span>Formulario</span>
          <div class="nav-submenu" id="nav-submenu-formulario">
            <a href="datosparroquia.html" id="nav-formulario-datosparroquia" style="display: none;"><span class="material-symbols-outlined arrow-icon">edit_location_alt</span> Formulario Parroquia</a>
            <a href="mantcantos.html" id="nav-formulario-mantcantos"><span class="material-symbols-outlined arrow-icon">build</span> Mantenimiento</a>
            <a href="respaldo.html" id="nav-formulario-respaldo"><span class="material-symbols-outlined arrow-icon">archive</span> Respaldo</a>
            <a href="seucaristico.html" id="nav-formulario-seucaristico"><span class="material-symbols-outlined arrow-icon">local_bar</span> Salmo Eucarístico</a>
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
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${o}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${o} (Versión Actual)</strong>
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
      `,document.head.appendChild(e)}document.getElementById(`nav-wrapper`)||document.body.insertAdjacentHTML(`beforeend`,p),document.getElementById(`app-info-modal`)||document.body.insertAdjacentHTML(`beforeend`,h),document.getElementById(`custom-confirm-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),_()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,g):g();function _(){let p=document.getElementById(`nav-toggle`);p&&p.addEventListener(`click`,v);let h=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},g=document.getElementById(`btn-nav-inicio`);g&&g.addEventListener(`click`,h);let _=document.getElementById(`nav-resucito-camino`);_&&_.addEventListener(`click`,h);let y=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&(r.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(t){e.stopPropagation(),r.classList.remove(`active`);let n=t.getAttribute(`href`),i=t.getAttribute(`target`);n&&n!==`#`&&!n.startsWith(`javascript:`)&&(i===`_blank`?window.open(t.href,`_blank`,`noopener`):window.location.href=t.href)}}),n.addEventListener(`click`,e=>{if(e.target.closest(`.nav-submenu`))return;e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)}))};y(`btn-nav-menu`,`nav-submenu`),y(`btn-nav-neocate`,`nav-submenu-neocate`),y(`btn-nav-resucito`,`nav-submenu-resucito`),y(`btn-nav-formulario`,`nav-submenu-formulario`);let b=document.getElementById(`btn-open-settings`);b&&b.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():u(()=>import(`./ajustes-BDG8FWB6.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let S=document.getElementById(`account-popup-card`),C=document.getElementById(`account-popup-close`),w=document.getElementById(`account-popup-toggle-header`),T=document.getElementById(`account-actions-list`),E=document.getElementById(`account-toggle-text`),D=document.getElementById(`account-toggle-icon`);C&&S&&C.addEventListener(`click`,e=>{e.stopPropagation(),S.classList.add(`hidden`)}),w&&T&&E&&D&&w.addEventListener(`click`,e=>{e.stopPropagation(),T.classList.contains(`collapsed`)?(T.classList.remove(`collapsed`),E.innerText=`Ocultar`,D.innerText=`expand_less`):(T.classList.add(`collapsed`),E.innerText=`Mostrar`,D.innerText=`expand_more`)});let O=document.getElementById(`account-popup-manage`),k=document.getElementById(`account-action-perfil`),A=document.getElementById(`account-action-preparar`),j=document.getElementById(`account-action-actualizar`),M=document.getElementById(`account-action-logout`),N=document.getElementById(`account-info-app-link`),P=document.getElementById(`app-info-modal`),F=document.getElementById(`close-app-info-modal`),I=window.location.pathname.includes(`/src/`),L=e=>{e.stopPropagation(),window.location.href=I?`../perfil.html`:`perfil.html`};O&&O.addEventListener(`click`,L),k&&k.addEventListener(`click`,L),A&&A.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../preparar.html`:`preparar.html`});let R=document.getElementById(`account-action-bitacora`);R&&R.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../bitacora.html`:`bitacora.html`}),j&&j.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),z()});let ee=document.getElementById(`account-action-chat`);ee&&ee.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.location.href=I?`../chat.html`:`chat.html`}),M&&M.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():l()}})}),N&&P&&N.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),P.style.display=`flex`}),F&&P&&F.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),P.style.display=`none`});let z=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}S&&S.classList.add(`hidden`),P&&(P.style.display=`none`);let e=window._latestRemoteVersion||`Nueva versión`,t=o||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${t} a la v${e}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let n=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=n.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${t} ➔ v${e}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let e of n){try{await fetch(e+`?t=`+Date.now(),{cache:`reload`})}catch(t){console.warn(`Aviso al descargar ${e}:`,t)}r++;let t=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${e} (${r}/${i})`,icono:`sync`,porcentaje:t}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`sync`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v371`,t=await caches.open(e),n=await caches.open(`resucito-cantos-cache`),r=await fetch(`data/songs-index.json?t=`+Date.now());if(r.ok){let e=await r.clone().json();await t.put(`data/songs-index.json`,r);for(let t=0;t<e.length;t+=10){let r=e.slice(t,t+10);await Promise.all(r.map(async e=>{let t=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(t);e.ok&&await n.put(t,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${e} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function B(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function V(){try{let e=(window.location.origin||``)+`/version.json?t=`+Date.now(),t=await fetch(e,{cache:`no-store`});if(!t.ok)return;let n=await t.json();if(n&&n.latestVersion&&B(n.latestVersion,o)){window._latestRemoteVersion=n.latestVersion,window._hasAppUpdateAvailable=!0;let e=`resucito_update_notif_shown_`+n.latestVersion;sessionStorage.getItem(e)||(sessionStorage.setItem(e,`1`),q(n.latestVersion)),typeof X==`function`&&X(),j&&(j.classList.add(`has-update-ready`),j.innerHTML=`
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
                Versión actual: v${o} ➔ Nueva: v${n.latestVersion}
              </div>
            `;let r=t.firstElementChild;r?r.insertAdjacentElement(`afterend`,e):t.prepend(e),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,z),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,z)}}else window._hasAppUpdateAvailable=!1,typeof X==`function`&&X()}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(V,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);S&&!S.contains(e.target)&&(!t||!t.contains(e.target))&&S.classList.add(`hidden`),P&&e.target===P&&(P.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let H=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),a=document.getElementById(`account-popup-card`),o=document.getElementById(`account-popup-email`),s=document.getElementById(`account-popup-greeting`),c=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(o&&(o.innerText=e.email||`usuario@gmail.com`),s&&(s.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),c&&e.photoURL&&(c.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),a&&a.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,a&&a.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){H(t),a&&a.classList.remove(`hidden`);return}if(window._hasAppUpdateAvailable&&a){document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),a.classList.toggle(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():i()}))};function U(){let e=d(),t=e||a(`page_inicio`),n=e||a(`page_perfil`),i=e||a(`page_preparar`),o=e||a(`page_bitacora`);e||a(`page_introduccion`);let s=e||a(`page_resucito_pdf`),c=e||a(`page_instalar_app`),l=e||a(`page_mantcantos`),u=e||a(`page_respaldo`),f=e||a(`page_seucaristico`),p=r()||window.firebaseAPI?.getCurrentUser?.(),m=e||!!p&&a(`page_chat`),h=document.getElementById(`btn-nav-inicio`);h&&(h.style.display=t?`flex`:`none`);let g=document.getElementById(`nav-resucito-camino`),_=document.getElementById(`nav-resucito-perfil`),v=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-pdf`),x=document.getElementById(`nav-resucito-chat`),S=document.getElementById(`installButton`);g&&(g.style.display=t?`flex`:`none`),_&&(_.style.display=n?`flex`:`none`),v&&(v.style.display=i?`flex`:`none`),y&&(y.style.display=o?`flex`:`none`),b&&(b.style.display=s?`flex`:`none`),x&&(x.style.display=m?`flex`:`none`),S&&(S.style.display=c?`flex`:`none`);let C=document.getElementById(`btn-nav-formulario`),w=document.getElementById(`nav-formulario-datosparroquia`),T=document.getElementById(`nav-formulario-mantcantos`),E=document.getElementById(`nav-formulario-respaldo`),D=document.getElementById(`nav-formulario-seucaristico`);w&&(w.style.display=e?`flex`:`none`),T&&(T.style.display=l?`flex`:`none`),E&&(E.style.display=u?`flex`:`none`),D&&(D.style.display=f?`flex`:`none`);let O=e||l||u||f;C&&(C.style.display=O?`flex`:`none`);let k=document.getElementById(`account-action-preparar`),A=document.getElementById(`account-action-perfil`),j=document.getElementById(`account-action-bitacora`),M=document.getElementById(`account-action-chat`),N=document.getElementById(`account-popup-manage`);k&&(k.style.display=i?`flex`:`none`),A&&(A.style.display=n?`flex`:`none`),j&&(j.style.display=o?`flex`:`none`),M&&(M.style.display=m?`flex`:`none`),N&&(N.style.display=n?`block`:`none`),W()}function W(){if(!s())return;let e=window.location.pathname.toLowerCase();d()||(e.includes(`perfil.html`)&&!a(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!a(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!a(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!a(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!a(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!a(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`seucaristico.html`)&&!a(`page_seucaristico`)?(console.warn(`Acceso denegado a seucaristico.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!a(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(r()||window.firebaseAPI?.getCurrentUser?.())||!a(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=U,window.checkCurrentPagePermissionAndRedirect=W,U();let G=null,K=0;function te(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function ne(){return localStorage.getItem(`resucito_chat_notificaciones`)!==`false`}function re(){try{if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;if(t.state===`suspended`)return;let n=t.createOscillator(),r=t.createGain();n.type=`sine`,n.connect(r),r.connect(t.destination);let i=t.currentTime;n.frequency.setValueAtTime(587.33,i),n.frequency.setValueAtTime(880,i+.12),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.28,i+.03),r.gain.exponentialRampToValueAtTime(.001,i+.45),n.start(i),n.stop(i+.46)}catch{}}function ie(e,t){if(window.location.pathname.includes(`chat.html`))return;let n=document.getElementById(`resucito-chat-toast`);n||(n=document.createElement(`div`),n.id=`resucito-chat-toast`,n.style.cssText=`
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
            ${te(e||`Nuevo mensaje`)}
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${te(t||`Tienes un nuevo mensaje`)}
          </div>
        </div>
        <span class="material-symbols-outlined" style="color: #8696a0; font-size: 18px; margin-left: 6px;">chevron_right</span>
      `,n.style.top=`16px`,window._chatToastTimer&&clearTimeout(window._chatToastTimer),window._chatToastTimer=setTimeout(()=>{n.style.top=`-90px`},5e3)}function q(e){let t=document.getElementById(`resucito-update-toast`);if(t||(t=document.createElement(`div`),t.id=`resucito-update-toast`,t.style.cssText=`
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
            Actualización de la App (v${te(e)})
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            Toca aquí o entra a Cuenta ➔ Actualizar App
          </div>
        </div>
        <span class="material-symbols-outlined" style="color: #8696a0; font-size: 18px; margin-left: 6px;">chevron_right</span>
      `,re(),typeof Notification<`u`&&Notification.permission===`granted`)try{let t=new Notification(`🚀 Actualización de Resucitó (v`+e+`)`,{body:`Nueva versión disponible. Entra a Cuenta para actualizar la App.`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-update-notif`,renotify:!0});t.onclick=()=>{if(window.focus(),window.location.pathname.includes(`chat.html`)){window.location.href=`index.html?openAccount=1`;return}let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`)),t.close()}}catch{}t.style.top=`16px`,window._updateToastTimer&&clearTimeout(window._updateToastTimer),window._updateToastTimer=setTimeout(()=>{t.style.top=`-95px`},7e3)}window._mostrarBannerActualizacion=q;function J(e,t){if(!(typeof Notification>`u`||Notification.permission!==`granted`))try{let n=new Notification(`💬 `+(e||`Resucitó Soporte`),{body:t||`Tienes un nuevo mensaje de chat`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-chat-msg`,renotify:!0});n.onclick=()=>{window.focus(),window.location.pathname.includes(`chat.html`)||(window.location.href=`chat.html`),n.close()}}catch{}}function Y(e,t){ne()&&(re(),ie(e,t),J(e,t))}window._reproducirSonidoNotificacion=re,window._mostrarNotificacionNavegador=J,window._dispararNotificacionCompleta=Y,document.addEventListener(`click`,function e(){ne()&&typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}),document.removeEventListener(`click`,e)},{once:!0});function X(){let e=document.getElementById(`badge-chat-nav-cuenta`),t=document.getElementById(`badge-chat-account-popup`),n=document.getElementById(`badge-chat-nav-submenu`),i=ne(),a=r()||window.firebaseAPI?.getCurrentUser?.(),o=window.location.pathname.includes(`chat.html`),s=i&&!o&&!!a&&K>0,c=K>99?`99+`:String(K),l=!!window._hasAppUpdateAvailable;e&&(s?(e.textContent=c,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#25d366`,`important`),e.style.setProperty(`color`,`#000000`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 0, 0, 0.4)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):l&&!o?(e.textContent=`1`,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#007aff`,`important`),e.style.setProperty(`color`,`#ffffff`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 122, 255, 0.55)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):e.style.setProperty(`display`,`none`,`important`)),t&&(s?(t.textContent=c,t.style.setProperty(`display`,`inline-flex`,`important`),t.style.setProperty(`background-color`,`#25d366`,`important`),t.style.setProperty(`color`,`#000000`,`important`),t.style.setProperty(`font-weight`,`900`,`important`),t.style.setProperty(`font-size`,`0.75rem`,`important`),t.style.setProperty(`min-width`,`20px`,`important`),t.style.setProperty(`height`,`20px`,`important`),t.style.setProperty(`line-height`,`20px`,`important`),t.style.setProperty(`border-radius`,`9999px`,`important`),t.style.setProperty(`padding`,`0 6px`,`important`),t.style.setProperty(`margin-left`,`auto`,`important`),t.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),t.style.setProperty(`box-sizing`,`border-box`,`important`),t.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),t.style.setProperty(`align-items`,`center`,`important`),t.style.setProperty(`justify-content`,`center`,`important`),t.style.setProperty(`flex-shrink`,`0`,`important`)):t.style.setProperty(`display`,`none`,`important`)),n&&(s?(n.textContent=c,n.style.setProperty(`display`,`inline-flex`,`important`),n.style.setProperty(`background-color`,`#25d366`,`important`),n.style.setProperty(`color`,`#000000`,`important`),n.style.setProperty(`font-weight`,`900`,`important`),n.style.setProperty(`font-size`,`0.75rem`,`important`),n.style.setProperty(`min-width`,`20px`,`important`),n.style.setProperty(`height`,`20px`,`important`),n.style.setProperty(`line-height`,`20px`,`important`),n.style.setProperty(`border-radius`,`9999px`,`important`),n.style.setProperty(`padding`,`0 6px`,`important`),n.style.setProperty(`margin-left`,`auto`,`important`),n.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),n.style.setProperty(`box-sizing`,`border-box`,`important`),n.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),n.style.setProperty(`align-items`,`center`,`important`),n.style.setProperty(`justify-content`,`center`,`important`),n.style.setProperty(`flex-shrink`,`0`,`important`)):n.style.setProperty(`display`,`none`,`important`))}function ae(r){if(G&&=(G(),null),!r||!f){K=0,X();return}let i=r.email&&r.email.toLowerCase().trim()===`dbaezh78@gmail.com`||d(),a=Date.now();if(i)try{G=t(n(f,`support_chats`),e=>{let t=0,n=r.email?r.email.toLowerCase().trim():``,i=new Map,o=null;e.forEach(e=>{let t=e.data();if(t&&typeof t.unreadAdmin==`number`&&t.unreadAdmin>0&&(t.lastSenderEmail?t.lastSenderEmail.toLowerCase().trim():``)!==n&&e.id!==r.uid&&e.id.toLowerCase()!==`dbaezh78_gmail_com`){let n=(t.userEmail||e.id).toLowerCase().trim(),r=i.get(n)||0;i.set(n,Math.max(r,t.unreadAdmin)),t.lastTimestamp&&t.lastTimestamp>a&&(!o||t.lastTimestamp>o.time)&&(o={remitente:t.userName||t.userEmail||`Hermano Cantor`,texto:t.lastMessage||`Nuevo mensaje recibido`,time:t.lastTimestamp})}}),o&&(a=o.time,Y(o.remitente,o.texto));for(let e of i.values())t+=e;K=t,X()},e=>{console.warn(`Aviso escuchando chats admin:`,e)})}catch(e){console.warn(`Error inicializando listener chats admin:`,e)}else try{let e=r.email?r.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,n=r.email?r.email.toLowerCase().trim():``,i=0,a=0,o=!1,s=Date.now();function c(e,t,r){let c=0;e&&typeof e.unreadUser==`number`&&e.unreadUser>0&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==n&&(c=e.unreadUser),t===`uid`&&(i=c,r&&(o=!0)),t===`email`&&(a=c),K=o?i:a,X(),e&&e.lastTimestamp&&e.lastTimestamp>s&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==n&&(s=e.lastTimestamp,Y(`Soporte Resucitó (Administrador)`,e.lastMessage||`Nuevo mensaje recibido`))}let l=t(m(f,`support_chats`,r.uid),e=>{c(e.exists()?e.data():null,`uid`,e.exists())},e=>{console.warn(`Aviso escuchando chat usuario por uid:`,e)}),u=null;e&&e!==r.uid&&(u=t(m(f,`support_chats`,e),e=>{c(e.exists()?e.data():null,`email`,e.exists())},()=>{})),G=()=>{l&&l(),u&&u()}}catch(e){console.warn(`Error inicializando listener chat usuario:`,e)}if(localStorage.getItem(`resucito_chat_notificaciones`)===null)try{e(m(f,`usuarios`,r.uid,`perfil`,`config`)).then(e=>{if(e&&e.exists()){let t=e.data();typeof t.chatNotificaciones==`boolean`&&(localStorage.setItem(`resucito_chat_notificaciones`,t.chatNotificaciones?`true`:`false`),X())}}).catch(()=>{})}catch{}}window.addEventListener(`chat_notificaciones_changed`,()=>{X()}),window.addEventListener(`storage`,e=>{e.key===`resucito_chat_notificaciones`&&X()}),c(e=>{H(e),U(),ae(e),X()});let Z=document.getElementById(`installButton`);Z&&(window.deferredPrompt||(Z.style.opacity=`0.85`),Z.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&(Z.style.opacity=`0.5`,Z.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),I&&document.querySelectorAll(`#nav-submenu-resucito a, #nav-submenu-formulario a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),window.location.search.includes(`openAccount=1`)&&setTimeout(()=>{let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`));try{let e=new URL(window.location.href);e.searchParams.delete(`openAccount`),window.history.replaceState({},``,e.pathname+(e.search?e.search:``)+e.hash)}catch{}},400),x()}function v(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=v;let y;function b(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){y&&clearTimeout(y);return}clearTimeout(y),y=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=b,document.addEventListener(`mousemove`,b),document.addEventListener(`touchstart`,b),document.addEventListener(`scroll`,b);function x(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=x})();