import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RiDashboardLine, RiDashboardHorizontalFill } from "react-icons/ri";
import { MdPostAdd, MdLogout } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Modal from '../../Modal'
import {Logout} from '../index';

const sideberItems = [
  {
    path: '/admin',
    name: 'Dashboard',
    icon: <RiDashboardLine className='w-[20px] h-[20px]' />
  },
  {
    path: '/admin/profile',
    name: 'Profile',
    icon: <CgProfile className='w-[20px] h-[20px]' />
  },
  {
    path: '/admin/AddPost',
    name: 'Add Post',
    icon: <MdPostAdd className='w-[20px] h-[20px]' />
  },
  {
    path: '/admin/AddPage',
    name: 'Add Page',
    icon: <IoIosAddCircle className='w-[20px] h-[20px]' />
  },
]

const Sidebar = () => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(true)
  return (
    <>
      <Modal
        onOpen={isOpenLogoutModal}
        onClose={() => setIsOpenLogoutModal(false)}
        height='fit-content'
        children={<Logout/>}
      />
      <div className='bg-[#f7f7f8] h-screen p-5'>
        <div className="side-header mb-7">
          <img
            src="./logo.svg"
            alt="simple_logo"
            className='w-20 mt-4'
          />
        </div>

        {sideberItems.map((item, index) => (
          <NavLink
            key={index + item.path}
            to={item.path}
            end={item.path === '/admin'}  // Ensure 'end' is used for the dashboard route
            className={({ isActive }) =>
              `flex gap-3 items-center w-full rounded-sm text-sm hover:shadow-md hover:bg-white hover:text-blue-500 p-3 ${isActive ? 'font-bold text-blue-500' : 'text-zinc-600'}`
            }
          >
            {item.icon}
            <span className='hidden lg:block'>{item.name}</span>
          </NavLink>
        ))}

        <button
        onClick={() => setIsOpenLogoutModal(true)}
          className={`flex gap-3 w-full items-center rounded-sm text-sm hover:shadow-md hover:text-white hover:bg-red-500 p-3 text-zinc-600 `}>
          <MdLogout className='w-[20px] h-[20px]' />
          <span className='hidden lg:block'>Logout</span>
        </button>
      </div>
    </>
  )
}

export default Sidebar
