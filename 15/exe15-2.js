// function findSmallest(a, b, c) {
//   if (a > b > c) {
//     return c;
//   } else if (a > c > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// findSmallest(52, 66, 2);

// 1. line 10 
// findSmalest(52 , 66 , 2)
// the reading to function must be 100% the same name of function that is defined otherwise is treated as undefined


// 1. the actual problem is in line 2 if (a > b > c) and if (a > c > b)
// the if is checking only the first two variables only without the third one

// 2. after pausing debugger it can show me how is the syntax work, beside every line 
// in line 2 the code is if(a>b>c) but the syntax work as comparing only a > b 
// the same in line 4

// 3. comparing must be only two variables

// 4. 

function findSmallest(a, b, c) {
    if (a > b && b > c) {
      return c;
    } else if (a > c && c > b) {
      return a;
    } else {
      return b;
    }
  }
findSmallest(52, 66, 2);
  