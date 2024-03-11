type Counter = {
    day: number;
    hour: number;
    minute: number;
    second: number;
};

const TIME = {
    HOURS_PER_DAY: 24,
    MINUTES_PER_HOUR: 60,
    SECONDS_PER_MINUTE: 60,
    MILLISECONDS_PER_MINUTE: 1000,
};

document.addEventListener("DOMContentLoaded", () => {
    const getFirstCommuteDate = (): Date => {
        const now = new Date();
        const thisYear = now.getFullYear();
        const year = now.getMonth() < 3 ? thisYear : thisYear + 1;

        const aprilFirst = new Date(`${year}/04/01 00:00:00 GMT+09:00`);
        const dayOfWeek = aprilFirst.getDay();

        let date: string;

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

        return new Date(`${year}/04/${date} 00:00:00 GMT+09:00`);
    };

    const getCounter = (delta: number): Counter => {
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
                        (TIME.MILLISECONDS_PER_MINUTE *
                            TIME.SECONDS_PER_MINUTE),
                ) % TIME.MINUTES_PER_HOUR,
            second:
                Math.floor(delta / TIME.MILLISECONDS_PER_MINUTE) %
                TIME.SECONDS_PER_MINUTE,
        };

        return counter;
    };

    const setCounter = (counter: Counter) => {
        document.getElementById("day")!.innerText = counter.day.toString();
        document.getElementById("hour")!.innerText = counter.hour.toString();
        document.getElementById("minute")!.innerText =
            counter.minute.toString();
        document.getElementById("second")!.innerText =
            counter.second.toString();
    };

    const firstCommuteDate = getFirstCommuteDate();

    let delta: number;

    setInterval(() => {
        const now = new Date();
        delta = firstCommuteDate.getTime() - now.getTime();
        const counter = getCounter(delta);
        setCounter(counter);
    }, 1);
});
