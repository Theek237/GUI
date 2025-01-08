import React from "react";
import "./coursecard.css";

export default function CourseCard(props) {
  return (
    <>
      <div className="courcecard-container">
        <div className="whitebox">
          <div className="greenbox"></div>
          <h2>{props.moduleCode}</h2>
          <h3>{props.moduleName}</h3>

          <div className="btns ">
            <button className="delete-btn">Delete</button>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}
