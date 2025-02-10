import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className=''>
                <a href="#" className="">
                    <img src={logo} alt="Logo" className="max-w-9 absolute top-10 left-27" />
                    <span className="text-2xl font-bold absolute top-11 left-36">uifry</span>
                    <span className="text-sm font-bold text-[7px] absolute top-12 left-48">TM</span>
                </a>
                <ul className='flex gap-7 absolute top-12 left-60 font-medium sm:w-auto md:w-auto lg:w-auto xl:w-auto md:mx-auto'>
                    <a href='' className='text-[#FF5555]'>Home</a>
                    <a href='#About Us' className='hover:text-red-500 cursor-pointer transition duration-300'>About Us</a>
                    <a href='#Pricing' className='hover:text-red-500 cursor-pointer transition duration-300'>Pricing</a>
                    <a href='#Features' className='hover:text-red-500 cursor-pointer transition duration-300'>Features</a>
                </ul>

                <a href='https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080'
                    target='_blank'
                    className='bg-black absolute top-10 right-30 text-white rounded-sm text-sm px-8 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black'>Download</a>
            </div>
        </div>
    )
}

export default Navbar
