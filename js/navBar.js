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

// evento para cambiar el estado de la barra
window.addEventListener('scroll', function () {
    const navBar = document.getElementById("myTopnav");

    if (window.scrollY > 0){
        navBar.classList.add('solid');
    } else {
        navBar.classList.remove('solid');
    }
})


// Evento para el menu hamburguesa
const menuHamburguesa = document.getElementById('menu');

menuHamburguesa.addEventListener('click', function() {
    menu();
})
