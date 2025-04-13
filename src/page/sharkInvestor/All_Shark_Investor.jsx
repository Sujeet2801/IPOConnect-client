import React from 'react'
import Single_Shark_Investor from './Single_Shark_Investor'
import { sharkInvestorsData } from '../../constant/sharkinvestorData.js'

function All_Shark_Investor() {
  return (
    <div className='mt-5'>
      <div className=" text-3xl font-bold mx-auto text-center bg-gradient-to-r from-blue-500 
      via-pink-500 to-blue-500 text-transparent bg-clip-text cursor-pointer 
      hover:scale-105 transition-transform duration-300">
        Shark Investors
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5
    mx-8 gap-5 justify-center items-center'>

        {sharkInvestorsData.map((data, index) => {
          return (
            <div key={index} className='flex'>

              <Single_Shark_Investor {...data} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default All_Shark_Investor