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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeacherSignUp() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formValues);
  // };
  const validateForm = () => {
    if (
      !values.name ||
      !values.email ||
      !values.mobile ||
      !values.password ||
      !values.confirmpassword
    ) {
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
        "http://localhost:3001/api/auth/teachersignup",
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
              <span>Teacher</span> Sign Up
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
                type="text"
                placeholder="Name"
                src="src/assets/user.png"
                value={values.name}
                onChange={handleChange}
              />
              <InputBox
                name="email"
                type="email"
                placeholder="Email"
                src="src/assets/email.png"
                value={values.email}
                onChange={handleChange}
              />
              <InputBox
                name="password"
                type="password"
                placeholder="Password"
                src="src/assets/password.png"
                value={values.password}
                onChange={handleChange}
              />
              <InputBox
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                src="src/assets/password.png"
                value={values.confirmpassword}
                onChange={handleChange}
              />

              <InputBox
                name="mobile"
                type="text"
                placeholder="Mobile Number"
                src="src/assets/mobile.png"
                value={values.mobile}
                onChange={handleChange}
              />
            </div>

            {/* <Link to="/teacher/dashboard"> */}
            <button className="signup-btn" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
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
