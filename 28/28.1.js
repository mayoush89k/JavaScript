const body = document.querySelector("body");
const title = document.querySelector("#title");
const joke = document.querySelector("#joke");

document.getElementById("fetch").addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: { Accept: "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      title.innerText = `Joke ID is ${data.id}`; // instead of title
      joke.innerText = data.joke;
    });
});
