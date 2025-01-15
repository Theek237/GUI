import React, { useEffect, useState } from "react";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./editcourse.css";
import "./modalstyles.css";

export default function EditCourse({ course, onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [formData, setFormData] = useState({
    module_code: course.module_code,
    module_name: course.module_name,
  });

  useEffect(() => {
    setFormData({
      module_code: course.module_code,
      module_name: course.module_name,
    });
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = async (e) => {
    console.log("Submitting data:", formData);
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.put(
        `http://localhost:3001/api/module/${course.module_code}`,
        formData
      );
      if (response.status === 200) {
        setMessage({ text: "Course updated successfully!", type: "success" });
        setTimeout(() => onSuccess(), 1500);
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (err) {
      console.error("Error:", err);
      setMessage({
        text: err.response?.data?.message || "Error updating course",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-course-form">
      <h2>Edit Course</h2>
      <form onSubmit={handleEdit}>
        <InputWithLabel
          type="number"
          label="Course Code"
          name="module_code"
          value={formData.module_code}
          onChange={handleChange}
          disabled
        />
        <InputWithLabel
          type="text"
          label="Course Name"
          name="module_name"
          value={formData.module_name}
          onChange={handleChange}
        />
        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {message.text && (
            <div className={`message ${message.type}`}>{message.text}</div>
          )}
        </div>
      </form>
    </div>
  );
}
