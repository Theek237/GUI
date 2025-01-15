import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./teachercourses.css";
import "../../Components/EditCourse/modalstyles.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import CourseCard from "../../Components/CourseCard/CourseCard";
import AddCourse from "../../Components/AddCourse/AddCourse";
import EditCourse from "../../Components/EditCourse/EditCourse";
import axios from "axios";

export default function TeacherCourses() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch the list of courses (modules)
  function fetchCourses() {
    axios
      .get("http://localhost:3001/api/module")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }

  // Handle creation success (close modal and refresh)
  function handleCourseAdded() {
    setShowCreateModal(false);
    fetchCourses();
  }

  // Handle edit success (close modal, clear current course, refresh)
  function handleCourseEdited() {
    setShowEditModal(false);
    setCurrentCourse(null);
    fetchCourses();
  }

  // Open edit modal with the selected course
  function editCourse(course) {
    setCurrentCourse(course);
    setShowEditModal(true);
  }

  // Delete a course by ID
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
        <TeacherSideBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
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
              data.map((course) => (
                <CourseCard
                  key={course.module_code}
                  module_code={course.module_code}
                  module_name={course.module_name}
                  onEdit={() => editCourse(course)}
                  onDelete={() => deleteCourse(course.module_code)}
                />
              ))
            ) : (
              <p>No Modules available</p>
            )}
          </div>
        </div>

        {/* Create Course Modal */}
        {showCreateModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ✕
              </button>
              <AddCourse onSuccess={handleCourseAdded} />
            </div>
          </div>
        )}

        {/* Edit Course Modal */}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="close-btn"
                onClick={() => setShowEditModal(false)}
              >
                ✕
              </button>
              <EditCourse
                course={currentCourse}
                onSuccess={handleCourseEdited}
                onCancel={() => setShowEditModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
