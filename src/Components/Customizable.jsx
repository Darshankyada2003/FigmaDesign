import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import iphon_features from '../assets/iphon_features.svg'
import icon_6 from '../assets/icon_6.svg'
import star from '../assets/star.svg'
import star2 from '../assets/star2.svg'
import CreditCard from '../assets/CreditCard.svg'

const Customizable = () => {
  return (
    <div className='' id=''>
      {/* Right section */}
      <div className='relative -top-20'>
      <img src={star} alt='' className='absolute left-140 w-7 top-0' />
        <div>
          <img src={orange_color} alt='' className='px-10 py-10 w-150' />
        </div>
        <div className='-mt-120 px-25'>
          <img src={circle_2} alt='' className='w-1/2 max-w-sm relative' />
          <img src={iphon_features} alt='' className='relative w-70 -mt-100 z-10 -right-25 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
          <img src={CreditCard} alt='' className='absolute top-40 left-62 w-40 z-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110' />
        </div>
      </div>

      {/* Left section */}
      <div className="relative top-10 -left-20">
        <div className="flex justify-end px-10 absolute -top-120 -right-0">
          <div className="max-w-lg">
            <ul className="mt-4 space-y-4">
              <li>
                <h6 className="text-3xl font-bold flex items-start">
                  <img src={icon_6} className="w-8 h-8 mr-2 mt-1" alt="" />
                  Fully Customizable
                </h6>
                <p className="text-gray-600 mt-4">
                  Arou At Dictum Sapien, Mollis. Vulputate Sit id Accumsan, Ultricies.
                  In Ultrices Malesuada Elit Mauris Etiam Odio. Dute Tristique Lacus,
                  Et Blandit Viverro Nial Vollt. Sed Mattis Rhoncus, Diam Suspendisse
                  Sit Nung, Gravicia Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
                  Suspendisse Aliquam.
                </p>
              </li>
            </ul>
          </div>
          <img src={star2} alt='' className='absolute top-70 left-110 w-10' />
        </div>
      </div>
    </div >

  )
}

export default Customizable
