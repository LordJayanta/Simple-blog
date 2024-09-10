import React, { forwardRef, useId } from 'react'


const Input = ({
    label,
    labelClass,
    type = 'text',
    placeholder,
    className,
    ...props
}, ref) => {
    const id = useId()
    return (
        <div className='my-5'>
            {label && <label
                htmlFor={id}
                className={`${labelClass} block w-full mb-2 text-xs`}
            >{label}</label>}
            <input
                id={id}
                type={type}
                ref={ref}
                placeholder={placeholder}
                className={`${className} block w-full px-2 py-3 border-b text-sm focus:outline-none border-gray-300 focus:border-blue-600`}
                {...props}
            />
        </div>
    )
}

// export default Input
export default forwardRef(Input)
