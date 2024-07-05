import { useState } from "react";
import '../ComponentCSS/special.css'
import Dish from "./dish";
import specials1 from '../Image/specials_1.png'
import arrowwhite from '../Image/Arrow.png'
import arrowred from '../Image/arrow1.png'
import Breakfast from "./Breakfast";
const Special = () => {
  return (
    <>
      <div className="special">
        <h1 className="title5">SPECIALS</h1>
        <h1 className="heading5">Check out our menu</h1>
        <p className="details2">
          Demoralized by the charms of pleasure of the moment so blinded except
          to some advantage.
        </p>
        <ul className="foodkind">
            <li className="mealkind redBG"><h1>BREAKFAST</h1></li>
            <div className="line"></div>
            <li className="mealkind"><h1>LUNCH</h1></li>
            <div className="line"></div>
            <li className="mealkind"><h1>DINNER</h1></li>
            <div className="line"></div>
            <li className="mealkind"><h1>STARTERS</h1></li>
            <div className="line"></div>
            <li className="mealkind"><h1>BEVERAGES</h1></li>
        </ul>
        <div className="specialMenu">
            <Breakfast />
        </div>
      </div>
    </>
  );
};

export default Special;
