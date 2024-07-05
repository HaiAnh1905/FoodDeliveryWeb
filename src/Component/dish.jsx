import { useState } from "react";
import "../ComponentCSS/dish.css";

const Dish = (props) => {
  return (
    <>
      <div className="dish">
        <div className="dishdetail">
          <h1 className="dishName">{props.dish.DishName}</h1>
          <h1 className="foodDescription">
            {props.dish.Description}
          </h1>
        </div>
        <h1 className="dishprice">
            ${props.dish.DishPrice}
        </h1>
      </div>
    </>
  );
};

export default Dish;
