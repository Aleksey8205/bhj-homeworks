const prevSlide = document.querySelector(".slider__arrow_prev");
const nextSlide = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const sliderDot = document.querySelectorAll(".slider__dot");

let currentIndex = 0;

function showSlide(index) {
  slider.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("slider__item_active");
    } else {
      slide.classList.remove("slider__item_active");
    }
  });

  sliderDot.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("slider__dot_active");
    } else {
      dot.classList.remove("slider__dot_active");
    }
  });
}

showSlide(currentIndex);

nextSlide.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slider.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

prevSlide.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.length - 1;
  }
  showSlide(currentIndex);
});
