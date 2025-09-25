import React, { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const SingleProject = () => {
  const { id } = useParams({ from: "/projects/$id" });
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-pulse">
          <div className="lg:col-span-3">
            <div className="w-full h-[600px] max-lg:h-[400px] rounded-xl bg-gray-300"></div>
          </div>
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div>
              <div className="h-6 w-2/3 bg-gray-300 rounded mb-4"></div>
              <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
            <div className="rounded-lg bg-black/5 p-4 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gray-300"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-12 rounded-lg bg-gray-300"></div>
              <div className="h-12 rounded-lg bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return <div className="text-center font-semibold text-neutral-500 mt-10">Project not found</div>;
  }

  return (
    <div className="font-display bg-background-light text-[#0D141B] min-h-screen flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-sm font-medium text-black/60">
            <a href="#" className="hover:text-primary">Projects</a>
            <span className="mx-1">/</span>
            <span className="text-black/90">Project</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 relative">
              <div
                className="w-full rounded-xl bg-cover bg-center max-lg:h-[400px] h-[600px] bg-neutral-100"
                style={{ backgroundImage: project.image ? `url(${project.image})` : "none" }}
              >
                {!project.image && (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400">No Image</div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col space-y-6">
              <div>
                <h1 className="text-xl sm:text-3xl font-bold tracking-tight">{project.title}</h1>
                <p className="mt-4 max-lg:mt-2 text-xl sm:text-3xl font-bold text-primary">₹{project.price}</p>
              </div>

              <div className="prose prose-sm max-lg:text-xs sm:prose-base text-black/80">
                <p>{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                {project.branch && <span className="px-2 py-0.5 bg-neutral-100 rounded-full">{project.branch}</span>}
                {project.type && <span className="px-2 py-0.5 bg-neutral-100 rounded-full">{project.type}</span>}
                {project.category && <span className="px-2 py-0.5 bg-neutral-100 rounded-full">{project.category}</span>}
              </div>

              {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-black/5 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-lg bg-black/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-neutral-200 overflow-hidden">
                    {project.seller?.avatar && (
                      <img src={project.seller.avatar} alt={project.seller.name} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{project.seller?.name || "Seller"}</div>
                    <div className="text-xs text-neutral-600">{project.seller?.email}</div>
                  </div>
                </div>
              </div>

              {/* Contact Seller */}
              {(
                project.contactPhone
              ) && (
                <a
                  href={
                     `tel:${project.contactPhone}`
                  }
                  className="h-12 rounded-lg bg-black text-white flex items-center justify-center font-semibold"
                >
                  Contact Seller
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="h-12 rounded-lg bg-black text-white flex items-center justify-center font-semibold">View Repository</a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="h-12 rounded-lg border border-black flex items-center justify-center font-semibold">Live Demo</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProject;


