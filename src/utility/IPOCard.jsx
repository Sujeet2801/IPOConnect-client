import React from 'react'

function IPOCard({ data }) {
  return (
      <div
        className="bg-white px-4 py-5 mx-auto shadow-md rounded-lg w-full 
      md:w-[300px] flex flex-col items-center "
      >
        <p className="text-blue-500 text-lg font-semibold">{data.companyName}</p>
  
        <div className="grid grid-cols-2 gap-4 w-full text-sm mt-6">
          <div>
            <p className="text-gray-400">PRICE BAND</p>
            <p>{data.priceBand}</p>
          </div>
          <div>
            <p className="text-gray-400">OPEN</p>
            <p>{data.openDate.slice(0, 10)}</p>
          </div>
          <div>
            <p className="text-gray-400">CLOSE</p>
            <p>{data.closeDate.slice(0, 10)}</p>
          </div>
          <div>
            <p className="text-gray-400">ISSUE SIZE</p>
            <p>{data.issueSize}</p>
          </div>
          <div>
            <p className="text-gray-400">ISSUE TYPE</p>
            <p>{data.issueType}</p>
          </div>
          <div>
            <p className="text-gray-400">LISTING DATE</p>
            <p>{data.listingDate.slice(0, 10)}</p>
          </div>
        </div>
      </div>
    );
}

export default IPOCard