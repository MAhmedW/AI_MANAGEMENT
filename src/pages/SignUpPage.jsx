import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedConsent, setAgreedConsent] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        if (decoded.role === "developer" || decoded.role === "client") {
          setRole(decoded.role);
        } else {
          setError("Invalid role in signup token.");
        }
      } catch (err) {
        setError("Invalid or corrupted signup link.");
      }
    } else {
      setRole("manager"); // default fallback role
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreedTerms || !agreedConsent) {
      setError("Please agree to both checkboxes before signing up");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
          agreedTerms,
          agreedConsent,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Signup failed");
      }

      const data = await res.json();
      localStorage.setItem("user", JSON.stringify({ role, ...data.user }));

      if (role === "manager") navigate("/managerDashboard");
      else if (role === "developer") navigate("/developerDashboard");
      else if (role === "client") navigate("/clientDashboard");
      else navigate("/signin");
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center font-sans">
      <div className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-1"
              required
            />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-green-700 font-medium cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-green-700 font-medium cursor-pointer hover:underline">
                Privacy Policy
              </span>
              .
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              checked={agreedConsent}
              onChange={(e) => setAgreedConsent(e.target.checked)}
              className="mt-1"
              required
            />
            <label className="text-sm text-gray-700">
              I understand that my information will be used to create and manage my account, and I consent to receiving important updates about the platform.
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center -mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition border-4 border-[#19581B] shadow"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-green-600 hover:underline cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
