import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllSectors } from "../../services/api.js";
import { icons } from "../../constant/icons.js";
import Loader from "../../utility/Loader.jsx";

function SectorData() {
  const navigate = useNavigate();
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllSectors()
      .then((response) => {
        console.log(response.data.data.existingSector);
        setSectors(response.data.data.existingSector);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        console.error("Failed to fetch sectors:", err);
        setError("Failed to load sectors.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader message="Loading sectors..." />;

  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6">
      {/* Heading and Tagline */}
      <div className="text-center mb-8">
        <h2
          className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 
        via-pink-500 to-blue-500 bg-clip-text cursor-pointer hover:scale-105 
        transition-transform duration-300 mb-4"
        >
          Industry Sectors
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          " Explore the diverse sectors of the market, their key players, and
          the potential opportunities they offer. Click on any sector to dive
          deeper into the details and gain valuable insights. "
        </p>
      </div>

      {error ? (
        <div className="text-center text-red-500 mt-56">{error}</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const IconComponent = icons[sector.icon]?.icon;

            const iconClass =
              icons[sector.icon]?.className || "text-gray-500 text-3xl";

            return (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md flex flex-col items-center text-center 
              hover:shadow-xl transition duration-300
              bg-gradient-to-b from-blue-300 to-white transform hover:scale-105"
              >
                {/* <div>
                {IconComponent ? (
                  <IconComponent className={iconClass} />
                ) : (
                  <FaIndustry className="text-gray-400 text-3xl" />
                )}
              </div> */}

                <div className="text-lg font-semibold mt-2">
                  {sector.sectorName}
                </div>
                <div className="text-gray-800 mt-3">{sector.sectorDesc}</div>

                <div className="mt-3 font-medium text-blue-700 flex gap-8">
                  <div>
                    <p className=" text-black">Large</p>
                    {sector.marketCaps?.large?.companies?.length || 0}
                  </div>

                  <div>
                    <p className=" text-black">Mid</p>
                    {sector.marketCaps?.mid?.companies?.length || 0}
                  </div>

                  <div>
                    <p className=" text-black">Small</p>
                    {sector.marketCaps?.small?.companies?.length || 0}
                  </div>
                </div>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md 
                hover:bg-blue-700 transition duration-200"
                  onClick={() =>
                    navigate(
                      `/sector/${sector.sectorName.replace(/\s+/g, "-")}`
                    )
                  }
                >
                  Details
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SectorData;
