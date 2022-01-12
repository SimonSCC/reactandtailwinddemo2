import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let ingredients = [{ name: "Ginger" }, { name: "Cola" }];
  return (
    <div>
      <div className="text-center border-b-2 border-color15">
        <span className="text-4xl">Home</span>
      </div>
      <div className="flex flex-row w-full">
        <IngredientExplaination></IngredientExplaination>
        <IngredientOverview ingredients={ingredients}></IngredientOverview>
      </div>
    </div>
  );
}

function IngredientOverview(props) {
  return (
    <div className="defaultBox w-1/2  ">
      <span className="text-lg ">Your ingredients</span>
      <p>Your ingredients are:</p>
      <Ingredient ingredients={props.ingredients}></Ingredient>
    </div>
  );
}

function Ingredient(props) {
  if (props.ingredients.length > 0) {
    return props.ingredients.map(function (item) {
      return <p> {item.name}</p>;
    });
  } else {
    return [];
  }
}

function IngredientExplaination() {
  let navigate = useNavigate();

  return (
    <div className=" defaultBox w-1/3 mr-10">
      <h1>Explaination</h1>
      <p>Add to your list of ingredients, and view which cocktails you can create</p>
      <button
        className=" defaultBtn mt-3"
        onClick={() => {
          navigate("/myingredients");
        }}
      >
        My ingredients
      </button>
    </div>
  );
}

export default Home;
