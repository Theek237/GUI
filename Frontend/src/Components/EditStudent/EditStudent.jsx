import React, { useEffect, useState } from "react";
import "./editstudent.css";
import "./modalstyles.css";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";

export default function EditStudent({ student, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    name: student.StudentName,
    email: student.StudentEmail,
    mobile: student.StudentMobileNo, 
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData({
      name: student.StudentName,
      email: student.StudentEmail,
      mobile: student.StudentMobileNo,
    });
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.put(
        `http://localhost:3001/api/student/${student.StudentID}`,
        formData
      );
      setMessage({ text: "Student updated successfully!", type: "success" });
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Error updating student",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-student-form">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleEdit}>
        <InputWithLabel
          type="text"
          label="Student Name:"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputWithLabel
          type="email"
          label="Email:"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <InputWithLabel
          type="tel"
          label="Mobile No:"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Updating..." : "Update Student"}
          </button>
          {/* <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button> */}
        </div>
      </form>

      {message.text && (
        <div className={`message ${message.type}`}>{message.text}</div>
      )}
    </div>
  );
}
