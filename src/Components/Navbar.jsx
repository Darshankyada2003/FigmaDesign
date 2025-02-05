import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className=''>
                <div className='absolute -left-3'>
                    <img src={logo} alt='' className='max-w-8 absolute top-10 left-30' />
                    <p className='text-2xl font-bold absolute top-10 left-38'>uifry</p>
                    <p className='text-[6px] font-bold absolute top-10 left-50'>TM</p>
                </div>
                <ul className='flex gap-7 absolute top-12 left-60 font-medium sm:w-auto md:w-auto lg:w-auto xl:w-auto md:mx-auto'>
                    <a href='' className='text-[#FF5555]'>Home</a>
                    <a href='#About Us' className=''>About Us</a>
                    <a href='#Pricing' className=''>Pricing</a>
                    <a href='#Features' className=''>Features</a>
                </ul>

                <a href='https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_IN&pli=1'
                    target='_blank'
                    className='bg-black absolute top-10 right-30 text-white rounded-sm text-sm px-8 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black'>Download</a>
            </div>
        </div>
    )
}

export default Navbar
