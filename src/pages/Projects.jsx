import React, { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const Projects = () => {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(12);
  const [loading, setLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL;

  const fetchProjects = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (branch) params.set("branch", branch);
    if (type) params.set("type", type);
    params.set("page", String(page));
    params.set("limit", String(limit));
    const res = await fetch(`${baseUrl}/api/projects?${params.toString()}`);
    const data = await res.json();
    setItems(data.items || []);
    setPages(data.pages || 1);
    setTotal(data.total || 0);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, [q, branch, type, page]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchProjects();
  };

  const branches = ["", "CSE", "IT", "ECE", "EEE", "MECH", "CIVIL", "OTHER"];
  const types = ["", "Software", "Hardware", "Hybrid"];

  return (
    <div className="bg-background-light min-h-[80vh]">
      <div className="container mx-auto px-5 sm:px-6 lg:px-20 py-8 max-lg:py-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-xs text-neutral-400">Browse final-year projects and contact the owner.</p>
          </div>
          <form onSubmit={onSearchSubmit} className="flex flex-wrap items-center gap-2">
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by title, tech, or category" className="px-3 max-lg:text-xs py-2 border border-neutral-300 rounded-lg text-sm" />
            <select value={branch} onChange={(e) => { setBranch(e.target.value); setPage(1); }} className="px-3 py-2 border max-lg:text-xs border-neutral-300 rounded-lg text-sm">
              {branches.map((b) => (
                <option key={b} value={b}>{b || "All Branches"}</option>
              ))}
            </select>
            <select value={type} onChange={(e) => { setType(e.target.value); setPage(1); }} className="px-3 max-lg:text-xs py-2 border border-neutral-300 rounded-lg text-sm">
              {types.map((t) => (
                <option key={t} value={t}>{t || "All Types"}</option>
              ))}
            </select>
            <button type="submit" className="px-4 max-lg:text-xs py-2 text-sm font-semibold text-white bg-black rounded-lg">Search</button>
          </form>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-neutral-200 animate-pulse" />
            ))
          ) : items.length === 0 ? (
            <p className="text-sm text-neutral-500">No projects found.</p>
          ) : (
            items.map((p) => (
              <Link key={p._id} to={`/projects/${p._id}`} className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow">
                <div className="h-40 bg-neutral-50 flex items-center justify-center">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="h-full object-contain" />
                  ) : (
                    <div className="text-neutral-400 text-xs">No Image</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-1">{p.title}</h3>
                  <p className="text-xs text-neutral-600 line-clamp-2">{p.description}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                    <span className="px-2 py-0.5 bg-neutral-100 rounded-full">{p.branch}</span>
                    <span className="px-2 py-0.5 bg-neutral-100 rounded-full">{p.type}</span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gray-900">₹{p.price}</div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-3 py-1 text-sm border border-neutral-300 rounded-lg disabled:opacity-40">Prev</button>
          <span className="text-xs text-neutral-600">Page {page} of {pages}</span>
          <button disabled={page >= pages} onClick={() => setPage((p) => Math.min(pages, p + 1))} className="px-3 py-1 text-sm border border-neutral-300 rounded-lg disabled:opacity-40">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;


