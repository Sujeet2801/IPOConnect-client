import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ongoingIPOData } from '../../constant/data.js';

function Ongoing() {

    const nav = useNavigate()
    return (
        <div className='bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 px-5 pt-5 rounded-md'>

            <div className=''>
                <div className='flex justify-between'>
                    <h1 className="text-2xl font-semibold">Ongoing IPOs</h1>
                    <button className='bg-blue-500 text-white px-3 py-2 rounded-md
                    hover:bg-blue-600'
                        onClick={() => nav("/v1/api/users/ongoing")}>
                        View All
                    </button>
                </div>
                <p className='opacity-70'>
                    Companies that have filed for an IPO with SEBI. Few details might be
                    disclosed by the companies later on.
                </p>
            </div>

            {/* IPO Cards */}
            <div className='flex flex-col md:flex-row gap-5 mt-5 pb-5'>
                {ongoingIPOData.map((ipo, index) => (
                    (index < 3) ? (
                        <div key={index} className='bg-white px-4 py-4 shadow-lg rounded-md w-full md:w-1/3'>
                            <p className='text-blue-500 text-center font-semibold'>{ipo.heading}</p>

                            <div className='grid grid-cols-2 gap-4 text-sm mt-8'>
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
                    ) : ("")
                ))}
            </div>
        </div>
    );
}

export default Ongoing;
