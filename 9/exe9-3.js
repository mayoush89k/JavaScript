const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
let checking_f1 = 0;
let checking = true;

let f1 = 0;
while (checking && f1 < food1.length) {
  for (let f2 = 0; f2 < food2.length; f2++) {
    if (food1[f1] == food2[f2]) {
      checking_f1++;
    }
  }
  if (checking_f1 < 1) {
    console.log(checking);
    checking = false;
  }
  f1++;
}
if (checking) {
  console.log("Foods are similar");
} else {
  console.log("There is a difference between the foods");
}

// I added another array that is similar but not in same order
const food3 = ["Cucumber", "Ice-cream", "Meat", "Pasta", "Noodle"];

checking_f1 = 0;
checking = true;
f1 = 0;

while (checking && f1 < food1.length) {
  for (let f3 = 0; f3 < food3.length; f3++) {
    if (food1[f1] == food3[f3]) {
      checking_f1++;
    }
  }
  if (checking_f1 < 1) {
    checking = false;
  }
  f1++;
}
if (checking) {
  console.log("Foods are similar");
} else {
  console.log("There is a difference between the foods");
}
