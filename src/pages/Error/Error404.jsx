import React from 'react'
import { Button, Container } from '../../style'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {SideImageContainer} from '../../component';

const Links = [
  {
    path: '/',
    title: 'Home',
    para: 'Read the latest posts on our blog.'
  },
  {
    path: '/',
    title: 'Blog',
    para: 'Read the latest posts on our blog.'
  },
  {
    path: '/',
    title: 'Chat to support',
    para: 'Our friendly team is here to help.'
  }
]


function Error404() {
  return (
    <section className='h-screen flex justify-center items-center'>
      {/* <SideImageContainer className={'lg:w-[85%]'}>
        <div>

          <div>
            <h3 className='text-lg md:text-2xl text-blue-600 font-semibold'>404 Error</h3>
            <h1
              className='text-2xl md:text-4xl font-semibold'
            >We can&apos;t find that page</h1>
            <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
            <div className='flex gap-2 items-center mt-5'>
              <Button className='flex gap-2 items-center'>
                <FaArrowLeft />
                <span>Go back</span>
              </Button>
              <Button fill className='flex gap-2 items-center'>
                Contact us
              </Button>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            {Links.map((link) => (
              <div className="">
                <h3 className='flex items-center gap-2 font-semibold'>
                  <span>{link.title}</span>
                  <FaArrowRight />
                </h3>
                <h5 className='text-zinc-700'>{link.para}</h5>
              </div>
            ))}
          </div>

        </div>
      </SideImageContainer> */}
      <Container className='lg:w-[80%] flex flex-col lg:flex-row lg:items-center lg:justify-around'>

        <div>

          <div>
            <h3 className='text-lg md:text-2xl text-blue-600 font-semibold'>404 Error</h3>
            <h1
              className='text-2xl md:text-4xl font-semibold'
            >We can&apos;t find that page</h1>
            <p>Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
            <div className='flex gap-2 items-center mt-5'>
              <Button className='flex gap-2 items-center'>
                <FaArrowLeft />
                <span>Go back</span>
              </Button>
              <Button fill className='flex gap-2 items-center'>
                Contact us
              </Button>
            </div>
          </div>
          
          <div className="mt-10 space-y-6">
            {Links.map((link) => (
              <div className="">
                <h3 className='flex items-center gap-2 font-semibold'>
                  <span>{link.title}</span>
                  <FaArrowRight />
                </h3>
                <h5 className='text-zinc-700'>{link.para}</h5>
              </div>
            ))}
          </div>

        </div>



        <div className='hidden lg:block'>
          <img
            src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Error 404"
            className='h-full w-full rounded-md object-cover'
          />
        </div>

      </Container>
    </section>
  )
}

export default Error404
