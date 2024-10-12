import React from 'react'

function Container({
  children, 
  className='',
  ...props
}) {
  return (
    <div className={`${className} container lg:w-[90%] mx-auto`} {...props}>
      {children}
    </div>
  )
}

export default Container
