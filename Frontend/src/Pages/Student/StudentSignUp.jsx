import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./studentsignup.css";
import signupimg from "../../assets/signup.svg";
import axios from "axios";

export default function StudentSignUp() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!values.name || !values.email || !values.mobile || 
        !values.password || !values.confirmpassword) {
      setError("All fields are required");
      return false;
    }

    if (values.password !== values.confirmpassword) {
      setError("Passwords do not match");
      return false;
    }

    if (values.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/studentsignup",
        {
          name: String(values.name),
          email: String(values.email),
          mobile: String(values.mobile),
          password: String(values.password),
          confirmpassword: String(values.confirmpassword),
        }
      );

      if (response.data.message) {
        alert("Registration Successful");
        navigate("/studentsignin");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setError("");
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="signup-container">
        <div className="signup-leftside">
          <div className="signup-title">
            <h1>
              <span>Student</span> Sign Up
            </h1>
            <h2>Enter Your Details to Create an account</h2>
          </div>
          <img src={signupimg} alt="signupimg" />
        </div>

        <div className="signup-rightside">
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="signup-input">
              <InputBox
                name="name"
                value={values.name}
                type="text"
                placeholder="Name"
                src="src/assets/user.png"
                onChange={handleChange}
              />
              <InputBox
                name="email"
                value={values.email}
                type="email"
                placeholder="Email"
                src="src/assets/email.png"
                onChange={handleChange}
              />
              <InputBox
                name="password"
                value={values.password}
                type="password"
                placeholder="Password"
                src="src/assets/password.png"
                onChange={handleChange}
              />
              <InputBox
                name="confirmpassword"
                value={values.confirmpassword}
                type="password"
                placeholder="Confirm Password"
                src="src/assets/password.png"
                onChange={handleChange}
              />
              <InputBox
                name="mobile"
                value={values.mobile}
                type="text"
                placeholder="Mobile Number"
                src="src/assets/mobile.png"
                onChange={handleChange}
              />
            </div>
            
            <button 
              className="signup-btn" 
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          
          <p className="linktosignin">
            Already Have an Account?
            <span>
              <Link to="/studentsignin">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}