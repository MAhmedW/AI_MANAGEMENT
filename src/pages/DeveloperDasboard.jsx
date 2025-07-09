import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState('My Tasks');
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: 'Implement user authentication API',
      progress: 65,
      estimated: '16h',
      actual: '10h',
      dueDate: '2024-01-15',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Fix checkout flow bug',
      progress: 90,
      estimated: '8h',
      actual: '7h',
      dueDate: '2024-01-12',
      priority: 'critical',
    },
    {
      id: 3,
      title: 'Optimize database queries',
      progress: 0,
      estimated: '12h',
      actual: '0h',
      dueDate: '2024-01-20',
      priority: 'medium',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      progress: 78,
      dueDate: '2024-02-15',
    },
    {
      id: 2,
      title: 'Mobile App',
      progress: 45,
      dueDate: '2024-03-01',
    },
  ];

  const deadlines = [
    {
      task: 'Fix checkout flow bug',
      dueDate: '2024-01-12',
      priority: 'critical',
    },
    {
      task: 'Implement user authentication API',
      dueDate: '2024-01-15',
      priority: 'high',
    },
    {
      task: 'Code review for payment module',
      dueDate: '2024-01-18',
      priority: 'medium',
    },
  ];

  const handleLogout = () => {
    navigate('/signin');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-600 text-white';
      case 'high':
        return 'bg-yellow-500 text-black';
      case 'medium':
        return 'bg-blue-300 text-black';
      default:
        return 'bg-gray-300 text-black';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6 text-[#0a0f1c] font-sans">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="text-xl font-bold text-[#0a0f1c]">
         Developer Dashboard
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <span className="font-medium">Jane Developer</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">Developer</span>
          </span>
          <button
            onClick={handleLogout}
            className="text-red-600 font-medium hover:underline"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Welcome back, Jane!</h2>
        <p className="text-gray-600">Track your progress and manage your development workflow.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Active Tasks</h3>
          <p className="text-2xl font-bold">{tasks.filter(t => t.progress < 100).length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Completed</h3>
          <p className="text-2xl font-bold">{tasks.filter(t => t.progress === 100).length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <h3 className="font-semibold text-sm text-gray-500">Pending Code Reviews</h3>
          <p className="text-2xl font-bold">{tasks.length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        {['My Tasks', 'Projects', 'Deadlines'].map((tab) => (
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

      {/* Tab Content */}
      {activeTab === 'My Tasks' && (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500 mb-1">Progress: {task.progress}%</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-600 rounded"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-600">
                  Estimated: {task.estimated} | Actual: {task.actual}
                </p>
                <div className="space-x-2">
                  <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
                    Start
                  </button>
                  <button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700">
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Projects' && (
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-1">Progress: {project.progress}%</p>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Due: {project.dueDate}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'Deadlines' && (
        <div className="space-y-4">
          {deadlines.map((d) => (
            <div key={d.task} className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold">{d.task}</h3>
              <p className="text-sm text-gray-600">Due: {d.dueDate}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                  d.priority
                )}`}
              >
                {d.priority}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DeveloperDashboard;
