import { Link } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/products`);
        setProducts(res.data.slice(0, 7)); // first 7 products
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  // Skeleton Loader
  const SkeletonCard = () => (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm min-w-[200px] animate-pulse">
      <div className="aspect-square w-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex flex-col p-3 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );

  return (
    <section className="w-full px-6 md:px-20 py-12 max-lg:py-8">
      {/* Heading */}
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 text-center sm:text-left">
        Popular Products
      </h2>

      {/* Horizontal Scroll */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : products.length > 0
            ? products.map((product) => (
                <Link
                  to={`/browse/product/${product._id}`}
                  key={product._id}
                  className="flex flex-col relative  border border-neutral-300 w-[300px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[200px]"
                >
                  <div
                    className="h-[300px]  bg-cover bg-center transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    
                  </div>
                  <p className="absolute top-3 font-semibold text-xs bg-red-800 rounded-md text-white px-2 py-1 left-3">{product?.campus?.name}</p>

                  <div className="flex flex-col p-3">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-black">
                      ₹{product.price}
                    </p>
                  </div>
                </Link>
              ))
            : (
              <div className="text-center mt-10 w-full">
                No products found
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
