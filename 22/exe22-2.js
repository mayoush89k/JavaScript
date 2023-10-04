const movie = document.createElement("img");
movie.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
);
movie.style.width="500px"
movie.style.visibility = "hidden";
document.body.appendChild(movie);

const checked = document.querySelector("input");
checked.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    console.log("sdfd");
    movie.style.visibility = "visible";
  } else {
    movie.style.visibility = "hidden";
  }
});
