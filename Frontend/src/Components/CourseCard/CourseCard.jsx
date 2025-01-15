import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./coursecard.css";

export default function CourseCard(props) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div data-theme={isDarkMode ? "dark" : "light"} className="cc">
      <div className="courcecard-container">
        <div className="whitebox">
          <div className="greenbox"></div>
          <div className="cardcontent">
            <h2>{props.module_code}</h2>
            <h3>{props.module_name}</h3>

            <div className="btns ">
              <button
                className="delete-btn"
                onClick={() => props.onDelete(props.module_code)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => props.onEdit(props.module_code)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
