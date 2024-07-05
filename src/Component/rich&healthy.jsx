import { useState } from "react";
import "../ComponentCSS/rich&healthy.css";
import star from "../Image/Star.png";
import richHealthy1 from "../Image/image_richHealthy_1.png";
import richHealthy2 from "../Image/image_richHealthy_2.png";

const RAH = () => {
  return (
    <>
      <div className="richHealthy">
        <h2 className="tilte3">RICH & HEALTHY</h2>
        <div className="grid_template">
          <div className="template_heading">
            <h1 className="heading3">
              Highest quality artisangrains, proteins & seasonal ingredients
            </h1>
            <p className="details">
              Righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by
              desires, that they cannot foresee.
            </p>
          </div>
          <div className="template_quote">
            <ul className="WhatWeBest">
              <li>
                <img src={star} alt="" className="staricon" />
                <div className="quote">Simple and easy to distinguish</div>
              </li>
              <li>
                <img src={star} alt="" className="staricon" />
                <div className="quote">
                  Pleasure of the momentblinded desire
                </div>
              </li>
              <li>
                <img src={star} alt="" className="staricon" />
                <div className="quote">Able to do what we like best</div>
              </li>
            </ul>
            <button className="readmore">Reade More</button>
          </div>
          <img src={richHealthy1} alt="" className="richHealthyIMG1" />
          <img src={richHealthy2} alt="" className="richHealthyIMG2" />
        </div>
      </div>
    </>
  );
};

export default RAH;
