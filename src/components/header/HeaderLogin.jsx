import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

function HeaderLogin() {
  return (
    <div className='flex gap-5'>
        <ol className='hidden md:flex gap-5'>
            <button>Sign In</button> 
            <button className=' bg-blue-500 text-white px-2 py-1 rounded-md'>Sign Up Now</button>
        </ol>

        <div>
            <CgMenuGridO className='text-3xl cursor-pointer'/>
        </div>
    </div>
  )
}

export default HeaderLogin