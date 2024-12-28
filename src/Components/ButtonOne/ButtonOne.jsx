import React from "react";
import "./buttonone.css";

export default function (props) {
  return (
    <div>
      <button className="btn1">{props.text}</button>
    </div>
  );
}
