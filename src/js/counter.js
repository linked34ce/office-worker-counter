import { TIME } from "./constants.js";
export const getCounter = (delta) => {
    const counter = {
        day: Math.floor(delta /
            (TIME.MILLISECONDS_PER_MINUTE *
                TIME.SECONDS_PER_MINUTE *
                TIME.MINUTES_PER_HOUR *
                TIME.HOURS_PER_DAY)),
        hour: Math.floor(delta /
            (TIME.MILLISECONDS_PER_MINUTE *
                TIME.SECONDS_PER_MINUTE *
                TIME.MINUTES_PER_HOUR)) % TIME.HOURS_PER_DAY,
        minute: Math.floor(delta /
            (TIME.MILLISECONDS_PER_MINUTE * TIME.SECONDS_PER_MINUTE)) % TIME.MINUTES_PER_HOUR,
        second: Math.floor(delta / TIME.MILLISECONDS_PER_MINUTE) %
            TIME.SECONDS_PER_MINUTE,
    };
    return counter;
};
export const setCounter = (counter) => {
    document.getElementById("day").innerText = counter.day.toString();
    document.getElementById("hour").innerText = counter.hour.toString();
    document.getElementById("minute").innerText = counter.minute.toString();
    document.getElementById("second").innerText = counter.second.toString();
};
