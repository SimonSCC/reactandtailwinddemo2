import React from "react";
import DataAccess from "../Classes/DataAccess";
import IngredientView from "./IngredientView";
import axios from "axios";

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
    console.log(ingred.MyIngredients);
    this.setState({ MyIngredients: ingred.MyIngredients });
  }

  render() {
    return (
      <div className="h-full mb-10">
        <div className="text-center border-b-2 border-color15">
          <span className="text-4xl">Ingredients</span>
        </div>
        <div className="flex flex-row w-full h-full pb-10 ">
          {/* <MyIngredientsDisplay
            Ingredients={this.state.MyIngredients}
            onClick={() => {
              this.updateMyIngredients();
            }}
          >

          </MyIngredientsDisplay> */}

          <AllIngredientsDisplay
            Ingredients={this.state.MyIngredients}
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

class AllIngredientsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAvailableIngredients: [],
      OnClick: props.onClick,
    };
  }

  componentDidMount() {
    axios.get("https://localhost:44316/CocktailOptions/AllIngredients").then((response) => {
      let currentState = this.state;
      this.setState({
        allAvailableIngredients: response.data,
        OnClick: currentState.OnClick,
      });
    });
  }

  render() {
    return (
      <div className="defaultBox w-full overflow-auto">
        <span className="text-xl">All ingredients</span>
        <div className="flex items-center flex-wrap justify-center text-left">
          <IngredientView ingredients={this.props.Ingredients} onClick={this.props.onClick} btnText="Delete"></IngredientView>
          <IngredientView
            ingredients={this.state.allAvailableIngredients}
            activeIngredients={this.props.Ingredients}
            onClick={this.state.OnClick}
            btnText="Add"
          ></IngredientView>
        </div>
      </div>
    );
  }
}

// function AllIngredientsDisplay(props) {
//   let allAvailableIngre;
//   axios.get("https://localhost:44316/CocktailOptions/AllIngredients").then((response) => {
//     console.log(response);
//     allAvailableIngre = response.data;
//   });

//   return (

//   );
// }

// function getAllLocalStorageItems() {
//   return Object.keys(localStorage).map(function (item) {
//     return { name: item };
//   });
// }

// this.props.allAvailableIngredients = this.props.allAvailableIngredients.filter(function (item) {
//   console.log(item);
//   return !this.props.Ingredients.includes(item.name);
// });

export default MyIngredients;
