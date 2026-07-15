const menu = document.querySelector(".menu-icon");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {

    navigation.classList.toggle("show-menu");

    if (navigation.classList.contains("show-menu")) {
        menu.innerHTML = "✕";
    } else {
        menu.innerHTML = "☰";
    }

});

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("show-menu");
        menu.innerHTML = "☰";

    });

});

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 30) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});
