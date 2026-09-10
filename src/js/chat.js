// src/js/chat.js - Lógica y conexión Firebase para el Chat de Asistencia (Estilo WhatsApp Web)

import { 
  auth, 
  db, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  query, 
  orderBy, 
  limit 
} from '../firebase.js';
import { onAuthStateChanged, isCurrentUserAdmin, getCurrentUser, loginConGoogle } from '../auth.js';
import { hasPermission } from '../accesscontrol.js';

const ADMIN_EMAIL = 'dbaezh78@gmail.com';
const FIVE_MINUTES_MS = 5 * 60 * 1000; // 5 minutos en milisegundos

// Estado global de la sesión y chats
let currentUser = null;
let isAdmin = false;
let canViewAllChats = false;
let activeChatId = null;
let activeChatUser = null;
let rawChatsList = [];
let unsubscribeMessages = null;
let unsubscribeChats = null;
let pendingImageBase64 = null;
let currentFilter = 'all';
let searchQuery = '';

// Variables para modales de edición / eliminación
let targetMessageData = null;

// Emojis de reacción rápida estilo WhatsApp
const REACTION_EMOJIS = ['👍', '❤️', '😂', '😮', '😢', '🙏'];

// Emojis de WhatsApp organizados por categoría
const EMOJIS = {
  popular: ['👍', '🙏', '❤️', '😂', '😊', '✝️', '🕊️', '🎶', '🎸', '📖', '🙌', '👏', '🔥', '✨'],
  faces: [
    '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇',
    '🥰', '😍', '🤩', '😘', '😗', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗',
    '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥',
    '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶'
  ],
  hands: [
    '👋', '🤚', '🖐️', '✋', '🖖', '👌', '🤏', '✌️', '🤞', '🤟', '🤘', '🤙',
    '👈', '👉', '👆', '🖕', '👇', '☝️', '👍', '👎', '✊', '👊', '🤛', '🤜',
    '👏', '🙌', '👐', '🤲', '🤝', '🙏', '💪', '🦾'
  ],
  music: [
    '✝️', '⛪', '🕊️', '🕯️', '📖', '📜', '🎶', '🎵', '🎼', '🎸', '🎹', '🎺', '🎻', '🥁', '🎤', '🎧'
  ],
  symbols: [
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💔', '❣️', '💕', '💞',
    '💓', '💗', '💖', '💘', '💝', '⭐', '🌟', '✨', '💥', '🔥', '💯', '💢', '💤', '🎉'
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  setupDomEvents();
  renderEmojis('popular');
  initAuth();
});

// 1. Inicialización de Autenticación
function initAuth() {
  onAuthStateChanged(async (user) => {
    if (user) {
      currentUser = user;
      isAdmin = (user.email && user.email.toLowerCase().trim() === ADMIN_EMAIL) || isCurrentUserAdmin();
      canViewAllChats = isAdmin || hasPermission('view_all_chats');
      
      const myAvatar = document.getElementById('my-avatar');
      const myName = document.getElementById('my-display-name');
      const myRole = document.getElementById('my-user-role');

      if (myAvatar) myAvatar.src = user.photoURL || '../img/christ.png';
      if (myName) myName.textContent = user.displayName || user.email.split('@')[0];
      if (myRole) myRole.textContent = isAdmin ? 'Administrador' : (canViewAllChats ? 'Soporte / Asistencia' : 'Hermano Cantor');

      if (canViewAllChats) {
        initAdminView();
      } else {
        initCantorView();
      }
    } else {
      mostrarModalLogin();
    }
  });
}

// 2. Vista para Administrador
function initAdminView() {
  const sidebar = document.getElementById('wa-sidebar');
  if (sidebar) sidebar.style.display = 'flex';
  listenToAllChats();
}

// 3. Vista para Cantor Normal
function initCantorView() {
  const searchSection = document.getElementById('wa-search-section');
  if (searchSection) searchSection.style.display = 'none';

  const chatListEl = document.getElementById('wa-chat-list');
  if (chatListEl) {
    chatListEl.innerHTML = `
      <div class="wa-chat-item active" id="cantor-admin-chat-item">
        <img src="../img/christ.png" class="wa-avatar" alt="Admin">
        <div class="wa-chat-item-info">
          <div class="wa-chat-item-row">
            <span class="wa-chat-item-name">Soporte y Administración</span>
            <span class="wa-chat-item-time" id="cantor-chat-time">En vivo</span>
          </div>
          <div class="wa-chat-item-msg" id="cantor-chat-last-msg">
            <span class="material-symbols-outlined" style="font-size: 14px; color: var(--wa-check-blue);">done_all</span>
            <span>Canal directo con el Administrador</span>
          </div>
        </div>
      </div>
    `;
  }

  activeChatId = currentUser.uid;
  activeChatUser = {
    id: currentUser.uid,
    displayName: 'Soporte Resucitó (Administrador)',
    email: ADMIN_EMAIL,
    photoURL: '../img/christ.png'
  };

  actualizarHeaderChat(activeChatUser);
  escucharMensajesDeChat(activeChatId);

  document.getElementById('wa-app-root').classList.add('chat-open');
}

// 4. Escucha en tiempo real de todos los chats para el Administrador
function listenToAllChats() {
  if (unsubscribeChats) unsubscribeChats();

  const q = query(collection(db, 'support_chats'), orderBy('lastTimestamp', 'desc'), limit(100));

  unsubscribeChats = onSnapshot(q, async (snapshot) => {
    const list = [];
    snapshot.forEach(docSnap => {
      list.push({ id: docSnap.id, ...docSnap.data() });
    });

    try {
      const regSnap = await getDocs(collection(db, 'registered_users'));
      regSnap.forEach(rDoc => {
        const uData = rDoc.data();
        if (uData.email && uData.email.toLowerCase() !== ADMIN_EMAIL) {
          const exists = list.some(c => c.userEmail && c.userEmail.toLowerCase() === uData.email.toLowerCase());
          if (!exists) {
            list.push({
              id: rDoc.id,
              userId: rDoc.id,
              userEmail: uData.email,
              userName: uData.displayName || uData.email.split('@')[0],
              userPhoto: '../img/christ.png',
              lastMessage: 'Sin mensajes aún',
              lastTimestamp: 0,
              unreadAdmin: 0
            });
          }
        }
      });
    } catch (e) {
      console.warn("Aviso cargando usuarios registrados para chats:", e);
    }

    rawChatsList = list;
    renderAdminChatList();

    if (!activeChatId && rawChatsList.length > 0) {
      seleccionarChat(rawChatsList[0]);
    }
  }, (err) => {
    console.error("Error al escuchar chats:", err);
  });
}

// 5. Renderizar lista de chats en la barra lateral del Administrador
function renderAdminChatList() {
  const container = document.getElementById('wa-chat-list');
  if (!container) return;

  let filtered = [...rawChatsList];

  if (searchQuery.trim()) {
    const term = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(c => 
      (c.userName && c.userName.toLowerCase().includes(term)) ||
      (c.userEmail && c.userEmail.toLowerCase().includes(term)) ||
      (c.lastMessage && c.lastMessage.toLowerCase().includes(term))
    );
  }

  if (currentFilter === 'unread') {
    filtered = filtered.filter(c => (c.unreadAdmin || 0) > 0);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 30px 20px; text-align: center; color: var(--wa-text-secondary); font-size: 13.5px;">
        No se encontraron conversaciones.
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  filtered.forEach(chat => {
    const item = document.createElement('div');
    item.className = `wa-chat-item ${activeChatId === chat.id ? 'active' : ''}`;
    
    const timeFormatted = chat.lastTimestamp ? formatearHora(chat.lastTimestamp) : '';
    const unreadCount = chat.unreadAdmin || 0;
    const avatarSrc = chat.userPhoto || '../img/christ.png';
    const name = chat.userName || chat.userEmail || 'Hermano Cantor';

    item.innerHTML = `
      <img src="${avatarSrc}" class="wa-avatar" alt="${escapeHtml(name)}" onerror="this.src='../img/christ.png'">
      <div class="wa-chat-item-info">
        <div class="wa-chat-item-row">
          <span class="wa-chat-item-name">${escapeHtml(name)}</span>
          <span class="wa-chat-item-time">${timeFormatted}</span>
        </div>
        <div class="wa-chat-item-row" style="margin-top: 2px;">
          <div class="wa-chat-item-msg">
            <span>${escapeHtml(chat.lastMessage || 'Mensaje')}</span>
          </div>
          ${unreadCount > 0 ? `<span class="wa-badge-unread">${unreadCount}</span>` : ''}
        </div>
      </div>
    `;

    item.addEventListener('click', () => {
      seleccionarChat(chat);
      document.getElementById('wa-app-root').classList.add('chat-open');
    });

    container.appendChild(item);
  });
}

// 6. Seleccionar un chat para abrirlo en el panel principal
function seleccionarChat(chat) {
  activeChatId = chat.id;
  activeChatUser = {
    id: chat.userId || chat.id,
    displayName: chat.userName || chat.userEmail || 'Hermano Cantor',
    email: chat.userEmail,
    photoURL: chat.userPhoto || '../img/christ.png'
  };

  actualizarHeaderChat(activeChatUser);
  renderAdminChatList();
  escucharMensajesDeChat(activeChatId);

  if (canViewAllChats && (chat.unreadAdmin || 0) > 0) {
    try {
      updateDoc(doc(db, 'support_chats', activeChatId), { unreadAdmin: 0 });
    } catch (e) {}
  }
}

// 7. Actualizar Cabecera del Chat Activo
function actualizarHeaderChat(chatUser) {
  const avatarEl = document.getElementById('active-chat-avatar');
  const nameEl = document.getElementById('active-chat-name');
  const statusEl = document.getElementById('active-chat-status');

  if (avatarEl) {
    avatarEl.src = chatUser.photoURL || '../img/christ.png';
    avatarEl.onerror = () => { avatarEl.src = '../img/christ.png'; };
  }
  if (nameEl) nameEl.textContent = chatUser.displayName;
  if (statusEl) {
    statusEl.textContent = canViewAllChats ? (chatUser.email || 'en línea') : 'en línea / Asistencia Resucitó';
  }
}

// 8. Escuchar Mensajes en Vivo del Chat Activo
function escucharMensajesDeChat(chatId) {
  if (unsubscribeMessages) unsubscribeMessages();

  const messagesArea = document.getElementById('wa-messages-area');
  if (messagesArea) {
    messagesArea.innerHTML = `
      <div class="wa-date-divider">Cargando mensajes...</div>
    `;
  }

  const msgsCol = collection(db, 'support_chats', chatId, 'messages');
  const q = query(msgsCol, orderBy('timestamp', 'asc'), limit(200));

  unsubscribeMessages = onSnapshot(q, (snapshot) => {
    const msgs = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data();
      const hiddenFor = data.hiddenFor || [];
      if (!hiddenFor.includes(currentUser.uid)) {
        msgs.push({ id: docSnap.id, ...data });
      }
    });

    renderizarMensajes(msgs);
  }, (err) => {
    console.error("Error al escuchar mensajes:", err);
  });
}

// 9. Renderizar Mensajes en el Área de Chat
function renderizarMensajes(msgs) {
  const messagesArea = document.getElementById('wa-messages-area');
  if (!messagesArea) return;

  messagesArea.innerHTML = '';

  if (msgs.length === 0) {
    messagesArea.innerHTML = `
      <div class="wa-date-divider">Hoy</div>
      <div style="text-align: center; margin: 40px auto; max-width: 320px; background: rgba(32, 44, 51, 0.9); padding: 14px 18px; border-radius: 12px; color: var(--wa-text-secondary); font-size: 13px; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
        <span class="material-symbols-outlined" style="font-size: 28px; color: var(--wa-accent); display: block; margin-bottom: 6px;">lock</span>
        Los mensajes de este chat son privados y directos para darte asistencia técnica y fraternal en Resucitó.
      </div>
    `;
    return;
  }

  let lastDateStr = '';

  msgs.forEach((msg) => {
    const msgDate = new Date(msg.timestamp || Date.now());
    const dateStr = formatearFechaCabecera(msgDate);

    if (dateStr !== lastDateStr) {
      const dateDiv = document.createElement('div');
      dateDiv.className = 'wa-date-divider';
      dateDiv.textContent = dateStr;
      messagesArea.appendChild(dateDiv);
      lastDateStr = dateStr;
    }

    const isMine = (msg.senderEmail === currentUser.email) || (msg.senderId === currentUser.uid);
    const row = document.createElement('div');
    row.className = `wa-message-row ${isMine ? 'out' : 'in'}`;

    const bubble = document.createElement('div');
    bubble.className = `wa-bubble ${isMine ? 'out' : 'in'}`;

    let imgHTML = '';
    if (msg.imageUrl && !msg.deletedForEveryone) {
      imgHTML = `
        <div class="wa-bubble-image-wrap" data-img-url="${msg.imageUrl}">
          <img src="${msg.imageUrl}" class="wa-bubble-image" alt="Foto adjunta">
        </div>
      `;
    }

    let senderHTML = '';
    if (canViewAllChats && !isMine) {
      const nombreUsuario = msg.senderName || (activeChatUser?.displayName) || msg.senderEmail?.split('@')[0] || 'Hermano Cantor';
      const emailUsuario = msg.senderEmail ? `<span class="wa-sender-label-sub">(${escapeHtml(msg.senderEmail)})</span>` : '';
      senderHTML = `<div class="wa-sender-label"><span>👤 ${escapeHtml(nombreUsuario)}</span> ${emailUsuario}</div>`;
    }

    let textHTML = '';
    if (msg.deletedForEveryone) {
      textHTML = `<span class="wa-bubble-text" style="font-style: italic; color: var(--wa-text-secondary);"><span class="material-symbols-outlined" style="font-size: 14px; vertical-align: -2px;">block</span> Este mensaje fue eliminado</span>`;
    } else {
      textHTML = `<span class="wa-bubble-text">${escapeHtml(msg.text || '')}</span>`;
    }

    const timeStr = formatearHora(msg.timestamp);
    const editedStr = (msg.edited && !msg.deletedForEveryone) ? '<span class="wa-bubble-edited">Editado</span>' : '';
    const checkIcon = isMine ? '<span class="material-symbols-outlined wa-check-icon">done_all</span>' : '';

    // Preparar barra de reacciones estilo WhatsApp flotante
    const userReaction = (msg.reactions && msg.reactions[currentUser.uid]) ? msg.reactions[currentUser.uid] : null;
    let reactionsBarHTML = '';
    if (!msg.deletedForEveryone) {
      const emojiBtns = REACTION_EMOJIS.map(emoji => `
        <button type="button" class="wa-reaction-emoji-btn ${userReaction === emoji ? 'active' : ''}" data-emoji="${emoji}">
          ${emoji}
        </button>
      `).join('');
      reactionsBarHTML = `<div class="wa-reaction-bar" id="reaction-bar-${msg.id}">${emojiBtns}</div>`;
    }

    // Preparar insignia/píldoras de reacciones agrupadas en el borde inferior
    let reactionsBadgeHTML = '';
    if (msg.reactions && typeof msg.reactions === 'object' && !msg.deletedForEveryone) {
      const counts = {};
      Object.entries(msg.reactions).forEach(([uid, emoji]) => {
        if (emoji) counts[emoji] = (counts[emoji] || 0) + 1;
      });
      const emojisPresent = Object.keys(counts);
      if (emojisPresent.length > 0) {
        const pills = emojisPresent.map(em => {
          const hasMine = (userReaction === em) ? 'has-mine' : '';
          return `<span class="wa-reaction-pill ${hasMine}" data-emoji="${em}">${em} ${counts[em] > 1 ? counts[em] : ''}</span>`;
        }).join('');
        reactionsBadgeHTML = `<div class="wa-reaction-badge-container">${pills}</div>`;
      }
    }

    const reactionTriggerHTML = !msg.deletedForEveryone ? `
      <button class="wa-reaction-trigger-btn" title="Reaccionar al mensaje">
        <span class="material-symbols-outlined" style="font-size: 16px;">add_reaction</span>
      </button>
    ` : '';

    bubble.innerHTML = `
      ${reactionsBarHTML}
      ${senderHTML}
      ${imgHTML}
      ${textHTML}
      <div class="wa-bubble-meta">
        ${editedStr}
        <span>${timeStr}</span>
        ${checkIcon}
      </div>
      ${reactionTriggerHTML}
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
      ${reactionsBadgeHTML}
    `;

    const reactionTriggerBtn = bubble.querySelector('.wa-reaction-trigger-btn');
    const reactionBar = bubble.querySelector('.wa-reaction-bar');

    if (reactionTriggerBtn && reactionBar) {
      reactionTriggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.wa-reaction-bar.show').forEach(b => {
          if (b !== reactionBar) b.classList.remove('show');
        });
        document.querySelectorAll('.wa-bubble-menu-dropdown.show').forEach(m => m.classList.remove('show'));
        reactionBar.classList.toggle('show');
      });

      reactionBar.querySelectorAll('.wa-reaction-emoji-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const emoji = btn.getAttribute('data-emoji');
          alternarReaccionMensaje(msg.id, emoji);
          reactionBar.classList.remove('show');
        });
      });
    }

    // Permitir alternar al hacer clic en las píldoras de reacción
    bubble.querySelectorAll('.wa-reaction-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const emoji = pill.getAttribute('data-emoji');
        alternarReaccionMensaje(msg.id, emoji);
      });
    });

    const menuBtn = bubble.querySelector('.wa-bubble-menu-trigger');
    const menuDropdown = bubble.querySelector('.wa-bubble-menu-dropdown');
    const editBtn = bubble.querySelector('[data-action="edit"]');
    const deleteBtn = bubble.querySelector('[data-action="delete"]');
    const copyBtn = bubble.querySelector('[data-action="copy"]');

    const ageMs = Date.now() - (msg.timestamp || 0);
    const isWithin5Min = ageMs <= FIVE_MINUTES_MS;

    if (isMine && isWithin5Min && !msg.deletedForEveryone && msg.text) {
      editBtn.style.display = 'flex';
    }

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.wa-reaction-bar.show').forEach(b => b.classList.remove('show'));
      document.querySelectorAll('.wa-bubble-menu-dropdown.show').forEach(m => {
        if (m !== menuDropdown) m.classList.remove('show');
      });
      menuDropdown.classList.toggle('show');
    });

    copyBtn.addEventListener('click', () => {
      menuDropdown.classList.remove('show');
      if (msg.text) {
        navigator.clipboard.writeText(msg.text);
      }
    });

    editBtn.addEventListener('click', () => {
      menuDropdown.classList.remove('show');
      abrirModalEditar(msg);
    });

    deleteBtn.addEventListener('click', () => {
      menuDropdown.classList.remove('show');
      abrirModalEliminar(msg);
    });

    const imgWrap = bubble.querySelector('.wa-bubble-image-wrap');
    if (imgWrap) {
      imgWrap.addEventListener('click', () => {
        abrirLightbox(imgWrap.getAttribute('data-img-url'));
      });
    }

    row.appendChild(bubble);
    messagesArea.appendChild(row);
  });

  messagesArea.scrollTop = messagesArea.scrollHeight;
}

// 10. Enviar un Mensaje
async function enviarMensaje() {
  const inputEl = document.getElementById('chat-input-text');
  const text = inputEl ? inputEl.value.trim() : '';

  if (!text && !pendingImageBase64) return;
  if (!activeChatId) return;

  const now = Date.now();
  const userNameSaved = localStorage.getItem('user_name') || localStorage.getItem('profile_name');
  const resolvedDisplayName = currentUser.displayName || userNameSaved || currentUser.email?.split('@')[0] || 'Hermano Cantor';

  const newMsg = {
    senderId: currentUser.uid,
    senderEmail: currentUser.email,
    senderName: resolvedDisplayName,
    senderPhoto: currentUser.photoURL || '../img/christ.png',
    isAdmin: isAdmin,
    text: text,
    imageUrl: pendingImageBase64 || null,
    timestamp: now,
    edited: false,
    editedAt: null,
    deletedForEveryone: false,
    hiddenFor: [],
    reactions: {}
  };

  if (inputEl) inputEl.value = '';
  removerImagenAdjunta();

  try {
    await addDoc(collection(db, 'support_chats', activeChatId, 'messages'), newMsg);

    const chatDocRef = doc(db, 'support_chats', activeChatId);
    const chatDocSnap = await getDoc(chatDocRef);
    const prevData = chatDocSnap.exists() ? chatDocSnap.data() : {};

    const updatedChatHeader = {
      chatId: activeChatId,
      userId: isAdmin ? (activeChatUser.id || activeChatId) : currentUser.uid,
      userEmail: isAdmin ? (activeChatUser.email || prevData.userEmail || '') : currentUser.email,
      userName: isAdmin ? (activeChatUser.displayName || prevData.userName || 'Hermano Cantor') : resolvedDisplayName,
      userPhoto: isAdmin ? (activeChatUser.photoURL || prevData.userPhoto || '../img/christ.png') : (currentUser.photoURL || '../img/christ.png'),
      lastMessage: text || (pendingImageBase64 ? '📷 Foto' : 'Mensaje'),
      lastTimestamp: now,
      lastSenderEmail: currentUser.email,
      unreadAdmin: isAdmin ? 0 : (prevData.unreadAdmin || 0) + 1,
      unreadUser: isAdmin ? (prevData.unreadUser || 0) + 1 : 0
    };

    await setDoc(chatDocRef, updatedChatHeader, { merge: true });
  } catch (err) {
    console.error("Error enviando mensaje:", err);
    alert("No se pudo enviar el mensaje. Verifica tu conexión a internet.");
  }
}

// 11. Modal: Eliminar Mensaje
function abrirModalEliminar(msg) {
  targetMessageData = msg;
  const overlay = document.getElementById('modal-delete-overlay');
  const btnEveryone = document.getElementById('btn-delete-for-everyone');
  const descEl = document.getElementById('modal-delete-desc');

  const isMine = (msg.senderEmail === currentUser.email) || (msg.senderId === currentUser.uid);
  const ageMs = Date.now() - (msg.timestamp || 0);
  const isWithin5Min = ageMs <= FIVE_MINUTES_MS;

  if (isMine && isWithin5Min && !msg.deletedForEveryone) {
    btnEveryone.style.display = 'block';
    descEl.textContent = 'Este mensaje fue enviado hace menos de 5 minutos. Puedes eliminarlo para ambos o solo para ti.';
  } else {
    btnEveryone.style.display = 'none';
    descEl.textContent = 'Ha transcurrido el tiempo límite de 5 minutos para eliminar para todos. Solo puedes eliminarlo de tu vista (Eliminar para mí).';
  }

  overlay.classList.add('show');
}

async function ejecutarEliminarParaTodos() {
  if (!targetMessageData || !activeChatId) return;
  try {
    const msgRef = doc(db, 'support_chats', activeChatId, 'messages', targetMessageData.id);
    await updateDoc(msgRef, {
      deletedForEveryone: true,
      text: '',
      imageUrl: null,
      deletedAt: Date.now()
    });
    cerrarModales();
  } catch (err) {
    console.error("Error al eliminar para todos:", err);
  }
}

async function ejecutarEliminarParaMi() {
  if (!targetMessageData || !activeChatId) return;
  try {
    const msgRef = doc(db, 'support_chats', activeChatId, 'messages', targetMessageData.id);
    const hiddenFor = targetMessageData.hiddenFor || [];
    if (!hiddenFor.includes(currentUser.uid)) {
      hiddenFor.push(currentUser.uid);
    }
    await updateDoc(msgRef, { hiddenFor: hiddenFor });
    cerrarModales();
  } catch (err) {
    console.error("Error al eliminar para mí:", err);
  }
}

// 12. Modal: Editar Mensaje
function abrirModalEditar(msg) {
  targetMessageData = msg;
  const overlay = document.getElementById('modal-edit-overlay');
  const editTextarea = document.getElementById('modal-edit-text');
  if (editTextarea) editTextarea.value = msg.text || '';
  overlay.classList.add('show');
}

async function guardarEdicionMensaje() {
  if (!targetMessageData || !activeChatId) return;
  const editTextarea = document.getElementById('modal-edit-text');
  const newText = editTextarea ? editTextarea.value.trim() : '';
  if (!newText) return;

  const ageMs = Date.now() - (targetMessageData.timestamp || 0);
  if (ageMs > FIVE_MINUTES_MS) {
    alert("Ya han pasado más de 5 minutos. Este mensaje es ahora permanente y no se puede editar.");
    cerrarModales();
    return;
  }

  try {
    const msgRef = doc(db, 'support_chats', activeChatId, 'messages', targetMessageData.id);
    await updateDoc(msgRef, {
      text: newText,
      edited: true,
      editedAt: Date.now()
    });
    cerrarModales();
  } catch (err) {
    console.error("Error al guardar edición:", err);
  }
}

// 12.1 Alternar / Añadir Reacción con Emoji a un Mensaje (Estilo WhatsApp)
async function alternarReaccionMensaje(messageId, emoji) {
  if (!activeChatId || !messageId || !currentUser) return;
  try {
    const msgRef = doc(db, 'support_chats', activeChatId, 'messages', messageId);
    const msgSnap = await getDoc(msgRef);
    if (!msgSnap.exists()) return;

    const data = msgSnap.data();
    const reactions = data.reactions || {};
    const uid = currentUser.uid;

    if (reactions[uid] === emoji) {
      // Si ya tenía la misma reacción, quitarla al pulsar de nuevo
      delete reactions[uid];
    } else {
      // Si no la tenía o tenía otra diferente, actualizarla
      reactions[uid] = emoji;
    }

    await updateDoc(msgRef, { reactions: reactions });
  } catch (err) {
    console.error("Error al actualizar reacción:", err);
  }
}

// 13. Adjuntar Imagen (Límite 1MB y Compresión con Canvas)
const MAX_IMAGE_SIZE_BYTES = 1 * 1024 * 1024; // 1MB en bytes

function procesarImagenAdjunta(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert("Por favor selecciona exclusivamente un archivo de imagen válido.");
    return;
  }

  // Validación estricta: El archivo debe ser menor a 1MB
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    const tamanoMB = (file.size / (1024 * 1024)).toFixed(2);
    alert(`La imagen seleccionada pesa ${tamanoMB} MB. El tamaño máximo permitido para enviar fotos en el chat es de 1 MB.`);
    removerImagenAdjunta();
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 1200;
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // Calidad balanceada para asegurar que el base64 sea ligero y nítido
      let quality = 0.8;
      let dataUrl = canvas.toDataURL('image/jpeg', quality);

      // Si el tamaño del base64 superase 1MB (raro en jpeg 1200px pero seguro por comprobación), reducir calidad
      while (dataUrl.length > MAX_IMAGE_SIZE_BYTES && quality > 0.3) {
        quality -= 0.15;
        dataUrl = canvas.toDataURL('image/jpeg', quality);
      }

      if (dataUrl.length > MAX_IMAGE_SIZE_BYTES) {
        alert("La imagen excede el límite permitido de 1 MB después del procesamiento. Por favor elige una imagen más liviana.");
        removerImagenAdjunta();
        return;
      }

      pendingImageBase64 = dataUrl;

      const previewBar = document.getElementById('img-preview-bar');
      const thumb = document.getElementById('img-preview-thumb');
      const nameEl = document.getElementById('img-preview-name');

      if (thumb) thumb.src = pendingImageBase64;
      if (nameEl) nameEl.textContent = `${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
      if (previewBar) previewBar.style.display = 'flex';
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function removerImagenAdjunta() {
  pendingImageBase64 = null;
  const previewBar = document.getElementById('img-preview-bar');
  const fileInput = document.getElementById('file-input-image');
  if (previewBar) previewBar.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

// 14. Emojis
function renderEmojis(category) {
  const grid = document.getElementById('wa-emoji-grid');
  if (!grid) return;
  const list = EMOJIS[category] || EMOJIS.popular;
  grid.innerHTML = '';
  list.forEach(emoji => {
    const span = document.createElement('span');
    span.className = 'wa-emoji-item';
    span.textContent = emoji;
    span.addEventListener('click', () => {
      const inputEl = document.getElementById('chat-input-text');
      if (inputEl) {
        inputEl.value += emoji;
        inputEl.focus();
      }
    });
    grid.appendChild(span);
  });
}

// 15. Lightbox
function abrirLightbox(url) {
  const lightbox = document.getElementById('wa-lightbox');
  const imgEl = document.getElementById('lightbox-img');
  if (lightbox && imgEl) {
    imgEl.src = url;
    lightbox.classList.add('show');
  }
}

function cerrarModales() {
  document.querySelectorAll('.wa-modal-overlay, .wa-lightbox-overlay').forEach(el => {
    el.classList.remove('show');
  });
  targetMessageData = null;
}

function mostrarModalLogin() {
  const overlay = document.getElementById('modal-login-overlay');
  if (!overlay) return;
  overlay.classList.add('show');

  const btnLogin = document.getElementById('btn-login-modal');
  if (btnLogin && !btnLogin.dataset.bound) {
    btnLogin.dataset.bound = 'true';
    btnLogin.addEventListener('click', async () => {
      try {
        await loginConGoogle();
        overlay.classList.remove('show');
        location.reload();
      } catch (e) {
        alert("Error al iniciar sesión: " + e.message);
      }
    });
  }
}

// 16. Configuración de Eventos del DOM
function setupDomEvents() {
  document.addEventListener('click', () => {
    document.querySelectorAll('.wa-bubble-menu-dropdown.show').forEach(m => m.classList.remove('show'));
    document.querySelectorAll('.wa-reaction-bar.show').forEach(b => b.classList.remove('show'));
    const emojiPanel = document.getElementById('wa-emoji-panel');
    if (emojiPanel && emojiPanel.classList.contains('show')) {
      emojiPanel.classList.remove('show');
    }
  });

  const inputEl = document.getElementById('chat-input-text');
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        enviarMensaje();
      }
    });
  }

  document.getElementById('btn-send-message')?.addEventListener('click', enviarMensaje);

  const fileInput = document.getElementById('file-input-image');
  document.getElementById('btn-attach-clip')?.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput?.click();
  });

  fileInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      procesarImagenAdjunta(e.target.files[0]);
    }
  });

  document.getElementById('btn-remove-img')?.addEventListener('click', removerImagenAdjunta);

  const emojiPanel = document.getElementById('wa-emoji-panel');
  document.getElementById('btn-toggle-emoji')?.addEventListener('click', (e) => {
    e.stopPropagation();
    emojiPanel?.classList.toggle('show');
  });

  document.querySelectorAll('.wa-emoji-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.wa-emoji-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEmojis(btn.getAttribute('data-category'));
    });
  });

  document.getElementById('btn-back-sidebar')?.addEventListener('click', () => {
    document.getElementById('wa-app-root').classList.remove('chat-open');
  });

  const searchInput = document.getElementById('input-search-users');
  const clearBtn = document.getElementById('btn-clear-search');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
    renderAdminChatList();
  });

  clearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchQuery = '';
    clearBtn.style.display = 'none';
    renderAdminChatList();
  });

  document.querySelectorAll('.wa-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.wa-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.getAttribute('data-filter');
      renderAdminChatList();
    });
  });

  document.getElementById('btn-refresh-chats')?.addEventListener('click', () => {
    if (canViewAllChats) listenToAllChats();
    else if (activeChatId) escucharMensajesDeChat(activeChatId);
  });

  document.getElementById('btn-delete-for-everyone')?.addEventListener('click', ejecutarEliminarParaTodos);
  document.getElementById('btn-delete-for-me')?.addEventListener('click', ejecutarEliminarParaMi);
  document.getElementById('btn-cancel-delete')?.addEventListener('click', cerrarModales);
  document.getElementById('btn-cancel-edit')?.addEventListener('click', cerrarModales);
  document.getElementById('btn-save-edit')?.addEventListener('click', guardarEdicionMensaje);
  document.getElementById('btn-close-lightbox')?.addEventListener('click', cerrarModales);
  document.getElementById('wa-lightbox')?.addEventListener('click', cerrarModales);
}

function formatearHora(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  return d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function formatearFechaCabecera(d) {
  const hoy = new Date();
  if (d.toDateString() === hoy.toDateString()) return 'Hoy';
  const ayer = new Date();
  ayer.setDate(ayer.getDate() - 1);
  if (d.toDateString() === ayer.toDateString()) return 'Ayer';
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}