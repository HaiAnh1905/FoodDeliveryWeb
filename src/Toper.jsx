import { useState } from "react";
import './Toper.css'
import clock from './Image/watch_icon.png'
import phone from './Image/phone_icon.png'

const Toper = () => {
    return(
        <>

            <div className="toper">
                <div className="activeHour">
                    <img src={clock} alt="" className="clock toperIcon"/>
                    <p>7.30 AM - 9.30 PM</p>
                </div>
                <div className="callUs">
                    <img src={ phone} alt="" className="phone toperIcon"/>
                    <p>+880 1630 225 015</p>
                </div>

                <div className="register">REGISTER</div>
            </div>

        </>
    )
}

export default Toper