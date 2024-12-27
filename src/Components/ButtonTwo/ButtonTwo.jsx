import React from "react";
import "./buttontwo.css";

export default function ButtonTwo(props) {
  return (
    <div>
      <button className="btn2">{props.text}</button>
    </div>
  );
}
