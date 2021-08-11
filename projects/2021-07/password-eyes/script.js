const $pw = document.getElementById('password');
const $wrapper = document.getElementById('eye-wrapper');
const $open = document.getElementById('open');
const $close = document.getElementById('close');

let state = false;

function toggle() {
    if(state) {
        $pw.setAttribute('type', 'password');
        $wrapper.style.boxShadow = '0 0 0 0 #ffffff';
        $open.style.display = 'none';
        $close.style.display = 'block';

        state = false;
    } else {
        $pw.setAttribute('type', 'text');
        $wrapper.style.boxShadow = '0 0 0 290px #ffffff';
        $open.style.display = 'block';
        $close.style.display = 'none';

        state = true;
    }
}