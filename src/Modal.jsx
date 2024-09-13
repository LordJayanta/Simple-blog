import React from "react";
import ReactDOM from 'react-dom'
import { MdClose } from "react-icons/md";

const Modal = ({
    children,
    onOpen,
    onClose,
    className = '',
    custom=false,
    height = '350px',
    width = '400px'
}) => {
    if (!onOpen) return null
    return ReactDOM.createPortal(
        (
            <div className="absolute top-0 left-0 w-full h-screen bg-black/60 flex items-center justify-center">
                <MdClose 
                onClick={onClose}
                className="absolute top-10 right-10 w-10 h-10 hover:text-red-700"
                />
                {custom
                    ? (
                        <div
                            className={className}
                            style={{
                                height: height,
                                width: width
                            }}
                        >{children} custom</div>
                    )
                    : (
                        <div
                            className={`${className} bg-gray-200 text-zinc-800 rounded-md border shadow-md`}
                            style={{
                                height: height,
                                width: width
                            }}
                        >{children}</div>
                    )
                }
            </div>
        ),
        document.querySelector('#root-modal')
    )
}

export default Modal