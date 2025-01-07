import React, { useState } from "react";
import "./addstudent.css";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./modalstyles.css";

export default function AddStudent({ onSuccess }) {
  const [values, setValues] = useState({
    studentID: "",
    studentName: "",
    studentEmail: "",
    studentMobileNo: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.studentID ||
      !values.studentName ||
      !values.studentEmail ||
      !values.studentMobileNo
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    axios
      .post("http://localhost:3001/api/student", values)
      .then((res) => {
        console.log(res);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        setError("Error adding student.");
      });
  };

  return (
    <div className="add-student-container">
      <form className="add-student-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Add Student</h1>

        {error && <p className="error-message">{error}</p>}

        <InputWithLabel
          type="text"
          label="Student ID:"
          value={values.studentID}
          onChange={(e) => setValues({ ...values, studentID: e.target.value })}
        />
        <InputWithLabel
          type="text"
          label="Name:"
          value={values.studentName}
          onChange={(e) =>
            setValues({ ...values, studentName: e.target.value })
          }
        />
        <InputWithLabel
          type="text"
          label="Email:"
          value={values.studentEmail}
          onChange={(e) =>
            setValues({ ...values, studentEmail: e.target.value })
          }
        />
        <InputWithLabel
          type="text"
          label="Mobile:"
          value={values.studentMobileNo}
          onChange={(e) =>
            setValues({ ...values, studentMobileNo: e.target.value })
          }
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
