import React from "react";
import MeasurementType from "../Classes/MeasurementTypeEnum";

class IndividualRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mx-16 w-1/3 text-center flex flex-col items-center defaultBox ">
        <h2 className="mb-2">{this.props.recipe.title}</h2>
        <a href={"https://www.youtube.com/watch?v=" + this.props.recipe.videoInfo.link}>
          <img src={this.props.recipe.videoInfo.thumbnail.url} width={250} className="" alt="Thumbnail"></img>
        </a>
        <div>
          <p>
            {this.props.recipe.measurementOfIngredients.map(function (ingr) {
              return (
                <div>
                  <p>{displayIngredientWithMeasurement(ingr)}</p>
                </div>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}

function displayIngredientWithMeasurement(ingr) {
  let result = Object.keys(MeasurementType).find((key) => MeasurementType[key] === ingr.measurement.measurementType);
  console.log(result);
  if (result === "note") {
    return ingr.ingredient.name;
  } else {
    return ingr.measurement.amount + result + " " + ingr.ingredient.name;
  }
}

export default IndividualRecipe;
