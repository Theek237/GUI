import React from "react";
import { Outlet } from "react-router-dom";

export default function Teacher() {
  return (
    <>
      <div>Teacher</div>
      <Outlet />
    </>
  );
}
