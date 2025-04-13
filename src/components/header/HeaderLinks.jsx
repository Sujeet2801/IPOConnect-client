import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navData = ["Home", "Sector", "Blog", "Shark Investor", "Brokers"];

function HeaderLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      <ul className="flex flex-col md:flex-row opacity-80 cursor-pointer 
      gap-4 md:gap-8 mt-1 text-md">
        {navData.map((navlink, index) => {
          const path = `/v1/api/users/${navlink.toLowerCase().replace(/\s+/g, "-")}`;
          const isActive = location.pathname === path;
          
          return (
            <li
              key={index}
              onClick={() => navigate(path)}
              className={`hover:text-blue-500 transition duration-300 ${
                isActive ? "text-blue-500 font-semibold underline" : ""
              }`}
            >
              {navlink}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderLinks;