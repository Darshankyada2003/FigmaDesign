import React from 'react'
import logo from '../assets/logo.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'


const Footer = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <a href="#" className="flex items-center gap-1 sm:relative sm:top-3 sm:-left-0 relative -left-0 -top-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-9 sm:w-auto" />

        {/* Branding */}
        <div className="flex items-baseline">
          <span className="text-2xl font-bold">uifry</span>
          <span className="text-[7px] font-bold ml-1">TM</span>
        </div>
      </a>
      <div className='sm:left-0 sm:top-0 relative -top-14 -left-5'>
        <img src={mail} alt='' className='mt-7 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm hover:text-red-500 cursor-pointer transition duration-300'>Help@Frybix.com</p>
      </div>
      <div className='sm:left-0 sm:top-0 relative -top-14 -left-5'>
        <img src={call} alt='' className='mt-3 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm  hover:text-red-500 cursor-pointer transition duration-300 whitespace-nowrap'>+1234 456 678 89</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-2 gap-2 sm:ml-50 sm:-mt-24 mt-0'>
        <div className='space-y-2 sm:left-0 relative -left-15 '>
          <p className='font-bold tracking-wide text-xl'>Links</p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300' >Home</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>About Us</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Bookings</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Blog</a>
          </p>
        </div>
        <div className='space-y-2 sm:left-0 relative left-15'>
          <p className='font-bold tracking-wide text-xl'>Legal</p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Terms Of Use</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Privacy Policy</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Cookie Policy</a>
          </p>
        </div>
        <div className='space-y-2 sm:left-0 relative -left-15'>
          <p className='font-bold tracking-wide text-xl'>Product</p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Take Tour</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Live Chat</a>
          </p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Reveiws</a>
          </p>
        </div>
        <div className='space-y-2 sm:left-0 relative left-15'>
          <p className='font-bold tracking-wide text-xl'>Newsletter</p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Stay Up To Date</a>
          </p>
        </div>
      </div>
      <div className='absolute sm:top-30 sm:left-210 bottom-30 -left-8'>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          className="mr-4 p-2 rounded-sm hover:text-red-500 cursor-pointer transition duration-300 border border-none"
        />
        <a
          href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_IN&pli=1"
          target="_blank"
          className="bg-black text-white absolute top-1.4 left-32 rounded-sm text-sm sm:px-5 sm:py-2 px-7 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black"
        >
          Subscribe
        </a>
      </div>
      <div className='text-center py-6 mt-10 sm:bottom-10 -bottom-5 relative '>
        <div className="sm:h-[2px] h-[2px] sm:w-full sm:left-0 -left-20 relative w-70 bg-gradient-to-r from-transparent via-black to-transparent"></div>
        <p className='mt-8 text-sm text-black font-medium whitespace-nowrap text-center sm:right-0 right-20 relative'>
          Copyright 2022 Uifry.Com All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
