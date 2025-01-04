import React from "react";
import { NavLink } from "react-router-dom";
import "./navitem.css";

export default function NavItem({ text, url }) {
  return (
    <div className="navItem-container">
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {text}
      </NavLink>
    </div>
  );
}
