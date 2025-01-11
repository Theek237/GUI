import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./studentsignin.css";
import loginimg from "../../assets/login.svg";

export default function StudentSignIn() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="signin-container">
        <div className="signin-leftside">
          <img src={loginimg} alt="loginimg" />
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
          <Link to="/student">
            <button className="signin-btn">Sign In</button>
          </Link>
          <p className="linktosignup">
            Don’t Have an Account?{" "}
            <span>
              <Link to="/studentsignup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
