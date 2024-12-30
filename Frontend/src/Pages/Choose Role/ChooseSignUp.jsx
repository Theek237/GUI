import React from "react";
import "./choose.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function ChooseSignUp() {
  return (
    <>
      <Header />
      <div className="choose-container">
        <div className="choose-text">Sign Up to EduVerse as a</div>
        <div className="choose-buttons">
          <div className="teacherbtn">
            <Link to={"/teachersignup"}>
              <div className="choose-box">
                <img src="src\assets\teacher.png" alt="teacher" />
              </div>
            </Link>
            <h2>Teacher</h2>
          </div>

          <div className="studentbtn">
            <Link to={"/studentsignup"}>
              <div className="choose-box">
                <img src="src\assets\student.png" alt="student" />
              </div>
            </Link>
            <h2>Student</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
