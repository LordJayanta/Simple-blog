import React from 'react'

const SideImageContainer = ({
  children,
  className,
  imageUrl = './signin-image.webp',
  imageBGColor = '#000842',
  ...props
}) => {
  return (
    <div className={`${className} mx-auto lg:h-[80vh] w-full flex flex-col lg:flex-row lg items-center justify-between p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md`}>
      <div className='max-w-[50%] w-full'>{children}</div>
      <div className='h-full'>
        <img
          src={imageUrl}
          className={`h-full rounded-xl p-8 lg:p-12`}
          style={{
            backgroundColor: imageBGColor
          }}
        />
      </div>
    </div>
  )
}

export default SideImageContainer
