import { useState } from "react";
import "../ComponentCSS/rating.css";
import FullStar from "../Image/FullStarRed.png";
import EmptyStar from "../Image/Empty.png";
import avatar1 from "../Image/guests_1.png";

const Rating = () => {
  return (
    <>
      <div className="rating">
        <h1 className="title9">Testimonial</h1>
        <h1 className="heading9">
          Review <span className="textred2"> from our guests</span>
        </h1>
        <div className="guestRating">
          <div className="GuestRated">
            <img src={avatar1} alt="" className="guestAvatar" />
            <h1 className="guestName">Bernadette R. Martin</h1>
            <h1 className="guestComment">
              Also very good and so was the service. I had the mushroom risotto
              with scallops which was awesome. My wife had a burger over greens
              ...
            </h1>
            <div className="rated">
              <img src={FullStar} alt="" />
              <img src={FullStar} alt="" />
              <img src={FullStar} alt="" />
              <img src={FullStar} alt="" />
              <img src={EmptyStar} alt="" />
            </div>
          </div>
        </div>
        <div className="slider1">
          <div className="sld" id="slider2"></div>
          <div className="sld" id="slider3"></div>
          <div className="sld" id="slider1"></div>
          <div className="sld" id="slider4"></div>
        </div>
      </div>
    </>
  );
};

export default Rating;
