const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();
const monthIndexToName = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
};

export { now, currentMonth, currentYear, monthIndexToName };