import React from 'react'
import Single_Shark_Investor from './Single_Shark_Investor'
import { sharkInvestorData } from '../../data/data.js'

function All_Shark_Investor() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mx-8 gap-5'>
        {sharkInvestorData.map((data, index) => {
          return (
            <div key={index} className='flex'>
                <Single_Shark_Investor {...data}/>
            </div>
          )
        })}
    </div>
  )
}

export default All_Shark_Investor