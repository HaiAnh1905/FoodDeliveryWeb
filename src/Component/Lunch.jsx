import { useEffect, useState } from "react";
import "../ComponentCSS/Breakfast.css";
import specials1 from '../Image/specials_1.png'
import arrowwhite from '../Image/Arrow.png'
import arrowred from '../Image/arrow1.png'
import Dish from "./dish";

const Lunch = () => {
    const [mealList, setMealList] = useState([])
    useEffect(() => {
        const StoragedMealList = localStorage.getItem("Food List");
        setMealList(JSON.parse(StoragedMealList))
    }, [])
    let i = 0
  return (
    <>
      <div className="breakfast SMANU">
        <img src={arrowred} alt="" className="arrow2 left" />
        <div className="discount">
          <img src={specials1} alt="" className="posterDiscount" />
          <div className="viewAll">
            <h1 className="VAM">VIEW ALL MENU</h1>
            <img src={arrowwhite} alt="" className="arrow1" />
          </div>
        </div>
        <div className="menu">
            {mealList.map((x) => {
                if(x.Type == 'Lunch' && i <6){
                    i++;
                    return <Dish key={x.id} dish = {x}/>
                }
            })}
            
          
        </div>
        <img src={arrowred} alt="" className="arrow2 right" />
      </div>
    </>
  );
};

export default Lunch;
