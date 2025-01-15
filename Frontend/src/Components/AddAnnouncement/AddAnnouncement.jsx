
import React, { useState } from "react";
import "./addannouncement.css";
import "./modalstyles.css";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

export default function AddAnnouncement({ onSuccess }) {
  const [values, setValues] = useState({
    announcement_id: "",
    announcement_title: "",
    announcement_content: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !values.announcement_id ||
      !values.announcement_title ||
      !values.announcement_content
    ) {
      setError("All fields are required!");
      return;
    }
    setError("");
    axios
      .post("http://localhost:3001/api/announcement", values)
      .then(() => {
        onSuccess && onSuccess(); 
      })
      .catch(() => {
        setError("Error adding Announcement.");
      });
  };

  return (
    <div className="add-student-container">
      <form className="add-student-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Add Announcement</h1>

        {error && <p className="error-message">{error}</p>}

        <InputWithLabel
          type="number"
          label="Announcement ID:"
          value={values.announcement_id}
          onChange={(e) =>
            setValues({ ...values, announcement_id: e.target.value })
          }
        />
        <InputWithLabel
          type="text"
          label="Title:"
          value={values.announcement_title}
          onChange={(e) =>
            setValues({ ...values, announcement_title: e.target.value })
          }
        />

        <InputWithLabel
          type="text"
          label="Content:"
          value={values.announcement_content}
          onChange={(e) =>
            setValues({ ...values, announcement_content: e.target.value })
          }
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
