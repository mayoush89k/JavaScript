const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

let similarity = 0;

for (let f1 = 0; f1 < food1.length; f1++) {
  if (food2.indexOf(food1[f1]) > -1) {
    similarity++;
  }
}
if (similarity == food1.length || similarity == food2.length) {
  console.log("Foods are similar");
} else {
  console.log("Foods are not Similar");
}

// I added another array that is similar but not in same order
const food3 = ["Cucumber", "Ice-cream", "Meat", "Pasta", "Noodle"];
similarity = 0;

for (let f1 = 0; f1 < food1.length; f1++) {
  if (food3.indexOf(food1[f1]) > -1) {
    similarity++;
  }
}
if (similarity == food1.length || similarity == food3.length) {
  console.log("Foods are similar");
} else {
  console.log("Foods are not Similar");
}
