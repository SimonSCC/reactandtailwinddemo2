import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";

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
          <div className="m-5 w-1/3 text-center flex flex-col items-center">
            <h2 className="mb-2">{each.title}</h2>
            <a href={"https://www.youtube.com/watch?v=" + each.link}>
              <img src={each.thumbnail.url} width={250} className="" alt="Thumbnail"></img>
            </a>
            <div>
              <p>
                {each.recipe.map(function (ingr) {
                  return <p>{ingr.ingredient.name}</p>;
                })}
              </p>
            </div>
          </div>
        );
      });
    } else
      return (
        <div>
          <h1>None found..</h1>
        </div>
      );
  }
}

export default RecipeView;
