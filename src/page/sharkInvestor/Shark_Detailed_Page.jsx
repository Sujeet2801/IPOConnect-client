import React from 'react';
import { useParams } from 'react-router-dom';
import { sharkInvestorsData } from '../../constant/sharkinvestorData.js';

function Shark_Detailed_Page() {
  const { sharkInvestor } = useParams();
  const sharkKey = sharkInvestor ? sharkInvestor.toLowerCase() : '';
  const shark = sharkInvestorsData.find(
    (shark) => shark.name.toLowerCase().replace(/\s+/g, '-') === sharkKey
  );

  if (!shark) {
    return <div className="text-center text-red-600 mt-10 text-xl">Investor not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="bg-gray-200 shadow-xl rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
        <img
          src={shark.image}
          alt={shark.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800">{shark.name}</h1>
          <p className="text-sm text-gray-500 mt-2">{shark.background}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 text-lg text-gray-700 font-medium">
            <div>
              💰 Net Worth: <span className="font-semibold text-green-600">{shark.netWorth}</span>
            </div>
            <div>
              📁 Portfolio: <span className="font-semibold text-blue-600">{shark.portfolioCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className=" bg-gray-300 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-8 rounded-lg">
        <InfoCard title="Sector Focus" items={shark.sectorFocus} />
        <InfoCard title="Stage Focus" items={shark.stageFocus} />
        <InfoCard title="Notable Investments" items={shark.notableInvestments} />
        <InfoCard title="Achievements" items={shark.achievements} />
      </div>

      {/* Social Links */}
      <div className="mt-10 text-center space-x-4">
        {shark.website && (
          <a
            href={shark.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200 transition"
          >
            Website 🌐
          </a>
        )}
        {shark.linkedIn && (
          <a
            href={shark.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200 transition"
          >
            LinkedIn 🔗
          </a>
        )}
        {shark.twitter && (
          <a
            href={shark.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200 transition"
          >
            Twitter 🐦
          </a>
        )}
      </div>
    </div>
  );
}

// Reusable Info Card Component
const InfoCard = ({ title, items }) => (
  <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
    <h2 className="text-xl font-semibold border-b pb-2 mb-3 text-gray-800">{title}</h2>
    <ul className="space-y-2 text-gray-600 text-sm">
      {items.map((item, index) => (
        <li key={index} className="pl-2 border-l-4 border-blue-300">{item}</li>
      ))}
    </ul>
  </div>
);

export default Shark_Detailed_Page;
