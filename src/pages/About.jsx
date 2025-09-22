import React from "react";
import { MdOutlineRecycling, MdGroups2 } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { GiReceiveMoney } from "react-icons/gi";
import { SiTicktick } from "react-icons/si";
import logo from "../assets/logo.png";
const About = () => {
  const values = [
    {
      icon: <SiTicktick />,
      title: "Affordability",
      desc: "Making essential academic resources accessible to all students.",
    },
    {
      icon: <SiTicktick />,
      title: "Sustainability",
      desc: "Reducing waste and promoting the reuse of materials.",
    },
    {
      icon: <SiTicktick />,
      title: "Community",
      desc: "Fostering a supportive and collaborative environment.",
    },
    {
      icon: <SiTicktick />,
      title: "Transparency",
      desc: "Ensuring a safe and reliable marketplace for all users.",
    },
  ];

  const features = [
    {
      icon: "💸",
      title: "Save Money",
      desc: "Purchase textbooks and equipment at significantly lower prices.",
    },
    {
      icon: "♻️",
      title: "Reduce Waste",
      desc: "Contribute to a more sustainable campus by reusing materials.",
    },
    {
      icon:"🧑🏻‍🤝‍🧑🏻",
      title: "Connect with Peers",
      desc: "Easily buy from and sell to fellow students in your community.",
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      desc: "Our platform ensures secure transactions and protects your information.",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <main className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto flex justify-center flex-col items-center">
          <h2 className="text-3xl sm:text-4xl flex gap-2 items-center md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            <img src={logo} className="w-auto h-[50px]" />
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-500 dark:text-gray-300">
            A student-focused marketplace for second-hand books, gadgets, lab
            coats, and instruments. We're here to help you save money, reduce
            waste, and connect with your campus community.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Mission & Values */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                To create a sustainable and cost-effective solution for students
                to acquire necessary academic materials. By providing a platform
                for students to buy and sell used items, we aim to alleviate the
                financial burden associated with higher education and encourage
                a culture of reuse and resourcefulness on campus.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-inside">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-xl">
                      {value.icon}
                    </span>
                    <div>
                      <strong>{value.title}:</strong> {value.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-black text-4xl mb-4 inline-block">
                  {feature.icon}
                </span>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
