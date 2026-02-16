window.onload = function(){

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");

if(!hamburger || !navMenu || !closeBtn){
    console.log("Menu elements not found");
    return;
}

/* OPEN MENU */
hamburger.onclick = function(){
    navMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
};

/* CLOSE MENU */
function closeMenu(){
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closeMenu;
overlay.onclick = closeMenu;

/* CLOSE WHEN LINK CLICKED */
console.log("JS Loaded");

});

};
