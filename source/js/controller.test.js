/** Loading the module we're testing */
const controller = require("./controller");

/** Creating jest mocks (because loading module doesn't load dependencies) */
document.body.innerHTML =
    "<div id='pomo-tab'></div>" +
    "<div id='short-break-tab'></div>" +
    "<div id='long-break-tab'></div>";
startCountdown = jest.fn();
stopCountdown = jest.fn();

/** Testing set/getCycle functions, required to pass for other unit tests to work properly */
test("set/getCycle test, required to pass for other unit tests to work properly", () => {
    controller.setCycle(1);
    expect(controller.getCycle()).toBe(1);
    controller.setCycle(3);
    expect(controller.getCycle()).toBe(3);
    controller.setCycle(0);
    expect(controller.getCycle()).toBe(0);
});

/** Testing set/getNumPomos functions, required to pass for other unit tests to work properly */
test("set/getNumPomos test, required to pass for other unit tests to work properly", () => {
    controller.setNumPomos(1);
    expect(controller.getNumPomos()).toBe(1);
    controller.setNumPomos(3);
    expect(controller.getNumPomos()).toBe(3);
    controller.setNumPomos(0);
    expect(controller.getNumPomos()).toBe(0);
});

/** Testing startTimer function */
test("startTimer test", () => {
    controller.startTimer();
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("medium solid");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("");
});

/** Testing changeCycles function for short break*/
test("changeCycles short break test", () => {
    controller.setCycle(0);
    controller.setNumPomos(0);

    controller.changeCycles();
    expect(controller.getCycle()).toBe(1);
    expect(controller.getNumPomos()).toBe(1);
    expect(document.getElementById("pomo-tab").style.border).toBe("");
    expect(document.getElementById("short-break-tab").style.border).toBe("medium solid");
    expect(document.getElementById("long-break-tab").style.border).toBe("");
});

/** Testing changeCycles function for long break*/
test("changeCycles short break test", () => {
    controller.setCycle(0);
    controller.setNumPomos(3);

    controller.changeCycles();
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("medium solid");
});

/** Testing stopTimer function */
test("stopTimer test", () => {
    controller.setCycle(2);
    controller.setNumPomos(1);

    controller.stopTimer();
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("medium solid");
    expect(document.getElementById("short-break-tab").style.border).toBe("medium solid");
    expect(document.getElementById("long-break-tab").style.border).toBe("medium solid");
});

/** Testing changeStyle function */
test("changeStyle test", () => {
    controller.setCycle(0);
    controller.setNumPomos(0);

    controller.changeStyle();
    expect(document.getElementById("pomo-tab").style.border).toBe("medium solid");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("");
    
    controller.setCycle(2);
    controller.changeStyle();
    expect(document.getElementById("pomo-tab").style.border).toBe("");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("medium solid");
});

/** Testing complete controller module functionality for full cycle including long break*/
test("changeCycles full cycle including long break test", () => {
    controller.setCycle(0);
    controller.setNumPomos(0);

    controller.startTimer();
    controller.changeCycles(); // 1st pomo completed
    controller.changeCycles(); // short break completed
    controller.changeCycles(); // 2nd pomo completed
    controller.changeCycles(); // short break completed
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(2);

    controller.changeCycles(); // 3rd pomo completed
    expect(controller.getCycle()).toBe(1);
    expect(controller.getNumPomos()).toBe(3);

    controller.changeCycles(); // short break completed
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(3);

    controller.changeCycles(); // 4th pomo completed
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("medium solid");

    controller.changeCycles(); // long break completed
    expect(controller.getCycle()).toBe(0);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("medium solid");
    expect(document.getElementById("short-break-tab").style.border).toBe("");
    expect(document.getElementById("long-break-tab").style.border).toBe("");

    controller.stopTimer();
    expect(controller.getCycle()).toBe(2);
    expect(controller.getNumPomos()).toBe(0);
    expect(document.getElementById("pomo-tab").style.border).toBe("medium solid");
    expect(document.getElementById("short-break-tab").style.border).toBe("medium solid");
    expect(document.getElementById("long-break-tab").style.border).toBe("medium solid");
});