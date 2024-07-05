import { useEffect, useState } from "react";
import "./Items.css";
import IIBg from "./Image/items_bg.png";
import Dishes from "./Component/Dishes";
import Poster1 from "./Image/Poster1.png";
import Poster2 from "./Image/Poster2.png";
import DishesDetails from "./Component/DishesDetails";
import { Routes, Route } from "react-router-dom";

const Items = () => {
  const [mealList, setMealList] = useState([]);
  const [mealSearch, setMealSearch] = useState("");

  useEffect(() => {
    const StoragedMealList = localStorage.getItem("Food List");
    setMealList(JSON.parse(StoragedMealList));
  }, []);
  // console.log(mealSearch);
  return (
    <>
      {/* Items Introduction */}
      <div className="ItemsIntroduction">
        <img src={IIBg} alt="" className="IIBg" />
        <h1 className="IITitle">ITEMS</h1>
        <h1 className="IIHeading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna.
        </h1>
      </div>
      <h1 className="IntroductionMessage">
        It's the food and groceries you Love, delivered
      </h1>
      {/* Search Function */}
      <div className="SearchItem">
        <div className="SearchBGC">
          <input
            type="text"
            className="SearchInput"
            placeholder="Search your Items"
            value={mealSearch}
            onChange={(e) => {
              setMealSearch(e.target.value);
            }}
          />
        </div>
        <button className="SearchFInd">Go</button>
      </div>
      <div className="ListOfDishes">
        {mealList.map((dish) => {
          if (mealSearch != "") {
            return (
              dish.DishName.trim()
                .toLowerCase()
                .includes(mealSearch.trim().toLowerCase()) && (
                <Dishes
                  key={dish.id}
                  dishes={dish}
                />
              )
            );
          } else {
            return <Dishes key={dish.id} dishes={dish} />;
          }
        })}
        <img src={Poster1} alt="" className="DiscountPoster Poster1" />
        <img src={Poster2} alt="" className="DiscountPoster Poster2" />
      </div>
    </>
  );
};

export default Items;
