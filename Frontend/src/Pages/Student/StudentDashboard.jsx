import React from "react";
import "./studentdashboard.css";
import SideBar from "../../Components/StudentSideBar/StudentSideBar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import "./studentdashboard.css";

export default function StudentDashboard() {
  return (
    <>
      <div className="studentdashboard-container">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
}
