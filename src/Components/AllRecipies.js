import React from "react";
import axios from "axios";
import IndividualRecipe from "./IndividualRecipe";

class AllRecipies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAvailableRecipies: [],
    };
  }

  componentDidMount() {
    axios.get("https://localhost:44316/CocktailOptions/AllRecipies").then((response) => {
      let currentState = this.state;
      this.setState({
        allAvailableRecipies: response.data,
      });
    });
  }

  recipiesDisplay() {
    if (this.state.allAvailableRecipies.length > 0) {
      return this.state.allAvailableRecipies.map(function (each) {
        return <IndividualRecipe recipe={each}></IndividualRecipe>;
      });
    } else
      return (
        <div>
          <h1>Could not retrieve any recipies..</h1>
        </div>
      );
  }

  render() {
    return (
      <div className="h-full flex flex-col">
        <div className="text-center border-b-2 border-color15">
          <span className="text-4xl">All Recipies</span>
        </div>

        <div className="flex flex-row justify-center text-center flex-wrap overflow-auto h-1/1">{this.recipiesDisplay()}</div>
      </div>
    );
  }
}

export default AllRecipies;
