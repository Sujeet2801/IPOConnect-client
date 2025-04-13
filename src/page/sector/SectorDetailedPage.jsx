import React from "react";
import { useParams } from "react-router-dom";
import { sectorDetailesData } from "../../constant/sectorDetailedData.js";

function SectorDetailedPage() {
  const { sectorName } = useParams();

  const sectorKey = sectorName ? sectorName.toLowerCase() : "";

  const sector = sectorDetailesData.find((s) => s.title.toLowerCase().replace(/\s+/g, "-") === sectorKey);
  console.log(sector);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

          {/* Large Companies */}
          <div className="bg-blue-50 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Large Companies</h2>
            {sector.listedCompany.map((ele, index) =>
              ele.type === 'Large' ? (
                <div
                  key={index}
                  className="mb-4 p-3 border border-blue-300 rounded-lg bg-white shadow-sm"
                >
                  <p className="text-lg font-semibold">{ele.name}</p>
                  <p className="text-sm text-gray-600">Type: {ele.type}</p>
                  <p className="text-sm text-gray-600">Revenue: {ele.revenue}</p>
                </div>
              ) : null
            )}
          </div>

          {/* Mid Companies */}
          <div className="bg-green-50 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-4">Mid Companies</h2>
            {sector.listedCompany.map((ele, index) =>
              ele.type === 'Mid' ? (
                <div
                  key={index}
                  className="mb-4 p-3 border border-green-300 rounded-lg bg-white shadow-sm"
                >
                  <p className="text-lg font-semibold">{ele.name}</p>
                  <p className="text-sm text-gray-600">Type: {ele.type}</p>
                  <p className="text-sm text-gray-600">Revenue: {ele.revenue}</p>
                </div>
              ) : null
            )}
          </div>

          {/* Small Companies */}
          <div className="bg-green-50 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-green-800 mb-4">Small Companies</h2>
            {sector.listedCompany.map((ele, index) =>
              ele.type === 'Small' ? (
                <div
                  key={index}
                  className="mb-4 p-3 border border-green-300 rounded-lg bg-white shadow-sm"
                >
                  <p className="text-lg font-semibold">{ele.name}</p>
                  <p className="text-sm text-gray-600">Type: {ele.type}</p>
                  <p className="text-sm text-gray-600">Revenue: {ele.revenue}</p>
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-xl mb-6 mt-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Insights</h2>
          <div className="space-y-3">
            {sector.insights.map((ele, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-gray-700">{ele}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-6 shadow-md rounded-xl mt-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Opportunities</h2>
          <div className="space-y-3">
            {sector.oppurtunity.map((ele, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-gray-700">{ele}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default SectorDetailedPage;
