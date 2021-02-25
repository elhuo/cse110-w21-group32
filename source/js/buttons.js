/**
 * buttons.js is a javascript file that implements the button logic of the pomodoro timer.
 * Specifically, it implements the start, stop, help, and settings buttons.
 */

// Button is used to disable the buttons
const button = document.querySelectorAll("button"); // 0 is help, 1 is start, 2 is stop

// References to start and stop buttons
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
stopButton.disabled = true;     // Stop button disabled by default


/**
 * When the start button is clicked, call the startTimer function in controller
 * to setup and start the first pomo cycle.
 * While the timer is running, the start button cannot be clicked and the stop button can.
 */
startButton.addEventListener("click", function () {
  startTimer(); // Call start function in controller
  startButton.disabled = true;  // Disable start button
  stopButton.disabled = false;  // Enable stop button
});

/**
 * When the stop button is clicked, call the stopTimer function in controller
 * to reset and stop the timer and cycles.
 * While the timer is stopped, the stop button cannot be clicked and the start button can.
 */
stopButton.addEventListener("click", function () {
  stopTimer(); // Call stop function in controller
  stopButton.disabled = true;   // Disable stop button
  startButton.disabled = false; // Enable start button
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
var modal = document.getElementById("myModal");
var settingsModal = document.getElementById("settings-modal");
var helpBtn = document.getElementById("help-button");
var settingsBtn = document.getElementById("settings-button");
var closeBtn = document.getElementById("help-close");
var settingsCloseBtn = document.getElementById("settings-close");
var volumeSlider = document.getElementById("volume-slider");
let shadow = document.getElementById("shadow");

/**
 * Close popup and remove shadow.
 */
function closePopup() {
  modal.classList.remove("modal-show");
  settingsModal.classList.remove("modal-show");
  shadow.classList.remove("visible");
}

/**
 * Toggle popup on help button click.
 */
helpBtn.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/**
 * Toggle popup on close button click.
 */
closeBtn.onclick = function () {
  modal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/**
 * Toggle popup on settings button click.
 */
settingsBtn.onclick = function () {
  settingsModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};

/**
 * Adjust volume level using a slider implemented in the settings page.
 * The image displayed for the volume changes depending on the volume.
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
  "party-horn": "./audio/party-horn.mp3", 
  "air-horn": "./audio/air-horn.mp3" 
}

/**
 * This function runs when the HTML content is finished loading.
 * The function will choose the appropriate sound depending on which sound
 * is selected by the user in the settings page.
 */
var soundChoices = document.getElementById("volume-sound");
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#volume-sound').onchange = function(){
    let soundSelected = soundChoices.value;
    let audioElem = document.getElementById("pomo-sound");
    audioElem.src = nameSrcMap[soundSelected];
    console.log(audioElem.src)
  }
})

/**
 * Play button in the settings page that plays the alert sound so the user
 * can pre-hear the volume and sound when they are adjusting them.
 */
var playButton = document.getElementById("play-sound")
playButton.onclick = function(){
  document.getElementById("pomo-sound").play();
}

/**
 * Toggle popup on close button click.
 */
settingsCloseBtn.onclick = function () {
  settingsModal.classList.toggle("modal-show");
  shadow.classList.toggle("visible");
};
// listener for start button
//      on "click"
//          call function in controller
//              function sets cycle to pomo (pomo started)
//                  that function could call timer module with (time, running = 1)
//
// listener for stop button
//      on "click"
//          call function in controller
//              function resets cycle
//                  that function sets running = 0

