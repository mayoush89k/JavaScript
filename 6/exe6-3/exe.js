const countries = ["Italy" , "France" , "Spain" , "Greek" , "Poland"];
const countries_length = [];
countries.forEach(function (country) {
    countries_length.push(country.length);
})

console.log("Countries Names list: ", countries);
console.log("Countries Length list: " , countries_length);