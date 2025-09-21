import { Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { IoClose, IoMenuOutline } from "react-icons/io5";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = ["Browse", "Sell", "About"];

  return (
    <div className="w-full px-6 md:px-20 py-3 sticky top-0 bg-white z-50 flex border-b border-b-neutral-200 justify-between items-center">
      {/* Left Logo + Menu */}
      <div className="flex items-center gap-5">
        <h1 className="font-bold poppins text-neutral-800 max-lg:text-lg text-xl flex items-center gap-3">
          <span className="text-blue-500">
            <FaBoxOpen />
          </span>
          LootBoxx
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {menu.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="px-2 font-semibold cursor-pointer text-neutral-500 text-xs"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center gap-5">
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
        <div className="flex gap-2">
          <Link
            to="/login"
            className="font-semibold text-blue-500 bg-neutral-100 rounded-lg px-4 py-2 text-xs"
          >
            Login
          </Link>
          <Link  to="/register" className="font-semibold text-white bg-blue-500 rounded-lg px-4 py-2 text-xs">
            Register
          </Link>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={22} /> : <IoMenuOutline size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-13 left-0 w-full bg-white border-t border-neutral-200 flex flex-col gap-4 p-5 md:hidden shadow-lg">
          {menu.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="font-semibold text-neutral-700 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="flex flex-col gap-2">
            <Link
              to="/login"
              className="font-semibold text-center text-blue-500 bg-blue-100 rounded-lg px-4 py-2 text-sm"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="font-semibold text-white text-center bg-blue-500 rounded-lg px-4 py-2 text-sm"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
