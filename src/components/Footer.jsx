import React, { useState } from "react";
import TermsPopup from "./TermsPopup";
import PrivacyPopup from "./PrivacyPopup";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-neutral-50 :bg-white/5 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-black/60 :text-white/60">
            <a href="/about" className="hover:text-black hover:underline transition-colors">
              About
            </a>
            <a href="/contact" className="hover:text-black hover:underline transition-colors">
              Contact
            </a>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-black hover:underline cursor-pointer transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-black hover:underline cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
          </div>
          <p className="text-xs text-black font-semibold">
            Developed with <span>❤️</span>
          </p>
        </div>
      </div>

      {/* Popups */}
      <TermsPopup isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPopup isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </footer>
  );
};

export default Footer;
