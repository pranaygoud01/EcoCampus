import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${baseUrl}/api/campuses`);
        setColleges(res.data);
      } catch (err) {
        console.error("Failed to fetch campuses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampuses();
  }, []);

  const handleSelectCollege = (college) => {
    localStorage.setItem("campusId", college._id);
    localStorage.setItem("campus", college.name);
    navigate({ to: `/browse/products` });
  };

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-16 max-lg:py-10 bg-neutral-50">
      <div className="flex flex-col gap-12 items-center max-w-7xl w-full">
        {/* Heading */}
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-gray-900 text-center">
            Featured Colleges
          </h1>
          <p className="text-neutral-500 max-lg:text-xs text-sm text-center max-w-2xl">
            Explore popular colleges where students are actively buying and
            selling.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:grid md:grid-cols-5 md:gap-6 min-w-max md:min-w-0">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 min-w-[200px]"
                  >
                    <div className="w-20 h-20 rounded-full bg-neutral-200 animate-pulse"></div>
                    <div className="h-4 w-24 bg-neutral-200 rounded animate-pulse"></div>
                  </div>
                ))
              : colleges.map((college) => (
                  <button
                    key={college._id}
                    onClick={() => handleSelectCollege(college)}
                    className="flex flex-col items-center cursor-pointer gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-w-[200px]"
                  >
                    <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 overflow-hidden">
                      <img
                        src={
                          college.avatar ||
                          "https://img.freepik.com/premium-vector/college-logo-design-concept-vector-art-illustration_761413-39595.jpg"
                        }
                        alt={college.name}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <h2 className="font-bold text-lg text-gray-800 text-center">
                      {college.name}
                    </h2>
                  </button>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colleges;
