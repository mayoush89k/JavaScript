const body = document.querySelector("body");
const result = document.createElement("p");
const section = document.createElement("section");
section.style.display = "flex";
body.appendChild(section);
const button = document.querySelector("button");

const inputNum = document.querySelector("input");

inputNum.addEventListener("change", (e) => {
  section.innerText = "";
  if (Number(e.target.value)) {
    result.textContent = "";
  } else {
    result.textContent = "Please enter a number";
    body.appendChild(result);
  }
});

button.addEventListener("click", () => {
  let num = inputNum.value;
  while (num > 0) {
    addSmiley();
    num -= 1;
  }
});
function addSmiley() {
  const smiley = document.createElement("img");
  smiley.setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/900px-Smiley.svg.png"
  );
  smiley.style.width = "200px";
  smiley.style.height = "200px";
  section.appendChild(smiley);
}
