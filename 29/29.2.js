const body = document.querySelector("body");
const title = document.querySelector("#title");
const joke = document.querySelector("#joke");

document.getElementById("fetch").addEventListener("click", async () => {
  const setting = {
    method: "GET",
    headers: { Accept: "application/json" },
  };
  try {
    const responseFetch = await fetch("https://icanhazdadjoke.com/", setting);
    const data = await responseFetch.json();
    title.innerText = `Joke ID is ${data.id}`; // instead of title
    joke.innerText = data.joke;
  } catch (e) {
    console.log("It is an error!");
  }
});
