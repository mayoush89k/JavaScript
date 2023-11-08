// 1. filter method
Array.prototype.findBigger = function (number) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] > number) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

myArray = [20, 50, 90, 40, 50, 60, 20, 70, 50];

// console.log(myArray.findBigger(41));

// 2. find method
Array.prototype.findMyNumber = function (number) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == number) {
      result = this[i];
    }
  }
  return result;
};

// console.log(myArray.findMyNumber(50));

// 3. reduce method
Array.prototype.arrayAddition = function () {
  let oldAddition = 0;
  for (let index = 0; index < this.length; index++) {
    if (index == this.length - 1) {
      return oldAddition;
    } else {
      oldAddition += add(this[index] , this[index + 1]);
    }
  }
};

function add(num1, num2) {
  return num1 + num2;
}
