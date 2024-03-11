import { TIME } from "./const/index.js";
const getCounter = (delta) => {
    const totalSeconds = delta / TIME.MILLISECONDS_PER_MINUTE;
    const totalMinutes = totalSeconds / TIME.SECONDS_PER_MINUTE;
    const totalHours = totalMinutes / TIME.MINUTES_PER_HOUR;
    const totalDays = totalHours / TIME.HOURS_PER_DAY;
    const counter = {
        day: Math.floor(totalDays),
        hour: Math.floor(totalHours) % TIME.HOURS_PER_DAY,
        minute: Math.floor(totalMinutes) % TIME.MINUTES_PER_HOUR,
        second: Math.floor(totalSeconds) % TIME.SECONDS_PER_MINUTE,
    };
    return counter;
};
const setCounter = (counter) => {
    document.getElementById("day").innerText = counter.day.toString();
    document.getElementById("hour").innerText = counter.hour.toString();
    document.getElementById("minute").innerText = counter.minute.toString();
    document.getElementById("second").innerText = counter.second.toString();
};
export const updateCounter = (firstCommuteDate, delta) => {
    const now = new Date();
    delta = firstCommuteDate.getTime() - now.getTime();
    const counter = getCounter(delta);
    setCounter(counter);
};
