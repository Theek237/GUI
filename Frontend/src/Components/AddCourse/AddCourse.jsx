import React from "react";
import "./addcourse.css";
import "./modalstyles.css";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

export default function AddCourse() {
  return (
    <div className="addcourse-container">
      <h2>Add Module</h2>
      <InputWithLabel label="Module Code" type="text" />
      <InputWithLabel label="Module Name" type="text" />
    </div>
  );
}
