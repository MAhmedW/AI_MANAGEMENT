import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMemberPage() {
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateSignupLink = (role) => {
    const token = btoa(JSON.stringify({ role }));
    const signupLink = `http://localhost:5173/signup?token=${token}`;
    setLink(signupLink);
    setShowModal(true);

    // Automatically copy to clipboard
    copyToClipboard(signupLink);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      alert("Failed to copy to clipboard. Please copy manually.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setLink("");
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0a0f1c]">
          Add a Member to Your Team
        </h2>

        <p className="text-sm text-gray-600 text-center mb-6">
          Choose the type of team member you want to add. A unique signup link
          will be generated.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => generateSignupLink("developer")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-sm border-4 border-[#19581B] shadow"
          >
            Add Developer to Team
          </button>

          <button
            onClick={() => generateSignupLink("client")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-sm border-4 border-[#19581B] shadow"
          >
            Add Client to Team
          </button>
        </div>

        <button
          onClick={() => navigate("/managerDashboard")}
          className="mt-6 text-sm text-green-600 hover:underline w-full text-center"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg border max-w-md w-full relative">
            <h3 className="text-lg font-bold text-[#0a0f1c] mb-2">
              Secure Signup Link
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Share this link with the member to allow signup.
            </p>
            <input
              type="text"
              value={link}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => copyToClipboard(link)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded border-4 border-[#19581B] shadow"
              >
                {copied ? "Link Copied!" : "Copy Link"}
              </button>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-black font-medium px-4 py-2 border border-gray-300 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
