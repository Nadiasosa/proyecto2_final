function menu(){
    // Funcion al dar click al boton

    let width = Porcentaje();

    if (width === 0){
        girar();
        myLinks();
        anchors();
    }
}

function girar(){
    var menu = document.getElementById("menu");
    if (menu.className === "hamburger-menu") {
        menu.className += " menu-rotate";
    } else {
        menu.className = "hamburger-menu";
    }
}

function myLinks() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function anchors(){
    var f = document.getElementById("myLinksAnchor");
        if (f.className === "displayA") {
            f.className += " myLinks";
        } else {
            f.className = "displayA";
        }
}

function desplegarconfig(){
    var g = document.getElementById("myLinksAnchor");
    // Es para que no esten los dos (navbar y config)
    if(g.className === "displayA"){        
        girar1();
        desplegar();
    }
}

function girar1(){
    let config = document.getElementById("config");

    if(config.className !== "giracion"){
        config.classList.remove("giracion","giracion1");
        config.classList.add("giracion");
    } else {
        config.classList.remove("giracion","giracion1");
        config.classList.add("giracion1")
    }

}

function desplegar(){
    let configitems = document.getElementById("config-items");
    let width = Porcentaje();
    console.log(width);
    if(width === 0){
        document.getElementById("myNav").style.width = "100%";
    } else if (width === 100){
        document.getElementById("myNav").style.width = "0%";
    }
}

// SOLO POR PRUEBAS
function Porcentaje() {
    // Funcion para obtener el "porcentaje" del elemento OVERLAY
    // Obtener tamaño
    const width = document.getElementById("myNav").offsetWidth;
    // Cont padre
    const containerWidth = document.body.offsetWidth;
    // calcular porcentaje
    const overPercentage = (width /containerWidth) * 100;
    
    return overPercentage;
}


// evento para cambiar el estado de la barra
window.addEventListener('scroll', function () {
    const navBar = document.getElementById("myTopnav");

    if (window.scrollY > 0){
        navBar.classList.add('solid');
    } else {
        navBar.classList.remove('solid');
    }
})

const navBar = document.getElementById("menu").addEventListener("click", function () {
    menu();
})

document.getElementById("config").addEventListener("click", function (){
    desplegarconfig();
})

// Apartado de interacciones DOM (Pantalla de carga, cambiar tamaño de letra y tema de la pagina).

var loader = document.getElementById("contLoader");
function loading(){
    setTimeout(timer, 0);
}

function timer(){
    loader.classList.add("ocultar");
}

window.addEventListener("load", loading);

    
    // // Función para cambiar el tamaño de la fuente
    function cambiarTamaño(tamaño) {
        // Obtener los elementos <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>
        const elementsToStyle = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, label');
    
        elementsToStyle.forEach(element => {
            // Verificar que el elemento no sea un <a>
            if (element.tagName.toLowerCase() !== 'a') {
                // Eliminar todas las clases de tamaño existentes
                element.classList.remove('texto-chico', 'texto-mediano', 'texto-grande', 'default');
                // Agregar la clase de tamaño deseada
                element.classList.add(tamaño);
            }
        });
    }

    // Event listeners para los botones tipo radio
    document.getElementById('tam-chico').addEventListener('change', function() {
        cambiarTamaño('texto-chico');
    });

    document.getElementById('tam-mediano').addEventListener('change', function() {
        cambiarTamaño('texto-mediano');
    });

    document.getElementById('tam-grande').addEventListener('change', function() {
        cambiarTamaño('texto-grande');
    });

    document.getElementById('default').addEventListener('change', function() {
        cambiarTamaño('default')
    })

// Nueva funcion para el control del cambio de tema. (SE agrega el guardar el tema en "LocalStorage" para mantenerlo entre paginas y proximas veces)
document.addEventListener("DOMContentLoaded", function (event) {
    // Variables
    var body = document.body;
    var config = document.getElementById("config");
    var btnOscuro = document.getElementById("btnSettingsOscuro");
    var btnBlanco = document.getElementById("btnSettingsBlanco");
    var btnBrowser = document.getElementById("navegador");
    var btnLight = document.getElementById("claro");
    var btnDark = document.getElementById("oscuro");
    var localTheme = localStorage.getItem('theme') || temaNavegador();
    
    // Inicialización del tema
    cambiarTema(localTheme);

    // Función para cambio de tema general
    function cambiarTema(tema) {
        console.log(body.firstElementChild.firstElementChild);
        config.style.backgroundColor = (tema === 'oscuro') ? "#2f2f2f" : "#f2f2f2";
        btnOscuro.style.display = (tema === 'oscuro') ? "none" : "block";
        btnBlanco.style.display = (tema === 'oscuro') ? "block" : "none";

        body.classList.remove('oscuro', 'claro');
        body.classList.add(tema);
        localStorage.setItem("theme", tema);
    }

    // Función para obtener el tema del navegador
    function temaNavegador() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
    }

    // Eventos para los botones
    btnBrowser.addEventListener("change", function () {
        cambiarTema(temaNavegador());
    });
    btnDark.addEventListener('change', function () {
        cambiarTema("oscuro");
    });
    btnLight.addEventListener("change", function () {
        cambiarTema("claro");
    });
});
