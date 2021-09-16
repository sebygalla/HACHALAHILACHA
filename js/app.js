/* MENU DESPLEGABLE*/

const navToggle = document.querySelector('.toggle');
const navEnlace = document.querySelector('.lista-enlaces');

navToggle.addEventListener("click", () => {
    navEnlace.classList.toggle("lista-enlaces_visible");
});



/*PARALLAX*/

/*Primer paso carga windows y luego ejecuta la funcion*/
window.onload = () => {
    /*crea la variable image*/
    let image = document.querySelector('.img_nosotros');

    /*agregamos a window el evento scroll y una funcion  la cual modifica estilos de css*/

    window.addEventListener('scroll', (e) => {
        let scroll = window.scrollY;

        image.style.backgroundPositionY = `-${scroll/3}px`
    })



}

