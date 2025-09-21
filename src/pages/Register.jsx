import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <h1 className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-blue-500">
            <FaBoxOpen className="text-3xl sm:text-4xl" />
            LootBoxx
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Join today and start exchanging campus essentials.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-center text-lg sm:text-xl font-semibold text-blue-500 mb-6">
            Create Account
          </h2>

          <form className="space-y-5 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                           rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 
                           focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                           text-sm sm:text-base bg-white dark:bg-gray-700 
                           text-gray-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>

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
                autoComplete="new-password"
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
                className="w-full flex justify-center py-2.5 px-4 rounded-md shadow-sm 
                           text-sm sm:text-base font-medium text-white 
                           bg-blue-500 hover:bg-blue-600 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                           transition"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>

        {/* Terms */}
        <div className="mt-6 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            By signing up, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline font-medium">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
