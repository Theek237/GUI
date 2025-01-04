import React from "react";
import "./dashboard.css";
import searchicon from "../../assets/search.png";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="search-box">
            <img src={searchicon} alt="" />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="profile-box">
            <div className="left-side-profile-box">
              <div className="regnoandrole">
                <div className="reg-no">EG/2022/4925</div>

                <div className="role">Student</div>
              </div>
              <div className="full-name">Theekshana Tishen Alahakoon</div>
            </div>

            <div className="right-side-profile-box">
              <div className="dp">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
                  alt="dp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
