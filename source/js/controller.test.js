const controller = require("./controller");

document.body.innerHTML =
    "<div id='pomo-tab'></div>" +
    "<div id='short-break-tab'></div>" +
    "<div id='long-break-tab'></div>";
startCountdown = jest.fn();
test('startTimer test', () => {
    const startCountdown = jest.fn();
    controller.startTimer();
    expect(controller.cycle).toBe(0);
    expect(controller.numPomos).toBe(0);
});