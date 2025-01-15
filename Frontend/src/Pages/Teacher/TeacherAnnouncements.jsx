import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./teacherannouncements.css";
import "../../Components/EditAnnouncement/modalstyles.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import axios from "axios";
import TeacherAnnouncementBox from "../../Components/TeacherAnnouncementBox/TeacherAnnouncementBox";
import AddAnnouncement from "../../Components/AddAnnouncement/AddAnnouncement";
import EditAnnouncement from "../../Components/EditAnnouncement/EditAnnouncement";

export default function TeacherAnnouncements() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const [data, setData] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);

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

  function handleAnnouncementAdded() {
    setShowCreateModal(false);
    fetchAnnouncements();
  }

  function handleAnnouncementEdited() {
    setShowEditModal(false);
    setCurrentAnnouncement(null);
    fetchAnnouncements();
  }

  function editAnnouncement(announcement) {
    setCurrentAnnouncement(announcement);
    setShowEditModal(true);
  }

  function deleteAnnouncement(delID) {
    axios
      .delete(`http://localhost:3001/api/announcement/${delID}`)
      .then(() => {
        alert("Announcement Deleted Successfully");
        setData(data.filter((item) => item.announcement_id !== delID));
      })
      .catch((err) => console.error("Error deleting announcement:", err));
  }

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="teacherAnnounsments-container">
        <TeacherSideBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
        <div className="announcement">
          <h1>Announcements</h1>
          <div className="tacreatebtn">
            <button
              className="create-btn"
              onClick={() => setShowCreateModal(true)}
            >
              Create
            </button>
          </div>
          <div className="announcementboxes">
            {data.length > 0 ? (
              data.map((announcement) => (
                <TeacherAnnouncementBox
                  key={announcement.announcement_id}
                  id={announcement.announcement_id}
                  title={announcement.announcement_title}
                  content={announcement.announcement_content}
                  onEdit={() => editAnnouncement(announcement)}
                  onDelete={() =>
                    deleteAnnouncement(announcement.announcement_id)
                  }
                />
              ))
            ) : (
              <p>No announcements available</p>
            )}
          </div>
        </div>
        {showCreateModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ✕
              </button>
              {/* Use the correct callback here */}
              <AddAnnouncement onSuccess={handleAnnouncementAdded} />
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setShowEditModal(false)}
              >
                ✕
              </button>
              {/* Use the matching callback for edit */}
              <EditAnnouncement
                announcement={currentAnnouncement}
                onSuccess={handleAnnouncementEdited}
                onCancel={() => setShowEditModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
