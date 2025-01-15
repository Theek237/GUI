import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./teacherstudents.css";
import "../../Components/EditStudent/modalstyles.css";
import axios from "axios";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import AddStudent from "../../Components/AddStudent/AddStudent";
import EditStudent from "../../Components/EditStudent/EditStudent";

export default function TeacherStudents() {
  const { isDarkMode } = useContext(ThemeContext);
  const [data, SetData] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  function fetchStudents() {
    axios
      .get("http://localhost:3001/api/student")
      .then((res) => {
        console.log("API Response:", res.data);
        SetData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }

  function handleStudentAdded() {
    setShowCreateModal(false);
    fetchStudents();
  }

  function handleStudentEdited() {
    setShowEditModal(false);
    setCurrentStudent(null);
    fetchStudents();
  }

  function editStudent(student) {
    setCurrentStudent(student);
    setShowEditModal(true);
  }

  function deleteStudent(delID) {
    axios
      .delete(`http://localhost:3001/api/student/${delID}`)
      .then((res) => {
        alert("Student Deleted Sucessfully");
        SetData(data.filter((item) => item.StudentID !== delID));
      })
      .catch((err) => console.error("Error deleting student:", err));
  }
  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="teacherstudents-container">
        <TeacherSideBar />
        <div className="crud">
          <h1>Manage Students</h1>

          <button
            className="create-btn"
            onClick={() => setShowCreateModal(true)}
          >
            Create
          </button>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((student) => (
                    <tr key={student.StudentID}>
                      <td>{student.StudentID}</td>
                      <td>{student.StudentName}</td>
                      <td>{student.StudentEmail}</td>
                      <td>{student.StudentMobileNo}</td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="edit-btn"
                            onClick={() => editStudent(student)}
                          >
                            Update
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => deleteStudent(student.StudentID)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conditionally render the "Create Modal" */}
        {showCreateModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="cclose-btn"
                onClick={() => setShowCreateModal(false)}
              >
                ✕
              </button>
              {/* Render the AddStudent form here */}
              <AddStudent onSuccess={handleStudentAdded} />
            </div>
          </div>
        )}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button
                className="cclose-btn"
                onClick={() => setShowEditModal(false)}
              >
                ✕
              </button>
              {/* Render the EditStudent form here */}
              <EditStudent
                student={currentStudent}
                onSuccess={handleStudentEdited}
                onCancel={() => setShowEditModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
