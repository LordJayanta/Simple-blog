import React from 'react'
import { Container, Button } from '../../component';
import { IoSettingsOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { NavLink } from 'react-router-dom';


// https://readymadeui.com/tailwind-blocks/banner

const About = () => {
  const aboutIconCss = `w-10 h-10 p-2 text-blue-500 bg-white rounded-md`;
  const serviceCard = [
    {
      icon: <IoSettingsOutline className={aboutIconCss} />,
      title: 'Customization',
      description: 'Tailor our product to suit your needs.',
      btnTxt: 'Learn more',
      path: '/'
    },
    {
      icon: <BiSupport className={aboutIconCss} />,
      title: 'Support',
      description: '24/7 customer support for all your inquiries.',
      btnTxt: 'Learn more',
      path: '/'
    },
    {
      icon: <GrDocumentPerformance className={aboutIconCss} />,
      title: 'Performance',
      description: 'Experience blazing-fast performance with our product.',
      btnTxt: 'Learn more',
      path: '/'
    },
    {
      icon: <MdOutlineSecurity className={aboutIconCss} />,
      title: 'Security',
      description: 'Your data is protected by the latest security measures.',
      btnTxt: 'Learn more',
      path: '/'
    }
  ]
  return (
    <>
      <section>
        <div className='grid lg:grid-cols-2 items-center lg:gap-y-6 bg-blue-500'>
          <div className='max-lg:order-1 max-lg:text-center sm:p-12 p-4'>
            <h1 className='lg:text-5xl text-3xl font-bold'>Elevate Your Experience with Modern Elegance</h1>
            <h3 className='text-gray-800 mt-6 text-base leading-relaxed'>Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</h3>
            <Button className='mt-12'>Get Started</Button>
          </div>
          <div>
            <img src="https://readymadeui.com/team-image.webp" alt="" />
          </div>
        </div>
        <Container className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-4 my-12'>
          {serviceCard.map((item) => (
            <div className='bg-zinc-200  p-5 flex flex-col gap-3 justify-between rounded-lg'>
              {item.icon}
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h4 className='text-sm'>{item.description}</h4>
              <NavLink to={item.path} className={`font-bold text-blue-500`}>{item.btnTxt}</NavLink>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}

export default About
