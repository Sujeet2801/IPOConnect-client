import React from 'react'

function IPONewsAnalysis() {
  return (
    <div className='flex flex-col md:flex-row gap-8'>

      <div className='bg-white shadow-lg w-[400px] h-64 px-8 py-4 
        bg-gradient-to-b from-blue-400 to-blue-200 text-gray-900'>
        <h1 className='mb-5 font-bold'>IPO News</h1>
        <div className='mb-5'>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>29 Dec, 2:48PM</p>
        </div>
        <div>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>29 Dec, 2:48PM</p>
        </div>
      </div>

      <div className='bg-white shadow-lg w-[400px] h-64 px-8 py-4 flex-row 
      gap-12 bg-gradient-to-b from-blue-400 to-blue-200 text-gray-900'>
        <div>
          <h1 className='font-bold mb-5'>IPO Analysis</h1>
        </div>
        <div className=' mb-2'>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>29 Dec, 2:48PM</p>
        </div>
        <div className=' mb-2'>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>29 Dec, 2:48PM</p>
        </div>
        <div>
          <p>Brainbees Solutions files DRHP with SEBI</p>
          <p>29 Dec, 2:48PM</p>
        </div>
      </div>

    </div>
  )
}

export default IPONewsAnalysis