
import { currentMonth, currentYear, monthIndexToName } from './utilis.js';
import {previousButton, nextButton, monthElement, dateNumberElements} from './DOMManipulations.js'

previousButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderMonth(currentMonth, currentYear);
})

nextButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderMonth(currentMonth, currentYear);
})


const renderMonth = (monthIndex, year) => {
    const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    console.log(numDaysInMonth);
    const firstDate = new Date(year, monthIndex);
    console.log(firstDate);
    const firstDay = firstDate.getDay();
    console.log(firstDay);

    monthElement.innerText = `${year} / ${monthIndexToName[monthIndex]}`;

    dateNumberElements.forEach((el, i) => {

        const dateNumber = (i + 1) - firstDay;
        el.innerText = dateNumber > 0 && dateNumber <= numDaysInMonth ? dateNumber : '';

        const today = new Date();
        console.log(today)
        if (today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === (i + 1) - firstDay) {
            el.classList.add('today');
        } else {
            el.classList.remove('today');
        }
    })
}

renderMonth(currentMonth, currentYear)

