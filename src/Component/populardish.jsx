import { useState } from "react";
import Meal1 from '../Image/popular_meal1.png'
import Meal2 from '../Image/popular_meal2.png'
import Meal3 from '../Image/popular_meal3.png'
import Meal4 from '../Image/popular_meal4.png'
import Meal5 from '../Image/popular_meal5.png'
import '../ComponentCSS/populardish.css'

const Popular = () => {
  return(
    <>
    <div className="popularDish">
        <h2 className="tilte2">Food Items</h2>
        <h1 className="heading2">Popular Dishes</h1>
        <div className="popularMealIMG">
            <img src={Meal1} className="popularMealItem" alt="" />
            <img src={Meal2} className="popularMealItem" alt="" />
            <img src={Meal3} className="popularMealItem" alt="" />
            <img src={Meal4} className="popularMealItem" alt="" />
            <img src={Meal5} className="popularMealItem" alt="" />
        </div>
    </div>
    </>
  )
  
};

export default Popular;
