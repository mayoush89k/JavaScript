// From function declarations to explicit and implicit return functions (one of each).
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }
const welcome1 = () => "Welcome to Appleseeds Bootcamp!";
const welcome2 = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

const power1 = (a) => Math.pow(a, 2);
const power2 = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

// From function expressions to IIFE functions.
// const squareRoot = (a) => Math.sqrt(a);
function squareRoot(a) {
  return Math.sqrt(a);
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomNumbers(a, b) {
  return Math.random() * (a - b) + b;
}
