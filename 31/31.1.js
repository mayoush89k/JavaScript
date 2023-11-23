const url = "https://swapi.dev/api/people";

const table = document.querySelector("table");
let starWars = [];

const fetchReq1 = fetch(url)
  .then((res) => res.json())
  .then((data) => data.results)
  .then((results) =>
    results.map((result , i) =>
      fetch(result.homeworld)
        .then((res) => res.json())
        .then((data) => {
          starWars.push({
            name: result.name,
            height: result.height,
            hairColor: result.hair_color,
            planet: {
              name: data.name,
              population: data.population,
            },
          });
          displayData(starWars[i])
        })
    )
  );


function displayData(listItem) {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  const height = document.createElement("td");
  const hairColor = document.createElement("td");
  const planet = document.createElement("td");
  const population = document.createElement("td");

  name.innerText = listItem.name;
  height.innerText = listItem.height;
  hairColor.innerText = listItem.hairColor;
  planet.innerText = listItem.planet.name;
  population.innerText = listItem.planet.population;
  console.log(listItem.planet);
  row.append(name, hairColor, height, planet, population);

  table.appendChild(row);
}
