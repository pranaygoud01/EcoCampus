import { useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
import { IoSearch, IoArrowForwardSharp } from "react-icons/io5";

const campusList = [
  "Stanford",
  "UC Berkeley",
  "Harvard",
  "MIT",
  "UCLA",
  "NYU",
];

const Browse = () => {
  const navigate = useNavigate(); // ✅ moved inside component
  const [selectedCampus, setSelectedCampus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCampus = (campus) => {
    setSelectedCampus(campus);
    setSearchQuery(campus);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (campusList.some((campus) => campus.toLowerCase() === value.toLowerCase())) {
      setSelectedCampus(value);
    } else {
      setSelectedCampus(value ? value : "");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-display text-foreground">
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Find Your Campus
          </h2>
          <p className="mt-4 max-w-xl text-sm text-neutral-500">
            Find deals on textbooks, gadgets, and more from students at your school.
          </p>

          {/* Search Input */}
          <div className="w-full max-w-md mt-8">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <IoSearch />
              </span>
              <input
                type="search"
                placeholder="Search for your campus..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-background border border-neutral-300 rounded-xl py-3 pl-10 pr-4 text-base shadow-sm outline-0"
              />
            </div>
          </div>

          {/* Popular Campuses */}
          <div className="w-full max-w-lg mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Popular Campuses
            </h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {campusList.map((campus, idx) => (
                <button
                  key={idx}
                  className={`campus-button flex items-center justify-center p-3 border border-neutral-400 rounded-lg bg-background ${
                    selectedCampus === campus ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCampus(campus)}
                >
                  <span className="font-medium text-foreground">{campus}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-12">
            <button
              onClick={() => navigate({ to: "/browse/products" })}
              className={`w-full sm:w-auto inline-flex items-center justify-center py-3 px-8 border border-transparent shadow-sm text-base font-semibold rounded-full text-white bg-blue-500 ${
                !selectedCampus ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedCampus}
            >
              Continue
              <span className="ml-2">
                <IoArrowForwardSharp />
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Selected Campus Styles */}
      <style>
        {`
          .campus-button.selected {
            background-color: hsl(var(--primary));
            color: hsl(var(--primary-foreground));
            border-color: hsl(var(--primary));
          }
          .campus-button.selected span {
            color: hsl(var(--primary-foreground));
          }
        `}
      </style>
    </div>
  );
};

export default Browse;
