/** true - timer is on; false - timer is off */
var start = false
/** duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min */
let duration;
/** stores the starting time of the timer */
var countdownStart = new Date().getTime();

let pageTitle = document.getElementById("title");
let countdownDisplay = document.getElementById("countdown");

/** @function
 * @description Updates the html timer display when timer is enabled
 * @name setInterval
 */
setInterval(() => {
  if (start) {
    countdown();
  }
}, 500);  // Will refresh every 500 ms: sometimes setInterval isn't exact and may skip a second

/**
 * @description Starts the countdown
 * Remember to subtract 1 minute (if you want a 25 min timer, set to 24)
 * @param {int} mins - The duration for the timer to run for. 
 */
function startCountdown(mins) {
  start = true;     // Enables timer
  duration = mins;  // Sets timer duration
  
  // Display initial countdown time
  countdownDisplay.innerText = ((duration) + ":" + "59").padStart(5, "0");
  // Set starting time of the timer
  countdownStart = new Date().getTime();
}

/**
 * @description Ends the countdown
 */
function stopCountdown() {
  start = false;    // Disables timer

  // Display total time of current stopped cycle
  countdownDisplay.innerText = ((duration + 1) + ":" + "00").padStart(5, "0");
  pageTitle.innerText = "Spl/ice Pomodoro";
}

/**
 * @description Updates the time left on the timer, by subtracting the time elapsed from the initial time
 */
function countdown() {
  // Calculate time elapsed from when countdown was started
  var timeElapsed = new Date().getTime() - countdownStart;

  // Calculate minutes and seconds from time elapsed
  var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  // If timer is over
  if (minutes > duration) {
    start = false;
    
    // Call stop function in controller
    changeCyclesController();
    return;
  }

  // Pad second and minute strings for display
  seconds = (59 - seconds).toString().padStart(2, "0");
  minutes = (duration - minutes).toString().padStart(2, "0");

  // Update the display
  countdownDisplay.innerText = minutes + ":" + seconds;

  // Update the title
  if (minutes == "00"){
    pageTitle.innerText = seconds + "s : Spl/ice Pomodoro";
  
  } else if (seconds == "59"){
    pageTitle.innerText = (parseInt(minutes)) + "m : Spl/ice Pomodoro";
  }
}

/**
 * Gets start, which is true when timer is running and false if not
 * @returns {boolean} start
 */
function getStart() {
  return start;
}

/**
 * Gets duration, the time of the current cycle
 * @returns {number} duration
 */
function getDuration() {
  return duration;
}

/**
 * Sets the current duration
 * @param {int} duration_ - The value to set for the duration. 
 */
function setDuration(duration_) {
  duration = duration_;
}

exports.startCountdown = startCountdown;
exports.stopCountdown = stopCountdown;
exports.countdown = countdown;
exports.getStart = getStart;
exports.setDuration = setDuration;
exports.getDuration = getDuration;