import React from 'react';
import { useNavigate } from 'react-router-dom';

function Ad() {
  const nav = useNavigate();

  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-100 via-blue-300 to-white border 
    border-blue-200 shadow-xl rounded-2xl p-6 w-full max-w-3xl mx-auto text-gray-800">
      <p className="text-2xl font-extrabold text-center text-blue-700 mb-2 tracking-tight">🚀 IPOConnect</p>
      <p className="text-xl sm:text-2xl font-semibold text-center mb-4">Applying for this IPO?</p>
      
      <p className="text-sm sm:text-base text-center text-gray-700 opacity-80 leading-relaxed">
        Just like you compare and invest in only the best IPOs, let us help you get started with the best 
        Demat account. Compare top brokers and open your account now to invest smartly in your favorite IPOs.
      </p>

      <button
        onClick={() => nav("/brokers")}
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold 
        mt-6 px-6 py-2 rounded-full w-fit mx-auto shadow-md"
      >
        Open a Demat Account
      </button>
    </div>
  );
}

export default Ad;
