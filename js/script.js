document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const links = document.querySelectorAll("#nav-menu a");

  if (!hamburger || !nav) return;

  // Toggle menu
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close when clicking a link
  links.forEach(link => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  // Close when clicking anywhere outside
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }

});
