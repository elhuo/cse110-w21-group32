/**
 * controller.js is a javascript file that implements the cycle logic of
 * the pomodoro timer.
 * It contains four methods: startTimer, stopTimer, changeCycles, and changeStyle.
 */

/** 
 * Tracks the type of cycle that the timer is in.
 * cycle = 0: the timer is in the pomo cycle (25 min)
 * cycle = 1: the timer is in the short break cycle (5 min)
 * cycle = 2: the timer is in the long break cycle (15 min)
 * cycle = 3: the timer is stopped
 */
let cycle = 0;

/**
 * Tracks the number of completed pomos to know when to long break.
 * numPomos < 4: the break cycle will be a short break
 * numPomos = 4: the break cycle will be a long break
 */
let numPomos = 0;

/** (25 - 1) minutes to pass in to startCountdown for pomodoro cycle. */
let pomoTime = 24;
/** (5 - 1) minutes to pass in to startCountdown for short break cycle. */
const sBreakTime = 4;
/** (15 - 1) minutes to pass in to startCountdown for long break cycle. */
const lBreakTime = 14;

/**
 * @description Function that is called when the start button is pressed.
 * Handles setup for the controller before calling startCountdown in timer.js
 * to start the first pomodoro cycle. Changes cycle to pomo cycle.
 */
function startTimer() {
    if (cycle == 0){
        startCountdown(pomoTime);
    }
    else if (cycle == 1){
        startCountdown(sBreakTime);
    }
    else if (cycle == 2){
        startCountdown(lBreakTime);
    }
    else if (cycle == 3){
        cycle = 0;
        startCountdown(pomoTime);
    }
    changeStyle();
}

/**
 * @description Function that is called when the stop button is pressed.
 * calls stopCountdown in timer.js. The timer stays in the current stage
 */
function stopTimer() {
    cycle = 3;
    numPomos = 0;
    changeStyle();
    stopCountdown();
}

/**
 * @description Function that is called when the user doesn't wish to go to next stage.
 * Resets controller variables to default and resets the countdown by calling
 * stopCountdown in timer.js. Changes cycle to the stopped cycle.
 */

function changeCyclesController(){
    if (confirm("Do you wish to continue?")){
        document.getElementById("stop-button").disabled = false; 
        document.getElementById("start-button").disabled = true;
        changeCycles();
    }
    else{
        cycle = 3;
        numPomos = 0;
        document.getElementById("stop-button").disabled = true;   // Disable stop button
        document.getElementById("start-button").disabled = false;
        stopCountdown();
        changeStyle();
    }
}
/**
 * @description Function that is called to handle the shift in pomodoro cycles when
 * the countdown reaches 0. Handles each cycle case and then
 * calls changeStyle to change the CSS to match the new cycle.
 */
function changeCycles() {

    /** If current cycle is pomo, increment numPomos. */
    if (cycle == 0) numPomos++;

    /** 
     * If current cycle is pomo and 4 pomos haven't occurred yet,
     * set cycle to short break.
     */
    if (cycle == 0 && numPomos < 4) {
        cycle = 1;
        startCountdown(sBreakTime);
    }

    /**
     * If current cycle is pomo and 4 pomos have occurred,
     * set cycle to long break and reset numPomos.
     */
    else if (cycle == 0 && numPomos == 4) {
        numPomos = 0;
        cycle = 2;
        startCountdown(lBreakTime);
    }

    /** When short and long breaks end, return to pomo cycle. */
    else if (cycle == 1) {
        cycle = 0;
        startCountdown(pomoTime);
    }
    else if (cycle == 2) {
        cycle = 0;
        startCountdown(pomoTime);
    }

    /** Change page style according to new cycle. */
    changeStyle();
}

/**
 * @description Function that changes the page's CSS according to the current cycle.
 * Specifically, borders the text for the current cycle and changes page color.
 * Called at the end of the changeCycles function.
 */
function changeStyle() {
    /** Change page style to fit pomo cycle. */
    if (cycle == 0) {
        document.body.style.backgroundColor = "#0087bd";
        document.getElementById("pomo-tab").style.border = "medium solid";
        document.getElementById("pomo-tab").style.borderBottom = "none";
        document.getElementById("short-break-tab").style.border = "none";
        document.getElementById("long-break-tab").style.border = "none";
    }
    /** Change page style to fit short break cycle. */
    if (cycle == 1) {
        document.body.style.backgroundColor = "#333399";
        document.getElementById("pomo-tab").style.border = "none";
        document.getElementById("short-break-tab").style.border = "medium solid";
        document.getElementById("short-break-tab").style.borderBottom = "none";
        document.getElementById("long-break-tab").style.border = "none";
    }
    /** Change page style to fit long break cycle. */
    if (cycle == 2) {
        document.body.style.backgroundColor = "#663399";
        document.getElementById("pomo-tab").style.border = "none";
        document.getElementById("short-break-tab").style.border = "none";
        document.getElementById("long-break-tab").style.border = "medium solid";
        document.getElementById("long-break-tab").style.borderBottom = "none";
    }
    /** Change page style to fit timer stopped. */
    if (cycle == 3) {
        document.body.style.backgroundColor = "#0087bd";
        document.getElementById("pomo-tab").style.border = "medium solid";
        document.getElementById("pomo-tab").style.borderBottom = "none";
        document.getElementById("short-break-tab").style.border = "medium solid";
        document.getElementById("short-break-tab").style.borderBottom = "none";
        document.getElementById("long-break-tab").style.border = "medium solid";
        document.getElementById("long-break-tab").style.borderBottom = "none";
    }
}

/**
 * @description Sets the current cycle
 * @param {int} cycle_ - The value to set for the current cycle. 
 */
function setCycle(cycle_) {
    cycle = cycle_;
}

/**
 * @description Returns the current cycle
 * @returns {int} cycle - The current cycle. 
 */
function getCycle() {
    return cycle;
}

/**
 * @description Sets the current number of Pomos 
 * @param {int} numPomos_ - The value to set for the current number of Pomos. 
 */
function setNumPomos(numPomos_) {
    numPomos = numPomos_;
}

/**
 * @description Returns the current number of Pomos 
 * @returns {int} numPomos - The current number of Pomos. 
 */
function getNumPomos() {
    return numPomos;
}

/** export functions and varialbes for test file */
exports.setCycle = setCycle;
exports.getCycle = getCycle;
exports.setNumPomos = setNumPomos;
exports.getNumPomos = getNumPomos;
exports.startTimer = startTimer;
exports.stopTimer = stopTimer;
exports.changeCycles = changeCycles;
exports.changeStyle = changeStyle;
exports.changeCyclesController = changeCyclesController;