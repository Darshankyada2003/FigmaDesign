import React from 'react'
import logo from '../assets/logo.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'


const Footer = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <a href="#" className="">
        <img src={logo} alt="Logo" className="max-w-9 absolute top-3" />
        <span className="text-2xl font-bold absolute top-4 left-17">uifry</span>
        <span className="text-sm font-bold text-[7px] absolute top-5 left-30">TM</span>
      </a>
      <div>
        <img src={mail} alt='' className='mt-7 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm hover:text-red-500 cursor-pointer transition duration-300'>Help@Frybix.com</p>
      </div>
      <div>
        <img src={call} alt='' className='mt-3 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm  hover:text-red-500 cursor-pointer transition duration-300'>+1234 456 678 89</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 ml-50 -mt-24'>
        <div className='space-y-2'>
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
        <div className='space-y-2'>
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
        <div className='space-y-2'>
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
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Newsletter</p>
          <p>
            <a href='#' className='hover:text-red-500 cursor-pointer transition duration-300'>Stay Up To Date</a>
          </p>
        </div>
      </div>
      <div className='absolute top-30 left-210'>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          className="mr-4 p-2 rounded-sm hover:text-red-500 cursor-pointer transition duration-300 border border-none"
        />
        <a
          href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_IN&pli=1"
          target="_blank"
          className="bg-black text-white absolute top-1.4 left-32 rounded-sm text-sm px-5 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black"
        >
          Subscribe
        </a>
      </div>
      <div className='text-center py-6 mt-10'>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-black to-transparent"></div>
        <p className='mt-8 text-sm text-black font-medium'>
          Copyright 2022 Uifry.Com All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
