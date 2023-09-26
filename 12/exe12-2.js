const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};
/*
1. Implement the following getCandy function:
The function should return the candy element with
the specified id.*/
function getCandy(candyStore, id) {
  //your code
  const currentCandy = candyStore.candies.find((candy) => candy.id == id )
  return currentCandy;
}
/*
2. Implement the following getPrice function:
The function should return the price (number) of the
candy with the specified id.*/
function getPrice(candyStore, id) {
  //your code
  const currentCandy = getCandy(candyStore , id);
  return currentCandy.price;
}
/*
3. Implement the following addCandy function:
The function should add a new candy to the candy
list in candyStore with a default amount of 1. The
function will not return anything.*/
function addCandy(candyStore, id, name, price) {
  //your code
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: 1,
  });
}
/*
4. Implement the following buy function: The function
should add the candy price to the cashRegister, and
decrease the amount property of the relevant candy.*/

function buy(candyStore, id) {
  //your code
  const currentCandy = candyStore.candies.find((candy) => {
    if (candy.id == id) {
      candyStore.cashRegister += candy.price;
      candy.amount++;
      return true;
    }
  });
  return currentCandy
}
console.log("Candy : ", getCandy(candyStore, "as12f"));
console.log("Candy price that id 5hd7y is: ", getPrice(candyStore, "5hd7y"));
addCandy(candyStore, "12ab", "snickers", 5);
console.log("adding Candy id: 12ab, name: Snickers, price: 5 successfully");
console.log("CashRegister after id 12ab ", buy(candyStore, "12ab") , " and Cash Register is: " , candyStore.cashRegister);