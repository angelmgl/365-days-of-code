const score =  document.getElementById("score");
const ball = document.querySelector(".ball");
const playground = document.querySelector(".playground");

let points = 0;

ball.addEventListener("click", (e) => {
    let posLeft = Math.floor(Math.random() * playground.clientWidth);
    let posTop = Math.floor(Math.random() * playground.clientHeight);
    points++;

    ball.style.left = `${posLeft < 35 ? posLeft : posLeft - 35}px`;
    ball.style.top = `${posTop < 35 ? posTop : posTop - 35}px`;
    score.textContent = points;
});