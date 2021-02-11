// tracks the type of cycle
// 0 = pomo, 1 = short break, 2 = long break
var cycle = 0;

// tracks the number of completed pomos to know when to long break
// long break when numPomos = 4
var numPomos = 0;

// value is 1 when timer is running, 0 when stopped
var timerRunning = 0;

// probably called by the buttons.js event listener for start
function startTimer() {
    cycle = 0;
    numPomos = 0;
    timerRunning = 1;
    // call timer start func
}

// probably called by the buttons.js event listener for stop
function stopTimer() {
    cycle = 0;
    numPomos = 0;
    timerRunning = 0;
    // call timer stop func 
}

// when timer countdown ends, call this function
function changeCycles() {
    // if current cycle is pomo, increment numPomos
    if (cycle == 0) numPomos++;
    // if current cycle is pomo and 4 pomos haven't occurred yet,
    // set cycle to short break
    if (cycle == 0 && numPomos < 4) {
        cycle = 1;
        // pass start time or cycle type to timer? timer("5:00")
    }
    // if current cycle is pomo and 4 pomos have occurred,
    // set cycle to long break and reset numPomos
    else if (cycle == 0 && numPomos == 4) {
        numPomos = 0;
        cycle = 2;
        // pass start time or cycle type to timer? timer("15:00")
    }
    // after short and long breaks, return to pomo cycle
    else if (cycle == 1) {
        cycle = 0;
        // pass start time or cycle type to timer? timer("25:00")
    }
    else if (cycle == 2) {
        cycle = 0;
        // pass start time or cycle type to timer? timer("25:00")
    }
}
