import { useState } from "react";
import "../ComponentCSS/best.css";
import chicken from "../Image/chicken.png";
import facebook from "../Image/facebook.png";
import twitter from "../Image/twitter.png";
import insta from "../Image/instagram.png";
import linkedin from "../Image/linkedin.png";

const BestInTown = () => {
  return (
    <>
      <div className="BestInTown">
        <div className="thumbnail">
          <div className="title1">Best In Town</div>
          <h1 className="heading1">
            ENJOY OUR CHICKEN <label className="red_text">BURGER</label> FAST
            FOOD
          </h1>
        </div>
        <img src={chicken} alt="" className="food" />
        <div className="ordernow">
          <div className="order1">Order Now</div>
          <div className="price1">Price: $10.50</div>
        </div>
        <div className="endheader">
          <div className="socialMedia">
            <img src={twitter} alt="" className="twitter" />
            <img src={facebook} alt="" className="facebook" />
            <img src={insta} alt="" className="insta" />
            <img src={linkedin} alt="" className="linkedin" />
          </div>
          <div className="slider">
            <div className="sld" id="slider1"></div>
            <div className="sld" id="slider2"></div>
            <div className="sld" id="slider3"></div>
            <div className="sld" id="slider4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestInTown;
