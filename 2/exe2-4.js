let currentDate = new Date();
let dayOfMonth = currentDate.getDate();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let dayOfWeek = currentDate.getDay();


switch (dayOfWeek) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  default:
    dayOfWeek = "Saturday";
    break;
}
switch (month) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:
    month = "Month Not found";
    break;
}

console.log("1. Name of Current day: ", dayOfWeek);
console.log("2. current day of month : ", dayOfMonth);
console.log("3. current month: ", month);
console.log("4. current year: ", year);

console.log(`Today is ${dayOfWeek} the ${dayOfMonth} of ${month} ${year}`);
