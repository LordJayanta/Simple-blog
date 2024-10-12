import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, Container } from '../../component'

function Admin() {
  return (
    <div className='flex'>
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <Container className='p-8'>
        <Outlet />
      </Container>
    </div>
  )
}

export default Admin


