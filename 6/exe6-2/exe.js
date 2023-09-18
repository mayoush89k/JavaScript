// array:
const people = ["Greg", "Mary", "Devon", "James"];

// 1. Write the command to remove "Greg" from the array.
people.splice(0, 1);
console.log("1. people ", people);

//2. Write the command to remove "James" from the array.
people.pop();
console.log("2. people ", people);

//3. Write the command to add "Matt" to the front of the array.
people.splice(0, 0, "Matt");
console.log("3. people ", people);

//4.. Write the command to add your name to the end of the array.
people.push("May");
console.log("4. people ", people);

// 5. Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
// My Current array is = [ 'Matt', 'Mary', 'Devon', 'May' ]
let another_people = people;
another_people = another_people.slice(2);
console.log("5. people ", people);
console.log("5. another people ", another_people);

// 6. Write the command that gives the indexOf where "Mary"is located.
console.log("6. index of Mary is ", people.indexOf("Mary"));

// 7. Write the command that gives the indexOf where "Foo" is located. What is returning? Why?
console.log("7. Foo Location is ", people.indexOf("Foo"));
// -1 means false , that means it is not found

// 8. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add
// "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
for (let i = 0; people.length > 0; i++) {
  people.pop();
}
people.push("Greg");
people.push("Mary");
people.push("Devon");
people.push("James");

people.splice(2, 1, "Elizabeth", "Artie");
console.log("8. people:  ", people);

/*
9. Create a new variable called withBob and set it equal
to the people array concatenated with the string of "Bob".*/

const withBob = people;
withBob.push("Bob"); 
console.log("9. people:  ", people);
console.log("9. withBob:  ", withBob);
