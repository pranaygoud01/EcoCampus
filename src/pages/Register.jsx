import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.png";
import TermsPopup from "../components/TermsPopup";
import PrivacyPopup from "../components/PrivacyPopup";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${baseUrl}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Registration failed");

      setMessage("✅ Account created successfully!");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center :bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex justify-center flex-col items-center mb-8">
          <Link to="/" className="font-bold text-black text-xl flex items-center gap-1">
            <img src={logo} className="h-[50px] w-auto" />
          </Link>
          <p className="text-gray-500 :text-gray-400 mt-2 text-sm">
            Join today and start exchanging campus essentials.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white :bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-center text-lg font-semibold text-black mb-6">
            Create Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border max-lg:text-xs border-neutral-300 shadow rounded-md bg-white :bg-gray-700"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border max-lg:text-xs border-neutral-300 shadow rounded-md bg-white :bg-gray-700"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border max-lg:text-xs border-neutral-300 shadow rounded-md bg-white :bg-gray-700"
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-md max-lg:text-sm font-medium text-white bg-neutral-900 hover:bg-black transition"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
          </form>

          <p className="text-xs font-semibold mt-4 text-neutral-600">
            Already have an account{" "}
            <span className="text-black underline">
              <Link to="/login">Login here</Link>
            </span>
          </p>

          {message && (
            <p className="text-center mt-4 text-sm text-gray-700 :text-gray-300">
              {message}
            </p>
          )}
        </div>

        {/* Terms */}
        <div className="mt-6 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500 :text-gray-400 leading-relaxed">
            By continuing, you agree to our{" "}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="text-black hover:underline cursor-pointer font-medium"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-black hover:underline cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>

      {/* Popups */}
      <TermsPopup isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPopup isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
};

export default Register;
