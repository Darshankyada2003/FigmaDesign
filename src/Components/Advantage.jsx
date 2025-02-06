import React from 'react'
import orange_color from '../assets/orange_color.svg'
import circle_2 from '../assets/circle_2.svg'
import i_phone_4 from '../assets/i_phone_4.svg'
import icon4 from '../assets/icon4.svg'
import star2 from '../assets/star2.svg'
import advantage_i_phone from '../assets/advantage_i_phone.svg'


const Advantage = () => {
  return (
    <div className='mb-20' id='Advantages'>
      <img src={star2} alt='' className='absolute right-0'/>
      {/* Right Section */}
      <div className="relative -top-20 -left-10">
        <img src={orange_color} alt="" className="w-120 relative -right-190 -bottom-10" />
        <div className="absolute -top-20 left-190 ">
          <img src={circle_2} alt="" className=" max-w-sm -bottom-40 relative" />
          <img src={i_phone_4} alt="" className="relative w-70 -mt-60 z-10 -right-25
          transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
          <img src={advantage_i_phone} alt="" className="w-40 h-40 relative -top-80 -right-45 z-20
          transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" />
        </div>
      </div>

      {/* left section */}
      <div className='relative top-20'>
        <div className="flex justify-start px-30 absolute left-10 -top-100">
          <div className="max-w-lg">
            <h5 className="text-red-500 text-sm font-semibold tracking-wider">ADVANTAGES</h5>
            <h2 className="text-3xl font-bold text-black mt-2">Why Chooes Uifry?</h2>

            <ul className="mt-4 space-y-4">
              <li>
                <h6 className="text-lg font-semibold flex items-start">
                  <img src={icon4} className='w-8 h-8 mr-2' />
                  Clever Notifications
                </h6>
                <p className="text-gray-600 -bottom-3 relative">
                  Arcu At Dictum Sapien, Mollis. Vulputate
                  Sit Id Accumsan, Ultricies. In Ultrices Malesuacia
                  Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit
                  Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc,
                  Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
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
