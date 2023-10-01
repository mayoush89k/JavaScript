//Block 1
/* 
undefined - because a is defined as var, so hoisting it as undefined.
2 - functions can be hoisting at the first, and the invoke will work when ever is called
*/

// Block 2
/*
'Aurelio De Rosa' - the function invoke, goes to inside the getFullName, that returns fullName under prop
'Aurelio De Rosa' - the test variable can invoke from function getFullName and returns the full Name
*/

//Block 3
/*
undefined
undefined

both of the a and b haven't been defined in global scope
*/ 

// Block 4 
/*
"2" 
"2"

the invoke reads the latest function definition
*/

// Block 5
/* 
! d is not defined (error msg) - d is defined in block scope can't be readable out of the block
undefined - e is defined in block scopes but being defined as var will hoisting it as undefined 
*/

//Block 6
/*
"Value of f in local scope: " undefined  - f is not being defined yet but being defined by var hoisting it as undefined  
"Value of f in local scope: " 1 - invoking the function after defining f so will return it's value with no problem, and f is defined in global scope
*/