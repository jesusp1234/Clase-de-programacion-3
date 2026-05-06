// Referencia al formulario
const contactForm = document.getElementById('contactForm');
// Contenedor donde se dibujará el código QR
const qrContainer = document.getElementById('qrcode');

// Almacenamos la instancia del código QR para limpiarla si se genera uno nuevo
let qrCodeInstance = null;

// Escuchamos el evento de envío del formulario
contactForm.addEventListener('submit', function(e) {
    // Evitamos que la página se recargue (comportamiento por defecto del formulario)
    e.preventDefault();

    // 1. OBTENER LOS VALORES DEL FORMULARIO
    // Guardamos en variables lo que el usuario escribió
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const title = document.getElementById('title').value.trim();

    // 2. CONSTRUIR EL FORMATO VCARD
    // El formato vCard es un estándar de texto plano (.vcf) utilizado para intercambiar tarjetas de presentación electrónicas.
    // Cuando la cámara del celular lee texto en este formato específico, reconoce que es un contacto.
    
    // Inicia siempre con BEGIN:VCARD y la versión (3.0 es ampliamente soportada)
    let vCardData = `BEGIN:VCARD\nVERSION:3.0\n`;
    
    // "N" define los nombres separados por punto y coma (Apellidos;Nombres;;;)
    vCardData += `N:${lastName};${firstName};;;\n`;
    
    // "FN" define el nombre completo formateado que se mostrará
    vCardData += `FN:${firstName} ${lastName}\n`;
    
    // "TEL" define el número de teléfono. TYPE=CELL indica que es móvil o celular
    vCardData += `TEL;TYPE=CELL:${phone}\n`;
    
    // Añadimos el correo electrónico solo si el usuario escribió algo
    if (email) {
        vCardData += `EMAIL;TYPE=WORK,INTERNET:${email}\n`;
    }
    
    // Añadimos la compañía y cargo si existen
    if (company) {
        vCardData += `ORG:${company}\n`;
    }
    if (title) {
        vCardData += `TITLE:${title}\n`;
    }
    
    // Todo vCard DEBE terminar con esta línea obligatoriamente
    vCardData += `END:VCARD`;

    // 3. GENERAR EL CÓDIGO QR USANDO LA LIBRERÍA
    
    // Si ya existe un código QR anterior, lo borramos de la pantalla
    if (qrCodeInstance !== null) {
        qrContainer.innerHTML = ''; // Limpiamos el contenedor
    }

    // Usamos el objeto global "QRCode" proveído por la librería que enlazamos en el HTML (qrcode.min.js)
    // Recibe dos parámetros:
    // 1. El elemento HTML donde dibujará la imagen (nuestro contenedor)
    // 2. Un objeto con la configuración
    qrCodeInstance = new QRCode(qrContainer, {
        text: vCardData,            // El texto que contendrá el QR (nuestra vCard)
        width: 256,                 // Ancho en píxeles
        height: 256,                // Alto en píxeles
        colorDark : "#000000",      // Color de los cuadritos (negro)
        colorLight : "#ffffff",     // Color de fondo (blanco, esencial para el contraste)
        correctLevel : QRCode.CorrectLevel.M // Nivel de corrección de errores (Medium permite que el QR funcione incluso si está un poco dañado)
    });

    console.log("QR Generado exitosamente. Datos incluidos:\n" + vCardData);
});

// También escuchamos el evento "reset" para limpiar el QR cuando el usuario limpia el formulario
contactForm.addEventListener('reset', function() {
    if (qrCodeInstance !== null) {
        qrContainer.innerHTML = '';
        qrCodeInstance = null;
    }
});
