import { getCounter, setCounter, getFirstCommuteDate, } from "./functions/index.js";
document.addEventListener("DOMContentLoaded", () => {
    const firstCommuteDate = getFirstCommuteDate();
    let delta;
    setInterval(() => {
        const now = new Date();
        delta = firstCommuteDate.getTime() - now.getTime();
        const counter = getCounter(delta);
        setCounter(counter);
    }, 1);
});
