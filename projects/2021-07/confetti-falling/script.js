const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const confettiCanvas = document.querySelector("#confetti-canvas");

btn.onclick = function() {
    popup.classList.add("active");
    confettiCanvas.classList.add("active");
}

close.onclick = function() {
    popup.classList.remove("active");
    confettiCanvas.classList.remove("active");
}

let confettiSettings = { target: "confetti-canvas" };
let confetti = new ConfettiGenerator(confettiSettings);
confetti.render();