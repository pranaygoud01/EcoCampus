import React from "react";

const Popup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white dark:bg-neutral-900 max-lg:w-11/12 rounded-2xl shadow-lg max-w-lg w-full p-6 z-10">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <div className="text-sm text-gray-700 dark:text-gray-300 mb-6 max-h-[60vh] overflow-y-auto">
          {children}
        </div>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
