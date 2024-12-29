import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./studentsignup.css";

export default function StudentSignUp(props) {
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-leftside">
          <div className="signup-title">
            <h1>
              <span>Student</span> Sign Up
            </h1>
            <h2>Enter Your Details to Create an account</h2>
          </div>
          <img src="src\assets\signup.png" alt="signupimg" />
        </div>

        <div className="signup-rightside">
          <div className="signup-input">
            <InputBox
              type="text"
              placeholder="Name"
              src="src/assets/user.png"
            />
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
            <InputBox
              type="password"
              placeholder="Confirm Password"
              src="src/assets/password.png"
            />

            <InputBox
              type="text"
              placeholder="Mobile Number"
              src="src/assets/mobile.png"
            />
          </div>

          <button className="signup-btn">Sign Up</button>
          <p className="linktosignin">
            Already Have an Account?
            <span>
              <Link to="/studentsignin">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
