let grade = prompt("what is your grade? (A, B, C, D, F)");

grade = grade.toUpperCase();
console.log(grade);

if (grade == "A") {
  console.log("your score is 90 - 100");
} else if (grade == "B") {
  console.log("your score is 80 - 89");
} else if (grade == "C") {
  console.log("your score is 70 - 79");
} else if (grade == "D") {
  console.log("your score is 65 - 69");
} else if (grade == "F") {
  console.log("your score is 0 - 64");
} else {
  console.log("please enter a valid letter(A B C D F");
}

let score = prompt("what is your score? (0 - 100)");

score = Number(score);
console.log(typeof score);

if (score >= 90 && score <= 100) {
  console.log("your Grade is 'A'");
} else if (score >= 80) {
  console.log("your Grade is 'B'");
} else if (score >= 70) {
  console.log("your Grade is 'C'");
} else if (score >= 65) {
  console.log("your Grade is 'D'");
} else if (score >= 0) {
  console.log("your Grade is 'F'");
} else {
  console.log("please enter a valid Number (0 - 100)");
}
