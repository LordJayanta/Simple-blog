import React from 'react'
import {Button} from '../index'
import { BsFillInfoCircleFill } from "react-icons/bs";

const Logout = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col items-center'>
      <BsFillInfoCircleFill className='w-14 h-14' fill='red'/>
      {/* <h4 className='text-red-600 text-lg'>Logout</h4> */}
      <h2 className='font-bold mb-5 text-xl'>Are you want to Logout ?</h2>
      <div className='flex gap-3 w-full'>
        <Button className='w-full'>Cancel</Button>
        <Button fill className='w-full'>Logout</Button>
      </div>
      {/* <Button fill>Logout from all Device</Button> */}
    </div>
  )
}

export default Logout
