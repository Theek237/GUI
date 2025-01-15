import React from "react";
import "./inputbox.css";

export default function InputBox(props) {
  return (
    <>
      <div className="inputbox-container">
        <input
        name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className=" inputbox"
          value={props.value}
          onChange={props.onChange}
        />
        <img src={props.src} className="input-icon" />
      </div>
    </>
  );
}
