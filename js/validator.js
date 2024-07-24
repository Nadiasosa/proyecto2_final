// En este script se valida y se envia el formulario de consulta

// Funcion para mostrar un mensaje en los span ya creados
function alert_message(campoID,mensaje) {
    const campo_alert = document.getElementById(campoID);
    campo_alert.innerHTML=mensaje;
}

// VERIFICAR CAMPOS DE MANERA DINAMICA

// Validación para el campo 'correo'
function validateEmail(email) {
    if (!email) {
      alert_message("alert_correo", "Campo obligatorio");
      return false;
    } else {
      let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(valid)) {
        alert_message("alert_correo", "");
        return true;
      } else {
        alert_message("alert_correo", "Correo inválido");
        return false;
      }
    }
  }
  
  // Validación para el campo 'asunto'
  function validateSubject(subject) {
    if (!subject) {
      alert_message("alert_asunto", "Campo obligatorio");
      return false;
    } else {
      alert_message("alert_asunto", "");
      return true;
    }
  }
  
  // Validación para el campo 'mensaje'
  function validateMessage(message) {
    if (!message) {
      alert_message("alert_mensaje", "Campo obligatorio");
      return false;
    } else {
      alert_message("alert_mensaje", "");
      return true;
    }
  }
  
  // Validación final antes de enviar el formulario
  document.getElementById("form_contact").addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario
  
    // Obtener los valores de los campos
    const email = document.getElementById("correo").value.trim();
    const subject = document.getElementById("asunto").value.trim();
    const message = document.getElementById("mensaje").value.trim();
  
    // Validar cada campo individualmente
    const isEmailValid = validateEmail(email);
    const isSubjectValid = validateSubject(subject);
    const isMessageValid = validateMessage(message);
  
    // Si todos los campos están validados, proceder con el envío del formulario
    if (isEmailValid && isSubjectValid && isMessageValid) {
        // Preparar los datos del formulario para enviar
        const formData = new FormData();
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        // Enviar los datos a formsubmit.co (OBSOLETO) VER PROBLEMA
          fetch("https://formsubmit.co/ajax/feder6772@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: email,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de formsubmit.co:', data);
            // Mostrar mensaje de éxito al usuario
            alert_message("alert_enviado", "Su mensaje ha sido enviado correctamente.");
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            // Mostrar mensaje de error al usuario
            alert_message("alert_enviado", "Hubo un error al enviar su mensaje. Por favor, inténtelo nuevamente.");
        });
      
    }
  });

  // EVENTO BLUR: PERMITE VERIFICAR SI SE CUMPLE LUEGO DE QUE EL USUARIO PASE A OTRO CAMPO, PARA DAR A QUE TERMINE DE ESCRIBIR

  // -------------- CORREO --------------
  document.getElementById("correo").addEventListener('blur', function(event) {
    const email = this.value.trim();
    validateEmail(email);
  });
  
  //-------------- ASUNTO --------------
  document.getElementById("asunto").addEventListener('blur', function(event) {
    const subject = this.value.trim();
    validateSubject(subject);
  });
  
  // -------------- MENSAJE --------------
  document.getElementById("mensaje").addEventListener('blur', function(event) {
    const message = this.value.trim();
    validateMessage(message);
  });