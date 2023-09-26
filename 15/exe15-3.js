function getSumOfEven(arr) {
  return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 1. line 3 value of array in index 10, but the last value is in array index 9. so 10 in out of array length

// 2. when rolling the code, the debugger shows me the length of array, and when it calls arr[10], I realize it is out of the array

// 3. calling value that is outside of array, that is undefined

// 4.
function getSumOfEven(arr) {
    return arr[0]+arr[2]+arr[4]+arr[6]+ arr[8];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
