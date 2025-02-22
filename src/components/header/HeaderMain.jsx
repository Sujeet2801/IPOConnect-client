import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderLinks from './HeaderLinks'
import HeaderLogin from './HeaderLogin'

function HeaderMain() {
  return (
    <div className='flex justify-around py-3 bg-white'>
        <HeaderLogo/>
        <HeaderLinks/>
        <HeaderLogin/>
    </div>
  )
}

export default HeaderMain