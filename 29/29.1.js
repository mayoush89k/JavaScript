const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};


// changing code here 
async function getIDs() {
  try {
    await ((IDs) => {
      console.log(IDs);
      return getRecipe(IDs[2]);
    })((recipe) => {
      console.log(recipe);
    });
  } catch (e) {
    console.log("It is an error!");
  }
}
