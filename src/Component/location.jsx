import { useState } from "react";
import clock from "../Image/watch_icon.png";
import phone from "../Image/phone_icon.png";

const Location = (props) => {
  return (
    <>
      <div className="loc">
        <h1 className="Name">{props.location.name}</h1>
        <h1 className="addrss">{props.location.addrss}</h1>
        <div className="time_hotline">
          <div className="time">
            <img src={clock} alt="" className="clock" />
            7.30 AM - 9.30 PM
          </div>
          <div className="hotline">
            <img src={phone} alt="" className="clock" />
            +880 1630-225015
          </div>
        </div>
        <h1 className="ggmap">Click to View Google Map</h1>
      </div>
    </>
  );
};

export default Location;
