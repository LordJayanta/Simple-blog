import React, { forwardRef, useId } from 'react'
import { SlCloudUpload } from "react-icons/sl";

const InputFile = ({ className }, ref) => {
    const id = useId()
    return (
        <label
            htmlFor={id}
            className='my-5 text-gray-500 bg-white font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 cursor-pointer mx-auto hover:text-blue-500 hover:border-blue-500'
        >
            <SlCloudUpload className='w-11 h-11'/>
            <span>Uppload File</span>
            <input
                ref={ref}
                type="file"
                id={id}
                className={`hidden`}
            />
            <p className="text-xs"
            >PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
        </label>
    )
}

export default forwardRef(InputFile)
