import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import EduverseLight from "../../assets/EduVerse.svg";
import EduverseDark from "../../assets/EduVerse-dark.svg";
import "./studentsidebar.css";
import { NavLink } from "react-router-dom";

export default function StudentSideBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const logosrc = isDarkMode ? EduverseDark : EduverseLight;
  return (
    <div className="sb" data-theme={isDarkMode ? "dark" : "light"}>
      <div className="sidebar-container">
        <div className="eduverse-logo">
          <img src={logosrc} alt="logo" />
        </div>

        <div className="section-list">
          <ul>
            <li>
              <NavLink to={"/student/dashboard"}>Dashboard</NavLink>
            </li>

            <li>
              <NavLink to={"/student/mycourses"}>My Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/student/allcourses"}>All Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/student/assignments"}>Assignments</NavLink>
            </li>
            <li>
              <NavLink to={"/student/announcements"}>Announcements</NavLink>
            </li>
            <li>
              <NavLink to={"/student/settings"}>Settings</NavLink>
            </li>
            <li>
              <button onClick={toggleTheme}>Theme</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
