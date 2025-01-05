import React, { useEffect, useState } from "react";
import "./teacherdashboard.css";
import TeacherSideBar from "../../Components/TeacherSideBar/TeacherSideBar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TeacherDashboard() {
  return (
    <>
      <TeacherSideBar />
    </>
  );
}
