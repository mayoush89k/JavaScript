const storm = {
  // add code here
  superPower: "flying",
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.getSuperPower = printSuperPower
storm.getSuperPower()