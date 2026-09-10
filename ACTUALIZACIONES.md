# Historial de Actualizaciones - Resucitó

Este archivo registra los cambios de cada versión de forma clara y directa.

---

## [v2.1.06] - 2026
- Nuevo sistema de Asistencia y Chat en vivo estilo WhatsApp Web (`src/chat.html` y `chat.html`).
- Panel de control de conversaciones y buscador de usuarios en tiempo real para el Administrador.
- Canal privado de asistencia directa para cada hermano cantor sin visibilidad sobre otros usuarios.
- Regla de 5 minutos: edición y eliminación para todos dentro de los primeros 5 minutos; pasado este plazo el mensaje queda permanente y solo se permite eliminar para sí mismo.
- Adjuntos exclusivos de imágenes con compresión en el cliente y previsualización.
- Selector de emojis categorizados idéntico a WhatsApp.
- Nueva página de Política de Privacidad (`privacidad.html`) con diseño integrado y enlace en el pie de cuenta y menú.

---

## [v2.1.05] - 2026
- Categorías contraídas por defecto al ingresar a la preparación de cantos (`preparar.html`).
- Nuevo distintivo interactivo de lista activa en la cabecera del visor de cantos (`index.html`) debajo de la etapa litúrgica.
- Ventana modal interactiva de cantos de la lista activa con salto directo y navegación secuencial (botones y gestos táctiles).
- Acciones directas integradas en el modal de la lista activa: compartir, copiar enlace, descargar archivo y editar.
- Navegación bidireccional inmediata: pulsar el título de la lista en el visor redirige a `preparar.html` expandiendo automáticamente su categoría y enfocando la lista.

---

## [v2.1.04] - 2026
- Unificación total de almacenamiento de acordes posicionales en `/global_positions/` como única fuente de verdad.
- Descontinuación del guardado y lectura conflictiva en `/usuarios/USUARIO/posiciones/`.
- Nueva función administrativa y botón para **Respaldar Posiciones de Usuario** desde Firestore: genera `data/chord_positions-backup.json`, descarga el archivo localmente y reporta comparativa de cantos únicos vs globales.
- Integración del botón de respaldo tanto en el modal de **Ajustes > Cuenta (Acciones de Administrador)** como en **Mantenimiento de Cantos (`mantcantos.html`)**.

---

## [v2.1.03] - 2026
- Nueva página de Mantenimiento de Cantos (`mantcantos.html`).
- Columna dedicada para números de cantos (`N°`).
- Filtrado por columnas mediante selección múltiple con casillas de verificación (checkboxes), buscador interno y botones de seleccionar/deseleccionar todo.
- Control de Etapas en el Camino Neocatecumenal por canto en tiempo real.
- Verificación de acordes posicionados (`PosAcorde`), notas del cantor, favoritos y estado en Service Worker.
- Menú contextual interactivo (clic derecho) para ocultar y filtrar por columnas.
- Nuevo permiso `page_mantcantos` ("Mantenimiento Páginas") con acceso exclusivo para administradores.

---

## [v2.1.02] - 2026
- Descarga total automática de cantos y recursos faltantes al actualizar.
- Indicador visual dorado/verde en la opción 'Actualizar App'.
- Control de versiones incremental (2.1.01 -> 2.1.02 ... -> 2.2.00).

---

## [v2.1.01] - 2026
- Integración de halo giratorio con resplandor dorado y verde.
- Comprobación remota inteligente mediante version.json.
- Protección total de datos locales, cantos favoritos y configuraciones de usuario.

---

## [v2.1.00] - 2026
- Nueva navegación inferior interactiva con accesos directos y temas personalizables.
- Panel de cuenta emergente estilo Google Account.
- Soporte completo de modo sin conexión (PWA).
