import React from 'react'
import Single_Mututal_Funds from './Single_Mututal_Funds'

const mutualFundData = [
  { image: "", companyName: "Canara Rob Bluechip Equity Fund", AUM: "Rs 10,816.61 Cr.", expense: "0.5%", cagr: "18.48%", performance: "The fund's annualised performance has been 15.3% since inception.", risk: "The fund has been categorised as Very High by SEBI and has a standard deviation of 9.09% vs its category average of 9.61%", composition: "Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%." },
  
  { image: "", companyName: "Canara Bluechip Equity Fund", AUM: "Rs 10,816.61 Cr.", expense: "0.5%", cagr: "18.48%", performance: "The fund's annualised performance has been 15.3% since inception.", risk: "The fund has been categorised as Very High by SEBI and has a standard deviation of 9.09% vs its category average of 9.61%", composition: "Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%." },
  { image: "", companyName: "Canara Bluechip Equity Fund", AUM: "Rs 10,816.61 Cr.", expense: "0.5%", cagr: "18.48%", performance: "The fund's annualised performance has been 15.3% since inception.", risk: "The fund has been categorised as Very High by SEBI and has a standard deviation of 9.09% vs its category average of 9.61%", composition: "Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%." },
]

function Mutual_Funds_Bottom() {
  return (
    <div className='flex mx-5 mt-8 '>
      <div className=' bg-slate-300 h-96 mt-[54px] rounded-md'>
        <div className='max-w-[400px] bg-slate-300 px-6 py-5 mt-3'>
          {mutualFundData.map((comName, index) => {
            return (
              <ul className='space-y-3 text-gray-700 font-semibold' key={index}>
                <li>{comName.companyName}</li>
              </ul>
            )
          })}
        </div>
      </div>

      <div className='ml-5 mb-8'>
        <div>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>
          Overview of Large Cap Mutual Funds
        </h1>

        </div>
        {mutualFundData.map((fundData, index) => {
          return (
            <div key={index}>
              <Single_Mututal_Funds image={fundData.image} companyName={fundData.companyName} 
              aum={fundData.AUM} expense={fundData.expense} cagr={fundData.cagr} 
              performance={fundData.performance} risk={fundData.risk} 
              composition={fundData.composition} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Mutual_Funds_Bottom