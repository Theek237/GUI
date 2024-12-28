import React from "react";
import "./inputbox.css";

export default function InputBox(props) {
  return (
    <>
      <div className="inputbox-container">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className=" inputbox"
        />
        <img src={props.src} className="input-icon" />
      </div>
    </>
  );
}
