import React from "react";
import EduVerseLogo from "../../assets/EduVerse.svg";
import "./studentsidebar.css";
import { Link, NavLink } from "react-router-dom";

export default function StudentSideBar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="eduverse-logo">
          <img src={EduVerseLogo} alt="logo" />
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
              <NavLink to={"/student/announsments"}>Announsments</NavLink>
            </li>
            <li>
              <NavLink to={"/student/settings"}>Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
