let language = prompt("Which language do you prefer?");
let isIsland = prompt("In Island? (yes / no)");
let population = prompt("How large population is in the country?(M)");
let country = prompt("Name the Country");

language = language.toLowerCase();
population = Number(population) * 1000000;
country = country.toLowerCase();
if (isIsland == "yes" || isIsland == "y") {
  isIsland = true;
}
if (isIsland == "no" || isIsland == "n") {
  isIsland = false;
}
// according to sarah's wish no island, less than 50 m and english language
if (
  (language.includes("en") && !isIsland && population < 50000000) ||
  // another condition that lives in island, more than 10 m and speaks Italian
  (language.includes("it") && isIsland && population > 10000000)
) {
  console.log("You should live in " + country);
} else {
  console.log(country.toUpperCase() + " doesn't meet your criteria");
}
