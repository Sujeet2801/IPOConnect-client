import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSectorByName } from "../../services/api.js";

function SectorDetailedPage() {
  let { sectorName } = useParams();
  sectorName = sectorName.replace(/-/g, " ")
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

    if (sectorName) {
      fetchSector();
    }
  }, [sectorName]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-600 text-lg">Loading sector data...</p>
      </div>
    );
  }

  if (error || !sector) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-2xl font-semibold">{error || "Sector not found"}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        {sector.sectorName} Industry Overview
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Discover an in-depth look at the {sector.sectorName} industry, including key
        players, market insights, and investment opportunities. Stay updated and
        make informed decisions in the ever-changing market landscape.
      </p>

      {/* Sector Overview */}
      <div className="border-t border-gray-300 pt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sector Overview</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{sector.sectorDesc}</p>
      </div>
    </div>
  );
}

export default SectorDetailedPage;
