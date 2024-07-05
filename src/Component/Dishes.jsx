import { useState } from "react";
import "../ComponentCSS/Dishes.css";
import meal1 from '../Image/meal1.png'
import { NavLink } from "react-router-dom";
import DishesDetails from "./DishesDetails";
import { Route, Routes } from "react-router-dom";

const Dishes = (props) => {
  // const [cartItem, setCartItem] = useState([]);
  const saveItemToLocalStorage = (item) => {
    let storedItem = localStorage.getItem("Cart Item");
    storedItem = storedItem ? JSON.parse(storedItem) : [];
    
    let existItem = storedItem.find(
      (storedItem) => storedItem.id === item.id 
    )
    
    if (existItem) {
      existItem.quantity += 1;
    } else {
      storedItem.push(item)
    }
    localStorage.setItem("Cart Item", JSON.stringify(storedItem))
  }
  return (
    <>
      <div className="dishes">
        <img src={props.dishes.img[0]} alt="" className="dishesIMGG" />
        <h1 className="dishesTitle">{props.dishes.DishName}</h1>
        <h1 className="dishesDetails">
          {props.dishes.Description}
        </h1>
        <h1 className="dishesPrice">From ${props.dishes.DishPrice}</h1>
        <button className="AddtoCart" onClick={() => {
          const items = {
            ...props.dishes,
            quantity: 1,
          };
          saveItemToLocalStorage(items)
        }}>Add To Cart</button>
      </div>
    </>
  );
};

export default Dishes;
