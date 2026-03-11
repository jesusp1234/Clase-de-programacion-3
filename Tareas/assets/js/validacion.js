// Agregar guiones automáticamente mientras se escribe
document.getElementById('cedula').addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, ''); // Solo números
    
    if (valor.length >= 11) {
        valor = valor.slice(0, 3) + '-' + valor.slice(3, 10) + '-' + valor.slice(10, 11);
    } else if (valor.length > 3) {
        valor = valor.slice(0, 3) + '-' + valor.slice(3);
    }
    
    e.target.value = valor;
});

// Validar cédula con algoritmo Luhn (Modulus 10)
function validarCedula(cedula) {
    const digitos = cedula.replace(/\D/g, ''); // Extraer solo números
    
    if (digitos.length !== 11) return false;
    
    // Extraer el payload (primeros 10 dígitos) y el dígito verificador (último)
    const payload = digitos.substring(0, 10);
    const digitoVerificador = parseInt(digitos[10]);
    
    let suma = 0;
    
    // Procesar de derecha a izquierda, duplicando cada segundo dígito
    for (let i = payload.length - 1; i >= 0; i--) {
        let digito = parseInt(payload[i]);
        const posicion = payload.length - i; // Posición de derecha a izquierda (1, 2, 3...)
        
        // Duplicar posiciones impares (1, 3, 5, 7, 9)
        if (posicion % 2 === 1) {
            digito *= 2;
            // Si es mayor a 9, sumar sus dígitos
            if (digito > 9) {
                digito = digito - 9; // Equivalente a sumar los dígitos (1+8=9 es lo mismo que 18-9=9)
            }
        }
        
        suma += digito;
    }
    
    // Sumar el dígito verificador
    suma += digitoVerificador;
    
    // La cédula es válida si la suma es múltiplo de 10
    return suma % 10 === 0;
}

// Validar formulario
function validarFormulario(event) {
    event.preventDefault();
    
    const cedula = document.getElementById('cedula').value;
    const resultado = document.getElementById('resultado');
    
    if (cedula.length !== 13 || cedula.replace(/\D/g, '').length !== 11) {
        resultado.className = 'resultado visible incorrecto';
        resultado.textContent = '✗ CÉDULA ES INCORRECTA';
    } else if (validarCedula(cedula)) {
        resultado.className = 'resultado visible correcto';
        resultado.textContent = '✓ CÉDULA ES CORRECTA';
    } else {
        resultado.className = 'resultado visible incorrecto';
        resultado.textContent = '✗ CÉDULA ES INCORRECTA';
    }
}
