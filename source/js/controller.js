/**
 * controller.js is a javascript file that implements the cycle logic of
 * the pomodoro timer.
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
var sBreakTime = 4;
/** (15 - 1) minutes to pass in to startCountdown for long break cycle. */
var lBreakTime = 14;

/** True if timer should automatically start on transition. False by default. */
var autoStart = false;

// Constants used to reference each of the cycle tabs
const pomoTab = document.getElementById("pomo-tab");
const sBreakTab = document.getElementById("short-break-tab");
const lBreakTab = document.getElementById("long-break-tab");

/**
 * @description Function that is called when the start button is pressed.
 * Calls startCountdown in timer.js depending on which cycle the timer is
 * currently in and disables the start button after it is pressed.
 */
function startTimer() {
  switch (cycle) {
    case 0:
      startCountdown(pomoTime);
      break;

    case 1:
      startCountdown(sBreakTime);
      break;

    case 2:
      startCountdown(lBreakTime);
      break;

    default:
      reset();
      return;
  }

  disableStart();
}

/**
 * @description Function that is called when the stop button is pressed.
 * Calls stopCountdown in timer.js, which resets the current cycle.
 */
function stopTimer() {
  stopCountdown();
  enableStart();
}

/**
 * @description Function that is called to handle the shift in pomodoro cycles when
 * the countdown reaches 0. Calls setCycle to set up the next cycle depending on what
 * cycle the timer is currently on. Also plays a sound to signify the end of current cycle.
 */
function changeCycles() {
  pomoSound.play();
  switch (cycle) {
    /** If current cycle is pomo, increment numPomos and transition to break */
    case 0:
      setNumPomos(numPomos + 1);

      /** If numPomos is not divisible by 4, go to short break */
      if (numPomos % 4 != 0)
        setCycle(1);
      /** else, go to long break */
      else
        setCycle(2);

      break;

    /** When short break ends, return to pomo cycle. */
    case 1:
      setCycle(0);
      break;

    /** 
     * When long break ends, return to pomo cycle.
     * Additionally clear "ice cube" counter at end of long break.
     */
    case 2:
      setCycle(0);
      clearCubes();
      break;

    /** In the case of invalid cycle value, reset timer to default state. */
    default:
      reset();
  }
}

/**
 * @description Function that clears "ice cubes" that count the number of pomos (0-4).
 */
function clearCubes() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("pomo-count-" + i).classList.remove("pomo-counted");
  }
}

/**
 * @description Function that clears pomo count, both "ice-cube" indicators and actual values.
 */
function reset() {
  setCycle(0);
  setNumPomos(0);
}

/**
 * @description Sets the current cycle and changes style to match
 * @param {number} cycle_ - The value to set for the current cycle. 
 */
function setCycle(cycle_) {
  cycle = cycle_;

  startTimer();

  if (autoStart == false)
    stopTimer();

  changeStyle();
}

/**
 * @description Sets the current number of Pomos and fills in appropriate "ice cubes"
 * @param {number} numPomos_ - The value to set for the current number of Pomos. 
 */
function setNumPomos(numPomos_) {
  numPomos = numPomos_;
  clearCubes();

  let numCubes = 0;

  /** Determines the number of cubes displayed by the pomo counter */
  if (numPomos > 0) {
    if (numPomos % 4 == 0)
      numCubes = 4;
    else
      numCubes = numPomos % 4;
  }

  /** Updates the ice cube pomo counter */
  for (let i = 1; i <= numCubes; i++) {
    document.getElementById("pomo-count-" + i).classList.add("pomo-counted");
  }

  /** Update the counter of number of completed pomos */
  document.getElementById('completed-pomos').innerText = "Pomos: " + numPomos;
}

/**
 * @description Function that changes the page's CSS according to the current cycle.
 * Specifically, borders of the text for the current cycle and the page color.
 * Called at the end of the changeCycles function.
 */
function changeStyle() {
  clearStyles();

  switch (cycle) {
    /** Change page style to fit pomo cycle. */
    case 0:
      pomoTab.classList.add("tab-active");
      break;

    /** Change page style to fit short break cycle. */
    case 1:
      document.body.classList.add("short-break-color");
      sBreakTab.classList.add("tab-active");
      break;

    /** Change page style to fit long break cycle. */
    case 2:
      document.body.classList.add("long-break-color");
      lBreakTab.classList.add("tab-active");
      break;

    /** Reset timer if set cycle is invalid */
    default:
      reset();
      break;
  }
}

/**
 * @description Helper function that clears all styling classes from tabs and the document body
 * */
function clearStyles() {
  pomoTab.classList.remove("tab-active");
  sBreakTab.classList.remove("tab-active");
  lBreakTab.classList.remove("tab-active");

  document.body.classList.remove("short-break-color");
  document.body.classList.remove("long-break-color");
}

/**
 * @description Returns the current cycle.
 * Used for testing purposes.
 * @returns {number} cycle - The current cycle. 
 */
function getCycle() {
  return cycle;
}

/**
 * @description Returns the current number of Pomos.
 * Used for testing purposes.
 * @returns {number} numPomos - The current number of Pomos. 
 */
function getNumPomos() {
  return numPomos;
}

/** Export functions for test file */
exports.setCycle = setCycle;
exports.getCycle = getCycle;
exports.setNumPomos = setNumPomos;
exports.getNumPomos = getNumPomos;
exports.startTimer = startTimer;
exports.stopTimer = stopTimer;
exports.changeCycles = changeCycles;
exports.changeStyle = changeStyle;
exports.reset = reset;
exports.clearCubes = clearCubes;
exports.clearStyles = clearStyles;
