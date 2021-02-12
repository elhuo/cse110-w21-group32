// true - timer is on; false - timer is off
let start = true

// duration of timer cycle in minutes (needs to be converted later in ms somewhere below) ; default 25min
let duration = 24

// The starting time of the timer
var countDownStart = new Date().getTime();

// Updates the html timer display, if start = true
setInterval(() => {
  if (start){
    countdown();
  }
}, 1000);

// starts timer to set duration (NOTE: if you want a 25 min timer, set it to 24)
function startCountdown(mins) {
  // enables countdown
  start = true;
  // sets duration
  duration = mins;
  // displays initial countdown time
  document.getElementById("countdown").innerHTML = (duration) + ":" + "59";
  // Sets starting time of the timer
  countDownStart = new Date().getTime();
}

// ends timer
function stopCountdown() {
  start = false;
  document.getElementById("countdown").innerHTML = "00:00";
}


// Updates the html timer display
function countdown() {

  // Get current time
  var d = new Date().getTime();

  // Calculate time elapsed from when countdown was started
  var timeElapsed = d - countDownStart

  // Calculate minutes and seconds from time elapsed
  var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  // If timer is over
  if (minutes > duration) {
    start = false;
    // TODO: Call stop function in controller
    // For now, I'm just displaying some sample text to see if this works
    document.getElementById("countdown").innerHTML = "If you're reading this, it worked";
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
