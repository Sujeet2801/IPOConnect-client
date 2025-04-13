import { FaIndustry, FaBuilding, FaCar, FaHospital, FaBolt, FaMobileAlt, FaUtensils, FaTruck, FaRegBuilding  }
  from "react-icons/fa";
import { SiAmazoncognito, SiTesla, SiAirbnb, SiUber, SiAmazon } from "react-icons/si";
import { CiBank } from "react-icons/ci";
import { MdAgriculture  } from "react-icons/md";

export const icons = {
  manufacturing: { icon: FaIndustry, className: "text-red-500 text-3xl" },
  automobile: { icon: FaCar, className: "text-yellow-500 text-3xl" },
  textile: { icon: SiTesla, className: "text-purple-500 text-3xl" },
  hospitality: { icon: SiAirbnb, className: "text-pink-500 text-3xl" },
  pharmaceuticals: { icon: FaHospital, className: "text-blue-500 text-3xl" },
  construction: { icon: FaBuilding, className: "text-orange-500 text-3xl" },
  technology: { icon: SiUber, className: "text-gray-700 text-3xl" },
  realEstate: { icon: FaBuilding, className: "text-green-500 text-3xl" },
  energy: { icon: FaBolt, className: "text-green-600 text-3xl" },
  telecommunications: { icon: FaMobileAlt, className: "text-indigo-500 text-3xl" },
  bank: { icon: CiBank, className: "text-red-400 text-3xl" },
  agriculture: { icon: MdAgriculture , className: "text-brown-500 text-3xl" },

  abrasives: { icon: SiAmazoncognito, className: "text-blue-500 text-3xl" },
  eCommerce: { icon: SiAmazon, className: "text-yellow-400 text-3xl" },
};