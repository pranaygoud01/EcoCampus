import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.png"

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo + Title */}
        <div className="flex justify-center flex-col items-center mb-8">
           <Link to="/" className="font-bold  text-black max-lg:text-lg text-xl flex items-center gap-1">
                             <img src={logo} className="h-[50px] max-lg:h-[40px] w-auto"/>
                            </Link>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Join today and start exchanging campus essentials.
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
          <h2 className="text-center text-lg sm:text-xl font-semibold text-black mb-6">
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
                           bg-neutral-900 hover:bg-black 
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
            <a href="#" className="text-black hover:underline font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-black hover:underline font-medium">
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
