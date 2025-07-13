// Toggle Sidebar Menu function toggleMenu() { const sidebar = document.getElementById("sidebar"); sidebar.classList.toggle("active"); playClick(); }

// Sound Click const clickSound1 = new Audio("assets/sounds/click.m4a"); const clickSound2 = new Audio("assets/sounds/Click2.m4a"); function playClick() { clickSound1.currentTime = 0; clickSound1.play(); }

// Character Slider Logic let currentSlide = 0; const slides = document.querySelectorAll(".slide"); const cards = document.querySelectorAll(".card");

function showSlide(index) { if (!slides.length || !cards.length) return; slides.forEach((slide, i) => { slide.classList.remove("active"); cards[i].classList.remove("active"); if (i === index) { slide.classList.add("active"); cards[i].classList.add("active"); } }); }

function nextSlide() { if (!slides.length) return; currentSlide = (currentSlide + 1) % slides.length; showSlide(currentSlide); clickSound2.currentTime = 0; clickSound2.play(); }

function prevSlide() { if (!slides.length) return; currentSlide = (currentSlide - 1 + slides.length) % slides.length; showSlide(currentSlide); clickSound2.currentTime = 0; clickSound2.play(); }

// Initial Show window.addEventListener("DOMContentLoaded", () => { showSlide(currentSlide); });

