import React, { useState } from "react";
import "./addstudent.css";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    id: "",
    mobile: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.id || !values.name || !values.email || !values.mobile) {
      setError("All fields are required!");
      return;
    }
    setError("");
    axios
      .post("http://localhost:3001/api/student", values)
      .then((res) => {
        console.log(res);
        navigate("/teacher/students");
      })
      .catch((err) => {
        console.log(err);
        setError("Error adding student.");
      });
  };

  return (
    <>
      <div className="add-student-container">
        <form className="add-student-form" onSubmit={handleSubmit}>
          <h1>Add Student</h1>

          {error && <p className="error-message">{error}</p>}

          <InputWithLabel
            type="text"
            value={values.id}
            // placeholder="Enter Student ID"
            label="Student ID:"
            onChange={(e) => setValues({ ...values, id: e.target.value })}
          />
          <InputWithLabel
            type="text"
            value={values.name}
            // placeholder="Enter Student Name"
            label="Name:"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <InputWithLabel
            type="text"
            value={values.email}
            // placeholder="Enter Student Email"
            label="Email:"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <InputWithLabel
            type="text"
            value={values.mobile}
            // placeholder="Enter Student Mobile Number"
            label="Mobile:"
            onChange={(e) => setValues({ ...values, mobile: e.target.value })}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
