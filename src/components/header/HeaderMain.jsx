import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import HeaderLinks from "./HeaderLinks"; 
import HeaderLogo from "./HeaderLogo"; 
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useNavigate()

  return (
    <div className="flex justify-between md:justify-between items-center 
    px-10 p-4 bg-white shadow-md">

      {/* Logo */}
      <HeaderLogo/>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <HeaderLinks />
      </div>

      {/* Desktop Links */}
      <div className="flex gap-6">
        <button onClick={() => nav("/v1/api/users/login")} className="px-3 py-1 bg-blue-500 
        text-white rounded-md hover:bg-blue-600">
          Sign In
        </button>
        {/* <button onClick={() => openAuth(true)} className="px-3 py-1 bg-blue-500 
        text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button> */}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md 
        rounded-md p-4 z-50 md:hidden">
          <HeaderLinks />
        </div>
      )}

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <CgMenuGridO className="text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Auth Modal */}
  
    </div>
  );
}

export default Header;
