var hamburguer = document.querySelector(".hamburguer a");
var navUL = document.querySelector("nav ul");

hamburguer.addEventListener("click", function(){
    navUL.classList.toggle("visible");
});