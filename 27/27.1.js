function myFunc(number) {
  return new Promise((resolve, reject) => {
    number > 10 ? resolve(number) : reject(number);
  });
}

myFunc(5).then(data => console.log(`${data} is resolved`)) // Output: 5
.catch(error => console.log(`${error} is rejected`))
myFunc(20).then(data => console.log(`${data} is resolved`)) // Output: 5
.catch(error => console.log(`${error} is rejected`))