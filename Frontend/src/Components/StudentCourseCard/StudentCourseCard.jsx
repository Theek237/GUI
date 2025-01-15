import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./studentcoursecard.css";

export default function StudentCourseCard(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const handleEnrollClick = () => {
    if (!props.isEnrolled && props.onEnroll) {
      props.onEnroll();
    }
  };

  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="cc">
      <div className="courcecard-container">
        <div className="whitebox">
          <div className="greenbox"></div>
          <div className="cardcontent">
            <h2>{props.module_code}</h2>
            <h3>{props.module_name}</h3>

            <div className="sccbtn">
              <button
                className="enroll-btn"
                onClick={handleEnrollClick}
                disabled={props.isEnrolled}
              >
                {props.isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
