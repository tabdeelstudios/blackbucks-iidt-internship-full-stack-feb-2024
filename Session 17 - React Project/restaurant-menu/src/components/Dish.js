import React from "react";
import "./Dish.css";

function Dish(props) {
  return (
    <div className="dish" style={{ width: "40%", marginBottom: "50px" }}>
      <img src={props.dishImg} alt="Dish Image" />
      <div className="dishDetails">
        <div className="headingPriceWrapper">
          <h2>{props.title}</h2>
          <h2>{props.price}</h2>
        </div>
        <hr />
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Dish;
