import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import menu_icon from '../assets/menu-svgrepo-com.svg'
import cross_icon from '../assets/cross_icon.svg'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        } return () => {
            document.body.style.overflow = 'auto'
        }
    }, [mobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10 '>
            <div className='flex items-center justify-between'>
                <a href="#" className="flex items-center gap-1 px-6 py-4 lg:left-20 lg:top-6 relative">
                    <img src={logo} alt="Logo" className="max-w-9 " />
                    <span className="text-2xl font-bold">uifry</span>
                    <span className="text-sm font-bold text-[7px]">TM</span>
                </a>
                <ul className='hidden md:flex gap-7 absolute top-12 left-60 font-medium sm:w-auto md:w-auto lg:w-auto xl:w-auto md:mx-auto'>
                    <a href='' className='text-[#FF5555]'>Home</a>
                    <a href='#About Us' className='hover:text-red-500 cursor-pointer transition duration-300'>About Us</a>
                    <a href='#Pricing' className='hover:text-red-500 cursor-pointer transition duration-300'>Pricing</a>
                    <a href='#Features' className='hover:text-red-500 cursor-pointer transition duration-300'>Features</a>
                </ul>

                <a href='https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080'
                    target='_blank'
                    className='bg-black  hidden md:flex absolute top-10 right-30 text-white rounded-sm text-sm px-8 py-2 cursor-pointer hover:bg-transparent hover:text-black transition border border-black'>
                    Download
                </a>
                <img onClick={() => setMobileMenu(true)} src={menu_icon} className='md:hidden w-5 relative right-5 cursor-pointer ' alt='' />
            </div>

            {/* mobile view */}

            <div className={`md:hidden ${mobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <a href="#" className="flex items-center gap-1 px-6 py-4 justify-start sm:justify-center">
                    <img src={logo} alt="Logo" className="max-w-9 " />
                    <span className="text-2xl font-bold">uifry</span>
                    <span className="text-sm font-bold text-[7px]">TM</span>
                    <img onClick={() => setMobileMenu(false)} src={cross_icon} className='w-5 relative left-45' alt='' />
                </a>
                <ul className='flex flex-col items-start gap-2 mt-2 px-5 text-lg font-medium'>
                    <a onClick={() => setMobileMenu(false)} href='#Header' className='px-4 py-3 rounded-full inline-block'>Home</a>
                    <a onClick={() => setMobileMenu(false)} href='#About Us' className='px-4 py-3 rounded-full inline-block'>About Us</a>
                    <a onClick={() => setMobileMenu(false)} href='#Pricing' className='px-4 py-3 rounded-full inline-block'>Pricing</a>
                    <a onClick={() => setMobileMenu(false)} href='#Features' className='px-4 py-3 rounded-full inline-block'>Features</a>
                    <a onClick={() => setMobileMenu(false)}
                        href='https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080'
                        className='px-6 py-3 inline-block relative left-3 text-black rounded-sm text-sm cursor-pointer hover:bg-transparent hover:text-black transition border border-black'>
                        Download
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
