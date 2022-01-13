import React from "react";
import { useNavigate } from "react-router-dom";
import IngredientView from "./IngredientView";

function Home() {
  let ingredients = localStorage.getItem("myingredients");
  if (!ingredients) ingredients = [{ name: "You have no ingredients!" }];

  return (
    <div className="">
      <div className="text-center border-b-2 border-color15">
        <span className="text-4xl">Home</span>
      </div>
      <div className="flex flex-row w-full">
        <IngredientOverview ingredients={ingredients}></IngredientOverview>
      </div>
    </div>
  );
}

function IngredientOverview(props) {
  return (
    <div className="defaultBox w-full h-1/3  ">
      <IngredientExplaination></IngredientExplaination>
      <hr className="mt-5 mb-5"></hr>
      <span className="text-lg ">Your ingredients</span>
      <IngredientView ingredients={props.ingredients}></IngredientView>
    </div>
  );
}

function IngredientExplaination() {
  let navigate = useNavigate();

  return (
    <div className=" ">
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
