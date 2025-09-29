import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import { useGoogleLogin } from "@react-oauth/google";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const menu = ["Home", "Browse", "Sell", "Sell Project", "About"];

  const categories = [
    { name: "Browse", path: "/browse" },
    { name: "Books", path: "/browse/books" },
    { name: "Gadgets", path: "/browse/gadgets" },
    { name: "Lab Coats", path: "/browse/labcoats" },
    { name: "Instruments", path: "/browse/instruments" },
    { name: "Others", path: "/browse/others" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsAuthenticated(true);
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "User");
        setUserAvatar(parsedUser.avatar || "");
      } catch (error) {
        console.error("Invalid user data in localStorage");
      }
    }
  }, []);

  const baseUrl = import.meta.env.VITE_API_URL;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setDropdownOpen(false);

    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      navigate({ to: "/" });
    }
  };

  const onGoogleSuccess = async (tokenResponse) => {
    try {
      const res = await fetch(`${baseUrl}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken: tokenResponse.access_token }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Google login failed");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setIsAuthenticated(true);
      setUserName(data.user?.name || "User");
      setUserAvatar(data.user?.avatar || "");
      if (currentPath.toLowerCase() === "/sell") {
        navigate({ to: "/sell" });
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: onGoogleSuccess,
    onError: () => alert("Google login failed. Try again."),
    scope: "openid email profile",
    ux_mode: "popup",
  });

  return (
    <div className="w-full sticky top-0 z-50 bg-white ">
      {/* Main Navbar */}
      <div className="px-6 md:px-20 py-4 flex border-b border-b-neutral-200 justify-between items-center">
        {/* Left Logo + Menu */}
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className="font-bold text-black max-lg:text-lg text-xl flex items-center gap-1"
          >
            <img src={logo} className="h-[40px] max-lg:h-[35px] w-auto" alt="SwapnSave Logo - Campus Marketplace" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            {menu.map((item) => {
              const path =
                item === "Home"
                  ? "/"
                  : item === "Sell Project"
                  ? "/sell-project"
                  : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={item}
                  to={path}
                  className="px-2 font-semibold cursor-pointer text-neutral-500 text-xs"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5 relative">
          <div className="w-[300px] border border-neutral-200 flex items-center px-2 py-1 rounded-xl">
            <span>
              <CiSearch />
            </span>
            <input
              type="text"
              className="px-2 py-1 outline-0 text-sm w-full"
              placeholder="Search..."
            />
          </div>

          {!isAuthenticated ? (
            <div className="flex gap-2">
              <button
                onClick={() => loginWithGoogle()}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-900"
              >
                {/* Google logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-4 h-4"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                  s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.412,6.053,28.965,4,24,4C12.955,4,4,12.955,4,24
                  s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,16.108,19.004,13,24,13c3.059,0,5.842,1.154,7.961,3.039
                  l5.657-5.657C33.412,6.053,28.965,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c4.874,0,9.292-1.851,12.625-4.868l-5.844-4.936C28.711,35.524,26.486,36,24,36
                  c-5.202,0-9.617-3.322-11.278-7.955l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-3.978,5.612
                  c0.001-0.001,0.002-0.001,0.003-0.002l5.844,4.936C36.947,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                className="flex items-center gap-2"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <span className="font-semibold text-xs text-neutral-700">
                  Hey, {userName}
                </span>
                <span className="flex items-center cursor-pointer gap-1">
                   <img
                     src={
                       userAvatar ||
                       "https://ui-avatars.com/api/?name=" +
                         encodeURIComponent(userName)
                     }
                     referrerPolicy="no-referrer"
                     className="w-8 h-8 rounded-full"
                     alt={`${userName} profile picture`}
                   />
                  <IoIosArrowDown className="text-xs" />
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 font-semibold w-40 bg-white border border-neutral-200 rounded-lg shadow-lg p-2">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-xs text-neutral-700 hover:bg-neutral-100 rounded"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left cursor-pointer px-4 py-2 text-xs text-red-600 hover:bg-neutral-100 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center gap-2">
          {isAuthenticated ? (
            <div>
               <img
                 src={
                   userAvatar ||
                   "https://ui-avatars.com/api/?name=" +
                     encodeURIComponent(userName)
                 }
                 referrerPolicy="no-referrer"
                 className="w-6 h-6 rounded-full"
                 alt={`${userName} profile picture`}
               />
            </div>
          ) : (
            <button
              onClick={() => loginWithGoogle()}
              className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-md text-xs font-semibold hover:bg-neutral-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-3 h-3"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.412,6.053,28.965,4,24,4C12.955,4,4,12.955,4,24
                s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,16.108,19.004,13,24,13c3.059,0,5.842,1.154,7.961,3.039
                l5.657-5.657C33.412,6.053,28.965,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c4.874,0,9.292-1.851,12.625-4.868l-5.844-4.936C28.711,35.524,26.486,36,24,36
                c-5.202,0-9.617-3.322-11.278-7.955l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-3.978,5.612
                c0.001-0.001,0.002-0.001,0.003-0.002l5.844,4.936C36.947,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span>Sign in</span>
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={25} /> : <IoMenuOutline size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Bar */}
      <div className="w-full scrollbar-hide overflow-x-auto border-b border-neutral-200 bg-white md:hidden">
        <div className="flex gap-3 px-6 text-xs font-semibold text-neutral-500 whitespace-nowrap">
          {menu.map((item) => {
            const path =
              item === "Home"
                ? "/"
                : item === "Sell Project"
                ? "/sell-project"
                : `/${item.toLowerCase()}`;

            const isActive = currentPath === path;

            return (
              <Link
                key={item}
                to={path}
                className={`transition py-2 px-3 ${
                  isActive
                    ? "text-black border-b-2 border-black"
                    : "hover:text-black"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Category Bar */}
      <div className="hidden md:block w-full scrollbar-hide overflow-x-auto border-b border-neutral-200 bg-white">
        <div className="flex gap-3 px-6 md:px-20 text-xs font-semibold text-neutral-500 whitespace-nowrap">
          {categories.map((cat) => {
            const isActive =
              currentPath === cat.path ;

            return (
              <Link
                key={cat.name}
                to={cat.path}
                className={`transition py-2 px-3 ${
                  isActive
                    ? "text-black border-b-2 border-black"
                    : "hover:text-black"
                }`}
              >
                {cat.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-15 right-2 rounded-xl w-7/12 h-fit bg-white border-t border-neutral-200 flex flex-col gap-4 p-5 md:hidden shadow-lg">
          {!isAuthenticated ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => loginWithGoogle()}
                className="w-full text-center font-semibold text-white bg-black rounded-lg px-4 py-2 text-sm"
              >
                Continue with Google
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                 <img
                   src={
                     userAvatar ||
                     "https://ui-avatars.com/api/?name=" +
                       encodeURIComponent(userName)
                   }
                   className="w-8 h-8 rounded-full"
                   alt={`${userName} profile picture`}
                 />
                <span className="font-semibold text-sm text-neutral-700">
                  Hi, {userName}
                </span>
              </div>
              <Link
                to="/dashboard"
                className="font-semibold text-neutral-700 text-sm py-1 rounded hover:bg-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-left font-semibold text-red-600 text-sm py-1 rounded hover:bg-neutral-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
