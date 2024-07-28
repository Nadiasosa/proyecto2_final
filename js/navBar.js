// Variables
const localTheme = localStorage.getItem('theme') || temaNavegador();
const loader = document.getElementById("contLoader");

function temaNavegador() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
}
function loading(){
    setTimeout(timer, 0.8);
}
function timer(){
    loader.classList.add("ocultar");
}
window.addEventListener("load", loading);
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
// Funcion para el menu de  configuraciones.
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
    let width = Porcentaje();
    if(width === 0){
        document.getElementById("myNav").style.width = "100%";
    } else if (width === 100){
        document.getElementById("myNav").style.width = "0%";
    }
}
// Funcion para obtener el "porcentaje" del elemento OVERLAY
function Porcentaje() {
    // Obtener tamaño
    const width = document.getElementById("myNav").offsetWidth;
    // Cont padre
    const containerWidth = document.body.offsetWidth;
    // calcular porcentaje
    const overPercentage = (width /containerWidth) * 100;
    return overPercentage;
}
const navBar = document.getElementById("menu").addEventListener("click", function () {
    menu();
})
document.getElementById("config").addEventListener("click", function (){
    desplegarconfig();
})
// evento para cambiar el estado de la barra
window.addEventListener('scroll', function () {
    const navBar = document.getElementById("myTopnav");

    if (window.scrollY > 0){
        navBar.classList.add('solid');
    } else {
        navBar.classList.remove('solid');
    }
})
//  
// Función  para el ejecutar una vez finalizado la carda del DOM (cambiar tamaño de letra y tema de la pagina).
document.addEventListener("DOMContentLoaded", function (event) {
    // Variables
    var body = document.body;
    var config = document.getElementById("config");
    var btnOscuro = document.getElementById("btnSettingsOscuro");
    var btnBlanco = document.getElementById("btnSettingsBlanco");
    var btnBrowser = document.getElementById("navegador");
    var btnLight = document.getElementById("claro");
    var btnDark = document.getElementById("oscuro");

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

    // Eventos para los botones
    btnBrowser.addEventListener("click", function () {
        cambiarTema(temaNavegador());
        console.log("TEMA browser")
    });
    btnDark.addEventListener('click', function () {
        cambiarTema("oscuro");
        console.log("TEMA dark")
    });
    btnLight.addEventListener("click", function () {
        cambiarTema("claro");
        console.log("TEMA light")
    });
});
