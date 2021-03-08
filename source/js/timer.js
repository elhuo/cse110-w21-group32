var start = false                           // true - timer is on; false - timer is off
let duration;                          // duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min
var countDownStart = new Date().getTime();  // stores the starting time of the timer

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
  start = true;                                   // Enables timer
  duration = (mins).toString().padStart(2, "0");  // Sets timer duration
  
  // Display initial countdown time
  document.getElementById("countdown").innerText = (duration) + ":" + "59";
  // Set starting time of the timer
  countDownStart = new Date().getTime();
}

/**
 * @description Ends the countdown
 */
function stopCountdown() {
  start = false;    // Disables timer
  let stopTime = (Number(duration)+1).toString().padStart(2, "0");
  // Display total time of current stopped cycle
  document.getElementById("countdown").innerText = (stopTime) + ":" + "00";   // Sets timer display to 00:00
  document.getElementById("title").innerText = "Spl/ice Pomodoro";
}

/**
 * @description Updates the time left on the timer, by subtracting the time elapsed from the initial time
 */
function countdown() {
  var d = new Date().getTime();          // Get current time
  var timeElapsed = d - countDownStart;  // Calculate time elapsed from when countdown was started

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
  document.getElementById("countdown").innerText = minutes + ":" + seconds;

  // Update the title
  if (minutes == "00"){
    document.getElementById("title").innerText = seconds + "s : Spl/ice Pomodoro";
  
  } else if (seconds == "59"){
    document.getElementById("title").innerText = (parseInt(minutes)) + "m : Spl/ice Pomodoro";
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