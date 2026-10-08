const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ajustes-BDG8FWB6.js","./preload-helper-BoU5IU9X.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,M as r,O as i,T as a,_ as o,c as s,d as c,f as l,h as u,i as d,j as f,k as p,l as m,m as h,p as g,t as _,u as v,v as y,w as b,x}from"./preload-helper-BoU5IU9X.js";/* empty css                  *//* empty css              */var S=`dbaezh78@gmail.com`,C=300*1e3,w=null,T=!1,E=!1,D=null,O=null,k=[],A=null,j=null,M=null,N=[],P=null,F=null,I=`all`,L=``,R=null,ee=[`👍`,`❤️`,`😂`,`😮`,`😢`,`🙏`],z={popular:[`👍`,`🙏`,`❤️`,`😂`,`😊`,`✝️`,`🕊️`,`🎶`,`🎸`,`📖`,`🙌`,`👏`,`🔥`,`✨`],faces:`😀.😃.😄.😁.😆.😅.🤣.😂.🙂.🙃.😉.😊.😇.🥰.😍.🤩.😘.😗.😚.😋.😛.😜.🤪.😝.🤑.🤗.🤭.🤫.🤔.🤐.🤨.😐.😑.😶.😏.😒.🙄.😬.🤥.😌.😔.😪.🤤.😴.😷.🤒.🤕.🤢.🤮.🤧.🥵.🥶`.split(`.`),hands:`👋.🤚.🖐️.✋.🖖.👌.🤏.✌️.🤞.🤟.🤘.🤙.👈.👉.👆.🖕.👇.☝️.👍.👎.✊.👊.🤛.🤜.👏.🙌.👐.🤲.🤝.🙏.💪.🦾`.split(`.`),music:[`✝️`,`⛪`,`🕊️`,`🕯️`,`📖`,`📜`,`🎶`,`🎵`,`🎼`,`🎸`,`🎹`,`🎺`,`🎻`,`🥁`,`🎤`,`🎧`],symbols:`❤️.🧡.💛.💚.💙.💜.🤎.🖤.🤍.💔.❣️.💕.💞.💓.💗.💖.💘.💝.⭐.🌟.✨.💥.🔥.💯.💢.💤.🎉`.split(`.`)};document.addEventListener(`DOMContentLoaded`,()=>{ge(),pe(`popular`),te()});function te(){h(async t=>{if(t){w=t,T=t.email&&t.email.toLowerCase().trim()===S||v(),E=T||d(`view_all_chats`);let n=document.getElementById(`my-avatar`),r=document.getElementById(`my-display-name`),i=document.getElementById(`my-user-role`);n&&(n.src=t.photoURL||`../img/christ.png`),r&&(r.textContent=t.displayName||t.email.split(`@`)[0]),i&&(i.textContent=T?`Administrador`:E?`Soporte / Asistencia`:`Hermano Cantor`),E?ne():re();try{let n=await e(x(y,`usuarios`,t.uid,`perfil`,`config`));if(n.exists()){let e=n.data();typeof e.chatNotificaciones==`boolean`&&localStorage.getItem(`resucito_chat_notificaciones`)===null&&(localStorage.setItem(`resucito_chat_notificaciones`,e.chatNotificaciones?`true`:`false`),window._updateNotifInputs&&window._updateNotifInputs(e.chatNotificaciones),window.dispatchEvent(new CustomEvent(`chat_notificaciones_changed`,{detail:e.chatNotificaciones})))}}catch{}}else he()})}function ne(){let e=document.getElementById(`wa-sidebar`);e&&(e.style.display=`flex`),B()}async function re(){let e=document.getElementById(`wa-search-section`);e&&(e.style.display=`none`);let t=document.getElementById(`wa-chat-list`);t&&(t.innerHTML=`
      <div class="wa-chat-item active" id="cantor-admin-chat-item">
        <img src="../img/christ.png" class="wa-avatar" alt="Admin">
        <div class="wa-chat-item-info">
          <div class="wa-chat-item-row">
            <span class="wa-chat-item-name">Soporte y Administración</span>
            <span class="wa-chat-item-time" id="cantor-chat-time">En vivo</span>
          </div>
          <div class="wa-chat-item-msg" id="cantor-chat-last-msg">
            <span class="material-symbols-outlined" style="font-size: 14px; color: var(--wa-text-secondary, #8696a0); vertical-align: -2px; margin-right: 3px;">done_all</span>
            <span>Canal directo con el Administrador</span>
          </div>
        </div>
      </div>
    `),D=w.uid,O={id:D,displayName:`Soporte Resucitó (Administrador)`,email:S,photoURL:`../img/christ.png`},U(O),q(D),W()&&K(),document.getElementById(`wa-app-root`).classList.add(`chat-open`)}function B(){P&&P(),P=t(p(o(y,`support_chats`),i(`lastTimestamp`,`desc`),n(100)),async e=>{let t=[],n=new Map;e.forEach(e=>{let r=e.data(),i={id:e.id,...r},a=(r.userEmail||``).toLowerCase().trim();if(a&&a!==S)if(!n.has(a))n.set(a,i);else{let e=n.get(a),t=i.lastTimestamp||0,r=e.lastTimestamp||0,o=!i.id.includes(`_`),s=!e.id.includes(`_`),c=o&&!s?i:!o&&s?e:t>=r?i:e,l=c===i?e:i;c.unreadAdmin=Math.max(c.unreadAdmin||0,l.unreadAdmin||0),!c.userId&&l.userId&&(c.userId=l.userId),t>r&&c!==i&&(c.lastMessage=i.lastMessage,c.lastTimestamp=i.lastTimestamp,c.lastSenderEmail=i.lastSenderEmail),n.set(a,c)}else t.push(i);r.lastMessage&&r.lastMessage!==`Sin mensajes aún`&&typeof r.totalMessages!=`number`&&b(o(y,`support_chats`,e.id,`messages`)).then(t=>{t.size>0&&f(x(y,`support_chats`,e.id),{totalMessages:t.size},{merge:!0}).catch(()=>{})}).catch(()=>{})});for(let e of n.values())t.push(e);try{let e={};try{(await b(o(y,`registro_uso`))).forEach(t=>{let n=t.data();n&&n.email&&n.uid&&(e[n.email.toLowerCase().trim()]=n.uid)})}catch{}(await b(o(y,`registered_users`))).forEach(n=>{let r=n.data();if(r.email){let i=r.email.toLowerCase().trim();if(r.uid&&(e[i]=r.uid),i!==S&&!t.some(e=>e.userEmail&&e.userEmail.toLowerCase().trim()===i)){let a=r.uid||e[i]||n.id;t.push({id:a,userId:a,userEmail:r.email,userName:r.displayName||r.email.split(`@`)[0],userPhoto:`../img/christ.png`,lastMessage:`Sin mensajes aún`,lastTimestamp:0,unreadAdmin:0})}}});for(let n of t){let t=(n.userEmail||``).toLowerCase().trim();e[t]&&(n.userId=e[t])}}catch(e){console.warn(`Aviso cargando usuarios registrados para chats:`,e)}t.sort((e,t)=>(t.lastTimestamp||0)-(e.lastTimestamp||0)),k=t,V(),!D&&k.length>0&&window.innerWidth>=768&&H(k[0])},e=>{console.error(`Error al escuchar chats:`,e)})}function V(){let e=document.getElementById(`wa-chat-list`);if(!e)return;let t=[...k];if(L.trim()){let e=L.toLowerCase().trim();t=t.filter(t=>t.userName&&t.userName.toLowerCase().includes(e)||t.userEmail&&t.userEmail.toLowerCase().includes(e)||t.lastMessage&&t.lastMessage.toLowerCase().includes(e))}if(I===`unread`&&(t=t.filter(e=>(e.unreadAdmin||0)>0)),t.length===0){e.innerHTML=`
      <div style="padding: 30px 20px; text-align: center; color: var(--wa-text-secondary); font-size: 13.5px;">
        No se encontraron conversaciones.
      </div>
    `;return}e.innerHTML=``,t.forEach(t=>{let n=document.createElement(`div`);n.className=`wa-chat-item ${D===t.id?`active`:``}`;let r=t.lastTimestamp?ye(t.lastTimestamp):``,i=t.unreadAdmin||0,a=t.userPhoto||`../img/christ.png`,o=t.userName||t.userEmail||`Hermano Cantor`,s=t.lastSenderEmail&&w.email&&t.lastSenderEmail.toLowerCase().trim()===w.email.toLowerCase().trim(),c=``;s&&(c=`<span class="material-symbols-outlined" style="font-size: 15px; color: ${(t.unreadUser||0)===0?`#53bdeb`:`#8696a0`}; vertical-align: -2px; margin-right: 3px;">done_all</span>`),n.innerHTML=`
      <img src="${a}" class="wa-avatar" alt="${$(o)}" onerror="this.src='../img/christ.png'">
      <div class="wa-chat-item-info">
        <div class="wa-chat-item-row">
          <span class="wa-chat-item-name">${$(o)}</span>
          <span class="wa-chat-item-time">${r}</span>
        </div>
        <div class="wa-chat-item-row" style="margin-top: 2px;">
          <div class="wa-chat-item-msg">
            ${c}<span>${$(t.lastMessage||`Mensaje`)}</span>
          </div>
          ${i>0?`<span class="wa-badge-unread">${i}</span>`:``}
        </div>
      </div>
    `,n.addEventListener(`click`,()=>{H(t),document.getElementById(`wa-app-root`).classList.add(`chat-open`)}),e.appendChild(n)})}function H(e){if(D=e.userId||e.id,O={id:e.userId||e.id,displayName:e.userName||e.userEmail||`Hermano Cantor`,email:e.userEmail,photoURL:e.userPhoto||`../img/christ.png`},U(O),V(),q(D),E&&e.userEmail){let t=e.userEmail.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`);t&&t!==D&&(r(x(y,`support_chats`,t),{unreadUser:0,unreadAdmin:0}).catch(()=>{}),b(o(y,`support_chats`,t,`messages`)).then(e=>{e.empty||e.forEach(e=>{f(x(y,`support_chats`,D,`messages`,e.id),e.data(),{merge:!0}).catch(()=>{})})}).catch(()=>{}))}W()&&K()}function U(e){let t=document.getElementById(`active-chat-avatar`),n=document.getElementById(`active-chat-name`),r=document.getElementById(`active-chat-status`);t&&(t.src=e.photoURL||`../img/christ.png`,t.onerror=()=>{t.src=`../img/christ.png`}),n&&(n.textContent=e.displayName),r&&(r.textContent=E?e.email||`en línea`:`en línea / Asistencia Resucitó`)}function W(){return!(document.hidden||document.visibilityState!==`visible`)}var G=!1;async function K(){if(!(!D||!w)&&W()&&!G){G=!0;try{E?M&&typeof M.unreadAdmin==`number`&&M.unreadAdmin>0&&(await r(x(y,`support_chats`,D),{unreadAdmin:0}).catch(()=>{}),O?.id&&O.id!==D&&await r(x(y,`support_chats`,O.id),{unreadAdmin:0}).catch(()=>{})):(await r(x(y,`support_chats`,D),{unreadUser:0}).catch(()=>{}),M&&(M.unreadUser=0));let e=(N||[]).filter(e=>(e.senderId&&e.senderId!==w.uid||e.senderEmail&&w.email&&e.senderEmail.toLowerCase().trim()!==w.email.toLowerCase().trim())&&e.read===!1&&!e.deletedForEveryone);e.length>0&&(e.forEach(e=>{e.read=!0}),await Promise.allSettled(e.map(e=>r(x(y,`support_chats`,D,`messages`,e.id),{read:!0,readAt:Date.now()}))))}catch{}finally{G=!1}}}function ie(e){if(!e)return!1;if(e.read===!0)return!0;let t=0;if(N&&N.length>0)for(let e of N)(e.senderId&&e.senderId!==w.uid||e.senderEmail&&w.email&&e.senderEmail.toLowerCase().trim()!==w.email.toLowerCase().trim())&&e.timestamp&&e.timestamp>t&&(t=e.timestamp);return t>0&&(e.timestamp||0)<=t}function q(e){A&&=(A(),null),j&&=(j(),null);let r=document.getElementById(`wa-messages-area`);r&&(r.innerHTML=`
      <div class="wa-date-divider">Cargando mensajes...</div>
    `),j=t(x(y,`support_chats`,e),e=>{e.exists()&&(M=e.data(),!E&&M&&M.unreadUser>0&&W()&&K(),N&&N.length>0&&J(N))},e=>{console.warn(`Aviso escuchando cabecera de chat:`,e)});let a=p(o(y,`support_chats`,e,`messages`),i(`timestamp`,`asc`),n(200)),s=Date.now();A=t(a,e=>{let t=[],n=null;e.forEach(e=>{let r=e.data();(r.hiddenFor||[]).includes(w.uid)||(t.push({id:e.id,...r}),(r.senderId&&r.senderId!==w.uid||r.senderEmail&&w.email&&r.senderEmail.toLowerCase().trim()!==w.email.toLowerCase().trim())&&r.timestamp&&r.timestamp>s&&(n=r))}),n&&(s=n.timestamp,localStorage.getItem(`resucito_chat_notificaciones`)!==`false`&&(typeof window._reproducirSonidoNotificacion==`function`&&window._reproducirSonidoNotificacion(),(document.hidden||!document.hasFocus())&&typeof window._mostrarNotificacionNavegador==`function`&&window._mostrarNotificacionNavegador(n.senderName||`Mensaje de Chat`,n.text||(n.imageUrl?`📷 Foto`:`Nuevo mensaje`)))),N=t,J(t);let r=document.getElementById(`cantor-chat-last-msg`),i=document.getElementById(`cantor-chat-time`);if(r&&t.length>0){let e=t[t.length-1],n=e.senderEmail===w.email||e.senderId===w.uid,a=``;n&&!e.deletedForEveryone&&(a=`<span class="material-symbols-outlined" style="font-size: 14px; color: ${ie(e)?`#53bdeb`:`#8696a0`}; vertical-align: -2px; margin-right: 3px;">done_all</span>`),r.innerHTML=`${a}<span>${$(e.text||(e.imageUrl?`📷 Foto`:`Mensaje`))}</span>`,i&&e.timestamp&&(i.textContent=ye(e.timestamp))}W()&&K()},e=>{console.error(`Error al escuchar mensajes:`,e)})}function J(e){let t=document.getElementById(`wa-messages-area`);if(!t)return;if(t.innerHTML=``,e.length===0){t.innerHTML=`
      <div class="wa-date-divider">Hoy</div>
      <div style="text-align: center; margin: 40px auto; max-width: 320px; background: rgba(32, 44, 51, 0.9); padding: 14px 18px; border-radius: 12px; color: var(--wa-text-secondary); font-size: 13px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span class="material-symbols-outlined" style="font-size: 28px; color: var(--wa-accent); display: block; margin-bottom: 6px;">lock</span>
        Los mensajes de este chat son privados y directos para darte asistencia técnica y fraternal en Resucitó.
      </div>
    `;return}let n=``,r=0;e.forEach(e=>{(e.senderId&&e.senderId!==w.uid||e.senderEmail&&w.email&&e.senderEmail.toLowerCase().trim()!==w.email.toLowerCase().trim())&&e.timestamp&&e.timestamp>r&&(r=e.timestamp)}),e.forEach(e=>{let r=be(new Date(e.timestamp||Date.now()));if(r!==n){let e=document.createElement(`div`);e.className=`wa-date-divider`,e.textContent=r,t.appendChild(e),n=r}let i=e.senderEmail===w.email||e.senderId===w.uid,a=document.createElement(`div`);a.className=`wa-message-row ${i?`out`:`in`}`;let o=document.createElement(`div`);o.className=`wa-bubble ${i?`out`:`in`}`;let s=``;e.imageUrl&&!e.deletedForEveryone&&(s=`
        <div class="wa-bubble-image-wrap" data-img-url="${e.imageUrl}">
          <img src="${e.imageUrl}" class="wa-bubble-image" alt="Foto adjunta">
        </div>
      `);let c=``;if(E&&!i){let t=e.senderName||O?.displayName||e.senderEmail?.split(`@`)[0]||`Hermano Cantor`,n=e.senderEmail?`<span class="wa-sender-label-sub">(${$(e.senderEmail)})</span>`:``;c=`<div class="wa-sender-label"><span>👤 ${$(t)}</span> ${n}</div>`}let l=``;l=e.deletedForEveryone?`<span class="wa-bubble-text" style="font-style: italic; color: var(--wa-text-secondary);"><span class="material-symbols-outlined" style="font-size: 14px; vertical-align: -2px;">block</span> Este mensaje fue eliminado</span>`:`<span class="wa-bubble-text">${$(e.text||``)}</span>`;let u=ye(e.timestamp),d=e.edited&&!e.deletedForEveryone?`<span class="wa-bubble-edited">Editado</span>`:``,f=ie(e),p=f?`#53bdeb`:`#8696a0`,m=f?`wa-check-icon read`:`wa-check-icon sent`,h=f?`Leído`:`Enviado`,g=i&&!e.deletedForEveryone?`<span class="material-symbols-outlined ${m}" title="${h}" style="font-size: 16px; line-height: 1; vertical-align: middle; color: ${p} !important;">done_all</span>`:``,_=e.reactions&&e.reactions[w.uid]?e.reactions[w.uid]:null,v=``;if(!e.deletedForEveryone){let t=ee.map(e=>`
        <button type="button" class="wa-reaction-emoji-btn ${_===e?`active`:``}" data-emoji="${e}">
          ${e}
        </button>
      `).join(``);v=`<div class="wa-reaction-bar" id="reaction-bar-${e.id}">${t}</div>`}let y=``;if(e.reactions&&typeof e.reactions==`object`&&!e.deletedForEveryone){let t={};Object.entries(e.reactions).forEach(([e,n])=>{n&&(t[n]=(t[n]||0)+1)});let n=Object.keys(t);n.length>0&&(y=`<div class="wa-reaction-badge-container">${n.map(e=>`<span class="wa-reaction-pill ${_===e?`has-mine`:``}" data-emoji="${e}">${e} ${t[e]>1?t[e]:``}</span>`).join(``)}</div>`)}let b=e.deletedForEveryone?``:`
      <button class="wa-reaction-trigger-btn" title="Reaccionar al mensaje">
        <span class="material-symbols-outlined" style="font-size: 16px;">add_reaction</span>
      </button>
    `;o.innerHTML=`
      ${v}
      ${c}
      ${s}
      ${l}
      <div class="wa-bubble-meta">
        ${d}
        <span>${u}</span>
        ${g}
      </div>
      ${b}
      <button class="wa-bubble-menu-trigger" title="Opciones de mensaje">
        <span class="material-symbols-outlined" style="font-size: 16px;">keyboard_arrow_down</span>
      </button>
      <div class="wa-bubble-menu-dropdown">
        <button class="wa-bubble-menu-item" data-action="copy">
          <span class="material-symbols-outlined" style="font-size: 16px;">content_copy</span> Copiar
        </button>
        <button class="wa-bubble-menu-item" data-action="edit" style="display: none;">
          <span class="material-symbols-outlined" style="font-size: 16px;">edit</span> Editar
        </button>
        <button class="wa-bubble-menu-item danger" data-action="delete">
          <span class="material-symbols-outlined" style="font-size: 16px;">delete</span> Eliminar
        </button>
      </div>
      ${y}
    `;let x=o.querySelector(`.wa-reaction-trigger-btn`),S=o.querySelector(`.wa-reaction-bar`);x&&S&&(x.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.wa-reaction-bar.show`).forEach(e=>{e!==S&&e.classList.remove(`show`)}),document.querySelectorAll(`.wa-bubble-menu-dropdown.show`).forEach(e=>e.classList.remove(`show`)),S.classList.toggle(`show`)}),S.querySelectorAll(`.wa-reaction-emoji-btn`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.getAttribute(`data-emoji`);le(e.id,r),S.classList.remove(`show`)})})),o.querySelectorAll(`.wa-reaction-pill`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.getAttribute(`data-emoji`);le(e.id,r)})});let T=o.querySelector(`.wa-bubble-menu-trigger`),D=o.querySelector(`.wa-bubble-menu-dropdown`),k=o.querySelector(`[data-action="edit"]`),A=o.querySelector(`[data-action="delete"]`),j=o.querySelector(`[data-action="copy"]`),M=Date.now()-(e.timestamp||0)<=C;i&&M&&!e.deletedForEveryone&&e.text&&(k.style.display=`flex`),T.addEventListener(`click`,e=>{e.stopPropagation(),document.querySelectorAll(`.wa-reaction-bar.show`).forEach(e=>e.classList.remove(`show`)),document.querySelectorAll(`.wa-bubble-menu-dropdown.show`).forEach(e=>{e!==D&&e.classList.remove(`show`)}),D.classList.toggle(`show`)}),j.addEventListener(`click`,()=>{D.classList.remove(`show`),e.text&&navigator.clipboard.writeText(e.text)}),k.addEventListener(`click`,()=>{D.classList.remove(`show`),se(e)}),A.addEventListener(`click`,()=>{D.classList.remove(`show`),ae(e)});let N=o.querySelector(`.wa-bubble-image-wrap`);N&&N.addEventListener(`click`,()=>{me(N.getAttribute(`data-img-url`))}),a.appendChild(o),t.appendChild(a)}),t.scrollTop=t.scrollHeight}var Y=!1;async function X(){let e=document.getElementById(`chat-input-text`),t=e?e.value.trim():``;if(!t&&!F||!D||Y)return;Y=!0;let n=Date.now(),r=localStorage.getItem(`user_name`)||localStorage.getItem(`profile_name`),i=w.displayName||r||w.email?.split(`@`)[0]||`Hermano Cantor`,s={senderId:w.uid,senderEmail:w.email,senderName:i,senderPhoto:w.photoURL||`../img/christ.png`,isAdmin:T,text:t,imageUrl:F||null,timestamp:n,read:!1,readAt:null,edited:!1,editedAt:null,deletedForEveryone:!1,hiddenFor:[],reactions:{}};e&&(e.value=``),fe();try{await u(o(y,`support_chats`,D,`messages`),s);let e=x(y,`support_chats`,D),r={chatId:D,userId:T?O?.id||D:w.uid,userEmail:T?O?.email||``:w.email,userName:T?O?.displayName||`Hermano Cantor`:i,userPhoto:T?O?.photoURL||`../img/christ.png`:w.photoURL||`../img/christ.png`,lastMessage:t||(s.imageUrl?`📷 Foto`:`Mensaje`),lastTimestamp:n,lastSenderEmail:w.email,totalMessages:a(1),unreadAdmin:T?0:a(1),unreadUser:T?a(1):0};if(M={...M||{},...r,unreadAdmin:T?0:(M?.unreadAdmin||0)+1,unreadUser:T?(M?.unreadUser||0)+1:0},await f(e,r,{merge:!0}),T&&O){let e=O.email?O.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,t=D===e?O.id:e;t&&t!==D&&f(x(y,`support_chats`,t),{...r,chatId:t},{merge:!0}).catch(()=>{})}}catch(e){console.error(`Error enviando mensaje:`,e),alert(`No se pudo enviar el mensaje. Verifica tu conexión a internet.`)}finally{Y=!1}}function ae(e){R=e;let t=document.getElementById(`modal-delete-overlay`),n=document.getElementById(`btn-delete-for-everyone`),r=document.getElementById(`modal-delete-desc`),i=e.senderEmail===w.email||e.senderId===w.uid,a=Date.now()-(e.timestamp||0)<=C;i&&a&&!e.deletedForEveryone?(n.style.display=`block`,r.textContent=`Este mensaje fue enviado hace menos de 5 minutos. Puedes eliminarlo para ambos o solo para ti.`):(n.style.display=`none`,r.textContent=`Ha transcurrido el tiempo límite de 5 minutos para eliminar para todos. Solo puedes eliminarlo de tu vista (Eliminar para mí).`),t.classList.add(`show`)}async function Z(){if(!(!R||!D))try{await r(x(y,`support_chats`,D,`messages`,R.id),{deletedForEveryone:!0,text:``,imageUrl:null,deletedAt:Date.now()}),Q()}catch(e){console.error(`Error al eliminar para todos:`,e)}}async function oe(){if(!(!R||!D))try{let e=x(y,`support_chats`,D,`messages`,R.id),t=R.hiddenFor||[];t.includes(w.uid)||t.push(w.uid),await r(e,{hiddenFor:t}),Q()}catch(e){console.error(`Error al eliminar para mí:`,e)}}function se(e){R=e;let t=document.getElementById(`modal-edit-overlay`),n=document.getElementById(`modal-edit-text`);n&&(n.value=e.text||``),t.classList.add(`show`)}async function ce(){if(!R||!D)return;let e=document.getElementById(`modal-edit-text`),t=e?e.value.trim():``;if(t){if(Date.now()-(R.timestamp||0)>C){alert(`Ya han pasado más de 5 minutos. Este mensaje es ahora permanente y no se puede editar.`),Q();return}try{await r(x(y,`support_chats`,D,`messages`,R.id),{text:t,edited:!0,editedAt:Date.now()}),Q()}catch(e){console.error(`Error al guardar edición:`,e)}}}async function le(t,n){if(!(!D||!t||!w))try{let i=x(y,`support_chats`,D,`messages`,t),a=await e(i);if(!a.exists())return;let o=a.data().reactions||{},s=w.uid;o[s]===n?delete o[s]:o[s]=n,await r(i,{reactions:o})}catch(e){console.error(`Error al actualizar reacción:`,e)}}var ue=1*1024*1024;function de(e){if(!e||!e.type.startsWith(`image/`)){alert(`Por favor selecciona exclusivamente un archivo de imagen válido.`);return}if(e.size>ue){let t=(e.size/(1024*1024)).toFixed(2);alert(`La imagen seleccionada pesa ${t} MB. El tamaño máximo permitido para enviar fotos en el chat es de 1 MB.`),fe();return}let t=new FileReader;t.onload=t=>{let n=new Image;n.onload=()=>{let t=1200,r=n.width,i=n.height;(r>t||i>t)&&(r>i?(i=Math.round(i*t/r),r=t):(r=Math.round(r*t/i),i=t));let a=document.createElement(`canvas`);a.width=r,a.height=i,a.getContext(`2d`).drawImage(n,0,0,r,i);let o=.8,s=a.toDataURL(`image/jpeg`,o);for(;s.length>ue&&o>.3;)o-=.15,s=a.toDataURL(`image/jpeg`,o);if(s.length>ue){alert(`La imagen excede el límite permitido de 1 MB después del procesamiento. Por favor elige una imagen más liviana.`),fe();return}F=s;let c=document.getElementById(`img-preview-bar`),l=document.getElementById(`img-preview-thumb`),u=document.getElementById(`img-preview-name`);l&&(l.src=F),u&&(u.textContent=`${e.name} (${(e.size/1024).toFixed(0)} KB)`),c&&(c.style.display=`flex`)},n.src=t.target.result},t.readAsDataURL(e)}function fe(){F=null;let e=document.getElementById(`img-preview-bar`),t=document.getElementById(`file-input-image`);e&&(e.style.display=`none`),t&&(t.value=``)}function pe(e){let t=document.getElementById(`wa-emoji-grid`);if(!t)return;let n=z[e]||z.popular;t.innerHTML=``,n.forEach(e=>{let n=document.createElement(`span`);n.className=`wa-emoji-item`,n.textContent=e,n.addEventListener(`click`,()=>{let t=document.getElementById(`chat-input-text`);t&&(t.value+=e,t.focus())}),t.appendChild(n)})}function me(e){let t=document.getElementById(`wa-lightbox`),n=document.getElementById(`lightbox-img`);t&&n&&(n.src=e,t.classList.add(`show`))}function Q(){document.querySelectorAll(`.wa-modal-overlay, .wa-lightbox-overlay`).forEach(e=>{e.classList.remove(`show`)}),R=null}function he(){let e=document.getElementById(`modal-login-overlay`);if(!e)return;e.classList.add(`show`);let t=document.getElementById(`btn-login-modal`);t&&!t.dataset.bound&&(t.dataset.bound=`true`,t.addEventListener(`click`,async()=>{try{await c(),e.classList.remove(`show`),location.reload()}catch(e){alert(`Error al iniciar sesión: `+e.message)}}))}function ge(){document.addEventListener(`click`,()=>{document.querySelectorAll(`.wa-bubble-menu-dropdown.show`).forEach(e=>e.classList.remove(`show`)),document.querySelectorAll(`.wa-reaction-bar.show`).forEach(e=>e.classList.remove(`show`));let e=document.getElementById(`wa-emoji-panel`);e&&e.classList.contains(`show`)&&e.classList.remove(`show`)});let e=document.getElementById(`chat-input-text`);e&&e.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),X())}),document.getElementById(`btn-send-message`)?.addEventListener(`click`,X);let t=document.getElementById(`file-input-image`);document.getElementById(`btn-attach-clip`)?.addEventListener(`click`,e=>{e.stopPropagation(),t?.click()}),t?.addEventListener(`change`,e=>{e.target.files&&e.target.files[0]&&de(e.target.files[0])}),document.getElementById(`btn-remove-img`)?.addEventListener(`click`,fe);let n=document.getElementById(`wa-emoji-panel`);document.getElementById(`btn-toggle-emoji`)?.addEventListener(`click`,e=>{e.stopPropagation(),n?.classList.toggle(`show`)}),document.querySelectorAll(`.wa-emoji-nav-btn`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),document.querySelectorAll(`.wa-emoji-nav-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),pe(e.getAttribute(`data-category`))})}),document.getElementById(`btn-back-sidebar`)?.addEventListener(`click`,()=>{document.getElementById(`wa-app-root`).classList.remove(`chat-open`)});let r=document.getElementById(`input-search-users`),i=document.getElementById(`btn-clear-search`);r?.addEventListener(`input`,e=>{L=e.target.value,i&&(i.style.display=L?`block`:`none`),V()}),i?.addEventListener(`click`,()=>{r&&(r.value=``),L=``,i.style.display=`none`,V()}),document.querySelectorAll(`.wa-chip`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`.wa-chip`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),I=e.getAttribute(`data-filter`),V()})}),document.getElementById(`btn-refresh-chats`)?.addEventListener(`click`,()=>{E?B():D&&q(D)}),document.getElementById(`btn-delete-for-everyone`)?.addEventListener(`click`,Z),document.getElementById(`btn-delete-for-me`)?.addEventListener(`click`,oe),document.getElementById(`btn-cancel-delete`)?.addEventListener(`click`,Q),document.getElementById(`btn-cancel-edit`)?.addEventListener(`click`,Q),document.getElementById(`btn-save-edit`)?.addEventListener(`click`,ce),document.getElementById(`btn-close-lightbox`)?.addEventListener(`click`,Q),document.getElementById(`wa-lightbox`)?.addEventListener(`click`,Q),window.addEventListener(`focus`,()=>{K()}),document.addEventListener(`visibilitychange`,()=>{W()&&K()}),document.getElementById(`wa-messages-area`)?.addEventListener(`click`,()=>{W()&&K()}),document.getElementById(`chat-input-text`)?.addEventListener(`focus`,()=>{W()&&K()}),_e()}function _e(){let e=document.getElementById(`btn-sidebar-menu`),t=document.getElementById(`dropdown-sidebar-menu`),n=document.getElementById(`btn-info-chat`),r=document.getElementById(`dropdown-chat-menu`),i=document.getElementById(`switch-theme-sidebar`),a=document.getElementById(`switch-theme-chat`),o=(localStorage.getItem(`theme`)||`light`)===`dark`;ve(o?`dark`:`light`);function s(e){i&&(i.checked=e),a&&(a.checked=e);let t=e?`light_mode`:`dark_mode`,n=e?`Modo Claro`:`Modo Oscuro`,r=document.getElementById(`sidebar-theme-icon`),o=document.getElementById(`chat-theme-icon`);r&&(r.textContent=t),o&&(o.textContent=t);let s=i?.closest(`.wa-dropdown-switch-item`)?.querySelector(`span:not(.material-symbols-outlined)`),c=a?.closest(`.wa-dropdown-switch-item`)?.querySelector(`span:not(.material-symbols-outlined)`);s&&(s.textContent=n),c&&(c.textContent=n)}s(o);function c(e){let t=e.target.checked,n=t?`dark`:`light`;localStorage.setItem(`theme`,n),ve(n),s(t)}let l=document.getElementById(`switch-notif-sidebar`),u=document.getElementById(`switch-notif-chat`),d=localStorage.getItem(`resucito_chat_notificaciones`)!==`false`;function p(e){l&&(l.checked=e),u&&(u.checked=e);let t=e?`notifications`:`notifications_off`,n=document.getElementById(`sidebar-notif-icon`),r=document.getElementById(`chat-notif-icon`);n&&(n.textContent=t),r&&(r.textContent=t)}window._updateNotifInputs=p,p(d);function m(e){let t=e.target.checked;if(localStorage.setItem(`resucito_chat_notificaciones`,t?`true`:`false`),p(t),window.dispatchEvent(new CustomEvent(`chat_notificaciones_changed`,{detail:t})),t&&(typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}),typeof window._reproducirSonidoNotificacion==`function`&&window._reproducirSonidoNotificacion()),w&&y)try{f(x(y,`usuarios`,w.uid,`perfil`,`config`),{chatNotificaciones:t,ultimaActualizacion:new Date().toISOString()},{merge:!0}).catch(()=>{})}catch{}}l?.addEventListener(`change`,m),u?.addEventListener(`change`,m),i?.addEventListener(`change`,c),a?.addEventListener(`change`,c),e?.addEventListener(`click`,e=>{e.stopPropagation(),r?.classList.remove(`show`),t?.classList.toggle(`show`)}),n?.addEventListener(`click`,e=>{e.stopPropagation(),t?.classList.remove(`show`),r?.classList.toggle(`show`)}),document.addEventListener(`click`,e=>{e.target.closest(`.wa-menu-anchor`)||(t?.classList.remove(`show`),r?.classList.remove(`show`))}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&(t?.classList.remove(`show`),r?.classList.remove(`show`))})}function ve(e){e===`dark`?(document.documentElement.classList.add(`theme-dark`),document.documentElement.classList.remove(`theme-light`,`theme-sepia`),document.body.classList.add(`theme-dark`),document.body.classList.remove(`theme-light`,`theme-sepia`)):(document.documentElement.classList.add(`theme-light`),document.documentElement.classList.remove(`theme-dark`,`theme-sepia`),document.body.classList.add(`theme-light`),document.body.classList.remove(`theme-dark`,`theme-sepia`))}function ye(e){return e?new Date(e).toLocaleTimeString(`es-ES`,{hour:`2-digit`,minute:`2-digit`,hour12:!0}):``}function be(e){let t=new Date;if(e.toDateString()===t.toDateString())return`Hoy`;let n=new Date;return n.setDate(n.getDate()-1),e.toDateString()===n.toDateString()?`Ayer`:e.toLocaleDateString(`es-ES`,{day:`2-digit`,month:`2-digit`,year:`numeric`})}function $(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}(function(){if(document.getElementById(`nav-wrapper`))return;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),window.deferredPrompt=e,console.log(`📥 PWA: beforeinstallprompt guardado.`);let t=document.getElementById(`installButton`);t&&(t.style.opacity=`1`,t.style.pointerEvents=`auto`)}),window.addEventListener(`appinstalled`,e=>{console.log(`🎉 PWA: La aplicación fue instalada con éxito.`),window.deferredPrompt=null;let t=document.getElementById(`installButton`);t&&(t.style.opacity=`0.5`,t.style.pointerEvents=`none`)});let n=window.APP_VERSION||localStorage.getItem(`resucito_installed_version`)||`2.1.00`;window._hasAppUpdateAvailable=!1;let r=`
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
          v${n}
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
  `,i=`
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
            <span style="background: var(--accent-color, #d01212); color: #fff; padding: 3px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: 600; display: inline-block; margin-top: 4px;">Versión v${n}</span>
          </div>

          <h4 style="border-bottom: 1px solid var(--panel-border); padding-bottom: 6px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-color);">Historial de Versiones y Cambios</h4>
          
          <div class="version-log-item" style="margin-bottom: 16px; background: rgba(0,0,0,0.03); padding: 12px; border-radius: 12px; border: 1px solid var(--panel-border);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <strong style="color: var(--accent-color, #d01212); font-size: 0.95rem;">v${n} (Versión Actual)</strong>
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
  `;window.mostrarConfirmacion=function({titulo:e=`Confirmar`,mensaje:t=`¿Estás seguro?`,icono:n=`help_outline`,textoSi:r=`Sí`,textoNo:i=`No`,onConfirm:a=null,onCancel:o=null,iconoColor:s=null,iconoBg:c=null}={}){let l=document.getElementById(`custom-confirm-modal`),u=document.getElementById(`custom-confirm-title`),d=document.getElementById(`custom-confirm-message`),f=document.getElementById(`custom-confirm-icon`),p=document.getElementById(`custom-confirm-badge`),m=document.getElementById(`custom-confirm-btn-si`),h=document.getElementById(`custom-confirm-btn-no`);if(!l||!u||!d||!f||!m||!h)return;u.innerText=e,d.innerText=t,f.innerText=n,m.innerText=r,h.innerText=i,p&&(s?p.style.color=s:p.style.color=`var(--accent-color, #d01212)`,c?p.style.background=c:p.style.background=`rgba(208, 18, 18, 0.1)`),i===``?(h.style.display=`none`,m.style.flex=`none`,m.style.padding=`10px 32px`):(h.style.display=`block`,m.style.flex=`1`,m.style.padding=`10px 20px`);let g=async e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),a&&await a()},_=e=>{e.preventDefault(),e.stopPropagation(),l.style.display=`none`,v(),o&&o()},v=()=>{m.removeEventListener(`click`,g),h.removeEventListener(`click`,_)};m.addEventListener(`click`,g),h.addEventListener(`click`,_),l.style.display=`flex`},window.mostrarAlerta=function({titulo:e=`Aviso`,mensaje:t=``,icono:n=`warning`,textoBoton:r=`Aceptar`,iconoColor:i=null,iconoBg:a=null,onClose:o=null}={}){window.mostrarConfirmacion({titulo:e,mensaje:t,icono:n,textoSi:r,textoNo:``,iconoColor:i,iconoBg:a,onConfirm:o,onCancel:o})},window.mostrarProgreso=function({titulo:e=`Procesando...`,mensaje:t=`Por favor espere un momento...`,icono:n=`sync`,porcentaje:r=null}={}){let i=document.getElementById(`custom-progress-modal`),a=document.getElementById(`custom-progress-title`),o=document.getElementById(`custom-progress-message`),s=document.getElementById(`custom-progress-icon`),c=document.getElementById(`custom-progress-bar-fill`);i&&a&&o&&s&&(a.innerText=e,o.innerText=t,s.innerText=n,n===`sync`?(s.classList.add(`spin-icon`),s.style.animation=`spin 1.5s linear infinite`):(s.classList.remove(`spin-icon`),s.style.animation=`none`),c&&(typeof r==`number`?(c.style.animation=`none`,c.style.left=`0`,c.style.width=`${r}%`):c.style.animation=`greenProgressIndeterminate 1.8s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`),i.style.display=`flex`)},window.ocultarProgreso=function(){let e=document.getElementById(`custom-progress-modal`);e&&(e.style.display=`none`)};let a=()=>{if(!document.getElementById(`chat-badges-style`)){let e=document.createElement(`style`);e.id=`chat-badges-style`,e.textContent=`
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
      `,document.head.appendChild(e)}document.getElementById(`nav-wrapper`)||document.body.insertAdjacentHTML(`beforeend`,r),document.getElementById(`app-info-modal`)||document.body.insertAdjacentHTML(`beforeend`,i),document.getElementById(`custom-confirm-modal`)||document.body.insertAdjacentHTML(`beforeend`,`
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
  `),c()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,a):a();function c(){let r=document.getElementById(`nav-toggle`);r&&r.addEventListener(`click`,u);let i=e=>{e.preventDefault(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`);let n=window.location.pathname.includes(`/src/`);if(window.location.pathname.includes(`perfil.html`)||window.location.pathname.includes(`chat.html`)||!document.getElementById(`dashboard-view`)){window.location.href=n?`../index.html`:`./index.html`;return}let r=document.getElementById(`dashboard-view`),i=document.getElementById(`song-viewer-view`);r&&i&&(i.style.display=`none`,r.style.display=`block`,window.location.hash=``,window.scrollTo({top:0,behavior:`smooth`}))},a=document.getElementById(`btn-nav-inicio`);a&&a.addEventListener(`click`,i);let c=document.getElementById(`nav-resucito-camino`);c&&c.addEventListener(`click`,i);let f=(e,t)=>{let n=document.getElementById(e),r=document.getElementById(t);n&&r&&(r.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(t){e.stopPropagation(),r.classList.remove(`active`);let n=t.getAttribute(`href`),i=t.getAttribute(`target`);n&&n!==`#`&&!n.startsWith(`javascript:`)&&(i===`_blank`?window.open(t.href,`_blank`,`noopener`):window.location.href=t.href)}}),n.addEventListener(`click`,e=>{if(e.target.closest(`.nav-submenu`))return;e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),document.querySelectorAll(`.nav-submenu`).forEach(e=>{e!==r&&e.classList.remove(`active`)}),r.classList.toggle(`active`)}))};f(`btn-nav-menu`,`nav-submenu`),f(`btn-nav-neocate`,`nav-submenu-neocate`),f(`btn-nav-resucito`,`nav-submenu-resucito`),f(`btn-nav-formulario`,`nav-submenu-formulario`);let p=document.getElementById(`btn-open-settings`);p&&p.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=document.getElementById(`account-popup-card`);t&&t.classList.add(`hidden`),typeof window.abrirModalConfiguracion==`function`?window.abrirModalConfiguracion():_(()=>import(`./ajustes-BDG8FWB6.js`).then(()=>{if(typeof window.abrirModalConfiguracion==`function`)window.abrirModalConfiguracion();else{let e=document.getElementById(`settings-modal`);e&&(e.style.display=`flex`)}}),__vite__mapDeps([0,1]),import.meta.url).catch(e=>{console.warn(`No se pudo cargar ajustes in-situ:`,e),window.location.href=`./index.html#ajustes`})});let S=document.getElementById(`account-popup-card`),C=document.getElementById(`account-popup-close`),w=document.getElementById(`account-popup-toggle-header`),T=document.getElementById(`account-actions-list`),E=document.getElementById(`account-toggle-text`),D=document.getElementById(`account-toggle-icon`);C&&S&&C.addEventListener(`click`,e=>{e.stopPropagation(),S.classList.add(`hidden`)}),w&&T&&E&&D&&w.addEventListener(`click`,e=>{e.stopPropagation(),T.classList.contains(`collapsed`)?(T.classList.remove(`collapsed`),E.innerText=`Ocultar`,D.innerText=`expand_less`):(T.classList.add(`collapsed`),E.innerText=`Mostrar`,D.innerText=`expand_more`)});let O=document.getElementById(`account-popup-manage`),k=document.getElementById(`account-action-perfil`),A=document.getElementById(`account-action-preparar`),j=document.getElementById(`account-action-actualizar`),M=document.getElementById(`account-action-logout`),N=document.getElementById(`account-info-app-link`),P=document.getElementById(`app-info-modal`),F=document.getElementById(`close-app-info-modal`),I=window.location.pathname.includes(`/src/`),L=e=>{e.stopPropagation(),window.location.href=I?`../perfil.html`:`perfil.html`};O&&O.addEventListener(`click`,L),k&&k.addEventListener(`click`,L),A&&A.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../preparar.html`:`preparar.html`});let R=document.getElementById(`account-action-bitacora`);R&&R.addEventListener(`click`,e=>{e.stopPropagation(),window.location.href=I?`../bitacora.html`:`bitacora.html`}),j&&j.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),z()});let ee=document.getElementById(`account-action-chat`);ee&&ee.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.location.href=I?`../chat.html`:`chat.html`}),M&&M.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),window.mostrarConfirmacion({titulo:`Cerrar Sesión`,mensaje:`¿Desea cerrar sesión de su cuenta?`,icono:`logout`,textoSi:`Sí`,textoNo:`No`,onConfirm:async()=>{window.firebaseAPI?.logout?await window.firebaseAPI.logout():g()}})}),N&&P&&N.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),S&&S.classList.add(`hidden`),P.style.display=`flex`}),F&&P&&F.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),P.style.display=`none`});let z=()=>{if(!navigator.onLine){window.mostrarAlerta?window.mostrarAlerta({titulo:`Sin Conexión`,mensaje:`No puede Actualizar sin internet`,icono:`wifi_off`}):alert(`⚠️ No puede Actualizar sin internet`);return}S&&S.classList.add(`hidden`),P&&(P.style.display=`none`);let e=window._latestRemoteVersion||`Nueva versión`,t=n||`2.0`;window.mostrarConfirmacion({titulo:`Actualizar Aplicación`,mensaje:`¿Desea actualizar de la versión v${t} a la v${e}? Sus datos personales y cantos se conservarán intactos.`,icono:`system_update`,textoSi:`Sí, Actualizar`,textoNo:`Cancelar`,onConfirm:async()=>{let n=[`version.json`,`sw.js`,`index.html`,`src/main.js`,`src/navegador.js`,`src/navegador.css`,`src/style.css`,`data/songs-index.json`,`data/ajustes_modal.html`],r=0,i=n.length;window.mostrarProgreso({titulo:`Actualizando App`,mensaje:`Comparando v${t} ➔ v${e}\nIniciando descarga de archivos...`,icono:`sync`,porcentaje:5});for(let e of n){try{await fetch(e+`?t=`+Date.now(),{cache:`reload`})}catch(t){console.warn(`Aviso al descargar ${e}:`,t)}r++;let t=Math.round(r/i*40);window.mostrarProgreso({titulo:`Actualizando Sistema`,mensaje:`Descargando: ${e} (${r}/${i})`,icono:`sync`,porcentaje:t}),await new Promise(e=>setTimeout(e,60))}try{if(window.mostrarProgreso({titulo:`Sincronizando Todo el Cancionero`,mensaje:`Analizando y descargando todos los recursos faltantes...`,icono:`sync`,porcentaje:35}),typeof window.cargarTodosLosRecursosFaltantes==`function`)await window.cargarTodosLosRecursosFaltantes(e=>{let t=35+Math.round(e.percent/100*60);window.mostrarProgreso({titulo:`Descargando Recursos Faltantes`,mensaje:`${e.status||``} (${e.current||0}/${e.total||0})`,icono:`sync`,porcentaje:t})});else{let e=(await caches.keys()).find(e=>e.startsWith(`resucito-cache-`))||`resucito-cache-v371`,t=await caches.open(e),n=await caches.open(`resucito-cantos-cache`),r=await fetch(`data/songs-index.json?t=`+Date.now());if(r.ok){let e=await r.clone().json();await t.put(`data/songs-index.json`,r);for(let t=0;t<e.length;t+=10){let r=e.slice(t,t+10);await Promise.all(r.map(async e=>{let t=`${e.id&&e.id.startsWith(`aet`)?`data/songs-ae`:`data/songs`}/${e.id}.json?offline=true`;try{let e=await fetch(t);e.ok&&await n.put(t,e)}catch{}}))}}}}catch(e){console.warn(`Aviso en fase de sincronización de recursos:`,e)}if(`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.getRegistration();e&&(e.waiting&&e.waiting.postMessage({type:`SKIP_WAITING`}),await e.update())}catch{}window._latestRemoteVersion&&localStorage.setItem(`resucito_installed_version`,window._latestRemoteVersion),window.mostrarProgreso({titulo:`¡Actualización Lista!`,mensaje:`Todo el contenido y la versión v${e} están listos. Reiniciando...`,icono:`check_circle`,porcentaje:100}),setTimeout(()=>{window.location.reload()},900)}})};function te(e,t){if(!e||!t)return!1;let n=String(e).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),r=String(t).replace(/^v/i,``).split(`.`).map(e=>parseInt(e,10)||0),i=Math.max(n.length,r.length);for(let e=0;e<i;e++){let t=n[e]||0,i=r[e]||0;if(t>i)return!0;if(t<i)return!1}return!1}async function ne(){try{let e=(window.location.origin||``)+`/version.json?t=`+Date.now(),t=await fetch(e,{cache:`no-store`});if(!t.ok)return;let r=await t.json();if(r&&r.latestVersion&&te(r.latestVersion,n)){window._latestRemoteVersion=r.latestVersion,window._hasAppUpdateAvailable=!0;let e=`resucito_update_notif_shown_`+r.latestVersion;sessionStorage.getItem(e)||(sessionStorage.setItem(e,`1`),q(r.latestVersion)),typeof X==`function`&&X(),j&&(j.classList.add(`has-update-ready`),j.innerHTML=`
              <div class="account-update-halo-ring" title="¡Nueva versión disponible v${r.latestVersion}!"></div>
              <span style="font-weight: 700; color: #00e676;">Actualizar App</span>
              <span class="account-update-badge-pill">v${r.latestVersion}</span>
            `);let t=document.querySelector(`#app-info-modal .settings-body`);if(t&&!document.getElementById(`app-update-live-card`)){let e=document.createElement(`div`);e.id=`app-update-live-card`,e.className=`app-update-badge-container`,e.style.cssText=`margin-bottom: 20px; background: rgba(0,0,0,0.04); padding: 16px; border-radius: 18px; border: 1px solid rgba(255, 215, 0, 0.4);`,e.innerHTML=`
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
                Versión actual: v${n} ➔ Nueva: v${r.latestVersion}
              </div>
            `;let i=t.firstElementChild;i?i.insertAdjacentElement(`afterend`,e):t.prepend(e),document.getElementById(`btn-ring-update-modal`)?.addEventListener(`click`,z),document.getElementById(`btn-banner-update-modal`)?.addEventListener(`click`,z)}}else window._hasAppUpdateAvailable=!1,typeof X==`function`&&X()}catch(e){console.warn(`No se pudo verificar actualización remota:`,e)}}setTimeout(ne,1500),document.addEventListener(`click`,e=>{document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`nav-google-auth`),n=document.getElementById(`custom-confirm-modal`);S&&!S.contains(e.target)&&(!t||!t.contains(e.target))&&S.classList.add(`hidden`),P&&e.target===P&&(P.style.display=`none`),n&&e.target===n&&(n.style.display=`none`)});let re=e=>{let t=document.getElementById(`nav-auth-icon`),n=document.getElementById(`nav-auth-text`),r=document.getElementById(`nav-google-auth`),i=document.getElementById(`account-popup-card`),a=document.getElementById(`account-popup-email`),o=document.getElementById(`account-popup-greeting`),s=document.getElementById(`account-popup-img`);!r||!t||!n||(e?(a&&(a.innerText=e.email||`usuario@gmail.com`),o&&(o.innerText=`¡Hola, ${e.displayName||`Usuario`}!`),s&&e.photoURL&&(s.src=e.photoURL),t.innerHTML=e.photoURL?`<img src="${e.photoURL}" class="dbperfil">`:`<span class="material-symbols-outlined arrow-icon">person</span>`,n.innerText=`Cuenta`,r.onclick=e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i&&i.classList.toggle(`hidden`)}):(t.innerHTML=`<span class="material-symbols-outlined arrow-icon">account_circle</span>`,n.innerText=`Entrar`,i&&i.classList.add(`hidden`),r.onclick=e=>{e.preventDefault(),e.stopPropagation();let t=window.firebaseAPI?.getCurrentUser?.();if(t){re(t),i&&i.classList.remove(`hidden`);return}if(window._hasAppUpdateAvailable&&i){document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),i.classList.toggle(`hidden`);return}window.firebaseAPI?.login?window.firebaseAPI.login():l()}))};function B(){let e=v(),t=e||d(`page_inicio`),n=e||d(`page_perfil`),r=e||d(`page_preparar`),i=e||d(`page_bitacora`);e||d(`page_introduccion`);let a=e||d(`page_resucito_pdf`),o=e||d(`page_instalar_app`),c=e||d(`page_mantcantos`),l=e||d(`page_respaldo`),u=e||d(`page_seucaristico`),f=s()||window.firebaseAPI?.getCurrentUser?.(),p=e||!!f&&d(`page_chat`),m=document.getElementById(`btn-nav-inicio`);m&&(m.style.display=t?`flex`:`none`);let h=document.getElementById(`nav-resucito-camino`),g=document.getElementById(`nav-resucito-perfil`),_=document.getElementById(`nav-resucito-preparar`),y=document.getElementById(`nav-resucito-bitacora`),b=document.getElementById(`nav-resucito-pdf`),x=document.getElementById(`nav-resucito-chat`),S=document.getElementById(`installButton`);h&&(h.style.display=t?`flex`:`none`),g&&(g.style.display=n?`flex`:`none`),_&&(_.style.display=r?`flex`:`none`),y&&(y.style.display=i?`flex`:`none`),b&&(b.style.display=a?`flex`:`none`),x&&(x.style.display=p?`flex`:`none`),S&&(S.style.display=o?`flex`:`none`);let C=document.getElementById(`btn-nav-formulario`),w=document.getElementById(`nav-formulario-datosparroquia`),T=document.getElementById(`nav-formulario-mantcantos`),E=document.getElementById(`nav-formulario-respaldo`),D=document.getElementById(`nav-formulario-seucaristico`);w&&(w.style.display=e?`flex`:`none`),T&&(T.style.display=c?`flex`:`none`),E&&(E.style.display=l?`flex`:`none`),D&&(D.style.display=u?`flex`:`none`);let O=e||c||l||u;C&&(C.style.display=O?`flex`:`none`);let k=document.getElementById(`account-action-preparar`),A=document.getElementById(`account-action-perfil`),j=document.getElementById(`account-action-bitacora`),M=document.getElementById(`account-action-chat`),N=document.getElementById(`account-popup-manage`);k&&(k.style.display=r?`flex`:`none`),A&&(A.style.display=n?`flex`:`none`),j&&(j.style.display=i?`flex`:`none`),M&&(M.style.display=p?`flex`:`none`),N&&(N.style.display=n?`block`:`none`),V()}function V(){if(!m())return;let e=window.location.pathname.toLowerCase();v()||(e.includes(`perfil.html`)&&!d(`page_perfil`)?(console.warn(`Acceso denegado a perfil.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`preparar.html`)&&!d(`page_preparar`)?(console.warn(`Acceso denegado a preparar.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`bitacora.html`)&&!d(`page_bitacora`)?(console.warn(`Acceso denegado a bitacora.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`intro.html`)&&!d(`page_introduccion`)?(console.warn(`Acceso denegado a intro.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`/index.html`)):e.includes(`mantcantos.html`)&&!d(`page_mantcantos`)?(console.warn(`Acceso denegado a mantcantos.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`respaldo.html`)&&!d(`page_respaldo`)?(console.warn(`Acceso denegado a respaldo.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`seucaristico.html`)&&!d(`page_seucaristico`)?(console.warn(`Acceso denegado a seucaristico.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`firebase.html`)&&!d(`page_firebase`)?(console.warn(`Acceso denegado a firebase.html por permisos. Redirigiendo a Inicio...`),window.location.replace(`./index.html`)):e.includes(`chat.html`)&&(!(s()||window.firebaseAPI?.getCurrentUser?.())||!d(`page_chat`))&&console.warn(`Acceso denegado a chat.html para usuarios no autenticados o sin permisos.`))}window.updateNavPagesVisibility=B,window.checkCurrentPagePermissionAndRedirect=V,B();let H=null,U=0;function W(e){return e?String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`):``}function G(){return localStorage.getItem(`resucito_chat_notificaciones`)!==`false`}function K(){try{if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;if(t.state===`suspended`)return;let n=t.createOscillator(),r=t.createGain();n.type=`sine`,n.connect(r),r.connect(t.destination);let i=t.currentTime;n.frequency.setValueAtTime(587.33,i),n.frequency.setValueAtTime(880,i+.12),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.28,i+.03),r.gain.exponentialRampToValueAtTime(.001,i+.45),n.start(i),n.stop(i+.46)}catch{}}function ie(e,t){if(window.location.pathname.includes(`chat.html`))return;let n=document.getElementById(`resucito-chat-toast`);n||(n=document.createElement(`div`),n.id=`resucito-chat-toast`,n.style.cssText=`
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
            ${W(e||`Nuevo mensaje`)}
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${W(t||`Tienes un nuevo mensaje`)}
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
            Actualización de la App (v${W(e)})
          </div>
          <div style="font-size: 0.80rem; color: #e9edef; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            Toca aquí o entra a Cuenta ➔ Actualizar App
          </div>
        </div>
        <span class="material-symbols-outlined" style="color: #8696a0; font-size: 18px; margin-left: 6px;">chevron_right</span>
      `,K(),typeof Notification<`u`&&Notification.permission===`granted`)try{let t=new Notification(`🚀 Actualización de Resucitó (v`+e+`)`,{body:`Nueva versión disponible. Entra a Cuenta para actualizar la App.`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-update-notif`,renotify:!0});t.onclick=()=>{if(window.focus(),window.location.pathname.includes(`chat.html`)){window.location.href=`index.html?openAccount=1`;return}let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`)),t.close()}}catch{}t.style.top=`16px`,window._updateToastTimer&&clearTimeout(window._updateToastTimer),window._updateToastTimer=setTimeout(()=>{t.style.top=`-95px`},7e3)}window._mostrarBannerActualizacion=q;function J(e,t){if(!(typeof Notification>`u`||Notification.permission!==`granted`))try{let n=new Notification(`💬 `+(e||`Resucitó Soporte`),{body:t||`Tienes un nuevo mensaje de chat`,icon:`img/christ.png`,badge:`img/christ.png`,tag:`resucito-chat-msg`,renotify:!0});n.onclick=()=>{window.focus(),window.location.pathname.includes(`chat.html`)||(window.location.href=`chat.html`),n.close()}}catch{}}function Y(e,t){G()&&(K(),ie(e,t),J(e,t))}window._reproducirSonidoNotificacion=K,window._mostrarNotificacionNavegador=J,window._dispararNotificacionCompleta=Y,document.addEventListener(`click`,function e(){G()&&typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}),document.removeEventListener(`click`,e)},{once:!0});function X(){let e=document.getElementById(`badge-chat-nav-cuenta`),t=document.getElementById(`badge-chat-account-popup`),n=document.getElementById(`badge-chat-nav-submenu`),r=G(),i=s()||window.firebaseAPI?.getCurrentUser?.(),a=window.location.pathname.includes(`chat.html`),o=r&&!a&&!!i&&U>0,c=U>99?`99+`:String(U),l=!!window._hasAppUpdateAvailable;e&&(o?(e.textContent=c,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#25d366`,`important`),e.style.setProperty(`color`,`#000000`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 0, 0, 0.4)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):l&&!a?(e.textContent=`1`,e.style.setProperty(`display`,`inline-flex`,`important`),e.style.setProperty(`position`,`absolute`,`important`),e.style.setProperty(`top`,`-4px`,`important`),e.style.setProperty(`right`,`calc(50% - 28px)`,`important`),e.style.setProperty(`background-color`,`#007aff`,`important`),e.style.setProperty(`color`,`#ffffff`,`important`),e.style.setProperty(`font-weight`,`900`,`important`),e.style.setProperty(`font-size`,`0.72rem`,`important`),e.style.setProperty(`min-width`,`18px`,`important`),e.style.setProperty(`height`,`18px`,`important`),e.style.setProperty(`line-height`,`18px`,`important`),e.style.setProperty(`border-radius`,`9999px`,`important`),e.style.setProperty(`padding`,`0 4px`,`important`),e.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),e.style.setProperty(`box-sizing`,`border-box`,`important`),e.style.setProperty(`box-shadow`,`0 2px 6px rgba(0, 122, 255, 0.55)`,`important`),e.style.setProperty(`z-index`,`10`,`important`),e.style.setProperty(`pointer-events`,`none`,`important`),e.style.setProperty(`align-items`,`center`,`important`),e.style.setProperty(`justify-content`,`center`,`important`)):e.style.setProperty(`display`,`none`,`important`)),t&&(o?(t.textContent=c,t.style.setProperty(`display`,`inline-flex`,`important`),t.style.setProperty(`background-color`,`#25d366`,`important`),t.style.setProperty(`color`,`#000000`,`important`),t.style.setProperty(`font-weight`,`900`,`important`),t.style.setProperty(`font-size`,`0.75rem`,`important`),t.style.setProperty(`min-width`,`20px`,`important`),t.style.setProperty(`height`,`20px`,`important`),t.style.setProperty(`line-height`,`20px`,`important`),t.style.setProperty(`border-radius`,`9999px`,`important`),t.style.setProperty(`padding`,`0 6px`,`important`),t.style.setProperty(`margin-left`,`auto`,`important`),t.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),t.style.setProperty(`box-sizing`,`border-box`,`important`),t.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),t.style.setProperty(`align-items`,`center`,`important`),t.style.setProperty(`justify-content`,`center`,`important`),t.style.setProperty(`flex-shrink`,`0`,`important`)):t.style.setProperty(`display`,`none`,`important`)),n&&(o?(n.textContent=c,n.style.setProperty(`display`,`inline-flex`,`important`),n.style.setProperty(`background-color`,`#25d366`,`important`),n.style.setProperty(`color`,`#000000`,`important`),n.style.setProperty(`font-weight`,`900`,`important`),n.style.setProperty(`font-size`,`0.75rem`,`important`),n.style.setProperty(`min-width`,`20px`,`important`),n.style.setProperty(`height`,`20px`,`important`),n.style.setProperty(`line-height`,`20px`,`important`),n.style.setProperty(`border-radius`,`9999px`,`important`),n.style.setProperty(`padding`,`0 6px`,`important`),n.style.setProperty(`margin-left`,`auto`,`important`),n.style.setProperty(`border`,`1.5px solid #ffffff`,`important`),n.style.setProperty(`box-sizing`,`border-box`,`important`),n.style.setProperty(`box-shadow`,`0 1px 4px rgba(0, 0, 0, 0.35)`,`important`),n.style.setProperty(`align-items`,`center`,`important`),n.style.setProperty(`justify-content`,`center`,`important`),n.style.setProperty(`flex-shrink`,`0`,`important`)):n.style.setProperty(`display`,`none`,`important`))}function ae(n){if(H&&=(H(),null),!n||!y){U=0,X();return}let r=n.email&&n.email.toLowerCase().trim()===`dbaezh78@gmail.com`||v(),i=Date.now();if(r)try{H=t(o(y,`support_chats`),e=>{let t=0,r=n.email?n.email.toLowerCase().trim():``,a=new Map,o=null;e.forEach(e=>{let t=e.data();if(t&&typeof t.unreadAdmin==`number`&&t.unreadAdmin>0&&(t.lastSenderEmail?t.lastSenderEmail.toLowerCase().trim():``)!==r&&e.id!==n.uid&&e.id.toLowerCase()!==`dbaezh78_gmail_com`){let n=(t.userEmail||e.id).toLowerCase().trim(),r=a.get(n)||0;a.set(n,Math.max(r,t.unreadAdmin)),t.lastTimestamp&&t.lastTimestamp>i&&(!o||t.lastTimestamp>o.time)&&(o={remitente:t.userName||t.userEmail||`Hermano Cantor`,texto:t.lastMessage||`Nuevo mensaje recibido`,time:t.lastTimestamp})}}),o&&(i=o.time,Y(o.remitente,o.texto));for(let e of a.values())t+=e;U=t,X()},e=>{console.warn(`Aviso escuchando chats admin:`,e)})}catch(e){console.warn(`Error inicializando listener chats admin:`,e)}else try{let e=n.email?n.email.toLowerCase().trim().replace(/[^a-zA-Z0-9_-]/g,`_`):``,r=n.email?n.email.toLowerCase().trim():``,i=0,a=0,o=!1,s=Date.now();function c(e,t,n){let c=0;e&&typeof e.unreadUser==`number`&&e.unreadUser>0&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==r&&(c=e.unreadUser),t===`uid`&&(i=c,n&&(o=!0)),t===`email`&&(a=c),U=o?i:a,X(),e&&e.lastTimestamp&&e.lastTimestamp>s&&(e.lastSenderEmail?e.lastSenderEmail.toLowerCase().trim():``)!==r&&(s=e.lastTimestamp,Y(`Soporte Resucitó (Administrador)`,e.lastMessage||`Nuevo mensaje recibido`))}let l=t(x(y,`support_chats`,n.uid),e=>{c(e.exists()?e.data():null,`uid`,e.exists())},e=>{console.warn(`Aviso escuchando chat usuario por uid:`,e)}),u=null;e&&e!==n.uid&&(u=t(x(y,`support_chats`,e),e=>{c(e.exists()?e.data():null,`email`,e.exists())},()=>{})),H=()=>{l&&l(),u&&u()}}catch(e){console.warn(`Error inicializando listener chat usuario:`,e)}if(localStorage.getItem(`resucito_chat_notificaciones`)===null)try{e(x(y,`usuarios`,n.uid,`perfil`,`config`)).then(e=>{if(e&&e.exists()){let t=e.data();typeof t.chatNotificaciones==`boolean`&&(localStorage.setItem(`resucito_chat_notificaciones`,t.chatNotificaciones?`true`:`false`),X())}}).catch(()=>{})}catch{}}window.addEventListener(`chat_notificaciones_changed`,()=>{X()}),window.addEventListener(`storage`,e=>{e.key===`resucito_chat_notificaciones`&&X()}),h(e=>{re(e),B(),ae(e),X()});let Z=document.getElementById(`installButton`);Z&&(window.deferredPrompt||(Z.style.opacity=`0.85`),Z.addEventListener(`click`,async e=>{e.preventDefault(),e.stopPropagation(),document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`));let t=window.deferredPrompt;if(t){t.prompt();let{outcome:e}=await t.userChoice;console.log(`PWA: Elección del usuario para instalar: ${e}`),window.deferredPrompt=null,e===`accepted`&&(Z.style.opacity=`0.5`,Z.style.pointerEvents=`none`)}else window.mostrarAlerta?window.mostrarAlerta({titulo:`Instalar Aplicación`,mensaje:`Si no ves la ventana de instalación, puedes instalarla manualmente desde el menú de opciones de tu navegador seleccionando "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone usa la opción "Compartir" > "Agregar a pantalla de inicio").`,icono:`download_for_offline`}):alert(`Para instalar la aplicación, abre el menú de tu navegador y selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio" (en iPhone, presiona el botón "Compartir" y luego "Agregar a pantalla de inicio").`)})),I&&document.querySelectorAll(`#nav-submenu-resucito a, #nav-submenu-formulario a, .account-popup-footer a`).forEach(e=>{let t=e.getAttribute(`href`);t&&!t.startsWith(`http`)&&!t.startsWith(`#`)&&!t.startsWith(`/`)&&!t.startsWith(`../`)&&(t.startsWith(`src/`)?e.setAttribute(`href`,t.replace(`src/`,``)):e.setAttribute(`href`,`../`+t))}),window.location.search.includes(`openAccount=1`)&&setTimeout(()=>{let e=document.getElementById(`account-popup-card`);e&&(document.querySelectorAll(`.nav-submenu`).forEach(e=>e.classList.remove(`active`)),e.classList.remove(`hidden`));try{let e=new URL(window.location.href);e.searchParams.delete(`openAccount`),window.history.replaceState({},``,e.pathname+(e.search?e.search:``)+e.hash)}catch{}},400),b()}function u(){let e=document.getElementById(`nav-wrapper`),t=document.getElementById(`toggle-icon`);e&&e.classList.toggle(`hidden`),t&&t.classList.toggle(`rotate-180`)}window.toggleNavbar=u;let f;function p(){if(localStorage.getItem(`pref-autohide-nav`)!==`true`){f&&clearTimeout(f);return}clearTimeout(f),f=setTimeout(()=>{let e=document.getElementById(`nav-wrapper`);e&&!e.classList.contains(`hidden`)&&window.toggleNavbar()},3e4)}window.startAutoHideTimer=p,document.addEventListener(`mousemove`,p),document.addEventListener(`touchstart`,p),document.addEventListener(`scroll`,p);function b(){let e=localStorage.getItem(`nav-color-text`),t=localStorage.getItem(`nav-color-text-hover`),n=localStorage.getItem(`nav-color-bg`),r=localStorage.getItem(`nav-color-bg-hover`),i=localStorage.getItem(`nav-color-btn-bg`),a=localStorage.getItem(`nav-color-btn-bg-hover`)||localStorage.getItem(`nav-color-btn-hover-bg`),o=localStorage.getItem(`nav-color-icon`),s=localStorage.getItem(`nav-color-icon-hover`),c=localStorage.getItem(`nav-color-submenu-icon`),l=localStorage.getItem(`nav-color-submenu-icon-hover`),u=localStorage.getItem(`nav-color-wrapper-bg`),d=localStorage.getItem(`nav-color-wrapper-bg-hover`)||localStorage.getItem(`nav-color-wrapper-hover-bg`),f=document.documentElement;e?f.style.setProperty(`--nav-text-color`,e):f.style.removeProperty(`--nav-text-color`),t?f.style.setProperty(`--nav-text-hover-color`,t):f.style.removeProperty(`--nav-text-hover-color`),n?f.style.setProperty(`--nav-bg-color`,n):f.style.removeProperty(`--nav-bg-color`),r?f.style.setProperty(`--nav-bg-hover-color`,r):f.style.removeProperty(`--nav-bg-hover-color`),i?f.style.setProperty(`--nav-btn-bg`,i):f.style.removeProperty(`--nav-btn-bg`),a?f.style.setProperty(`--nav-btn-hover-bg`,a):f.style.removeProperty(`--nav-btn-hover-bg`),o?f.style.setProperty(`--nav-icon-color`,o):f.style.removeProperty(`--nav-icon-color`),s?f.style.setProperty(`--nav-icon-hover-color`,s):f.style.removeProperty(`--nav-icon-hover-color`),c?f.style.setProperty(`--nav-submenu-icon-color`,c):f.style.removeProperty(`--nav-submenu-icon-color`),l?f.style.setProperty(`--nav-submenu-icon-hover-color`,l):f.style.removeProperty(`--nav-submenu-icon-hover-color`),u?f.style.setProperty(`--nav-wrapper-bg`,u):f.style.removeProperty(`--nav-wrapper-bg`),d?f.style.setProperty(`--nav-wrapper-hover-bg`,d):f.style.removeProperty(`--nav-wrapper-hover-bg`)}window.applyNavTheme=b})();