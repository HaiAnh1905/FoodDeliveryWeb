import { useState } from "react";
import "./Contact.css";
import CUPart1BG from "./Image/contact_bg.png";
import loc from "./Image/location_icon.png";
import phone from "./Image/redphone_icon.png";
import mail from "./Image/mail_icon.png";
import clock from "./Image/redwatch_icon.png";
import facebook from "./Image/facebook.png";
import twitter from "./Image/twitter.png";
import insta from "./Image/instagram.png";
import linkedin from "./Image/linkedin.png";
import MAP from './Image/map.png'

const Contact = () => {
  return (
    <>
      <div className="ConTactUS">
        <div className="CUPart1">
          <img src={CUPart1BG} alt="" className="CUPart1BG" />
          <h1 className="CUPart1Title">CONTACT US</h1>
          <h1 className="CUPart1Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore magna.
          </h1>
        </div>
        <div className="CUPart2">
            {/* Address */}
          <div className="Addrssss">
            <h1 className="AdrsTitle">ADDRESS</h1>
            <div className="AdrsLoc Adrss">
              <img src={loc} alt="" className="AdrsIcon LocIcon" />
              <h1 className="AdrssDetails">
                28 Seventh Avenue, Neew York, 10014
              </h1>
            </div>
            <div className="AdrsHotline Adrss">
              <img src={phone} alt="" className="AdrsIcon HotlineIcon" />
              <h1 className="AdrssDetails">+880 1630 225 015</h1>
            </div>
            <div className="AdrsMail Adrss">
              <img src={mail} alt="" className="AdrsIcon MailIcon" />
              <h1 className="AdrssDetails">resturents@gmail.com</h1>
            </div>
          </div>
          {/* Woking Hour */}
          <div className="WorkingHour">
            <h1 className="WorkingHTitle">WORKING HOURS</h1>
            <div className="WH">
                <img src={clock} alt="" className="WHIcon" />
                <h1 className="WHDetails">7:30 am to 9:30pm on Weekdays</h1>
            </div>
          </div>
          {/* Follow US */}
          <div className="FollowMe">
            <h1 className="FM">FOLLOW US</h1>
            <div className="socialMedia2">
              <img src={twitter} alt="" className="twitter" />
              <img src={facebook} alt="" className="facebook" />
              <img src={insta} alt="" className="insta" />
              <img src={linkedin} alt="" className="linkedin" />
            </div>
          </div>
          {/* Map */}
          <img src={MAP} alt="" className="MAP" />
        </div>
      </div>
    </>
  );
};

export default Contact;
