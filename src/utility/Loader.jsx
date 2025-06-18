import React from "react";

const Loader = ({ message = "Hold tight, your experience is loading..." }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
      bg-gradient-to-br from-sky-50 to-indigo-100 text-center px-6 py-12 space-y-8">

      {/* Spinner */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-[6px] border-t-indigo-600 
          border-r-indigo-300 border-b-indigo-100 border-l-indigo-200 animate-spin" />
        <div className="absolute inset-2 flex items-center justify-center rounded-full 
          bg-white text-3xl shadow-md">
          ⚡
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text 
        bg-gradient-to-r from-indigo-600 via-sky-600 to-purple-600 animate-fade-in">
        {message}
      </h2>

      {/* Progress Bar */}
      <div className="w-1/2 max-w-md h-2 rounded-full overflow-hidden bg-indigo-200 shadow-inner">
        <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 shimmer-bar" />
      </div>

      {/* Style */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .shimmer-bar {
            width: 50%;
            animation: shimmer 1.8s infinite linear;
            background-size: 200% 100%;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fadeIn 1.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
