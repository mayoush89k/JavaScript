// block 1
/*
0 - because a is a parameter of immediateA(0) 
*/

//Block 2
/*
1 - because the calling in function goes to definition in function, and make changes to it only, becasue function create new variables and work with them only
0 - because function created new one so what happen in function stays in function
*/

//Block 3
/*
'bar' - because console log goes to module function and then bar that is inside object publicInterface, bar function return 'bar', regular work
'bam' - because console log goes to module function and then bam function that will invoke to another function, addToFoo is overwriting on foo variable to parameter = "bam" , and returns it
*/

//Block 4
/*
count is 0 - because
const [increment, log] = createIncrement(); invoke to function and initialize the count = 0 and message = 'count is 0'
increment() is not making any changes to message, only in count
log() will show us the latest message value, that is not being changed
*/

// Block 5
/*
10
20
10

last console log is printing the x value , that hasn't changed because the function x is new and for function only.
*/

// Block 6
/*
10
20
30
20
10
because : 
var x = 10;
console.log(x); // global variable = 10
function test() {
  var x = 20; //function scope
  console.log(x); // inside function (new variable) x = 20
  if (x > 10) {
    let x = 30; // block scope
    console.log(x); // x = 30
  }
  console.log(x); // reads from function scope x = 20
}
test();
console.log(x); // read from global scope x = 10
*/
// Block 7
/*
    undefined - because console log is inside function scope that it's declaration is undefined var x with no value
*/

//Block 8
/*
undefined 
undefined
100
var x , y is defined with no value, so the console log is undefined
but y = 100 is given the y a new value, so the console log is 100 
*/

//block 9
/*
foo
! bar is not a function 

function is hoisting its definition to be invoke anytime, and will work perfectly
but expression function can't be readable anytime, must define it and then invoke it, and because of it defined as var, var will be hoisting as undefined variable
*/