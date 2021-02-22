/** loading the module we're testing */
const controller = require("./controller");

/** creating jest mocks (because loading module doesn't load dependencies) */
document.body.innerHTML =
    "<div id='pomo-tab'></div>" +
    "<div id='short-break-tab'></div>" +
    "<div id='long-break-tab'></div>";
startCountdown = jest.fn();

/** Testing startTimer function */
test('startTimer test', () => {
    controller.startTimer();
    expect(controller.cycle).toBe(0);
    expect(controller.numPomos).toBe(0);
});
