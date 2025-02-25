import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import i_phone_4 from '../assets/i_phone_4.svg'
import icon4 from '../assets/icon4.svg'
import star2 from '../assets/star2.svg'
import advantage_i_phone from '../assets/advantage_i_phone.svg'
import { motion } from "framer-motion"


const Advantage = () => {
  return (
    <div className='mb-20' id='Advantages'>
      <img src={star2} alt='' className='absolute right-0 hidden sm:flex' />
      {/* Right Section */}
      <div className="relative sm:-top-20 sm:-left-10 -left-150 -top-130 sm:scale-100 scale-75 ">
        <img src={orange_color} alt="" className="w-120 relative -right-190 -bottom-10" />
        <div className="absolute -top-20 left-190 ">
          <img src={circle_2} alt="" className=" max-w-sm -bottom-40 relative" />
          <img src={i_phone_4} alt="" className="relative w-70 -mt-60 z-10 -right-25" />
          <motion.img src={advantage_i_phone} alt="" className="w-40 h-40 relative -top-80 -right-45 z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
        </div>
      </div>

      {/* left section */}
      <div className='relative top-20'>
        <div className="flex justify-start sm:px-30 absolute left-10 -top-100">
          <div className="max-w-lg">
            <h5 className="text-red-500 text-sm font-semibold tracking-wider sm:top-0 relative -top-120">ADVANTAGES</h5>
            <h2 className="text-3xl font-bold text-black mt-2 sm:top-0 relative -top-120">Why Chooes Uifry?</h2>

            <ul className="sm:mt-4 sm:space-y-4">
              <li>
                <h6 className="text-lg font-semibold flex items-star sm:top-0 relative -top-35">
                  <img src={icon4} className='w-8 h-8 mr-2' />
                  Clever Notifications
                </h6>
                <p className="text-gray-600 sm:-bottom-3 relative sm:top-0 -top-30">
                  Arou At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies.
                  In Ultrices Malesuada Elit Mauris Etiam Odio. Dute Tristique Lacus,
                  Et Blandit Viverro Nial Vollt. Sed Mattis Rhoncus, Diam Suspendisse
                  Sit Nung, Gravicia Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                  Suspendisse Aliquam.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advantage
