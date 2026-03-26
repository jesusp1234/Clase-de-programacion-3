// Cargar menú desde JSON de forma asíncrona
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
});

function loadMenu() {
    fetch('./manu.json')
        .then(response => {
            if (!response.ok) throw new Error('Error cargando el JSON');
            return response.json();
        })
        .then(data => renderMenu(data))
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('menu').innerHTML = '<p style="color:red;">Error al cargar el menú</p>';
        });
}

function renderMenu(data) {
    const nav = document.getElementById('menu');
    const contenido = document.getElementById('contenido');
    
    data.forEach((item, index) => {
        // Contenedor del botón principal
        const container = document.createElement('div');
        container.className = 'menu-container';
        
        // Botón principal
        const btn = document.createElement('button');
        btn.textContent = item.nombre;
        btn.className = 'menu-button';
        if (index === 0) btn.classList.add('active');
        
        // Evento click del botón principal
        btn.onclick = (e) => {
            e.stopPropagation();
            document.querySelectorAll('.menu-button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            contenido.innerHTML = `<h3>${item.nombre}</h3><p>${item.contenido}</p>`;
        };
        
        container.appendChild(btn);
        
        // Si hay submenú
        if (item.submenu && item.submenu.length > 0) {
            const submenu = document.createElement('div');
            submenu.className = 'submenu';
            let closeTimer;
            
            item.submenu.forEach(subitem => {
                const subbtn = document.createElement('button');
                subbtn.textContent = subitem.nombre;
                subbtn.className = 'submenu-button';
                
                subbtn.onclick = (e) => {
                    e.stopPropagation();
                    document.querySelectorAll('.submenu-button').forEach(b => b.classList.remove('active'));
                    subbtn.classList.add('active');
                    contenido.innerHTML = `<h3>${subitem.nombre}</h3><p>${subitem.contenido}</p>`;
                };
                
                submenu.appendChild(subbtn);
            });
            
            container.appendChild(submenu);
            
            // Funciones para controlar la visibilidad del submenú
            const openSubmenu = () => {
                clearTimeout(closeTimer);
                submenu.style.display = 'block';
            };
            
            const closeSubmenu = () => {
                closeTimer = setTimeout(() => {
                    submenu.style.display = 'none';
                }, 300);
            };
            
            btn.addEventListener('mouseenter', openSubmenu);
            submenu.addEventListener('mouseenter', openSubmenu);
            btn.addEventListener('mouseleave', closeSubmenu);
            submenu.addEventListener('mouseleave', closeSubmenu);
        }
        
        nav.appendChild(container);
        
        // Mostrar contenido del primer item por defecto
        if (index === 0) {
            contenido.innerHTML = `<h3>${item.nombre}</h3><p>${item.contenido}</p>`;
        }
    });
}

