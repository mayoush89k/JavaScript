// 1.
function checkString(text) {
  if (typeof text == "string") {
    return true;
  } else return false;
}

function isString(Text, CallBackFunction) {
  if (CallBackFunction(Text)) {
    console.log(Text);
  }
}

isString("Checking My Text ", checkString);

// 2.
function toUpperFirstWord(word) {
  return word.charAt(0).toUpperCase();
}

function firstWordUpperCase(word, CallBackFunction) {
  let lastResult = CallBackFunction(word);
  for (let i = 1; i < word.length; i++) {
    if (word[i] == " ") {
      lastResult += "-";
      lastResult += CallBackFunction(word.slice(i + 1));
      i++;
    } else lastResult += word[i];
  }
  console.log(lastResult);
}

firstWordUpperCase("hello word, i am writing a code", toUpperFirstWord);

//3.
function toAddToFirstLetter(word) {
  return word.charAt(0) + ".";
}
firstWordUpperCase("hello word, i am writing a code", toAddToFirstLetter);

//4.
const numbersArray = [45,13, 84,56,49,94,15,79,51,32,54,10,52,67,40];
const numbersArray2 = [45,13, 84,56,49,94,15,79,51,3];

function TotalNumOfArray(arrayList) {
  let sum = 0;
  arrayList.forEach((number) => {
    sum += number;
  });
  return sum;
}

function CheckingTotal(myArray, myFunction) {
  if (myFunction(myArray) > 500) {
    console.log("The Total is more than 500");
  } else console.log("The Total is less than 500");
}

CheckingTotal(numbersArray , TotalNumOfArray)
CheckingTotal(numbersArray2 , TotalNumOfArray)