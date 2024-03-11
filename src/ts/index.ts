import {
    getCounter,
    setCounter,
    getFirstCommuteDate,
} from "./functions/index.js";

document.addEventListener("DOMContentLoaded", () => {
    const firstCommuteDate = getFirstCommuteDate();

    let delta: number;

    setInterval(() => {
        const now = new Date();
        delta = firstCommuteDate.getTime() - now.getTime();
        const counter = getCounter(delta);
        setCounter(counter);
    }, 1);
});
