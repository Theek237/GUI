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
          <Route path="/createstd" element={<AddStudent />}></Route>
          <Route path="/choosesignin" element={<ChooseSignIn />}></Route>
          <Route path="/choosesignup" element={<ChooseSignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
