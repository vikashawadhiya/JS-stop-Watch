let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 1000);
}

function pauseStopwatch() {
    clearInterval(timer);
    updateDisplay(); 
}


function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateStopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
