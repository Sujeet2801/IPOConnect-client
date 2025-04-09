import React from 'react'
import UpcomingIPO from './UpcomingIPO'
import Ongoing from './Ongoing'
// import Newlisted from './NewListed'
import IPONewsAnalysis from './IPONewsAnalysis'
import FAQ from './FAQ'
import Ad from './Ad'
import Banner from "../../../public/images/ipo_image.png"

function Home() {
  return (
    <div className='flex-row gap-12 mx-12 mt-8 space-y-8'>
      <UpcomingIPO />
      <div className='flex flex-col md:flex-row gap-5'>
        <Ad />
        <img src={Banner} alt="" className='h-[265px] w-[500px] rounded-lg' />
      </div>
      <Ongoing />
      {/* <Newlisted/> */}
      <IPONewsAnalysis />
      <FAQ />
    </div>
  )
}

export default Home