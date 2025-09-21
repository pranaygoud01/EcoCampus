import React, { useState } from "react";
import { PiBooks } from "react-icons/pi";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import { Link } from "@tanstack/react-router";

const campusList = [
  "MIT",
  "Stanford",
  "Harvard",
  "Cambridge",
  "Oxford",
  "IIT Delhi",
  "IIT Bombay",
  "IIT Madras",
  "NIT Trichy",
];

const Browse = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = campusList.filter((campus) =>
        campus.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-center items-center gap-6 text-center relative px-4 sm:px-6 lg:px-8">
      <h1 className="poppins text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-700">
        Select your <span className="underline">Campus</span> Name
      </h1>
      <p className="text-neutral-500 text-sm sm:text-base max-w-lg">
        Browse gadgets, books, and all other stuff available in your campus marketplace.
      </p>

      {/* Search Box */}
      <div className="flex flex-col sm:flex-row gap-2 items-center w-full max-w-md relative">
        <input
          type="text"
          placeholder="Search for campus"
          value={query}
          onChange={handleChange}
          className="w-full py-2 px-4 outline-0 rounded-xl bg-neutral-100 focus:ring-2 focus:ring-blue-400 transition"
        />
        <Link
          to="/browse/products"
          className="font-semibold text-white bg-blue-500 rounded-lg px-4 py-2 text-sm hover:bg-blue-600 transition"
        >
          Search
        </Link>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg mt-1 z-50 text-left max-h-40 overflow-auto">
            {suggestions.map((campus, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => {
                  setQuery(campus);
                  setSuggestions([]);
                }}
              >
                {campus}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Decorative Images */}
      <img
        src={image}
        className="w-24 sm:w-32 md:w-40 absolute bottom-16 right-1/3"
      />
      <img
        src={image1}
        className="absolute top-5 left-5 sm:left-10 w-40 sm:w-64"
      />
      <img
        src={image2}
        className="absolute bottom-5 right-5 sm:right-10 w-40 sm:w-64"
      />
    </div>
  );
};

export default Browse;
