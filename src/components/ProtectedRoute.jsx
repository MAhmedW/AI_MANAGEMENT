import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Role doesn't match
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}
