import React from 'react'
import { Logo } from '../index'
import { NavLink } from 'react-router-dom'
import { Container } from '../../style'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterLinks = [
  { path: '/', name: 'Privacy Policy' },
  { path: '/', name: 'Terms of Service' },
  { path: '/', name: 'Return Policy' },
  { path: '/', name: 'Contact Us' },
]

const Footer = () => {
  return (
    <>
      <footer>
        <Container>

          <div className='flex gap-5 items-center justify-between'>
            <Logo />
            <div className='flex gap-5'>
              {FooterLinks.map((link, index) => (
                <NavLink key={link.path + index} to={link.path} >{link.name}</NavLink>
              ))}
            </div>
            <div className="flex gap-5 items-center">
              <FaFacebookF className='rounded-full' />
              <FaTwitter className='rounded-full' />
              <FaInstagram className='rounded-full' />
            </div>
          </div>

          <hr />
          <div className='text-center'>Copyright &copy;LordJayanta</div>
        </Container>
      </footer>
    </>
  )
}

export default Footer
