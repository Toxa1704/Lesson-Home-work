const inputDay = document.querySelector('.day input[name="day"]');
const inputMonth = document.querySelector('.month input[name="month"]');
const inputYear = document.querySelector('.year input[name="year"]');

const dateToday = new Date();
const yearToday = Number(dateToday.getFullYear());
const monthToday = Number(dateToday.getMonth() + 1);
const dayToday = Number(dateToday.getDate());

let origYear = ""
let origMonth = ""
let  origDay = ""

inputDay.addEventListener('blur', () => {
  if (Number(inputDay.value) > 0 && Number(inputDay.value) < 32 && Number(inputMonth.value) !== 2) {
    document.querySelector('.day').classList.remove('error')
    document.querySelector('.error-day').style.display = "none"
    origDay = inputDay.value
  }else if(Number(inputDay.value) > 0 && Number(inputDay.value) < 30 && Number(inputMonth.value) == 2 && Number(inputYear.value)%4 === 0){
    document.querySelector('.day').classList.remove('error')
    document.querySelector('.error-day').style.display = "none"
    origDay = inputDay.value
  }else if(Number(inputDay.value) > 0 && Number(inputDay.value) < 29 && Number(inputMonth.value) == 2 && Number(inputYear.value)%4 > 0){
    document.querySelector('.day').classList.remove('error')
    document.querySelector('.error-day').style.display = "none"
    origDay = inputDay.value
  }else{
    document.querySelector('.day').classList.add('error')
  document.querySelector('.error-day').style.display = "block"
  }
  
  console.log(inputDay.value);
});

inputMonth.addEventListener('blur', () => {
  if (Number(inputMonth.value) > 0 && Number(inputMonth.value) < 13) {
    document.querySelector('.month').classList.remove('error')
    document.querySelector('.error-month').style.display = "none"
    origMonth = inputMonth.value
  }else {
    document.querySelector('.month').classList.add('error')
    document.querySelector('.error-month').style.display = "block"
  }
  console.log(inputMonth.value);
})

inputYear.addEventListener('blur', () => {
  if (Number(inputYear.value) > 0 && Number(inputYear.value) <= Number(yearToday)) {
    document.querySelector('.year').classList.remove('error')
    document.querySelector('.error-year').style.display = "none"
    origYear = inputYear.value
  }else {
    document.querySelector('.year').classList.add('error')
    document.querySelector('.error-year').style.display = "block"
  }
  console.log(inputYear.value);
})

console.log(origYear, origMonth, origDay);

document.querySelector("button").addEventListener("click", () => {
  
  diffYears();
  diffMonts();
  diffDay();
});

let year = "";
let month = "";
let day = "";

const diffYears = () => {
  if (origMonth < monthToday) {
    year = yearToday - origYear;
  } else {
    year = yearToday - origYear - 1;
  }
  document.querySelector('.output-date-years input[name="years"]').value =
    Number(year);
    console.log(Number(year));
};

const diffMonts = () => {
  if (dayToday >= origDay && monthToday >= origMonth) {
    month = monthToday - origMonth;
  } else if (dateToday < origDay && monthToday >= origMonth) {
    month = monthToday - origMonth - 1;
  }

  document.querySelector('.output-date-month input[name="month"]').value =
    Number(month);
};

const diffDay = () => {
  if (
    dayToday == 1 ||
    dayToday == 3 ||
    dayToday == 5 ||
    dayToday == 7 ||
    dayToday == 8 ||
    dayToday == 10 ||
    (dayToday == 12 && dateToday < origDay)
  ) {
    day = 30 - origDay + dayToday;
  } else if (
    dayToday == 4 ||
    dayToday == 6 ||
    dayToday == 9 ||
    (dayToday == 11 && dateToday < origDay)
  ) {
    day = 31 - origDay + dayToday;
    console.log(day);
  } else if (dateToday < origDay && monthToday == 3 && origYear % 4 != 0) {
    day = 28 - origDay + dayToday;
  } else if (dateToday < origDay && monthToday == 3 && origYear % 4 == 0) {
    day = 29 - origDay + dayToday;
  }
  document.querySelector('.output-date-days input[name="days"]').value =
    Number(day);
};

console.log(year, Number(month), day);
