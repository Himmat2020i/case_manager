import React from "react";
import { Outlet } from "react-router-dom";

function FrontLayout() {
  return (
    <div className="layout-wrapper layout-content-navbar front">
      <div id="main" className="layout-navbar">
        <div id="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default FrontLayout;
