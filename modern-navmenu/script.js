const menuItems = document.querySelectorAll(".list");
const nav = document.querySelector("nav");

menuItems.forEach(menu => {
    menu.addEventListener("mouseover", (e) => {
        const activeMenu = document.querySelector(".active");
        activeMenu.classList.remove("active");
        nav.style.width = "300px";

        menu.classList.add("active");
    });
});

menuItems.forEach(menu => {
    menu.addEventListener("click", (e) => {
        nav.style.width = "70px";
    });
});

menuItems.forEach(menu => {
    menu.addEventListener("mouseout", (e) => {
        nav.style.width = "70px";
    });
});