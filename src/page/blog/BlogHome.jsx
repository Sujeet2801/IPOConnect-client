import React, { useState } from "react";
import Image from "../../images/life_insurance_ claim_rejection.webp";
import Banking_frauds from "../../images/banking_frauds.webp";
import Popular_finance from "../../images/popular_finance.webp";
import Gandhar_Oil from "../../images/Gandhar_Oil.webp";
import IREDA_IPO from "../../images/IREDA_IPO.webp";

const data = [
  { imageUrl: Image, heading: "Top Reasons for Life Insurance Claim Rejection", Date: "12 Feb 2025", Time: "3:45 PM" },
  { imageUrl: Banking_frauds, heading: "Types of Banking Frauds - How to Prevent Them", Date: "13 Feb 2025", Time: "4:30 PM" },
  { imageUrl: Popular_finance, heading: "Popular Finance Podcasts in India", Date: "14 Feb 2025", Time: "2:15 PM" },
  { imageUrl: Gandhar_Oil, heading: "Gandhar Oil Refinery IPO -  Everything You Must Know", Date: "15 Feb 2025", Time: "1:00 PM" },
  { imageUrl: IREDA_IPO, heading: "IREDA IPO - Everything You Must Know", Date: "16 Feb 2025", Time: "5:10 PM" },
  { imageUrl: Image, heading: "Tata Technologies IPO -  Everything You Must Know", Date: "17 Feb 2025", Time: "6:30 PM" },
  { imageUrl: Image, heading: "Best Pet Insurance Poilices in India", Date: "18 Feb 2025", Time: "4:00 PM" },
  { imageUrl: Image, heading: "Best Fintech Stocks in India", Date: "19 Feb 2025", Time: "2:45 PM" },
  { imageUrl: Image, heading: "Best Stocks under Rs.5 in India", Date: "20 Feb 2025", Time: "7:10 PM" },
  { imageUrl: Image, heading: "Heading 10", Date: "21 Feb 2025", Time: "8:20 AM" },
];

const itemsPerPage = 9;

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-5 mt-16">
        {currentItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white 
          shadow-md flex flex-col justify-center items-center gap-2">

            <img src={item.imageUrl} alt={`Blog ${index + 1}`} 
            className="w-60 h-auto rounded-md bg-blue-400" />

            <p className="font-medium mt-2 mb-4 text-center text-[14px]">
              {item.heading}</p>
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
