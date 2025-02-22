import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function FooterLeft() {
  return (
    <div className='flex flex-col gap-16'>
        <div className='flex gap-3'>
          <FaXTwitter />  
          <FiGithub />
          <FiGithub />
          <FiGithub />
          <FiGithub />
        </div>

        <div className=' text-xl font-bold'>IPO Connect </div>
        <div className=' text-xl text-red-600'>#startupindia </div>
    </div>
  )
}

export default FooterLeft