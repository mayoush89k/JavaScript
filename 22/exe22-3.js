const comment = document.querySelector("#comment");
const randomBox = document.querySelector("#random");
const guess = document.querySelector("#guess");

const characters = "abcdefghijklmnopqrstuvwxyz";
const randomLetter = characters.charAt(
  (Math.random() * characters.length).toFixed()
);
console.log("randomLetter: ", randomLetter);
const body = document.querySelector("body");
body.addEventListener("keydown", (e) => {
  /*● Users cannot type the same letter twice. If the user did so,
        display a message that he already guessed the letter.
        Constraints*/
  if (guess.innerText.includes(e.key)) {
    comment.innerText = "You already guessed this letter";
    comment.style.color = "";
  } else {
    if (characters.includes(e.key)) {
      //● Display all the letters the user has guessed
      guess.innerHTML += e.key + ",";
      console.log(e.key);
      if (e.key == randomLetter) {
        //● The message should be in the color green
        comment.style.color = "green";
        //● Display a message that the user was right
        comment.innerHTML = "You guess the letter";
        //● Show the right letter to the user
        randomBox.innerHTML = randomLetter;
        //Display a message if he wants to play again with a confirm button
        const playAgain = document.createElement("button");
        playAgain.innerHTML = "do you want to play again";
        document.body.appendChild(playAgain);
        //! When the game is finished, a user cannot guess a letter
        //! until he presses the confirm button to start a new game - not working
        e.preventDefault();
        //● If the user wants to play again reset the DOM as it was in the beginning
        playAgain.addEventListener("click", (e) => {
          window.location.reload();
        });
      } else {
        //● The message should be in the color red
        comment.style.color = "red";
        //● Display a message that the user got wrong
        comment.innerHTML = "Nope, wrong letter";
      }
    } else {
      /* A user can only guess a valid alphabetical letter. If the
        user types a non-alphabetical letter, display a message
        that this is not allowed */
      comment.innerText = "This key is not allowed";
      comment.style.color = "";
    }
  }
});
