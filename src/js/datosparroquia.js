// src/js/datosparroquia.js - Lógica para la gestión y registro de parroquias (Resucitó v2)
import { auth, db, collection, getDocs, doc, setDoc, updateDoc, deleteDoc, serverTimestamp } from '../firebase.js';
import { onAuthStateChanged, getCurrentUser } from '../auth.js';

let catalogoPaisesGlobal = [];
let usuariosRegistradosCache = [];
let listaParroquiasCache = [];
let usuarioActual = null;
let retornoUrl = '';

// Correo del Administrador Principal con acceso absoluto
const SUPER_ADMIN_EMAIL = 'dbaezh78@gmail.com';

// Verificar si un usuario tiene permiso para ver y copiar el código de 16 caracteres
export function puedeVerCodigoParroquia(parroquia, user) {
  if (!parroquia || !user) return false;
  const userEmail = (user.email || '').toLowerCase().trim();
  if (userEmail === SUPER_ADMIN_EMAIL) return true;

  // Si tiene cantor encargado asignado y coincide con el usuario
  const encargadoEmail = (parroquia.cantorEncargadoEmail || '').toLowerCase().trim();
  if (encargadoEmail && encargadoEmail === userEmail) {
    return true;
  }

  // Verificar en lista de miembros si tiene rol encargado o admin
  if (Array.isArray(parroquia.miembros)) {
    const miembro = parroquia.miembros.find(m => {
      const mEmail = (m.email || '').toLowerCase().trim();
      const mUid = m.uid || '';
      return (mEmail === userEmail || (user.uid && mUid === user.uid));
    });
    if (miembro && (miembro.rol === 'encargado' || miembro.rol === 'admin')) {
      return true;
    }
  }

  return false;
}

// Normalizar texto para búsquedas sin acentos ni mayúsculas
const normalizarTexto = (texto) => {
  if (!texto) return '';
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
};

// Generador de código alfanumérico de 16 caracteres (XXXX-XXXX-XXXX-XXXX)
function generarCodigo16() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Evita caracteres ambiguos como O, 0, I, 1
  let res = '';
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) res += '-';
    res += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return res;
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  retornoUrl = urlParams.get('retorno') || '';
  const paisParam = urlParams.get('pais') || '';
  const parroquiaParam = urlParams.get('parroquia') || '';

  configurarNavegacionRetorno(retornoUrl);
  configurarEventosUI();

  // Escuchar estado de autenticación
  onAuthStateChanged(async (user) => {
    usuarioActual = user;
    actualizarHeaderUsuario(user);
    await cargarUsuariosRegistrados();
    renderizarListadoParroquias();
    // Si la lista de parroquias aún no se ha cargado o estaba vacía por permisos previos
    if (listaParroquiasCache.length === 0) {
      await cargarTodasLasParroquias();
    }
  });

  // Cargar catálogos y datos
  await cargarCatalogoPaises(paisParam);
  if (parroquiaParam) {
    const inputNombre = document.getElementById('parroquia-nombre-input');
    if (inputNombre) inputNombre.value = parroquiaParam;
  }

  await cargarTodasLasParroquias();
});

// Configurar retorno si viene desde perfil u otra página
function configurarNavegacionRetorno(retorno) {
  const btnVolver = document.getElementById('btn-volver-atras');
  const bannerRetorno = document.getElementById('banner-retorno-wrapper');
  const linkBanner = document.getElementById('link-banner-retorno');

  if (retorno) {
    if (bannerRetorno) bannerRetorno.style.display = 'block';
    if (linkBanner) {
      linkBanner.href = retorno;
      linkBanner.innerHTML = `<span class="material-symbols-outlined" style="font-size: 18px;">arrow_back</span> Volver a ${retorno.includes('perfil') ? 'Mi Perfil' : 'la página anterior'}`;
    }
    if (btnVolver) {
      btnVolver.onclick = (e) => {
        e.preventDefault();
        window.location.href = retorno;
      };
    }
  } else {
    if (btnVolver) {
      btnVolver.onclick = (e) => {
        e.preventDefault();
        if (window.history.length > 1) {
          window.history.back();
        } else {
          window.location.href = 'index.html';
        }
      };
    }
  }
}

// Actualizar indicador de usuario en header
function actualizarHeaderUsuario(user) {
  const headerUser = document.getElementById('usuario-sesion-parroquia');
  if (!headerUser) return;

  if (user) {
    const foto = user.photoURL || 'img/christ.png';
    const nombre = user.displayName || user.email?.split('@')[0] || 'Usuario';
    headerUser.innerHTML = `
      <img src="${foto}" alt="${nombre}" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover; border: 1.5px solid var(--accent-color, #d01212);">
      <span style="font-weight: 600; color: var(--text-color, #111827);">${nombre}</span>
    `;
  } else {
    headerUser.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 20px;">account_circle</span>
      <span style="font-size: 0.82rem;">Sin sesión activa</span>
    `;
  }
}

// Configuración de eventos de la interfaz
function configurarEventosUI() {
  // Buscador de países en vivo
  const inputFiltroPais = document.getElementById('filtro-pais-input');
  if (inputFiltroPais) {
    inputFiltroPais.addEventListener('input', (e) => {
      filtrarOpcionesPaises(e.target.value);
    });
  }

  // Submit del formulario
  const form = document.getElementById('form-registro-datosparroquia');
  if (form) {
    form.addEventListener('submit', guardarParroquiaDesdeFormulario);
  }

  // Botón Limpiar
  const btnLimpiar = document.getElementById('btn-limpiar-formulario');
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', limpiarFormularioParroquia);
  }

  // Botón Cancelar Edición
  const btnCancelarEdicion = document.getElementById('btn-cancelar-edicion');
  if (btnCancelarEdicion) {
    btnCancelarEdicion.addEventListener('click', limpiarFormularioParroquia);
  }

  // Botón Refrescar Lista
  const btnRefrescar = document.getElementById('btn-refrescar-lista');
  if (btnRefrescar) {
    btnRefrescar.addEventListener('click', async () => {
      btnRefrescar.style.pointerEvents = 'none';
      await cargarTodasLasParroquias();
      btnRefrescar.style.pointerEvents = 'auto';
    });
  }

  // Buscador de parroquias en vivo
  const inputBuscador = document.getElementById('buscador-parroquias-input');
  if (inputBuscador) {
    inputBuscador.addEventListener('input', (e) => {
      renderizarListadoParroquias(e.target.value);
    });
  }

  // Descargar plantilla CSV
  const btnDescargarCsv = document.getElementById('btn-descargar-plantilla-csv');
  if (btnDescargarCsv) {
    btnDescargarCsv.addEventListener('click', descargarPlantillaCsvParroquias);
  }

  // Trigger para importar CSV
  const btnImportarCsv = document.getElementById('btn-importar-csv-trigger');
  const inputCsv = document.getElementById('input-archivo-csv-parroquias');
  if (btnImportarCsv && inputCsv) {
    btnImportarCsv.addEventListener('click', () => {
      inputCsv.value = '';
      inputCsv.click();
    });

    inputCsv.addEventListener('change', procesarArchivoCsvParroquias);
  }
}

// Cargar catálogo de países desde data/paises.json
// República Dominicana de primero, luego alfabético
async function cargarCatalogoPaises(paisPreseleccionado = '') {
  const selectPais = document.getElementById('parroquia-pais-select');
  if (!selectPais) return;

  try {
    const res = await fetch('./data/paises.json');
    if (!res.ok) throw new Error("No se pudo cargar data/paises.json");
    const data = await res.json();
    const nombres = data.map(p => (p.nombre || p)).filter(Boolean);

    // Separar República Dominicana
    const idxRD = nombres.findIndex(n => normalizarTexto(n).includes('dominicana'));
    let nombreRD = "República Dominicana";
    if (idxRD !== -1) {
      nombreRD = nombres.splice(idxRD, 1)[0];
    }

    // Ordenar alfabéticamente el resto
    nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

    catalogoPaisesGlobal = [nombreRD, ...nombres];
    renderizarOpcionesPaises(catalogoPaisesGlobal, paisPreseleccionado || nombreRD);
  } catch (err) {
    console.error("Error al cargar lista de países:", err);
    catalogoPaisesGlobal = ["República Dominicana", "España", "Estados Unidos", "Colombia", "México", "Argentina", "Chile", "Perú", "Venezuela"];
    renderizarOpcionesPaises(catalogoPaisesGlobal, paisPreseleccionado || "República Dominicana");
  }
}

// Renderizar opciones de países en el <select>
function renderizarOpcionesPaises(paises, valorSeleccionado = '') {
  const select = document.getElementById('parroquia-pais-select');
  if (!select) return;

  select.innerHTML = '<option value="">-- Selecciona el País --</option>' +
    paises.map(p => {
      const isRD = normalizarTexto(p).includes('dominicana');
      const prefix = isRD ? '🇩🇴 ' : '';
      const isSelected = valorSeleccionado ? (valorSeleccionado === p) : isRD;
      return `<option value="${p}" ${isSelected ? 'selected' : ''}>${prefix}${p}</option>`;
    }).join('');
}

// Filtrar opciones de países en base al input de búsqueda
function filtrarOpcionesPaises(query) {
  const select = document.getElementById('parroquia-pais-select');
  if (!select || catalogoPaisesGlobal.length === 0) return;

  const qNorm = normalizarTexto(query);
  const valorPrevio = select.value;
  const filtrados = catalogoPaisesGlobal.filter(p => normalizarTexto(p).includes(qNorm));
  renderizarOpcionesPaises(filtrados.length > 0 ? filtrados : catalogoPaisesGlobal, valorPrevio);
}

// Cargar usuarios iniciados / registrados desde la colección registered_users
async function cargarUsuariosRegistrados() {
  const select = document.getElementById('parroquia-cantor-encargado-select');
  const infoText = document.getElementById('info-cantor-encargado');
  if (!select) return;

  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  const esSuperAdmin = (user?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

  if (!esSuperAdmin) {
    select.disabled = true;
    select.style.opacity = '0.75';
    select.style.cursor = 'not-allowed';
    if (infoText) {
      infoText.innerHTML = `
        <button type="button" class="btn-solicitar-resp-chip" onclick="window.mostrarMensajeResponsabilidad()" style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; border-radius: 20px; padding: 4px 12px; font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; margin-top: 4px;">
          <span class="material-symbols-outlined" style="font-size: 14px; color: #d97706;">lock</span>
          <span>Solicite la responsabilidad</span>
        </button>
      `;
      infoText.style.color = '#b45309';
    }
  } else {
    select.disabled = false;
    select.style.opacity = '1';
    select.style.cursor = 'default';
    if (infoText) {
      infoText.innerHTML = `👑 <b>Modo Administrador:</b> Puedes seleccionar y asignar al Cantor Encargado para esta parroquia.`;
      infoText.style.color = '#15803d';
    }
  }

  try {
    const snap = await getDocs(collection(db, "registered_users"));
    usuariosRegistradosCache = snap.docs.map(d => d.data()).filter(u => u && u.email && !u.deleted);

    const valorPrevio = select.value;
    select.innerHTML = '<option value="">-- Sin Cantor Encargado (Opcional) --</option>' +
      usuariosRegistradosCache.map(u => {
        const nombreMostrar = u.displayName ? `${u.displayName} (${u.email})` : u.email;
        const isSel = valorPrevio && valorPrevio.toLowerCase() === u.email.toLowerCase();
        return `<option value="${u.email}" ${isSel ? 'selected' : ''}>${nombreMostrar}</option>`;
      }).join('');
  } catch (err) {
    console.warn("No se pudieron cargar usuarios de registered_users:", err);
  }
}

// Cargar listado completo de parroquias desde Firestore con respaldo local
async function cargarTodasLasParroquias() {
  const contenedor = document.getElementById('contenedor-listado-parroquias');
  if (!contenedor) return;

  // 1. Intentar renderizar inmediatamente desde cache local o data/parroquias.json
  if (listaParroquiasCache.length === 0) {
    try {
      const localData = localStorage.getItem('resucito_parroquias_cache');
      if (localData) {
        listaParroquiasCache = JSON.parse(localData);
        if (listaParroquiasCache.length > 0) {
          renderizarListadoParroquias();
        }
      }
    } catch(e) {}

    if (listaParroquiasCache.length === 0) {
      try {
        const resp = await fetch('./data/parroquias.json');
        if (resp.ok) {
          listaParroquiasCache = await resp.json();
          renderizarListadoParroquias();
        }
      } catch(e) {}
    }
  }

  // 2. Sincronizar con Firestore en segundo plano con límite de 4 segundos
  try {
    const fetchPromise = getDocs(collection(db, "parroquias"));
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('timeout')), 4000)
    );
    const snap = await Promise.race([fetchPromise, timeoutPromise]);
    
    const remotas = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    if (remotas.length > 0) {
      // Unir evitando duplicados por nombre y sector
      const mapa = new Map();
      listaParroquiasCache.forEach(p => {
        const key = `${normalizarTexto(p.nombre)}|${normalizarTexto(p.sector || '')}`;
        mapa.set(key, p);
      });
      remotas.forEach(p => {
        const key = `${normalizarTexto(p.nombre)}|${normalizarTexto(p.sector || '')}`;
        mapa.set(key, p);
      });
      listaParroquiasCache = Array.from(mapa.values());
    }

    // Ordenar alfabéticamente por nombre
    listaParroquiasCache.sort((a, b) => (a.nombre || '').localeCompare(b.nombre || '', 'es', { sensitivity: 'base' }));

    try {
      localStorage.setItem('resucito_parroquias_cache', JSON.stringify(listaParroquiasCache));
    } catch(e) {}

    renderizarListadoParroquias();
  } catch (err) {
    if (err.message !== 'timeout') {
      console.warn("Advertencia al sincronizar parroquias con Firestore:", err);
    }
    // Si la cache local ya tiene parroquias, no mostrar pantalla de error fatal
    if (listaParroquiasCache.length > 0) {
      renderizarListadoParroquias();
      return;
    }

    if (err?.code === 'permission-denied' || err?.message?.includes('permissions')) {
      contenedor.innerHTML = `
        <div style="text-align: center; color: #b91c1c; padding: 20px; background: rgba(220, 38, 38, 0.05); border-radius: 12px; border: 1px solid rgba(220, 38, 38, 0.2);">
          <span class="material-symbols-outlined" style="font-size: 32px; color: #dc2626;">lock</span>
          <h4 style="margin: 8px 0 4px;">Permisos de Firestore Requeridos</h4>
          <p style="font-size: 0.85rem; margin: 0; color: var(--text-muted, #666);">
            La colección <b>parroquias</b> requiere permisos en Firebase Cloud. Actualiza y publica las reglas de Firestore en la consola de Firebase.
          </p>
        </div>
      `;
    } else {
      contenedor.innerHTML = `<p style="text-align: center; color: #dc2626; padding: 20px;">Error al cargar las parroquias: ${err.message}</p>`;
    }
  }
}

// Modal Ambulante: Solicite la Responsabilidad
window.mostrarMensajeResponsabilidad = (parrIdOrNombre = '') => {
  const modal = document.getElementById('modal-ambulante-responsabilidad');
  const txtParroquia = document.getElementById('txt-ambulante-parroquia-nombre');
  let nombre = parrIdOrNombre;
  const encontrada = listaParroquiasCache.find(p => p.id === parrIdOrNombre);
  if (encontrada) nombre = encontrada.nombre || '';
  if (txtParroquia) {
    if (nombre) {
      txtParroquia.textContent = nombre;
      txtParroquia.style.display = 'block';
    } else {
      txtParroquia.style.display = 'none';
    }
  }
  if (modal) {
    modal.style.display = 'flex';
  } else {
    mostrarNotif(
      "Solicite la Responsabilidad",
      "🔒 Solicite al Administrador Principal la asignación como responsable de Canto de su parroquia. Si tu parroquia no tiene encargado, comunícate por el chat para ser agregado. https://resucito.do/chat.html",
      "lock"
    );
  }
};

// Renderizar tarjetas de parroquias con buscador
function renderizarListadoParroquias(filtro = '') {
  const contenedor = document.getElementById('contenedor-listado-parroquias');
  const badgeTotal = document.getElementById('total-parroquias-badge');
  if (!contenedor) return;

  if (badgeTotal) badgeTotal.textContent = listaParroquiasCache.length;

  if (listaParroquiasCache.length === 0) {
    contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted, #6b7280); padding: 30px;">Aún no hay parroquias registradas. ¡Sé el primero en registrar una!</p>`;
    return;
  }

  const fNorm = normalizarTexto(filtro);
  const filtradas = listaParroquiasCache.filter(p => {
    if (!fNorm) return true;
    const nom = normalizarTexto(p.nombre || '');
    const pai = normalizarTexto(p.pais || '');
    const pro = normalizarTexto(p.provincia || '');
    const sec = normalizarTexto(p.sector || '');
    const dir = normalizarTexto(p.direccion || '');
    const par = normalizarTexto(p.parroco || '');
    const can = normalizarTexto(p.cantorEncargado || p.cantorEncargadoEmail || '');
    return nom.includes(fNorm) || pai.includes(fNorm) || pro.includes(fNorm) || sec.includes(fNorm) || dir.includes(fNorm) || par.includes(fNorm) || can.includes(fNorm);
  });

  if (filtradas.length === 0) {
    contenedor.innerHTML = `<p style="text-align: center; color: var(--text-muted, #6b7280); padding: 30px;">No se encontraron parroquias que coincidan con la búsqueda.</p>`;
    return;
  }

  const user = usuarioActual || getCurrentUser() || auth.currentUser;

  contenedor.innerHTML = filtradas.map(p => {
    const codigo16 = p.codigoAcceso || 'SIN-CÓDIGO';
    const pais = p.pais || 'Sin país';
    const provincia = p.provincia || '';
    const sector = p.sector || 'Sin sector';
    const cantor = p.cantorEncargado ? `${p.cantorEncargado} ${p.cantorEncargadoEmail ? `(${p.cantorEncargadoEmail})` : ''}` : (p.cantorEncargadoEmail || 'Sin encargado asignado');
    const puedeVer = puedeVerCodigoParroquia(p, user);

    let bloqueCodigoHtml = '';
    if (puedeVer) {
      bloqueCodigoHtml = `
        <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span class="badge-codigo-parroquia" title="Haz clic para copiar código de 16 caracteres" onclick="window.copiarCodigoParroquia('${codigo16}', '${p.id}')">
            🔑 ${codigo16}
            <span class="material-symbols-outlined" style="font-size: 14px;">content_copy</span>
          </span>
          <span style="font-size: 0.72rem; color: #166534; background: #dcfce7; border: 1px solid #bbf7d0; padding: 2px 8px; border-radius: 6px; font-weight: 600;">
            Acceso Encargado
          </span>
        </div>
      `;
    } else {
      bloqueCodigoHtml = `
        <div style="margin-top: 8px;">
          <button type="button" class="btn-solicitar-resp-chip" onclick="window.mostrarMensajeResponsabilidad('${p.id}')" style="background: #fffbeb; color: #b45309; border: 1px solid #fde68a; border-radius: 20px; padding: 4px 12px; font-size: 0.76rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); transition: all 0.2s ease;">
            <span class="material-symbols-outlined" style="font-size: 14px; color: #d97706;">lock</span>
            <span>Solicite la responsabilidad</span>
          </button>
        </div>
      `;
    }

    return `
      <div class="tarjeta-parroquia-item" id="card-parr-${p.id}">
        <div class="tarjeta-parroquia-info" style="flex: 1 1 320px;">
          <h3>
            <span class="material-symbols-outlined" style="font-size: 20px; color: var(--accent-color, #d01212);">church</span>
            ${p.nombre || 'Parroquia sin nombre'}
          </h3>
          <div class="tarjeta-parroquia-detalles">
            <span class="badge-parroquia-pais">🌍 ${pais}</span>
            ${provincia ? `<span class="badge-parroquia-provincia">🏛️ ${provincia}</span>` : ''}
            <span class="badge-parroquia-sector">📍 ${sector}</span>
            ${p.direccion ? `<span>• 🏢 ${p.direccion}</span>` : ''}
            ${p.parroco ? `<span>• ✝️ Párroco: <b>${p.parroco}</b></span>` : ''}
            <span>• 🎤 Cantor: ${cantor}</span>
          </div>
          ${bloqueCodigoHtml}
        </div>

        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          ${retornoUrl ? `
            <button type="button" class="btn-csv primario" style="padding: 6px 12px; font-size: 0.8rem;" title="Seleccionar y usar en mi perfil" onclick="window.usarParroquiaEnPerfil('${p.nombre}', '${p.pais}')">
              <span class="material-symbols-outlined" style="font-size: 16px;">check_circle</span> Usar en Perfil
            </button>
          ` : ''}
          <button type="button" class="btn-csv" style="padding: 6px 10px;" title="Editar parroquia" onclick="window.cargarParroquiaParaEditar('${p.id}')">
            <span class="material-symbols-outlined" style="font-size: 16px;">edit</span>
          </button>
          <button type="button" class="btn-csv" style="padding: 6px 10px; color: #dc2626;" title="Eliminar parroquia" onclick="window.eliminarParroquia('${p.id}', '${p.nombre}')">
            <span class="material-symbols-outlined" style="font-size: 16px;">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Guardar parroquia desde el formulario (Creación o Edición)
async function guardarParroquiaDesdeFormulario(e) {
  if (e && e.preventDefault) e.preventDefault();

  const idEditando = document.getElementById('parroquia-id-editando')?.value || '';
  const selectPais = document.getElementById('parroquia-pais-select');
  const inputProvincia = document.getElementById('parroquia-provincia-input');
  const inputNombre = document.getElementById('parroquia-nombre-input');
  const inputSector = document.getElementById('parroquia-sector-input');
  const inputDir = document.getElementById('parroquia-direccion-input');
  const inputParroco = document.getElementById('parroquia-parroco-input');
  const selectCantor = document.getElementById('parroquia-cantor-encargado-select');

  const pais = selectPais ? selectPais.value.trim() : '';
  const provincia = inputProvincia ? inputProvincia.value.trim() : '';
  const nombre = inputNombre ? inputNombre.value.trim() : '';
  const sector = inputSector ? inputSector.value.trim() : '';
  const direccion = inputDir ? inputDir.value.trim() : '';
  const parroco = inputParroco ? inputParroco.value.trim() : '';
  const cantorEmail = selectCantor ? selectCantor.value.trim() : '';

  // Validaciones obligatorias
  if (!pais) {
    mostrarNotif("País Requerido", "Por favor selecciona el país de la parroquia.", "public");
    selectPais?.focus();
    return;
  }

  if (!provincia) {
    mostrarNotif("Provincia Requerida", "Por favor ingresa la provincia, estado o región de la parroquia.", "location_city");
    inputProvincia?.focus();
    return;
  }

  if (!nombre) {
    mostrarNotif("Nombre Requerido", "Por favor ingresa el nombre de la parroquia.", "church");
    inputNombre?.focus();
    return;
  }

  if (!sector) {
    mostrarNotif("Sector Requerido", "Por favor ingresa el Sector / Distrito / Barrio de la parroquia.", "location_on");
    inputSector?.focus();
    return;
  }

  // Validación de unicidad: No pueden haber dos parroquias con el mismo nombre y el mismo sector
  const yaExiste = listaParroquiasCache.some(p => {
    if (idEditando && p.id === idEditando) return false;
    const mismoNombre = normalizarTexto(p.nombre) === normalizarTexto(nombre);
    const mismoSector = normalizarTexto(p.sector) === normalizarTexto(sector);
    const mismoPais = (!p.pais || !pais) ? true : (normalizarTexto(p.pais) === normalizarTexto(pais));
    return mismoNombre && mismoSector && mismoPais;
  });

  if (yaExiste) {
    mostrarNotif(
      "Parroquia Ya Registrada",
      `No se puede guardar: Ya existe una parroquia con el nombre "${nombre}" en el sector "${sector}". Dos parroquias pueden tener el mismo nombre únicamente si pertenecen a sectores diferentes.`,
      "warning"
    );
    inputSector?.focus();
    return;
  }

  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  if (!user) {
    mostrarNotif("Sesión Requerida", "Debes iniciar sesión con tu cuenta de Google para guardar o modificar parroquias en el sistema.", "lock");
    return;
  }

  const esSuperAdmin = (user.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

  const docId = idEditando || ('parr_' + Date.now().toString(36));
  const parroquiaExistente = idEditando ? listaParroquiasCache.find(p => p.id === idEditando) : null;
  const codigo16 = parroquiaExistente?.codigoAcceso || generarCodigo16();

  // Solo el Super Admin puede asignar o modificar el cantor encargado
  let cantorEmailFinal = '';
  let cantorNombreFinal = '';

  if (esSuperAdmin) {
    cantorEmailFinal = cantorEmail;
    if (cantorEmailFinal) {
      const u = usuariosRegistradosCache.find(x => x.email?.toLowerCase().trim() === cantorEmailFinal.toLowerCase().trim());
      cantorNombreFinal = u ? (u.displayName || cantorEmailFinal.split('@')[0]) : cantorEmailFinal.split('@')[0];
    }
  } else {
    // Si no es super admin, preservar el cantor encargado si ya existía previamente
    cantorEmailFinal = parroquiaExistente?.cantorEncargadoEmail || '';
    cantorNombreFinal = parroquiaExistente?.cantorEncargado || '';
  }

  // Miembros
  let miembros = parroquiaExistente?.miembros || [];
  if (esSuperAdmin && cantorEmailFinal) {
    miembros = miembros.filter(m => m.email?.toLowerCase().trim() !== cantorEmailFinal.toLowerCase().trim());
    miembros.unshift({
      email: cantorEmailFinal,
      displayName: cantorNombreFinal,
      rol: 'encargado',
      fechaIngreso: new Date().toISOString()
    });
  }

  // Agregar al creador o usuario actual si no está
  if (user.email && !miembros.some(m => m.email?.toLowerCase().trim() === user.email.toLowerCase().trim())) {
    miembros.push({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0],
      rol: esSuperAdmin ? 'encargado' : 'miembro',
      fechaIngreso: new Date().toISOString()
    });
  }

  const docData = {
    id: docId,
    nombre: nombre,
    pais: pais,
    provincia: provincia,
    sector: sector,
    direccion: direccion,
    parroco: parroco,
    cantorEncargado: cantorNombreFinal,
    cantorEncargadoEmail: cantorEmailFinal,
    codigoAcceso: codigo16,
    actualizadoEn: new Date().toISOString(),
    miembros: miembros,
    solicitudesPendientes: parroquiaExistente?.solicitudesPendientes || []
  };

  if (!idEditando) {
    docData.creadorUid = user.uid;
    docData.creadorEmail = user.email || '';
    docData.creadoEn = new Date().toISOString();
  }

  try {
    const btnSubmit = document.getElementById('btn-guardar-parroquia-submit');
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span class="material-symbols-outlined">hourglass_top</span> Guardando...`;
    }

    await setDoc(doc(db, "parroquias", docId), docData, { merge: true });

    limpiarFormularioParroquia();
    await cargarTodasLasParroquias();

    const puedeVer = puedeVerCodigoParroquia(docData, user);
    const infoCodigo = puedeVer
      ? `Código de acceso (16 caracteres): <b>${codigo16}</b>.`
      : `El código de 16 caracteres solo puede ser visto por el Cantor Encargado y el Administrador. 🔒 Solicite al Administrador Principal la asignación como responsable de Canto de su parroquia. Si tu parroquia no tiene encargado, comunícate por el chat para ser agregado. https://resucito.do/chat.html`;

    if (retornoUrl) {
      mostrarNotif(
        "Parroquia Guardada",
        `La parroquia "${nombre}" ha sido guardada exitosamente. ${infoCodigo} ¿Deseas seleccionarla y regresar a tu perfil ahora?`,
        "check_circle",
        true,
        () => {
          window.usarParroquiaEnPerfil(nombre, pais);
        }
      );
    } else {
      mostrarNotif("Parroquia Guardada", `La parroquia "${nombre}" se ha guardado exitosamente. ${infoCodigo}`, "check_circle");
    }
  } catch (err) {
    console.error("Error al guardar parroquia:", err);
    mostrarNotif("Error al Guardar", "No se pudo guardar la parroquia: " + err.message, "error");
  } finally {
    const btnSubmit = document.getElementById('btn-guardar-parroquia-submit');
    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = `<span class="material-symbols-outlined">save</span> <span id="btn-guardar-texto">Guardar Parroquia</span>`;
    }
  }
}

// Cargar datos en el formulario para editar
window.cargarParroquiaParaEditar = (parrId) => {
  const parr = listaParroquiasCache.find(p => p.id === parrId);
  if (!parr) return;

  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  const esSuperAdmin = (user?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

  const idInput = document.getElementById('parroquia-id-editando');
  const inputProvincia = document.getElementById('parroquia-provincia-input');
  const inputNombre = document.getElementById('parroquia-nombre-input');
  const inputSector = document.getElementById('parroquia-sector-input');
  const inputDir = document.getElementById('parroquia-direccion-input');
  const inputParroco = document.getElementById('parroquia-parroco-input');
  const selectPais = document.getElementById('parroquia-pais-select');
  const selectCantor = document.getElementById('parroquia-cantor-encargado-select');
  const tituloForm = document.getElementById('form-titulo-parroquia');
  const textoBtn = document.getElementById('btn-guardar-texto');
  const btnCancelar = document.getElementById('btn-cancelar-edicion');

  if (idInput) idInput.value = parr.id;
  if (inputProvincia) inputProvincia.value = parr.provincia || '';
  if (inputNombre) inputNombre.value = parr.nombre || '';
  if (inputSector) inputSector.value = parr.sector || '';
  if (inputDir) inputDir.value = parr.direccion || '';
  if (inputParroco) inputParroco.value = parr.parroco || '';

  if (selectPais && parr.pais) {
    renderizarOpcionesPaises(catalogoPaisesGlobal, parr.pais);
  }
  if (selectCantor) {
    selectCantor.value = parr.cantorEncargadoEmail || '';
    selectCantor.disabled = !esSuperAdmin;
  }

  if (tituloForm) tituloForm.textContent = `Editar Parroquia: ${parr.nombre}`;
  if (textoBtn) textoBtn.textContent = 'Actualizar Parroquia';
  if (btnCancelar) btnCancelar.style.display = 'inline-flex';

  const form = document.getElementById('form-registro-datosparroquia');
  if (form) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Limpiar formulario y resetear estado de edición
window.limpiarFormularioParroquia = () => {
  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  const esSuperAdmin = (user?.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

  const idInput = document.getElementById('parroquia-id-editando');
  const inputProvincia = document.getElementById('parroquia-provincia-input');
  const inputNombre = document.getElementById('parroquia-nombre-input');
  const inputSector = document.getElementById('parroquia-sector-input');
  const inputDir = document.getElementById('parroquia-direccion-input');
  const inputParroco = document.getElementById('parroquia-parroco-input');
  const filtroPais = document.getElementById('filtro-pais-input');
  const selectPais = document.getElementById('parroquia-pais-select');
  const selectCantor = document.getElementById('parroquia-cantor-encargado-select');
  const tituloForm = document.getElementById('form-titulo-parroquia');
  const textoBtn = document.getElementById('btn-guardar-texto');
  const btnCancelar = document.getElementById('btn-cancelar-edicion');

  if (idInput) idInput.value = '';
  if (inputProvincia) inputProvincia.value = '';
  if (inputNombre) inputNombre.value = '';
  if (inputSector) inputSector.value = '';
  if (inputDir) inputDir.value = '';
  if (inputParroco) inputParroco.value = '';
  if (filtroPais) filtroPais.value = '';

  if (selectPais) {
    renderizarOpcionesPaises(catalogoPaisesGlobal, 'República Dominicana');
  }
  if (selectCantor) {
    selectCantor.value = '';
    selectCantor.disabled = !esSuperAdmin;
  }

  if (tituloForm) tituloForm.textContent = 'Registrar Nueva Parroquia';
  if (textoBtn) textoBtn.textContent = 'Guardar Parroquia';
  if (btnCancelar) btnCancelar.style.display = 'none';
};

// Eliminar parroquia
window.eliminarParroquia = async (parrId, nombre) => {
  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  const parr = listaParroquiasCache.find(p => p.id === parrId);
  if (!puedeVerCodigoParroquia(parr, user)) {
    mostrarNotif("Permiso Denegado", "Solo el Administrador Principal o el Cantor Encargado de esta parroquia pueden eliminarla.", "lock");
    return;
  }

  mostrarNotif(
    "Eliminar Parroquia",
    `¿Estás seguro de que deseas eliminar permanentemente la parroquia "${nombre}"?`,
    "delete_forever",
    true,
    async () => {
      try {
        await deleteDoc(doc(db, "parroquias", parrId));
        await cargarTodasLasParroquias();
        mostrarNotif("Eliminada", `La parroquia "${nombre}" fue eliminada.`, "check_circle");
      } catch (err) {
        mostrarNotif("Error al Eliminar", err.message, "error");
      }
    }
  );
};

// Usar parroquia seleccionada en el perfil del usuario y retornar
window.usarParroquiaEnPerfil = async (nombreParroquia, paisParroquia) => {
  try {
    const user = usuarioActual || getCurrentUser() || auth.currentUser;
    // Actualizar localStorage
    let perfilData = {};
    const local = localStorage.getItem('user_profile_data');
    if (local) {
      try { perfilData = JSON.parse(local); } catch(e){}
    }
    perfilData.parroquia = nombreParroquia;
    if (paisParroquia) perfilData.pais = paisParroquia;
    localStorage.setItem('user_profile_data', JSON.stringify(perfilData));

    // Si hay usuario autenticado, guardar en Firestore
    if (user) {
      const docRefConfig = doc(db, "usuarios", user.uid, "perfil", "config");
      await setDoc(docRefConfig, {
        parroquia: nombreParroquia,
        pais: paisParroquia,
        ultimaActualizacion: new Date().toISOString()
      }, { merge: true });
    }

    window.location.href = retornoUrl || 'perfil.html';
  } catch (err) {
    console.error("Error al aplicar parroquia a perfil:", err);
    window.location.href = retornoUrl || 'perfil.html';
  }
};

// Copiar código de 16 caracteres al portapapeles (solo para encargados y super admin)
window.copiarCodigoParroquia = (codigo, parrId = '') => {
  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  const parr = listaParroquiasCache.find(p => (parrId && p.id === parrId) || p.codigoAcceso === codigo);
  if (!puedeVerCodigoParroquia(parr, user)) {
    window.mostrarMensajeResponsabilidad(parr?.id || parr?.nombre);
    return;
  }
  navigator.clipboard.writeText(codigo).then(() => {
    mostrarNotif("Código Copiado", `Código "${codigo}" copiado al portapapeles. Compártelo con los cantores de tu parroquia.`, "content_copy");
  }).catch(() => {
    mostrarNotif("Código de Acceso", `Código: ${codigo}`, "key");
  });
};

// Descargar plantilla CSV con formato oficial (incluyendo Provincia)
window.descargarPlantillaCsvParroquias = () => {
  const csvContent = "\uFEFF" +
    "Pais,Provincia,Parroquia,Sector,Direccion,Parroco,CantorEncargadoEmail\n" +
    "República Dominicana,Distrito Nacional,Catedral Primada de América (Santa María de la Encarnación),Zona Colonial,Calle Arzobispo Meriño,,dbaezh78@gmail.com\n" +
    "República Dominicana,Distrito Nacional,San Juan Bautista,Bella Vista,Calle Duarte #12,P. Manuel García,\n" +
    "República Dominicana,Distrito Nacional,Nuestra Señora de la Altagracia,Honduras,Av. Independencia km 8,P. Antonio Ruiz,\n" +
    "República Dominicana,Santo Domingo Este,San Vicente de Paúl,Los Mina,Av. San Vicente de Paúl,,\n" +
    "España,Madrid,Santa María la Blanca,Centro,Calle Mayor 45,P. Francisco Pérez,\n" +
    "Estados Unidos,California,St. Dominic,Pacific Heights,2100 Bush St,Fr. John Smith,\n" +
    "Colombia,Bogotá,Cristo Rey,Chapinero,Carrera 7 #40-20,P. Carlos Mendoza,\n" +
    "México,Ciudad de México,San José Obrero,Del Valle,Av. Insurgentes Sur 300,P. Pedro Hernández,\n";

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "plantilla_parroquias.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Procesar e importar archivo CSV
window.procesarArchivoCsvParroquias = async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const user = usuarioActual || getCurrentUser() || auth.currentUser;
  if (!user) {
    mostrarNotif("Sesión Requerida", "Debes iniciar sesión con tu cuenta para importar parroquias a la base de datos.", "lock");
    return;
  }

  const reader = new FileReader();
  reader.onload = async (e) => {
    try {
      const text = e.target.result;
      const lineas = text.split(/\r?\n/).filter(line => line.trim().length > 0);

      if (lineas.length < 2) {
        mostrarNotif("CSV Inválido", "El archivo CSV debe tener al menos una fila de encabezados y una fila con datos.", "error");
        return;
      }

      // Detectar delimitador (coma o punto y coma)
      const primeraLinea = lineas[0];
      const delimitador = (primeraLinea.includes(';') && (primeraLinea.split(';').length >= primeraLinea.split(',').length)) ? ';' : ',';

      // Función para dividir respetando comillas
      const parseCsvLine = (line) => {
        const result = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const c = line[i];
          if (c === '"') {
            if (inQuotes && line[i + 1] === '"') {
              cur += '"';
              i++;
            } else {
              inQuotes = !inQuotes;
            }
          } else if (c === delimitador && !inQuotes) {
            result.push(cur.trim());
            cur = '';
          } else {
            cur += c;
          }
        }
        result.push(cur.trim());
        return result;
      };

      const headers = parseCsvLine(lineas[0]).map(h => normalizarTexto(h));
      const idxPais = headers.findIndex(h => h.includes('pais'));
      const idxProvincia = headers.findIndex(h => h.includes('provincia') || h.includes('estado') || h.includes('region') || h.includes('departamento') || h.includes('ciudad'));
      const idxParroquia = headers.findIndex(h => h.includes('parroquia') || h.includes('nombre'));
      const idxSector = headers.findIndex(h => h.includes('sector') || h.includes('distrito') || h.includes('barrio'));
      const idxDir = headers.findIndex(h => h.includes('direccion') || h.includes('dir'));
      const idxParroco = headers.findIndex(h => h.includes('parroco'));
      const idxCantor = headers.findIndex(h => h.includes('cantor') || h.includes('email') || h.includes('encargado'));

      if (idxPais === -1 || idxParroquia === -1 || idxSector === -1) {
        mostrarNotif("Columnas Obligatorias Faltantes", "El archivo CSV debe incluir las columnas obligatorias: 'Pais', 'Parroquia' y 'Sector'.", "error");
        return;
      }

      let importadas = 0;
      let omitidas = 0;
      let duplicadasOmitidas = 0;

      // Registrar claves únicas de parroquias ya existentes: (pais + nombre + sector)
      const clavesExistentes = new Set(
        listaParroquiasCache.map(p => `${normalizarTexto(p.pais || '')}___${normalizarTexto(p.nombre || '')}___${normalizarTexto(p.sector || '')}`)
      );

      const esSuperAdmin = (user.email || '').toLowerCase().trim() === SUPER_ADMIN_EMAIL;

      for (let i = 1; i < lineas.length; i++) {
        const cols = parseCsvLine(lineas[i]);
        const pais = cols[idxPais] ? cols[idxPais].trim() : '';
        const provincia = (idxProvincia !== -1 && cols[idxProvincia]) ? cols[idxProvincia].trim() : '';
        const parroquia = cols[idxParroquia] ? cols[idxParroquia].trim() : '';
        const sector = (idxSector !== -1 && cols[idxSector]) ? cols[idxSector].trim() : '';
        const direccion = (idxDir !== -1 && cols[idxDir]) ? cols[idxDir].trim() : '';
        const parroco = (idxParroco !== -1 && cols[idxParroco]) ? cols[idxParroco].trim() : '';
        const cantorEmail = (idxCantor !== -1 && cols[idxCantor]) ? cols[idxCantor].trim().toLowerCase() : '';

        // Validación: País, Parroquia y Sector son obligatorios
        if (!pais || !parroquia || !sector) {
          omitidas++;
          continue;
        }

        // Validación de unicidad: No permitir mismo nombre y mismo sector
        const clave = `${normalizarTexto(pais)}___${normalizarTexto(parroquia)}___${normalizarTexto(sector)}`;
        if (clavesExistentes.has(clave)) {
          duplicadasOmitidas++;
          omitidas++;
          continue;
        }
        clavesExistentes.add(clave);

        const nuevoId = 'parr_' + Date.now().toString(36) + '_' + i;
        const codigo16 = generarCodigo16();

        let miembros = [];
        let cantorNombre = '';
        if (cantorEmail && esSuperAdmin) {
          const u = usuariosRegistradosCache.find(x => x.email?.toLowerCase().trim() === cantorEmail);
          cantorNombre = u ? (u.displayName || cantorEmail.split('@')[0]) : cantorEmail.split('@')[0];
          miembros.push({
            email: cantorEmail,
            displayName: cantorNombre,
            rol: 'encargado',
            fechaIngreso: new Date().toISOString()
          });
        }

        if (user.email && !miembros.some(m => m.email?.toLowerCase().trim() === user.email.toLowerCase().trim())) {
          miembros.push({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || user.email.split('@')[0],
            rol: esSuperAdmin ? 'encargado' : 'miembro',
            fechaIngreso: new Date().toISOString()
          });
        }

        const docData = {
          id: nuevoId,
          nombre: parroquia,
          pais: pais,
          provincia: provincia,
          sector: sector,
          direccion: direccion,
          parroco: parroco,
          cantorEncargado: esSuperAdmin ? cantorNombre : '',
          cantorEncargadoEmail: esSuperAdmin ? cantorEmail : '',
          codigoAcceso: codigo16,
          creadorUid: user.uid,
          creadorEmail: user.email,
          creadoEn: new Date().toISOString(),
          actualizadoEn: new Date().toISOString(),
          miembros: miembros,
          solicitudesPendientes: []
        };

        await setDoc(doc(db, "parroquias", nuevoId), docData, { merge: true });
        importadas++;
      }

      await cargarTodasLasParroquias();
      let detalleOmitidas = '';
      if (duplicadasOmitidas > 0) {
        detalleOmitidas += ` (${duplicadasOmitidas} omitidas por tener el mismo nombre y sector que otra parroquia).`;
      }
      const incompletas = omitidas - duplicadasOmitidas;
      if (incompletas > 0) {
        detalleOmitidas += ` (${incompletas} omitidas por campos obligatorios faltantes).`;
      }
      mostrarNotif("Importación Completada", `Se importaron ${importadas} parroquias correctamente.${detalleOmitidas}`, "cloud_done");
    } catch (err) {
      console.error("Error importando CSV:", err);
      mostrarNotif("Error al Importar", err.message, "error");
    }
  };
  reader.readAsText(file, "UTF-8");
};

// Modal de Alerta / Confirmación Personalizado
function mostrarNotif(titulo, mensaje, icono = 'info', esConfirmacion = false, onConfirm = null) {
  const modal = document.getElementById('modal-notif-parroquia');
  const elTitulo = document.getElementById('modal-notif-titulo');
  const elMensaje = document.getElementById('modal-notif-mensaje');
  const elIcono = document.getElementById('modal-notif-icon');
  const btnOk = document.getElementById('modal-notif-btn-ok');
  const btnCancelar = document.getElementById('modal-notif-btn-cancelar');

  if (!modal || !elTitulo || !elMensaje) {
    alert(`${titulo}: ${mensaje}`);
    if (esConfirmacion && onConfirm) onConfirm();
    return;
  }

  elTitulo.textContent = titulo;
  elMensaje.textContent = mensaje;
  if (elIcono) elIcono.textContent = icono;

  if (esConfirmacion) {
    btnCancelar.style.display = 'inline-flex';
    btnOk.textContent = 'Aceptar';
  } else {
    btnCancelar.style.display = 'none';
    btnOk.textContent = 'Entendido';
  }

  btnOk.onclick = () => {
    modal.style.display = 'none';
    if (onConfirm) onConfirm();
  };

  btnCancelar.onclick = () => {
    modal.style.display = 'none';
  };

  modal.style.display = 'flex';
}
