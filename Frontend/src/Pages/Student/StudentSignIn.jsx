import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./studentsignin.css";
import loginimg from "../../assets/login.svg";

export default function StudentSignIn() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };



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
          <form onSubmit={handleSubmit}>
            <div className="signin-input">
              <InputBox
                type="email"
                placeholder="Email"
                src="src/assets/email.png"
                // onChange={handleChange}
              />
              <InputBox
                type="password"
                placeholder="Password"
                src="src/assets/password.png"
              />
            </div>
            <Link to="/student/dashboard">
              <button className="signin-btn">Sign In</button>
            </Link>
          </form>
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
