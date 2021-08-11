const popup = document.querySelector(".popup");
const closeBtn = document.getElementById("close");

window.onload = e => {
    setTimeout(() => {
        popup.classList.add("active");
    }, 1000);
}

closeBtn.addEventListener("click", e => {
    popup.classList.remove("active");
})