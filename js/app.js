/* MENU DESPLEGABLE*/

const navToggle = document.querySelector('.toggle');
const navEnlace = document.querySelector('.lista-enlaces');
const links = document.getElementById('barra');



navToggle.addEventListener("click", () => {
    navEnlace.classList.toggle("lista-enlaces_visible");
});


/*al hacer click sobre un enlace se dirije a el y desaparece la lista de enlaces)*/

links.addEventListener('click', ()=>{
    navEnlace.classList.remove("lista-enlaces_visible");
    
})





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

/*ir arriba*/

/*obtengo el elemento */
const btn_arriba = document.getElementById('btn_arriba');



btn_arriba.addEventListener('click', () => {
    window.scrollTo(0,0) 


})

window.onscroll=()=>{
 
    add_btn_arriba()
    }

    const add_btn_arriba = () => {
        
        if(window.scrollY <= 300) {
        btn_arriba.classList.remove("btn-arriba-on")}
        else { btn_arriba.classList.add("btn-arriba-on")
        }
    }

   




