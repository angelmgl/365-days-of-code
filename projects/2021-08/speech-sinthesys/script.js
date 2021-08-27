const PLAY = document.getElementById('play');
const BTN = document.getElementById('btn-play');

function leer() {
    let texto = document.getElementById("texto").value;
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

function pausar() {
    if(speechSynthesis.paused) {
        speechSynthesis.resume();
        PLAY.classList.replace('fa-play', 'fa-pause');
        BTN.classList.replace('play', 'pause');
    } else {
        speechSynthesis.pause();
        PLAY.classList.replace('fa-pause', 'fa-play');
        BTN.classList.replace('pause', 'play');
    }
}

function cancelar() {
    speechSynthesis.cancel();
    document.getElementById("texto").value = "";
}