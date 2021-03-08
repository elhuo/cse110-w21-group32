/** Loading the module we're testing */
const timer = require("./timer");

/** Jest Mocks for html **/
document.head.innerHTML =
    "<title id='title'>Spl/ice Pomodoro</title>";

document.body.innerHTML =
    "<p id='countdown'>25:00</p>";

/** Testing set/getDuration before rest of tests **/
test('setDuration test', () => {
    timer.setDuration(5);
    expect(timer.getDuration()).toBe(5);
    timer.setDuration(10);
    expect(timer.getDuration()).toBe(10);
});

/** Testing startCountdown function **/
test('startCountdown test', () => {
    timer.startCountdown(10);
    expect(timer.getStart()).toBe(true);
    expect(document.getElementById("countdown").innerText).toBe("10:59");

    timer.stopCountdown();
    expect(timer.getStart()).toBe(false);

    timer.startCountdown(9);
    expect(timer.getStart()).toBe(true);
    expect(document.getElementById("countdown").innerText).toBe("09:59");
});

/** Testing stopCountdown function **/
test('stopCountdown test', () => {
    timer.startCountdown(10);
    timer.stopCountdown();

    expect(timer.getStart()).toBe(false);
    expect(document.getElementById("countdown").innerText).toBe("11:00");
});

/** Testing countdown function **/
test('countdown test', () => {
    timer.startCountdown(10)
    //need to figure out how to test w/ time incrementing
});
