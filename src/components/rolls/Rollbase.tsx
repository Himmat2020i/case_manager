import React from "react";
import { Navigate } from "react-router-dom";

const RoleBasedRedirect = ({ role }: { role: string }) => {
  if (role === "ADMIN") {
    return <Navigate to="/dashboard" />;
  } else if (role === "AUTHORITY") {
    return <Navigate to="/authority/dashboard" />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RoleBasedRedirect;
