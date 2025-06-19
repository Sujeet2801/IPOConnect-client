import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSharkInvestorByName } from "../../services/api.js";
import { InfoCard } from "../../utility/InfoCard.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import RequireLoginMessage from "../../utility/RequireLoginMessage.jsx";

const SharkDetailedPage = () => {
  let { sharkName } = useParams();
  sharkName = sharkName.replace(/\s+/g, "-");

  const [shark, setShark] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchShark = async () => {
      try {
        const response = await fetchSharkInvestorByName(sharkName);
        setShark(response.data.data);
      } catch (err) {
        setError("Investor not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchShark();
  }, [sharkName]);

  if (loading)
    return <div className="text-center mt-10 text-lg">Loading...</div>;

  if (!user) {
    <RequireLoginMessage page="Shark detailed page" />;
  }

  if (error || !shark)
    return (
      <div className="text-center text-red-600 mt-10 text-xl">{error}</div>
    );

  return (
    <div>
      {user ? (
        <div
          className="min-h-screen bg-gradient-to-tr from-purple-200 via-blue-100 to-purple-100 py-8 
          px-6 lg:px-20"
        >
          {/* Profile Card */}
          <div
            className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row 
            items-center gap-10"
          >
            <img
              src={shark.imageUrl}
              alt={shark.sharkName}
              className="w-44 h-44 rounded-full object-cover border-4 border-purple-300 shadow-lg"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-purple-800">
                {shark.sharkName}
              </h1>
              <p className="text-md text-gray-500 mt-2">{shark.description}</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-5 text-lg text-gray-700 font-medium">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  💰 Net Worth:{" "}
                  <span className="font-bold">{shark.netWorth} Cr</span>
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  📁 Portfolio:{" "}
                  <span className="font-bold">{shark.portfolio}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard
              title="📊 Sector Focus"
              items={shark.sectorFocus?.tech}
              bg="bg-pink-50"
            />
            <InfoCard
              title="💼 Notable Investments"
              items={shark.notableInvestments?.companies}
              bg="bg-yellow-50"
            />
            <InfoCard
              title="🏆 Achievements"
              items={shark.achievements?.achievement}
              bg="bg-green-50"
            />
            <InfoCard
              title="🚀 Stage Focus"
              items={Object.keys(shark.stageFocus || {}).filter(
                (stage) => shark.stageFocus[stage]
              )}
              bg="bg-blue-50"
            />
          </div>

          {/* Social Links */}
          <div className="mt-10 text-center space-x-4">
            {shark.website && (
              <a
                href={shark.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-indigo-100 text-indigo-800 font-semibold 
            rounded-full hover:bg-indigo-200 transition"
              >
                🌐 Website
              </a>
            )}
            {shark.smLink?.linkedin && (
              <a
                href={shark.smLink.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-blue-100 text-blue-800 font-semibold 
            rounded-full hover:bg-blue-200 transition"
              >
                🔗 LinkedIn
              </a>
            )}
            {shark.smLink?.twitter && (
              <a
                href={shark.smLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-sky-100 text-sky-800 font-semibold 
            rounded-full hover:bg-sky-200 transition"
              >
                🐦 Twitter
              </a>
            )}
          </div>
        </div>
      ) : (
        <RequireLoginMessage page="Shark detailed page" />
      )}
    </div>
  );
};

export default SharkDetailedPage;
