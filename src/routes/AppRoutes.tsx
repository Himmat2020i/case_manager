import React from "react";
import Login from "../pages/login/Login";
import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
}
