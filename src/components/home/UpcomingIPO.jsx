import React from "react";
import { DiGithubFull } from "react-icons/di";
import { useNavigate } from "react-router-dom";

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
];

const IPOCard = ({ data }) => {
  return (
    <div className="bg-white px-4 py-5 shadow-md rounded-lg w-full 
    md:w-[300px] flex flex-col items-center">
      <p className="text-blue-500 text-lg font-semibold">{data.heading}</p>

      <div className="text-5xl text-gray-700 my-2">
        <DiGithubFull />
      </div>

      <div className="grid grid-cols-2 gap-4 w-full text-sm">
        <div>
          <p className="text-gray-400">PRICE BAND</p>
          <p>{data.priceBand}</p>
        </div>
        <div>
          <p className="text-gray-400">OPEN</p>
          <p>{data.openDate}</p>
        </div>
        <div>
          <p className="text-gray-400">CLOSE</p>
          <p>{data.closeDate}</p>
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
          <p>{data.listingDate}</p>
        </div>
      </div>
    </div>
  );
};

function UpcomingIPO() {

  const nav = useNavigate()
  
  return (
    <div className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 
    p-6 rounded-lg shadow-lg">
      
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Upcoming IPOs</h1>
        <button className="bg-blue-500 text-white px-4 py-2 
        rounded-md hover:bg-blue-600 transition"
        onClick={() => window.location.href = "/v1/api/users/upcoming"}>
          View All
        </button>
      </div>

      <p className="text-gray-700 mt-2 text-sm">
        Companies that have filed for an IPO with SEBI. 
        Some details may be disclosed later.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-6 mt-6">
        {IPOData.map((ipo, index) => (
          <IPOCard key={index} data={ipo} />
        ))}
      </div>
    </div>
  );
}

export default UpcomingIPO;
