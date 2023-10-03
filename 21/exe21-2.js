const text = document.querySelector("p");
const plus = document.querySelectorAll("button")[0];
const minus = document.querySelectorAll("button")[1];

let size = 20;

plus.addEventListener("click", () => {
  if (size >= 6 && size < 100) {
    size += 5;
    text.style.fontSize = size + "px";
  }
});
minus.addEventListener("click", () => {
  if (size > 6 && size >= 100) {
    size -= 5;
    text.style.fontSize = size + "px";
  }
});
