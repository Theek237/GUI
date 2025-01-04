import React from "react";
import EduVerseLogo from "../../assets/EduVerse.png";
import "./sidebar.css";

export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="eduverse-logo">
          <img src={EduVerseLogo} alt="logo" />
        </div>

        <div className="section-list">
          <ul>
            <li>Dashboard</li>
            <li>My Courses</li>
            <li>All Courses</li>
            <li>Assignments</li>
            <li>Messages</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
}
