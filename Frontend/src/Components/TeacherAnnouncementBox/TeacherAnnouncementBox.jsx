import React from "react";
import "./teacherannouncementbox.css";

export default function TeacherAnnouncementBox({
  id,
  title,
  content,
  onDelete,
}) {
  return (
    <div className="teacherannouncementbox-container">
      <div className="tawhitebox">
        <div className="taheader">
          <div className="taleftside">
            <h2>{title}</h2>
          </div>
          <div className="tarightside">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </div>
        <div className="tabody">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
