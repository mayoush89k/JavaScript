const string = "The more you know, the more you know that you don't know";

// finding matching strings by lastIndexof method
console.log(string.lastIndexOf("you"));

// finding matching strings by search method 
console.log(string.search("you don't"));

// finding matching strings by match method 
console.log(string.match("you don't"));

// finding multiple matching strings by match method saves them in array
console.log(string.match(/you/));
console.log(string.match(/you/g));

