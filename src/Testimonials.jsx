import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Smith",
      title: "Lead Developer at Tech Innovations",
      text: "With IPTMS, we've seen a dramatic reduction in project delays. The ability to track team performance and manage sprints in a single platform has made our workflow much smoother and more efficient",
    },
    {
      name: "John Doe",
      title: "Project Manager at XYZ Corp",
      text: "The Intelligent Project & Team Management System revolutionized how we manage our software development projects. The real-time progress tracking and AI-driven insights helped us meet deadlines more effectively and improved team collaboration across departments",
    },
    {
      name: "Sarah Smith",
      title: "Lead Developer at Tech Innovations",
      text: "With IPTMS, we've seen a dramatic reduction in project delays. The ability to track team performance and manage sprints in a single platform has made our workflow much smoother and more efficient",
    },
    {
      name: "Sarah Smith",
      title: "Lead Developer at Tech Innovations",
      text: "With IPTMS, we've seen a dramatic reduction in project delays. The ability to track team performance and manage sprints in a single platform has made our workflow much smoother and more efficient",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Testimonials Section */}
      <div className="min-h-screen py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#90EE90] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="font-bold text-lg mb-1 text-center">{testimonial.name}</h3>
              <p className="text-sm text-center text-gray-700 mb-4">
                ( {testimonial.title} )
              </p>
              <p className="text-base leading-relaxed text-justify">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#808080] text-center py-10 text-xl text-black ">
        ©Copyright 2025
      </footer>
    </div>
  );
}
