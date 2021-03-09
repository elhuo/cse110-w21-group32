/**
 * buttons.js is a javascript file that implements the button logic of the pomodoro timer.
 * Specifically, it implements the start, stop, help, and settings buttons.
 */

/** Reference to start button */
const startButton = document.getElementById("start-button");
/** Reference to stop button */
const stopButton = document.getElementById("stop-button");
stopButton.disabled = true;     // Stop button disabled by default

/** The pomo time picked by the user (20, 25, 30) */
const pomoTimeSelect = document.getElementById("pomo-duration");
/** The short break time picked by the user (3, 5, 7) */
const shortTimeSelect = document.getElementById("short-break-duration");
/** The long break time picked by the user (10, 15, 20) */
const longTimeSelect = document.getElementById("long-break-duration");

// Help and settings page button logics
const shadow = document.getElementById("shadow");

const helpModal = document.getElementById("help-modal");
const helpButton = document.getElementById("help-button");
const helpCloseButton = document.getElementById("help-close");

const settingsModal = document.getElementById("settings-modal");
const settingsButton = document.getElementById("settings-button");
const settingsCloseButton = document.getElementById("settings-close");

/** Audio source select drop down menu */
const nameSrcMap = {
  "glass-pour"    : "./audio/glass-pour.mp3",
  "bottle-clank"  : "./audio/bottle-clank.mp3",
  "glass-break"   : "./audio/glass-break.mp3",
  "glass-ping"    : "./audio/glass-ping.mp3",
  "wind-chimes-1" : "./audio/wind-chimes-1.mp3",
  "wind-chimes-2" : "./audio/wind-chimes-2.mp3",
  "wind-chimes-3" : "./audio/wind-chimes-3.mp3",
  "ice-cream-1"   : "./audio/ice-cream-1.mp3",
  "ice-cream-2"   : "./audio/ice-cream-2.mp3"
}

/** Volume Level Controls */
const volumeLevels = [0, 0, 33, 66];
const volumeSlider = document.getElementById("volume-slider");

/** Sound of finishing a pomodoro */
const pomoSound = document.getElementById("pomo-sound");

pomoSound.volume = volumeSlider.value/100;

/** @function
 * @description When the start button is clicked, call the startTimer function in controller
 * to setup and start the first pomo cycle.
 * While the timer is running, the start button cannot be clicked and the stop button can.
 * @name clickStart
 */
startButton.addEventListener("click", function () {
  startTimer();
  disableStart();
});

function disableStart() {
  startButton.disabled = true;  // Disable start button
  stopButton.disabled = false;  // Enable stop button

  pomoTimeSelect.disabled = true;  // Disable changing pomo time
  shortTimeSelect.disabled = true; // Disable changing short break time
  longTimeSelect.disabled = true;  // Disable changing long break time
}

/** @function
 * @description When the stop button is clicked, call the stopTimer function in controller
 * to reset and stop the timer and cycles.
 * While the timer is stopped, the stop button cannot be clicked and the start button can.
 * @name clickStop
 */
stopButton.addEventListener("click", function () {
  stopTimer();
  enableStart();
});

function enableStart() {
  startButton.disabled = false;   // Enable start button
  stopButton.disabled = true;     // Disable stop button

  pomoTimeSelect.disabled = false;  // Enable changing pomo time
  shortTimeSelect.disabled = false; // Enable changing short break time
  longTimeSelect.disabled = false;  // Enable changing long break time
}

/**
 * @description Close popup and remove shadow.
 */
function closePopup() {
  helpModal.classList.remove("modal-show");
  settingsModal.classList.remove("modal-show");
  shadow.classList.remove("visible");
};

/** @function
 * @description Toggle popup on help button click.
 * @name clickHelp
 */
helpButton.onclick = function () {
  helpModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/** @function
 * @description Close popup on close button click.
 * @name clickClose
 */
helpCloseButton.addEventListener("click", closePopup);

/** @function
 * @description Toggle popup on settings button click.
 * @name toggleSettingsPopup
 */
settingsButton.onclick = function () {
  settingsModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/** @function
 * @description Close popup on close button click.
 * @name clickClose
 */
settingsCloseButton.addEventListener("click", closePopup);

/** @function
 * @description Change pomo timer duration to selected time
 * @name setPomoTime
 */
pomoTimeSelect.addEventListener("change", function () {
  pomoTime = pomoTimeSelect.value - 1;
  if (cycle == 0) {
    startTimer();
    stopTimer();
  }
});

/** @function
 * @description Change short break timer duration to selected time
 * @name setShortTime
 */
shortTimeSelect.addEventListener("change", function() {
  sBreakTime = shortTimeSelect.value - 1;
  if (cycle == 1) {
    startTimer();
    stopTimer();
  }
});

/** @function
 * @description Change long break timer duration to selected time
 * @name setLongTime
 */
longTimeSelect.addEventListener("change", function() {
  lBreakTime = longTimeSelect.value - 1;
  if (cycle == 2) {
    startTimer();
    stopTimer();
  }
});

/** @function
 * @description Adjust volume level using a slider implemented in the settings page.
 * The image displayed for the volume changes depending on the volume.
 * @name slideVolume
 */
volumeSlider.addEventListener('input', function(){
  /** Image that is displayed depending on volume level */
  let volumeImg = document.getElementById("volume-image");

  pomoSound.volume = volumeSlider.value/100;

  let val = volumeSlider.value;
  if (val > volumeLevels[3]) {
    volumeImg.src = "./img/volume-level-3.svg";
  
  } else if ( val > volumeLevels[2] ) {
    volumeImg.src = "./img/volume-level-2.svg";
  
  } else if ( val > volumeLevels[1] ) {
    volumeImg.src = "./img/volume-level-1.svg";
  
  } else {
    volumeImg.src = "./img/volume-level-0.svg";
  }
});

/** @function
 * @description This function runs when the HTML content is finished loading.
 * The function will choose the appropriate sound depending on which sound
 * is selected by the user in the settings page.
 * @name chooseSound
 */
document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("#sound-select").onchange = function(){
    let soundSelect = document.getElementById("sound-select");

    let soundSelected = soundSelect.value;
    pomoSound.src = nameSrcMap[soundSelected];
    pomoSound.play();
  }
})

/** @function
 * @description Play button in the settings page that plays the alert sound so the user
 * can pre-hear the volume and sound when they are adjusting them.
 * @name playAdjustSound
 */
 document.getElementById("play-sound").onclick = function(){
  pomoSound.play();
};

exports.closePopup = closePopup;
