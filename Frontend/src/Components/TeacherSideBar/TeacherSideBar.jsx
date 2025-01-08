import React from "react";
import EduVerseLogo from "../../assets/EduVerse.png";
import "./teachersidebar.css";
import { Link, NavLink } from "react-router-dom";

export default function TeacherSideBar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="eduverse-logo">
          <img src={EduVerseLogo} alt="logo" />
        </div>

        <div className="section-list">
          <ul>
            <li>
              <NavLink to={"/teacher/dashboard"}>Dashboard</NavLink>
            </li>

            <li>
              <NavLink to={"/teacher/courses"}>Courses</NavLink>
            </li>
            <li>
              <NavLink to={"/teacher/assignments"}>Assignments</NavLink>
            </li>
            <li>
              <NavLink to={"/teacher/announcements"}>Announcements</NavLink>
            </li>
            <li>
              <NavLink to={"/teacher/students"}>Stundets</NavLink>
            </li>
            <li>
              <NavLink to={"/teacher/settings"}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
