import React from "react";
import "./teacherannouncementbox.css";

export default function TeacherAnnouncementBox({
  id,
  title,
  content,
  onDelete,
  onEdit
}) {
  return (
    <div className="teacherannouncementbox-container">
      <div className="tawhitebox">
        <div className="taheader">
          <div className="taleftside">
            <h2>{title}</h2>
          </div>
          <div className="tarightside">
            <button className="edit-btn" onClick={onEdit}>Edit</button>
            <button className="delete-btn" onClick={onDelete}>
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
