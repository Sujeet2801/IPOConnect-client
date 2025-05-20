import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderLogo() {
  const nav = useNavigate();

  return (
    <button
      onClick={() => nav("/home")}
      className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
      text-transparent bg-clip-text cursor-pointer transform hover:scale-105 transition-all duration-300 
      tracking-tight drop-shadow-sm"
    >
      IPOConnect
    </button>
  );
}

export default HeaderLogo;
