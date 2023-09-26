function getSum(arr1, arr2) {
  const sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]); // I don't know if this missing coma is part of the question.

// 1.
/*
exe15-1.js:3 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
at getSum (exe15-1.js:3:28)
at exe15-1.js:10:1
*/
// getSum([1, 2, 3][5, 66, 23]); I don't know if this missing coma is part of the question.

// ! the main thin I realize the problem by activate it in html file. this error msg means :
/* exe15-1.js:4 Uncaught TypeError: Assignment to constant variable.
    at getSum*/
// ! line 4 has a const Variable. so I can make changes with it's value.

// 2. in console page, I didn't have to search by debugger.

// 3. that I am making changes with const variable, that is not allowed as const.

// 4.
function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);

// ! in scope  I could follow the code and the result of sum is 100
