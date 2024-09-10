import React from 'react'
import { Button, Container } from '../../style'
import { Logo } from '../index'
import { NavLink } from 'react-router-dom'

const HeaderLinks = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
]

function Header() {
  return (
    <header className='h-[10vh]'>
      <Container className='flex items-center justify-between py-2'>
        <Logo className='text-2xl' />

        <div className='flex gap-4
      5'>
          {HeaderLinks.map((link, index) => (
            <NavLink
              key={index + link.path}
              to={link.path}
              className={({ isActive }) => isActive ? 'font-bold text-blue-500' : null}
            >{link.name}</NavLink>
          ))}
        </div>

        <div className='flex gap-2'>
          <Button
            rounded='rounded-full'
            to={'/signup'}
          >SignUp</Button>
          <Button
            fill
            rounded='rounded-full'
            to={'/login'}
          >Login</Button>
        </div>
      </Container>
    </header>
  )
}

export default Header
