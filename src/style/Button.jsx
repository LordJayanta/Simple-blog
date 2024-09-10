import React from 'react'

const Button = ({
  children,
  className = '',
  fill = false,
  rounded = 'rounded-md',
  ...props
}) => {
  return (
    <button
      className={`
        ${className}
        px-5 py-1.5 border border-black transition-all font-semibold
        ${rounded}
        ${fill ? 'text-white bg-black hover:bg-zinc-800' : 'text-black bg-transparent hover:bg-black hover:text-white'}
      `}
      {...props}>
      {children}
    </button>
  )
}

export default Button
