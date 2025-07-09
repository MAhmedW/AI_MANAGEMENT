import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans px-6 py-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div className="text-xl font-bold text-[#0a0f1c]">
          Project Manager Dashboard
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <span className="font-medium">John Manager</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">Project Manager</span>
          </span>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Welcome back, John!</h2>
        <p className="text-gray-600">Manage your projects and team performance with comprehensive insights.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
        {[
          { title: "Total Projects", value: "12", sub: "+2 this quarter", color: "text-green-600" },
          { title: "Active Projects", value: "8", sub: "Currently running", color: "text-gray-500" },
          { title: "On Track", value: "6", sub: "Meeting deadlines", color: "text-green-600" },
          { title: "At Risk", value: "2", sub: "Need attention", color: "text-yellow-500" },
          { title: "Completed", value: "3", sub: "This month", color: "text-blue-500" },
        ].map((card, i) => (
          <div key={i} className="border rounded-lg px-4 py-3 bg-white shadow-sm">
            <h4 className="font-semibold text-sm">{card.title}</h4>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className={`text-sm ${card.color}`}>{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {["Overview", "Team Performance", "Resources", "Risk Analysis"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab ? "bg-white border rounded-t text-black" : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-lg">Sprint Performance</h3>
            <p className="text-sm text-gray-500 mb-4">Planned vs Completed Story Points</p>
            <div className="h-48 bg-gray-100 flex items-end gap-4 px-4">
              {[24, 28, 30, 26, 30].map((planned, i) => {
                const completed = [22, 24, 29, 24, 28][i];
                return (
                  <div key={i} className="flex flex-col justify-end items-center">
                    <div className="bg-green-500 w-4" style={{ height: `${completed}px` }} />
                    <div className="bg-gray-400 w-4 mt-1" style={{ height: `${planned - completed}px` }} />
                    <span className="text-xs mt-1">Sprint {i + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-lg">Project Status Distribution</h3>
            <p className="text-sm text-gray-500 mb-4">Current project status breakdown</p>
            {[
              { label: "On Track", value: 75 },
              { label: "At Risk", value: 25 },
            ].map((item, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded">
                  <div className="h-3 bg-[#0a0f1c] rounded" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Team Performance Tab */}
      {activeTab === "Team Performance" && (
        <div className="space-y-4">
          {[
            { name: "Sarah Chen", tasks: 45, quality: 4.8, productivity: 92 },
            { name: "Mike Rodriguez", tasks: 38, quality: 4.6, productivity: 88 },
            { name: "Alex Thompson", tasks: 34, quality: 4.5, productivity: 85 },
          ].map((member, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <span className="bg-[#0a0f1c] text-white text-xs px-2 py-1 rounded-full">
                  {member.productivity}% Productivity
                </span>
              </div>
              <div className="grid grid-cols-3 text-sm mb-2">
                <div>
                  <p className="text-gray-500">Tasks Completed</p>
                  <p className="text-xl font-bold">{member.tasks}</p>
                </div>
                <div>
                  <p className="text-gray-500">Code Quality</p>
                  <p className="text-xl font-bold">{member.quality}/5</p>
                </div>
                <div>
                  <p className="text-gray-500">Productivity</p>
                  <div className="w-full h-3 bg-gray-200 rounded">
                    <div
                      className="h-3 bg-[#0a0f1c] rounded"
                      style={{ width: `${member.productivity}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Resources Tab */}
      {activeTab === "Resources" && (
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl">
          <h3 className="font-bold text-xl mb-1">Resource Utilization</h3>
          <p className="text-sm text-gray-500 mb-6">
            Current team utilization across different areas
          </p>
          {[
            { label: "Frontend", value: 85, color: "text-yellow-600" },
            { label: "Backend", value: 92, color: "text-red-600" },
            { label: "DevOps", value: 78, color: "text-green-600" },
            { label: "QA", value: 65, color: "text-blue-600" },
          ].map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">{item.label}</span>
                <span className={`font-medium ${item.color}`}>{item.value}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded">
                <div
                  className="h-3 bg-[#0a0f1c] rounded"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Risk Analysis Tab */}
      {activeTab === "Risk Analysis" && (
        <div className="space-y-4">
          {[
            {
              title: "Resource Shortage",
              impact: "High",
              probability: 75,
              mitigation: "Hire 2 additional developers",
              color: "bg-red-500 text-white",
            },
            {
              title: "Scope Creep",
              impact: "Medium",
              probability: 60,
              mitigation: "Strengthen change control process",
              color: "bg-gray-200 text-gray-700",
            },
            {
              title: "Technical Debt",
              impact: "Medium",
              probability: 45,
              mitigation: "Refactor legacy modules",
              color: "bg-gray-200 text-gray-700",
            },
          ].map((risk, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">{risk.title}</h3>
              <p className="text-sm mb-2">
                <span className="font-bold">Mitigation:</span> {risk.mitigation}
              </p>
              <div className="flex gap-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${risk.color}`}>
                  {risk.impact} Impact
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium border border-gray-300">
                  {risk.probability}% Probability
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
