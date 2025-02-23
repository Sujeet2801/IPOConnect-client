import React, { useState } from "react";
import Image from "../images/carrers_photo.png";

const data = [
  { imageUrl: Image, heading: "Top Reasons for Life Insurance Claim Rejection", Date: "12 Feb 2025", Time: "3:45 PM" },
  { imageUrl: Image, heading: "Heading 2", Date: "13 Feb 2025", Time: "4:30 PM" },
  { imageUrl: Image, heading: "Heading 3", Date: "14 Feb 2025", Time: "2:15 PM" },
  { imageUrl: Image, heading: "Heading 4", Date: "15 Feb 2025", Time: "1:00 PM" },
  { imageUrl: Image, heading: "Heading 5", Date: "16 Feb 2025", Time: "5:10 PM" },
  { imageUrl: Image, heading: "Heading 6", Date: "17 Feb 2025", Time: "6:30 PM" },
  { imageUrl: Image, heading: "Heading 7", Date: "18 Feb 2025", Time: "4:00 PM" },
  { imageUrl: Image, heading: "Heading 8", Date: "19 Feb 2025", Time: "2:45 PM" },
  { imageUrl: Image, heading: "Heading 9", Date: "20 Feb 2025", Time: "7:10 PM" },
  { imageUrl: Image, heading: "Heading 10", Date: "21 Feb 2025", Time: "8:20 AM" },
  { imageUrl: Image, heading: "Heading 11", Date: "22 Feb 2025", Time: "3:30 PM" },
  { imageUrl: Image, heading: "Heading 12", Date: "23 Feb 2025", Time: "10:00 AM" },
  { imageUrl: Image, heading: "Heading 13", Date: "24 Feb 2025", Time: "11:15 AM" },
  { imageUrl: Image, heading: "Heading 14", Date: "25 Feb 2025", Time: "1:45 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
  { imageUrl: Image, heading: "Heading 15", Date: "26 Feb 2025", Time: "6:50 PM" },
];

const itemsPerPage = 12;

function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the current 12 items based on the selected page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-12 mt-10">
      <div className="text-3xl text-center font-semibold">IPOConnect Blog</div>

      {/* Blog Grid */}
      <div className="grid grid-cols-3 gap-5 mt-16">
        {currentItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-md flex flex-col justify-center items-center gap-2">
            <img src={item.imageUrl} alt={`Blog ${index + 1}`} className="w-60 h-auto rounded-md bg-blue-400" />
            <p className="font-medium mt-2 mb-4 text-center text-[14px]">{item.heading}</p>
            <div className="flex gap-5">
              <p className="text-gray-600">{item.Date}</p>
              <p className="text-gray-600">{item.Time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`mx-1 px-4 py-2 border rounded-md 
                ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
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
