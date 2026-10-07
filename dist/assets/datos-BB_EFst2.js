import{g as e,v as t}from"./preload-helper-B_ERXZYM.js";import{onAuthStateChanged as n}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";import{doc as r,getDoc as i,setDoc as a}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";var o=[`Eucaristía`,`Celebración`,`Convivencia`,`Pasos`,`Otros`],s=`cache_tipos_celebracion`;function c(){try{let e=localStorage.getItem(s);if(e){let t=JSON.parse(e);if(Array.isArray(t)){let e=[...o];return t.forEach(t=>{t&&typeof t==`string`&&!e.includes(t)&&e.push(t)}),e}}}catch(e){console.error(`Error al leer tipos de celebración del localStorage:`,e)}return[...o]}async function l(n){if(!n||typeof n!=`string`)return!1;let i=n.trim();if(!i)return!1;let l=i.charAt(0).toUpperCase()+i.slice(1),u=c();if(u.some(e=>e.toLowerCase()===l.toLowerCase()))return alert(`⚠️ El tipo de celebración "${l}" ya existe.`),!1;u.push(l),localStorage.setItem(s,JSON.stringify(u));let f=e.currentUser;if(f)try{await a(r(t,`usuarios`,f.uid,`configuracion`,`tiposCelebracion`),{personalizados:u.filter(e=>!o.includes(e)),ultimaActualizacion:new Date().toISOString()},{merge:!0}),console.log(`🔥 Tipos de celebración sincronizados en Firebase.`)}catch(e){console.warn(`No se pudo sincronizar tipos de celebración en Firebase:`,e)}return window.dispatchEvent(new CustomEvent(`tiposCelebracionChanged`,{detail:{tipos:u}})),d(),!0}async function u(n){if(o.includes(n))return alert(`No se pueden eliminar los tipos de celebración predeterminados del sistema.`),!1;if(!confirm(`¿Deseas eliminar el tipo de celebración "${n}"?`))return!1;let i=c();i=i.filter(e=>e!==n),localStorage.setItem(s,JSON.stringify(i));let l=e.currentUser;if(l)try{await a(r(t,`usuarios`,l.uid,`configuracion`,`tiposCelebracion`),{personalizados:i.filter(e=>!o.includes(e)),ultimaActualizacion:new Date().toISOString()},{merge:!0})}catch(e){console.warn(`Error al actualizar Firebase tras eliminar tipo:`,e)}return window.dispatchEvent(new CustomEvent(`tiposCelebracionChanged`,{detail:{tipos:i}})),d(),!0}function d(){if(!document.getElementById(`settings-panel-datos`))return;let e=document.getElementById(`inputNuevoTipoCelebracion`),t=document.getElementById(`btnAgregarTipoCelebracion`),n=document.getElementById(`listaTiposCelebracion`);if(t&&e&&!t.dataset.bound&&(t.dataset.bound=`true`,t.addEventListener(`click`,()=>{e.value&&=(l(e.value),``)}),e.addEventListener(`keydown`,t=>{t.key===`Enter`&&e.value&&(l(e.value),e.value=``)})),!n)return;n.style.cssText=`
    max-height: 200px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    border: 1px solid var(--panel-border, #ccc);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.02);
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
  `;let r=c();n.innerHTML=``,r.forEach(e=>{let t=o.includes(e),r=document.createElement(`div`);if(r.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      border-radius: 8px;
      background: var(--panel-bg, #ffffff);
      border: 1px solid rgba(0, 0, 0, 0.06);
      box-sizing: border-box;
    `,r.innerHTML=`
      <span style="display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9rem; color: var(--text-color, #212529);">
        <span class="material-symbols-outlined" style="font-size: 18px; color: var(--accent-color, #d01212);">celebration</span>
        ${e}
      </span>
      ${t?`<span class="material-symbols-outlined" style="font-size: 16px; opacity: 0.5;" title="Predeterminado del sistema">lock</span>`:`<button class="btn-icono delete btn-eliminar-tipo" style="width: 28px; height: 28px;" title="Eliminar ${e}"><span class="material-symbols-outlined" style="font-size: 16px;">delete</span></button>`}
    `,!t){let t=r.querySelector(`.btn-eliminar-tipo`);t&&t.addEventListener(`click`,t=>{t.stopPropagation(),u(e)})}n.appendChild(r)})}n(e,async e=>{if(e)try{let n=await i(r(t,`usuarios`,e.uid,`configuracion`,`tiposCelebracion`));if(n.exists()){let e=n.data();if(e&&Array.isArray(e.personalizados)){let t=[...o];e.personalizados.forEach(e=>{e&&typeof e==`string`&&!t.includes(e)&&t.push(e)}),localStorage.setItem(s,JSON.stringify(t)),window.dispatchEvent(new CustomEvent(`tiposCelebracionChanged`,{detail:{tipos:t}})),d()}}}catch(e){console.warn(`No se pudo cargar tipos de celebración de Firebase:`,e)}}),window.renderDatosModule=d,window.obtenerTiposCelebracion=c,window.agregarTipoCelebracion=l,window.eliminarTipoCelebracion=u;export{c as t};