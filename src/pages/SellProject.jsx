import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SellProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    branch: "",
    type: "",
    category: "",
    price: "",
    technologies: "",
    repoUrl: "",
    demoUrl: "",
    contactEmail: "",
    contactPhone: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const baseUrl = import.meta.env.VITE_API_URL;

  // Route-level guard handles unauthenticated toast/redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => setImageFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const token = localStorage.getItem("token");
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([k, v]) => form.append(k, v));
      if (imageFile) form.append("image", imageFile);

      const res = await fetch(`${baseUrl}/api/projects`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Failed to create project");
      toast.success("Project listed successfully!");
      setFormData({
        title: "",
        description: "",
        branch: "",
        type: "",
        category: "",
        price: "",
        technologies: "",
        repoUrl: "",
        demoUrl: "",
        contactEmail: "",
        contactPhone: "",
      });
      setImageFile(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-display text-gray-800 relative">
      {submitting && (
        <div className="absolute inset-0 bg-black/10 flex justify-center items-center z-50">
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
          <div className="mb-8 ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Sell Final Year Project
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Provide project details below.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Placement Management System"
                className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Briefly explain your project idea and features"
                className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="branch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Branch
                </label>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="" disabled>
                    Select branch
                  </option>
                  <option>CSE</option>
                  <option>IT</option>
                  <option>ECE</option>
                  <option>EEE</option>
                  <option>MECH</option>
                  <option>CIVIL</option>
                  <option>OTHER</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option>Software</option>
                  <option>Hardware</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="e.g. Web App, AI, IoT"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter project price"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="technologies"
                  className="block text-sm font-medium text-gray-700"
                >
                  Technologies
                </label>
                <input
                  id="technologies"
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, MySQL"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="repoUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Repository URL
                </label>
                <input
                  id="repoUrl"
                  name="repoUrl"
                  value={formData.repoUrl}
                  onChange={handleChange}
                  placeholder="e.g. https://github.com/username/project"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="demoUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Demo URL
                </label>
                <input
                  id="demoUrl"
                  name="demoUrl"
                  value={formData.demoUrl}
                  onChange={handleChange}
                  placeholder="e.g. https://myprojectdemo.com"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Email
                </label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@example.com"
                  className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contactPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Phone
              </label>
              <input
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                placeholder="e.g. +91 9876543210"
                className="mt-1 block p-3 w-full border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail
              </label>
              <label className="mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg text-sm bg-white cursor-pointer hover:border-gray-400 transition">
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
                  <div className="text-center text-sm text-gray-600">
                    Click to upload (JPG, PNG)
                  </div>
                )}
              </label>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={submitting}
                className={`w-full md:w-auto inline-flex justify-center py-2 px-6 text-base font-semibold rounded-lg text-sm text-white bg-black ${
                  submitting ? "opacity-50" : "hover:bg-neutral-900"
                }`}
              >
                {submitting ? "Submitting..." : "List Project"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SellProject;
