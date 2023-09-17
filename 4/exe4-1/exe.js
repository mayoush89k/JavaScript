let numSiblings = prompt("How many siblings do you have?")

if(numSiblings === 1){
    console.log("1 sibling!");
}
else{
    if(numSiblings > 1){
        console.log("More than 1 sibling");
    }else{
        console.log("No siblings");
    }
}

//because the input is being declared as string variable, when 1 === '1' will not be equal because of different type

if(Number(numSiblings) === 1){
    console.log("1 sibling!");
}
else{
    if(numSiblings > 1){
        console.log("More than 1 sibling");
    }else{
        console.log("No siblings");
    }
}

// === returns true only if operands are of same data type and same value, otherwise returns false
// here the solution will be converting type of input so the compare will be with two number types