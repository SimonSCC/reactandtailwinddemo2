import React from "react";

function IngredientView(props) {
  //Shorthand conditional assign, determined by btnText
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
  if (props.ingredients.length > 0) {
    if (!props.btnText) {
      return props.ingredients.map(function (item) {
        return (
          <div className=" flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2 bg-color1">
            <p> {item.name}</p>{" "}
          </div>
        );
      });
    }

    return props.ingredients.map(function (item) {
      return (
        <div className=" flex flex-row items-center p-2 border-2 border-color3 rounded-md m-2 bg-color1">
          <button className="defaultBtn scale-75 p-3 hover:scale-90" onClick={() => onClickEvent(item, props)}>
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
