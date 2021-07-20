function clock() {
    let $hour = document.getElementById('hour');
    let $minutes = document.getElementById('minutes');
    let $seconds = document.getElementById('seconds');
    let $ampm = document.getElementById('ampm');

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let prefix = 'AM';

    if(hour > 12) {
        hour -= 12;
        prefix = 'PM'
    }

    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    $hour.textContent = hour;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
    $ampm.textContent = prefix;
}

let interval = setInterval(clock, 1000);