const populations = [20, 60, 46, 24, 36, 48, 79];

function populationPercentages(populations) {
  const percentage = [];
  for (let i = 0; i < populations.length; i++) {
    percentage.push(populations[i]);
    /*On each iteration use the function we created earlier
(module 3, ex.3.3-declarations vs expressions) for each
element of the array*/
//! because we had not worked with module 3 so I just push the number as it is for now
  }
  return percentage;
}
console.log("result ", populationPercentages(populations));

