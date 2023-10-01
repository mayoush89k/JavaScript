// Block 1
/*
10
20
20
because of defining x in global scope, 
first time could console log it, 
the second time the console log read from the block scope, 
but the third time read from the changes that second one has made at x of the global scope
*/

//block 2
/*
10
20
10
like block 1 - but the difference is in third time , the console log read from global scope, with no changing because function scope create x as new variable for it only
*/


// Block 3
/*
10
20
30
30
10

in global scope x is defined as var with value = 10
then in function scope the x is defined as var = 20 
but the third definition is let so this didn't change the function scope of x, so it console log it but outside of it will be back as function scope definition = 20
also outside of function scope x stays as it is defined as global scope = 10
*/

// Block 4
/*
undefined

because in function scope the x is defined as new variable, that will be read only inside of it,
so that's why it is undefined , there is no value of it in function scope definition 
*/

//Block 5
/*
undefined
undefined
100
x and y are defined with no value, 
if condition is false so won't get inside of it , but if it is true x will be changed to 50
but after y = 100 , y value is changed to 100 so console log will print the number
*/

//Block 6
/*
foo
! bar is not a function 

function is hoisting its definition to be invoke anytime, and will work perfectly
but expression function can't be readable anytime, must define it and then invoke it, and because of it defined as var, var will be hoisting as undefined variable
*/