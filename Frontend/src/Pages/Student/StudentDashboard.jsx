import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./studentdashboard.css";
import bookimg from "../../Assets/bookimg.svg";
import filter from "../../Assets/filter.svg";
import StudentSideBar from "../../Components/StudentSideBar/StudentSideBar";


export default function StudentDashboard() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    if (!token) {
      setError("No token found. Please log in first.");
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("http://localhost:3001/api/studentprofile/profile", config)
      .then((response) => {
        // response.data.profile should contain the data from your SQL query
        console.log("Response:", response.data); // Check the response

        setProfile(response.data.profile);
      })
      .catch((err) => {
        // Display an error if the request fails for any reason
        console.error(err);
        setError(err.response?.data?.error || "Failed to fetch profile");
      });
  }, []);

  // If there's an error, display it
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If profile is not yet loaded, indicate loading
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="studentdashboard-container">
        <StudentSideBar />
        <div className="dashboard-rightside">
          <h1>
            Welcome Back, <span>{profile.StudentName}</span>
          </h1>
          <div className="motivation">
            <div className="imgs">
              <img src={bookimg} alt="book" className="book" />
              <img src={filter} alt="filter" className="filter" />
            </div>
            <div className="motitext">
              <h2><span>“</span>The expert in anything was once a beginner.<span>”</span></h2>
              <h3>– Helen Hayes</h3>
            </div>
          </div>
          <div className="twocards">
            <div className="leftcard">
              <h4>Profile Details</h4>
              <div className="profiledetails">
                <div className="profileitem">
                  <strong>Student ID:</strong> {profile.StudentID}
                </div>
                <div className="profileitem">
                  <strong>Name:</strong> {profile.StudentName}
                </div>
                <div className="profileitem">
                  <strong>Email:</strong>{" "}
                  {profile.StudentEmail || profile.email}
                </div>
                <div className="profileitem">
                  <strong>Mobile Number:</strong> {profile.StudentMobileNo}
                </div>
              </div>
            </div>
            <div className="rightcard">
              <div className="pp">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                  alt="dp"
                />
              </div>
              <div className="rolecard">
                <span>Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
