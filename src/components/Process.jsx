import React from "react";

const Process = () => {
  const steps = [
    {
      id: 1,
      title: "Find or List",
      description:
        "Search for what you need or easily list items you want to sell. It only takes a minute!",
    },
    {
      id: 2,
      title: "Connect",
      description:
        "Chat with buyers or sellers directly on the platform to arrange details and ask questions.",
    },
    {
      id: 3,
      title: "Meet & Exchange",
      description:
        "Meet up on campus to safely exchange your item and payment. Simple and secure.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* LEFT - Steps Flow */}
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="font-bold text-2xl md:text-4xl text-gray-900">
            How It Works
          </h1>
          <p className="text-neutral-500 text-sm md:text-base max-w-md">
            A simple 3-step process to buy, sell, and connect with others on
            campus.
          </p>

          <div className="relative border-l-2 border-gray-200 ml-6">
            {steps.map((item, index) => (
              <div key={item.id} className="mb-10 ml-6">
                {/* Number circle */}
                <div className="absolute -left-4 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full text-sm font-bold">
                  {index + 1}
                </div>

                <h2 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Single Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Process Illustration"
            className="w-full object-cover  max-w-md rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
