import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchIposByStatus } from '../../services/api.js';

function Ongoing() {
  const nav = useNavigate();
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOngoingIPOs = async () => {
      try {
        const res = await fetchIposByStatus("ongoing");
        setIpos(res.data.data.ipos.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch ongoing IPOs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadOngoingIPOs();
  }, []);

  return (
    <section className="bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 
    px-6 py-8 rounded-xl shadow-lg text-white">
      {/* Section Banner */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md">🚀 Ongoing IPOs</h1>
        <p className="mt-2 text-lg opacity-90 max-w-2xl mx-auto">
          Stay updated with the latest IPO launches. Track the IPO process, from issue size to listing dates.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">Real-Time Updates</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">SEBI-Approved Listings</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">Invest Smartly</span>
        </div>
      </div>

      {/* Header and CTA */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold">Top 3 Ongoing IPOs</h2>
        <button
          onClick={() => nav("/ongoing")}
          className="mt-3 sm:mt-0 bg-white text-purple-600 font-semibold px-4 py-2 
          rounded-md hover:bg-purple-100 transition"
        >
          View All
        </button>
      </div>

      {/* IPO Cards */}
      {loading ? (
        <p className="text-center text-white text-lg">Loading IPOs...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {ipos.map((ipo, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-5 rounded-xl shadow-md w-full md:w-1/3
              hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <p className="text-center font-bold text-purple-600 text-lg">{ipo.companyName}</p>
              <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                <div>
                  <p className="text-gray-400 text-xs">PRICE BAND</p>
                  <p className="font-medium">{ipo.priceBand}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">OPEN</p>
                  <p className="font-medium">{ipo.openDate.slice(0, 10)}</p>

                </div>
                <div>
                  <p className="text-gray-400 text-xs">CLOSE</p>
                  <p className="font-medium">{ipo.closeDate.slice(0, 10)}</p>

                </div>
                <div>
                  <p className="text-gray-400 text-xs">ISSUE SIZE</p>
                  <p className="font-medium">{ipo.issueSize}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">ISSUE TYPE</p>
                  <p className="font-medium">{ipo.issueType}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">LISTING DATE</p>
                  <p className="font-medium">{ipo.listingDate.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Ongoing;
