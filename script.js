// 🔄 Slider Karakter
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const cards = document.querySelectorAll('.card');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// ⏳ Autoplay Slider (opsional)
setInterval(nextSlide, 8000);

// ☰ Toggle Menu Sidebar
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// 🌟 Efek Daun Fantasi Mengambang
document.addEventListener("DOMContentLoaded", () => {
  const leafCount = 30;
  for (let i = 0; i < leafCount; i++) {
    const leaf = document.createElement("div");
    leaf.className = "floating-leaf";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDelay = Math.random() * 5 + "s";
    leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
    document.body.appendChild(leaf);
  }
});
