import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./studentannouncements.css";
import axios from "axios";
import StudentAnnouncementBox from "../../Components/StudentAnnouncementBox/StudentAnnouncementBox";
import StudentSideBar from "../../Components/StudentSideBar/StudentSideBar";

export default function StudentAnnouncements() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = () => {
    axios
      .get("http://localhost:3001/api/announcement")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  };
  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="studentAnnounsments-container">
        <StudentSideBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <div className="announcement">
          <h1>Announcements</h1>

          <div className="announcementboxes">
            {data.length > 0 ? (
              data.map((announcement) => (
                <StudentAnnouncementBox
                  key={announcement.announcement_id}
                  id={announcement.announcement_id}
                  title={announcement.announcement_title}
                  content={announcement.announcement_content}
                />
              ))
            ) : (
              <p>No announcements available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
