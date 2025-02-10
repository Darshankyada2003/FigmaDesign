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
      <div>
        <p className='text-red-400 text-sm font-semibold tracking-wider'>FAQ</p>
        <h3 className='font-bold text-4xl'>Frequently Asked
          <span className='block'>Question</span>
        </h3>
        <img src={star2} alt='' className='absolute top-20 left-145 w-11' />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-sm px-5 py-5
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
        <div className="bg-white text-black p-4
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-white text-black p-4
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md border
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-red-400 text-white p-4 rounded-xl shadow-md
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>

        <div className="bg-white text-black p-4
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <h2 className="text-xl font-bold mb-2">The Best Financial Accounting App Ever!</h2>
          <p className="text-sm">
            "Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In
            Ultrices Malesuada Elit Mauris."
          </p>
        </div>
      </div>
      <div>
        <img src={red_color} alt='' className='w-80 -ml-40' />
      </div>
      <img src={star2} alt='' className='absolute top-150 -right-20 w-11' />
      <div className='bg-black px-10 py-50 rounded-sm -mt-37 relative z-10'>
        <div className='relative'>
          <img src={circleleft} alt='' className='absolute w-80 -top-15 -left-10' />
          <img src={circleright} alt='' className='absolute w-60 -top-50 left-180' />
          <img src={iphone123} alt='' className='absolute -top-40 left-150 w-90 z-10' />
          <img src={star1black} alt='' className='z-10 absolute -top-40 left-160 w-12' />
          <img src={star2black} alt='' className='z-10 absolute top-22 left-100 w-10' />
          <div className='relative'>
            <img src={color123} alt='' className='absolute left-190 -top-20 w-50' />
          </div>
        </div>
      </div>
      <div className='relative text-white'>
        <h2 className='z-10 absolute -top-72 left-20 text-white font-[1000] text-4xl'>Ready To Get Started?</h2>
        <p className='z-10 absolute -top-58 left-20 text-gray-300 font-[10]'>Risus Habitant Leol Egestas Mauris Diam Eget Morbi Tempus
          <br />Vulputate.</p>
        <motion.div className="absolute -top-42 left-20 flex items-center gap-2 z-10 bg-white px-6 py-3 rounded-sm cursor-pointer"
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
