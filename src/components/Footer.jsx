import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/5 dark:bg-white/5 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-black/60 dark:text-white/60">
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-black/60 dark:text-white/60">
            © 2024 Campus Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
