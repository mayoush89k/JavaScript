const numbers = [1, -5, 666, 2, 400, 11]

const SortFromSmaller = [...numbers]
SortFromSmaller.sort((num1 , num2) => num1 - num2)

const SortFromBigger = [...numbers]
SortFromBigger.sort((num1 , num2) => num2 - num1)

console.log("Sort From Smaller: ", SortFromSmaller);
console.log("Sort From Bigger: ", SortFromBigger);