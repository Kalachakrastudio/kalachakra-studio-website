const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu(){
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

/* Slideshow */

const slides = document.querySelectorAll(".slides img");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4500);

/* Scroll Reveal */

const cards = document.querySelectorAll(".card");

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;
  cards.forEach(card=>{
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
