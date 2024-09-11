import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../component'

function Admin() {
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


