document.getElementById("fetch").addEventListener("click",  async () => {
    //  fetch("https://icanhazdadjoke.com/")
    // .then((res) => {
    //     // console.log(res.joke.json());
    //     return res.json().joke})
    // .then((joke) => console.log(joke))
    // .catch((error) => console.log("error"));

const response = await fetch("https://icanhazdadjoke.com/");
var data = await response.json()
console.log(data);
});
