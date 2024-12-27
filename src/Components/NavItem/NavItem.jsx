import React from "react";
import "./navitem.css";

export default function NavItem(props) {
  return (
    <div className="navItem-container">
      <a href={props.url}>{props.text}</a>
    </div>
  );
}
