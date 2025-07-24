import React from "react";
import Login from "../pages/login/Login";
import { useRoutes } from "react-router-dom";
import LayoutDecider from "../pages/layout/layout";
import ForgetPassword from "../pages/forgot-password/ForgotPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Profile from "../pages/profile/Profile";

export default function AppRoutes() {
  return useRoutes([
    { path: "/", element: <Login /> },
    { path: "/dashboard", element: <LayoutDecider /> },
    { path: "/forgot-password", element: <ForgetPassword /> },
    { path: "/profile", element: <Profile /> },
    { path: "/change-password", element: <ChangePassword /> }
  ]);
}
