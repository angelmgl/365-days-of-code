const score = document.getElementById("score");
const timeleft = document.getElementById("time");

const ball = document.querySelector(".ball");
const playground = document.querySelector(".playground");

const popup = document.querySelector(".popup");
const text = document.getElementById("popup-text");
const reload = document.getElementById("reload");

let firstTouch = true;
let points = 0;
let time = 60;

ball.addEventListener("click", ballGame);

function ballGame() {
    let posLeft = Math.floor(Math.random() * playground.clientWidth);
    let posTop = Math.floor(Math.random() * playground.clientHeight);
    points++;

    ball.style.left = `${posLeft < 35 ? posLeft : posLeft - 35}px`;
    ball.style.top = `${posTop < 35 ? posTop : posTop - 35}px`;
    score.textContent = points;

    if(firstTouch) {
        timer();
        firstTouch = false;
    }
}

function timer() {
    setInterval(() => {
        if(time >= 1) {
            time--;
            timeleft.textContent = time;
        }
    
        if (time == 0) {
            popup.style.display = "block";
            text.textContent = `Time over, you get ${points} points!`;
            ball.removeEventListener("click", ballGame);
        }
    }, 1000);
}

reload.addEventListener("click", () => {
    location.reload();
    return false;
});
