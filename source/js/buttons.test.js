/** Creating basic HTML DOM to test buttons */
document.body.innerHTML =
    "<audio id='pomo-sound' src='./audio/party-horn.mp3'></audio>" +

    "<button id='settings-button'></button>" +
    "<button id='help-button'></button>" +
    "<button id='start-button'></button>" +
    "<button id='stop-button'></button>" +
    "<button id='play-sound'></button>" +
    "<button id='stop-button'></button>" +

    "<img id='volume-image' src='./img/volume-level-3.svg'>" +

    "<div id='myModal'>" +
    "<span id='help-close'></span>" +
    "</div>" +
    "<div id='settings-modal'>" +
    "<span id='settings-close'></span>" +
    "<select id='volume-sound'" +
    "<option value='party-horn'></option>" +
    "<option value='air-horn'></option>" +
    "</select>" +
    "</div>" +

    "<div id='shadow' onclick='closePopup()'></div>" +

    "<input id='volume-slider' type='range' min='0' max ='100' value='50'></input>";

/** Creating jest function mocks */
startTimer = jest.fn();
stopTimer = jest.fn();

/** Loading the module we're testing */
const buttons = require("./buttons");

/** Testing default attributes of buttons and modals */
test("default buttons/modals attributes test", () => {
    expect(document.getElementById("start-button").disabled).toBe(false);
    expect(document.getElementById("stop-button").disabled).toBe(true);
    expect(document.getElementById("myModal").classList.contains("modal-show")).toBe(false);
    expect(document.getElementById("settings-modal").classList.contains("modal-show")).toBe(false);
});

/** Testing start-button click functionality */
test("start-button click test", () => {
    document.getElementById("start-button").click();
    expect(document.getElementById("start-button").disabled).toBe(true);
    expect(document.getElementById("stop-button").disabled).toBe(false);
});

/** Testing stop-button click functionality */
test("stop-button click test", () => {
    document.getElementById("stop-button").click();
    expect(document.getElementById("start-button").disabled).toBe(false);
    expect(document.getElementById("stop-button").disabled).toBe(true);
});

/** Testing closePopup() functionality */
test("closePopup() test", () => {
    document.getElementById("myModal").classList.add("modal-show");
    document.getElementById("settings-modal").classList.add("modal-show");
    buttons.closePopup();
    expect(document.getElementById("myModal").classList.contains("modal-show")).toBe(false);
    expect(document.getElementById("settings-modal").classList.contains("modal-show")).toBe(false);
});

/** Testing help-button functionality */
test("help-button test", () => {
    document.getElementById("help-button").click();
    expect(document.getElementById("myModal").classList.contains("modal-show")).toBe(true);
});

/** Testing close-help-button functionality */
test("close-help-button test", () => {
    document.getElementById("myModal").classList.add("modal-show");
    document.getElementById("help-close").click();
    expect(document.getElementById("myModal").classList.contains("modal-show")).toBe(false);
});

/** Testing settings-button functionality */
test("settings-button test", () => {
    document.getElementById("settings-button").click();
    expect(document.getElementById("settings-modal").classList.contains("modal-show")).toBe(true);
});

/** Testing close-help-button functionality */
test("close-settings-button test", () => {
    document.getElementById("settings-modal").classList.add("modal-show");
    document.getElementById("settings-close").click();
    expect(document.getElementById("settings-modal").classList.contains("modal-show")).toBe(false);
});

/** Testing volume slider functionality */
test("volume slider test", () => {
    // 10 volume test
    document.getElementById("volume-slider").value = 10;
    document.getElementById("volume-slider").click();
    expect(document.getElementById("pomo-sound").volume).toBe(0.1);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(true);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(false);

    // 90 volume test
    document.getElementById("volume-slider").value = 90;
    document.getElementById("volume-slider").click();
    expect(document.getElementById("pomo-sound").volume).toBe(0.9);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(true);

    // mute volume test
    document.getElementById("volume-slider").value = 0;
    document.getElementById("volume-slider").click();
    expect(document.getElementById("pomo-sound").volume).toBe(0);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(true);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(false);
});

/** Testing volume sound change */
test("volume sound change test", () => {
    document.getElementById("volume-sound").value = "party-horn";
    document.getElementById("volume-sound").click();
    expect(document.getElementById("pomo-sound").src.includes("/audio/party-horn.mp3")).toBe(true);
    expect(document.getElementById("pomo-sound").src.includes("/audio/air-horn.mp3")).toBe(false);
});

/** Testing play sound button */
test("play sound button test", () => {
    document.getElementById("pomo-sound").play = jest.fn();
    expect(document.getElementById("pomo-sound").play.mock.calls.length).toEqual(0);
    document.getElementById("play-sound").click();
    expect(document.getElementById("pomo-sound").play.mock.calls.length).toEqual(1);
});