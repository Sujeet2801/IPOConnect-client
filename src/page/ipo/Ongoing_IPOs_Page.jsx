import React, { useState } from "react";
import IPOCard from "../../components/ipo/IPOCard";

const itemsPerPage = 12;

const IPOData = [
  {
    heading: "Nova Agritech Ltd.",
    priceBand: "Rs 39-40",
    openDate: "2024-01-22",
    closeDate: "2024-01-24",
    issueSize: "143.81 Cr.",
    issueType: "Book Built",
    listingDate: "2024-01-30",
  },
  {
    heading: "XYZ Technologies",
    priceBand: "Rs 50-55",
    openDate: "2024-02-10",
    closeDate: "2024-02-15",
    issueSize: "200.50 Cr.",
    issueType: "Fixed Price",
    listingDate: "2024-02-22",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
  {
    heading: "ABC Corp",
    priceBand: "Rs 100-110",
    openDate: "2024-03-05",
    closeDate: "2024-03-10",
    issueSize: "500.75 Cr.",
    issueType: "Book Built",
    listingDate: "2024-03-18",
  },
];

function Ongoing_IPOs_Page() {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(IPOData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage

  const currentItems = IPOData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="p-6 rounded-lg shadow-lg mx-16
    border border-black border-5 mt-8">

      <div>
        <img src="" alt="" />
      </div>
      {/* Header Section */}
      <div className="flex items-center mx-auto">
        
        <h1 className=" text-3xl font-bold text-center 
        mx-auto text-gray-700">Ongoing IPOs</h1>
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
