let guess = Math.floor(Math.random() * 50);
let keep_trying = true;

while (keep_trying) {
  client_guess = Number(prompt("Enter a number"));
  if(client_guess > 50){
    alert('under 50 ');
  }
  if (client_guess == guess) {
    alert("Correct!");
    keep_trying = false;
  }
  else
  if(client_guess < guess){
    console.log('Too low');
  }
  else
    console.log('Too hight');
}
