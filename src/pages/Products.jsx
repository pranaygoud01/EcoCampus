import React from "react";

const Products = () => {
  return (
    <div className="bg-white dark:bg-gray-900 font-display min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto w-full px-4 py-8 sm:px-6 lg:px-20">
          {/* Search + Filters */}
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="w-full sm:max-w-md text-center sm:text-left">
              <h1 className="font-semibold text-sm text-neutral-600">
                Sri Indu College of Engineering and Technology
              </h1>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button className="rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-200 dark:bg-blue-200 dark:hover:bg-blue-300">
                Books
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Gadgets
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Lab Equipment
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Instruments
              </button>
              <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                Others
              </button>
            </div>
          </div>

          {/* Featured Items */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 text-center sm:text-left">
              Featured Items
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
              {/* Example Product */}
              {[
                {
                  title: "Organic Chemistry Textbook",
                  desc: "Used - Good",
                  price: "$45.00",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf_JgIk0Lp1hPgO-xchXGjzYLPVkpDNwlCgtU9ihXtW7TAPxQfwTFCE9Q0HIhkc3ewr6iRzUE3nqfy64OWpup-VoMsRdC5a2f_DBP0Bm9KWFi0KCwh04KnzPhqwukIx3lJKVdOXiBY8AeNBW08B0TCYAU3rRwLpG0iC7mm-sKJdPAZ6tr8aa0KVZmXZauqr0scQY-BmUnv53wPnf5iBHrgHLScJ_5gsghzhbCcL2ONI-0c0l_jU38zdmloplCl2K0kLuTlOdWb3Hw"
                },
                {
                  title: "Scale",
                  desc: "Used - Good",
                  price: "$45.00",
                  img: "https://images.unsplash.com/photo-1594264242877-3c384fc6444c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  title: "Scientific Calculator",
                  desc: "Used - Good",
                  price: "$45.00",
                  img: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="aspect-square w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.img})` }}
                  ></div>
                  <div className="flex flex-1 flex-col p-3">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.desc}</p>
                    <p className="mt-2 text-lg font-semibold text-blue-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
