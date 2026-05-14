// Datos de ejemplo disponibles en la aplicación
const appData = {
    ventas: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        values: [1200, 1900, 1500, 2200, 2500, 3000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        label: 'Ventas ($)'
    },
    visitas: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        values: [350, 420, 380, 510, 650, 720, 580],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        label: 'Visitas'
    },
    productos: {
        labels: ['Laptops', 'Tablets', 'Smartphones', 'Accesorios', 'Software'],
        values: [450, 320, 580, 290, 180],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        label: 'Cantidad Vendida'
    }
};

// Variables globales
let currentChart = null;
let currentData = { ...appData.ventas };

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
    mostrarDatosActuales();
});

// Inicializar eventos
function inicializarEventos() {
    document.getElementById('generateChart').addEventListener('click', crearGrafico);
    document.getElementById('addCustomData').addEventListener('click', agregarDatoPersonalizado);
    document.getElementById('resetData').addEventListener('click', reiniciarDatos);
    document.getElementById('dataSource').addEventListener('change', cambiarFuenteDatos);
}

// Función para alternar acordeón
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Función para cambiar la fuente de datos
function cambiarFuenteDatos() {
    const fuente = document.getElementById('dataSource').value;
    currentData = JSON.parse(JSON.stringify(appData[fuente]));
    mostrarDatosActuales();
}

// Función principal para crear el gráfico
function crearGrafico() {
    const tipoGrafico = document.getElementById('chartType').value;
    const showLegend = document.getElementById('showLegend').checked;
    const showGrid = document.getElementById('showGrid').checked;
    const ctx = document.getElementById('myChart').getContext('2d');
    const contentWrapper = document.querySelector('.content-wrapper');
    const chartSection = document.querySelector('.chart-section');
    const container = document.querySelector('.container');

    // Mostrar la sección del gráfico
    chartSection.classList.add('visible');
    contentWrapper.classList.remove('no-chart');
    container.classList.add('with-chart');

    // Destruir gráfico anterior si existe
    if (currentChart) {
        currentChart.destroy();
    }

    // Configuración según el tipo de gráfico
    let config = {
        type: tipoGrafico,
        data: {
            labels: currentData.labels,
            datasets: [{
                label: currentData.label,
                data: currentData.values,
                backgroundColor: currentData.backgroundColor,
                borderColor: currentData.borderColor,
                borderWidth: 2,
                fill: tipoGrafico === 'line' ? true : false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: showLegend,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: `Gráfico de ${currentData.label}`
                }
            }
        }
    };

    // Configuración específica para gráficos de línea y barra
    if (tipoGrafico === 'line' || tipoGrafico === 'bar') {
        config.options.scales = {
            y: {
                beginAtZero: true,
                display: showGrid
            },
            x: {
                display: showGrid
            }
        };
    }

    // Crear el nuevo gráfico
    currentChart = new Chart(ctx, config);
}

// Función para agregar datos personalizados
function agregarDatoPersonalizado() {
    const label = document.getElementById('customLabel').value.trim();
    const value = parseFloat(document.getElementById('customValue').value);

    if (!label || isNaN(value)) {
        alert('Por favor, ingresa una etiqueta y un valor válido');
        return;
    }

    // Agregar los datos
    currentData.labels.push(label);
    currentData.values.push(value);

    // Limpiar inputs
    document.getElementById('customLabel').value = '';
    document.getElementById('customValue').value = '';

    // Actualizar pantalla
    mostrarDatosActuales();
}

// Función para mostrar los datos actuales
function mostrarDatosActuales() {
    const dataList = document.getElementById('dataList');
    dataList.innerHTML = '';

    currentData.labels.forEach((label, index) => {
        const item = document.createElement('div');
        item.className = 'data-item';
        item.innerHTML = `
            <span>${label}: ${currentData.values[index]}</span>
            <button type="button" class="btn-remove" onclick="eliminarDato(${index})">✕</button>
        `;
        dataList.appendChild(item);
    });
}

// Función para eliminar un dato
function eliminarDato(index) {
    currentData.labels.splice(index, 1);
    currentData.values.splice(index, 1);
    mostrarDatosActuales();
}

// Función para reiniciar los datos
function reiniciarDatos() {
    const fuente = document.getElementById('dataSource').value;
    currentData = JSON.parse(JSON.stringify(appData[fuente]));
    mostrarDatosActuales();
    alert('Datos reiniciados correctamente');
}
