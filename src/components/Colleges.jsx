import React from "react";

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: "Harvard University",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
    },
    {
      id: 2,
      name: "Stanford University",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
    },
    {
      id: 3,
      name: "MIT",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
    },
    {
      id: 4,
      name: "Oxford University",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/d/d5/Oxford_University_Coat_Of_Arms.svg",
    },
    {
      id: 5,
      name: "Cambridge University",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/0/07/University_of_Cambridge_coat_of_arms.svg",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center px-6 md:px-20 py-16 max-lg:py-10 bg-neutral-50">
      <div className="flex flex-col gap-12 items-center max-w-7xl w-full">
        {/* Heading */}
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-gray-900 text-center">
            Featured Colleges
          </h1>
          <p className="text-neutral-500 max-lg:text-xs text-sm text-center max-w-2xl">
            Explore popular colleges where students are actively buying and
            selling.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:grid md:grid-cols-5 md:gap-6 min-w-max md:min-w-0">
            {colleges.map((college) => (
              <div
                key={college.id}
                className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 min-w-[200px]"
              >
                <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 overflow-hidden">
                  <img
                    src="https://img.freepik.com/premium-vector/college-logo-design-concept-vector-art-illustration_761413-39595.jpg"
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                </span>
                <h2 className="font-bold text-lg text-gray-800 text-center">
                  {college.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colleges;
