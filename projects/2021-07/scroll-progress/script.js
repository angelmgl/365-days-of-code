const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

const percent = document.getElementById("percent");
const progressBar = document.getElementById("progressBar");

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + "%";
    percent.textContent = `Page Scrolled ${parseInt(progress)}%`;
}