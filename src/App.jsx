// import { useState } from "react";
import Home from "./Pages/Home/Home";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import Choose from "./Pages/Choose Role/Choose";
import Admin from "./Pages/Admin/Admin";
import Student from "./Pages/Student/Student";
import Teacher from "./Pages/Teacher/Teacher";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
