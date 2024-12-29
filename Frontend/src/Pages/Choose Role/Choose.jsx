import React from "react";
import "./choose.css";

export default function Choose() {
  return (
    <div className="choose-container">
      <div className="choose-text">Log in to EduVerse as a</div>
      <div className="choose-buttons">
        <div className="adminbtn">
          <div className="choose-box">
            <img src="src/assets/admin.png" />
          </div>
        </div>
        <div className="teacherbtn">
          <div className="choose-box">
            <img src="src\assets\teacher.png" alt="teacher" />
          </div>
        </div>
        <div className="studentbtn">
          <div className="choose-box">
            <img src="src\assets\student.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
