function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value;
  
    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false; 
    }
  
    if (email === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false;
    }
  
    var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    }
  
    if (telefono === "") {
      alert("Por favor, ingresa tu número de teléfono.");
      return false;
    }
  
    var telefonoRegex = /^\d+$/;
    if (!telefono.match(telefonoRegex)) {
      alert("Por favor, ingresa un número de teléfono válido.");
      return false;
    }
  
    if (comentario === "") {
      alert("Por favor, ingresa un comentario.");
      return false;
    }
    alert("Su mensaje fue enviado exitosamente.");
    return true;
    
  }
  
  