import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full bg-white flex flex-col justify-center items-center px-6 py-20 text-black">
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16">
        Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl px-4">
        <div className="bg-[#90EE90] hover:shadow-xl transition rounded-2xl p-8 text-center">
          <h3 className="font-bold text-2xl mb-4">Instant Access</h3>
          <p className="text-lg text-black">
            Get started immediately with no delays. Cloud-based access from any device, anytime.
          </p>
        </div>

        <div className="bg-[#90EE90] hover:shadow-xl transition rounded-2xl p-8 text-center">
          <h3 className="font-bold text-2xl mb-4">Easy Integration</h3>
          <p className="text-lg text-black">
            Seamlessly integrate with your existing tools like GitHub, Jira, and Slack without disrupting workflows.
          </p>
        </div>

        <div className="bg-[#90EE90] hover:shadow-xl transition rounded-2xl p-8 text-center">
          <h3 className="font-bold text-2xl mb-4">Time Tracking</h3>
          <p className="text-lg text-black">
            Track time spent on tasks, sprints, and projects to enhance productivity and meet deadlines effectively.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-[#808080] font-semibold text-black px-10 py-5 text-lg rounded-xl">
          Learn More
        </button>
      </div>
    </section>
  );
}
