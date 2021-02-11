// import from timer.js

// tracks the type of cycle
// 0 = pomo, 1 = short break, 2 = long break
var cycle = 0;

// tracks the number of completed pomos to know when to long break
// long break when numPomos = 4
var numPomos = 0;

// value is 1 when timer is running, 0 when stopped
// might not need this
// var timerRunning = 0;

// probably called by the buttons.js event listener for start
function startTimer() {
    cycle = 0;
    numPomos = 0;
    changeStyle();
    // timerRunning = 1;
    // call timer start func, needs to pass in current cycle? ex. timer(cycle)
}

// probably called by the buttons.js event listener for stop
function stopTimer() {
    cycle = 0;
    numPomos = 0;
    changeStyle();
    // timerRunning = 0;
    // call timer stop func, needs to pass in current cycle? ex. timer(cycle)
}

// when timer countdown ends, call this function
export function changeCycles() {
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
    changeStyle();
}

// changes page style according to the current cycle
function changeStyle() {
    // change page style to fit pomo cycle
    if (cycle == 0) {
        document.body.style.backgroundColor = #0087bd;
        document.getElementById("pomo-tab").style.border = "medium solid";
        document.getElementById("short-break-tab").style.border = "none";
        document.getElementById("long-break-tab").style.border = "none";
    }
    // change page style to fit short break cycle
    if (cycle == 1) {
        document.body.style.backgroundColor = "blue";
        document.getElementById("pomo-tab").style.border = "none";
        document.getElementById("short-break-tab").style.border = "medium solid";
        document.getElementById("long-break-tab").style.border = "none";
    }
    // change page style to fit long break cycle
    if (cycle == 2) {
        document.body.style.backgroundColor = "purple";
        document.getElementById("pomo-tab").style.border = "none";
        document.getElementById("short-break-tab").style.border = "none";
        document.getElementById("long-break-tab").style.border = "medium solid";
    }
}
