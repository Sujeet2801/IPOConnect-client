import React from "react";
import { useParams } from "react-router-dom";
import { sectorDetailedData } from "../../data/data.js"; // Ensure this file exists

function SectorDetailedPage() {
  const { sectorName } = useParams();
  
  const sectorKey = sectorName ? sectorName.toLowerCase() : "";

  const sector = sectorDetailedData.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === sectorKey);

  if (!sector) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-600 text-2xl font-semibold">
          Sector not found!
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        {sector.title} Industry Overview
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{sector.desc}</p>
      
      <div className="border-t border-gray-300 pt-4">
        <div className="flex gap-3 mb-5 text-xl font-semibold text-gray-900">
        <h2 className="">Listed Companies:</h2>
        <p>{sector.listedCompany.length}</p>
        </div>
        {sector.listedCompany && sector.listedCompany.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sector.listedCompany.map((company, index) => (
              <li key={index} className="bg-gray-200 p-4 rounded-md shadow-sm">
                <p className="font-medium">{company.name}</p>
                <p className="text-sm text-gray-600">Type: {company.type}</p>
                <p className="text-sm text-gray-600">Revenue: {company.revenue}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No listed companies available.</p>
        )}

        <div className="bg-gray-100 p-5 shadow-md rounded-lg mb-6 mt-5">
          <h2 className="text-xl font-semibold text-gray-900">Market Insights</h2>
          <p className="text-gray-700 mt-2">{sector.insights}</p>
        </div>

        <div className="bg-gray-100 p-5 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Opportunities</h2>
          <p className="text-gray-700 mt-2">{sector.oppurtunity}</p>
        </div>

        <div className="flex justify-center">
          <button className="text-white mt-6 px-6 py-2 rounded-md bg-blue-500 
          hover:bg-blue-600 transition duration-200">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectorDetailedPage;
