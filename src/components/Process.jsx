import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: <FiSearch size={28} />,
      title: "Find or List",
      description:
        "Search for what you need or easily list items you want to sell. It only takes a minute!",
    },
    {
      id: 2,
      icon: <IoChatboxEllipsesOutline size={28} />,
      title: "Connect",
      description:
        "Chat with buyers or sellers directly on the platform to arrange details and ask questions.",
    },
    {
      id: 3,
      icon: <LiaExchangeAltSolid size={28} />,
      title: "Meet & Exchange",
      description:
        "Meet up on campus to safely exchange your item and payment. Simple and secure.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col gap-12 items-center max-w-5xl w-full">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-gray-900 text-center">
            How It Works
          </h1>
          <p className="text-neutral-500 max-lg:text-xs text-sm text-center max-w-2xl">
            A simple 3-step process to buy, sell, and connect with others on
            campus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {steps.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full text-black">
                {item.icon}
              </span>
              <h2 className="font-bold text-xl text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
