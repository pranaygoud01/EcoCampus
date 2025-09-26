import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LuCirclePlus } from "react-icons/lu";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import axios from "axios";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const baseUrl = import.meta.env.VITE_API_URL;

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const sellerId = user?._id;

        if (!sellerId) return;

        const res = await axios.get(`${baseUrl}/api/projects/seller/${sellerId}`);
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [baseUrl]);

  // Handle Delete
  const handleDelete = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Not authorized. Please login again.");
        return;
      }

      await axios.delete(`${baseUrl}/api/projects/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove deleted project from state
      setProjects((prev) => prev.filter((item) => item._id !== deleteId));

      setShowConfirm(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Error deleting project:", err);
      alert("Failed to delete project. Try again.");
    }
  };

  // Handle Edit
  const handleEdit = (project) => {
    setEditingProject(project);
    setShowEditForm(true);
  };

  // Handle Update
  const handleUpdate = async (updatedData) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Not authorized. Please login again.");
        return;
      }

      const formData = new FormData();
      Object.keys(updatedData).forEach(key => {
        if (key === 'technologies' && Array.isArray(updatedData[key])) {
          formData.append(key, updatedData[key].join(', '));
        } else if (key !== 'image' && updatedData[key] !== undefined) {
          formData.append(key, updatedData[key]);
        }
      });

      if (updatedData.image && updatedData.image instanceof File) {
        formData.append('image', updatedData.image);
      }

      const res = await axios.put(`${baseUrl}/api/projects/${editingProject._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update project in state
      setProjects((prev) =>
        prev.map((item) => (item._id === editingProject._id ? res.data : item))
      );

      setShowEditForm(false);
      setEditingProject(null);
    } catch (err) {
      console.error("Error updating project:", err);
      alert("Failed to update project. Try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold max-lg:text-lg text-gray-900">My Projects</h3>
          <Link
            to="/sell-project"
            className="flex items-center max-lg:text-xs gap-2 text-sm text-white bg-black font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <LuCirclePlus />
            <span>Add New Project</span>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">Project</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold text-center">Type</th>
              <th className="px-6 py-4 font-semibold text-center">Branch</th>
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
            ) : projects.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  No projects found
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr
                  key={project._id}
                  className="bg-white border-b border-b-neutral-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {project.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(project.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    ₹{project.price}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-gray-900">
                    {project.branch}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center gap-2">
                      <Link
                        to={`/projects/${project._id}`}
                        className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500"
                      >
                        <FaRegEye />
                      </Link>
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-500"
                      >
                        <MdOutlineModeEdit />
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(project._id);
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

      {/* Confirm Delete Popup */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this project? This action cannot
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

      {/* Edit Project Form */}
      {showEditForm && (
        <EditProjectForm
          project={editingProject}
          onUpdate={handleUpdate}
          onClose={() => {
            setShowEditForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
};

// Edit Project Form Component
const EditProjectForm = ({ project, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    branch: project?.branch || "",
    type: project?.type || "",
    category: project?.category || "",
    price: project?.price || "",
    technologies: project?.technologies?.join(", ") || "",
    repoUrl: project?.repoUrl || "",
    demoUrl: project?.demoUrl || "",
    contactEmail: project?.contactEmail || "",
    contactPhone: project?.contactPhone || "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Edit Project
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Branch *
              </label>
              <select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
                <option value="IT">IT</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Type</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technologies
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Repository URL
              </label>
              <input
                type="url"
                name="repoUrl"
                value={formData.repoUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Demo URL
              </label>
              <input
                type="url"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectManagement;
