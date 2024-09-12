import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({
  children,
  type = 'button',
  className = '',
  fill = false,
  rounded = 'rounded-md',
  to,
  ...props
}) => {

  if (to) {
    return (
      <NavLink to={to}>
        <button
          className={`
          ${className}
          px-5 py-1.5 border border-black transition-all font-semibold
          ${rounded}
          ${fill ? 'text-white bg-black hover:bg-blue-900' : 'text-black bg-transparent hover:bg-black hover:text-white'}
        `}
          type={type}
          {...props}>
          {children}
        </button>
      </NavLink>
    )
  }
  else {
    return (
      <button
        className={`
        ${className}
        px-5 py-1.5 border border-black transition-all font-semibold
        ${rounded}
        ${fill ? 'text-white bg-black hover:bg-blue-900' : 'text-black bg-transparent hover:bg-black hover:text-white'}
      `}
        type={type}
        {...props}>
        {children}
      </button>
    )
  }
}

export default Button
