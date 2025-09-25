import React from "react";
import { Link } from "@tanstack/react-router";
import booksImg from "../assets/category/books.png";
import image1 from "../assets/category/project.png";
import gadgetsImg from "../assets/category/gadget.png";

const Categories = () => {
  const items = [
    {
      title: "Buy Products",
      description: "Find gadgets, books, instruments and more from your campus.",
      to: "/browse",
      img: gadgetsImg,
      cta: "Shop Now",
      accent: "#111111",
    },
    {
      title: "Buy Projects",
      description: "Explore final-year projects across branches and technologies.",
      to: "/projects",
      img: image1,
      cta: "Explore Projects",
      accent: "#0f172a",
    },
    {
      title: "Access Campus Notes",
      description: "Get curated notes and study materials by and for students.",
      to: "/notes",
      img: booksImg,
      cta: "View Notes",
      accent: "#111827",
    },
  ];

  return (
    <section className=":bg-background- w-full bg-white py-12 md:py-16">
      <div className="container mx-auto w-full px-5 sm:px-6 lg:px-20">
        <div className="flex items-end justify-between mb-6 md:mb-8">
          <div>
            <p className="text-[10px] tracking-widest font-semibold text-neutral-400 uppercase">Discover</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Browse by Category</h2>
          </div>
          
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
            {items.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group  bg-white border border-neutral-200 rounded-2xl  flex flex-col hover:shadow transition-shadow"
              >
                <div className="h-40 w-full overflow-hidden rounded-t-xl bg-neutral-50 flex items-center justify-center ">
                  <img src={card.img} alt={card.title} className="h-full py-5 rounded-t-xl object-contain group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="px-5 pb-5">
                <div className="mt-4 flex items-center gap-2">
                  
                  <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                </div>
                <p className="mt-1 text-sm text-neutral-600 flex-1">{card.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center max-lg:text-xs justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg group-hover:bg-neutral-900">
                    {card.cta}
                  </span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

