import axios, { Axios } from "axios";
import myData from "../Data/AvailableIngredients.json";

class ApiCommuncator {
  constructor() {
    this.SetIngredients();
  }

  SetIngredients() {
    axios.get("https://localhost:44316/CocktailOptions/AllIngredients").then((response) => {
      console.log(response);
      this.AllIngredients = response.data;
    });
  }
}

export default ApiCommuncator;
