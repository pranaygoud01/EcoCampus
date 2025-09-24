import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Sell = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    whatsapp: "",
    contact: "",
    campus: "", // campus ID
  });

  const [imageFile, setImageFile] = useState(null);
  const [campuses, setCampuses] = useState([]);
  const [loadingCampuses, setLoadingCampuses] = useState(true);
  const [submitting, setSubmitting] = useState(false); // Loading state

  const baseUrl = import.meta.env.VITE_API_URL;

  // Fetch campuses
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/campuses`);
        const data = await res.json();
        if (res.ok) {
          setCampuses(data);
        } else {
          console.error("Failed to fetch campuses:", data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCampuses(false);
      }
    };

    fetchCampuses();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    const userId = user._id;

    if (!userId) {
      alert("User not logged in");
      setSubmitting(false);
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    if (imageFile) form.append("image", imageFile);
    form.append("seller", userId);

    try {
      const response = await fetch(`${baseUrl}/api/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Product created successfully!");
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          whatsapp: "",
          contact: "",
          campus: "",
        });
        setImageFile(null);
      } else {
        toast.error(`Error: ${data.msg || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light :bg-background- font-display text-gray-800 :text-gray-200 relative">
      {/* Full-page loading overlay */}
      {submitting && (
        <div className="absolute inset-0 bg-black/10 bg-opacity-50 flex justify-center items-center z-50">
          <svg
            className="animate-spin h-16 w-16 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            ></path>
          </svg>
        </div>
      )}

      <main className="flex-grow container mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 :text-white">
              Create a new listing
            </h2>
            <p className="mt-2 text-sm text-gray-600 :text-gray-400">
              Fill out the details below to post your item on the marketplace.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 :text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Gently Used Lab Coat"
                className="mt-1 block p-3 w-full border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 :placeholder-gray-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 :text-gray-300"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your item in detail, including condition, size, etc."
                className="mt-1 block p-3 w-full border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 :placeholder-gray-500"
              ></textarea>
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 :text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Books</option>
                  <option>Gadgets</option>
                  <option>Lab Coats</option>
                  <option>Instruments</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 :text-gray-300"
                >
                  Price
                </label>
                <div className="mt-1 relative rounded-lg">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <span className="text-gray-500 sm:text-sm">&#8377;</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="block w-full border pl-7 p-3 pr-12 bg-background-light :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 :placeholder-gray-500"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-gray-500 sm:text-sm">INR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700 :text-gray-300"
                >
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="e.g., +919876543210"
                  className="mt-1 block p-3 w-full border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 :placeholder-gray-500"
                />
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 :text-gray-300"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="e.g., +919876543210"
                  className="mt-1 block p-3 w-full border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 :placeholder-gray-500"
                />
              </div>
            </div>

            {/* Campus Dropdown */}
            <div>
              <label
                htmlFor="campus"
                className="block text-sm font-medium text-gray-700 :text-gray-300"
              >
                Campus
              </label>
              {loadingCampuses ? (
                <p className="mt-1 text-sm text-gray-500">Loading campuses...</p>
              ) : (
                <select
                  id="campus"
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border :bg-background- border-gray-300 :border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="" disabled>
                    Select a campus
                  </option>
                  {campuses.map((campus) => (
                    <option key={campus._id} value={campus._id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photos
              </label>

              <label className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-background-light :bg-background-/20 hover:border-primary/50 :hover:border-primary/50 cursor-pointer transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {imageFile ? (
                  <img
                    src={URL.createObjectURL(imageFile)}
                    alt="Preview"
                    className="max-h-48 object-contain"
                  />
                ) : (
                  <div className="space-y-1 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <p className="text-sm text-gray-600">
                      Click anywhere to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full md:w-auto inline-flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded-lg text-white bg-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${
                  submitting ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                {submitting ? "Submitting..." : "Create Listing"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Sell;
