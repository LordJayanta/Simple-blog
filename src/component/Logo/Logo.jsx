import React from 'react'

const Logo = ({className='text-xl'}) => {
  return (
    <span className={`${className}`}>
      <span>Simple</span>
      <span className='font-bold text-blue-500'>Blog</span>
    </span>
  )
}

export default Logo
