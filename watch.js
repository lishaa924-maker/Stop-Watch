let sec = 0;
let run;
let on = true;

let timer = document.getElementById("timer");
let screen = document.getElementById("screen");
let power = document.getElementById("power");

function startTimer() {
    if (!on || run) return;

    run = setInterval(function () {
        sec++;
        timer.textContent = sec;
    }, 1000);
}

function resetTimer(){
    clearInterval(run);
    run = null;
    sec = 0;
    timer.textContent = "00:00:00";
}