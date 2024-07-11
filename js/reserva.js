function fechaVisual(fecha) {
    let horas = fecha.getHours(); // HORA
    let minutos = fecha.getMinutes(); // MINUTOS
    let dia = fecha.getDate(); // DIA
    let mes = fecha.getMonth() + 1; // MES
    let año = fecha.getFullYear().toString().slice(2); // AÑO SOLO LOS DOS ULTIMOS "24" en este caso

    let fechaFormateada = `${cero(horas)}:${cero(minutos)} del ${cero(dia)}-${cero(mes)}-${año}`;

    return fechaFormateada;
}

function cero(tiempo) {
    return tiempo < 10 ? '0' + tiempo : tiempo;
}

document.getElementById("reserva").addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos de fecha y hora
    const entrada = document.getElementById("fecha_de_entrada").value;
    const salida = document.getElementById("fecha_de_salida").value;

        // Verificar si los campos están vacíos
        if (!entrada || !salida) {
            alert('Por favor, complete ambos campos de fecha.');
            return;
        }
    
    // Convertir las cadenas de fecha y hora en objetos Date
    const fechaEntrada = new Date(entrada);
    const fechaSalida = new Date(salida);



    // Comparar las fechas
    if (fechaEntrada >= fechaSalida) {
        alert('La fecha de entrada debe ser menor que la fecha de salida.');
        return; 
    }
    // Traer los campos para colocar fecha-hora de Entrada y Salida
    const campo_entrada = document.getElementById("tiempo_entra");
    const campo_salida  = document.getElementById("tiempo_salida");
    // Mostrar mensaje 
    const mensaje = document.getElementById("floatingMessage");
    mensaje.style.display = "block"; 

    let IN_time = fechaVisual(fechaEntrada);
    let OUT_time = fechaVisual(fechaSalida);

    // Pasar fecha y hora entrada
    campo_entrada.innerHTML=IN_time;
    // Pasar fecha y hora salida
    campo_salida.innerHTML=OUT_time;
    
    const confirmar = document.getElementById("nextButton");
    const mensajeConfirmacion = document.getElementById("confirmacion");

    confirmar.addEventListener("click", function (event) {
        mensaje.style.display = "none";   
        mensajeConfirmacion.style.display = "flex";        
        setTimeout(function() {
            mensajeConfirmacion.style.display = "none";
        }, 5000); 
    })


});


