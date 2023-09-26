function calcAverage(arr) {
  var sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);


// 1. line 2 / 4 
// can't add a number to undefined variable

// 2. in debugging steps the num is defined as undefined value, so when the steps reaches line 4 sum changed to NaN (Not-a-Number)

// 3. couldn't add a number to undefined variables 

// 4. 
function calcAverage(arr) {
    var sum = 0; // define it with zero
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum; // for average result must be return sum / arr.length;
  }
  console.log(calcAverage([85, 90, 92]));