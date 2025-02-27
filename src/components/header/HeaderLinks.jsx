import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderLinks() {
  const navigate = useNavigate();

  return (
    <ul className="flex flex-col md:flex-row opacity-80 
    cursor-pointer gap-4 md:gap-8 mt-1 ">

      <li 
        className="md:hover:scale-110 hover:text-blue-500"
        onClick={() => navigate("/home")}
      >
        Home
      </li>
      <li 
        className="md:hover:scale-110 hover:text-blue-500"
        onClick={() => navigate("/blog")}
      >
        Blog
      </li>
      
      <li 
        className="md:hover:scale-110 hover:text-blue-500"
        onClick={() => navigate("/sector")}
      >
        Sector
      </li>

      <li 
        className="md:hover:scale-110 hover:text-blue-500"
        onClick={() => navigate("/products")}
      >
        Products
      </li>

      <li 
        className="md:hover:scale-110 hover:text-blue-500"
        onClick={() => navigate("/brokers")}
      >
        Brokers
      </li>
      
    </ul>
  );
}

export default HeaderLinks;
