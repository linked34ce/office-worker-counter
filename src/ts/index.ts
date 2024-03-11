import { updateCounter, getFirstCommuteDate } from "./functions/index.js";
import { INTERVAL } from "./functions/const/index.js";

document.addEventListener("DOMContentLoaded", () => {
    const firstCommuteDate = getFirstCommuteDate();
    let delta: number;
    setInterval(() => updateCounter(firstCommuteDate, delta), INTERVAL);
});
