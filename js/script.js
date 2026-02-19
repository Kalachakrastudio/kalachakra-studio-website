document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");

  if (!hamburger || !nav) return;

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

});
