const object = {
    Key1: "Value1",
    Key2: "Value2",
    Key3: "Value3",
    Key4: "Value4",
    Key5: "Value5",
    Key6: "Value6",
    Key7: "Value7",
    Key8: "Value8",
    Key9: "Value9",
    Key10: "Value10"
}
const SwappedObject = {}
for (let key in object) {
    SwappedObject[object[key]] = key;
}

console.log(SwappedObject);