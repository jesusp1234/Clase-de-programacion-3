// ========================================
// DATOS INICIALES (Embebidos)
// ========================================

const DATOS_INICIALES = {
  "registros": [
    {
      "id": 1,
      "datosPersonales": {
        "nombre": "Juan Pérez González",
        "edad": 45,
        "cedula": "002-1234567-8",
        "sexo": "M",
        "direccion": "Calle 1, Santo Domingo",
        "telefono": "809-555-1234",
        "email": "juan@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "Dionisio Silverio",
          "parentesco": "Padre",
          "edad": 84
        },
        {
          "id": 2,
          "nombre": "María García",
          "parentesco": "Madre",
          "edad": 80
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Hipertensión",
          "tiempoEnfermedad": "5 años",
          "detalles": "Controlada con medicamentos"
        },
        {
          "id": 2,
          "enfermedad": "Diabetes",
          "tiempoEnfermedad": "3 años",
          "detalles": "Tipo 2, controlada"
        }
      ],
      "internamientos": [
        {
          "id": 1,
          "fecha": "2023-06-15",
          "centroMedico": "Hospital Central",
          "diagnostico": "Hipertensión severa"
        },
        {
          "id": 2,
          "fecha": "2024-02-10",
          "centroMedico": "Clínica las Mercedes",
          "diagnostico": "Control de diabetes"
        }
      ]
    },
    {
      "id": 1712000001,
      "datosPersonales": {
        "nombre": "María López Rodríguez",
        "edad": 38,
        "cedula": "004-2456789-1",
        "sexo": "F",
        "direccion": "Avenida 27 de Febrero, Santo Domingo",
        "telefono": "809-555-2345",
        "email": "maria.lopez@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "Carlos López",
          "parentesco": "Hermano",
          "edad": 42
        },
        {
          "id": 2,
          "nombre": "Ana López",
          "parentesco": "Hermana",
          "edad": 36
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Asma",
          "tiempoEnfermedad": "10 años",
          "detalles": "Moderado, controlado con inhalador"
        }
      ],
      "internamientos": [
        {
          "id": 1,
          "fecha": "2023-11-20",
          "centroMedico": "Hospital Metropolitano",
          "diagnostico": "Crisis asmática"
        }
      ]
    },
    {
      "id": 1712000002,
      "datosPersonales": {
        "nombre": "Roberto García Martínez",
        "edad": 52,
        "cedula": "006-3456789-2",
        "sexo": "M",
        "direccion": "Calle Mella 123, Santiago",
        "telefono": "809-555-3456",
        "email": "roberto.garcia@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "José García",
          "parentesco": "Padre",
          "edad": 87
        },
        {
          "id": 2,
          "nombre": "Rosa Martínez",
          "parentesco": "Esposa",
          "edad": 50
        },
        {
          "id": 3,
          "nombre": "Roberto Jr.",
          "parentesco": "Hijo",
          "edad": 24
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Presión Alta",
          "tiempoEnfermedad": "7 años",
          "detalles": "Requiere medicamento diario"
        },
        {
          "id": 2,
          "enfermedad": "Colesterol Alto",
          "tiempoEnfermedad": "4 años",
          "detalles": "Controlado con dieta y medicamentos"
        },
        {
          "id": 3,
          "enfermedad": "Artritis",
          "tiempoEnfermedad": "2 años",
          "detalles": "En manos y columna"
        }
      ],
      "internamientos": [
        {
          "id": 1,
          "fecha": "2022-09-14",
          "centroMedico": "Hospital Ney Ureña",
          "diagnostico": "Infarto de miocardio leve"
        }
      ]
    },
    {
      "id": 1712000003,
      "datosPersonales": {
        "nombre": "Francesca Santana Reyes",
        "edad": 31,
        "cedula": "008-4567890-3",
        "sexo": "F",
        "direccion": "Calle Las Flores 456, La Romana",
        "telefono": "809-555-4567",
        "email": "francesca.santana@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "Pedro Santana",
          "parentesco": "Padre",
          "edad": 65
        },
        {
          "id": 2,
          "nombre": "Lucia Reyes",
          "parentesco": "Madre",
          "edad": 62
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Tiroides",
          "tiempoEnfermedad": "3 años",
          "detalles": "Hipotiroidismo, con levotiroxina"
        }
      ],
      "internamientos": []
    },
    {
      "id": 1712000004,
      "datosPersonales": {
        "nombre": "Luis Fernández Contreras",
        "edad": 67,
        "cedula": "010-5678901-4",
        "sexo": "M",
        "direccion": "Calle Principal 789, Barahona",
        "telefono": "809-555-5678",
        "email": "luis.fernandez@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "Miguel Fernández",
          "parentesco": "Hijo",
          "edad": 42
        },
        {
          "id": 2,
          "nombre": "Sofía Contreras",
          "parentesco": "Esposa",
          "edad": 65
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Insuficiencia Renal",
          "tiempoEnfermedad": "6 años",
          "detalles": "Etapa 3, en seguimiento"
        },
        {
          "id": 2,
          "enfermedad": "Hipertensión",
          "tiempoEnfermedad": "15 años",
          "detalles": "Severa, requiere múltiples medicamentos"
        }
      ],
      "internamientos": [
        {
          "id": 1,
          "fecha": "2024-01-08",
          "centroMedico": "Hospital Centro de Diálisis",
          "diagnostico": "Evaluación renal periódica"
        }
      ]
    },
    {
      "id": 1712000005,
      "datosPersonales": {
        "nombre": "Carmen Rosa Mondesí",
        "edad": 55,
        "cedula": "012-6789012-5",
        "sexo": "F",
        "direccion": "Avenida Independencia 321, San Felipe",
        "telefono": "809-555-6789",
        "email": "carmen.mondesi@example.com"
      },
      "familiares": [
        {
          "id": 1,
          "nombre": "Raúl Mondesí",
          "parentesco": "Hermano",
          "edad": 58
        }
      ],
      "condicionesSalud": [
        {
          "id": 1,
          "enfermedad": "Osteoporosis",
          "tiempoEnfermedad": "5 años",
          "detalles": "Post-menopáusica, con tratamiento"
        },
        {
          "id": 2,
          "enfermedad": "Depresión",
          "tiempoEnfermedad": "8 años",
          "detalles": "Controlada con antidepresivo"
        }
      ],
      "internamientos": []
    }
  ]
};

// ========================================
// GESTOR DE DATOS Y ALMACENAMIENTO
// ========================================

class GestorRegistros {
    constructor() {
        this.registros = [];
        this.registroActual = null;
        this.modoEdicion = false;
        this.cargarDatos();
    }

    async cargarDatos() {
        try {
            // Usar datos embebidos en lugar de fetch
            const datos = DATOS_INICIALES;
            this.registros = datos.registros || [];
            console.log('✅ Datos cargados desde datos embebidos:', this.registros);
            // Guardar en localStorage como copia de seguridad
            localStorage.setItem('registrosMedicos', JSON.stringify(this.registros));
        } catch (error) {
            console.warn('⚠️ Error al cargar datos:', error);
            const datosLocal = localStorage.getItem('registrosMedicos');
            this.registros = datosLocal ? JSON.parse(datosLocal) : [];
        }
    }

    guardarEnLocal() {
        // Guardar siempre en localStorage para que persista durante la sesión
        localStorage.setItem('registrosMedicos', JSON.stringify(this.registros));
        console.log('📝 Datos guardados en localStorage');
    }

    crearNuevoRegistro() {
        this.registroActual = {
            id: Date.now(),
            datosPersonales: {
                nombre: '',
                edad: '',
                cedula: '',
                sexo: '',
                direccion: '',
                telefono: '',
                email: ''
            },
            familiares: [],
            condicionesSalud: [],
            internamientos: []
        };
        this.modoEdicion = false;
    }

    guardarRegistro() {
        if (this.modoEdicion && this.registroActual.id) {
            // Editar registro existente
            const indice = this.registros.findIndex(r => r.id === this.registroActual.id);
            if (indice !== -1) {
                this.registros[indice] = this.registroActual;
            }
        } else {
            // Crear nuevo registro
            this.registros.push(this.registroActual);
        }
        this.guardarEnLocal();
    }

    obtenerRegistro(id) {
        return this.registros.find(r => r.id === id);
    }

    eliminarRegistro(id) {
        this.registros = this.registros.filter(r => r.id !== id);
        this.guardarEnLocal();
    }

    obtenerTodosRegistros() {
        return this.registros;
    }
}

// ========================================
// GESTOR DE INTERFAZ
// ========================================

class GestorInterfaz {
    constructor() {
        this.paginaActual = 1;
        this.totalPaginas = 5;
        this.gestor = new GestorRegistros();
        this.inicializar();
    }

    inicializar() {
        this.setupEventListeners();
        this._inicializarFormulario();
    }

    setupEventListeners() {
        // Navegación de páginas
        document.getElementById('btnSiguiente').addEventListener('click', (e) => this.irSiguientePagina(e));
        document.getElementById('btnAnterior').addEventListener('click', (e) => this.irPaginaAnterior(e));

        // Acciones
        document.getElementById('btnGuardar').addEventListener('click', (e) => this.guardarRegistro(e));
        document.getElementById('btnLimpiar').addEventListener('click', (e) => this.limpiarFormulario(e));

        // Modo selector
        document.querySelectorAll('.btn-mode').forEach(btn => {
            btn.addEventListener('click', (e) => this.cambiarModo(e));
        });

        // Agregar items
        document.getElementById('btnAgregarFamiliar').addEventListener('click', () => this.agregarFamiliar());
        document.getElementById('btnAgregarSalud').addEventListener('click', () => this.agregarCondicionSalud());
        document.getElementById('btnAgregarInternamiento').addEventListener('click', () => this.agregarInternamiento());

        // Formulario
        document.getElementById('formularioRegistro').addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    crearNuevoRegistro() {
        this.gestor.crearNuevoRegistro();
        this.paginaActual = 1;
        this.mostrarPagina(1);
        this._limpiarFormularioInterno();
        mostrarNotificacion('Nuevo registro creado', 'success');
    }

    _inicializarFormulario() {
        this.gestor.crearNuevoRegistro();
        this.paginaActual = 1;
        this.mostrarPagina(1);
        this._limpiarFormularioInterno();
    }

    cambiarModo(evento) {
        const modo = evento.target.dataset.mode;
        document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('active'));
        evento.target.classList.add('active');

        if (modo === 'nuevo') {
            document.getElementById('formularioRegistro').style.display = 'block';
            document.getElementById('areaVerRegistros').classList.add('hidden');
            this.crearNuevoRegistro();
        } else if (modo === 'editar') {
            document.getElementById('formularioRegistro').style.display = 'block';
            document.getElementById('areaVerRegistros').classList.add('hidden');
            this.mostrarSelectorRegistrosEdicion();
        } else if (modo === 'ver') {
            document.getElementById('formularioRegistro').style.display = 'none';
            document.getElementById('areaVerRegistros').classList.remove('hidden');
            this.mostrarTodosRegistros();
        }
    }

    mostrarSelectorRegistrosEdicion() {
        const registros = this.gestor.obtenerTodosRegistros();
        if (registros.length === 0) {
            mostrarNotificacion('No hay registros para editar', 'warning');
            return;
        }

        const listaModal = document.getElementById('listaRegistrosEditar');
        listaModal.innerHTML = '';

        registros.forEach(registro => {
            const opcion = document.createElement('div');
            opcion.className = 'registro-opcion';
            opcion.innerHTML = `
                <strong>ID: ${registro.id}</strong>
                <p><strong>Nombre:</strong> ${registro.datosPersonales.nombre}</p>
                <p><strong>Cédula:</strong> ${registro.datosPersonales.cedula}</p>
            `;
            opcion.style.cursor = 'pointer';
            opcion.onclick = () => {
                this.cargarRegistroParaEditar(registro);
                cerrarModal('modalSeleccionarRegistro');
            };
            listaModal.appendChild(opcion);
        });

        abrirModal('modalSeleccionarRegistro');
    }

    cargarRegistroParaEditar(registro) {
        this.gestor.registroActual = JSON.parse(JSON.stringify(registro));
        this.gestor.modoEdicion = true;
        this.paginaActual = 1;

        // Llenar formulario con datos existentes
        document.getElementById('nombre').value = registro.datosPersonales.nombre;
        document.getElementById('edad').value = registro.datosPersonales.edad;
        document.getElementById('cedula').value = registro.datosPersonales.cedula;
        document.getElementById('sexo').value = registro.datosPersonales.sexo;
        document.getElementById('email').value = registro.datosPersonales.email;
        document.getElementById('direccion').value = registro.datosPersonales.direccion;
        document.getElementById('telefono').value = registro.datosPersonales.telefono;

        document.querySelector('.main-content').style.display = 'block';
        document.getElementById('areaVerRegistros').classList.add('hidden');
        this.mostrarPagina(1);

        // Mostrar familiares
        this.mostrarFamiliares();
        // Mostrar condiciones
        this.mostrarCondicionesSalud();
        // Mostrar internamientos
        this.mostrarInternamientos();

        mostrarNotificacion('Registro cargado para editar', 'success');
    }

    irSiguientePagina(evento) {
        evento.preventDefault();
        if (this.paginaActual < this.totalPaginas) {
            // Validar datos de la página actual antes de avanzar
            if (!this.validarPaginaActual()) {
                return;
            }
            
            // Guardar datos de la página actual
            this.guardarDatosPagina(this.paginaActual);
            this.paginaActual++;
            this.mostrarPagina(this.paginaActual);

            if (this.paginaActual === this.totalPaginas) {
                this.generarResumen();
            }
        }
    }

    validarPaginaActual() {
        if (this.paginaActual === 1) {
            // Validar datos personales
            const nombre = document.getElementById('nombre').value.trim();
            const edad = document.getElementById('edad').value.trim();
            const cedula = document.getElementById('cedula').value.trim();
            const sexo = document.getElementById('sexo').value;
            const email = document.getElementById('email').value.trim();
            const direccion = document.getElementById('direccion').value.trim();
            const telefono = document.getElementById('telefono').value.trim();

            if (!nombre) {
                mostrarNotificacion('El nombre es obligatorio', 'warning');
                return false;
            }
            if (!edad) {
                mostrarNotificacion('La edad es obligatoria', 'warning');
                return false;
            }
            if (!cedula) {
                mostrarNotificacion('La cédula es obligatoria', 'warning');
                return false;
            }
            if (!sexo) {
                mostrarNotificacion('Debe seleccionar un sexo', 'warning');
                return false;
            }
            if (!email) {
                mostrarNotificacion('El email es obligatorio', 'warning');
                return false;
            }
            if (!this.esEmailValido(email)) {
                mostrarNotificacion('El email no es válido', 'warning');
                return false;
            }
            if (!direccion) {
                mostrarNotificacion('La dirección es obligatoria', 'warning');
                return false;
            }
            if (!telefono) {
                mostrarNotificacion('El teléfono es obligatorio', 'warning');
                return false;
            }
        } else if (this.paginaActual === 2) {
            // Validar que al menos un familiar esté agregado
            if (this.gestor.registroActual.familiares.length === 0) {
                mostrarNotificacion('Debe agregar al menos un familiar', 'warning');
                return false;
            }
        }
        return true;
    }

    esEmailValido(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    irPaginaAnterior(evento) {
        evento.preventDefault();
        if (this.paginaActual > 1) {
            this.guardarDatosPagina(this.paginaActual);
            this.paginaActual--;
            this.mostrarPagina(this.paginaActual);
        }
    }

    mostrarPagina(numero) {
        // Mostrar/ocultar páginas del formulario
        document.querySelectorAll('.pagina').forEach(p => p.classList.remove('active'));
        document.querySelector(`.pagina[data-pagina="${numero}"]`).classList.add('active');

        // Actualizar indicador
        document.getElementById('indicadorPagina').textContent = `Página ${numero} de ${this.totalPaginas}`;

        // Actualizar estado de botones
        const btnAnterior = document.getElementById('btnAnterior');
        const btnSiguiente = document.getElementById('btnSiguiente');

        btnAnterior.disabled = numero === 1;
        btnSiguiente.disabled = numero === this.totalPaginas;

        // Scroll hacia arriba
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    guardarDatosPagina(numeroPagina) {
        if (numeroPagina === 1) {
            this.gestor.registroActual.datosPersonales = {
                nombre: document.getElementById('nombre').value,
                edad: parseInt(document.getElementById('edad').value) || 0,
                cedula: document.getElementById('cedula').value,
                sexo: document.getElementById('sexo').value,
                email: document.getElementById('email').value,
                direccion: document.getElementById('direccion').value,
                telefono: document.getElementById('telefono').value
            };
        }
    }

    agregarFamiliar() {
        const nombre = document.getElementById('nombreFamiliar').value.trim();
        const parentesco = document.getElementById('parentesco').value;
        const edad = document.getElementById('edadFamiliar').value;

        if (!nombre) {
            mostrarNotificacion('El nombre del familiar es obligatorio', 'warning');
            return;
        }
        if (!parentesco) {
            mostrarNotificacion('El parentesco es obligatorio', 'warning');
            return;
        }
        if (!edad) {
            mostrarNotificacion('La edad del familiar es obligatoria', 'warning');
            return;
        }

        const familiar = {
            id: Date.now(),
            nombre,
            parentesco,
            edad: parseInt(edad)
        };

        this.gestor.registroActual.familiares.push(familiar);
        document.getElementById('nombreFamiliar').value = '';
        document.getElementById('parentesco').value = '';
        document.getElementById('edadFamiliar').value = '';

        this.mostrarFamiliares();
        mostrarNotificacion('Familiar agregado', 'success');
    }

    mostrarFamiliares() {
        const lista = document.getElementById('listaFamiliares');
        lista.innerHTML = '';

        this.gestor.registroActual.familiares.forEach(familiar => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="item-contenido">
                    <p><strong>${familiar.nombre}</strong> - ${familiar.parentesco} (${familiar.edad} años)</p>
                </div>
                <div class="item-botones">
                    <button type="button" class="btn-eliminar" onclick="gestor.interfaz.eliminarFamiliar(${familiar.id})">Eliminar</button>
                </div>
            `;
            lista.appendChild(item);
        });
    }

    eliminarFamiliar(id) {
        this.gestor.registroActual.familiares = this.gestor.registroActual.familiares.filter(f => f.id !== id);
        this.mostrarFamiliares();
        mostrarNotificacion('Familiar eliminado', 'success');
    }

    agregarCondicionSalud() {
        const enfermedad = document.getElementById('enfermedad').value.trim();
        const tiempoEnfermedad = document.getElementById('tiempoEnfermedad').value.trim();
        const detalles = document.getElementById('detallesSalud').value.trim();

        if (!enfermedad || !tiempoEnfermedad) {
            mostrarNotificacion('Complete los campos requeridos', 'warning');
            return;
        }

        const condicion = {
            id: Date.now(),
            enfermedad,
            tiempoEnfermedad,
            detalles
        };

        this.gestor.registroActual.condicionesSalud.push(condicion);
        document.getElementById('enfermedad').value = '';
        document.getElementById('tiempoEnfermedad').value = '';
        document.getElementById('detallesSalud').value = '';

        this.mostrarCondicionesSalud();
        mostrarNotificacion('Condición agregada', 'success');
    }

    mostrarCondicionesSalud() {
        const lista = document.getElementById('listaCondiciones');
        lista.innerHTML = '';

        this.gestor.registroActual.condicionesSalud.forEach(condicion => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="item-contenido">
                    <p><strong>Enfermedad:</strong> ${condicion.enfermedad}</p>
                    <p><strong>Tiempo:</strong> ${condicion.tiempoEnfermedad}</p>
                    ${condicion.detalles ? `<p><strong>Detalles:</strong> ${condicion.detalles}</p>` : ''}
                </div>
                <div class="item-botones">
                    <button type="button" class="btn-eliminar" onclick="gestor.interfaz.eliminarCondicion(${condicion.id})">Eliminar</button>
                </div>
            `;
            lista.appendChild(item);
        });
    }

    eliminarCondicion(id) {
        this.gestor.registroActual.condicionesSalud = this.gestor.registroActual.condicionesSalud.filter(c => c.id !== id);
        this.mostrarCondicionesSalud();
        mostrarNotificacion('Condición eliminada', 'success');
    }

    agregarInternamiento() {
        const fecha = document.getElementById('fechaInternamiento').value;
        const centroMedico = document.getElementById('centroMedico').value.trim();
        const diagnostico = document.getElementById('diagnostico').value.trim();

        if (!fecha || !centroMedico || !diagnostico) {
            mostrarNotificacion('Complete todos los campos del internamiento', 'warning');
            return;
        }

        const internamiento = {
            id: Date.now(),
            fecha,
            centroMedico,
            diagnostico
        };

        this.gestor.registroActual.internamientos.push(internamiento);
        document.getElementById('fechaInternamiento').value = '';
        document.getElementById('centroMedico').value = '';
        document.getElementById('diagnostico').value = '';

        this.mostrarInternamientos();
        mostrarNotificacion('Internamiento agregado', 'success');
    }

    mostrarInternamientos() {
        const lista = document.getElementById('listaInternamientos');
        lista.innerHTML = '';

        this.gestor.registroActual.internamientos.forEach(internamiento => {
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = `
                <div class="item-contenido">
                    <p><strong>Fecha:</strong> ${internamiento.fecha}</p>
                    <p><strong>Centro Médico:</strong> ${internamiento.centroMedico}</p>
                    <p><strong>Diagnóstico:</strong> ${internamiento.diagnostico}</p>
                </div>
                <div class="item-botones">
                    <button type="button" class="btn-eliminar" onclick="gestor.interfaz.eliminarInternamiento(${internamiento.id})">Eliminar</button>
                </div>
            `;
            lista.appendChild(item);
        });
    }

    eliminarInternamiento(id) {
        this.gestor.registroActual.internamientos = this.gestor.registroActual.internamientos.filter(i => i.id !== id);
        this.mostrarInternamientos();
        mostrarNotificacion('Internamiento eliminado', 'success');
    }

    generarResumen() {
        const registro = this.gestor.registroActual;
        const resumen = document.getElementById('resumenDatos');

        let html = '';

        // Datos Personales
        html += `
            <div class="seccion-resumen">
                <h3>📋 Datos Personales</h3>
                <div class="resumen-item">
                    <p><strong>Nombre:</strong> ${registro.datosPersonales.nombre}</p>
                    <p><strong>Edad:</strong> ${registro.datosPersonales.edad} años</p>
                    <p><strong>Cédula:</strong> ${registro.datosPersonales.cedula}</p>
                    <p><strong>Sexo:</strong> ${registro.datosPersonales.sexo}</p>
                    <p><strong>Email:</strong> ${registro.datosPersonales.email}</p>
                    <p><strong>Teléfono:</strong> ${registro.datosPersonales.telefono}</p>
                    <p><strong>Dirección:</strong> ${registro.datosPersonales.direccion}</p>
                </div>
            </div>
        `;

        // Familiares
        if (registro.familiares.length > 0) {
            html += `<div class="seccion-resumen"><h3>👨‍👩‍👧‍👦 Familiares (${registro.familiares.length})</h3>`;
            registro.familiares.forEach(f => {
                html += `
                    <div class="resumen-item">
                        <p><strong>${f.nombre}</strong> - ${f.parentesco} (${f.edad} años)</p>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // Condiciones de Salud
        if (registro.condicionesSalud.length > 0) {
            html += `<div class="seccion-resumen"><h3>🏥 Condiciones Pre-Existentes (${registro.condicionesSalud.length})</h3>`;
            registro.condicionesSalud.forEach(c => {
                html += `
                    <div class="resumen-item">
                        <p><strong>${c.enfermedad}</strong></p>
                        <p><strong>Tiempo:</strong> ${c.tiempoEnfermedad}</p>
                        ${c.detalles ? `<p><strong>Detalles:</strong> ${c.detalles}</p>` : ''}
                    </div>
                `;
            });
            html += `</div>`;
        }

        // Internamientos
        if (registro.internamientos.length > 0) {
            html += `<div class="seccion-resumen"><h3>🚑 Internamientos (${registro.internamientos.length})</h3>`;
            registro.internamientos.forEach(i => {
                html += `
                    <div class="resumen-item">
                        <p><strong>Fecha:</strong> ${i.fecha}</p>
                        <p><strong>Centro Médico:</strong> ${i.centroMedico}</p>
                        <p><strong>Diagnóstico:</strong> ${i.diagnostico}</p>
                    </div>
                `;
            });
            html += `</div>`;
        }

        resumen.innerHTML = html;
    }

    guardarRegistro(evento) {
        evento.preventDefault();

        // Validar datos personales completamente
        const nombre = document.getElementById('nombre').value.trim();
        const edad = document.getElementById('edad').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
        const sexo = document.getElementById('sexo').value;
        const email = document.getElementById('email').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const telefono = document.getElementById('telefono').value.trim();

        if (!nombre) {
            mostrarNotificacion('El nombre es obligatorio', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!edad) {
            mostrarNotificacion('La edad es obligatoria', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!cedula) {
            mostrarNotificacion('La cédula es obligatoria', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!sexo) {
            mostrarNotificacion('Debe seleccionar un sexo', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!email) {
            mostrarNotificacion('El email es obligatorio', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!this.esEmailValido(email)) {
            mostrarNotificacion('El email no es válido', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!direccion) {
            mostrarNotificacion('La dirección es obligatoria', 'warning');
            this.mostrarPagina(1);
            return;
        }
        if (!telefono) {
            mostrarNotificacion('El teléfono es obligatorio', 'warning');
            this.mostrarPagina(1);
            return;
        }

        // Validar que tenga al menos un familiar
        if (this.gestor.registroActual.familiares.length === 0) {
            mostrarNotificacion('Debe agregar al menos un familiar para guardar el registro', 'warning');
            this.mostrarPagina(2);
            return;
        }

        this.guardarDatosPagina(1);

        try {
            this.gestor.guardarRegistro();
            const accion = this.gestor.modoEdicion ? 'actualizado' : 'guardado';
            const idRegistro = this.gestor.registroActual.id;
            mostrarNotificacion(`✅ Registro ${accion} exitosamente (ID: ${idRegistro})`, 'success');
            
            setTimeout(() => {
                this.crearNuevoRegistro();
            }, 2000);
        } catch (error) {
            mostrarNotificacion(`Error al guardar: ${error.message}`, 'error');
        }
    }

    limpiarFormulario(evento) {
        if (evento) evento.preventDefault();
        abrirModal('modalConfirmarLimpiar');
    }

    _limpiarFormularioInterno() {
        document.getElementById('formularioRegistro').reset();
        document.getElementById('listaFamiliares').innerHTML = '';
        document.getElementById('listaCondiciones').innerHTML = '';
        document.getElementById('listaInternamientos').innerHTML = '';
    }

    confirmarLimpiar() {
        cerrarModal('modalConfirmarLimpiar');
        this._limpiarFormularioInterno();
        this.gestor.crearNuevoRegistro();
        this.paginaActual = 1;
        this.mostrarPagina(1);
        mostrarNotificacion('Formulario limpiado', 'success');
    }

    mostrarTodosRegistros() {
        const registros = this.gestor.obtenerTodosRegistros();
        const contenedor = document.getElementById('contenedorRegistros');
        contenedor.innerHTML = '';

        if (registros.length === 0) {
            contenedor.innerHTML = `
                <div style="color: #CBD5E1; text-align: center; padding: 40px;">
                    <p style="font-size: 1.1em;">No hay registros guardados</p>
                </div>
            `;
            return;
        }

        registros.forEach((registro, indice) => {
            const card = document.createElement('div');
            card.className = 'registro-card';
            
            let html = `<h3>📝 Registro #${indice + 1} (ID: ${registro.id})</h3>`;
            
            // Datos Personales
            html += `
                <div class="registro-detalle">
                    <p><strong>👤 Datos Personales</strong></p>
                    <p style="margin-left: 15px;">
                        <strong>Nombre:</strong> ${registro.datosPersonales.nombre}<br>
                        <strong>Edad:</strong> ${registro.datosPersonales.edad} años<br>
                        <strong>Cédula:</strong> ${registro.datosPersonales.cedula}<br>
                        <strong>Sexo:</strong> ${registro.datosPersonales.sexo}<br>
                        <strong>Email:</strong> ${registro.datosPersonales.email}<br>
                        <strong>Teléfono:</strong> ${registro.datosPersonales.telefono}<br>
                        <strong>Dirección:</strong> ${registro.datosPersonales.direccion}
                    </p>
                </div>
            `;

            // Familiares
            if (registro.familiares.length > 0) {
                html += `
                    <div class="registro-detalle">
                        <p><strong>👨‍👩‍👧‍👦 Familiares (${registro.familiares.length})</strong></p>
                        <div style="margin-left: 15px;">
                `;
                registro.familiares.forEach(f => {
                    html += `
                        <div style="background: rgba(30, 41, 59, 0.5); padding: 10px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid #10B981;">
                            <strong>${f.nombre}</strong> - ${f.parentesco} (${f.edad} años)
                        </div>
                    `;
                });
                html += `
                        </div>
                    </div>
                `;
            }

            // Condiciones de Salud
            if (registro.condicionesSalud.length > 0) {
                html += `
                    <div class="registro-detalle">
                        <p><strong>🏥 Condiciones Pre-Existentes (${registro.condicionesSalud.length})</strong></p>
                        <div style="margin-left: 15px;">
                `;
                registro.condicionesSalud.forEach(c => {
                    html += `
                        <div style="background: rgba(30, 41, 59, 0.5); padding: 10px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid #F59E0B;">
                            <strong>${c.enfermedad}</strong><br>
                            <strong>Tiempo:</strong> ${c.tiempoEnfermedad}<br>
                            ${c.detalles ? `<strong>Detalles:</strong> ${c.detalles}` : ''}
                        </div>
                    `;
                });
                html += `
                        </div>
                    </div>
                `;
            }

            // Internamientos
            if (registro.internamientos.length > 0) {
                html += `
                    <div class="registro-detalle">
                        <p><strong>🚑 Internamientos (${registro.internamientos.length})</strong></p>
                        <div style="margin-left: 15px;">
                `;
                registro.internamientos.forEach(i => {
                    html += `
                        <div style="background: rgba(30, 41, 59, 0.5); padding: 10px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid #EF4444;">
                            <strong>Fecha:</strong> ${i.fecha}<br>
                            <strong>Centro Médico:</strong> ${i.centroMedico}<br>
                            <strong>Diagnóstico:</strong> ${i.diagnostico}
                        </div>
                    `;
                });
                html += `
                        </div>
                    </div>
                `;
            }

            // Botones de Acción
            html += `
                <div class="registro-botones">
                    <button class="btn btn-primario" onclick="gestor.interfaz.abrirEdicion(${registro.id})">✏️ Editar</button>
                    <button class="btn btn-danger" onclick="gestor.interfaz.confirmarEliminar(${registro.id})">🗑️ Eliminar</button>
                </div>
            `;

            card.innerHTML = html;
            contenedor.appendChild(card);
        });
    }

    cargarArchivoJSON(evento) {
        // Método deshabilitado - Se recarga automáticamente al abrir la página
    }

    abrirEdicion(id) {
        const registro = this.gestor.obtenerRegistro(id);
        if (registro) {
            document.querySelector('[data-mode="editar"]').click();
            this.cargarRegistroParaEditar(registro);
        }
    }

    confirmarEliminar(id) {
        this.gestor.idAEliminar = id;
        abrirModal('modalConfirmarEliminar');
    }

    procederConEliminar() {
        const id = this.gestor.idAEliminar;
        cerrarModal('modalConfirmarEliminar');
        this.gestor.eliminarRegistro(id);
        mostrarNotificacion('Registro eliminado', 'success');
        this.mostrarTodosRegistros();
    }
}

// ========================================
// FUNCIONES AUXILIARES
// ========================================

function mostrarNotificacion(mensaje, tipo = 'success') {
    const notif = document.getElementById('notificacion');
    notif.textContent = mensaje;
    notif.className = `notificacion mostrar ${tipo}`;

    setTimeout(() => {
        notif.classList.remove('mostrar');
    }, 3000);
}

function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// ========================================
// INICIALIZACIÓN PRINCIPAL
// ========================================

let gestor;

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Inicializando aplicación...');
    gestor = { interfaz: new GestorInterfaz() };
    console.log('Aplicación lista');
});
