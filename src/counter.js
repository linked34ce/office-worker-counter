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

const getFirstCommuteDate = () => {
    const now = new Date();
    const year = now.getFullYear();

    const aprilFirst = new Date(`${year}-04-01 00:00:00 GMT+09:00`);
    const dayOfWeek = aprilFirst.getDay();

    let date;

    switch (dayOfWeek) {
        case 0:
            date = "02";
            break;
        case 6:
            date = "03";
            break;
        default:
            date = "01";
            break;
    }

    return new Date(`${year}-04-${date} 00:00:00 GMT+09:00`);
};

const getCounter = (delta) => {
    const date = new Date(delta);
    date.setHours(date.getHours() - 9);

    const counter = {
        day: Math.floor(delta / (1000 * 60 * 60 * 24)),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };

    return counter;
};

const setCounter = (counter) => {
    document.getElementById("day").innerText = counter.day;
    document.getElementById("hour").innerText = counter.hour;
    document.getElementById("minute").innerText = counter.minute;
    document.getElementById("second").innerText = counter.second;
};
