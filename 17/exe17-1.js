// block 1
/*
var firstResult = someFunction(9); - will return the function otherFunction itself,
var result = firstResult(2); - will return the return of function otherFunction (b=5)
because first line is equal to the function return (another function)
the second line is invoking to the return of function and return it's return value
*/

// block 2
/* 
1 - because of defined a new function inside the b function with the same variable of a, 
so the changed value of a = 10 will be overwriting the function's value, 
without effecting the global scope of a
*/

// Block 3
/*
3
3
3
I think this because of the definition of i is in global scope, so the setTimeout function is console log after for loop so it is increasing the i till i = 3, so the timeout will console log after the time is finished
in this case the i is 3, 3 times
*/


