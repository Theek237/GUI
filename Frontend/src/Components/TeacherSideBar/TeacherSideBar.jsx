import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import EduverseLight from "../../assets/EduVerse.svg";
import EduverseDark from "../../assets/EduVerse-dark.svg";
import "./teachersidebar.css";
import {  NavLink } from "react-router-dom";

export default function TeacherSideBar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const logoSrc = isDarkMode ? EduverseDark : EduverseLight;

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="sidebar-container">
        <div className="eduverse-logo">
          <img src={logoSrc} alt="logo" />
        </div>

        <div className="section-list">
          <ul>
            <li>
              <NavLink to="/teacher/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/teacher/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/teacher/assignments">Assignments</NavLink>
            </li>
            <li>
              <NavLink to="/teacher/announcements">Announcements</NavLink>
            </li>
            <li>
              <NavLink to="/teacher/students">Students</NavLink>
            </li>
            <li>
              <NavLink to="/teacher/settings">Settings</NavLink>
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
