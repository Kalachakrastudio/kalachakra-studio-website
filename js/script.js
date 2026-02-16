// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Slideshow
const slides = document.querySelectorAll('.slides img');
let current = 0;

function showSlide(){
    slides.forEach(slide => slide.classList.remove('active'));
    slides[current].classList.add('active');
    current = (current + 1) % slides.length;
}
setInterval(showSlide, 5000);

// Scroll Reveal
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add('active');
        }
    });
});
