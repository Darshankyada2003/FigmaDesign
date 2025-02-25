import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import iphon_features from '../assets/iphon_features.svg'
import icon_6 from '../assets/icon_6.svg'
import star from '../assets/star.svg'
import star2 from '../assets/star2.svg'
import CreditCard from '../assets/CreditCard.svg'
import { motion } from "framer-motion";


const Customizable = () => {
  return (
    <div className='sm:pt-0 sm:pb-0 pb-30 pt-10' id=''>
      {/* Right section */}
      <div className='relative sm:-top-20 -top-50 '>
        <img src={star} alt='' className='absolute left-140 w-7 top-0 hidden sm:flex' />
        <div>
          <img src={orange_color} alt='' className='px-10 py-10 w-150' />
        </div>
        <div className='-mt-120 px-25 '>
          <img src={circle_2} alt='' className='sm:w-1/2 sm:max-w-sm relative sm:top-0 top-60' />
          <img src={iphon_features} alt='' className='relative sm:w-70 w-70 sm:-mt-100 sm:z-10 sm:-right-25 -right-5 sm:top-0 top-10' />
          <motion.img src={CreditCard} alt='' className='absolute sm:top-40 sm:left-62 left-37 top-27 sm:w-40 w-20 z-10'
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
        </div>
      </div>

      {/* Left section */}
      <div className="relative sm:top-10 sm:-left-20 -top-30">
        <div className="flex justify-end px-10 absolute -top-120 -right-0">
          <div className="max-w-lg">
            <ul className="mt-4 space-y-4">
              <li>
                <h6 className="text-3xl font-bold flex items-start sm:top-0 top-25 relative sm:left-0 -left-3 whitespace-nowrap">
                  <img src={icon_6} className="w-8 h-8 mr-2 mt-1" alt="" />
                  Fully Customizable
                </h6>
                <p className="text-gray-600 mt-4 sm:top-0 top-90 relative">
                  Arou At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies.
                  In Ultrices Malesuada Elit Mauris Etiam Odio. Dute Tristique Lacus,
                  Et Blandit Viverro Nial Vollt. Sed Mattis Rhoncus, Diam Suspendisse
                  Sit Nung, Gravicia Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                  Suspendisse Aliquam.
                </p>
              </li>
            </ul>
          </div>
          <img src={star2} alt='' className='absolute top-70 left-110 w-10 hidden sm:flex' />
        </div>
      </div>
    </div >

  )
}

export default Customizable
