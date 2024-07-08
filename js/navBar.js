function menu(){
    // Funcion al dar click al boton
    girar();
    myLinks();
    anchors();
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
    if (f.className === "display") {
        f.className += " myLinks";
    } else {
        f.className = "display";
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

    if(configitems.className === "display"){
        configitems.className = "myLinks";
    } else {
        configitems.className = "display";
    }
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
    girar1();
    desplegar();
})

// Apartado de interacciones DOM (Pantalla de carga, cambiar tamaño de letra y tema de la pagina).

var loader = document.getElementById("contLoader");
function loading(){
    console.log("función loading funciona bien.");
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


function cambiarTema(tema){
    var body = document.body;

    body.classList.remove('oscuro', 'claro', 'dark-scheme');

    body.classList.add(tema);
}

document.getElementById('oscuro').addEventListener('change' , function() {
    cambiarTema('oscuro');
});

document.getElementById('claro').addEventListener('change' , function() {
    cambiarTema('claro');
});

document.getElementById('navegador').addEventListener('change', function(){
    cambiarTema('dark-scheme');
});
