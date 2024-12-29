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
          <Link to={"/teachersignup"}>
            <div className="teacherbtn">
              <div className="choose-box">
                <img src="src\assets\teacher.png" alt="teacher" />
              </div>
            </div>
          </Link>
          <Link to={"/studentsignup"}>
            <div className="studentbtn">
              <div className="choose-box">
                <img src="src\assets\student.png" alt="student" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
