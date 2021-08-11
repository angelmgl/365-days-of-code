VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
})

let list = document.querySelectorAll(".sci li");
let bg = document.querySelector(".container");

list.forEach(item => {
    item.addEventListener("mouseenter", e => {
        let color = e.target.getAttribute("data-color");

        bg.style.backgroundColor = color;
    });
});

list.forEach(item => {
    item.addEventListener("mouseleave", e => {
        bg.style.backgroundColor = "#fff";
    });
});