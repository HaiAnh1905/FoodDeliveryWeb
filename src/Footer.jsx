import { useState } from "react";
import "./Footer.css";
import Location from "./Component/location";

const Footer = (props) => {
  const [location, setLocation] = useState([
    {
      id:1,
      name: "Robert Food",
      addrss: "1986 Hilltop DriveBorger, TX 79007",
    },
    {
      id:2,
      name: "Mark A. Reed Food",
      addrss: "4877 Rose AvenueNew Orleans, LA 70112",
    },
    {
      id:3,
      name: "Karie K. Hill Food",
      addrss: "1509 Peaceful LaneCleveland, OH 44115",
    },
  ]);

  return (
    <>
      <div className="end">
        <div className="location">
            {location.map((x) => {
              return <Location key = {location.id} location = {x}/>
            })}
        </div>
        <h1 className="copyright">Copyright © 2022 | Shaheen Uddin Ahmad</h1>
      </div>
    </>
  );
};

export default Footer;
