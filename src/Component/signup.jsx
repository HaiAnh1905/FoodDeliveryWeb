import { useState } from "react";
import "../ComponentCSS/signup.css";

const SignUp = () => {
  return (
    <>
      <form action="" className="signup_form">
        <h1 className="form_title Red_Text">Sign Up</h1>
        <label htmlFor="" className="newUsername">
          Username *
        </label>
        <input type="text" className="newUserInput" required />
        <label htmlFor="" className="newEmail">
          Email Address *
        </label>
        <input type="text" className="newEmailInput" required />
        <label htmlFor="" className="newPassword">
          Password *
        </label>
        <input type="text" className="newPassInput" required />
        <button className="createAccount">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
