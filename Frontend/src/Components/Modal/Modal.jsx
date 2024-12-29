import React from "react";
import "./modal.css";

export default function Modal({ isOpen, onClose, student }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Student Details</h2>
        <p>ID: {student.StudentID}</p>
        <p>Name: {student.StudentName}</p>
        <p>Email: {student.StudentEmail}</p>
        <p>Mobile: {student.StudentMobileNo}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
