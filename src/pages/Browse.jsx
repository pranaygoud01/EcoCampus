import { useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { IoSearch, IoArrowForwardSharp } from "react-icons/io5";
import axios from "axios";

const Browse = () => {
  const navigate = useNavigate();
  const [campuses, setCampuses] = useState([]);
  const [popularCampuses, setPopularCampuses] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState(null); // store full campus object
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch campuses from API
    const fetchCampuses = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/campuses`);
        setCampuses(res.data);

        // Assuming API returns campuses with a "popularity" score or just take first 6
        setPopularCampuses(res.data.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch campuses", err);
      }
    };

    fetchCampuses();
  }, []);

  const handleSelectCampus = (campus) => {
    setSelectedCampus(campus);
    setSearchQuery(campus.name);
    setSuggestions([]);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value) {
      setSuggestions([]);
      setSelectedCampus(null);
      return;
    }

    // Filter campuses for suggestions
    const filtered = campuses.filter((campus) =>
      campus.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);

    // If exact match, set selected campus
    const exactMatch = campuses.find(
      (campus) => campus.name.toLowerCase() === value.toLowerCase()
    );
    setSelectedCampus(exactMatch || null);
  };

  const handleContinue = () => {
    if (!selectedCampus) return;

    // Save campusId to localStorage
    localStorage.setItem("campusId", selectedCampus._id);
    localStorage.setItem("campus",selectedCampus.name);

    // Navigate to products page
    navigate({
      to: `/browse/products`,
       // optional, can be removed if you just rely on localStorage
    });
  };

  return (
    <div className="h-[80vh] max-lg:p-5 flex flex-col bg-background font-display text-foreground">
      <main className="flex-grow flex items-center justify-center sm:p-6 lg:p-8">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Find Your Campus
          </h2>
          <p className="mt-4 max-w-xl text-sm text-neutral-500">
            Find deals on textbooks, gadgets, and more from students at your
            school.
          </p>

          {/* Search Input */}
          <div className="w-full max-w-md mt-8 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <IoSearch />
            </span>
            <input
              type="search"
              placeholder="Search for your campus..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-background border max-lg:text-sm border-neutral-300 rounded-xl py-3 pl-10 pr-4 text-base shadow-sm outline-0"
            />

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute w-full bg-white border border-neutral-300 rounded-xl mt-1 z-10 max-h-40 overflow-y-auto shadow-sm text-left">
                {suggestions.map((campus) => (
                  <li
                    key={campus._id}
                    className="px-4 py-2 hover:bg-neutral-100 cursor-pointer"
                    onClick={() => handleSelectCampus(campus)}
                  >
                    {campus.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Popular Campuses */}
          <div className="w-full max-w-lg mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Popular Campuses
            </h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {popularCampuses.map((campus) => (
                <button
                  key={campus._id}
                  className={`campus-button flex items-center justify-center p-3 border border-neutral-200 rounded-lg bg-background ${
                    selectedCampus?._id === campus._id ? "selected" : ""
                  }`}
                  onClick={() => handleSelectCampus(campus)}
                >
                  <span className="font-medium max-lg:text-xs text-sm">
                    {campus.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-12">
            <button
              onClick={handleContinue}
              className={`w-full sm:w-auto inline-flex items-center justify-center py-3 max-lg:py-2 max-lg:px-4 px-8 border border-transparent shadow-sm text-sm font-semibold rounded-xl text-white bg-black ${
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
