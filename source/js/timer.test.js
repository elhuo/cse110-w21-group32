/** HTML jest mocks */
document.body.innerHTML =
    "<title id='title'>Spl/ice Pomodoro</title>" +
    "<p id='countdown'>25:00</p>";

/** Loading the module we're testing */
const timer = require("./timer");

/** Testing set/getDuration functions, required to pass for other unit tests to work properly */
test("set/getDuration test", () => {
    timer.setDuration(5);
    expect(timer.getDuration()).toBe(5);
    timer.setDuration(10);
    expect(timer.getDuration()).toBe(10);
});

/** Testing getStart function, required to pass for other unit tests to work properly */
test("getStart test", () => {
    expect(timer.getStart()).toBe(false);
});

/** Testing startCountdown function */
test("startCountdown combined test", () => {
    timer.startCountdown(10);
    expect(timer.getStart()).toBe(true);
    expect(document.getElementById("countdown").innerText).toBe("10:59");

    timer.stopCountdown();
    expect(timer.getStart()).toBe(false);

    timer.startCountdown(9);
    expect(timer.getStart()).toBe(true);
    expect(document.getElementById("countdown").innerText).toBe("09:59");
});

/** Testing stopCountdown function */
test("stopCountdown test", () => {
    timer.startCountdown(10);
    timer.stopCountdown();

    expect(timer.getStart()).toBe(false);
    expect(document.getElementById("countdown").innerText).toBe("11:00");
});

/** Testing countdown function */
test("countdown test", () => {
    timer.startCountdown(10)
    timer.countdown()
    expect(document.getElementById("title").innerText).toBe("10m : Spl/ice Pomodoro");
});
