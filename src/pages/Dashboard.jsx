import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null); // track product id to delete
  const [showConfirm, setShowConfirm] = useState(false); // track popup visibility

  const baseUrl = import.meta.env.VITE_API_URL;

  // Fetch Listings
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const sellerId = user?._id;

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

  // Handle Delete
  const handleDelete = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token") // assuming token is saved in user object

      if (!token) {
        alert("Not authorized. Please login again.");
        return;
      }

      await axios.delete(`${baseUrl}/api/products/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // remove deleted product from state
      setListings((prev) => prev.filter((item) => item._id !== deleteId));

      setShowConfirm(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product. Try again.");
    }
  };

  return (
    <div className="bg-background-light font-display text-gray-800 h-fit min-h-[90vh]">
      
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h2 className="text-3xl flex flex-col max-lg:text-2xl font-bold text-gray-900">
            Seller Dashboard
            <span className="text-xs text-neutral-500 font-medium mt-1">
              Hey 👋🏻, From here you can manage your products
            </span>
          </h2>
          <Link
            to="/sell"
            className="flex items-center gap-2 text-sm text-white bg-black font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <LuCirclePlus />
            <span>Create New Listing</span>
          </Link>
        </div>

        {/* Listings Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-4 font-semibold">Item</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                  <th className="px-6 py-4 font-semibold text-center">Campus</th>
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
                      className="bg-white border-b border-b-neutral-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        ₹{item.price}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Available
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-900">
                        {item.campus?.name}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end items-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500">
                            <FaRegEye />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500">
                            <MdOutlineModeEdit />
                          </button>
                          <button
                            onClick={() => {
                              setDeleteId(item._id);
                              setShowConfirm(true);
                            }}
                            className="p-2 rounded-lg hover:bg-red-500 hover:text-white cursor-pointer transition-colors text-red-600"
                          >
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

        {/* Confirm Delete Popup */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to delete this product? This action cannot
                be undone.
              </p>
              <div className="flex justify-end font-semibold text-xs gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 rounded-lg border cursor-pointer border-gray-300 text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-lg bg-red-600 cursor-pointer text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
