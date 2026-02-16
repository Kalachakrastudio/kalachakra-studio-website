// MOBILE MENU
document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // HERO SLIDER
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index++;
    if (index >= slides.length) index = 0;
  }

  if (slides.length > 0) {
    showSlides();
    setInterval(showSlides, 4000);
  }

});
