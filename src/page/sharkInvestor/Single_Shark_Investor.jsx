import React from 'react';
import { useNavigate } from 'react-router-dom';

function Single_Shark_Investor({ imageUrl, sharkName, netWorth }) {

  const nav = useNavigate()

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300">
      <img src={imageUrl} alt="Investor" 
      className="flex w-[355px] h-44 pt-1 rounded-t-lg justify-center items-center object-contain" />
      
      <div className="p-2">
        <p className="text-gray-700 mb-3 text-center text-xl font-semibold ">{sharkName}</p>
        <p className="text-gray-700 mb-3 text-center text-xl font-semibold ">{netWorth} Crore</p>
        {/* <p className="text-gray-700 text-sm mb-8">{description}</p> */}
        <a
          onClick={() => nav(`/shark-investor/${sharkName}`)}
          className="flex text-blue-500 font-semibold hover:bg-blue-200 transition items-center 
          text-center justify-center border-2 border-blue-500 px-2 py-2 rounded-md mt-8 cursor-pointer"
        >
          View Holdings →
        </a>
      </div>
    </div>
  );
}

export default Single_Shark_Investor;
