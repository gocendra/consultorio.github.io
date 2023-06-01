// Función para mostrar el cuadro de diálogo de verificación de edad
function mostrarVerificacionEdad() {
    // Crear elementos HTML para el fondo oscurecido y el cuadro de diálogo
    var overlay = document.createElement('div');
    overlay.id = 'overlay';

    var dialog = document.createElement('div');
    dialog.id = 'dialog';
    dialog.innerHTML = '<h2>Verificación de Edad</h2>' +
        '<p>¿Eres mayor de edad?</p>' +
        '<button onclick="verificarEdad(true)">Sí</button>' +
        '<button onclick="verificarEdad(false)">No</button>';

    // Agregar los elementos al documento
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}

// Función para verificar la respuesta del usuario
function verificarEdad(esMayorEdad) {
    // Remover el cuadro de diálogo y el fondo oscurecido
    var overlay = document.getElementById('overlay');
    overlay.remove();

    // Redirigir según la respuesta del usuario
    if (esMayorEdad) {
        alert('Bienvenido. Eres mayor de edad.');
        // Aquí puedes redirigir al usuario a la página principal de tu sitio web
    } else {
        alert('Lo siento. No tienes la edad suficiente para acceder.');
        window.location.href = 'https://www.google.com';
     
    }
}

// Mostrar el cuadro de diálogo al cargar la página
window.onload = function () {
    mostrarVerificacionEdad();
};
//alert("Bienvenido a Consultorio Cannábivo.");