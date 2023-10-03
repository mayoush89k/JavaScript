// creating bulb with new font size and colors style
const bulb = document.createElement("i");
bulb.setAttribute("class", "fas fa-lightbulb");
bulb.style.backgroundColor = "black";
bulb.style.color = "white";
bulb.style.fontSize = "500px";

// add under body children
const body = document.querySelector("body");
body.appendChild(bulb);

// add listener to bulb
let power = false;
bulb.addEventListener("click", () => {
  if (power) {
    bulb.style.color = "white";
    power = false;
  } else {
    bulb.style.color = "yellow";
    power = true;
  }
});
