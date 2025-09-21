import React from "react";

const SingleProduct = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#0D141B] dark:text-background-light min-h-screen flex flex-col">
      {/* Main */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm font-medium text-black/60 dark:text-white/60">
            <a href="#" className="hover:text-primary">
              Marketplace
            </a>
            <span className="mx-1">/</span>
            <span className="text-black/90 dark:text-white/90">Product</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Hero Image */}
            <div className="lg:col-span-3">
              <div
                className="w-full h-full rounded-xl bg-cover bg-center min-h-[400px]" // Ensure it has minimum height
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
              ></div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 flex flex-col space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Organic Chemistry Textbook - 8th Edition
                </h1>
                <p className="mt-4 text-2xl sm:text-3xl font-bold text-primary">
                  $45.00
                </p>
              </div>

              <div className="prose prose-sm sm:prose base text-black/80 dark:text-white/80">
                <p>
                  This textbook is in excellent condition with minimal
                  highlighting. Perfect for your upcoming Organic Chemistry
                  course. ISBN: 978-1234567890
                </p>
              </div>

              {/* Seller Info */}
              <div className="rounded-lg bg-black/5 dark:bg-white/5 p-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
                  Seller Information
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCohBjt9se81uF6a3DMu0ETbgIAz5eaXVZ_AmBBW9asjrptAOBiqa68_xQ31pzl_kFimelA3v4MogRDs4WQdt8QCXEwXcLByoSDDWfUQzZm-KC8jTtLsycQIcLl05yJ13tInqFSYb-6Y8rq0wV7Q0iHg52AdJpff8KwVunB4jJczJ8DTwiPeXESmrHPgWvhEvNT1qyTArYa9VSeigAIN7ail3O_pfWo7Lnde6DEQsMG8lqyE2PYxA3oGHsrNwJooCiXnEQd3stJcYY")',
                    }}
                  ></div>
                  <div>
                    <p className="font-semibold">Sophia Clark</p>
                    <p className="text-sm text-black/60 dark:text-white/60">
                      Joined 2022
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="w-full h-12 rounded-lg bg-neutral-100 text-blue-500 font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                  Chat on Whatsapp
                </button>
                <button className="w-full h-12 rounded-lg bg-blue-500 text-white font-bold hover:opacity-90 transition-opacity">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleProduct;
