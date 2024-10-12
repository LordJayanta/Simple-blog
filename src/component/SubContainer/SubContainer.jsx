import React from 'react'

const SubContainer = ({children, className, heading}) => {
  return (
    <div 
    className={`${className} bg-zinc-200 w-full rounded-md p-3 shadow-md border border-zinc-400`}
    >
      {heading && <h3 className='text-xl font-semibold pb-1 mb-2 w-full border-b border-zinc-400'>{heading}</h3>}
      {children}
      </div>
  )
}

export default SubContainer
