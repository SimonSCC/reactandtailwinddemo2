import React from "react";
import ReactDOM from "react-dom";
import Ingredients from "../Classes/Ingredients";
import IngredientView from "./IngredientView";

class MyIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MyIngredients: null,
    };
  }
  updateMyIngredients() {
    const ingred = this.state;
    ingred.MyIngredients = "WORK";
    this.setState({ MyIngredients: ingred.MyIngredients });
  }

  render() {
    return (
      <div className="h-full">
        <div className="text-center border-b-2 border-color15">
          <span className="text-4xl">Ingredients</span>
        </div>
        <div className="flex flex-row w-full h-1/2">
          <MyIngredientsDisplay Ingredients={this.state.MyIngredients}></MyIngredientsDisplay>
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
  return (
    <div className="defaultBox w-1/2 mr-10">
      <span className="text-xl">My ingredients</span>
      <p>{props.Ingredients}</p>
    </div>
  );
}

function AllIngredientsDisplay(props) {
  let allAvailableIngre = new Ingredients().AllIngredients;

  return (
    <div className="defaultBox w-1/2 ">
      <span className="text-xl">All ingredients</span>
      <div className="flex items-center">
        <IngredientView ingredients={allAvailableIngre} updateMyIngredients={props.onClick}></IngredientView>
      </div>
    </div>
  );
}

export default MyIngredients;
