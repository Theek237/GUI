import React from "react";
import "./header.css";
import NavItem from "../NavItem/NavItem";
import { Link } from "react-router-dom";
import EduverseLight from "../../assets/EduVerse.svg";
import EduverseDark from "../../assets/EduVerse-dark.svg";

export default function Header({ isDarkMode, onToggleTheme }) {
  const logoSrc = isDarkMode ? EduverseDark : EduverseLight;

  return (
    <div className="header-container">
      <div className="leftSideHeader">
        <Link to={"/"}>
          <img src={logoSrc} alt="EduVerse Logo" />
        </Link>
      </div>
      <div className="rightSideHeader">
        <NavItem text="Home" url="/" />
        <NavItem text="About" url="/about" />
        <NavItem text="Sign Up" url="/choosesignup" />
        <NavItem text="Sign In" url="/choosesignin" />
        <button onClick={onToggleTheme}>Theme</button>
      </div>
    </div>
  );
}
