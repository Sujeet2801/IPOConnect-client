import React from "react";
import { 
  SiAmazoncognito, SiTesla, SiAirbnb, SiUber, SiAmazon, 
  SiShopify, SiFord, SiBoeing, SiAdobe, SiNvidia 
} from "react-icons/si";
import { 
  FaIndustry, FaBuilding, FaCar, FaHospital, FaLeaf, FaTruck, 
  FaShippingFast, FaShoppingCart, FaMobileAlt, FaUtensils, FaBolt 
} from "react-icons/fa";

const icons = {
  abrasives: <SiAmazoncognito className="text-blue-500 text-3xl" />,
  manufacturing: <FaIndustry className="text-red-500 text-3xl" />,
  realEstate: <FaBuilding className="text-green-500 text-3xl" />,
  automobile: <FaCar className="text-yellow-500 text-3xl" />,
  construction: <FaBuilding className="text-orange-500 text-3xl" />,
  textile: <SiTesla className="text-purple-500 text-3xl" />,
  hospitality: <SiAirbnb className="text-pink-500 text-3xl" />,
  pharmaceuticals: <FaHospital className="text-blue-500 text-3xl" />,
  energy: <FaBolt className="text-green-600 text-3xl" />,
  technology: <SiUber className="text-gray-700 text-3xl" />,
  eCommerce: <SiAmazon className="text-yellow-400 text-3xl" />,
  telecommunications: <FaMobileAlt className="text-indigo-500 text-3xl" />,
  foodBeverages: <FaUtensils className="text-red-400 text-3xl" />,
  logistics: <FaTruck className="text-brown-500 text-3xl" />,
};

const sectorData = [
  { icon: "abrasives", heading: "Abrasives", desc: "Essential for precision grinding and surface finishing.", listedCompany: "8", micro: "3", small: "3", mid: "1", large: "1" },
  { icon: "manufacturing", heading: "Manufacturing", desc: "Driving industrial innovation and mass production.", listedCompany: "15", micro: "4", small: "5", mid: "3", large: "3" },
  { icon: "realEstate", heading: "Real Estate", desc: "Developing infrastructure for urban and rural spaces.", listedCompany: "12", micro: "2", small: "4", mid: "3", large: "3" },
  { icon: "automobile", heading: "Automobile", desc: "Powering mobility with advanced vehicle technologies.", listedCompany: "10", micro: "2", small: "3", mid: "3", large: "2" },
  { icon: "construction", heading: "Construction", desc: "Building tomorrow’s world with modern materials.", listedCompany: "9", micro: "3", small: "2", mid: "2", large: "2" },
  { icon: "textile", heading: "Textile", desc: "Weaving fashion and comfort for global markets.", listedCompany: "14", micro: "5", small: "5", mid: "2", large: "2" },
  { icon: "hospitality", heading: "Hospitality", desc: "Bringing luxury and comfort to travelers worldwide.", listedCompany: "7", micro: "2", small: "2", mid: "2", large: "1" },
  { icon: "pharmaceuticals", heading: "Pharmaceuticals", desc: "Innovating healthcare with life-saving drugs.", listedCompany: "13", micro: "4", small: "4", mid: "3", large: "2" },
  { icon: "energy", heading: "Energy", desc: "Pioneering clean and sustainable power sources.", listedCompany: "11", micro: "2", small: "4", mid: "3", large: "2" },
  { icon: "technology", heading: "Technology", desc: "Shaping the future with cutting-edge software and AI.", listedCompany: "18", micro: "5", small: "6", mid: "4", large: "3" },
  { icon: "eCommerce", heading: "E-Commerce", desc: "Revolutionizing online shopping and logistics.", listedCompany: "20", micro: "6", small: "6", mid: "5", large: "3" },
  { icon: "telecommunications", heading: "Telecommunications", desc: "Connecting the world through seamless communication.", listedCompany: "9", micro: "3", small: "2", mid: "2", large: "2" },
  { icon: "foodBeverages", heading: "Food & Beverages", desc: "Delivering quality and taste to every meal.", listedCompany: "14", micro: "4", small: "4", mid: "3", large: "3" },
  { icon: "logistics", heading: "Logistics", desc: "Ensuring swift and secure global supply chains.", listedCompany: "10", micro: "3", small: "3", mid: "2", large: "2" },
];

function SectorData() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Industry Sectors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectorData.map((sector, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg shadow-md flex flex-col items-center text-center 
            hover:shadow-xl transition duration-300
            bg-gradient-to-b from-blue-300 to-white transform hover:scale-105"
          >
            <div className="">{icons[sector.icon]}</div>
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
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectorData;
