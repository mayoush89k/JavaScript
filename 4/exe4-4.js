printNum(200);

function printNum(number) {
  for (let i = 1; i <= number; i++) {
    if (!(i % 7)) {
      let fullNum = i + "";
      console.log(fullNum.includes(7) ? "BOOM BOOM" : "BOOM");
    } else {
      console.log(i);
    }
  }
}
