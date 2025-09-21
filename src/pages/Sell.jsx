import React from "react";

const Sell = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
   

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Create a new listing
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Fill out the details below to post your item on the marketplace.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="e.g., Gently Used Lab Coat"
                className="mt-1 block w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                placeholder="Describe your item in detail, including condition, size, etc."
                className="mt-1 block w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 dark:placeholder-gray-500"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option>Books</option>
                  <option>Gadgets</option>
                  <option>Lab Coats</option>
                  <option>Instruments</option>
                  <option>Furniture</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Price
                </label>
                <div className="mt-1 relative rounded-lg shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="0.00"
                    className="block w-full pl-7 pr-12 bg-background-light dark:bg-background-dark border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 dark:placeholder-gray-500"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center">
                    <span className="text-gray-500 sm:text-sm">USD</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Photos
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg bg-background-light dark:bg-background-dark/20 hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
                <div className="space-y-1 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <div className="flex text-sm text-gray-600 dark:text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-transparent rounded font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Sell;
