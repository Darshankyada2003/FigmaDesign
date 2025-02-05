import React from 'react'
import logo from '../assets/logo.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'


const Footer = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <img src={logo} alt='' className='max-w-9' />
      <a href='#' className='text-2xl font-bold absolute top-8 left-17'>uifry</a>
      <a href='#' className='text-sm font-bold text-[7px] absolute top-9 left-30'>TM</a>
      <div>
        <img src={mail} alt='' className='mt-7 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm'>Help@Frybix.com</p>
      </div>
      <div>
        <img src={call} alt='' className='mt-3 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm'>+1234 456 678 89</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2 ml-50 -mt-24'>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Links</p>
          <p>
            <a href='#' >Home</a>
          </p>
          <p>
            <a href='#' >About Us</a>
          </p>
          <p>
            <a href='#' >Bookings</a>
          </p>
          <p>
            <a href='#' >Blog</a>
          </p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Legal</p>
          <p>
            <a href='#'>Terms Of Use</a>
          </p>
          <p>
            <a href='#'>Privacy Policy</a>
          </p>
          <p>
            <a href='#' >Cookie Policy</a>
          </p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Product</p>
          <p>
            <a href='#'>Take Tour</a>
          </p>
          <p>
            <a href='#'>Live Chat</a>
          </p>
          <p>
            <a href='#'>Reveiws</a>
          </p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Newsletter</p>
          <p>
            <a href='#'>Stay Up To Date</a>
          </p>
        </div>
      </div>
      <div className='absolute top-30 left-210'>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          className="mr-4 p-2 rounded-sm"
        />
        <a
          href="https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_IN&pli=1"
          target="_blank"
          className="bg-black text-white absolute top-0.5 left-32 rounded-sm text-sm px-5 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black"
        >
          Subscribe
        </a>
      </div>
    </div>
  )
}

export default Footer
