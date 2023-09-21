let world_population = 7900;

function percentageOfWorld1(population) {
  return ((population / world_population) * 100).toFixed(1);
}

let china = percentageOfWorld1(1441);
let India = percentageOfWorld1(1408);
let Russia = percentageOfWorld1(143.4);

console.log("Population percentage of China: " , china);
console.log("Population percentage of India: " , India);
console.log("Population percentage of Russia: " , Russia);

const percentageOfWorld2 = (population) => ((population / world_population) *100).toFixed(1);

let USA = percentageOfWorld2(331.9);
let Indonesia = percentageOfWorld2(278.0);
let Brazil = percentageOfWorld2(216.6);


console.log("Population percentage of USA: " , USA);
console.log("Population percentage of Indonesia: " , Indonesia);
console.log("Population percentage of Brazil: " , Brazil);
