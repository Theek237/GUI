import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import InputBox from "../../Components/InputBox/InputBox";
import Footer from "../../Components/Footer/Footer";
import "./studentsignin.css";
import loginimg from "../../assets/login.svg";
import axios from "axios";

export default function StudentSignIn() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!values.email || !values.password) {
      setError("All fields are required");
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
    console.log("Sending request with:", values); 
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/studentsignin",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.data.message) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert("Login Successful");
        navigate("/student/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
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
            {error && <div className="error-message">{error}</div>}

            <div className="signin-input">
              <InputBox
                type="email"
                value={values.email}
                name="email"
                placeholder="Email"
                src="src/assets/email.png"
                onChange={handleChange}
              />
              <InputBox
                type="password"
                value={values.password}
                name="password"
                placeholder="Password"
                src="src/assets/password.png"
                onChange={handleChange}
              />
            </div>
            <button className="signin-btn" disabled={loading}>
              Sign In
            </button>
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
