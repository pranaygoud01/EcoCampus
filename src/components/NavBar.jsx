import { Link, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate=useNavigate();
  const menu = ["Browse", "Sell", "About"];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsAuthenticated(true);
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "User");
      } catch (error) {
        console.error("Invalid user data in localStorage");
      }
    }
  }, []);

 const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setIsAuthenticated(false);
  setDropdownOpen(false);

  if (window.location.pathname === "/") {
    // Already on home → reload
    window.location.reload();
  } else {
    // Navigate to home
    navigate({ to: "/" });
  }
};


  return (
    <div className="w-full px-6 md:px-20 py-4 sticky bg-white top-0 z-50 flex border-b border-b-neutral-200 justify-between items-center">
      {/* Left Logo + Menu */}
      <div className="flex items-center gap-5">
        <Link
          to="/"
          className="font-bold text-black max-lg:text-lg text-xl flex items-center gap-1"
        >
          <img src={logo} className="h-[40px] max-lg:h-[35px] w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {menu.map((item) => {
            const path =
              item.toLowerCase() === "sell" && !isAuthenticated
                ? "/login"
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
            <Link
              to="/login"
              className="font-semibold text-black bg-neutral-100 rounded-lg px-4 py-2 text-xs"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="font-semibold text-white bg-black rounded-lg px-4 py-2 text-xs"
            >
              Register
            </Link>
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
                <img src={profile} className="w-8 h-8 rounded-full" />
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
        {isAuthenticated&&<div><img src={profile} className="w-6 h-6 rounded-full" /></div>}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={25} /> : <IoMenuOutline size={25} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-15 right-2 rounded-xl w-7/12 h-fit bg-white border-t border-neutral-200 flex flex-col gap-4 p-5 md:hidden shadow-lg">
          {menu.map((item) => {
            const path =
              item.toLowerCase() === "sell" && !isAuthenticated
                ? "/login"
                : `/${item.toLowerCase()}`;

            return (
              <Link
                key={item}
                to={path}
                className="font-semibold text-neutral-700 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            );
          })}

          {!isAuthenticated ? (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="font-semibold text-center text-black bg-neutral-100 rounded-lg px-4 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="font-semibold text-white text-center bg-black rounded-lg px-4 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3 border-t border-neutral-200 pt-3">
              <div className="flex items-center gap-2">
                <img src={profile} className="w-8 h-8 rounded-full" />
                <span className="font-semibold text-sm text-neutral-700">
                  Hi, {userName}
                </span>
              </div>
              <Link
                to="/dashboard"
                className="font-semibold text-neutral-700 text-sm  py-1 rounded hover:bg-neutral-100"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                  
                }}
                className="text-left font-semibold text-red-600 text-sm  py-1 rounded hover:bg-neutral-100"
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
