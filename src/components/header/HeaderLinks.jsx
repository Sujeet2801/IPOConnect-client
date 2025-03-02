import React from "react";
import { useNavigate } from "react-router-dom";

const navData = ["Home", "Blog", "Sector", "Shark Investor", "Brokers"];

function HeaderLinks() {
  const navigate = useNavigate();

  return (
    <ul className="flex flex-col md:flex-row opacity-80 
    cursor-pointer gap-4 md:gap-8 mt-1">
      {navData.map((navlink, index) => {
        return (
          <li key={index}
            onClick={() => navigate(`/${navlink.toLowerCase()}`)} 
            className="hover:text-blue-500 transition duration-300"
          >
            {navlink}
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderLinks;
