const numbers = [
    5, 9, 8, 4, 7, 6, 3, 5, 8, 9, 4, 2, 5, 8, 7, 5, 4, 6, 9, 3, 2, 1, 5, 1, 2, 3,
    6, 5, 9, 8, 4, 7,
  ];
const unDuplicated = [];
for (let r = 0; r < numbers.length; r++) {
  let current = numbers[r];
  if (unDuplicated.indexOf(current) < 0) {
    unDuplicated.push(numbers[r]);
    numbers.shift();

    for (let x = numbers.length; x > 0 && numbers.indexOf(current) > 0; x--) {
      numbers.splice(numbers.indexOf(current), 1);
    }
  } else {
    numbers.shift();
  }
  r--;
}

console.log("using IndexOf result : ", unDuplicated);
