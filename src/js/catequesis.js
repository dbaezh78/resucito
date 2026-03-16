let todosLosCantos = [];

// 1. Cargar el JSON
fetch('data/catequesis.json')
    .then(res => res.json())
    .then(data => {
        todosLosCantos = data;
        renderizarLista(todosLosCantos);
    })
    .catch(err => console.error("Error cargando el JSON:", err));

// 2. Renderizar la lista lateral (Izquierda)
function renderizarLista(lista) {
    const contenedor = document.getElementById('lista-cantos');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    lista.forEach(canto => {
        const li = document.createElement('li');
        li.className = 'item-canto-sidebar';
        li.innerHTML = `
            <div class="sidebar-canto-titulo">${canto.titulo}</div>
            <div class="sidebar-canto-meta">${canto.categoria}</div>
        `;
        li.onclick = () => mostrarDetalleCanto(canto);
        contenedor.appendChild(li);
    });
}

// 3. El Buscador (Filtro en tiempo real)
document.getElementById('buscador').addEventListener('input', (e) => {
    const busqueda = e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const filtrados = todosLosCantos.filter(canto => {
        const titulo = canto.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const categoria = canto.categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return titulo.includes(busqueda) || categoria.includes(busqueda);
    });

    renderizarLista(filtrados);
});

// 4. Mostrar el contenido en la parte derecha
function mostrarDetalleCanto(canto) {
    const displayTitulo = document.getElementById('titulo-display');
    displayTitulo.innerText = canto.titulo;
    
    // Inyectamos el contenido
    document.getElementById('catequesis-cuerpo').innerHTML = `
        <div class="info-header" style="margin-bottom: 20px; color: #777; font-size: 0.9em;">
            <strong>Fuente:</strong> ${canto.fuente_biblica} | 
            <strong>Autor:</strong> ${canto.autor} | 
            <strong>Tono:</strong> ${canto.tono_original}
        </div>
        
        <div class="bloques-significado">
            ${canto.catequesis}
        </div>
    `;

    // Procesar Letra y Acordes
    const letraProcesada = canto.letra_con_acordes.replace(/\[(.*?)\]/g, '<span class="acorde">$1</span>');
    document.getElementById('letra-cuerpo').innerHTML = letraProcesada;

    // Resetear el scroll del contenedor principal al cambiar de canto
    document.querySelector('.content').scrollTop = 0;
}