import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import iphon_features from '../assets/iphon_features.svg'
import icon_6 from '../assets/icon_6.svg'

const Customizable = () => {
  return (
    <div className='' id=''>

      {/* Right section */}
      <div className='relative -top-20'>
        <div>
          <img src={orange_color} alt='' className='px-10 py-10 w-150' />
        </div>
        <div className='-mt-120 px-25'>
          <img src={circle_2} alt='' className='w-1/2 max-w-sm relative' />
          <img src={iphon_features} alt='' className='relative w-70 -mt-100 z-10 -right-25' />
        </div>
      </div>

      {/* Left section */}
      <div className="relative">
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
        </div>
      </div>

    </div >

  )
}

export default Customizable
