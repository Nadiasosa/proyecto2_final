// SOLO POR PRUEBAS
function Porcentaje() {
    // Funcion para obtener el "porcentaje" del elemento OVERLAY
    // Obtener tamaño
    const width = document.getElementById("myNav").offsetWidth;
    // Cont padre
    const containerWidth = document.body.offsetWidth;
    // calcular porcentaje
    const overPercentage = (width /containerWidth) * 100;
    
    return console.log(overPercentage + "%");
}

