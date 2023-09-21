const populations = [202, 603, 464, 245, 366, 487, 798];
let world_population = 7900;

function populationPercentages(populations) {
  const percentage = [];
  for (let i = 0; i < populations.length; i++) {
    percentage.push(((populations[i]/world_population) * 100).toFixed(2));
    /*On each iteration use the function we created earlier
(module 3, ex.3.3-declarations vs expressions) for each
element of the array*/
 }
  return percentage;
}
console.log("result ", populationPercentages(populations));

