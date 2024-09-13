import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../component'

import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/authSlice'
import config from '../../config/config';
import { Client, Account } from 'appwrite';
const client = new Client().setEndpoint(config.serverUrl).setProject(config.serverProjectID)
const account = new Account(client)

function Admin() {


  const dispatch = useDispatch()
  const userdata = useSelector(state => state.auth)
  console.log(userdata);

  useEffect(() => {
    const session = account.getSession('current')
    .then((sec) => {
      console.log(sec)
      dispatch(login(sec))
    })
    .then((err) => {
      console.log(err)
    })
  }, [])
  

  return (
    <div className='flex'>
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin


