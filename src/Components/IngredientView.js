import React from "react";

function IngredientView(props) {
  //Shorthand conditional assign, determined by btnText

  let filteredIngredients;
  if (props.activeIngredients) {
    filteredIngredients = props.ingredients.filter((i) => !props.activeIngredients.includes(i.item));
  } else {
    filteredIngredients = props.ingredients;
  }

  console.log(filteredIngredients);
  let onClickEvent;
  if (props.btnText) {
    onClickEvent =
      props.btnText.toLowerCase() === "add"
        ? function (item, props) {
            console.log("add clicked");
            localStorage.setItem(item.name, "true");
            props.onClick();
          }
        : function (item, props) {
            console.log("Delete clicked");
            localStorage.removeItem(item.name);
            props.onClick();
          };
  }
  if (filteredIngredients.length > 0) {
    if (!props.btnText) {
      return filteredIngredients.map(function (item) {
        return (
          <div className="flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2 bg-red-50 w-1/4 justify-center flex-wrap ">
            <p> {item.name}</p>{" "}
          </div>
        );
      });
    }
    return filteredIngredients.map(function (item) {
      return (
        <div
          className={` ${
            props.btnText === "Delete" ? "bg-green-900 " : "bg-color1"
          } flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2  w-1/4`}
        >
          <button
            className={`${props.btnText === "Delete" ? "bg-red-800" : "bg-green-600 "}  text-color5 defaultBtn scale-75 p-3 hover:scale-90`}
            onClick={() => onClickEvent(item, props)}
          >
            {props.btnText}
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
  localStorage.setItem(item.name, "true");
  props.onClick();
}

function deleteMyIngredient(item, props) {
  localStorage.removeItem(item.name);
  props.onClick();
}
export default IngredientView;
