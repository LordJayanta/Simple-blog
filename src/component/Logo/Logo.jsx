import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({className='text-xl', to='/'}) => {
  return (
    <NavLink to={to} className={`${className}`}>
      <span>Simple</span>
      <span className='font-bold text-blue-500'>Blog</span>
    </NavLink>
  )
}

export default Logo
