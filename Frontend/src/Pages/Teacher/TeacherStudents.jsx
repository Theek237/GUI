import React, { useEffect, useState } from "react";
import "./teacherstudents.css";
import axios from "axios";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import { Link } from "react-router-dom";

export default function TeacherStudents() {
  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/student")
      .then((res) => {
        console.log("API Response:", res.data);
        SetData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

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
    <div className="teacherstudents-container">
      <TeacherSideBar />
      <div className="crud">
        <h1>Manage Students</h1>
        <Link to={"/studentcreate"}>
          <div className="create-btn">Create</div>
        </Link>
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
                        <Link to={`/student/${student.StudentID}`}>
                          <button className="read-btn">Read</button>
                        </Link>
                        <Link to="/studentedit">
                          <button className="edit-btn">Edit</button>
                        </Link>

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
    </div>
  );
}
