import { useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { IoSearch, IoArrowForwardSharp } from "react-icons/io5";
import axios from "axios";
import SEOHead from "../components/SEOHead";
import { seoData } from "../utils/seoData";

const Browse = () => {
  const navigate = useNavigate();
  const [campuses, setCampuses] = useState([]);
  const [popularCampuses, setPopularCampuses] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseUrl}/api/campuses`);
        setCampuses(res.data);
        setPopularCampuses(res.data.slice(0, 6));
      } catch (err) {
        console.error("Failed to fetch campuses", err);
      } finally {
        setLoading(false);
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

    const filtered = campuses.filter((campus) =>
      campus.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);

    const exactMatch = campuses.find(
      (campus) => campus.name.toLowerCase() === value.toLowerCase()
    );
    setSelectedCampus(exactMatch || null);
  };

  const handleContinue = () => {
    if (!selectedCampus) return;

    localStorage.setItem("campusId", selectedCampus._id);
    localStorage.setItem("campus", selectedCampus.name);

    navigate({ to: `/browse/products` });
  };

  return (
    <div className="min-h-[80vh] max-lg:p-5 flex flex-col bg-background font-display text-foreground">
      <SEOHead {...seoData.browse} />
      <main className="flex-grow flex items-start justify-center sm:p-6 lg:p-8  pt-2">
        <div className="w-full px-20 max-lg:p-0 mx-auto flex flex-col items-start text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Find Campuses
          </h2>
          <p className="mt-2 text-xs text-neutral-500">
            Find deals on textbooks, gadgets, and more from students at your school.
          </p>

          {/* Search Input */}
          <div className="w-full mt-6 relative">
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
                    className="px-3 py-2 hover:bg-neutral-100 cursor-pointer flex items-center gap-3"
                    onClick={() => handleSelectCampus(campus)}
                  >
                    <img
                      src={campus.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(campus.name)}`}
                      referrerPolicy="no-referrer"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{campus.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Popular Campuses */}
          <div className="w-full mt-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Popular Campuses
            </h3>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {loading
                ? // 🔹 Skeletons while loading
                  Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-12 rounded-lg bg-neutral-200 animate-pulse"
                    ></div>
                  ))
                : // 🔹 Actual campuses
                  popularCampuses.map((campus) => (
                    <button
                      key={campus._id}
                      className={`campus-button flex items-center gap-2 justify-start p-2 border border-neutral-300 rounded-lg bg-background ${
                        selectedCampus?._id === campus._id ? "selected" : ""
                      }`}
                      onClick={() => handleSelectCampus(campus)}
                    >
                      <img
                        src={campus.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(campus.name)}`}
                        referrerPolicy="no-referrer"
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="font-medium max-lg:text-xs text-sm text-left">
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
            background-color: #000000;
            color: #ffffff;
            border-color: #000000;
          }
          .campus-button.selected span {
            color: #ffffff;
          }
        `}
      </style>
    </div>
  );
};

export default Browse;
