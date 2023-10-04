const body = document.querySelector("body");

const player1 = document.getElementById("player1-race");
const player2 = document.getElementById("player2-race");

let player1Position = 0;
let player2Position = 0;
body.addEventListener("keyup", (e) => {
    //● To move the car do not use the click event. Use the ‘keyup’ event.
  if (e.key == "ArrowRight" || e.key == 'Enter') {
    const randomPlayer = (Math.random() * 2).toFixed();
    if (randomPlayer == 0) {
      if (player1Position < player1.children.length - 2) {
        movePlayer(player1Position, player1);
        /* We need a way for JavaScript to update the board state.
        Create simple JavaScript functions that update a player’s
        position*/
        player1Position++;
    } else if(player1Position == player1.children.length -2){
        const result = document.createElement("section");
        // ● Find a way to announce the winner of the race
        result.innerText = "Player 1 Wins";
        body.appendChild(result);
        e.preventDefault()
        const again = document.createElement("button");
        again.innerText = "Again?";
        body.appendChild(again);
        again.addEventListener("click", (e) => {
          // ● Find a way to restart the game
          location.reload();
        });
        player1Position++
    }
} else {
    if (player2Position < player2.children.length - 2) {
        movePlayer(player2Position, player2);
        /* We need a way for JavaScript to update the board state.
        Create simple JavaScript functions that update a player’s
        position*/
        player2Position++;
    } else if(player2Position == player2.children.length -2){
        const result = document.createElement("section");
        //● Find a way to announce the winner of the race
        result.innerText = "Player 2 Wins";
        body.appendChild(result);
        e.preventDefault()
        const again = document.createElement("button");
        again.innerText = "Again?";
        body.appendChild(again);
        again.addEventListener("click", (e) => {
          // ● Find a way to restart the game
          location.reload();
        });
        player2Position++
      }
    }
  }
});

/*
We need to update a player’s position by moving the
‘active’ class from one ‘td’ to the next one. Of course,
there are other solutions to implement this game. Using a
table and a CSS class is one option. But we will stick to
this one.
*/
function movePlayer(playerPosition, player) {
  Array.from(player.children).forEach((playerClass) => {
    playerClass.removeAttribute("class");
  });
  player.children[playerPosition + 1].setAttribute("class", "active");
}
