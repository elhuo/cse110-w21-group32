/**
 * buttons.js is a javascript file that implements the button logic of the pomodoro timer.
 * Specifically, it implements the start, stop, help, and settings buttons.
 */

/** Button is used to disable the buttons */
// const button = document.querySelectorAll("button"); // 0 is help, 1 is start, 2 is stop

/** Reference to start button */
var startButton = document.getElementById("start-button");

/** Reference to stop button */
var stopButton = document.getElementById("stop-button");
stopButton.disabled = true;     // Stop button disabled by default



var pomoTimeSet = document.getElementById("pomo-duration");
var shortTimeSet = document.getElementById("short-break-duration");
var longTimeSet = document.getElementById("long-break-duration");


/** @function
 * @description When the start button is clicked, call the startTimer function in controller
 * to setup and start the first pomo cycle.
 * While the timer is running, the start button cannot be clicked and the stop button can.
 * @name clickStart
 */
startButton.addEventListener("click", function () {
  startTimer(); // Call start function in controller
  startButton.disabled = true;  // Disable start button
  stopButton.disabled = false;  // Enable stop button

  pomoTimeSet.disabled = true;  // Disable changing pomo time
  shortTimeSet.disabled = true; // Disable changing short break time
  longTimeSet.disabled = true;  // Disable changing long break time
});

/** @function
 * @description When the stop button is clicked, call the stopTimer function in controller
 * to reset and stop the timer and cycles.
 * While the timer is stopped, the stop button cannot be clicked and the start button can.
 * @name clickStop
 */
stopButton.addEventListener("click", function () {
  stopTimer(); // Call stop function in controller
  stopButton.disabled = true;   // Disable stop button
  startButton.disabled = false; // Enable start button

  pomoTimeSet.disabled = false;  // Enable changing pomo time
  shortTimeSet.disabled = false; // Enable changing short break time
  longTimeSet.disabled = false;  // Enable changing long break time
});

// Volume Level Controls
const volume_level_3 = 66;
const volume_level_2 = 33;
const volume_level_1 = 0;

// Sound of finishing a pomodoro
var pomoSound = document.getElementById("pomo-sound");
// image that is displayed depending on volume level
var volumeImg = document.getElementById("volume-image");

// Help and settings page button logics
var modal = document.getElementById("help-modal");
var settingsModal = document.getElementById("settings-modal");
var helpButton = document.getElementById("help-button");
var settingsButton = document.getElementById("settings-button");
var closeButton = document.getElementById("help-close");
var settingsCloseButton = document.getElementById("settings-close");
var volumeSlider = document.getElementById("volume-slider");
let shadow = document.getElementById("shadow");

/**
 * @description Close popup and remove shadow.
 */
function closePopup() {
  modal.classList.remove("modal-show");
  settingsModal.classList.remove("modal-show");
  shadow.classList.remove("visible");
}

/** @function
 * @description Toggle popup on help button click.
 * @name clickHelp
 */
helpButton.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/** @function
 * @description Toggle popup on close button click.
 * @name clickClose
 */
closeButton.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/** @function
 * @description Toggle popup on settings button click.
 * @name toggleSettingsPopup
 */
settingsButton.onclick = function () {
  settingsModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/** @function
 * @description Adjust volume level using a slider implemented in the settings page.
 * The image displayed for the volume changes depending on the volume.
 * @name slideVolume
 */
pomoSound.volume = volumeSlider.value/100;
volumeSlider.onclick = function() {
  let val = volumeSlider.value;
  if( val > volume_level_3 ) {
    volumeImg.src = "./img/volume-level-3.svg";
  }
  else if ( val > volume_level_2 ) {
    volumeImg.src = "./img/volume-level-2.svg";
  }
  else if ( val > volume_level_1 ) {
    volumeImg.src = "./img/volume-level-1.svg";
  }
  else {
    volumeImg.src = "./img/volume-level-0.svg";
  }
  pomoSound.volume = volumeSlider.value/100;
};

// Audio source select drop down menu
const nameSrcMap = {
  "glass-pour": "./audio/glass-pour.mp3",
  "bottle-clank": "./audio/bottle-clank.mp3",
  "glass-break": "./audio/glass-break.mp3",
  "glass-ping": "./audio/glass-ping.mp3",
  "wind-chimes-1": "./audio/wind-chimes-1.mp3",
  "wind-chimes-2": "./audio/wind-chimes-2.mp3",
  "wind-chimes-3": "./audio/wind-chimes-3.mp3",
  "ice-cream-1": "./audio/ice-cream-1.mp3",
  "ice-cream-2": "./audio/ice-cream-2.mp3"
}

/** @function
 * @description This function runs when the HTML content is finished loading.
 * The function will choose the appropriate sound depending on which sound
 * is selected by the user in the settings page.
 * @name chooseSound
 */
var soundChoices = document.getElementById("volume-sound");
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#volume-sound").onchange = function(){
    let soundSelected = soundChoices.value;
    let audioElem = document.getElementById("pomo-sound");
    audioElem.src = nameSrcMap[soundSelected];
    console.log(audioElem.src)
  }
})

/** @function
 * @description Play button in the settings page that plays the alert sound so the user
 * can pre-hear the volume and sound when they are adjusting them.
 * @name playAdjustSound
 */
var playButton = document.getElementById("play-sound")
playButton.onclick = function(){
  document.getElementById("pomo-sound").play();
}

/** @function
 * @description Toggle popup on close button click.
 * @name toggleClosePopup
 */
settingsCloseButton.onclick = function () {
  settingsModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

pomoTimeSet.addEventListener("change", function () {
  pomoTime = pomoTimeSet.value - 1;
  if (cycle == 0)
    document.getElementById("countdown").innerText = pomoTimeSet.value + ":" + "00";
});

shortTimeSet.addEventListener("change", function() {
  sBreakTime = shortTimeSet.value - 1;
  if (cycle == 1)
    document.getElementById("countdown").innerText = "0" + shortTimeSet.value + ":" + "00";
});

longTimeSet.addEventListener("change", function() {
  lBreakTime = longTimeSet.value - 1;
  if (cycle == 2)
    document.getElementById("countdown").innerText = longTimeSet.value + ":" + "00";
})


exports.closePopup = closePopup;
