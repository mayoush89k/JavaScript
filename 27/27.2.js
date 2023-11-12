function makeAllCaps(arrayOfWords) {
  return new Promise((resolve, reject) => {
    let newArray = [];
    arrayOfWords.map((word) => {
      if (typeof word == "string") {
        newArray.push(word.toUpperCase());
      } else {
        reject(word);
      }
    });
    resolve(newArray);
  });
}

function sortWords(arrayOfWords) {
  return new Promise((resolve, reject) => {
    arrayOfWords.map((word) => {
      if (typeof word != "string") {
        reject(word);
      }
    });
    resolve(arrayOfWords.sort());
  });
}

makeAllCaps(["tomas", "benjamin", "adam", "john", "george", "ricardo"])
  .then((capsWords) => sortWords(capsWords))
  .then((sortedCapsWord) => console.log(sortedCapsWord))
  .catch((error) => console.log(`${error} is not String`));
// expected output [ 'ADAM', 'BENJAMIN', 'GEORGE', 'JOHN', 'RICARDO', 'TOMAS' ]

  makeAllCaps(["tomas", "benjamin", "adam", "john", "george", 5])
  .then((capsWords) => sortWords(capsWords))
  .then((sortedCapsWord) => console.log(sortedCapsWord))
  .catch((error) => console.log(`${error} is not String`));
// expected output 5 is not string