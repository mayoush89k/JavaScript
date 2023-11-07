function Pokemon(pokemonName , pokemonType , pokemonAttackList){
        this.name = pokemonName
        this.type = pokemonType
        this.attackList = pokemonAttackList
    }
    //2. 1
    Pokemon.prototype.callPokemon = function(){
        return `I choose you, ${this.name}`
    }
    //2. 2
    Pokemon.prototype.attack = function(numberOfAttack){
       return `${this.name} attacked ${this.attackList[numberOfAttack - 1]}`
    }

//1.
const pokemon1 = new Pokemon("Pikachu" , "Electric" , ["Pidgey", "Zubat"])
const pokemon2 = new Pokemon("Bulbasaur" , "Water" , ["Ekans", "Gloom"])
const pokemon3 = new Pokemon("Charmander" , "Fire" , ["Meowth" , "Psyduck"])

console.log(pokemon2.callPokemon());
console.log(pokemon1.attack(1));