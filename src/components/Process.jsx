import React from "react";
import { FaSearch, FaComments, FaHandshake } from "react-icons/fa";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Find or List",
      description:
        "Search for what you need or easily list items you want to sell. It only takes a minute!",
      icon: <FaSearch className="text-xl text-white" />,
    },
    {
      id: 2,
      title: "Connect",
      description:
        "Chat with buyers or sellers directly on the platform to arrange details and ask questions.",
      icon: <FaComments className="text-xl text-white" />,
    },
    {
      id: 3,
      title: "Meet & Exchange",
      description:
        "Meet up on campus to safely exchange your item and payment. Simple and secure.",
      icon: <FaHandshake className="text-xl text-white" />,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-white">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Heading */}
        <h1 className="font-bold text-2xl md:text-4xl text-gray-900 mb-4 text-center">
          How It Works
        </h1>
        <p className="text-neutral-500 text-sm md:text-base max-w-xl text-center mb-12">
          A simple 3-step process to buy, sell, and connect with others on
          campus.
        </p>

        {/* Horizontal Stepper */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex-1 flex flex-col items-center text-center md:text-left"
            >
              {/* Circle with icon */}
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-800 shadow-lg">
                  {step.icon}
                </div>
                
              </div>

              {/* Step Content */}
              <h2 className="mt-6 font-semibold text-lg text-gray-800">
                {step.title}
              </h2>
              <p className="text-sm text-center text-gray-500 mt-2 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
