import React from "react";
import "./choose.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function ChooseSignIn() {
  return (
    <>
      <Header />
      <div className="choose-container">
        <div className="choose-text">Sign In to EduVerse as a</div>
        <div className="choose-buttons">
          <Link to={"/teachersignin"}>
            <div className="teacherbtn">
              <div className="choose-box">
                <img src="src\assets\teacher.png" alt="teacher" />
              </div>
            </div>
          </Link>
          <Link to={"/studentsignin"}>
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
