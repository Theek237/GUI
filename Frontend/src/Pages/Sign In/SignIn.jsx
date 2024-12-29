import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";

import "./signin.css";
export default function SignIn(props) {
  return (
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
            <InputBox
              type="email"
              placeholder="Email"
              src="src/assets/email.png"
            />
            <InputBox
              type="password"
              placeholder="Password"
              src="src/assets/password.png"
            />
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
      <Footer />
    </>
  );
}
