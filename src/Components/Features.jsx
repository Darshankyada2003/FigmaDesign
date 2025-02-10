import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import iphon_features from '../assets/iphon_features.svg'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import color1 from '../assets/color1.svg'
import star from '../assets/star.svg'
import { motion } from "framer-motion"

const Features = () => {

  return (
    <div className='' id='Features'>
      {/* left section */}
      <div className='relative mb-16 top-10'>
        <div className='max-w-sm ml-10'>
          <img src={orange_color} alt='' className='px-10 py-10' />
        </div>
        <div className='-mt-70 px-25'>
          <img src={circle_2} alt='' className='w-1/2 max-w-sm relative' />
          <motion.img src={iphon_features} alt='' className='relative w-70 -mt-100 z-10 -right-25'
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} />
        </div>
        <img src={star} alt='' className='absolute top-20 left-10 w-7' />
      </div>
      {/* right section */}
      <div className='relative mr-15'>
        <div className="flex justify-end px-10 absolute -top-110 -right-5">
          <div className="max-w-lg">
            <h5 className="text-red-500 text-sm font-semibold tracking-wider">FEATURES</h5>
            <h2 className="text-3xl font-bold text-black mt-2">Uifry Premium</h2>

            <ul className="mt-4 space-y-4">
              <li>
                <h6 className="text-lg font-semibold flex items-start">
                  <img src={icon1} className='w-4 h-4 mr-2 mt-1' />
                  Budgeting Intervals
                </h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
              <li>
                <h6 className="text-lg font-semibold flex items-start">
                  <img src={icon2} className='w-4 h-4 mr-2 mt-1' />
                  Budgeting Intervals</h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
              <li>
                <h6 className="text-lg font-semibold flex items-center">
                  <img src={icon3} className='w-3 h-3 mr-2 mt-1' />
                  Budgeting Intervals</h6>
                <p className="text-gray-600">
                  Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu
                  Adipiscing Sociis Arcu Lorem Porttitor.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <img src={color1} alt='' className='w-50 absolute -top-110 -right-15' />
      </div>
    </div >
  )
}

export default Features
