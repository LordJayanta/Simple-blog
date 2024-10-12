import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({ className = 'text-xl', to = '/' }) => {
  return (
    <NavLink to={to} className={`${className}`}>
      {/* <span>Simple</span>
      <span className='font-bold text-blue-500'>Blog</span> */}
      <img
        src="./logo.svg"
        alt="simple_logo"
        className='w-20 mt-4'
      />
    </NavLink>
  )
}

export default Logo
