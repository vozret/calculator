import React from "react";

function Square(props) {
  return (
    <button
      className="square"
      onClick={() => {
        console.log("click " + props.value);
      }}
    >
      {props.value}
    </button>
  );
}

export default Square;
