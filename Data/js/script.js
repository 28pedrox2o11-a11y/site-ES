const slides = document.querySelectorAll(".slide");

const btnAnterior =
document.querySelector(".anterior");

const btnProximo =
document.querySelector(".proximo");

let slideAtual = 0;

/* MOSTRAR SLIDE */

function mostrarSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("ativo");
    });

    slides[index].classList.add("ativo");

}

/* PRÓXIMO */

btnProximo.addEventListener("click", (e) => {

    e.stopPropagation();
    e.preventDefault();

    slideAtual++;

    if(slideAtual >= slides.length){
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);

});

/* ANTERIOR */

btnAnterior.addEventListener("click", (e) => {

    e.stopPropagation();
    e.preventDefault();

    slideAtual--;

    if(slideAtual < 0){
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);

});