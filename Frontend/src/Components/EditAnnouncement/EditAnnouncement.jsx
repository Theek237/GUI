import React, { useEffect, useState } from "react";
import axios from "axios";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import "./editannouncement.css";
import "./modalstyles.css";

export default function EditAnnouncement({ announcement, onSuccess }) {
  const [formData, setFormData] = useState({
    announcement_title: announcement.announcement_title,
    announcement_content: announcement.announcement_content,
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData({
      announcement_title: announcement.announcement_title,
      announcement_content: announcement.announcement_content,
    });
  }, [announcement]);

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
      await axios.put(
        `http://localhost:3001/api/announcement/${announcement.announcement_id}`,
        formData
      );
      setMessage({
        text: "Announcement updated successfully!",
        type: "success",
      });
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      console.error("Error data:", err.response?.data);
      console.error("Error status:", err.response?.status);
      setMessage({
        text: err.response?.data?.message || "Error updating announcement",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="edit-announcement-form">
      <h2>Edit Announcement</h2>
      <form onSubmit={handleEdit}>
        <InputWithLabel
          type="text"
          label="Title:"
          name="announcement_title"
          value={formData.announcement_title}
          onChange={handleChange}
          required
        />
        <InputWithLabel
          type="text"
          label="Content:"
          name="announcement_content"
          value={formData.announcement_content}
          onChange={handleChange}
          required
        />
        <div className="form-actions">
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? "Updating..." : "Update Announcement"}
          </button>
          {/* Optionally enable the cancel button if needed */}
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
