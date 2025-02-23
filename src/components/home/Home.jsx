import React from 'react'
import UpcomingIPO from './UpcomingIPO'
import Ongoing from './Ongoing'
// import Newlisted from './Newlisted'
import IPONewsAnalysis from './IPONewsAnalysis'
import FAQ from './FAQ'
import Ad from './Ad'

function Home() {
  return (
    <div className='flex-row gap-12 mx-12 space-y-8'>
        <UpcomingIPO/>
        <Ad/>
        <Ongoing/>
        {/* <Newlisted/> */}
        <IPONewsAnalysis/>
        <FAQ/>
    </div>
  )
}

export default Home