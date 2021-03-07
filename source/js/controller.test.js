/** Loading the module we're testing */
const controller = require("./controller");

/** Creating jest mocks (because loading module doesn't load dependencies) */
document.body.innerHTML =
    "<p id='pomo-tab'></p>" +
    "<p id='short-break-tab'></p>" +
    "<p id='long-break-tab'></p>" +
    "<p id='countdown'>25:00</p>" +
    "<audio id='pomo-sound' src='./audio/glass-pour.mp3'></audio>" +
    "<img id='pomo-count-1'></img>" +
    "<img id='pomo-count-2'></img>" +
    "<img id='pomo-count-3'></img>" +
    "<img id='pomo-count-4'></img>" +
    "<p id='completed-pomos'>Pomos: 0</p>";
startCountdown = jest.fn();
stopCountdown = jest.fn();

/** Testing set/getCycle functions, required to pass for other unit tests to work properly */
test("set/getCycle test, required to pass for other unit tests to work properly", () => {
    controller.reset();

    controller.setCycle(1);
    expect(controller.getCycle()).toBe(1);
    controller.setCycle(3);
    expect(controller.getCycle()).toBe(3);
    controller.setCycle(0);
    expect(controller.getCycle()).toBe(0);
});

/** Testing set/getNumPomos functions, required to pass for other unit tests to work properly */
test("set/getNumPomos test, required to pass for other unit tests to work properly", () => {
    controller.reset();

    controller.setNumPomos(1);
    expect(controller.getNumPomos()).toBe(1);
    controller.setNumPomos(3);
    expect(controller.getNumPomos()).toBe(3);
    controller.setNumPomos(0);
    expect(controller.getNumPomos()).toBe(0);
});

/** Testing startTimer function */
test("startTimer test", () => {
    controller.reset();

    controller.startTimer();
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(true);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(false);
});

/** Testing changeCycles function for short break*/
test("changeCycles short break test", () => {
    controller.reset();

    controller.setCycle(0);
    controller.setNumPomos(0);
    controller.changeCycles();
    expect(controller.getCycle()).toBe(1);
    expect(controller.getNumPomos()).toBe(1);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(true);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(false);
});

/** Testing changeCycles function for long break*/
test("changeCycles short break test", () => {
    controller.reset();

    controller.setCycle(0);
    controller.setNumPomos(3);
    controller.changeCycles();
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(true);
});

/** Testing stopTimer function */
test("stopTimer test", () => {
    controller.reset();

    controller.setCycle(2);
    controller.setNumPomos(1);
    controller.stopTimer();
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(1);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(true);
});

/** Testing changeStyle function */
test("changeStyle test", () => {
    controller.reset();

    controller.setCycle(0);
    controller.changeStyle();
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(true);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(false);
    controller.setCycle(2);
    controller.changeStyle();
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(true);
});

/** Testing complete controller module functionality for full cycle including long break*/
test("changeCycles full cycle including long break test", () => {
    controller.reset();

    controller.startTimer();   // 1st pomo started      cycle 0 - on pomo 1
    controller.changeCycles(); // 1st pomo completed    cycle 1 - break
    controller.changeCycles(); // short break completed cycle 0 - on pomo 2
    controller.changeCycles(); // 2nd pomo completed    cycle 1 - break
    controller.changeCycles(); // short break completed cycle 0 - on pomo 3
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(2);
    controller.changeCycles(); // 3rd pomo completed
    expect(controller.getCycle()).toBe(1);          //  cycle 1 - break
    expect(controller.getNumPomos()).toBe(3);
    controller.changeCycles(); // short break completed
    expect(controller.getCycle()).toBe(0);          //  expect 0 - on pomo 4
    expect(controller.getNumPomos()).toBe(3);
    controller.changeCycles(); // 4th pomo completed
    expect(controller.getCycle()).toBe(2);          //  expect 2 - long break
    expect(controller.getNumPomos()).toBe(4);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(true);
    controller.changeCycles(); // long break completed  expect 0 - on pomo 0
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(4);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(true);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(false);
    controller.stopTimer();   // 1st pomo stopped       expect 0 - on pomo 0
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(4);
    expect(document.getElementById("pomo-tab").classList.contains("tab-active")).toBe(true);
    expect(document.getElementById("short-break-tab").classList.contains("tab-active")).toBe(false);
    expect(document.getElementById("long-break-tab").classList.contains("tab-active")).toBe(false);
});