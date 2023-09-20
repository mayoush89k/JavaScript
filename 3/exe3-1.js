/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }

const welcome = () => {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

const power = (a) => Math.pow(myNumber, 2);

// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// }
const add1 = (a, b) => a + b;

const add2 = (a, b) => {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
// const hello = () => "Hello!";

function sayHello() {
  return "Hello";
}
const hello = sayHello();
console.log(hello);

// const squareRoot = (a) => Math.sqrt(a);
function calculateSquare(a) {
  return Math.sqrt(a);
}
const squareRoot = calculateSquare(4);

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;
function randomize(a, b) {
  return Math.random() * (a - b) + b;
}

const randomNumbers = randomize(2, 10);
console.log(randomNumbers);
