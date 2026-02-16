const cursor=document.querySelector('.cursor');
const follower=document.querySelector('.cursor-follower');
const progress=document.querySelector('.scroll-progress');
const slides=document.querySelectorAll('.slides img');
const hamburger=document.getElementById('hamburger');
const nav=document.getElementById('nav-menu');
const closeBtn=document.getElementById('closeBtn');
const overlay=document.getElementById('menuOverlay');

let current=0;

/* Cursor */
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
follower.style.left=e.clientX-17+'px';
follower.style.top=e.clientY-17+'px';
});

/* Scroll Progress */
window.addEventListener('scroll',()=>{
let scrollTop=window.scrollY;
let height=document.body.scrollHeight-window.innerHeight;
progress.style.width=(scrollTop/height)*100+"%";
});

/* Slideshow */
function showSlide(){
slides.forEach(s=>s.classList.remove('active'));
slides[current].classList.add('active');
current=(current+1)%slides.length;
}
setInterval(showSlide,5000);

/* Mobile Menu */
hamburger.addEventListener('click',()=>{
nav.classList.toggle('active');
hamburger.classList.toggle('active');
});
