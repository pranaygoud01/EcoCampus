import { Link } from "@tanstack/react-router";
import React from "react";

const Hero = () => {
  // Check if token exists in localStorage
  const token = localStorage.getItem("token");

  return (
    <div
      className="w-full h-[50vh] max-lg:h-[45vh] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1619512673224-91cfb2688284?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full h-full bg-black/60 flex flex-col gap-2 max-lg:text-center max-lg:px-5 justify-center items-center">
        <p className="text-black font-medium bg-white mb-3 rounded-full px-6 max-lg:px-5 text-xs max-lg:text-[9px] py-2 shadow-md">
          <span className="text-[8px]">🎓</span> Join now to sell on your campus
        </p>
        <h1 className="font-bold text-3xl max-lg:text-xl text-white ">
          Your Campus Marketplace
        </h1>
        <p className="text-xs  text-neutral-300">
          Buy and sell second-hand books, gadgets, lab coats, and instruments with ease.
        </p>

        <div className="flex gap-2 items-center mt-5">
          {token ? (
            <>
              <Link
                to="/sell"
                className="font-semibold text-white bg-black border border-white/20 shadow hover:bg-black rounded-lg px-5 py-2 max-lg:text-xs text-sm"
              >
                Start Selling
              </Link>
              <Link
                to="/dashboard"
                className="font-semibold text-black bg-white rounded-lg px-4 py-2 text-sm max-lg:text-xs"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/sell-project"
                className="font-semibold text-white bg-black hover:bg-black rounded-lg max-lg:text-xs px-5 py-2 text-sm"
              >
                Sell Project
              </Link>
              <Link
                to="/browse"
                className="font-semibold text-black bg-white rounded-lg px-4 py-2 max-lg:text-xs text-sm"
              >
                Browse Products
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
