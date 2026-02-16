document.addEventListener("DOMContentLoaded", function(){

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");

/* OPEN MENU */
hamburger.addEventListener("click", function(){
    navMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

/* CLOSE MENU */
function closeMenu(){
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

/* CLOSE WHEN CLICK LINK */
document.querySelectorAll(".nav-link").forEach(link=>{
    link.addEventListener("click", closeMenu);
});

/* SLIDESHOW */
const slides = document.querySelectorAll(".slides img");
let index = 0;

setInterval(()=>{
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
},4500);

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".card, .hero-content, .contact-form");

function reveal(){
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < trigger){
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

});
