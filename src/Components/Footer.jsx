import React from 'react'
import logo from '../assets/logo.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'


const Footer = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <img src={logo} alt='' className='max-w-9' />
      <p className='relative text-2xl font-bold ml-9 -mt-8'>uifry</p>
      <p className='relative text-sm ml-23 -mt-7 font-bold text-[7px]'>TM</p>
      <div>
        <img src={mail} alt='' className='mt-7 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm'>Help@Frybix.com</p>
      </div>
      <div>
        <img src={call} alt='' className='mt-3 max-w-5 ml-1' />
        <p className='ml-8 -mt-5 text-sm'>+1234 456 678 89</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 ml-50 -mt-24'>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Links</p>
          <p>Home</p>
          <p>About Us</p>
          <p>Bookings</p>
          <p>Blog</p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Legal</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Product</p>
          <p>Take Tour</p>
          <p>Live Chat</p>
          <p>Reveiws</p>
        </div>
        <div className='space-y-2'>
          <p className='font-bold tracking-wide text-xl'>Newsletter</p>
          <p>Stay Up To Date</p>
          <p className='text-gray-400'>Your email</p>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Footer
