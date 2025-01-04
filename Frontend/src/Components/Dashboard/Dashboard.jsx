import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="profile-box">
            <div className="reg-no">EG/2022/4925</div>
            <div className="full-name">Theekshana Tishen Alahakoon</div>
            <div className="role">Student</div>
            <div className="dp">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                alt="dp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
