
//create three different ways to declare variables
let x = 1;
var y = 2;
const z = "3";


//declare a variable and reassign a value to it
let var1 = 1;
console.log("variable var1 = " + var1); 

//create a variable and after that assign a string with its value being: He's got it!
let var2 = 'He\'s got it!'; 
console.log(var2);

// 1. create a variable and assign a value on how much a restaurant bill is.
let Drinks = 10 + 5 + 8;
let Main_course = 100 + 145 + 98;
let Appetizer = 50 + 34 + 85;
let Desserts = 40 + 61 + 36;

let Bill = Drinks + Main_course + Appetizer + Desserts;
console.log(Bill);

//2. create a variable and assign a value on how much tax they should pay.
let tax = 0.17; // tax is 17% 

//3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
let total_Bill = Bill + (Bill * tax); 
console.log(total_Bill);

// Round the number 50.6 to its nearest integer
let round = total_Bill.toFixed();
console.log(round);

//Create a variable that is undefined
let myVar ;

