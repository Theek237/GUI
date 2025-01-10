import React from "react";
import "./coursecard.css";

export default function CourseCard(props) {
  return (
    <>
      <div className="courcecard-container">
        <div className="whitebox">
          <div className="greenbox"></div>
          <h2>{props.module_code}</h2>
          <h3>{props.module_name}</h3>

          <div className="btns ">
            <button
              className="delete-btn"
              onClick={() => props.onDelete(props.module_code)}
            >
              Delete
            </button>
            <button className="edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}
