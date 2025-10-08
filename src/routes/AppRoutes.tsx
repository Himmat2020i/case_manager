import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import AdminLayout from "../pages/adminLayout/AdminLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import FrontLayout from "../pages/frontLayout/FrontLayout";
import CaseList from "../pages/case/CaseList";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Profile from "../pages/profile/Profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<FrontLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/authority/caselist" element={<AdminLayout />}>
        <Route index element={<CaseList />} />
      </Route>
    </Routes>
  );
}
