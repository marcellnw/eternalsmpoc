let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === n) slide.classList.add("active");
  });
}

function moveSlide(step) {
  slideIndex += step;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(slideIndex);
