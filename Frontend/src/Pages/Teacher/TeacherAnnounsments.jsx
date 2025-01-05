import React, { useEffect, useState } from "react";
import "./teacherannounsments.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import TeacherAnnouncementBox from "../../Components/TeacherAnnouncementBox/TeacherAnnouncementBox";

export default function TeacherAnnounsments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/announcement")
      .then((res) => {
        console.log("API Response:", res.data);
        setData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <div className="teacherAnnounsments-container">
      <TeacherSideBar />
      <div className="announcement">
        <h1>Announcements</h1>
        <div className="tacreatebtn">
          <Link to={"/studentcreate"}>
            <div className="create-btn">Create</div>
          </Link>
        </div>
        {data.length > 0 ? (
          data.map((announcement) => (
            <TeacherAnnouncementBox
              key={announcement.announcement_id}
              id={announcement.announcement_id}
              date={announcement.announcement_date}
              title={announcement.announcement_title}
              content={announcement.announcement_content}
            />
          ))
        ) : (
          <p>No announcements available</p>
        )}
      </div>
    </div>
  );
}
