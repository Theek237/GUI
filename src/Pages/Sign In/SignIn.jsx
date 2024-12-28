import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

import "./signin.css";
export default function SignIn(props) {
  return (
    <>
      <>
        <Header />
        <div className="signin-container">
          <div className="signin-leftside">
            <img src="src\assets\login.png" alt="loginimg" />
          </div>
          <div className="signin-rightside">
            <div className="signin-title">
              <h1>
                <span>Student</span> Sign In
              </h1>
              <h2>Enter Your Email and Password</h2>
            </div>
            <div className="signin-input">
              <div className="input-email">
                <input type="email" placeholder="Email" className=" inputbox" />
                <img src="src/assets/email.png" alt="" className="input-icon" />
              </div>

              <div className="input-password">
                <input
                  type="password"
                  placeholder="Password"
                  className=" inputbox"
                />
                <img
                  src="src/assets/password.png"
                  alt=""
                  className="input-icon"
                />
              </div>
            </div>

            <button className="signin-btn">Sign In</button>
            <p className="linktosignup">
              Don’t Have an Account?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </>
    </>
  );
}
