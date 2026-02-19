/*const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});*/

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const links = document.querySelectorAll(".nav a");

  // Safety check (prevents null errors)
  if (!hamburger || !nav) {
    console.error("Hamburger or Nav not found in HTML");
    return;
  }

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });

});

