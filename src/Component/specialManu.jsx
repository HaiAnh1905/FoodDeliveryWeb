import { useState } from "react";
import "../ComponentCSS/specialManu.css";
import Burger from "../Image/specialManu_1.png";
import FChicken from "../Image/specialManu_2.png";
import GChicken from "../Image/specialManu_3.png";
import Pitza from "../Image/specialManu_4.png";
import HotDogs from "../Image/specialManu_5.png";
import ChickenSkewer from "../Image/specialManu_6.png";
import Salads from "../Image/specialManu_7.png";
import DahiPuri from "../Image/specialManu_8.png";
import IceCream from "../Image/specialManu_9.png";
import Cocktail from "../Image/specialManu_10.png";

const SpecialManu = () => {
  return (
    <>
      <div className="specialManu">
        <h1 className="title6">SPECIALS MANU FOR ALL TIME</h1>
        <div className="ManuFAT">
          <div className="specialManuDish">
            <img src={Burger} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Burger</h1>
          </div>
          <div className="specialManuDish">
            <img src={FChicken} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Fried chicken</h1>
          </div>
          <div className="specialManuDish">
            <img src={GChicken} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Doner with Grilled Chicken</h1>
          </div>
          <div className="specialManuDish">
            <img src={Pitza} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Pizza</h1>
          </div>
          <div className="specialManuDish">
            <img src={HotDogs} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Hot Dogs</h1>
          </div>
          <div className="specialManuDish">
            <img src={ChickenSkewer} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Chicken Skewers</h1>
          </div>
          <div className="specialManuDish">
            <img src={Salads} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Greek Salad</h1>
          </div>
          <div className="specialManuDish">
            <img src={DahiPuri} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Dahi Puri</h1>
          </div>
          <div className="specialManuDish">
            <img src={IceCream} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Ice cream with Chocolate</h1>
          </div>
          <div className="specialManuDish">
            <img src={Cocktail} alt="" className="ManuDishIMG" />
            <h1 className="ManuNameDish">Cocktail Glasses</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialManu;
