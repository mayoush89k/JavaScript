let john_team_score1 = 89;
let john_team_score2 = 120;
let john_team_score3 = 103;
let mike_team_score1 = 116;
let mike_team_score2 = 94;
let mike_team_score3 = 123;

//1.Calculate the average score for each team.
let john_team_avg =
  (john_team_score1 + john_team_score2 + john_team_score3) / 3;
let mike_team_avg =
  (mike_team_score1 + mike_team_score2 + mike_team_score3) / 3;

/*2. Decide which team wins on average (highest average
    score), and print the winner to the console. Also include
    the average score in the output.*/
if (john_team_avg > mike_team_avg) {
  console.log("JOHN's team's average WINS");
} else if (john_team_avg < mike_team_avg) {
  console.log("MIKE's team's average WINS");
} else console.log("it is a draw");

/*3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
    same average score).*/

john_team_score1 = 189;
john_team_score2 = 130;
mike_team_score3 = 100;
john_team_avg = (john_team_score1 + john_team_score2 + john_team_score3) / 3;
mike_team_avg = (mike_team_score1 + mike_team_score2 + mike_team_score3) / 3;
if (john_team_avg > mike_team_avg) {
  console.log("JOHN's team's average WINS");
} else {
  if (john_team_avg < mike_team_avg) {
    console.log("MIKE's team's average WINS");
  } else console.log("it is a draw");
}

/*   4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.*/

let mary_team_score1 = 97;
let mary_team_score2 = 134;
let mary_team_score3 = 105;
let mary_team_avg =
  (mary_team_score1 + mary_team_score2 + mary_team_score3) / 3;
if (john_team_avg > mike_team_avg && john_team_avg > mary_team_avg) {
  console.log("JOHN's team's average WINS");
} else {
  if (mike_team_avg > mary_team_avg) {
    console.log("MIKE's team's average WINS");
  } else if (mike_team_avg < mary_team_avg) {
    console.log("MARY's team's average WINS");
  } else {
    console.log("it is a draw between three teams");
  }
}
/*   5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.*/

mary_team_score3 = 225;
mike_team_score2 = 115;
john_team_score1 = 135;
mary_team_avg = (mary_team_score1 + mary_team_score2 + mary_team_score3) / 3;
john_team_avg = (john_team_score1 + john_team_score2 + john_team_score3) / 3;
mike_team_avg = (mike_team_score1 + mike_team_score2 + mike_team_score3) / 3;
if (john_team_avg > mike_team_avg && john_team_avg > mary_team_avg) {
  console.log("JOHN's team's average WINS");
} else {
  if (mike_team_avg > mary_team_avg) {
    console.log("MIKE's team's average WINS");
  } else if (mike_team_avg < mary_team_avg) {
    console.log("MARY's team's average WINS");
  } else {
    console.log("it is a draw between three teams");
  }
}
