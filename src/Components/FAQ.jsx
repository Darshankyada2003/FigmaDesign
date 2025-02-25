import React from 'react'
import red_color from '../assets/red_color.svg'
import circleleft from '../assets/circleleft.svg'
import circleright from '../assets/circleright.svg'
import iphone123 from '../assets/iphone123.svg'
import color123 from '../assets/color123.svg'
import appleicon from '../assets/appleicon.svg'
import star1black from '../assets/star1black.svg'
import star2black from '../assets/star2black.svg'
import star2 from '../assets/star2.svg'
import { motion } from 'framer-motion'

const FAQ = () => {
  return (
    <div className='relative p-8 ml-25 mr-25'>
      <div className='sm:mt-0 mt-15 sm:-mr-0 -mr-12'>
        <p className='text-red-400 text-sm font-semibold tracking-wider sm:left-0 left-7 relative'>FAQ</p>
        <h3 className='font-bold text-xl sm:text-4xl whitespace-nowrap sm:left-0 -left-18 relative'>Frequently Asked <span className='inline sm:block'>Question</span>
        </h3>
        <img src={star2} alt='' className='absolute top-20 left-145 w-11 hidden sm:flex' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-6 mt-6 sm:left-0 -left-2 relative">

        <div className="bg-red-400 text-white sm:px-5 sm:py-4 px-5 py-5 rounded-xl shadow-md
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
        <div className="bg-white text-black p-4 rounded-xl shadow-md
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-5 sm:py-4 px-5 py-5 sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="sm:bg-white bg-red-400 sm:text-black text-white p-4 rounded-xl shadow-md
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-5 sm:py-4 px-5 py-5 sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="sm:bg-red-400 sm:text-white p-4 rounded-xl shadow-md  
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-5 sm:py-4 px-5 py-5 sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-5 sm:py-4 px-5 py-5 sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-white text-black p-4 rounded-xl shadow-md
        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-5 sm:py-4 px-5 py-5 sm:left-0 -left-25 relative
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="sm:text-xl text-[15px] font-bold mb-2 whitespace-nowrap">The Best Financial Accounting App Ever!</h2>
          <p className="sm:text-sm text-[10px]">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
      </div>
      <div>
        <img src={red_color} alt='' className='w-80 -ml-40' />
      </div>
      <img src={star2} alt='' className='absolute top-150 -right-20 w-11' />
      <div className='sm:bg-black px-10 py-50 rounded-sm -mt-37 relative z-10'>
        <div className='relative'>
          <img src={circleleft} alt='' className='absolute w-80 -top-15 -left-10 hidden sm:flex' />
          <img src={circleright} alt='' className='absolute w-60 -top-50 left-180 hidden sm:flex' />
          <img src={iphone123} alt='' className='absolute -top-40 left-150 w-90 z-10 hidden sm:flex' />
          <img src={star1black} alt='' className='z-10 absolute -top-40 left-160 w-12 hidden sm:flex' />
          <img src={star2black} alt='' className='z-10 absolute top-22 left-100 w-10 hidden sm:flex' />
          <div className='relative'>
            <img src={color123} alt='' className='absolute left-190 -top-20 w-50' />
          </div>
        </div>
      </div>
      <div className='relative text-black sm:text-white'>
        <h2 className='z-10 absolute sm:-top-72 sm:left-20
          bottom-55 -left-18 whitespace-nowrap
         text-black sm:text-white sm:font-[1000] sm:text-4xl text-2xl font-bold'>
          Ready To Get Started?
        </h2>
        <p className='sm:z-10 absolute sm:-top-58 sm:left-20 -left-17 sm:text-gray-300 text-black sm:font-[10] w-[250%] sm:w-auto
        text-[15px] -top-50'>
          Risus Habitant Leol Egestas Mauris Diam Eget Morbi Tempus <span className='sm:block inline'>Vulputate.</span>
        </p>
        <motion.div className="absolute sm:-top-42 sm:left-20 flex items-center gap-2 z-10
        py-3 px-8 -top-30 -left-7 whitespace-nowrap
         bg-white sm:px-6 sm:py-3 rounded-sm cursor-pointer border border-black"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <a
            href="https://apps.apple.com/in/app/cred-credit-cards-payments/id1428580080"
            target="_blank"
            className="">
            <button className='text-black text-sm font-medium'>Download App</button>
          </a>
          <img src={appleicon} alt="Apple Icon" className="w-5" />
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
