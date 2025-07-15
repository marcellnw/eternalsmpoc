// Toggle Sidebar Menu function toggleMenu() { const sidebar = document.getElementById("sidebar"); sidebar.classList.toggle("active"); }

// Character Slider let currentSlide = 0; const slides = document.querySelectorAll(".slide"); const cards = document.querySelectorAll(".card");

function showSlide(index) { slides.forEach((slide, i) => { slide.classList.remove("active"); cards[i].classList.remove("active"); if (i === index) { slide.classList.add("active"); cards[i].classList.add("active"); } }); currentSlide = index; }

function nextSlide() { let nextIndex = (currentSlide + 1) % slides.length; showSlide(nextIndex); }

function prevSlide() { let prevIndex = (currentSlide - 1 + slides.length) % slides.length; showSlide(prevIndex); }

// Autoplay Slides (optional) setInterval(() => { nextSlide(); }, 8000);

