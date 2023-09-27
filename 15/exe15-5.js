function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

// 1.
// ! counter in line 5 is not saving formula to anywhere so it is not increasing, It is useless line.

// 2.
// ! after stopping the code in debugger steps, I realize that the counter value is not increasing. but still the code is reading this line without making changes to counter variable.

//3.
// ! useless line , making no changes to counter

//4.
function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1; // or counter++
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
