import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import HeaderLogin from "./HeaderLogin";
import HeaderLinks from "./HeaderLinks"; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Open Sign In or Sign Up modal
  const openAuth = (signup) => {
    setIsSignUp(signup);
    setAuthOpen(true);
  };

  return (
    <div className="flex justify-between items-center px-10 p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">IPOConnect</div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <HeaderLinks />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-md p-4 z-50 md:hidden">
          <HeaderLinks />
        </div>
      )}

      {/* Desktop Links */}
      <div className="flex gap-6">
        <button onClick={() => openAuth(false)} className="px-3 py-1 bg-gray-500 
        text-white rounded-md hover:bg-blue-600">
          Sign In
        </button>
        <button onClick={() => openAuth(true)} className="px-3 py-1 bg-blue-500 
        text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <CgMenuGridO className="text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {/* Auth Modal */}
      {authOpen && <HeaderLogin isSignUp={isSignUp} closeAuth={() => setAuthOpen(false)} />}

    </div>
  );
}

export default Header;
