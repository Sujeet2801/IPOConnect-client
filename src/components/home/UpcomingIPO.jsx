import React from 'react'
import { DiGithubFull } from "react-icons/di";

const IPODetails = {
    heading: "Nova Agritech Ltd.",
}

function UpcomingIPO() {
    return (
        <div className=''>
            {/* Top */}
            <div className=''>
                <div className='flex justify-between mt-2'>
                    <h1 className=' text-xl'>Upcoming</h1>

                    <div className='flex items-center'>
                        <button className='bg-blue-600 text-white px-2 py-1 rounded-md'>View All</button>
                    </div>

                </div>
                <p className=' opacity-70 '>Companies that have filed for an IPO with SEBI. Few details might be
                    disclosed by the companies later on.
                </p>

            </div>

            {/* Bottom */}
            <div className=' flex gap-5 mt-16'>

                <div className='bg-white px-2 py-2 shadow-lg'>

                    <p className=' text-blue-500 text-center'>{IPODetails.heading}</p>
                    <div className=' text-5xl'>
                        <DiGithubFull />
                    </div>

                    <div className=' grid grid-cols-3 gap-5'>
                        <div>
                            <p className=' opacity-40'>PRICE BAND </p>
                            <p>RS 39-41</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>OPEN </p>
                            <p>2024-01-22</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>CLOSE </p>
                            <p>2024-0124</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>ISSUE SIZE </p>
                            <p>143.81Cr.</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>ISSUE TYPE </p>
                            <p>Book Built</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>LISTING DATE </p>
                            <p>2024-01-30</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white px-2 py-2 shadow-lg'>

                    <p className=' text-blue-500 text-center'>{IPODetails.heading}</p>
                    <div className=' text-5xl'>
                        <DiGithubFull />
                    </div>

                    <div className=' grid grid-cols-3 gap-5'>
                        <div>
                            <p className=' opacity-40'>PRICE BAND </p>
                            <p>RS 39-41</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>OPEN </p>
                            <p>2024-01-22</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>Close </p>
                            <p>2024-0124</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>ISSUE SIZE </p>
                            <p>143.81Cr.</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>ISSUE TYPE </p>
                            <p>Book Built</p>
                        </div>
                        <div>
                            <p className=' opacity-40'>LISTING DATE </p>
                            <p>2024-01-30</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UpcomingIPO