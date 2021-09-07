/* Menu desplegable*/

const navToggle = document.querySelector('.toggle');
const navEnlace = document.querySelector('.lista-enlaces');

navToggle.addEventListener("click", () => {
    navEnlace.classList.toggle("lista-enlaces_visible");
});