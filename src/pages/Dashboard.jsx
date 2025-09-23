import { Link } from "@tanstack/react-router";
import React from "react";
import { LuCirclePlus } from "react-icons/lu";
const Dashboard = () => {
  // Sample listings data (you can fetch from API later)
  const listings = [
    {
      id: 1,
      title: "Textbook, Calculus 101",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBMyxuwgXmIAqLxc9YN3Xu3Q3XWtPYVhB-7aY7Gt99M4yftmfpUBQ74kaW4iQ0RmZtrDfl_eHdnE4Pl8L7gHxISeID-5Fh09pRraDOXzipOhh6tDIVqGHbjvEqbCJq0qdC7VrqcQ4NMEmTDMWPU-pnUzCTTwgfbtIBLxV_GMAKM5YrHQha9ALeGARfjqDgYc3V9Lqr01-u_fmCZ7GxiZquXphZG0lk6RKQn50WYYnJYa8vRHeUvg5GKT2NLftJD3l0-ubLvLWnqwuY",
      price: "$50.00",
      status: "Available",
      inquiries: 5,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Lab Coat, Size M",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBKNpjzeoi6TECo1YLVqoV8OvZ163rbmEg0PUkC26jdhwr-JJkHlZFi1yKQosrk5XPWTKir8xBP2SFocSy0ULE_-c8O87ehZldu7S4He9ooHFS9wbAyZ-HKm_Ql0L-H_1ToLPpBe3tHoYPswfPiRKzD7WsWgDgk4nf8X5R9VD0DT0SQH94NyRr9y1eEuvTM91qHmyFABv9HGLNizS4r9MzaYnlevpVRvpA7XrBJR_HFAtE6X2_kOcbzc07T9ckvQsfCRJkyihVy9_Q",
      price: "$30.00",
      status: "Available",
      inquiries: 2,
      posted: "5 days ago",
    },
    {
      id: 3,
      title: "Scientific Calculator",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDXN8wS-AZpT1z3XJ3pQ1Y9zQo0p0utyDfHOxYEkRkWfBulFxjaJX2YVVWIvRRa_0Ssg1850CK3J8Drmgo0nDn8Rg80GrB00Z4EoXXFKAiDJPqdR6nMOKjbFm129E-zLXShP2YcfWRzmgLBdg4yIWl3ZZRE9a-ko2mwKl_HoUC_NIyHKVFBKyM6wvXu8VrK7TiQgSLtlvE2b4M4Cp9aWjdKM9WoAiXkXm0S92JEEe8XDHcHyNQjryFfX0jzbxcHHCvnf93Sa_tylYQ",
      price: "$20.00",
      status: "Pending",
      inquiries: 8,
      posted: "1 week ago",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 h-fit min-h-[90vh]">
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Seller Dashboard
          </h2>
          <Link to="/sell" className="flex items-center gap-2 text-sm text-white bg-black font-semibold px-4 py-2 rounded-lg transition-colors">
            <span className="material-symbols-outlined"><LuCirclePlus/></span>
            <span>Create New Listing</span>
          </Link>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex gap-6">
            <a className="shrink-0 border-b-2 border-primary px-1 pb-4 text-sm font-semibold text-primary">
              Active Listings
            </a>
            
          </nav>
        </div>

        {/* Listings Table */}
        <div className="bg-background-light dark:bg-background-dark/50 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Item</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold text-center">Status</th>
                  <th className="px-6 py-4 font-semibold text-center">
                    Inquiries
                  </th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item) => (
                  <tr
                    key={item.id}
                    className="bg-background-light dark:bg-background-dark/60 border-b  border-b-neutral-300 hover:bg-gray-50  transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Posted {item.posted}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.price}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === "Available"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                      {item.inquiries}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
                          <span className="material-symbols-outlined text-base">
                            visibility
                          </span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-500 dark:text-gray-400">
                          <span className="material-symbols-outlined text-base">
                            edit
                          </span>
                        </button>
                        <button className="p-2 rounded-lg hover:bg-primary/20 transition-colors text-primary">
                          <span className="material-symbols-outlined text-base">
                            sell
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-3 bg-gray-100 dark:bg-gray-800/50">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing 1-3 of 15 listings
            </p>
            <div className="flex items-center gap-2">
              <button
                disabled
                className="px-3 py-1 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              <button className="px-3 py-1 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
