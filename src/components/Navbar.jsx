// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseBtn = "px-4 py-2 rounded-md font-medium transition border";
  const inactive = "bg-white text-gray-800 hover:bg-gray-100 border-gray-300";
  const active = "bg-teal-600 text-white border-teal-700";

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${baseBtn} ${isActive ? active : inactive}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/managerDashboard"
            className={({ isActive }) => `${baseBtn} ${isActive ? active : inactive}`}
          >
            Manager Dashboard
          </NavLink>

          <NavLink
            to="/developerDashboard"
            className={({ isActive }) => `${baseBtn} ${isActive ? active : inactive}`}
          >
            Developer Dashboard
          </NavLink>

          <NavLink
            to="/clientDashboard"
            className={({ isActive }) => `${baseBtn} ${isActive ? active : inactive}`}
          >
            Client Dashboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
