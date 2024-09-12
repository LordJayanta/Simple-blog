import React from 'react'

function Container({
  children, 
  className='',
  ...props
}) {
  return (
    <div className={`${className} container lg:w-[90%] m-auto`} {...props}>
      {children}
    </div>
  )
}

export default Container
