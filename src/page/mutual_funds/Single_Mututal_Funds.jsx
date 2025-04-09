import React from 'react';
import Image from "../../../public/images/ipo_image.png";

function Single_Mututal_Funds({ image, companyName, aum, expense, cagr, performance, risk, composition }) {
  return (
    <div className='mt-5 bg-white rounded-lg shadow-lg w-[900px]'>
      <div className='flex gap-8'>
        <div className='flex-1 bg-gray-300 px-6 py-5 rounded-lg shadow-md'>
          {/* Top Section */}
          <div className='flex items-center gap-6'>
            <img src={Image} alt="" className='w-24 rounded-md shadow-md' />
            <div>
              <h1 className='text-xl font-bold text-gray-900'>{companyName}</h1>
              <div className='flex gap-8 mt-3'>
                <div className='text-center'>
                  <p className='text-gray-600'>AUM</p>
                  <p className='font-bold text-lg'>{aum}</p>
                </div>
                <div className='text-center'>
                  <p className='text-gray-600'>Expense Ratio</p>
                  <p className='font-bold text-lg'>{expense}</p>
                </div>
                <div className='text-center'>
                  <p className='text-gray-600'>5Y CAGR</p>
                  <p className='font-bold text-lg'>{cagr}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='mt-8 space-y-4'>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-800'>Performance</h2>
              <p className='text-gray-700'>{performance}</p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-800'>Risk</h2>
              <p className='text-gray-700'>{risk}</p>
            </div>
            <div className='bg-white p-4 rounded-lg shadow-sm'>
              <h2 className='text-lg font-semibold text-gray-800'>Composition</h2>
              <p className='text-gray-700'>{composition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single_Mututal_Funds;
