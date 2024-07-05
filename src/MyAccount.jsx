import { useState } from "react";
import './MyAccount.css'
import MAbg from './Image/MyAcc_bg.png'
import Login from "./Component/login";
import SignUp from "./Component/signup";

const LoginOrSignUp = () => {
    return(
        <>
        <div className="MyAccount">
            <div className="MAPart1">
                <img src={MAbg} alt="" className="MAbg" />
                <h1 className="MATitle">My Account</h1>
            </div>
            <div className="MAForm">
                <Login />
                <SignUp />
            </div>
        </div>
        </>
    )
}

export default LoginOrSignUp