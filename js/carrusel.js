let slidePosition = 0;
const slides = document.getElementsByClassName('slides')[0];
const slidesLength = slides.children.length;

function nextSlide() {
  if (slidePosition === slidesLength - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides.style.transform = `translateX(-${slidePosition * 100}%)`;
}

setInterval(nextSlide, 5000);