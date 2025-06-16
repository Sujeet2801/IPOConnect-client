import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSectorByName } from "../../services/api.js";

function SectorDetailedPage() {
  let { sectorName } = useParams();
  sectorName = sectorName.replace(/-/g, " ");
  const [sector, setSector] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSector = async () => {
      try {
        setLoading(true);
        const res = await fetchSectorByName(sectorName);
        setSector(res.data.data);
      } catch (err) {
        setError("Sector not found or failed to fetch sector data.");
      } finally {
        setLoading(false);
      }
    };

    if (sectorName) fetchSector();
  }, [sectorName]);

  const capColors = {
    large: "from-indigo-500 to-blue-500",
    mid: "from-purple-500 to-pink-500",
    small: "from-green-400 to-teal-400",
  };

  const renderCompanies = (category, title, type) => (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <span
          className={`px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r
            ${capColors[type]}`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} Cap
        </span>
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.companies.map((company, idx) => (
          <div
            key={idx}
            className="p-5 bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <div className="mb-2">
              <h4 className="text-lg font-semibold text-gray-800">{company.name}</h4>
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                {company.symbol}
              </span>
            </div>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Revenue:</span>{" "}
              <span className="text-green-700 font-semibold">{company.revenue}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <p className="text-blue-600 text-lg animate-pulse">Loading sector data...</p>
      </div>
    );
  }

  if (error || !sector) {
    return (
      <div className="flex justify-center items-center h-screen px-4">
        <p className="text-red-600 text-2xl font-semibold">{error || "Sector not found"}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 bg-blue-50 rounded-xl shadow-xl border 
    border-gray-200 mb-10">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
        {sector.sectorName} Sector
      </h1>

      <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        Discover a deep dive into the {sector.sectorName} industry, including key players,
        market insights, and opportunities. Make smarter investment and business decisions.
      </p>

      {/* Overview Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b pb-2 border-blue-200">
          Sector Overview
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">{sector.sectorDesc}</p>
      </section>

      {/* Market Cap Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-blue-200">
          Market Capitalization Breakdown
        </h2>

        {["large", "mid", "small"].map((type) => {
          const category = sector.marketCaps?.[type];
          if (!category || !category.companies?.length) return null;

          const title = `${type.charAt(0).toUpperCase() + type.slice(1)} Cap Companies`;
          return renderCompanies(category, title, type);
        })}
      </section>
    </div>
  );
}

export default SectorDetailedPage;
