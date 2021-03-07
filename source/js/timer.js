var start = false                           // true - timer is on; false - timer is off
let duration;                          // duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min
var countDownStart = new Date().getTime();  // stores the starting time of the timer

/** Sound played when timer hits 0 */
var pomoSound = document.getElementById("pomo-sound");

/** Default timer countdown is 25 min */
document.getElementById("countdown").innerText = "25" + ":" + "00";

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

  if (duration < 10) { duration = "0" + duration; }
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
  let stopTime = Number(duration)+1;
  if (stopTime < 10) { stopTime = "0" + stopTime; }
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
    changeCycles();
    return;
  }

  // If single digit seconds, pad with a 0
  if (59 - seconds <= 9) {
    seconds = "0" + (59 - seconds);
  }
  // Otherwise, just convert to string without padding
  else {
    seconds = "" + (59 - seconds);
  }

  // If single digit minutes, pad with a 0
  if (duration - minutes < 10) {
    minutes = "0" + (duration - minutes);
  }
  // Otherwise, just convert to string without padding
  else {
    minutes = "" + (duration - minutes);
  }

  // Update the display
  document.getElementById("countdown").innerText = minutes + ":" + seconds;

  // Update the title
  if (minutes == "00"){
    document.getElementById("title").innerText = seconds + "s : Spl/ice Pomodoro";
  }
  else if (seconds == "59"){
    document.getElementById("title").innerText = (parseInt(minutes)) + "m : Spl/ice Pomodoro";
  }
}

function getStart() {
  return start;
}

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
// Main timer component:
//    variable that keeps track of time elapsed
//    Function that changes the static html page (to be in sync with the actual timer)
//    reset function, input time in minutes to count down
//    when timer is finished, call method in controller (tbd)



// something something setInterval
// https://www.w3schools.com/howto/howto_js_countdown.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp
