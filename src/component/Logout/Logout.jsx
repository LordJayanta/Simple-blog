import React from 'react'
import { Button } from '../index'
import { BsFillInfoCircleFill } from "react-icons/bs";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authServise from '../../appwrite/auth';
import { logout } from '../../store/authSlice'

const Logout = ({ cancel }) => {
  const session = useSelector(state => state.auth.session)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='w-full h-full p-5 flex flex-col items-center'>
      <BsFillInfoCircleFill className='w-14 h-14' fill='red' />
      {/* <h4 className='text-red-600 text-lg'>Logout</h4> */}
      <h2 className='font-bold mb-5 text-xl'>Are you want to Logout ?</h2>
      <div className='flex gap-3 w-full'>
        <Button className='w-full' onClick={cancel}>Cancel</Button>
        <Button
          fill
          className='w-full'
          onClick={() => {
            console.log('logout')
            // authServise.logout().then(() => {})
          }}>Logout</Button>
      </div>
      <Button fill
        className='w-full my-3'
        onClick={() => {
          console.log('logout all')
          authServise.logoutAll()
            .then(() => {
              dispatch(logout())
            }).catch((error) => {
              console.error('LogOut :: all logout :: ', error)
            })
        }}>Logout from all Device</Button>
    </div>
  )
}

export default Logout
