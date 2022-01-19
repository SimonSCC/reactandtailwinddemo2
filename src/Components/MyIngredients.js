import React from "react";
import ReactDOM from "react-dom";
import DataAccess from "../Classes/DataAccess";
import Ingredients from "../Classes/Ingredients";
import IngredientView from "./IngredientView";
import ApiCommuncator from "../Classes/ApiCommunicator";

class MyIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MyIngredients: null,
    };
    this.updateMyIngredients();
  }
  updateMyIngredients() {
    const ingred = this.state;
    ingred.MyIngredients = DataAccess.getAllLocalStorageKeysAsIngredients();
    this.setState({ MyIngredients: ingred.MyIngredients });
  }

  render() {
    return (
      <div className="h-full">
        <div className="text-center border-b-2 border-color15">
          <span className="text-4xl">Ingredients</span>
        </div>
        <div className="flex flex-row w-full h-1/2 ">
          <MyIngredientsDisplay
            Ingredients={this.state.MyIngredients}
            onClick={() => {
              this.updateMyIngredients();
            }}
          ></MyIngredientsDisplay>
          <AllIngredientsDisplay
            onClick={() => {
              this.updateMyIngredients();
            }}
          ></AllIngredientsDisplay>
        </div>
      </div>
    );
  }
}

function MyIngredientsDisplay(props) {
  //This function renders the ingredientview with the ingredients list of what is stored in local storage.
  //Should send a function that removes said items, and shows a delete btn.

  console.log("myIngredients" + props.Ingredients);
  return (
    <div className="defaultBox w-1/2 mr-10 overflow-auto">
      <span className="text-xl">My ingredients</span>
      <div className="flex items-center flex-wrap justify-center text-left">
        <IngredientView ingredients={props.Ingredients} onClick={props.onClick} btnText="Delete"></IngredientView>
      </div>
    </div>
  );
}

function AllIngredientsDisplay(props) {
  let allAvailableIngre = new Ingredients().AllIngredients;

  return (
    <div className="defaultBox w-1/2 overflow-auto">
      <span className="text-xl">All ingredients</span>
      <div className="flex items-center flex-wrap justify-center text-left">
        <IngredientView ingredients={allAvailableIngre} onClick={props.onClick} btnText="Add"></IngredientView>
      </div>
    </div>
  );
}

// function getAllLocalStorageItems() {
//   return Object.keys(localStorage).map(function (item) {
//     return { name: item };
//   });
// }

export default MyIngredients;
