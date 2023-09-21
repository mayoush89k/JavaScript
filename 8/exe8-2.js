const myCountry = {
  country: "Mexico",
  capital: "Mexico City",
  language: "Spanish",
  population: 129,
  neighbors: ["USA", "Guatemala", "Belize"],
  discribe: function () {
    return `${this.country} has ${this.population} million people, their mother language is ${this.language}, they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length > 0 ? false : true;
  },
};

console.log(myCountry.discribe());
myCountry.checkIsland();
console.log(myCountry.isIsland ? "Island" : "Not Island");
