const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];
// We are not getting the data as we want it. We are going to need
// to massage the data.
// Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.

function databaseNames(database) {
  return database.map((db) => {
    return db["name"];
  });
}
console.log("databaseNames: ", databaseNames(data));

// 2. Create a function that returns all the objects that are born
// before 1990.

function filterBirthdays(database) {
  // return database.filter(({database})=> new Date().getFullYear() - parseInt(database.birthday.split("-")) < 1990)
  return database.filter((db) => Number(db.birthday.split("-")[2]) > 1990);
}
console.log("filterBirthdays: ", filterBirthdays(data));

// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
let foods = {};
function databaseFood(database) {
  database.map((db) => {
    db.favoriteFoods.meats.map((meat) => {
      addFood(meat);
    });
    db.favoriteFoods.fish.map((fish) => {
      addFood(fish);
    });
  });
}
databaseFood(data);
console.log("databaseFood: ", foods);
function addFood(food) {
  if (foods[food]) {
    foods[food]++;
  } else {
    foods[food] = 1;
  }
}