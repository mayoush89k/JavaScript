// a.
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// a.1.
const sortFoodsDesc = [...foods];
sortFoodsDesc.sort();
sortFoodsDesc.reverse();
console.log("a.1 Sorted Foods descending: ", sortFoodsDesc);

// a.2.
const sortFoodsAsc = [...foods];
sortFoodsAsc.sort();

console.log("a.2 Sorted Foods ascending: ", sortFoodsAsc);

// b.
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

const SortingUpperCaseDesc = [...foodsWithUpperCase];
SortingUpperCaseDesc.sort((word1, word2) => {
  if (word1.charAt(0).toLowerCase() < word2.charAt(0).toLowerCase()) return -1;
  else if (word2.charAt(0).toLowerCase() > word1.charAt(0).toLowerCase()) return 1;
  else return 0;
});
SortingUpperCaseDesc.reverse();
console.log("b.1 Sorting with Upper Case descending: ", SortingUpperCaseDesc);

const SortingUpperCaseAsc = [...foodsWithUpperCase];
SortingUpperCaseAsc.sort((word1, word2) => {
  if (word1.charAt(0).toLowerCase() < word2.charAt(0).toLowerCase()) return -1;
  else if (word2.charAt(0).toLowerCase() > word1.charAt(0).toLowerCase()) return 1;
  else return 0;
});
console.log("b.2 Sorting with Upper Case Ascending: ", SortingUpperCaseAsc);


// c. 
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
const sortByLonger = [...words];
sortByLonger.sort((word1 , word2) => {
    if(word1.length > word2.length) return -1
    else if(word2.length > word2.length) return 1
    else 0
})
console.log('sortByLonger: ', sortByLonger);

/*  c.1. Sort the array of strings from the longest word to the
    shortest word only using the sort function*/
