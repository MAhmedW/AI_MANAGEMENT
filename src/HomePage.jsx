import React from "react";
import FeaturesSection from "./FeaturesSection";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="font-bold text-lg">LOGO</div>
        <div className="flex items-center gap-6 font-bold ml-auto">
          <nav className="flex gap-6">
            <a href="#" className="hover:text-green-600">Home</a>
            <a href="#" className="hover:text-green-600">Features</a>
            <a href="#" className="hover:text-green-600">Pricing</a>
            <a href="#" className="hover:text-green-600">Contact</a>
          </nav>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow font-semibold border-4 border-[#19581B]">
            <Link to="/signup">Sign Up</Link>
            
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">
        <div>
          <h1 className="text-7xl leading-tight font-extrabold mb-10">
            Intelligent<br />Project & Team<br />Management
          </h1>
          <p className="text-3xl font-bold text-[#808080] mb-8">
            Seamlessly manage your projects and teams with<br />advanced AI analytics
          </p>
        
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold text-lg border-4 border-[#19581B] shadow">
           <Link to="/signin">Get Started</Link>
            
          </button>
        </div>

        <div className="bg-white border rounded-2xl shadow p-4">
          <div className="flex">
            <div className="bg-green-600 text-white rounded-l-lg p-4 flex flex-col gap-4 text-sm min-w-[100px]">
              <div>Overview</div>
              <div>Team</div>
              <div>Tasks</div>
              <div>Analytics</div>
              <div>Settings</div>
            </div>
            <div className="p-4 w-full">
              <h2 className="font-bold mb-4">Dashboard</h2>
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                  <div className="text-green-600 text-xl font-bold">3</div>
                  <div className="text-xs">Success in 1 minute</div>
                </div>
                <div>
                  <div className="text-green-600 text-xl font-bold">12</div>
                  <div className="text-xs">Success in 5 minutes</div>
                </div>
                <div>
                  <div className="text-green-600 text-xl font-bold">8</div>
                  <div className="text-xs">Detected 30 errors</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm mb-2 font-semibold">Data and Uptime</div>
                <div className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  (Graph Placeholder)
                </div>
              </div>
              <div>
                <div className="text-sm mb-2 font-semibold">Recent Sessions</div>
                <ul className="text-xs text-gray-500">
                  <li>Session 1 — SUCCESS</li>
                  <li>Session 2 — SUCCESS</li>
                  <li>Session 3 — SUCCESS</li>
                  <li>Session 4 — FAILED</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="h-[2px] bg-black w-full my-12" />

      {/* Features Section */}
      <FeaturesSection />

      {/* Divider Line */}
      <div className="h-[2px] bg-black w-full my-12" />

      {/* Testimonials Section */}
      <Testimonials />
     
    </div>
    
  );
}
