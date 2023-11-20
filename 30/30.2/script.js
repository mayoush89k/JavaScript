const url = "https://www.omdbapi.com";
const token = "apikey=373a4a52";

const input = document.getElementById("search-input");
const yearInput = document.getElementById("year-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("section");

searchBtn.addEventListener("click", () => {
  fetchMoviesData(input.value , yearInput.value);
  result.classList.remove("hidden");
  result.id = "result";
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    fetchMoviesData(input.value , yearInput.value);
    result.classList.remove("hidden");
    result.id = "result";
  }
});

async function fetchMoviesData(input , year) {
  try {
    console.log((`${url}/?${token}&plot=full&t=${input}&y=${year}`));
    const res = await fetch(`${url}/?${token}&plot=full&t=${input}&y=${year}`);
    if (!res.ok) throw new Error("HTTP error! status: ${res.status}");
    const data = await res.json();
    console.log(data);
    displayMovie(data);
  } catch (error) {
    console.log(error);
  }
}
const section = document.createElement("section");

function displayMovie(movie) {
  result.innerText = ""; // reset
  section.innerText = ""; // reset
  input.value = "";
  yearInput.value = "";

  if (movie.Title == undefined) {
    const errorMsg = document.createElement("section");
    errorMsg.innerText = "Movie is not found";
    result.appendChild(errorMsg);
  } else {
    // 1. Movie poster
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.Poster;
    moviePoster.alt = movie.Title + " photo";

    section.id = "section-details";

    // 2. Movie title
    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.Title;
    // 3. Genre
    const movieGenre = document.createElement("section");
    movieGenre.innerText = "Genre: " + movie.Genre;
    // 4. Year
    const movieYear = document.createElement("section");
    movieYear.innerText = "Year: " + movie.Year;
    // 5. Plot
    const moviePlot = document.createElement("p");
    moviePlot.innerText = "Plot: " + movie.Plot;
    // 6. Director
    const movieDirector = document.createElement("section");
    movieDirector.innerText = "Directors: " + movie.Director;
    // 7. Actors
    const movieActors = document.createElement("section");
    movieActors.innerText = "Actors: " + movie.Actors;
    // 8. Ratings of movies from IMDB
    const movieRatings = document.createElement("section");

    section.append(
      movieTitle,
      movieGenre,
      movieYear,
      moviePlot,
      movieDirector,
      movieActors,
      movieRatings
    );
    result.append(moviePoster, section);
    generateRatings(movie.Ratings);
  }
}

function generateRatings(ratings) {
  console.log(ratings);
  const stars = [];
  stars.push({
    source: ratings[0].Source,
    rating: Math.floor(
      Number(ratings[0].Value.charAt(0) + "." + ratings[0].Value.charAt(2))
    ),
  });
  stars.push({
    source: ratings[1].Source,
    rating: Math.floor(
      Number(ratings[1].Value.charAt(0) + ratings[1].Value.charAt(1)) / 10
    ),
  });
  stars.push({
    source: ratings[2].Source,
    rating: Math.floor(
      Number(ratings[2].Value.charAt(0) + ratings[2].Value.charAt(1)) / 10
    ),
  });

  console.log(stars);

  stars.map((star) => {
    const sourceName = document.createElement("section");
    sourceName.innerText = star.source + ": ";
    const ratingStars = document.createElement("section");
    for (let i = 0; i < 5; i++) {
      if (i <= star.rating / 2) {
        let filledStar = document.createElement("i");
        filledStar.classList.add("material-icons");
        filledStar.innerText = "star";
        filledStar.style.color = "#ffcc33";
        ratingStars.appendChild(filledStar);
      } else {
        let emptyStar = document.createElement("i");
        emptyStar.classList.add("material-icons");
        emptyStar.innerText = "star";
        emptyStar.style.color = "#bebebe";
        ratingStars.appendChild(emptyStar);
      }
    }
    section.append(sourceName, ratingStars);
  });
}
