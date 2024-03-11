import { DAY_OF_WEEK, DAY_OF_MONTH, MONTH } from "./const/time.js";

export const getFirstCommuteDate = (): Date => {
    const now = new Date();
    const thisYear = now.getFullYear();
    const year = now.getMonth() < MONTH.APRIL ? thisYear : thisYear + 1;

    const aprilFirst = new Date(`${year}/04/01 00:00:00 GMT+09:00`);
    const dayOfWeek = aprilFirst.getDay();

    let date: string;

    switch (dayOfWeek) {
        case DAY_OF_WEEK.SUNDAY:
            date = DAY_OF_MONTH.SECOND;
            break;
        case DAY_OF_WEEK.SATURDAY:
            date = DAY_OF_MONTH.THIRD;
            break;
        default:
            date = DAY_OF_MONTH.FIRST;
            break;
    }

    return new Date(`${year}/04/${date} 00:00:00 GMT+09:00`);
};
