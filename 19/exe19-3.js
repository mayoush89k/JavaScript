// creating random verification Code
let randomCode = "";
let num = 6;
while (num > 0) {
  randomCode += (Math.random() * 9).toFixed();
  num -= 1;
}

// add the code to text as new line
const VerificationCode = document.querySelector("p");
VerificationCode.innerText += "\n" + randomCode;

//copy and past code
let VCode = [];
const inputs = document.querySelectorAll(".code");
// copying
VerificationCode.addEventListener("copy", (e) => {
  e.clipboardData.setData("text", randomCode);
  e.preventDefault();
  VCode = e.clipboardData.getData("text").split("");
});
//pasting
const body = document.querySelector("body");
const section = document.querySelector("section");
body.addEventListener("paste", (e) => {
  if (e.target.className == "code") {
    inputs.forEach((input, index) => {
        input.value = ''
      input.value = VCode[index];
    });
  }
});
//typing
section.addEventListener("input", (e) => {
  if (e.target.className == "code") {
    if (e.target.value.length == 1) {
      let currentId = e.target.id;
      if (
        currentId[currentId.length - 1] > 0 &&
        currentId[currentId.length - 1] < 6
      ) {
        document.getElementById(currentId).blur();
        const newId =
          currentId.slice(0, currentId.length - 1) +
          (Number(currentId[currentId.length - 1]) + 1);
        document.getElementById(newId).focus();
      } else {
        document.getElementById(currentId).addEventListener("keypress", (e) => {
          e.preventDefault();
        });
      }
    }
  }
});
