import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='mx-auto py-10 px-20 container min-h-screen w-full'>
                <img src={logo} alt='' className='max-w-8' />

                <p className='relative -top-8 -right-8 text-2xl font-bold'>uifry</p>
                <p className='px-24 relative -top-15 -left-2 text-[6px] font-bold'>TM</p>

                <ul className='flex relative gap-7 px-40 -top-17 font-medium sm:w-auto md:w-auto lg:w-auto xl:w-auto md:mx-auto'>
                    <a href='' className='text-[#FF5555]'>Home</a>
                    <a href='#About Us' className=''>About Us</a>
                    <a href='#Pricing' className=''>Pricing</a>
                    <a href='#Features' className=''>Features</a>
                </ul>

                <button className='bg-black text-white -top-23 -right-240 rounded-sm text-sm px-8 py-2 relative'>Download</button>
            </div>
        </div>
    )
}

export default Navbar
