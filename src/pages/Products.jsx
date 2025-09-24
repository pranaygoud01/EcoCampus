import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const campusId = localStorage.getItem("campusId");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!campusId) return;

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/products/campus/${campusId}`);
        setProducts(res.data); // assuming API returns an array
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [campusId]);

  const campus = localStorage.getItem("campus");

  if (!campusId)
    return <div className="text-center mt-10">No campus selected</div>;

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white :bg-gray-800 shadow-sm animate-pulse">
      <div className="aspect-square w-full bg-gray-200 :bg-gray-700"></div>
      <div className="flex flex-1 flex-col p-3 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 :bg-gray-700 rounded"></div>
        <div className="h-3 w-full bg-gray-200 :bg-gray-700 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-200 :bg-gray-700 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white :bg-gray-900 font-display min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-20">
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="w-full sm:max-w-md text-center sm:text-left">
              <h1 className="font-semibold text-lg text-neutral-900">
                🎓 {campus}
              </h1>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 :text-gray-100 text-center sm:text-left">
              Featured Items
            </h2>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
              {loading
                ? // Show 8 skeletons while loading
                  Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
                : products.length > 0
                ? products.map((product) => (
                    <Link
                      to={`/browse/product/${product._id}`}
                      key={product._id}
                      className="group relative flex flex-col overflow-hidden rounded-lg bg-white :bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div
                        className="aspect-square w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url(${product.image})` }}
                      ></div>
                      <div className="flex flex-1 flex-col p-3">
                        <h3 className="font-medium text-gray-900 :text-gray-100">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 :text-gray-400">
                          {product.description}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-black">
                          &#8377;{product.price}
                        </p>
                      </div>
                    </Link>
                  ))
                : (
                  <div className="text-center mt-10 col-span-full">
                    No products found
                  </div>
                )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
