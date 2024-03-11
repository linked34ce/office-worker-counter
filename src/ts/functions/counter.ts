import { type Counter } from "../types/index.js";
import { TIME } from "./const/index.js";

export const getCounter = (delta: number): Counter => {
    const counter: Counter = {
        day: Math.floor(
            delta /
                (TIME.MILLISECONDS_PER_MINUTE *
                    TIME.SECONDS_PER_MINUTE *
                    TIME.MINUTES_PER_HOUR *
                    TIME.HOURS_PER_DAY),
        ),
        hour:
            Math.floor(
                delta /
                    (TIME.MILLISECONDS_PER_MINUTE *
                        TIME.SECONDS_PER_MINUTE *
                        TIME.MINUTES_PER_HOUR),
            ) % TIME.HOURS_PER_DAY,
        minute:
            Math.floor(
                delta /
                    (TIME.MILLISECONDS_PER_MINUTE * TIME.SECONDS_PER_MINUTE),
            ) % TIME.MINUTES_PER_HOUR,
        second:
            Math.floor(delta / TIME.MILLISECONDS_PER_MINUTE) %
            TIME.SECONDS_PER_MINUTE,
    };

    return counter;
};

export const setCounter = (counter: Counter) => {
    document.getElementById("day")!.innerText = counter.day.toString();
    document.getElementById("hour")!.innerText = counter.hour.toString();
    document.getElementById("minute")!.innerText = counter.minute.toString();
    document.getElementById("second")!.innerText = counter.second.toString();
};
