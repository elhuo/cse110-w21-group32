/** HTML jest mocks */
document.body.innerHTML =
    "<audio id='pomo-sound' src='./audio/party-horn.mp3'></audio>" +

    "<button id='settings-button'></button>" + 
    "<button id='help-button'></button>" +

    "<button id='start-button'></button>" +
    "<button id='stop-button'></button>" +

    "<img id='volume-image' src='./img/volume-level-3.svg'>" +

    "<div id='help-modal'>" +
    "<span id='help-close'></span>" +
    "</div>" +

    "<div id='settings-modal'>" +
    "<span id='settings-close'></span>" +

    "<select name='pomo-duration' id='pomo-duration'>" +
    "<option value='20'>20:00</option>" +
    "<option value='25' selected>25:00</option>" +
    "<option value='30'>30:00</option>" +
    "</select>" +

    "<select id='short-break-duration'" +
    "<option value='3'>3:00</option>" +
    "<option value='5' selected>5:00</option>" +
    "<option value='7'>7:00</option>" +
    "</select>" +

    "<select id='long-break-duration'" +
    "<option value='10'>10:00</option>" +
    "<option value='15' selected>15:00</option>" +
    "<option value='20'>20:00</option>" +
    "</select>" +

    "<select id='sound-select'" +
    "<option value='glass-pour'>Glass Pour</option>" +
    "<option value='bottle-clank'>Bottle Clank</option>" +
    "<option value='ice-cream-1'>Ice Cream Truck 1</option>" +
    "</select>" +

    "<img id='volume-image' src='./img/volume-level-2.svg' alt='Volume Visual'>" +
    "<input id='volume-slider' name='volume-slider' type='range' min='0' max='100' value='50'>" +
    "<button id='play-sound'></button>" +
    "</div>" +

    "<div id='shadow' onclick='closePopup()'></div>" +

    "<input id='volume-slider' type='range' min='0' max ='100' value='50'></input>";

/** Outside functions jest mocks */
startTimer = jest.fn();
stopTimer = jest.fn();

/** Loading the module we're testing */
const buttons = require("./buttons");

/** Testing default attributes of buttons and modals */
test("default buttons/modals attributes test", () => {
    expect(document.getElementById("start-button").disabled).toBe(false);
    expect(document.getElementById("stop-button").disabled).toBe(true);
    expect(document.getElementById("help-modal").classList.contains("modal-show")).toBe(false);
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
    document.getElementById("help-modal").classList.add("modal-show");
    document.getElementById("settings-modal").classList.add("modal-show");
    buttons.closePopup();
    expect(document.getElementById("help-modal").classList.contains("modal-show")).toBe(false);
    expect(document.getElementById("settings-modal").classList.contains("modal-show")).toBe(false);
});

/** Testing help-button functionality */
test("help-button test", () => {
    document.getElementById("help-button").click();
    expect(document.getElementById("help-modal").classList.contains("modal-show")).toBe(true);
});

/** Testing close-help-button functionality */
test("close-help-button test", () => {
    document.getElementById("help-modal").classList.add("modal-show");
    document.getElementById("help-close").click();
    expect(document.getElementById("help-modal").classList.contains("modal-show")).toBe(false);
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
    document.getElementById("volume-slider").dispatchEvent(new Event("input"));
    expect(document.getElementById("pomo-sound").volume).toBe(0.1);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(true);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-2.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(false);

    // 50 volume test
    document.getElementById("volume-slider").value = 50;
    document.getElementById("volume-slider").dispatchEvent(new Event("input"));
    expect(document.getElementById("pomo-sound").volume).toBe(0.5);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-2.svg")).toBe(true);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(false);

    // 90 volume test
    document.getElementById("volume-slider").value = 90;
    document.getElementById("volume-slider").dispatchEvent(new Event("input"));
    expect(document.getElementById("pomo-sound").volume).toBe(0.9);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-2.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(true);


    // mute volume test
    document.getElementById("volume-slider").value = 0;
    document.getElementById("volume-slider").dispatchEvent(new Event("input"));
    expect(document.getElementById("pomo-sound").volume).toBe(0);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-0.svg")).toBe(true);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-1.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-2.svg")).toBe(false);
    expect(document.getElementById("volume-image").src.includes("/img/volume-level-3.svg")).toBe(false);
});

/** Testing play sound button */
test("play sound button test", () => {
    document.getElementById("pomo-sound").play = jest.fn();
    expect(document.getElementById("pomo-sound").play.mock.calls.length).toEqual(0);
    document.getElementById("play-sound").click();
    expect(document.getElementById("pomo-sound").play.mock.calls.length).toEqual(1);
});

/** Testing disableStart function */
test("disableStart function test", () => {
    document.getElementById("start-button").disabled = false;
    document.getElementById("stop-button").disabled = true;
    buttons.disableStart();
    expect(document.getElementById("start-button").disabled).toBe(true);
    expect(document.getElementById("stop-button").disabled).toBe(false);
});

/** Testing enableStart function */
test("enableStart function test", () => {
    document.getElementById("start-button").disabled = true;
    document.getElementById("stop-button").disabled = false;
    buttons.enableStart();
    expect(document.getElementById("start-button").disabled).toBe(false);
    expect(document.getElementById("stop-button").disabled).toBe(true);
});

/** Testing pomo timer reset when changing durations during pomo timer cycle */
test("pomo timer duration change test for timer reset", () => {
    /** Clear mock calls count to facilitate testing */
    jest.clearAllMocks();

    /** Testing that timer for short break does not reset when changing pomo duration */
    cycle = 1;
    document.getElementById("pomo-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(0);
    expect(stopTimer.mock.calls.length).toBe(0);

    /** Testing that timer for pomo resets when changing pomo duration */
    cycle = 0;
    document.getElementById("pomo-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(1);
    expect(stopTimer.mock.calls.length).toBe(1);
});

/** Testing short break timer reset when changing durations during short break timer cycle */
test("short break timer duration change test for timer reset", () => {
    /** Clear mock calls count to facilitate testing */
    jest.clearAllMocks();

    /** Testing that timer for pomo does not reset when changing short break duration */
    cycle = 0;
    document.getElementById("short-break-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(0);
    expect(stopTimer.mock.calls.length).toBe(0);

    /** Testing that timer for short break resets when changing short break duration */
    cycle = 1;
    document.getElementById("short-break-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(1);
    expect(stopTimer.mock.calls.length).toBe(1);
});

/** Testing long break timer reset when changing durations during long break timer cycle */
test("long break timer duration change test for timer reset", () => {
    /** Clear mock calls count to facilitate testing */
    jest.clearAllMocks();

    /** Testing that timer for pomo does not reset when changing long break duration */
    cycle = 0;
    document.getElementById("long-break-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(0);
    expect(stopTimer.mock.calls.length).toBe(0);

    /** Testing that timer for long break resets when changing long break duration */
    cycle = 2;
    document.getElementById("long-break-duration").dispatchEvent(new Event("change"));
    expect(startTimer.mock.calls.length).toBe(1);
    expect(stopTimer.mock.calls.length).toBe(1);
});

/**
 * Note: unable to trigger document.querySelector("#sound-select").onchange, so can't unit test through jest
 * Compensated through manual testing of changing sound option
 */