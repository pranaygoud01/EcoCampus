import { Link, useNavigate } from "@tanstack/react-router";
import logo from "../assets/logo.png";
import { useState } from "react";
import TermsPopup from "../components/TermsPopup";
import PrivacyPopup from "../components/PrivacyPopup";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate({ to: "/" });
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex justify-center flex-col items-center mb-8">
          <Link
            to="/"
            className="font-bold text-black max-lg:text-lg text-xl flex items-center gap-1"
          >
            <img src={logo} className="h-[50px] max-lg:h-[40px] w-auto" />
          </Link>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Your one-stop shop for campus essentials.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-center text-lg sm:text-xl font-semibold text-black mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                           rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                           text-sm sm:text-base bg-white dark:bg-gray-700 
                           text-gray-900 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                           rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                           text-sm sm:text-base bg-white dark:bg-gray-700 
                           text-gray-900 dark:text-white"
                placeholder="••••••••"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 rounded-md shadow-sm 
                           text-sm sm:text-base font-medium text-white 
                           bg-neutral-900 hover:bg-black 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                           transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Login to Sell"}
              </button>
            </div>
          </form>

          {/* Error */}
          {error && (
            <p className="text-red-500 mt-5 text-sm text-center">{error}</p>
          )}

          <p className="text-xs font-semibold mt-4 text-neutral-600">
            You don't have an account{" "}
            <span className="text-black underline">
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </div>

        {/* Terms */}
        <div className="mt-6 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
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
      <PrivacyPopup
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
    </div>
  );
};

export default Login;
