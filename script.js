// === ELEMENT REFERENSI ===
const slides = document.querySelectorAll(".slide");
const cards = document.querySelectorAll(".card");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const sidebarLinks = sidebar.querySelectorAll("a");

let currentSlide = 0;

// === FUNGSI SLIDER ===
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    cards[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
  playClick2();
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
  playClick2();
}

// === MENU SIDEBAR ===
function toggleMenu() {
  sidebar.classList.toggle("active");
  document.body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "auto";
  playClick();
}

// Tutup sidebar setelah klik link
sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// === SUARA KLIK ===
const clickSound = new Audio("https://github.com/marcellnw/eternalsmpoc/blob/main/click.m4a?raw=true");
const clickSound2 = new Audio("https://github.com/marcellnw/eternalsmpoc/blob/main/Click2.m4a?raw=true");

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}
function playClick2() {
  clickSound2.currentTime = 0;
  clickSound2.play();
}

// === INISIALISASI ===
document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});
