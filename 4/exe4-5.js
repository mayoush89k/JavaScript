function leapYear(year) {
  if (!(year % 4)) {
    return !(year % 100) && (year % 400)
      ? "This is not a leap year"
      : "it is indeed a leap year";
  } else return "This is not a leap year";
}

console.log("this year 2023 ", leapYear(new Date().getFullYear));
console.log("2012" , leapYear(2012));
console.log("2100" , leapYear(2100));
console.log("1568" , leapYear(1568));
console.log("2400" , leapYear(2400));
