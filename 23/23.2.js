const storm = {
  // add code here
  superPower: "flying",
  getSuperPower : printSuperPower
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.getSuperPower()