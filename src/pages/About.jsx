import React from "react";
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
    <div className="bg-white:bg-background- text-gray-800 :text-gray-200">
      <main className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3">
            <img src={logo} className="w-auto h-[44px]" />
            
          </div>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-neutral-600 :text-gray-300">
            Buy and sell second‑hand books, gadgets, lab coats, and instruments with
            your campus community — save money, reduce waste, and keep great gear in use.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/browse" className="font-semibold text-white bg-black hover:bg-black rounded-lg px-5 py-2 text-sm">
              Browse Products
            </a>
            <a href="/sell" className="font-semibold text-black bg-white rounded-lg px-4 py-2 text-sm">
              Start Selling
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Mission & Values */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl max-lg:text-xl font-bold text-black :text-white mb-3">Our Mission</h2>
              <p className="text-gray-600 :text-gray-300 text-sm sm:text-base leading-relaxed">
                We are building a simple, trusted marketplace that makes student essentials
                affordable and sustainable. By enabling students to resell quality items,
                we help cut costs, reduce waste, and create a culture of reuse across campuses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl max-lg:text-xl font-bold text-black :text-white mb-3">Our Values</h2>
              <ul className="space-y-2 text-gray-600 :text-gray-300 list-inside">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2 mt-1 text-sm">{value.icon}</span>
                    <div className="text-sm sm:text-base max-lg:text-xs">
                      <strong>{value.title}:</strong> {value.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Features */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white :bg-background- p-6 rounded-xl border border-gray-200 :border-gray-800 shadow-sm hover:shadow-lg transition-shadow"
              >
                <span className="text-black text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="font-bold text-lg max-lg:text-sm text-gray-900 :text-white">{feature.title}</h3>
                <p className="text-sm text-gray-500 max-lg:text-xs :text-gray-400 mt-1">{feature.desc}</p>
              </div>
            ))}
          </section>
        </div>

        {/* Safety + Trust */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white :bg-white/5 border border-gray-200 :border-white/10 rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-black :text-white">Safety & Trust</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 :text-gray-300">
              Your privacy and security matter. We encourage on‑campus meetups in safe, public places
              and provide tools that help you verify and manage your listings with confidence.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
