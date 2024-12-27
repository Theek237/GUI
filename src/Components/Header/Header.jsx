import React from "react";
import "./header.css";
import NavItem from "../NavItem/NavItem";

export default function Header() {
  return (
    <div className="header-container">
      <div className="leftSideHeader">
        <img src="src/assets/EduVerse.png" alt="EduVerse Logo" />
        {/* <h4>Eduverse</h4> */}
      </div>
      <div className="rightSideHeader">
        <NavItem text="Home" url="/" />
        <NavItem text="About" url="/about" />
        <NavItem text="Sign Up" url="/signup" />
        <NavItem text="Sign In" url="/signin" />
      </div>
    </div>
  );
}
