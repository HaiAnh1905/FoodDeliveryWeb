import { useState } from "react";
import "../ComponentCSS/delivery.css";
import shipper from '../Image/ship_icon.png'
import delivery from '../Image/delivery.png'

const Delivery = () => {
  return (
    <>
      <div className="delivery1">
        <h1 className="title8">Delivery</h1>
        <h1 className="heading8">
          A Moments Of <h1 className="redtext">Delivered On Right Time & Place</h1>
        </h1>
        <h1 className="details8">
          Food Khan is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon's Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London inteon.
        </h1>
        <div className="deliveryOrder">
          <div className="shipHotline">
            <h1 className="ord">Delivery Order</h1>
            <h1 className="hotline1">+880 1630 225 015</h1>
            <img src={shipper} alt="" className="logoHotline" />
          </div>
          <button className="orderBtn">
            Order Now
          </button>
        </div>
        <img src={delivery} alt="" className="deliveryIMG" />
      </div>
    </>
  );
};

export default Delivery;
