import { useState } from "react";
import '../ComponentCSS/ourRestaurant.css'
import OurRestaurant1 from '../Image/ourResturant_1.png'
import OurRestaurant2 from '../Image/ourResturant_2.png'
import OurRestaurant3 from '../Image/ourResturant_3.png'
import growth from '../Image/growth1.png'
import cooking from '../Image/cooking1.png'
import arrow from '../Image/Arrow.png'

const OurRestaurant = () => {
  return (
    <>
      <div className="OurRestaurant">
        <h1 className="title7">OUR RESTAURANT</h1>
        <div className="left1">
            <img src={OurRestaurant1} alt="" id="leftIMG1" />
            <img src={OurRestaurant2} alt="" id="leftIMG2" />
            <img src={OurRestaurant3} alt="" id="leftIMG3" />
        </div>
        <div className="right1">
          <h1 className="heading7">
            For every specialoccasion there's heritaste
          </h1>
          <h1 className="detail7">
            Indignation and dislike men who are so beguiled demoralized by the
            charms of pleasure of the moment. Success Story.
          </h1>
          <div className="successStory">
            <div className="circle">
              <img src={growth} alt="" className="circleLogo" />
            </div>
            <h1 className="Storytitle">Success Story</h1>
            <p>
              Certain circumstances and owing to the claims of duty obligations
              of business it will frequently.
            </p>
            <button className="readMore1">Read More</button>
          </div>
          <div className="successStory">
            <div className="circle">
              <img src={cooking} alt="" className="circleLogo" />
            </div>
            <h1 className="Storytitle">Passionate Chefs</h1>
            <p>
              Duty or the obligations of business it frequently occur pleasures
              have to be repudiated.
            </p>
            <button className="readMore1">
                Read More
                <img src={arrow} alt="" className="arrow3"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurRestaurant;
