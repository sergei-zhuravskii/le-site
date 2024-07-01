
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(makeSlider, 4000);

function makeSlider() {
  slides[currentSlide].classList.remove('slide-visible');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('slide-visible');
}
