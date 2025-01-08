import React, { useState } from "react";
import "./teachercourses.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import CourseCard from "../../Components/CourseCard/CourseCard";
import AddCourse from "../../Components/AddCourse/AddCourse";

export default function TeacherCourses() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="teachercources-container">
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
          <CourseCard moduleCode="EC3301" moduleName="GUI Programming" />
          <CourseCard moduleCode="EC3305" moduleName="Signals and Systems" />
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
            <AddCourse />
          </div>
        </div>
      )}
    </div>
  );
}
