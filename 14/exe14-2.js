function extractOnlyValue(obj, key) {
  return obj.reduce((acc, currObj) => {
    return acc.concat(currObj[key]);
  }, []);
}

console.log(
  "1. Extract only values : ",
  extractOnlyValue(
    [
      { id: 2, name: "nameKey1" },
      { id: 1, name: "nameKey2" },
      { id: 3, name: "nameKey3" },
    ],
    "name"
  )
);

const vowels = "oeiua";
function countOnlyVowels(text) {
  const splitText = text.split("");

  return splitText.reduce((acc, currentLetter) => {
    const currentObj = acc;

    // this code the upper and lower cases will be counted separately,
    // but the code in the comment it the upper and low cases will be counted together
    vowels.includes(currentLetter.toLowerCase())
      ? currentObj[currentLetter] // currentObj[currentLetter.toLowerCase()]
        ? currentObj[currentLetter]++ // currentObj[currentLetter.toLowerCase()]++
        : (currentObj[currentLetter] = 1) //(currentObj[currentLetter.toLowerCase()] = 1)
      : currentObj;
    return currentObj;
  }, {});
}
console.log(
  "2. count vowels: ",
  countOnlyVowels(
    "Write a function called countOnlyVowels which Accepts a string and returns an Object with the keys as the vowel and the values as the number of times the vowel Appears in the string. This function should be case Insensitive so a lowercase and Uppercase letter should count"
  )
);


function addKeyAndValue(arrObj , key , value){
    return arrObj.reduce((acc , currentObj) => {
        return acc.concat(Object.assign(currentObj, {[key]: value}));
    },[])
}

console.log("3. add new value 'yes' to new key 'Added': " , addKeyAndValue([
    { id: 2, name: "nameKey1" },
    { id: 1, name: "nameKey2" },
    { id: 3, name: "nameKey3" },
  ] , "Added", "Yes"));