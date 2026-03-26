// Datos de fallback en caso de que el JSON no cargue
const menuDataFallback = [
  {
    "id": "inicio",
    "nombre": "Inicio",
    "contenido": "Esto es una prueba de inicio con un menu asincronico."
  },
  {
    "id": "servicios",
    "nombre": "Servicios",
    "contenido": "Aqui guardo informacion sobre nuestros servicios.",
    "submenu": [
      {
        "id": "servicios-desarrollo",
        "nombre": "Desarrollo Web",
        "contenido": "Creamos sitios web modernos y responsive diseñados para tu negocio."
      }
    ]
  },
  {
    "id": "productos",
    "nombre": "Productos",
    "contenido": "Productos de todo tipo y calidad lorem ipsum dolor sit amet.",
    "submenu": [
      {
        "id": "productos-software",
        "nombre": "Software",
        "contenido": "Suite de herramientas de software empresarial de alta performance."
      }
    ]
  },
  {
    "id": "contacto",
    "nombre": "Contacto",
    "contenido": "Para contactarnos puedes llamar al 809-xxx-xxxx o enviarnos un email a ejemplo@test.com."
  }
];

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, iniciando menú...');
    loadMenu();
});

function loadMenu() {
    const menuEl = document.getElementById('menu');
    
    // Verificar que el elemento existe
    if (!menuEl) {
        console.error('No se encontró el elemento #menu');
        return;
    }

    // Intentar cargar desde JSON
    fetch('./manu.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('JSON cargado exitosamente:', data);
            renderMenu(data);
        })
        .catch(error => {
            console.warn('Error cargando JSON, usando datos de fallback:', error);
            renderMenu(menuDataFallback);
        });
}

function renderMenu(data) {
    const menuEl = document.getElementById('menu');
    const contentEl = document.getElementById('contenido');

    // Verificar elementos
    if (!menuEl || !contentEl) {
        console.error('Elementos requeridos no encontrados');
        return;
    }

    // Limpiar el menú anterior
    menuEl.innerHTML = '';

    // Si no hay datos, mostrar error
    if (!data || data.length === 0) {
        menuEl.innerHTML = '<p style="color: #ff6b6b; padding: 1rem;">No hay datos disponibles</p>';
        return;
    }

    // Renderizar cada item
    data.forEach((item, index) => {
        try {
            const container = document.createElement('div');
            container.className = 'menu-container';

            // Crear botón principal
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = item.nombre || 'Sin nombre';
            btn.className = 'menu-button';
            if (index === 0) btn.classList.add('active');

            // Evento click del botón principal
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                updateMenuState(btn);
                updateContent(item.nombre, item.contenido);
            });

            container.appendChild(btn);

            // Crear submenú si existe
            if (item.submenu && item.submenu.length > 0) {
                const submenu = document.createElement('div');
                submenu.className = 'submenu';
                submenu.style.display = 'none';
                let closeTimer;

                // Crear botones del submenú
                item.submenu.forEach(subitem => {
                    const subbtn = document.createElement('button');
                    subbtn.type = 'button';
                    subbtn.textContent = subitem.nombre || 'Sin nombre';
                    subbtn.className = 'submenu-button';

                    subbtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        updateMenuState(subbtn);
                        updateContent(subitem.nombre, subitem.contenido);
                    });

                    submenu.appendChild(subbtn);
                });

                container.appendChild(submenu);

                // Eventos para mostrar/ocultar submenú
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

                // Para dispositivos táctiles
                btn.addEventListener('click', (e) => {
                    if (submenu.style.display === 'none') {
                        openSubmenu();
                        e.preventDefault();
                    }
                });
            }

            menuEl.appendChild(container);

            // Mostrar contenido del primer item por defecto
            if (index === 0) {
                updateContent(item.nombre, item.contenido);
            }
        } catch (err) {
            console.error('Error renderizando item:', err, item);
        }
    });
}

function updateMenuState(clickedBtn) {
    // Remover clase active de todos los botones del mismo nivel
    const isSubmenuBtn = clickedBtn.classList.contains('submenu-button');
    const selector = isSubmenuBtn ? '.submenu-button' : '.menu-button';
    
    document.querySelectorAll(selector).forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Agregar clase active al botón clickeado
    clickedBtn.classList.add('active');
}

function updateContent(title, content) {
    const contentEl = document.getElementById('contenido');
    
    if (!contentEl) {
        console.error('Elemento contenido no encontrado');
        return;
    }

    // Sanitizar el contenido (prevenir XSS)
    const sanitizedTitle = String(title || '').replace(/[<>]/g, '');
    const sanitizedContent = String(content || '').replace(/[<>]/g, '');

    contentEl.innerHTML = `
        <h3>${sanitizedTitle}</h3>
        <p>${sanitizedContent}</p>
    `;
}

