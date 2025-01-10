import React from "react";
import "./addcourse.css";
import "./modalstyles.css";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import { useState } from "react";
import axios from "axios";

export default function AddCourse(props) {
  const [values, setValues] = useState({
    module_code: "",
    module_name: "",
  });
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!values.module_code || !values.module_name) {
      setError("All fields are required!");
      return;
    }
    setError("");
    axios
      .post("http://localhost:3001/api/module", values)
      .then(() => {
        props.onSuccess && props.onSuccess();
      })
      .catch(() => {
        setError("Error adding Course.");
      });
  }

  return (
    <div className="addcourse-container">
      <form className="addcourse-form" onSubmit={handleSubmit}>
        <h2>Add Module</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="addcourseinputs">
          <InputWithLabel
            label="Module Code"
            type="text"
            className="courseinputs"
            onChange={(e) =>
              setValues({ ...values, module_code: e.target.value })
            }
          />
          <InputWithLabel
            label="Module Name"
            type="text"
            className="courseinputs"
            onChange={(e) =>
              setValues({ ...values, module_name: e.target.value })
            }
          />
        </div>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
}
