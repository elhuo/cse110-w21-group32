var start_time = 25;
var countDownDate = new Date()

// button is used to disable the buttons 
const button = document.querySelectorAll("button"); // 0 is help, 1 is start, 2 is stop

// References to start and stop buttons
var start = document.getElementById("start-button");
var stop = document.getElementById("stop-button");


// POMO GO
start.addEventListener("click", startTimer);

// POMO STAHP
stop.addEventListener("click", stopTime);

function startTimer() {
    button[1].disabled = true;
    var startTime = Date.now();
    //console.log(now);
    let mins = start_time;
    let secs = 0;
    
    timerBegins = setInterval(displayTime,1000);
}

function displayTime() {
    console.log("oi");
}

function stopTime() {
    clearInterval(timerBegins);
    button[1].disabled = false;
}