import React from "react";
import "./inputwithlabel.css";
export default function InputWithLabel(props) {
  return (
    <div className="inputwithlabel-container">
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="add-std-inputbox"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
