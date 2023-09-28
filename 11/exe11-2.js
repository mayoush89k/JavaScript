// 1.
const arrOfNumbers = [85, 71, 65, 98, 37, 21];

function DoubleValues(arrOfNum) {
  return arrOfNum.map((num) => num * 2);
}
console.log("Double Values: ", DoubleValues(arrOfNumbers));

// 2.
function onlyEvenValues(arrOfNum) {
  return arrOfNum.filter((num) => !(num % 2));
}
console.log("Only Even Values: ", onlyEvenValues(arrOfNumbers));

// 3.
// no need for loops or maps, because no need to invoke to array
function OnlyFirstAndLast(arrOftypes) {
  const stringType = arrOftypes.filter((types) => typeof types == "string");
  return `First String is ${stringType[0]} and last string is ${
    stringType[stringType.length - 1]
  }`;
}
console.log(
  "OnlyFirstAndLast: ",
  OnlyFirstAndLast([1, 2, "3", 5, "6", "7", "8"])
);

// 4.
function vowelCount(text) {
  const arrayText = text.split("");
  const vowelCounter = {};
  let vowels = "aeoui";

  arrayText.forEach((element) => {
    if (vowels.indexOf(element) !== -1) {
      if (vowelCounter[element]) {
        vowelCounter[element]++;
      } else {
        vowelCounter[element] = 1;
      }
    }
  });
  return vowelCounter;
}
console.log(
  "vowel Counter: ",
  vowelCount("hello world, this is vowel counter")
);

//5.
function capitalize(text) {
  return [...text].map((character) => character.toUpperCase()).join("");
}
console.log(
  "capitalize: ",
  capitalize("hello world, this is capitalized text")
);

// 6.
function shiftLetters(text) {
  return [...text]
    .map((character) => String.fromCharCode(character.charCodeAt(0) + 1))
    .join("");
}
console.log('"Hello World" shiftLetters: ', shiftLetters("Hello World"));

// 7.
function SwapCase(text) {
  let updatedText = [];
  text.split(" ").map((word, index) => {
    if (index % 2) {
      updatedText.push(capitalize(word));
    } else {
      updatedText.push(word.toLowerCase());
    }
  });
  return updatedText.join(" ");
}

console.log('Swap Case: ', SwapCase("this function is going to capitalize the even words in this sentence"));
