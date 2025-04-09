import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderLogo() {
  const nav = useNavigate();

  return (
    <button
      onClick={() => nav("/v1/api/users/home")}
      className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 
      text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      IPOConnect
    </button>
  );
}

export default HeaderLogo;
