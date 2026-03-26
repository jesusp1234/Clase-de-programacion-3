
fetch('/practica4/manu.json')
    .then(r => r.json())
    .then(data => {
        let nav = document.getElementById('menu');
        let con = document.getElementById('contenido');
        
        data.forEach((item, i) => {
            let container = document.createElement('div');
            container.className = 'menu-container';
            
            let btn = document.createElement('button');
            btn.textContent = item.nombre;
            btn.className = 'menu-button';
            btn.onclick = () => {
                document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                con.innerHTML = `<p>${item.contenido}</p>`;
            };
            
            container.appendChild(btn);
            
            if (item.submenu) {
                let submenu = document.createElement('div');
                submenu.className = 'submenu';
                let closeTimer;
                
                item.submenu.forEach(s => {
                    let sbtn = document.createElement('button');
                    sbtn.textContent = s.nombre;
                    sbtn.className = 'submenu-button';
                    sbtn.onclick = (e) => {
                        e.stopPropagation();
                        document.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                        sbtn.classList.add('active');
                        con.innerHTML = `<p>${s.contenido}</p>`;
                    };
                    submenu.appendChild(sbtn);
                });
                
                container.appendChild(submenu);
                
                const abrirSubmenu = () => {
                    clearTimeout(closeTimer);
                    submenu.style.display = 'block';
                };
                
                const cerrarSubmenu = () => {
                    closeTimer = setTimeout(() => {
                        submenu.style.display = 'none';
                    }, 200);
                };
                
                btn.onmouseover = abrirSubmenu;
                submenu.onmouseover = abrirSubmenu;
                btn.onmouseout = cerrarSubmenu;
                submenu.onmouseout = cerrarSubmenu;
            }
            
            nav.appendChild(container);
            if (i === 0) btn.click();
        });
    });

