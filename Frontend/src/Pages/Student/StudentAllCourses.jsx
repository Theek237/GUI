import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./studentallcourses.css";
import axios from "axios";
import SideBar from "../../Components/StudentSideBar/StudentSideBar";
import StudentCourseCard from "../../Components/StudentCourseCard/StudentCourseCard";

export default function StudentAllCourses() {
  const { isDarkMode } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollInCourse = (module_code) => {
    setEnrolledCourses((prev) => [...prev, module_code]);
  };

  const isEnrolled = (module_code) => {
    return enrolledCourses.includes(module_code);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  function fetchCourses() {
    axios
      .get("http://localhost:3001/api/module")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }

  return (
    <div data-theme={isDarkMode ? "dark" : "light"}>
      <div className="studentallcourses-container">
        <SideBar />
        <div className="studentallcourses">
          <h1>All Courses</h1>
          <div className="allcards">
            {data.length > 0 ? (
              data.map((modules) => (
                <StudentCourseCard
                  key={modules.module_code}
                  module_code={modules.module_code}
                  module_name={modules.module_name}
                  onEnroll={() => enrollInCourse(modules.module_code)}
                  isEnrolled={isEnrolled(modules.module_code)}
                />
              ))
            ) : (
              <h2>No Courses Available</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
