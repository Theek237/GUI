import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./teachersignup.css";
import signupimg from "../../assets/signup.svg";

export default function TeacherSignUp() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
  });
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="signup-container">
        <div className="signup-leftside">
          <div className="signup-title">
            <h1>
              <span>Teacher</span> Sign Up
            </h1>
            <h2>Enter Your Details to Create an account</h2>
          </div>
          <img src={signupimg} alt="signupimg" />
        </div>

        <div className="signup-rightside">
          <form onSubmit={handleSubmit}>
            <div className="signup-input">
              <InputBox
                name="name"
                type="text"
                placeholder="Name"
                src="src/assets/user.png"
                value={formValues.name}
                onChange={handleInputChange}
              />
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                src="src/assets/email.png"
                value={formValues.email}
                onChange={handleInputChange}
              />
              <InputBox
                name="password"
                type="password"
                placeholder="Password"
                src="src/assets/password.png"
                value={formValues.password}
                onChange={handleInputChange}
              />
              <InputBox
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                src="src/assets/password.png"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
              />

              <InputBox
                name="mobile"
                type="text"
                placeholder="Mobile Number"
                src="src/assets/mobile.png"
                value={formValues.mobile}
                onChange={handleInputChange}
              />
            </div>

            {/* <Link to="/teacher/dashboard"> */}
            <button className="signup-btn">Sign Up</button>
            {/* </Link> */}
          </form>
          <p className="linktosignin">
            Already Have an Account?
            <span>
              <Link to="/teachersignin"> Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
