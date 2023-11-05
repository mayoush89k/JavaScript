// question 1
// point to Window, because window is the highest level document will reach
console.log(this);

// 2.
const myObj = {
  name: "Timmy",
  // the correction of this code is converting the arrow function to regular function

  greet: function () {
    console.log(`Hello ${this.name}`);
  },
  //   greet: () => {
  //     console.log(`Hello ${this.name}`);
  //   },
};
myObj.greet();

// 3. point to window
const myFuncDec = function () {
  console.log(this);
};

myFuncDec();

// 4. point to window
const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();

// 5. point to window
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});
// fixing code to return the element itself
document.querySelector(".element").addEventListener(function () {
    console.log(this);
});