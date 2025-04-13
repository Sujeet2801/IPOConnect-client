import React, { useState } from "react";
import IPOCard from "../../utility/IPOCard.jsx";
import { ongoingIPOData } from "../../constant/data.js";

const itemsPerPage = 12;

function Ongoing_IPOs_Page() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ongoingIPOData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage

  const currentItems = ongoingIPOData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="p-6 rounded-lg shadow-lg mx-16 border border-black border-5 mt-4">

      <div>
        <img src="" alt="" />
      </div>
      {/* Header Section */}
      <div className="flex items-center mx-auto">

        <h1 className=" text-3xl font-bold mx-auto
        bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform duration-300">Ongoing IPOs</h1>
      </div>

      {/* IPO Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-6 mt-6"
      >
        {currentItems.map((item, index) => (
          <div key={index}>
            <IPOCard key={index} data={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 mt-2 px-4 py-2 border rounded-md 
                ${currentPage === i + 1 ? "bg-blue-500" : "bg-gray-200"}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Ongoing_IPOs_Page;
