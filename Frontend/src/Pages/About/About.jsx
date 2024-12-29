import React, { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function About() {
  const [data, SetData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((res) => {
        console.log("API Response:", res.data);
        SetData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
      <Header />
      <div>Backend Testing</div>
      <div className="crud">
        <div className="create-btn">Create</div>
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
                      <button>Edit</button>
                      <button>Delete</button>
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

      <Footer />
    </>
  );
}