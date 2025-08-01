// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ManagerDashboard from "./pages/ManagerDashboard";
import DeveloperDashboard from "./pages/DeveloperDasboard";
import ClientDashboard from "./pages/ClientDashboard";
import AddMemberPage from "./pages/AddMemberPage";

import Navbar from "./components/Navbar"; // ✅ import the new navbar

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Router>
        {/* ✅ Navbar shown on all routes */}
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Dashboards (public) */}
          <Route path="/managerDashboard" element={<ManagerDashboard />} />
          <Route path="/developerDashboard" element={<DeveloperDashboard />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />

          {/* Add member (public) */}
          <Route path="/add_member" element={<AddMemberPage />} />
        </Routes>
      </Router>
    </div>
  );
}
