const before = document.getElementById("before");
const next = document.getElementById("next");
const carousel = document.getElementById("carousel");
const carouselImages = document.querySelectorAll(".image");
let contador = 0;

next.addEventListener("click",(e)=>{
    let carouselWidth = carousel.clientWidth;
    carousel.scrollLeft += carouselWidth;
    if(contador < carouselImages.length){
        contador++;
    }
    if(contador == carouselImages.length){
        carousel.scrollLeft = carousel.clientWidth - (carouselImages.length * carousel.clientWidth);
        contador = 0;
    }
})

before.addEventListener("click",()=>{
    let carouselWidth = carousel.clientWidth;
    carousel.scrollLeft -= carouselWidth;
    if(contador > 1 ){
        contador--;
    }
})