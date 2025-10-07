import React from "react";
import { Link, useRouter } from "@tanstack/react-router";

import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiNintendogamecube } from "react-icons/si";
import { PiBooks } from "react-icons/pi";

const MobileBottomNav = () => {
  const router = useRouter();
  const currentPath = router.state.location.pathname || "/";

  const isActive = (path) => currentPath === path;

  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
      role="navigation"
      aria-label="Primary mobile"
    >
      <div
        className="h-20 flex items-center justify-around px-2 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md border-t border-white/60 rounded-t-2xl shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)] bg-gradient-to-t from-white/70 to-white/20"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Link
          to="/"
          className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
            isActive("/") ? "text-black" : "text-neutral-600"
          }`}
          aria-label="Home"
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl ${
              isActive("/")
                ? "bg-white/80 shadow-sm border border-white/70"
                : "bg-white/40 border border-white/50"
            }`}
          >
            <GrHomeRounded size={20} />
          </span>
          <span className="mt-0.5">Home</span>
        </Link>

        <Link
          to="/browse"
          className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
            isActive("/browse") ? "text-black" : "text-neutral-600"
          }`}
          aria-label="Browse"
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl ${
              isActive("/browse")
                ? "bg-white/80 shadow-sm border border-white/70"
                : "bg-white/40 border border-white/50"
            }`}
          >
            <IoSearch size={20} />
          </span>
          <span className="mt-0.5">Browse</span>
        </Link>

        <Link
          to="/sell"
          className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
            isActive("/sell") ? "text-black" : "text-neutral-600"
          }`}
          aria-label="Sell"
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl ${
              isActive("/sell")
                ? "bg-white/80 shadow-sm border border-white/70"
                : "bg-white/40 border border-white/50"
            }`}
          >
            <IoMdAddCircleOutline size={22} />
          </span>
          <span className="mt-0.5">Sell</span>
        </Link>
        <Link
          to="/projects"
          className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
            isActive("/projects") ? "text-black" : "text-neutral-600"
          }`}
          aria-label="Projects"
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl ${
              isActive("/projects")
                ? "bg-white/80 shadow-sm border border-white/70"
                : "bg-white/40 border border-white/50"
            }`}
          >
            <SiNintendogamecube size={20} />
          </span>
          <span className="mt-0.5">Projects</span>
        </Link>

        <Link
          to="/notes"
          className={`flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
            isActive("/notes") ? "text-black" : "text-neutral-600"
          }`}
          aria-label="Notes"
         
        >
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-xl ${
              isActive("/notes")
                ? "bg-white/80 shadow-sm border border-white/70"
                : "bg-white/40 border border-white/50"
            }`}
          >
            <PiBooks size={20} />
          </span>
          <span className="mt-0.5">Notes</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;


