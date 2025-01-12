import React,{useContext} from "react";
import "./studentannouncementbox.css";

export default function StudentAnnouncementBox(props) {
  return (
    <div className="studentannouncementbox-container">
      <div className="sawhitebox">
        <div className="saheader">
          <h2>{props.title}</h2>
        </div>
        <div className="sabody">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
