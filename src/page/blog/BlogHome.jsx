import React, { useState, useEffect } from "react";
import { blogData } from "../../data/data.js";

const itemsPerPage = 9;

function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Get the current 9 items based on the selected page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogData.slice(startIndex, startIndex + itemsPerPage);

  // Reset current page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [blogData]);

  return (
    <div className="mx-12 mt-10">
      <div className=" text-3xl font-bold mx-auto text-center
        bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform duration-300">
        Blog
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-md flex flex-col 
            justify-center items-center gap-2"
          >
            <img
              src={item.imageUrl}
              alt={`Blog ${index + 1}`}
              className="w-60 h-auto rounded-md bg-blue-400"
            />

            <p className="font-medium mt-2 mb-1 text-center text-[14px]">
              {item.heading}
            </p>
            <div className="flex gap-5">
              <p className="text-gray-600">{item.Date}</p>
              <p className="text-gray-600">{item.Time}</p>
            </div>

            <a
              href={item.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 mt-3 px-3 py-1 text-white rounded-md hover:bg-blue-600"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-4 py-2 border rounded-md ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogHome;
