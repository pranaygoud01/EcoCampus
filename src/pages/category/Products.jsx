import { Link, useParams } from "@tanstack/react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!category) return;

    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/api/products/category/${category}`
        );
        setProducts(res.data.reverse());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className=" w-full  min-h-[90vh] ">
      <div
        className="w-full h-[30vh] max-lg:h-[20vh] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="w-full h-full bg-black/60 flex items-center">
          <h2 className="text-4xl font-bold mb-6 text-white px-25 max-lg:px-5 max-lg:text-xl">{category}</h2>
        </div>
      </div>
      <div className="px-20 py-10 w-full max-lg:p-5">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <Link
                to={`/browse/product/${product._id}`}
                key={product._id}
                className="p-3 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div
                  className="aspect-square bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <h3 className="mt-2 max-lg:text-sm font-semibold">
                  {product.name}
                </h3>
                <p className="text-sm max-lg:text-xs text-gray-500 line-clamp-2">
                  {product.description}
                </p>
                <p className="mt-1 font-semibold">₹{product.price}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            No products found in {category}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
