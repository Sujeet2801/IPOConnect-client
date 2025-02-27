import React from 'react'
import { useNavigate } from 'react-router-dom'


function HeaderLogo() {

  const nav = useNavigate()
  return (
    <button className=' text-xl font-bold cursor-pointer'
    onClick={() => nav("/")}>IPOConnect</button>
  )
}

export default HeaderLogo