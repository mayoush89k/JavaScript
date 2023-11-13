const getIDs = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });

const getRecipe = async (recipeID) => {
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
async function fetchIDs(){
    try{
        let id = await getIDs()
        console.log("id's are : ", id)
        const result = recipeID(id[2])
        console.log(result);

    }catch(e){
        console.log("this is an error");
    }
}