import React from "react";
import { Outlet } from "react-router";

export default function Student() {
  return (
    <>
      <div>Student</div>
      <Outlet />
    </>
  );
}
