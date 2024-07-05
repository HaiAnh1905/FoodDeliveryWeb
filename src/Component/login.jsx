import { useState } from "react";
import "../ComponentCSS/login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form action="" className="login_form">
        <h1 className="form_title">Login</h1>
        <label htmlFor="" className="username-input">
          Username *
        </label>
        <input type="text" className="userInput" required/>
        <label htmlFor="" className="password-input">
          Password *
        </label>
        <input type="text" className="userPassInput" required/>
        <div className="forget-remember">
          <label htmlFor="" className="remember">
            <input type="checkbox" className="rememberCheck" /> Remember Me?
          </label>
          <NavLink className="forget" to="/">
            Lost your password?
          </NavLink>
        </div>
        <button className="CompletedBtn" type="Submit">
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
