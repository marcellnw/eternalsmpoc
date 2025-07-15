// Toggle Sidebar Menu
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Slider Functionality
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const cards = document.querySelectorAll(".character-info .card");

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  cards.forEach((card, i) => {
    card.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Inisialisasi awal
document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);

  // Animasi masuk untuk logo dan teks hero
  const logo = document.querySelector(".eternal-logo");
  const heroText = document.querySelector(".hero h1");
  const heroDesc = document.querySelector(".hero p");

  logo.classList.add("animate-in");
  heroText.classList.add("fade-slide-up");
  heroDesc.classList.add("fade-slide-up");
});
