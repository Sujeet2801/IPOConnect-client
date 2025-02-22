import React from 'react'
import FooterLinks from './FooterLinks'
import FooterSocialIcon from './FooterSocialIcon'

function FooterMain() {
  return (
    <div className='flex-row justify-between md:mx-20 gap-12'>
        <FooterLinks/>
        <FooterSocialIcon/>
    </div>
  )
}

export default FooterMain