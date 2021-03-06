const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", e => {
    prevSlide();
    updateCircleIndicator();
    resetTimer();
});

next.addEventListener("click", e => {
    nextSlide();
    updateCircleIndicator();
    resetTimer();
});

// create indicators
function circleIndicator() {
    for(let i = 0; i < slides.length; i++) {
        const span = document.createElement("SPAN");
        span.setAttribute("onclick", "indicateSlide(this)");
        span.id = i;

        if(i == 0) {
            span.className = "active";
        }

        indicator.appendChild(span);
    }
}
circleIndicator();

function indicateSlide(element) {
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for(let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function prevSlide() {
    if(index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if(index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function resetTimer() {
    // when click to indicator or controls button stop timer
    clearInterval(timer);
    // then started again timer
    timer = setInterval(autoplay, 4000);
}

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 5000);