let language = prompt("Which language do you prefer?");
let isIsland = prompt("In Island? (yes / no)");
let population = prompt("How large population is in the country?(M)");
let country = prompt("Name the Country");

language = language.toLowerCase()
population = Number(population) * 1000000;
country = country.toLowerCase();
if(isIsland == "yes" || isIsland == 'y'){
    isIsland = true;
}
if(isIsland == "no" || isIsland == 'n'){
    isIsland = false;
}
if(language.includes('en') && !isIsland && population < 50000000){
    console.log('You should live in ' + country);
}else{
    console.log(language.includes('en'));
    console.log(!isIsland);
    console.log(population < 50000000);
    console.log(country.toUpperCase() + ' doesn\'t meet your criteria');
}
