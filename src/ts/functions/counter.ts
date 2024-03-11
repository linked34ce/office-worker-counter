import { type Counter } from "../types/index.js";
import { TIME } from "./const/index.js";

const getCounter = (delta: number): Counter => {
    const totalSeconds = delta / TIME.MILLISECONDS_PER_MINUTE;
    const totalMinutes = totalSeconds / TIME.SECONDS_PER_MINUTE;
    const totalHours = totalMinutes / TIME.MINUTES_PER_HOUR;
    const totalDays = totalHours / TIME.HOURS_PER_DAY;

    const counter: Counter = {
        day: Math.floor(totalDays),
        hour: Math.floor(totalHours) % TIME.HOURS_PER_DAY,
        minute: Math.floor(totalMinutes) % TIME.MINUTES_PER_HOUR,
        second: Math.floor(totalSeconds) % TIME.SECONDS_PER_MINUTE,
    };

    return counter;
};

const setCounter = (counter: Counter) => {
    document.getElementById("day")!.innerText = counter.day.toString();
    document.getElementById("hour")!.innerText = counter.hour.toString();
    document.getElementById("minute")!.innerText = counter.minute.toString();
    document.getElementById("second")!.innerText = counter.second.toString();
};

export const updateCounter = (firstCommuteDate: Date, delta: number) => {
    const now = new Date();
    delta = firstCommuteDate.getTime() - now.getTime();
    const counter = getCounter(delta);
    setCounter(counter);
};
