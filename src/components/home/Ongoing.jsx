import React from 'react';
import { DiGithubFull } from "react-icons/di";
import { useNavigate } from 'react-router-dom';


const IPODetails = [
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

function Ongoing() {

    const nav = useNavigate()
    return (
        <div className='bg-blue-300 px-5 py-5 rounded-md'>
            
            <div className=''>
                <div className='flex justify-between mb-5'>
                    <h1 className="text-2xl font-semibold">Ongoing IPOs</h1>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded-md
                    hover:bg-blue-600'
                    onClick={()=> nav("/ongoing")}>
                        View All
                    </button>
                </div>
                <p className='opacity-70'>
                    Companies that have filed for an IPO with SEBI. Few details might be
                    disclosed by the companies later on.
                </p>
            </div>

            {/* IPO Cards */}
            <div className='flex flex-col md:flex-row gap-5 mt-10'>
                {IPODetails.map((ipo, index) => (
                    <div key={index} className='bg-white px-4 py-4 shadow-lg rounded-md w-full md:w-1/3'>
                        <p className='text-blue-500 text-center font-semibold'>{ipo.heading}</p>
                        <div className='text-5xl flex justify-center my-3'>
                            <DiGithubFull />
                        </div>
                        <div className='grid grid-cols-2 gap-4 text-sm'>
                            <div>
                                <p className='opacity-40'>PRICE BAND</p>
                                <p>{ipo.priceBand}</p>
                            </div>
                            <div>
                                <p className='opacity-40'>OPEN</p>
                                <p>{ipo.openDate}</p>
                            </div>
                            <div>
                                <p className='opacity-40'>CLOSE</p>
                                <p>{ipo.closeDate}</p>
                            </div>
                            <div>
                                <p className='opacity-40'>ISSUE SIZE</p>
                                <p>{ipo.issueSize}</p>
                            </div>
                            <div>
                                <p className='opacity-40'>ISSUE TYPE</p>
                                <p>{ipo.issueType}</p>
                            </div>
                            <div>
                                <p className='opacity-40'>LISTING DATE</p>
                                <p>{ipo.listingDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ongoing;
