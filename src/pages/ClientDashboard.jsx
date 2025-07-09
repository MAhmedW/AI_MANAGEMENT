import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Projects');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      progress: 78,
      budget: 85000,
      spent: 58000,
      milestonesCompleted: 8,
      totalMilestones: 12,
      startDate: '2023-09-01',
      expectedDate: '2024-02-15',
      status: 'active',
    },
    {
      id: 2,
      title: 'Mobile Application',
      progress: 45,
      budget: 120000,
      spent: 48000,
      milestonesCompleted: 5,
      totalMilestones: 15,
      startDate: '2023-11-15',
      expectedDate: '2024-04-01',
      status: 'active',
    },
    {
      id: 3,
      title: 'Website Redesign',
      progress: 100,
      budget: 70000,
      spent: 70000,
      milestonesCompleted: 15,
      totalMilestones: 15,
      startDate: '2023-06-01',
      expectedDate: '2023-08-30',
      status: 'completed',
    },
  ];

  const milestones = [
    { title: 'User Authentication System', project: 'E-commerce Platform', status: 'completed', completedDate: '2023-12-15' },
    { title: 'Product Catalog', project: 'E-commerce Platform', status: 'completed', completedDate: '2023-12-28' },
    { title: 'Shopping Cart & Checkout', project: 'E-commerce Platform', status: 'in progress', completedDate: '' },
  ];

  const releases = [
    { version: 'v2.1', project: 'E-commerce Platform', status: 'in development', date: '2024-01-20', features: ['Advanced Search', 'Wishlist', 'Product Reviews'] },
    { version: 'v1.0 Beta', project: 'Mobile Application', status: 'testing', date: '2024-02-10', features: ['Core Functionality', 'User Profiles', 'Basic Navigation'] },
    { version: 'v2.2', project: 'E-commerce Platform', status: 'planning', date: '2024-02-15', features: [] },
  ];

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6 text-[#0a0f1c] font-sans">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="text-xl font-bold">
          Client Dashboard
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-2">
            <span className="font-medium">Client User</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">Client</span>
          </span>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline font-medium"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Total Projects</h3>
          <p className="text-2xl font-bold">{projects.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Active Projects</h3>
          <p className="text-2xl font-bold">{projects.filter(p => p.status === 'active').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Completed</h3>
          <p className="text-2xl font-bold">{projects.filter(p => p.status === 'completed').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">On Schedule</h3>
          <p className="text-2xl font-bold">{projects.filter(p => p.progress >= 70).length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {['Projects', 'Milestones', 'Releases'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab ? 'bg-white border-t border-x rounded-t text-black' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      {activeTab === 'Projects' && (
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Progress: {project.progress}%</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-green-600 rounded"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <p>Budget: ${project.budget}</p>
                <p>Spent: ${project.spent}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Milestones' && (
        <div className="space-y-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{m.title}</h3>
              <p className="text-sm text-gray-600">{m.project}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  m.status === 'completed' ? 'bg-green-500 text-white' : 'bg-yellow-400 text-black'
                }`}
              >
                {m.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Releases' && (
        <div className="space-y-4">
          {releases.map((r, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{r.version}</h3>
              <p className="text-sm text-gray-600">{r.project}</p>
              <p className="text-sm">Status: {r.status}</p>
              <p className="text-sm">Features: {r.features.length > 0 ? r.features.join(', ') : 'TBD'}</p>
              <p className="text-sm">Release Date: {r.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
