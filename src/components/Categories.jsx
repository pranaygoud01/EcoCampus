import React from "react";
import { Link } from "@tanstack/react-router";
import booksImg from "../assets/books.png";
import image1 from "../assets/image1.png";
import gadgetsImg from "../assets/store.png";

const Categories = () => {
  const items = [
    {
      title: "Buy Products",
      description: "Find gadgets, books, instruments, and more from your campus.",
      to: "/browse",
      img: gadgetsImg,
      cta: "Shop Now",
    },
    {
      title: "Buy Projects",
      description: "Explore final-year projects across branches and technologies.",
      to: "/projects",
      img: image1,
      cta: "Explore Projects",
    },
    {
      title: "Access Campus Notes",
      description: "Get curated notes and study materials by and for students.",
      to: "/notes",
      img: booksImg,
      cta: "View Notes",
    },
  ];

  return (
    <section className=":bg-background- w-full bg-white py-10 md:py-14">
      <div className="container mx-auto w-full px-5 sm:px-6 lg:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col shadow-sm">
              <div className="h-40 w-full overflow-hidden rounded-xl bg-neutral-50 flex items-center justify-center">
                <img src={card.img} alt={card.title} className="h-full object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 flex-1">{card.description}</p>
              <div className="mt-4">
                <Link
                  to={card.to}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-neutral-900"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;


