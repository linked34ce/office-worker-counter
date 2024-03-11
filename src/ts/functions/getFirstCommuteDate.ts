export const getFirstCommuteDate = (): Date => {
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
