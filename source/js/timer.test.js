/** HTML jest mocks */
document.body.innerHTML =
    "<title id='title'>Spl/ice Pomodoro</title>" +
    "<p id='countdown'>25:00</p>";

/** Mocking time intervals */
jest.useFakeTimers();

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
    /** Mocking date to test time, first 2 used for initial countdown, third for after 11 minutes */
    spyOn(Date.prototype, 'getTime').and.returnValues(0, 0, 1000 * 60 * 8.5, 1000 * 60 * 9.5, 1000 * 60 * 11)

    /** Mocking changeCycles function */
    changeCycles = jest.fn();

    /** Countdown initial test with 10 minute timer */
    timer.startCountdown(9);
    timer.countdown();
    expect(document.getElementById("title").innerText).toBe("09m : Spl/ice Pomodoro");
    expect(changeCycles.mock.calls.length).toEqual(0);
    expect(timer.getStart()).toBe(true);
    /** Countdown 8.5 minutes test */
    timer.countdown();
    expect(document.getElementById("title").innerText).toBe("01m : Spl/ice Pomodoro");
    expect(changeCycles.mock.calls.length).toEqual(0);
    /** Countdown 9.5 minutes test */
    timer.countdown();
    expect(document.getElementById("title").innerText).toBe("29s : Spl/ice Pomodoro");
    expect(changeCycles.mock.calls.length).toEqual(0);
    /** Countdown 11 minutes test */
    timer.countdown();
    expect(changeCycles.mock.calls.length).toEqual(1);
    expect(timer.getStart()).toBe(false);
});

/** Testing setInterval functionality */
test("setInterval test", () => {
    /** Timer is off test after 500ms, indirectly checks that timer.countdown is not called */
    timer.stopCountdown();
    jest.runOnlyPendingTimers();
    expect(document.getElementById("title").innerText).toBe("Spl/ice Pomodoro");

    /** Timer is on test after 500ms, indirectly checks that timer.countdown is called */
    timer.startCountdown(5)
    expect(document.getElementById("title").innerText).toBe("Spl/ice Pomodoro");
    jest.runOnlyPendingTimers();
    expect(document.getElementById("title").innerText).toBe("05m : Spl/ice Pomodoro");
});