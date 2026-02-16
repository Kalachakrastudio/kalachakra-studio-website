// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// HERO SLIDESHOW
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000);
showSlide();
