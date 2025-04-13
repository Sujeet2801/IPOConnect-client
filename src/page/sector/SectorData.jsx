import React from "react";
import { useNavigate } from "react-router-dom";

import { sectorDetailesData } from "../../constant/sectorDetailedData.js";
import { icons } from "../../constant/icons.js";
import { FaIndustry } from "react-icons/fa";

function SectorData() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className=" text-3xl font-bold text-center mx-auto bg-gradient-to-r from-blue-400 via-pink-500 
      to-blue-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 
      transition-transform duration-300 mb-5">Industry Sectors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorDetailesData.map((sector, index) => {
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

              <div className="text-lg font-semibold mt-2">{sector.title}</div>
              <div className="text-gray-800 mt-3">{sector.desc}</div>
              {/* <div className="mt-3 font-medium">{sector.listedCompany} Listed Companies</div> */}

              <div className="mt-3 font-medium text-blue-700 flex gap-8">
                <div>
                  <p className=" text-black">Large</p>
                  {sector.listedCompany.filter((ele) => ele.type === 'Large').length}
                </div>

                <div>
                  <p className=" text-black">Mid</p>
                  {sector.listedCompany.filter((ele) => ele.type === 'Mid').length}
                </div>

                <div>
                  <p className=" text-black">Small</p>
                  {sector.listedCompany.filter((ele) => ele.type === 'Small').length}
                </div>
              </div>

              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md 
                hover:bg-blue-700 transition duration-200"
                onClick={() =>
                  navigate(`/v1/api/users/sector/${sector.title.toLowerCase().replace(/\s+/g, "-")}`)}
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
