import React from "react";
import { useNavigate } from "react-router-dom";
import IngredientView from "./IngredientView";
import DataAccess from "../Classes/DataAccess";
import RecipeView from "./RecipeView";

function Home() {
  let ingredients = DataAccess.getAllLocalStorageKeysAsIngredients();
  if (!ingredients) ingredients = [{ name: "You have no ingredients!" }];

  return (
    <div>
      <div className="text-center border-b-2 border-color15">
        <span className="text-4xl">Home</span>
      </div>
      <div className="flex flex-row w-full">
        <IngredientOverview ingredients={ingredients}></IngredientOverview>
      </div>
      <div className="flex flex-row justify-between text-center flex-wrap overflow-auto h-96">
        <RecipeView ingredients={ingredients}></RecipeView>
      </div>
    </div>
  );
}

function IngredientOverview(props) {
  return (
    <div className="defaultBox w-full h-1/3 overflow-auto  ">
      <IngredientExplaination></IngredientExplaination>
      <hr className="mt-5 mb-5"></hr>
      <span className="text-lg ">Your ingredients</span>
      <div className="h-32 flex items-center flex-wrap justify-center text-left overflow-auto">
        <IngredientView ingredients={props.ingredients}></IngredientView>
      </div>
    </div>
  );
}

function IngredientExplaination() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Explaination</h1>
      <p>Add to your list of ingredients, and view which cocktails you can create</p>
      <button
        className=" defaultBtn mt-3"
        onClick={() => {
          navigate("/myingredients");
        }}
      >
        Add to my ingredients
      </button>
    </div>
  );
}

export default Home;
