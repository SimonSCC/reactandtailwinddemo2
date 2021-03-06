import React from "react";
import axios from "axios";
import MeasurementType from "../Classes/MeasurementTypeEnum";
import IndividualRecipe from "./IndividualRecipe";

class RecipeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: [],
      myIngredients: props.ingredients,
    };
  }

  componentDidMount() {
    console.log(this.state.myIngredients);
    let listOfIngredients = [];
    this.state.myIngredients.forEach((element) => {
      listOfIngredients.push(element.name);
    });
    let asJson = JSON.stringify(listOfIngredients);
    console.log(asJson);
    axios.post("https://localhost:44316/CocktailOptions/WhatCanIMake", listOfIngredients).then((response) => {
      console.log(response);
      let currentState = this.state;
      this.setState({
        recipies: response.data,
      });
    });
  }
  render() {
    if (this.state.recipies.length > 0) {
      return this.state.recipies.map(function (each) {
        return (
          // <div className="mx-16 w-1/3 text-center flex flex-col items-center defaultBox ">
          //   <h2 className="mb-2">{each.title}</h2>
          //   <a href={"https://www.youtube.com/watch?v=" + each.videoInfo.link}>
          //     <img src={each.videoInfo.thumbnail.url} width={250} className="" alt="Thumbnail"></img>
          //   </a>
          //   <div>
          //     <p>
          //       {each.measurementOfIngredients.map(function (ingr) {
          //         return (
          //           <div>
          //             <p>{displayIngredientWithMeasurement(ingr)}</p>
          //           </div>
          //         );
          //       })}
          //     </p>
          //   </div>
          // </div>
          <IndividualRecipe recipe={each}></IndividualRecipe>
        );
      });
    } else
      return (
        <div>
          <h1>Could not retrieve any recipies..</h1>
        </div>
      );
  }
}

// function displayIngredientWithMeasurement(ingr) {
//   let result = Object.keys(MeasurementType).find((key) => MeasurementType[key] === ingr.measurement.measurementType);
//   console.log(result);
//   if (result === "note") {
//     return ingr.ingredient.name;
//   } else {
//     return ingr.measurement.amount + result + " " + ingr.ingredient.name;
//   }
// }

export default RecipeView;
