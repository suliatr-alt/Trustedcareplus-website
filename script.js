window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {
        header.style.background = "#071b31";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "#0B2744";
        header.style.boxShadow = "none";
    }

});
// ===== Mobile Menu =====

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});
