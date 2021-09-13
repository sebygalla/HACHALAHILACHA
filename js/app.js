/* Menu desplegable*/

const navToggle = document.querySelector('.toggle');
const navEnlace = document.querySelector('.lista-enlaces');

navToggle.addEventListener("click", () => {
    navEnlace.classList.toggle("lista-enlaces_visible");
});



/*Parallax*/

window.onload = () => {
    let image = document.querySelector('.img_nosotros');


    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;

        image.style.backgroundPositionY = `-${scroll/3}px`
    })



}