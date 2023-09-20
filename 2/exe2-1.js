function countryInfo(country , population , capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const country1 = countryInfo("Spain" , 47 , "Madrid");
const country2 = countryInfo("Italy" , 50 , "Rome");
const country3 = countryInfo("France" , 20 , "Paris");

console.log(country1);
console.log(country2);
console.log(country3);