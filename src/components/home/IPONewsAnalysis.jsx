import React from 'react';

function IPONewsAnalysis() {
  const data = [
    {
      title: "Brainbees Solutions files DRHP with SEBI",
      date: "29 Dec, 2:48PM",
    },
    {
      title: "FirstCry IPO aims to raise ₹1800 crore",
      date: "28 Dec, 11:20AM",
    },
    {
      title: "Ixigo IPO reopens with updated filings",
      date: "27 Dec, 4:00PM",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 py-10 bg-gradient-to-br from-indigo-50
    to-blue-100 min-h-screen">
      
      {/* IPO News */}
      <div className="flex-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6">📰 IPO News</h1>
        <div className="space-y-5">
          {data.slice(0, 2).map((item, i) => (
            <div key={i} className="bg-white bg-opacity-90 p-4 rounded-xl shadow hover:shadow-xl transition">
              <p className="text-md font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IPO Analysis */}
      <div className="flex-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6">📊 IPO Analysis</h1>
        <div className="space-y-5">
          {data.map((item, i) => (
            <div key={i} className="bg-white bg-opacity-90 p-4 rounded-xl shadow hover:shadow-xl transition">
              <p className="text-md font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IPONewsAnalysis;
