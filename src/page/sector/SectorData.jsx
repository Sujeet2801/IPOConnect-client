import React from "react";
import { useNavigate } from "react-router-dom";
import { sectorData } from "../../data/data.js";
import { FaIndustry, FaBuilding, FaCar, FaHospital, FaBolt, FaMobileAlt, FaUtensils, FaTruck } from "react-icons/fa";
import { SiAmazoncognito, SiTesla, SiAirbnb, SiUber, SiAmazon } from "react-icons/si";

const icons = {
  abrasives: { icon: SiAmazoncognito, className: "text-blue-500 text-3xl" },
  manufacturing: { icon: FaIndustry, className: "text-red-500 text-3xl" },
  realEstate: { icon: FaBuilding, className: "text-green-500 text-3xl" },
  automobile: { icon: FaCar, className: "text-yellow-500 text-3xl" },
  construction: { icon: FaBuilding, className: "text-orange-500 text-3xl" },
  textile: { icon: SiTesla, className: "text-purple-500 text-3xl" },
  hospitality: { icon: SiAirbnb, className: "text-pink-500 text-3xl" },
  pharmaceuticals: { icon: FaHospital, className: "text-blue-500 text-3xl" },
  energy: { icon: FaBolt, className: "text-green-600 text-3xl" },
  technology: { icon: SiUber, className: "text-gray-700 text-3xl" },
  eCommerce: { icon: SiAmazon, className: "text-yellow-400 text-3xl" },
  telecommunications: { icon: FaMobileAlt, className: "text-indigo-500 text-3xl" },
  foodBeverages: { icon: FaUtensils, className: "text-red-400 text-3xl" },
  logistics: { icon: FaTruck, className: "text-brown-500 text-3xl" },
};

function SectorData() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className=" text-3xl font-bold text-center mx-auto bg-gradient-to-r from-blue-400 via-pink-500 
      to-blue-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 
      transition-transform duration-300 mb-5">Industry Sectors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorData.map((sector, index) => {
          const IconComponent = icons[sector.icon]?.icon;
          const iconClass = icons[sector.icon]?.className || "text-gray-500 text-3xl";

          return (
            <div key={index} className="p-6 rounded-lg shadow-md flex flex-col items-center text-center 
              hover:shadow-xl transition duration-300
              bg-gradient-to-b from-blue-300 to-white transform hover:scale-105">

              <div>
                {IconComponent ? <IconComponent className={iconClass} /> : <FaIndustry
                  className="text-gray-400 text-3xl" />}
              </div>

              <div className="text-lg font-semibold mt-2">{sector.heading}</div>
              <div className="text-gray-800">{sector.desc}</div>
              <div className="mt-3 font-medium">{sector.listedCompany} Listed Companies</div>
              <div className="flex gap-5 mt-3">
                {["micro", "small", "mid", "large"].map((size) => (
                  <div key={size} className="text-center">
                    <p className="text-sm text-gray-700 uppercase">{size}</p>
                    <p className="font-semibold">{sector[size]}</p>
                  </div>
                ))}
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md 
                hover:bg-blue-700 transition duration-200"
                onClick={() => navigate(`/v1/api/users/sector/${sector.icon}`)}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectorData;
