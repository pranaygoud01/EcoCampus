import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";

const Dashboard = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL; // your API base URL

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // user object stored after login
        const sellerId = user?._id; // seller id from localStorage JSON

        if (!sellerId) return;

        const res = await axios.get(`${baseUrl}/api/products/seller/${sellerId}`);
        setListings(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [baseUrl]);

  return (
    <div className="bg-background-light :bg-background- font-display text-gray-800 :text-gray-200 h-fit min-h-[90vh]">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h2 className="text-3xl flex flex-col max-lg:text-2xl font-bold text-gray-900 :text-white">
            Seller Dashboard
            <span className="text-xs text-neutral-500 font-medium mt-1">Hey 👋🏻, From here you can manage your products</span>
          </h2>
          <Link
            to="/sell"
            className="flex items-center gap-2 text-sm text-white bg-black font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <LuCirclePlus />
            <span>Create New Listing</span>
          </Link>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 :border-gray-700">
          <nav className="-mb-px flex gap-6">
            <a className="shrink-0 border-b-2 border-primary px-1 pb-4 text-sm font-semibold text-primary">
              Active Listings
            </a>
          </nav>
        </div>

        {/* Listings Table */}
        <div className="bg-background-light :bg-background-/50 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 :text-gray-400">
              <thead className="text-xs text-gray-700 :text-gray-300 uppercase bg-gray-100 :bg-gray-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Item</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                  <th className="px-6 py-4 font-semibold text-center">
                    Campus
                  </th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6">
                      Loading...
                    </td>
                  </tr>
                ) : listings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-6">
                      No listings found
                    </td>
                  </tr>
                ) : (
                  listings.map((item) => (
                    <tr
                      key={item._id}
                      className="bg-background-light :bg-background-/60 border-b border-b-neutral-300 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 :text-white">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 :text-gray-400">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 :text-white">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 :bg-green-900/50 :text-green-300">
                          Available
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900 :text-white">
                        {item.campus?.name}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-gray-200 :hover:bg-gray-700 transition-colors text-gray-500 :text-gray-400">
                            <FaRegEye />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-200 :hover:bg-gray-700 transition-colors text-gray-500 :text-gray-400">
                            <MdOutlineModeEdit />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-colors text-primary">
                            <MdOutlineDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
