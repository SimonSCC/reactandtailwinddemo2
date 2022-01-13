import myData from "../Data/AvailableIngredients.json";

class Ingredients {
  constructor() {}

  get AllIngredients() {
    console.log(myData);
    return myData;
  }
}

export default Ingredients;
