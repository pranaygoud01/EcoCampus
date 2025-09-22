import { Link } from "@tanstack/react-router";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      className="w-full h-[90vh] max-lg:h-[60vh] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="w-full h-full bg-black/40 flex flex-col gap-2 max-lg:text-center max-lg:px-5 justify-center items-center">
        <h1 className="font-bold text-5xl max-lg:text-2xl text-white ">
          Your Campus Marketplace
        </h1>
        <p className="text-sm max-lg:text-xs text-neutral-300">
          {" "}
          Buy and sell second-hand books, gadgets, lab coats, and instruments
          with ease.
        </p>
        {/* <div className="flex gap-3 items-center  mt-4 ">
          <div className="w-[400px]  max-lg:w-[200px] bg-white/20 flex items-center px-2  py-2 rounded-md">
            <span className="text-white">
              <CiSearch />
            </span>
            <input
              type="text"
              className="px-2 py-1 outline-0 text-white  max-lg:text-xs text-sm "
              placeholder="Search..."
            />
          </div>
          <button className="font-semibold max-lg:text-xs text-white bg-blue-500 rounded-sm px-6 py-3 text-sm">
            Search
          </button>
        </div> */}

        <div className="flex gap-2 items-center mt-5">
            <Link to="/register" className="font-semibold text-black bg-white rounded-lg px-5 py-2 text-sm">Register</Link>
         <Link to="/browse" className="font-semibold text-white  bg-white/20 rounded-lg px-4 py-2 text-sm ">Browse Items</Link>
              
        </div>
      </div>
    </div>
  );
};

export default Hero;
