// 1. Fill an array with 100 of the same object using the array fill
// method.
const numbers = new Array(100);
numbers.fill({ key: "Value" });
console.log("1. Creating 100 of objects: ", numbers);

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
const SortedNumbers = Array.from(new Array(100).keys());
console.log("2. Creating an array of Sorted Numbers ", SortedNumbers);

//3. Convert only values of an object into one array.
const convertedObject = Object.values(numbers);
console.log("3. Converting an Object to Array : ", convertedObject);

// 4. Convert an array into one object.
const convertedArray = { ...SortedNumbers };
console.log("4. Converting an Array to Object : ", convertedArray);

// 5. Find out if an array is an array.
console.log(
  "checking 2. if creating an array, is Array: ",
  Array.isArray(SortedNumbers)
);
console.log(
  "checking 3. if converting object to array, is Array: ",
  Array.isArray(convertedObject)
);
console.log(
  "checking 4. if converting array to Object, is Array:  ",
  Array.isArray(convertedArray)
);

// 6. Copy an array.
// ● Create a copy of an array that won’t affect the original array if modified.
//! there are many ways , I will add them all to practice with them
//1. concat() method
console.log(
  "6. 6 ways of copying array to array without effecting the original "
);
console.log("1. concat() method ");
let concatArray = [].concat(SortedNumbers);
concatArray = concatArray.slice(0, 20);
console.log(concatArray);

//2. from() method
console.log("2. from() method ");
let fromArray = Array.from(SortedNumbers);
fromArray = fromArray.slice(20, 35);
console.log(fromArray);

//3. spread operator
console.log("3. spread operator ");
let spreadArray = [...SortedNumbers];
spreadArray = spreadArray.slice(35, 50);
console.log(spreadArray);

//4. map() method
console.log("4. map() method ");
let mapArray = SortedNumbers.map((number) => number);
mapArray = mapArray.slice(50, 65);
console.log(mapArray);

//5. structuredClone() method
console.log("5. structuredClone() method");
let structuredArray = structuredClone(SortedNumbers);
structuredArray = structuredArray.slice(65, 80);
console.log(structuredArray);

//6. JSON.stringify() and JSON.parse()
console.log("6. JSON.stringify() and JSON.parse()");
let jsonArray = JSON.parse(JSON.stringify(SortedNumbers));
jsonArray = jsonArray.slice(80, 100);
console.log(jsonArray);
console.log(" ● Original Array : ", SortedNumbers);

// ● Create a copy of an array that will affect the original array if modified.
let copiedArray = SortedNumbers;
copiedArray.push(100);
console.log("● Copied Array after adding new element ", copiedArray);
console.log(
  "Original array after adding value to copied array: ",
  SortedNumbers
);
