import React from "react";
import "./header.css";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <div className="leftSideHeader">
        <Link to={"/"}>
          <img src="src/assets/EduVerse.png" alt="EduVerse Logo" />
        </Link>
      </div>
      <div className="rightSideHeader">
        <NavItem text="Home" url="/" />
        <NavItem text="About" url="/about" />
        <NavItem text="Sign Up" url="/choosesignup" />
        <NavItem text="Sign In" url="/choosesignin" />
      </div>
    </div>
  );
}
