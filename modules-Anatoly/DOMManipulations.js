export { monthElement, dateNumberElements, previousButton, nextButton}

const previousButton = document.querySelector('button.previous');
const nextButton = document.querySelector('button.next');
const monthElement = document.querySelector('.month');
const dateNumberElements = [...document.querySelectorAll('.date-number')];
