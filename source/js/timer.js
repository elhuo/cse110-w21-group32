let start = false                           // true - timer is on; false - timer is off
let duration = 24                           // duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min
var countDownStart = new Date().getTime();  // stores the starting time of the timer


// Updates the html timer display when timer is enabled
setInterval(() => {
  if (start){
    countdown();
  }
}, 500);  // Will refresh every 500 ms: sometimes setInterval isn't exact and may skip a second

/**
 * Starts the countdown
 * @param {int} mins - The duration for the timer to run for. 
 * Remember to subtract 1 minute (if you want a 25 min timer, set to 24)
 */
function startCountdown(mins) {
  start = true;     // Enables timer
  duration = mins;  // Sets timer duration
  
  if (duration < 10) {duration = "0" + duration;}
  // Display initial countdown time
  document.getElementById("countdown").innerHTML = (duration) + ":" + "59"; 
  // Set starting time of the timer
  countDownStart = new Date().getTime();                                    
}

/**
 * Ends the countdown
 */
function stopCountdown() {
  start = false;    // Disables timer
  document.getElementById("countdown").innerHTML = "00:00";   // Sets timer display to 00:00
}


/**
 * Updates the time left on the timer, by subtracting the time elapsed from the initial time
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
  if (duration - minutes <= 10) {
    minutes = "0" + (duration - minutes);
  }
  // Otherwise, just convert to string without padding
  else{
    minutes = "" + (duration - minutes);
  }

  // Update the display
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

}


// Main timer component:
//    variable that keeps track of time elapsed
//    Function that changes the static html page (to be in sync with the actual timer)
//    reset function, input time in minutes to count down
//    when timer is finished, call method in controller (tbd)



// something something setInterval
// https://www.w3schools.com/howto/howto_js_countdown.asp
// https://www.w3schools.com/jsref/met_win_setinterval.asp
