import React from "react";

function IngredientView(props) {
  if (props.ingredients.length > 0) {
    return props.ingredients.map(function (item) {
      return (
        <div className=" flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2 bg-color1">
          <button className="defaultBtn scale-75 p-3 hover:scale-90" onClick={() => addIngredientToLocalStorage(item, props)}>
            Add
          </button>
          <p> {item.name}</p>{" "}
        </div>
      );
    });
  } else {
    return [];
  }
}

function addIngredientToLocalStorage(item, props) {
  console.log("clicked " + item.name);
  console.log(props);
  localStorage.setItem(item.name, "true");
  props.updateMyIngredients();
}
export default IngredientView;
