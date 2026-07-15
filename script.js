// =========================
// MOBILE MENU
// =========================

const menuIcon = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
    navigation.classList.toggle("show-menu");
});

// =========================
// STICKY HEADER
// =========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// =========================
// SMOOTH BUTTON HOVER
// =========================

const buttons = document.querySelectorAll(".primary-btn, .secondary-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});
