import { useState, useEffect     } from "react";
import "../ComponentCSS/DishesDetail.css";
import Meal1 from "../Image/meal1.png";
import Meal1_1 from "../Image/meal1_1.jpg";
import Meal1_2 from "../Image/meal1_2.jpg";

const DishesDetails = (props) => {
    const [mealList, setMealList] = useState([]);
    useEffect(() => {
      const StoragedMealList = localStorage.getItem("Food List");
      setMealList(JSON.parse(StoragedMealList));
    }, []);
    console.log(props.dishes);
  return (
    <>
      <div className="dishes-detail-container">
        <div className="dishes-img">
          <img src={Meal1} alt="" className="main-img" />
          <img src={Meal1_1} alt="" className="sub-img-1" />
          <img src={Meal1_2} alt="" className="sub-img-2" />
        </div>
        <div className="detail-part">
          <h1 className="dishes-detail-title">Chicken Supreme Pizza</h1>
          <h1 className="dishes-detai-price">Price: $150</h1>
          <h1 className="dishes-detail-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            sed provident in voluptatibus maxime cupiditate veritatis doloribus
            assumenda eaque placeat neque velit sequi quasi deserunt facere
            nulla hic dolores a!
          </h1>
          <h1 className="dishes-detail-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            sed provident in voluptatibus maxime cupiditate veritatis doloribus
            assumenda eaque placeat neque velit sequi quasi deserunt facere
            nulla hic dolores a!
          </h1>
          <div className="addtocart-buynow">
            <button className="AddToCart">
                Add To Cart
            </button>
            <button className="BuyNow">
                Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="line-seraparate"></div>
      <h1 className="moredish">See more items</h1>
      <div className="ListOfDishes">

      </div>
    </>
  );
};

export default DishesDetails;
