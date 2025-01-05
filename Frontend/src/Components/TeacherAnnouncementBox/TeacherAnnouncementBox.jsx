import React from "react";
import "./teacherannouncementbox.css";
import editicon from "../../assets/edit.png";
import deleteicon from "../../assets/bin.png";

export default function TeacherAnnouncementBox({ id, date, title, content }) {
  return (
    <div className="teacherannouncementbox-container">
      <div className="tawhitebox">
        <div className="taheader">
          <div className="taleftside">
            <h2>{title}</h2>
            <h3>{date}</h3>
          </div>
          <div className="tarightside">
            <img className="imgone" src={editicon} />
            <img className="imgtwo" src={deleteicon} />
          </div>
        </div>
        <div className="tabody">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
