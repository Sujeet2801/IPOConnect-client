import React from 'react';

function Single_Shark_Investor({ image, description, viewLink }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300">
      <img src={image} alt="Investor" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <a
          href={viewLink}
          className="text-blue-500 font-semibold hover:text-blue-700 transition"
        >
          View Holdings →
        </a>
      </div>
    </div>
  );
}

export default Single_Shark_Investor;
