import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import AddStudent from "./Components/AddStudent/AddStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSignUp from "./Pages/Student/StudentSignUp";
import StudentSignIn from "./Pages/Student/StudentSignIn";
import ChooseSignIn from "./Pages/Choose Role/ChooseSignIn";
import ChooseSignUp from "./Pages/Choose Role/ChooseSignUp";
import TeacherSignIn from "./Pages/Teacher/TeacherSignIn";
import TeacherSignUp from "./Pages/Teacher/TeacherSignUp";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import TeacherDashboard from "./Pages/Teacher/TeacherDashboard";
import Student from "./Pages/Student/Student";
import Teacher from "./Pages/Teacher/Teacher";
import StudentCourses from "./Pages/Student/StudentCourses";
import StudentAllcourses from "./Pages/Student/StudentAllcourses";
import StudentAssignments from "./Pages/Student/StudentAssignments";
import StudentSettings from "./Pages/Student/StudentSettings";
import TeacherCourses from "./Pages/Teacher/TeacherCourses";
import TeacherStudents from "./Pages/Teacher/TeacherStudents";
import TeacherSettings from "./Pages/Teacher/TeacherSettings";
import TeacherAssignments from "./Pages/Teacher/TeacherAssignments";
import TeacherAnnouncements from "./Pages/Teacher/TeacherAnnouncements";
import StudentAnnouncements from "./Pages/Student/StudentAnnouncements";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/studentsignup" element={<StudentSignUp />}></Route>
          <Route path="/studentsignin" element={<StudentSignIn />}></Route>
          <Route path="/teachersignin" element={<TeacherSignIn />}></Route>
          <Route path="/teachersignup" element={<TeacherSignUp />}></Route>
          <Route path="/studentcreate" element={<AddStudent />}></Route>
          <Route path="/choosesignin" element={<ChooseSignIn />}></Route>
          <Route path="/choosesignup" element={<ChooseSignUp />}></Route>

          {/* Stundets Routes */}
          <Route path="/student" element={<Student />}>
            <Route index element={<StudentDashboard />}></Route>
            <Route path="dashboard" element={<StudentDashboard />}></Route>
            <Route path="mycourses" element={<StudentCourses />}></Route>
            <Route path="allcourses" element={<StudentAllcourses />}></Route>
            <Route path="assignments" element={<StudentAssignments />}></Route>
            <Route
              path="announcements"
              element={<StudentAnnouncements />}
            ></Route>
            <Route path="settings" element={<StudentSettings />}></Route>
          </Route>

          {/* Teacher Routes */}
          <Route path="/teacher" element={<Teacher />}>
            <Route index element={<TeacherDashboard />}></Route>
            <Route path="dashboard" element={<TeacherDashboard />}></Route>
            <Route path="courses" element={<TeacherCourses />}></Route>
            <Route
              path="announcements"
              element={<TeacherAnnouncements />}
            ></Route>
            <Route path="assignments" element={<TeacherAssignments />}></Route>
            <Route path="students" element={<TeacherStudents />}></Route>
            <Route path="settings" element={<TeacherSettings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
