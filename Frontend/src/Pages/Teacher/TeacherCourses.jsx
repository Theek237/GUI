import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./teachercourses.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import CourseCard from "../../Components/CourseCard/CourseCard";
import AddCourse from "../../Components/AddCourse/AddCourse";
import axios from "axios";

export default function TeacherCourses() {
  const { isDarkMode } = useContext(ThemeContext);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  function handleSuccess() {
    setShowCreateModal(false);
    fetchCourses();
  }

  function fetchCourses() {
    axios
      .get("http://localhost:3001/api/module")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }

  function deleteCourse(delID) {
    axios
      .delete(`http://localhost:3001/api/module/${delID}`)
      .then(() => {
        alert("Course Deleted Successfully");
        setData(data.filter((item) => item.module_code !== delID));
      })
      .catch((err) => console.error("Error deleting course:", err));
  }

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="teachercourses-container">
        <TeacherSideBar />
        <div className="teachercourses">
          <h1>Courses</h1>
          <div className="tacreatebtn">
            <button
              className="create-btn"
              onClick={() => setShowCreateModal(true)}
            >
              Create
            </button>
          </div>
          <div className="allcards">
            {data.length > 0 ? (
              data.map((modules) => (
                <CourseCard
                  key={modules.module_code}
                  module_code={modules.module_code}
                  module_name={modules.module_name}
                  onDelete={deleteCourse}
                />
              ))
            ) : (
              <p>No Modules available</p>
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
              <AddCourse onSuccess={handleSuccess} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
