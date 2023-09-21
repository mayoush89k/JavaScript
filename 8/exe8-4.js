const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const countLetter = {};

array.forEach((word) => {
  for (let i = 0; i < word.length; i++) {
    currentChar = word.charAt(i).toLowerCase();
    if(currentChar != " "){
    if (countLetter[currentChar] == undefined) {
      countLetter[currentChar] = 1;
    } else {
      countLetter[currentChar] += 1;
    }}
  }
});

console.log(countLetter);
