import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'

function FooterSocialIcon() {
  return (
    <div className=' flex-row md:flex gap-24 mt-8 mx-10'>
        <FooterLeft/>
        <FooterRight/>
    </div>
  )
}

export default FooterSocialIcon