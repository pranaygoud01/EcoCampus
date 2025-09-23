// pages/SingleProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "@tanstack/react-router";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const SingleProduct = () => {
  const { id } = useParams({ from: "/browse/product/$id" });
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-pulse">
          {/* Image skeleton */}
          <div className="lg:col-span-3">
            <div className="w-full h-[600px] max-lg:h-[400px] rounded-xl bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Details skeleton */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div>
              <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
              <div className="h-8 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>

            {/* Seller Info skeleton */}
            <div className="rounded-lg bg-black/5 dark:bg-white/5 p-4 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>

            {/* Buttons skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-12 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
              <div className="h-12 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center font-semibold text-neutral-500 mt-10">Product not found</div>;
  }

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0D141B] dark:text-background-light min-h-screen flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm font-medium text-black/60 dark:text-white/60">
            <a href="#" className="hover:text-primary">
              Marketplace
            </a>
            <span className="mx-1">/</span>
            <span className="text-black/90 dark:text-white/90">Product</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Hero Image */}
            <div className="lg:col-span-3">
              <div
                className="w-full  rounded-xl bg-cover bg-center  max-lg:h-[400px] h-[600px]"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 flex flex-col max-lg:space-y-3 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {product.name}
                </h1>
                <p className="mt-4 max-lg:mt-2 text-2xl sm:text-3xl font-bold text-primary">
                  ₹{product.price}
                </p>
              </div>

              <div className="prose prose-sm sm:prose-base text-black/80 dark:text-white/80">
                <p>{product.description}</p>
              </div>

              {/* Seller Info */}
              <div className="rounded-lg bg-black/5 dark:bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Seller Information
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage: `url(${
                        product.seller?.avatar ||
                        "https://avatar.iran.liara.run/public/48"
                      })`,
                    }}
                  ></div>
                  <div>
                    <p className="font-semibold">
                      {product.seller?.name || "Unknown Seller"}
                    </p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      {product.seller?.email || ""}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${product.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center rounded-lg bg-neutral-100 text-black font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                >
                  Chat on Whatsapp
                </a>
                <a
                  href={`tel:${product?.contact || ""}`}
                  className="w-full h-12 flex items-center justify-center rounded-lg bg-black text-white font-bold hover:opacity-90 transition-opacity"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProduct;
