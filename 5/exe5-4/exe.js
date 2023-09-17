let color_name = prompt("Enter Color :");
switch (color_name) {
  case "Yellow":
  case "Pink":
  case "Orange":
    console.log("Light Color");
    break;
  case "Blue":
  case "Purple":
  case "Brown":
    console.log("Dark Color");
    break;
  default:
    console.log("Unknown Color");
    break;
}
