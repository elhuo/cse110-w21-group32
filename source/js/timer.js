// Main timer component:
//    variable that keeps track of time elapsed
//    Function that changes the static html page (to be in sync with the actual timer)
//    reset function, input time in minutes to count down
//    when timer is finished, call method in controller (tbd)

// true - timer is on; false - timer is off
let start = false

// duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min
let duration = 25

// current time remaining on timer cycle - may be merged with duration
let timeRemaining

// starts timer
function startCountdown() {
  start = true;
}

// ends timer
function stopCountdown() {
  start = false;
}

// sets duration (given in minutes)
function setCycle(mins) {
  duration = mins
}

// if timeRemaining == 0
//    call changeCycles() in controller

// something something setInterval
// https://www.w3schools.com/howto/howto_js_countdown.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp
